Relevant forum topics:

<http://hub.jmonkeyengine.org/t/ive-made-a-movieappstate-so-you-dont-have-to/31673>

<http://hub.jmonkeyengine.org/t/news-about-playing-videos-on-jme/30084/5>

[YUNPM - a Java Media
Player](http://www.java-gaming.org/topics/java-media-player/27100/view.html)
(java-gaming.org)

[GstLWJGL](http://www.java-gaming.org/topics/gstlwjgl-yet-another-media-player/27146/view.html)
(java-gaming.org)

[GL Media
Player](http://jogamp.org/deployment/jogamp-next/javadoc/jogl/javadoc/com/jogamp/opengl/util/av/package-summary.html)
(jogamp.org)

[Xuggler](http://www.xuggle.com/xuggler)

::: {.warning}
This API is deprecated.
:::

jMonkeyEngine supports Jheora Ogg video (`com.jme3.video`).

Full code sample here:
[TestVideoPlayer.java](http://code.google.com/p/jmonkeyengine/source/browse/trunk/engine/src/jheora/com/jme3/video/TestVideoPlayer.java)

You create either a file inputstream to load the video from your hard
drive:

```java
FileInputStream  fis = new FileInputStream("E:\\my_bunny.ogg");
```

Or you stream the video live from a web location:

```java
InputStream fis = new URL("http://server/my_video.ogg").openStream();
```

Setting the queued frames to a value value higher than 5
(`videoQueue = new VQueue(5);`) will make web streamed playback smoother
at the cost of memory. Here is an example of video streaming in context:

```java
    private void createVideo(){
        try {
            InputStream fis = new URL("http://mirrorblender.top-ix.org/peach/"+
            "bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg").openStream();
            videoQueue = new VQueue(5);               // streaming quality vs memory
            decoder = new AVThread(fis, videoQueue);
            videoThread = new Thread(decoder, "Jheora Video Decoder");
            videoThread.setDaemon(true);
            videoThread.start();
            masterClock = decoder.getMasterClock();
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
```

Use the simpleUpdate() method to play the audio:

```java
    @Override
    public void simpleUpdate(float tpf){
        if (source == null){
            if (decoder.getAudioStream() != null){
                source = new AudioNode(decoder.getAudioStream(), null);
                source.setPositional(false);
                source.setReverbEnabled(false);
                audioRenderer.playSource(source);
            }else{
                // uncomment this statement to be able to play videos
                // without audio.
                return;
            }
        }

        if (waitTime > 0){
            waitTime -= tpf;
            if (waitTime > 0)
                return;
            else{
                waitTime = 0;
                drawFrame(frameToDraw);
                frameToDraw = null;
            }
        }else{
            VFrame frame;
            try {
                frame = videoQueue.take();
            } catch (InterruptedException ex){
                stop();
                return;
            }
            if (frame.getTime() < lastFrameTime){
                videoQueue.returnFrame(frame);
                return;
            }

            if (frame.getTime() == -2){
                // end of stream
                System.out.println("End of stream");
                stop();
                return;
            }

            long AV_SYNC_THRESHOLD = 1 * Clock.MILLIS_TO_NANOS;

            long delay = frame.getTime() - lastFrameTime;
            long diff = frame.getTime() - masterClock.getTime();
            long syncThresh = delay > AV_SYNC_THRESHOLD ? delay : AV_SYNC_THRESHOLD;

            // if difference is more than 1 second, synchronize.
            if (Math.abs(diff) < Clock.SECONDS_TO_NANOS){
                if(diff <= -syncThresh) {
                  delay = 0;
                } else if(diff >= syncThresh) {
                  delay = 2 * delay;
                }
            }

            System.out.println("M: "+decoder.getSystemClock().getTimeSeconds()+
                               ", V: "+decoder.getVideoClock().getTimeSeconds()+
                               ", A: "+decoder.getAudioClock().getTimeSeconds());

            if (delay > 0){
                waitNanos(delay);
                drawFrame(frame);
            }else{
                videoQueue.returnFrame(frame);
                lastFrameTime = frame.getTime();
            }
        }
    }
```

Helper Methods:

```java
    private void drawFrame(VFrame frame){
        Image image = frame.getImage();
        frame.setImage(image);
        picture.setTexture(assetManager, frame, false);

        // note: this forces renderer to upload frame immediately,
        // since it is going to be returned to the video queue pool
        // it could be used again.
        renderer.setTexture(0, frame);
        videoQueue.returnFrame(frame);
        lastFrameTime = frame.getTime();
    }
```

```java
    private void waitNanos(long time){
        long millis = (long) (time / Clock.MILLIS_TO_NANOS);
        int nanos   = (int) (time - (millis * Clock.MILLIS_TO_NANOS));

        try {
            Thread.sleep(millis, nanos);
        }catch (InterruptedException ex){
            stop();
            return;
        }
    }
```
