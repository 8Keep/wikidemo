module.exports = {
  main: [
    {
      type: 'doc',
      id: 'documentation',
    },
    {
      type: 'category',
      label: 'jMonkeyEngine',
      items: [
        'bsd_license',
        'githubtips',
        {
          type: 'category',
          label: 'jME3',
          items: [
            {
              type: 'doc',
              id: 'jme3',
            },
            {
              type: 'category',
              label: 'Beginner Tutorials',
              items: [
                'jme3/beginner/hello_simpleapplication',
                'jme3/beginner/hello_node',
                'jme3/beginner/hello_asset',
                'jme3/beginner/hello_main_event_loop',
                'jme3/beginner/hello_input_system',
                'jme3/beginner/hello_material',
                'jme3/beginner/hello_animation',
                'jme3/beginner/hello_picking',
                'jme3/beginner/hello_collision',
                'jme3/beginner/hello_terrain',
                'jme3/beginner/hello_audio',
                'jme3/beginner/hello_effects',
                'jme3/beginner/hello_physics',
              ],
            },
            {
              type: 'category',
              label: 'Intermediate Tutorials',
              items: [
                {
                  type: 'category',
                  label: 'Concepts',
                  items: [
                    'jme3/intermediate/best_practices',
                    'jme3/intermediate/simpleapplication',
                    'jme3/intermediate/appsettings',
                    'jme3/features',
                    'jme3/intermediate/optimization',
                    'jme3/faq',
                  ]
                },
                {
                  type: 'category',
                  label: 'Maths Concepts',
                  items: [
                    'jme3/math_for_dummies',
                    'jme3/intermediate/math',
                    'jme3/math',
                    'jme3/rotate',
                    'jme3/math_video_tutorials',
                  ]
                },
                {
                  type: 'category',
                  label: '3D Graphics Concepts',
                  items: [
                    'jme3/intermediate/multi-media_asset_pipeline',
                    'jme3/scenegraph_for_dummies',
                    'jme3/beginner/hellovector',
                    'jme3/terminology',
                    'jme3/intermediate/how_to_use_materials',
                    'jme3/intermediate/transparency_sorting',
                    'jme3/external/blender',
                    'jme3/external/3dsmax',
                  ]
                }
              ]
            },
            {
              type: 'category',
              label: 'Advanced Tutorials',
              items: [

              ],
            },
          ],
        },
        'logo',
        'multiplayer_template',
        'report_bugs',
        'sdk',
        'spidermonkey',
        'tasks',
        'team',
      ]
    },
    {
      Wiki: ['docusaurus/styleguide',],
    }
  ],
};
