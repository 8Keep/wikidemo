For each viewport the rendering happens as follows:

-   For each processor call preFrame

-   Dispatch each geometry in a corresponding renderQueue (one for each
    Bucket) and build shadow queues

-   For each processor call postQueues

-   Rendering OpaqueBucket with object sorted front to back. (In order
    to minimize overdraw)

-   Rendering SkyBucket with depth forced to 1.0. this means every
    object of this bucket will be far away and behind everything

-   Rendering TransparentBucket with object sorted back to front. (So
    transparent objects can be seen correctly through each other)

-   For each processor call postFrame

-   Rendering TranslucentBucket with objects sorted back to front

The translucent bucket is rendered at the end. That's where you put
transparent object that you don't want to be affected by post processing
( shadows or what ever). Self-light-emitting particle emitters (such as
a fire) are a good example.

Post processors are not applied to this bucket with one exception : the
FilterPostProcessor.

The filter post processor hijacks the rendering process and renders a
full screen quad with the texture of the scene applied on it.

Once it's done the depth buffer is 0, so it's impossible to render a
queue over it with proper depth test so if you use a FilterPostProcessor
you have to add at the end of your filter stack the
TranslucentBucketFilter. It will handle the translucent bucket rendering
instead of the RenderManager. (Of course the correct depth information
is passed to the filter).

The nice side effect of this is that if you want to apply a post filter
to your translucent bucket (like bloom for example) you can just push up
the translucent bucket filter in the filter stack.
