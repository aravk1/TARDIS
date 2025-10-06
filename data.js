var APP_DATA = {
  "scenes": [
    {
      "id": "0-front_of_barn",
      "name": "front_of_barn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 3.141592653589793, 
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1058621776120017,
          "pitch": 0.25902290297822006,
          "rotation": 6.283185307179586,
          "target": "1-barn_center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.818530566980934,
          "pitch": -0.15138109816614254,
          "title": "The Barn",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-barn_center",
      "name": "barn_center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 3.0036524197974295,
        "pitch": 0.051269655438391126,
        "fov": 1.499457029563985
      },
      "linkHotspots": [
        {
          "yaw": -0.11734717600694644,
          "pitch": 0.22618504341253498,
          "rotation": 0,
          "target": "0-front_of_barn"
        },
        {
          "yaw": 1.1809001057863604,
          "pitch": 0.4697937472958422,
          "rotation": 12.566370614359176,
          "target": "2-barn_table"
        },
        {
          "yaw": -1.097332242619764,
          "pitch": 0.48228361472169823,
          "rotation": 0,
          "target": "3-wood_cutter"
        },
        {
          "yaw": 3.0577988020438056,
          "pitch": 0.21998452707553895,
          "rotation": 0,
          "target": "4-back_of_barn"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.5530875579180963,
          "pitch": -0.03407070329142314,
          "title": "Corn",
          "text": "<img src='img/BarnCloseUps/corn.jpg' style='max-width:100%; height:auto;'>"        
        }
      ]
    },
    {
      "id": "2-barn_table",
      "name": "barn_table",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.9674020227001066,
        "pitch": 0.24671653150316075,
        "fov": 1.6315087400113863
      },
      "linkHotspots": [
        {
          "yaw": 0.5142175671858364,
          "pitch": 0.5948006845653246,
          "rotation": 0,
          "target": "1-barn_center"
        },
        {
          "yaw": 0.9820585590394444,
          "pitch": 0.43725405814270424,
          "rotation": 0,
          "target": "3-wood_cutter"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.814956317136735,
          "pitch": 0.09807648974411798,
          "title": "Dey Farm Info",
          "text": "Text"
        },
        {
          "yaw": 2.6226767807211573,
          "pitch": 0.377635984497676,
          "title": "<div>One-Room School Info</div>",
          "text": "Text"
        },
        {
          "yaw": 2.3391264469026973,
          "pitch": 0.3366973608681114,
          "title": "<div>Primary Source Doc</div>",
          "text": "Text"
        },
        {
          "yaw": 2.3377200302855083,
          "pitch": 0.17827197696971453,
          "title": "View Table",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-wood_cutter",
      "name": "wood_cutter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -3.104043027597136,
        "pitch": 0.24123663228613168,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.47814721038631447,
          "pitch": 0.4358077637033375,
          "rotation": 0,
          "target": "1-barn_center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6250257564928727,
          "pitch": -0.11647042999402402,
          "title": "View Up Close",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-back_of_barn",
      "name": "back_of_barn",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 3.1393685234172723,
        "pitch": -0.12614248757797952,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.1223163115990413,
          "pitch": 0.24949110764699256,
          "rotation": 0,
          "target": "5-back_outside"
        },
        {
          "yaw": -0.07990637810556045,
          "pitch": 0.2765805461828865,
          "rotation": 0,
          "target": "1-barn_center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-back_outside",
      "name": "back_outside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": -3.1119803786440166,
        "pitch": 0.13792727169306573,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0051206539373751525,
          "pitch": 0.37073340959546996,
          "rotation": 0,
          "target": "4-back_of_barn"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bed_otherside",
      "name": "bed_otherside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 0.7545918409199608,
        "pitch": 0.34254715078297693,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01416368142366764,
          "pitch": 0.6116432869657551,
          "rotation": 0,
          "target": "7-bedside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bedside",
      "name": "bedside",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1944,
      "initialViewParameters": {
        "yaw": 2.6609101709020324,
        "pitch": 0.10605781344312248,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2501609200214752,
          "pitch": 0.5063242804220387,
          "rotation": 0,
          "target": "6-bed_otherside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.7634034461997663,
          "pitch": 0.25183234492633844,
          "title": "Preview Table",
          "text": "Text"
        },
        {
          "yaw": -0.040078762643659616,
          "pitch": 0.16705275344388149,
          "title": "View Photo",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
