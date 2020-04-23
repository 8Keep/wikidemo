(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{392:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(1),r=t(9),o=(t(0),t(441)),i={},c={id:"jme3/advanced/video",title:"video",description:"Relevant forum topics:",source:"@site/docs/jme3/advanced/video.md",permalink:"/wikidemo/docs/jme3/advanced/video",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/video.md"},l=[],m={rightToc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Relevant forum topics:"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://hub.jmonkeyengine.org/t/ive-made-a-movieappstate-so-you-dont-have-to/31673"}),"http://hub.jmonkeyengine.org/t/ive-made-a-movieappstate-so-you-dont-have-to/31673")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://hub.jmonkeyengine.org/t/news-about-playing-videos-on-jme/30084/5"}),"http://hub.jmonkeyengine.org/t/news-about-playing-videos-on-jme/30084/5")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.java-gaming.org/topics/java-media-player/27100/view.html"}),"YUNPM - a Java Media\nPlayer"),"\n(java-gaming.org)"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.java-gaming.org/topics/gstlwjgl-yet-another-media-player/27146/view.html"}),"GstLWJGL"),"\n(java-gaming.org)"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://jogamp.org/deployment/jogamp-next/javadoc/jogl/javadoc/com/jogamp/opengl/util/av/package-summary.html"}),"GL Media\nPlayer"),"\n(jogamp.org)"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.xuggle.com/xuggler"}),"Xuggler")),Object(o.b)("p",null,"::: {.warning}\nThis API is deprecated.\n:::"),Object(o.b)("p",null,"jMonkeyEngine supports Jheora Ogg video (",Object(o.b)("inlineCode",{parentName:"p"},"com.jme3.video"),")."),Object(o.b)("p",null,"Full code sample here:\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://code.google.com/p/jmonkeyengine/source/browse/trunk/engine/src/jheora/com/jme3/video/TestVideoPlayer.java"}),"TestVideoPlayer.java")),Object(o.b)("p",null,"You create either a file inputstream to load the video from your hard\ndrive:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'FileInputStream  fis = new FileInputStream("E:\\\\my_bunny.ogg");\n')),Object(o.b)("p",null,"Or you stream the video live from a web location:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'InputStream fis = new URL("http://server/my_video.ogg").openStream();\n')),Object(o.b)("p",null,"Setting the queued frames to a value value higher than 5\n(",Object(o.b)("inlineCode",{parentName:"p"},"videoQueue = new VQueue(5);"),") will make web streamed playback smoother\nat the cost of memory. Here is an example of video streaming in context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    private void createVideo(){\n        try {\n            InputStream fis = new URL("http://mirrorblender.top-ix.org/peach/"+\n            "bigbuckbunny_movies/big_buck_bunny_480p_stereo.ogg").openStream();\n            videoQueue = new VQueue(5);               // streaming quality vs memory\n            decoder = new AVThread(fis, videoQueue);\n            videoThread = new Thread(decoder, "Jheora Video Decoder");\n            videoThread.setDaemon(true);\n            videoThread.start();\n            masterClock = decoder.getMasterClock();\n        } catch (IOException ex) {\n            ex.printStackTrace();\n        }\n    }\n')),Object(o.b)("p",null,"Use the simpleUpdate() method to play the audio:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'    @Override\n    public void simpleUpdate(float tpf){\n        if (source == null){\n            if (decoder.getAudioStream() != null){\n                source = new AudioNode(decoder.getAudioStream(), null);\n                source.setPositional(false);\n                source.setReverbEnabled(false);\n                audioRenderer.playSource(source);\n            }else{\n                // uncomment this statement to be able to play videos\n                // without audio.\n                return;\n            }\n        }\n\n        if (waitTime > 0){\n            waitTime -= tpf;\n            if (waitTime > 0)\n                return;\n            else{\n                waitTime = 0;\n                drawFrame(frameToDraw);\n                frameToDraw = null;\n            }\n        }else{\n            VFrame frame;\n            try {\n                frame = videoQueue.take();\n            } catch (InterruptedException ex){\n                stop();\n                return;\n            }\n            if (frame.getTime() < lastFrameTime){\n                videoQueue.returnFrame(frame);\n                return;\n            }\n\n            if (frame.getTime() == -2){\n                // end of stream\n                System.out.println("End of stream");\n                stop();\n                return;\n            }\n\n            long AV_SYNC_THRESHOLD = 1 * Clock.MILLIS_TO_NANOS;\n\n            long delay = frame.getTime() - lastFrameTime;\n            long diff = frame.getTime() - masterClock.getTime();\n            long syncThresh = delay > AV_SYNC_THRESHOLD ? delay : AV_SYNC_THRESHOLD;\n\n            // if difference is more than 1 second, synchronize.\n            if (Math.abs(diff) < Clock.SECONDS_TO_NANOS){\n                if(diff <= -syncThresh) {\n                  delay = 0;\n                } else if(diff >= syncThresh) {\n                  delay = 2 * delay;\n                }\n            }\n\n            System.out.println("M: "+decoder.getSystemClock().getTimeSeconds()+\n                               ", V: "+decoder.getVideoClock().getTimeSeconds()+\n                               ", A: "+decoder.getAudioClock().getTimeSeconds());\n\n            if (delay > 0){\n                waitNanos(delay);\n                drawFrame(frame);\n            }else{\n                videoQueue.returnFrame(frame);\n                lastFrameTime = frame.getTime();\n            }\n        }\n    }\n')),Object(o.b)("p",null,"Helper Methods:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"    private void drawFrame(VFrame frame){\n        Image image = frame.getImage();\n        frame.setImage(image);\n        picture.setTexture(assetManager, frame, false);\n\n        // note: this forces renderer to upload frame immediately,\n        // since it is going to be returned to the video queue pool\n        // it could be used again.\n        renderer.setTexture(0, frame);\n        videoQueue.returnFrame(frame);\n        lastFrameTime = frame.getTime();\n    }\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),"    private void waitNanos(long time){\n        long millis = (long) (time / Clock.MILLIS_TO_NANOS);\n        int nanos   = (int) (time - (millis * Clock.MILLIS_TO_NANOS));\n\n        try {\n            Thread.sleep(millis, nanos);\n        }catch (InterruptedException ex){\n            stop();\n            return;\n        }\n    }\n")))}p.isMDXComponent=!0},441:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),p=function(e){var n=r.a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return r.a.createElement(m.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(t),s=a,b=u["".concat(i,".").concat(s)]||u[s]||d[s]||o;return t?r.a.createElement(b,c({ref:n},m,{components:t})):r.a.createElement(b,c({ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=t[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);