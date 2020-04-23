(window.webpackJsonp=window.webpackJsonp||[]).push([[202],{341:function(f,n,e){"use strict";e.r(n),e.d(n,"frontMatter",(function(){return r})),e.d(n,"metadata",(function(){return l})),e.d(n,"rightToc",(function(){return i})),e.d(n,"default",(function(){return c}));var t=e(1),o=e(9),a=(e(0),e(441)),r={},l={id:"jme3/advanced/audio_environment_presets",title:"audio_environment_presets",description:"Use these presets together with [Audio](../../jme3/advanced/audio)",source:"@site/docs/jme3/advanced/audio_environment_presets.md",permalink:"/wikidemo/docs/jme3/advanced/audio_environment_presets",editUrl:"https://github.com/8keep/wikidemo/edit/master/docs/jme3/advanced/audio_environment_presets.md"},i=[],m={rightToc:i};function c(f){var n=f.components,e=Object(o.a)(f,["components"]);return Object(a.b)("wrapper",Object(t.a)({},m,e,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use these presets together with ",Object(a.b)("a",Object(t.a)({parentName:"p"},{href:"../../jme3/advanced/audio"}),"Audio"),'\nNodes to create different "moods" for sounds. Environment effects make\nyour audio sound as if the listener were in various places that have\ndifferent types of echoes.'),Object(a.b)("p",null,"Usage:"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Environment Generic = new Environment(\n    new float[]{ 0, 7.5f, 1f, -1000, -100, 0, 1.49f, 0.83f, 1f, -2602,\n                 0.007f, 0f, 0f, 0f, 200, 0.011f, 0f, 0f, 0f, 0.250f,\n                 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\naudioRenderer.setEnvironment(myEnvironment);\n")),Object(a.b)("h1",{id:"castle"},"Castle"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"CastleSmallRoom    = new Environment ( new float[]{ 26, 8.3f, 0.890f, -1000, -800, -2000, 1.22f, 0.83f, 0.31f, -100, 0.022f, 0f, 0f, 0f, 600, 0.011f, 0f, 0f, 0f, 0.138f, 0.080f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleShortPassage = new Environment ( new float[]{ 26, 8.3f, 0.890f, -1000, -1000, -2000, 2.32f, 0.83f, 0.31f, -100, 0.007f, 0f, 0f, 0f, 200, 0.023f, 0f, 0f, 0f, 0.138f, 0.080f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleMediumroom   = new Environment ( new float[]{ 26, 8.3f, 0.930f, -1000, -1100, -2000, 2.04f, 0.83f, 0.46f, -400, 0.022f, 0f, 0f, 0f, 400, 0.011f, 0f, 0f, 0f, 0.155f, 0.030f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleLongpassage  = new Environment ( new float[]{ 26, 8.3f, 0.890f, -1000, -800, -2000, 3.42f, 0.83f, 0.31f, -100, 0.007f, 0f, 0f, 0f, 300, 0.023f, 0f, 0f, 0f, 0.138f, 0.080f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleLargeroom    = new Environment ( new float[]{ 26, 8.3f, 0.820f, -1000, -1100, -1800, 2.53f, 0.83f, 0.50f, -700, 0.034f, 0f, 0f, 0f, 200, 0.016f, 0f, 0f, 0f, 0.185f, 0.070f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleHall         = new Environment ( new float[]{ 26, 8.3f, 0.810f, -1000, -1100, -1500, 3.14f, 0.79f, 0.62f, -1500, 0.056f, 0f, 0f, 0f, 100, 0.024f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleCupboard     = new Environment ( new float[]{ 26, 8.3f, 0.890f, -1000, -1100, -2000, 0.67f, 0.87f, 0.31f, 300, 0.010f, 0f, 0f, 0f, 1100, 0.007f, 0f, 0f, 0f, 0.138f, 0.080f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\nCastleCourtyard    = new Environment ( new float[]{ 26, 8.3f, 0.420f, -1000, -700, -1400, 2.13f, 0.61f, 0.23f, -1300, 0.160f, 0f, 0f, 0f, -300, 0.036f, 0f, 0f, 0f, 0.250f, 0.370f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x1f} );\nCastleAlcove       = new Environment ( new float[]{ 26, 8.3f, 0.890f, -1000, -600, -2000, 1.64f, 0.87f, 0.31f, 00, 0.007f, 0f, 0f, 0f, 300, 0.034f, 0f, 0f, 0f, 0.138f, 0.080f, 0.250f, 0f, -5f, 5168.6f, 139.5f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"warehouse-factory"},"Warehouse, Factory"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"FactoryAlcove       = new Environment ( new float[]{ 26, 1.8f, 0.590f, -1200, -200, -600, 3.14f, 0.65f, 1.31f, 300, 0.010f, 0f, 0f, 0f, 000, 0.038f, 0f, 0f, 0f, 0.114f, 0.100f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryShortpassage = new Environment ( new float[]{ 26, 1.8f, 0.640f, -1200, -200, -600, 2.53f, 0.65f, 1.31f, 0, 0.010f, 0f, 0f, 0f, 200, 0.038f, 0f, 0f, 0f, 0.135f, 0.230f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} ) );\nFactoryMediumroom   = new Environment ( new float[]{ 26, 1.9f, 0.820f, -1200, -200, -600, 2.76f, 0.65f, 1.31f, -1100, 0.022f, 0f, 0f, 0f, 300, 0.023f, 0f, 0f, 0f, 0.174f, 0.070f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryLongpassage  = new Environment ( new float[]{ 26, 1.8f, 0.640f, -1200, -200, -600, 4.06f, 0.65f, 1.31f, 0, 0.020f, 0f, 0f, 0f, 200, 0.037f, 0f, 0f, 0f, 0.135f, 0.230f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryLargeroom    = new Environment ( new float[]{ 26, 1.9f, 0.750f, -1200, -300, -400, 4.24f, 0.51f, 1.31f, -1500, 0.039f, 0f, 0f, 0f, 100, 0.023f, 0f, 0f, 0f, 0.231f, 0.070f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryHall         = new Environment ( new float[]{ 26, 1.9f, 0.750f, -1000, -300, -400, 7.43f, 0.51f, 1.31f, -2400, 0.073f, 0f, 0f, 0f, -100, 0.027f, 0f, 0f, 0f, 0.250f, 0.070f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryCupboard     = new Environment ( new float[]{ 26, 1.7f, 0.630f, -1200, -200, -600, 0.49f, 0.65f, 1.31f, 200, 0.010f, 0f, 0f, 0f, 600, 0.032f, 0f, 0f, 0f, 0.107f, 0.070f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactoryCourtyard    = new Environment ( new float[]{ 26, 1.7f, 0.570f, -1000, -1000, -400, 2.32f, 0.29f, 0.56f, -1300, 0.140f, 0f, 0f, 0f, -800, 0.039f, 0f, 0f, 0f, 0.250f, 0.290f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\nFactorySmallroom    = new Environment ( new float[]{ 26, 1.8f, 0.820f, -1000, -200, -600, 1.72f, 0.65f, 1.31f, -300, 0.010f, 0f, 0f, 0f, 500, 0.024f, 0f, 0f, 0f, 0.119f, 0.070f, 0.250f, 0f, -5f, 3762.6f, 362.5f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"ice-palace"},"Ice Palace"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"IcepalaceAlcove       = new Environment ( new float[]{ 26, 2.7f, 0.840f, -1000, -500, -1100, 2.76f, 1.46f, 0.28f, 100, 0.010f, 0f, 0f, 0f, -100, 0.030f, 0f, 0f, 0f, 0.161f, 0.090f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceShortpassage = new Environment ( new float[]{ 26, 2.7f, 0.750f, -1000, -500, -1100, 1.79f, 1.46f, 0.28f, -600, 0.010f, 0f, 0f, 0f, 100, 0.019f, 0f, 0f, 0f, 0.177f, 0.090f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} ) );\nIcepalaceMediumroom   = new Environment ( new float[]{ 26, 2.7f, 0.870f, -1000, -500, -700, 2.22f, 1.53f, 0.32f, -800, 0.039f, 0f, 0f, 0f, 100, 0.027f, 0f, 0f, 0f, 0.186f, 0.120f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceLongpassage  = new Environment ( new float[]{ 26, 2.7f, 0.770f, -1000, -500, -800, 3.01f, 1.46f, 0.28f, -200, 0.012f, 0f, 0f, 0f, 200, 0.025f, 0f, 0f, 0f, 0.186f, 0.040f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceLargeroom    = new Environment ( new float[]{ 26, 2.9f, 0.810f, -1000, -500, -700, 3.14f, 1.53f, 0.32f, -1200, 0.039f, 0f, 0f, 0f, 000, 0.027f, 0f, 0f, 0f, 0.214f, 0.110f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceHall         = new Environment ( new float[]{ 26, 2.9f, 0.760f, -1000, -700, -500, 5.49f, 1.53f, 0.38f, -1900, 0.054f, 0f, 0f, 0f, -400, 0.052f, 0f, 0f, 0f, 0.226f, 0.110f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceCupboard     = new Environment ( new float[]{ 26, 2.7f, 0.830f, -1000, -600, -1300, 0.76f, 1.53f, 0.26f, 100, 0.012f, 0f, 0f, 0f, 600, 0.016f, 0f, 0f, 0f, 0.143f, 0.080f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceCourtyard    = new Environment ( new float[]{ 26, 2.9f, 0.590f, -1000, -1100, -1000, 2.04f, 1.20f, 0.38f, -1000, 0.173f, 0f, 0f, 0f, -1000, 0.043f, 0f, 0f, 0f, 0.235f, 0.480f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\nIcepalaceSmallroom    = new Environment ( new float[]{ 26, 2.7f, 0.840f, -1000, -500, -1100, 1.51f, 1.53f, 0.27f, -100, 0.010f, 0f, 0f, 0f, 300, 0.011f, 0f, 0f, 0f, 0.164f, 0.140f, 0.250f, 0f, -5f, 12428.5f, 99.6f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"space-station"},"Space Station"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"SpacestationAlcove       = new Environment ( new float[]{ 26, 1.5f, 0.780f, -1000, -300, -100, 1.16f, 0.81f, 0.55f, 300, 0.007f, 0f, 0f, 0f, 000, 0.018f, 0f, 0f, 0f, 0.192f, 0.210f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationMediumroom   = new Environment ( new float[]{ 26, 1.5f, 0.750f, -1000, -400, -100, 3.01f, 0.50f, 0.55f, -800, 0.034f, 0f, 0f, 0f, 100, 0.035f, 0f, 0f, 0f, 0.209f, 0.310f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationShortpassage = new Environment ( new float[]{ 26, 1.5f, 0.870f, -1000, -400, -100, 3.57f, 0.50f, 0.55f, 0, 0.012f, 0f, 0f, 0f, 100, 0.016f, 0f, 0f, 0f, 0.172f, 0.200f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationLongpassage  = new Environment ( new float[]{ 26, 1.9f, 0.820f, -1000, -400, -100, 4.62f, 0.62f, 0.55f, 0, 0.012f, 0f, 0f, 0f, 200, 0.031f, 0f, 0f, 0f, 0.250f, 0.230f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationLargeroom    = new Environment ( new float[]{ 26, 1.8f, 0.810f, -1000, -400, -100, 3.89f, 0.38f, 0.61f, -1000, 0.056f, 0f, 0f, 0f, -100, 0.035f, 0f, 0f, 0f, 0.233f, 0.280f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationHall         = new Environment ( new float[]{ 26, 1.9f, 0.870f, -1000, -400, -100, 7.11f, 0.38f, 0.61f, -1500, 0.100f, 0f, 0f, 0f, -400, 0.047f, 0f, 0f, 0f, 0.250f, 0.250f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationCupboard     = new Environment ( new float[]{ 26, 1.4f, 0.560f, -1000, -300, -100, 0.79f, 0.81f, 0.55f, 300, 0.007f, 0f, 0f, 0f, 500, 0.018f, 0f, 0f, 0f, 0.181f, 0.310f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\nSpacestationSmallroom    = new Environment ( new float[]{ 26, 1.5f, 0.700f, -1000, -300, -100, 1.72f, 0.82f, 0.55f, -200, 0.007f, 0f, 0f, 0f, 300, 0.013f, 0f, 0f, 0f, 0.188f, 0.260f, 0.250f, 0f, -5f, 3316.1f, 458.2f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"wooden-hut-or-ship"},"Wooden Hut or Ship"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"WoodenAlcove           = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -1800, -1000, 1.22f, 0.62f, 0.91f, 100, 0.012f, 0f, 0f, 0f, -300, 0.024f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenShortpassage     = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -1800, -1000, 1.75f, 0.50f, 0.87f, -100, 0.012f, 0f, 0f, 0f, -400, 0.024f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenMediumroom       = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -2000, -1100, 1.47f, 0.42f, 0.82f, -100, 0.049f, 0f, 0f, 0f, -100, 0.029f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenLongpassage      = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -2000, -1000, 1.99f, 0.40f, 0.79f, 000, 0.020f, 0f, 0f, 0f, -700, 0.036f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenLargeroom        = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -2100, -1100, 2.65f, 0.33f, 0.82f, -100, 0.066f, 0f, 0f, 0f, -200, 0.049f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenHall             = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -2200, -1100, 3.45f, 0.30f, 0.82f, -100, 0.088f, 0f, 0f, 0f, -200, 0.063f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenCupboard         = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -1700, -1000, 0.56f, 0.46f, 0.91f, 100, 0.012f, 0f, 0f, 0f, 100, 0.028f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenSmallroom        = new Environment ( new float[]{ 26, 7.5f, 1f, -1000, -1900, -1000, 0.79f, 0.32f, 0.87f, 00, 0.032f, 0f, 0f, 0f, -100, 0.029f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\nWoodenCourtyard        = new Environment ( new float[]{ 26, 7.5f, 0.650f, -1000, -2200, -1000, 1.79f, 0.35f, 0.79f, -500, 0.123f, 0f, 0f, 0f, -2000, 0.032f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 4705f, 99.6f, 0f, 0x3f} );\n")),Object(a.b)("h1",{id:"sport"},"Sport"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"SportEmptystadium      = new Environment ( new float[]{ 26, 7.2f, 1f, -1000, -700, -200, 6.26f, 0.51f, 1.10f, -2400, 0.183f, 0f, 0f, 0f, -800, 0.038f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x20} );\nSportSquashcourt       = new Environment ( new float[]{ 26, 7.5f, 0.750f, -1000, -1000, -200, 2.22f, 0.91f, 1.16f, -700, 0.007f, 0f, 0f, 0f, -200, 0.011f, 0f, 0f, 0f, 0.126f, 0.190f, 0.250f, 0f, -5f, 7176.9f, 211.2f, 0f, 0x20} );\nSportSmallswimmingpool = new Environment ( new float[]{ 26, 36.2f, 0.700f, -1000, -200, -100, 2.76f, 1.25f, 1.14f, -400, 0.020f, 0f, 0f, 0f, -200, 0.030f, 0f, 0f, 0f, 0.179f, 0.150f, 0.895f, 0.190f, -5f, 5000f, 250f, 0f, 0x0} );\nSportLargeswimmingpool = new Environment ( new float[]{ 26, 36.2f, 0.820f, -1000, -200, 0, 5.49f, 1.31f, 1.14f, -700, 0.039f, 0f, 0f, 0f, -600, 0.049f, 0f, 0f, 0f, 0.222f, 0.550f, 1.159f, 0.210f, -5f, 5000f, 250f, 0f, 0x0} );\nSportGymnasium         = new Environment ( new float[]{ 26, 7.5f, 0.810f, -1000, -700, -100, 3.14f, 1.06f, 1.35f, -800, 0.029f, 0f, 0f, 0f, -500, 0.045f, 0f, 0f, 0f, 0.146f, 0.140f, 0.250f, 0f, -5f, 7176.9f, 211.2f, 0f, 0x20} );\nSportFullstadium       = new Environment ( new float[]{ 26, 7.2f, 1f, -1000, -2300, -200, 5.25f, 0.17f, 0.80f, -2000, 0.188f, 0f, 0f, 0f, -1100, 0.038f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"pipes"},"Pipes"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Sewerpipe    = new Environment ( new float[]{ 21, 1.7f, 0.800f, -1000, -1000, 0, 2.81f, 0.14f, 1f, 429, 0.014f, 0f, 0f, 0f, 1023, 0.021f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nPipeSmall    = new Environment ( new float[]{ 26, 50.3f, 1f, -1000, -900, -1300, 5.04f, 0.10f, 0.10f, -600, 0.032f, 0f, 0f, 0f, 800, 0.015f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x3f} );\nPipeLongthin = new Environment ( new float[]{ 26, 1.6f, 0.910f, -1000, -700, -1100, 9.21f, 0.18f, 0.10f, -300, 0.010f, 0f, 0f, 0f, -300, 0.022f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x0} );\nPipeLarge    = new Environment ( new float[]{ 26, 50.3f, 1f, -1000, -900, -1300, 8.45f, 0.10f, 0.10f, -800, 0.046f, 0f, 0f, 0f, 400, 0.032f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x3f} );\nPipeResonant = new Environment ( new float[]{ 26, 1.3f, 0.910f, -1000, -700, -1100, 6.81f, 0.18f, 0.10f, -300, 0.010f, 0f, 0f, 0f, 00, 0.022f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x0} );\n")),Object(a.b)("h1",{id:"moods"},"Moods"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Heaven    = new Environment ( new float[]{ 26, 19.6f, 0.940f, -1000, -200, -700, 5.04f, 1.12f, 0.56f, -1230, 0.020f, 0f, 0f, 0f, 200, 0.029f, 0f, 0f, 0f, 0.250f, 0.080f, 2.742f, 0.050f, -2f, 5000f, 250f, 0f, 0x3f} );\nHell      = new Environment ( new float[]{ 26, 100f, 0.570f, -1000, -900, -700, 3.57f, 0.49f, 2f, -10000, 0.020f, 0f, 0f, 0f, 300, 0.030f, 0f, 0f, 0f, 0.110f, 0.040f, 2.109f, 0.520f, -5f, 5000f, 139.5f, 0f, 0x40} );\nMemory    = new Environment ( new float[]{ 26, 8f, 0.850f, -1000, -400, -900, 4.06f, 0.82f, 0.56f, -2800, 0f, 0f, 0f, 0f, 100, 0f, 0f, 0f, 0f, 0.250f, 0f, 0.474f, 0.450f, -10f, 5000f, 250f, 0f, 0x0} );\nDrugged   = new Environment ( new float[]{ 23, 1.9f, 0.500f, -1000, 0, 0, 8.39f, 1.39f, 1f, -115, 0.002f, 0f, 0f, 0f, 985, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 1f, -5f, 5000f, 250f, 0f, 0x1f} );\nDizzy     = new Environment ( new float[]{ 24, 1.8f, 0.600f, -1000, -400, 0, 17.23f, 0.56f, 1f, -1713, 0.020f, 0f, 0f, 0f, -613, 0.030f, 0f, 0f, 0f, 0.250f, 1f, 0.810f, 0.310f, -5f, 5000f, 250f, 0f, 0x1f} );\nPsychotic = new Environment ( new float[]{ 25, 1f, 0.500f, -1000, -151, 0, 7.56f, 0.91f, 1f, -626, 0.020f, 0f, 0f, 0f, 774, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 4f, 1f, -5f, 5000f, 250f, 0f, 0x1f} );\n")),Object(a.b)("h1",{id:"car-racing"},"Car Racing"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"DrivingCommentator    = new Environment ( new float[]{ 26, 3f, 0f, 1000, -500, -600, 2.42f, 0.88f, 0.68f, -1400, 0.093f, 0f, 0f, 0f, -1200, 0.017f, 0f, 0f, 0f, 0.250f, 1f, 0.250f, 0f, -10f, 5000f, 250f, 0f, 0x20} );\nDrivingPitgarage       = new Environment ( new float[]{ 26, 1.9f, 0.590f, -1000, -300, -500, 1.72f, 0.93f, 0.87f, -500, 0f, 0f, 0f, 0f, 200, 0.016f, 0f, 0f, 0f, 0.250f, 0.110f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x0} );\nDrivingIncarRacer      = new Environment ( new float[]{ 26, 1.1f, 0.800f, -1000, 0, -200, 0.17f, 2f, 0.41f, 500, 0.007f, 0f, 0f, 0f, -300, 0.015f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 10268.2f, 251f, 0f, 0x20} );\nDrivingIncarSports     = new Environment ( new float[]{ 26, 1.1f, 0.800f, -1000, -400, 0, 0.17f, 0.75f, 0.41f, 0, 0.010f, 0f, 0f, 0f, -500, 0f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 10268.2f, 251f, 0f, 0x20} );\nDrivingIncarLuxury     = new Environment ( new float[]{ 26, 1.6f, 1f, -1000, -2000, -600, 0.13f, 0.41f, 0.46f, -200, 0.010f, 0f, 0f, 0f, 400, 0.010f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 10268.2f, 251f, 0f, 0x20} );\nDrivingFullgrandstand  = new Environment ( new float[]{ 26, 8.3f, 1f, -1000, -1100, -400, 3.01f, 1.37f, 1.28f, -900, 0.090f, 0f, 0f, 0f, -1500, 0.049f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 10420.2f, 250f, 0f, 0x1f} );\nDrivingEmptygrandstand = new Environment ( new float[]{ 26, 8.3f, 1f, -1000, 0, -200, 4.62f, 1.75f, 1.40f, -1363, 0.090f, 0f, 0f, 0f, -1200, 0.049f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 10420.2f, 250f, 0f, 0x1f} );\nDrivingTunnel          = new Environment ( new float[]{ 26, 3.1f, 0.810f, -1000, -800, -100, 3.42f, 0.94f, 1.31f, -300, 0.051f, 0f, 0f, 0f, -300, 0.047f, 0f, 0f, 0f, 0.214f, 0.050f, 0.250f, 0f, -5f, 5000f, 155.3f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"city"},"City"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"CityIndoors   = new Environment ( new float[]{ 16, 7.5f, 0.500f, -1000, -800, 0, 1.49f, 0.67f, 1f, -2273, 0.007f, 0f, 0f, 0f, -1691, 0.011f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nCityStreets   = new Environment ( new float[]{ 26, 3f, 0.780f, -1000, -300, -100, 1.79f, 1.12f, 0.91f, -1100, 0.046f, 0f, 0f, 0f, -1400, 0.028f, 0f, 0f, 0f, 0.250f, 0.200f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x20} );\nCitySubway    = new Environment ( new float[]{ 26, 3f, 0.740f, -1000, -300, -100, 3.01f, 1.23f, 0.91f, -300, 0.046f, 0f, 0f, 0f, 200, 0.028f, 0f, 0f, 0f, 0.125f, 0.210f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x20} );\nCityMuseum    = new Environment ( new float[]{ 26, 80.3f, 0.820f, -1000, -1500, -1500, 3.28f, 1.40f, 0.57f, -1200, 0.039f, 0f, 0f, -0f, -100, 0.034f, 0f, 0f, 0f, 0.130f, 0.170f, 0.250f, 0f, -5f, 2854.4f, 107.5f, 0f, 0x0} );\nCityLibrary   = new Environment ( new float[]{ 26, 80.3f, 0.820f, -1000, -1100, -2100, 2.76f, 0.89f, 0.41f, -900, 0.029f, 0f, 0f, -0f, -100, 0.020f, 0f, 0f, 0f, 0.130f, 0.170f, 0.250f, 0f, -5f, 2854.4f, 107.5f, 0f, 0x0} );\nCityUnderpass = new Environment ( new float[]{ 26, 3f, 0.820f, -1000, -700, -100, 3.57f, 1.12f, 0.91f, -800, 0.059f, 0f, 0f, 0f, -100, 0.037f, 0f, 0f, 0f, 0.250f, 0.140f, 0.250f, 0f, -7f, 5000f, 250f, 0f, 0x20} );\nCityAbandoned = new Environment ( new float[]{ 26, 3f, 0.690f, -1000, -200, -100, 3.28f, 1.17f, 0.91f, -700, 0.044f, 0f, 0f, 0f, -1100, 0.024f, 0f, 0f, 0f, 0.250f, 0.200f, 0.250f, 0f, -3f, 5000f, 250f, 0f, 0x20} );\n")),Object(a.b)("h1",{id:"small-indoor-rooms"},"Small Indoor Rooms"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Room         = new Environment ( new float[]{ 2, 1.9f, 1f, -1000, -454, 0, 0.40f, 0.83f, 1f, -1646, 0.002f, 0f, 0f, 0f, 53, 0.003f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nBathroom     = new Environment ( new float[]{ 3, 1.4f, 1f, -1000, -1200, 0, 1.49f, 0.54f, 1f, -370, 0.007f, 0f, 0f, 0f, 1030, 0.011f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nLivingroom   = new Environment ( new float[]{ 4, 2.5f, 1f, -1000, -6000, 0, 0.50f, 0.10f, 1f, -1376, 0.003f, 0f, 0f, 0f, -1104, 0.004f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nPaddedcell   = new Environment ( new float[]{ 1, 1.4f, 1f, -1000, -6000, 0, 0.17f, 0.10f, 1f, -1204, 0.001f, 0f, 0f, 0f, 207, 0.002f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nStoneroom    = new Environment ( new float[]{ 5, 11.6f, 1f, -1000, -300, 0, 2.31f, 0.64f, 1f, -711, 0.012f, 0f, 0f, 0f, 83, 0.017f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\n")),Object(a.b)("h1",{id:"medium-sized-indoor-rooms"},"Medium-Sized Indoor Rooms"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Workshop     = new Environment ( new float[]{ 26, 1.9f, 1f, -1000, -1700, -800, 0.76f, 1f, 1f, 0, 0.012f, 0f, 0f, 0f, 100, 0.012f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x0} );\nSchoolroom   = new Environment ( new float[]{ 26, 1.86f, 0.690f, -1000, -400, -600, 0.98f, 0.45f, 0.18f, 300, 0.017f, 0f, 0f, 0f, 300, 0.015f, 0f, 0f, 0f, 0.095f, 0.140f, 0.250f, 0f, -5f, 7176.9f, 211.2f, 0f, 0x20} );\nPractiseroom = new Environment ( new float[]{ 26, 1.86f, 0.870f, -1000, -800, -600, 1.12f, 0.56f, 0.18f, 200, 0.010f, 0f, 0f, 0f, 300, 0.011f, 0f, 0f, 0f, 0.095f, 0.140f, 0.250f, 0f, -5f, 7176.9f, 211.2f, 0f, 0x20} );\nOuthouse     = new Environment ( new float[]{ 26, 80.3f, 0.820f, -1000, -1900, -1600, 1.38f, 0.38f, 0.35f, -100, 0.024f, 0f, 0f, -0f, -400, 0.044f, 0f, 0f, 0f, 0.121f, 0.170f, 0.250f, 0f, -5f, 2854.4f, 107.5f, 0f, 0x0} );\nCaravan      = new Environment ( new float[]{ 26, 8.3f, 1f, -1000, -2100, -1800, 0.43f, 1.50f, 1f, 0, 0.012f, 0f, 0f, 0f, 600, 0.012f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x1f} );\nDustyroom    = new Environment ( new float[]{ 26, 1.8f, 0.560f, -1000, -200, -300, 1.79f, 0.38f, 0.21f, -600, 0.002f, 0f, 0f, 0f, 200, 0.006f, 0f, 0f, 0f, 0.202f, 0.050f, 0.250f, 0f, -10f, 13046f, 163.3f, 0f, 0x20} );\nChapel       = new Environment ( new float[]{ 26, 19.6f, 0.840f, -1000, -500, 0, 4.62f, 0.64f, 1.23f, -700, 0.032f, 0f, 0f, 0f, -200, 0.049f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0.110f, -5f, 5000f, 250f, 0f, 0x3f} );\n")),Object(a.b)("h1",{id:"large-indoor-rooms"},"Large Indoor Rooms"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Auditorium     = new Environment ( new float[]{ 6, 21.6f, 1f, -1000, -476, 0, 4.32f, 0.59f, 1f, -789, 0.020f, 0f, 0f, 0f, -289, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nConcerthall    = new Environment ( new float[]{ 7, 19.6f, 1f, -1000, -500, 0, 3.92f, 0.70f, 1f, -1230, 0.020f, 0f, 0f, 0f, -02, 0.029f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nCave           = new Environment ( new float[]{ 8, 14.6f, 1f, -1000, 0, 0, 2.91f, 1.30f, 1f, -602, 0.015f, 0f, 0f, 0f, -302, 0.022f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x1f} );\nArena          = new Environment ( new float[]{ 9, 36.2f, 1f, -1000, -698, 0, 7.24f, 0.33f, 1f, -1166, 0.020f, 0f, 0f, 0f, 16, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nHangar         = new Environment ( new float[]{ 10, 50.3f, 1f, -1000, -1000, 0, 10.05f, 0.23f, 1f, -602, 0.020f, 0f, 0f, 0f, 198, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nDomeTomb       = new Environment ( new float[]{ 26, 51.8f, 0.790f, -1000, -900, -1300, 4.18f, 0.21f, 0.10f, -825, 0.030f, 0f, 0f, 0f, 450, 0.022f, 0f, 0f, 0f, 0.177f, 0.190f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x0} );\nDomeSaintPauls = new Environment ( new float[]{ 26, 50.3f, 0.870f, -1000, -900, -1300, 10.48f, 0.19f, 0.10f, -1500, 0.090f, 0f, 0f, 0f, 200, 0.042f, 0f, 0f, 0f, 0.250f, 0.120f, 0.250f, 0f, -5f, 2854.4f, 20f, 0f, 0x3f} );\n")),Object(a.b)("h1",{id:"hallways-alleys"},"Hallways, Alleys"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Carpettedhallway = new Environment ( new float[]{ 11, 1.9f, 1f, -1000, -4000, 0, 0.30f, 0.10f, 1f, -1831, 0.002f, 0f, 0f, 0f, -1630, 0.030f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nHallway          = new Environment ( new float[]{ 12, 1.8f, 1f, -1000, -300, 0, 1.49f, 0.59f, 1f, -1219, 0.007f, 0f, 0f, 0f, 441, 0.011f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nStonecorridor    = new Environment ( new float[]{ 13, 13.5f, 1f, -1000, -237, 0, 2.70f, 0.79f, 1f, -1214, 0.013f, 0f, 0f, 0f, 395, 0.020f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nAlley            = new Environment ( new float[]{ 14, 7.5f, 0.300f, -1000, -270, 0, 1.49f, 0.86f, 1f, -1204, 0.007f, 0f, 0f, 0f, -4, 0.011f, 0f, 0f, 0f, 0.125f, 0.950f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\n")),Object(a.b)("h1",{id:"outdoors"},"Outdoors"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Backyard      = new Environment ( new float[]{ 26, 80.3f, 0.450f, -1000, -1200, -600, 1.12f, 0.34f, 0.46f, -700, 0.069f, 0f, 0f, -0f, -300, 0.023f, 0f, 0f, 0f, 0.218f, 0.340f, 0.250f, 0f, -5f, 4399.1f, 242.9f, 0f, 0x0} );\nPlain         = new Environment ( new float[]{ 19, 42.5f, 0.210f, -1000, -2000, 0, 1.49f, 0.50f, 1f, -2466, 0.179f, 0f, 0f, 0f, -1926, 0.100f, 0f, 0f, 0f, 0.250f, 1f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nRollingplains = new Environment ( new float[]{ 26, 80.3f, 0f, -1000, -3900, -400, 2.13f, 0.21f, 0.46f, -1500, 0.300f, 0f, 0f, -0f, -700, 0.019f, 0f, 0f, 0f, 0.250f, 1f, 0.250f, 0f, -5f, 4399.1f, 242.9f, 0f, 0x0} );\nDeepcanyon    = new Environment ( new float[]{ 26, 80.3f, 0.740f, -1000, -1500, -400, 3.89f, 0.21f, 0.46f, -1000, 0.223f, 0f, 0f, -0f, -900, 0.019f, 0f, 0f, 0f, 0.250f, 1f, 0.250f, 0f, -5f, 4399.1f, 242.9f, 0f, 0x0} );\nCreek         = new Environment ( new float[]{ 26, 80.3f, 0.350f, -1000, -1500, -600, 2.13f, 0.21f, 0.46f, -800, 0.115f, 0f, 0f, -0f, -1400, 0.031f, 0f, 0f, 0f, 0.218f, 0.340f, 0.250f, 0f, -5f, 4399.1f, 242.9f, 0f, 0x0} );\nValley        = new Environment ( new float[]{ 26, 80.3f, 0.280f, -1000, -3100, -1600, 2.88f, 0.26f, 0.35f, -1700, 0.263f, 0f, 0f, -0f, -800, 0.100f, 0f, 0f, 0f, 0.250f, 0.340f, 0.250f, 0f, -5f, 2854.4f, 107.5f, 0f, 0x0} );\nForest        = new Environment ( new float[]{ 15, 38f, 0.300f, -1000, -3300, 0, 1.49f, 0.54f, 1f, -2560, 0.162f, 0f, 0f, 0f, -229, 0.088f, 0f, 0f, 0f, 0.125f, 1f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nMountains     = new Environment ( new float[]{ 17, 100f, 0.270f, -1000, -2500, 0, 1.49f, 0.21f, 1f, -2780, 0.300f, 0f, 0f, 0f, -1434, 0.100f, 0f, 0f, 0f, 0.250f, 1f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x1f} );\nQuarry        = new Environment ( new float[]{ 18, 17.5f, 1f, -1000, -1000, 0, 1.49f, 0.83f, 1f, -10000, 0.061f, 0f, 0f, 0f, 500, 0.025f, 0f, 0f, 0f, 0.125f, 0.700f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x3f} );\nParkinglot    = new Environment ( new float[]{ 20, 8.3f, 1f, -1000, 0, 0, 1.65f, 1.50f, 1f, -1363, 0.008f, 0f, 0f, 0f, -1153, 0.012f, 0f, 0f, 0f, 0.250f, 0f, 0.250f, 0f, -5f, 5000f, 250f, 0f, 0x1f} );\n")),Object(a.b)("h1",{id:"water"},"Water"),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-java"}),"Underwater     = new Environment ( new float[]{ 22, 1.8f, 1f, -1000, -4000, 0, 1.49f, 0.10f, 1f, -449, 0.007f, 0f, 0f, 0f, 1700, 0.011f, 0f, 0f, 0f, 0.250f, 0f, 1.180f, 0.348f, -5f, 5000f, 250f, 0f, 0x3f} );\nSmallwaterroom = new Environment ( new float[]{ 26, 36.2f, 0.700f, -1000, -698, 0, 1.51f, 1.25f, 1.14f, -100, 0.020f, 0f, 0f, 0f, 300, 0.030f, 0f, 0f, 0f, 0.179f, 0.150f, 0.895f, 0.190f, -7f, 5000f, 250f, 0f, 0x0} );\n")))}c.isMDXComponent=!0},441:function(f,n,e){"use strict";e.d(n,"a",(function(){return w})),e.d(n,"b",(function(){return v}));var t=e(0),o=e.n(t);function a(f,n,e){return n in f?Object.defineProperty(f,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):f[n]=e,f}function r(f,n){var e=Object.keys(f);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(f);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(f,n).enumerable}))),e.push.apply(e,t)}return e}function l(f){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(f,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(f,n,Object.getOwnPropertyDescriptor(e,n))}))}return f}function i(f,n){if(null==f)return{};var e,t,o=function(f,n){if(null==f)return{};var e,t,o={},a=Object.keys(f);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||(o[e]=f[e]);return o}(f,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(f);for(t=0;t<a.length;t++)e=a[t],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(f,e)&&(o[e]=f[e])}return o}var m=o.a.createContext({}),c=function(f){var n=o.a.useContext(m),e=n;return f&&(e="function"==typeof f?f(n):l({},n,{},f)),e},w=function(f){var n=c(f.components);return o.a.createElement(m.Provider,{value:n},f.children)},s={inlineCode:"code",wrapper:function(f){var n=f.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(t.forwardRef)((function(f,n){var e=f.components,t=f.mdxType,a=f.originalType,r=f.parentName,m=i(f,["components","mdxType","originalType","parentName"]),w=c(e),p=t,v=w["".concat(r,".").concat(p)]||w[p]||s[p]||a;return e?o.a.createElement(v,l({ref:n},m,{components:e})):o.a.createElement(v,l({ref:n},m))}));function v(f,n){var e=arguments,t=n&&n.mdxType;if("string"==typeof f||t){var a=e.length,r=new Array(a);r[0]=p;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=f,l.mdxType="string"==typeof f?f:t,r[1]=l;for(var m=2;m<a;m++)r[m]=e[m];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,e)}p.displayName="MDXCreateElement"}}]);