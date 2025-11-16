var APP_DATA = {
  "scenes": [
    {
      "id": "0-dey-house-entrance",
      "name": "Dey House Entrance",
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
        "yaw": -2.9301580869260846,
        "pitch": -0.12208680481032985,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6004148162459515,
          "pitch": 0.37479811109610317,
          "rotation": 0,
          "target": "1-kitchen-front"
        },
        {
          "yaw": 3.08104041402954,
          "pitch": 0.41555527806370307,
          "rotation": 0,
          "target": "7-front-hall"
        },
        {
          "yaw": 0.1937077043929616,
          "pitch": 0.43568975730267745,
          "rotation": 0,
          "target": "23-house-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.540921285815461,
          "pitch": -0.06177775353893722,
          "title": "Receipts",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-kitchen-front",
      "name": "Kitchen Front",
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
        "yaw": 0.052524799931205735,
        "pitch": -0.00788118464694243,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.475761364141622,
          "pitch": 0.49353659919517945,
          "rotation": 0,
          "target": "0-dey-house-entrance"
        },
        {
          "yaw": -2.891310210295593,
          "pitch": 0.4243715624141764,
          "rotation": 0,
          "target": "2-kitchen-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen-back",
      "name": "Kitchen Back",
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
        "yaw": -2.8917201979301854,
        "pitch": -0.016694309555079556,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.007788850752453058,
          "pitch": 0.69037009332936,
          "rotation": 0,
          "target": "1-kitchen-front"
        },
        {
          "yaw": -3.0592679134588394,
          "pitch": 0.6564288172289992,
          "rotation": 0,
          "target": "3-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-dining-room",
      "name": "Dining Room",
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
        "yaw": -0.23272624286269838,
        "pitch": -0.09024363204879648,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.014034317635809,
          "pitch": 0.5236768773499385,
          "rotation": 0,
          "target": "2-kitchen-back"
        },
        {
          "yaw": -1.8013632216498827,
          "pitch": 0.5036842718500303,
          "rotation": 0,
          "target": "4-dining-room-display"
        },
        {
          "yaw": -0.16224163028056893,
          "pitch": 0.39698696055506844,
          "rotation": 0,
          "target": "6-dining-room-back-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-room-display",
      "name": "Dining Room Display",
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
        "yaw": -2.95542491090748,
        "pitch": -0.13751875360971688,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8309007372993031,
          "pitch": 0.5889009822371154,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": -0.2574587050648276,
          "pitch": 0.49760867753584037,
          "rotation": 0,
          "target": "5-dining-room-back-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8689841680178603,
          "pitch": -0.23866026133123341,
          "title": "<div>Dairy Product</div>",
          "text": "Text"
        },
        {
          "yaw": -2.237073376614431,
          "pitch": 0.06711697353878421,
          "title": "Feb. 23, 1923",
          "text": "Letter addressed to one Mr. John Kirkpatrick"
        },
        {
          "yaw": 3.045398479520376,
          "pitch": -0.450254273427241,
          "title": "Native American Exhibit",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-dining-room-back-left",
      "name": "Dining Room Back Left",
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
        "yaw": -0.019511547478204605,
        "pitch": 0.43537508816331894,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1259247964266876,
          "pitch": 0.3385919425267456,
          "rotation": 0,
          "target": "4-dining-room-display"
        },
        {
          "yaw": 1.6263587437401688,
          "pitch": 0.6220515748472462,
          "rotation": 0,
          "target": "6-dining-room-back-right"
        },
        {
          "yaw": -2.456104524414595,
          "pitch": 0.4274503970606638,
          "rotation": 5.497787143782138,
          "target": "7-front-hall"
        },
        {
          "yaw": -1.2730077054196638,
          "pitch": 0.6315699417686176,
          "rotation": 0,
          "target": "8-staircase-intersection"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-dining-room-back-right",
      "name": "Dining Room Back Right",
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
        "yaw": -1.4222412967126346,
        "pitch": -0.013791926623749617,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5060874047766575,
          "pitch": 0.5006616866472928,
          "rotation": 0,
          "target": "3-dining-room"
        },
        {
          "yaw": -3.027864995003444,
          "pitch": 0.4273195647922563,
          "rotation": 0,
          "target": "5-dining-room-back-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1202894772941008,
          "pitch": -0.10188238338219513,
          "title": "The Old Mail System",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-front-hall",
      "name": "Front Hall",
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
        "yaw": 2.975226828420423,
        "pitch": 0.003969981028063785,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2825085726537253,
          "pitch": 0.3688215151294578,
          "rotation": 0,
          "target": "0-dey-house-entrance"
        },
        {
          "yaw": -2.9089019977375763,
          "pitch": 0.38985519223545495,
          "rotation": 0.7853981633974483,
          "target": "5-dining-room-back-left"
        },
        {
          "yaw": 3.0318205430336054,
          "pitch": 0.395487942368808,
          "rotation": 0,
          "target": "8-staircase-intersection"
        },
        {
          "yaw": -0.01803373443232914,
          "pitch": 0.63591404683517,
          "rotation": 1.5707963267948966,
          "target": "11-piano-room-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-staircase-intersection",
      "name": "Staircase Intersection",
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
        "yaw": 1.909563556893974,
        "pitch": 0.29479880823490845,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2497035381866084,
          "pitch": 0.634898980717491,
          "rotation": 4.71238898038469,
          "target": "5-dining-room-back-left"
        },
        {
          "yaw": 0.947598165143539,
          "pitch": 0.612960560111059,
          "rotation": 6.283185307179586,
          "target": "7-front-hall"
        },
        {
          "yaw": 1.9775510602968698,
          "pitch": 0.7551867114016311,
          "rotation": 5.497787143782138,
          "target": "12-upstairs"
        },
        {
          "yaw": 2.874087148928904,
          "pitch": 0.6618155651844475,
          "rotation": 6.283185307179586,
          "target": "9-piano-room-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-piano-room-right",
      "name": "Piano Room Right",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0979561866381955,
          "pitch": 0.4551742010384334,
          "rotation": 0,
          "target": "8-staircase-intersection"
        },
        {
          "yaw": -0.9600309207790616,
          "pitch": 0.7212016745965606,
          "rotation": 0,
          "target": "10-piano-room-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.3204463119091248,
          "pitch": -0.028679755244274574,
          "title": "Physical Culture City",
          "text": "Text"
        },
        {
          "yaw": 0.5487532266342221,
          "pitch": 0.4508857447128545,
          "title": "Meet Achsah Mount",
          "text": "Text"
        },
        {
          "yaw": 0.2800480538831316,
          "pitch": 0.3769076752417142,
          "title": "Spinning Wheel",
          "text": "Text"
        }
      ]
    },
    {
      "id": "10-piano-room-center",
      "name": "Piano Room Center",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.14796637315338756,
          "pitch": 0.5704052385797667,
          "rotation": 5.497787143782138,
          "target": "11-piano-room-left"
        },
        {
          "yaw": -1.9258808493660737,
          "pitch": 0.6835050350013212,
          "rotation": 0,
          "target": "9-piano-room-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.825515916060132,
          "pitch": -0.3050315134482222,
          "title": "Picture from Mount Family",
          "text": "Text"
        },
        {
          "yaw": -1.492408171331716,
          "pitch": -0.12198810023322082,
          "title": "Pastor's Life Record",
          "text": "Text"
        }
      ]
    },
    {
      "id": "11-piano-room-left",
      "name": "Piano Room Left",
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
        "yaw": 2.114702244805038,
        "pitch": 0.20470304301229447,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.44235369708786,
          "pitch": 0.6361653838543155,
          "rotation": 0,
          "target": "10-piano-room-center"
        },
        {
          "yaw": 0.6724948046856536,
          "pitch": 0.45037824863905307,
          "rotation": 0,
          "target": "7-front-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.3030953875660387,
          "pitch": 0.15348042259065764,
          "title": "Gramaphone",
          "text": "Text"
        },
        {
          "yaw": -0.14372716167596877,
          "pitch": 0.25647964706705295,
          "title": "Edison Gold Mould Record",
          "text": "Text"
        },
        {
          "yaw": 2.623231760387384,
          "pitch": 0.3368722886687472,
          "title": "Warren Southworth",
          "text": "September 1944"
        },
        {
          "yaw": 0.29882549169558814,
          "pitch": 0.21556573670650359,
          "title": "Open Record Player",
          "text": "Text"
        }
      ]
    },
    {
      "id": "12-upstairs",
      "name": "Upstairs",
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
        "yaw": -1.0118826848445472,
        "pitch": 0.08719525430999653,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7660859118449945,
          "pitch": 0.9412246004252509,
          "rotation": 0,
          "target": "8-staircase-intersection"
        },
        {
          "yaw": -1.1993766774062529,
          "pitch": 0.5907089360730815,
          "rotation": 0,
          "target": "17-bathroom"
        },
        {
          "yaw": -0.23507389628185038,
          "pitch": 0.7225611864949713,
          "rotation": 0.7853981633974483,
          "target": "13-bedroom-1-entry"
        },
        {
          "yaw": -1.7950019345394725,
          "pitch": 0.6535623461371571,
          "rotation": 5.497787143782138,
          "target": "19-upstairs-hall-end"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-1-entry",
      "name": "Bedroom 1 Entry",
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
        "yaw": 1.5358857885273904,
        "pitch": 0.32000352393597,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0910310420364784,
          "pitch": 0.6348801330394611,
          "rotation": 0,
          "target": "12-upstairs"
        },
        {
          "yaw": 1.0734843849602136,
          "pitch": 0.7774634298664687,
          "rotation": 6.283185307179586,
          "target": "14-bed-1-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.849050717152858,
          "pitch": 0.4603508981606179,
          "title": "Fairy Tales",
          "text": "Text"
        },
        {
          "yaw": -0.9464291895580565,
          "pitch": 0.355558424623144,
          "title": "Grandpa's Jacket",
          "text": "Text"
        }
      ]
    },
    {
      "id": "14-bed-1-front",
      "name": "Bed 1 Front",
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
        "yaw": 2.3527436251571565,
        "pitch": -0.05982018929570998,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2499565500362948,
          "pitch": 0.5155969539078757,
          "rotation": 0,
          "target": "13-bedroom-1-entry"
        },
        {
          "yaw": 0.9128658670415835,
          "pitch": 0.8473739126886883,
          "rotation": 0,
          "target": "15-bed-corner"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9750421944311283,
          "pitch": -0.08061292226830119,
          "title": "Women's clothes",
          "text": "Text"
        }
      ]
    },
    {
      "id": "15-bed-corner",
      "name": "Bed Corner",
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
        "yaw": 0.09178629278051353,
        "pitch": 0.20051854374911215,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7956654711707216,
          "pitch": 0.6025257008580382,
          "rotation": 0.7853981633974483,
          "target": "14-bed-1-front"
        },
        {
          "yaw": 1.4355498167126681,
          "pitch": 0.8685950639555244,
          "rotation": 0.7853981633974483,
          "target": "16-vanity"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.5511112163935685,
          "pitch": 0.08194324713776524,
          "title": "Table Close-up",
          "text": "Text"
        },
        {
          "yaw": -2.401438365769067,
          "pitch": 0.20820630491155612,
          "title": "Sewing Machine Info",
          "text": "Text"
        }
      ]
    },
    {
      "id": "16-vanity",
      "name": "Vanity",
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
        "yaw": 2.519422892469958,
        "pitch": 0.07872584159357743,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2048994295738904,
          "pitch": 0.6384873746436384,
          "rotation": 0.7853981633974483,
          "target": "15-bed-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bathroom",
      "name": "Bathroom",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.027286504287238,
          "pitch": 0.3950937100733434,
          "rotation": 0,
          "target": "12-upstairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1387522104204297,
          "pitch": 0.4177914113803034,
          "title": "Hairdryer",
          "text": "Text"
        },
        {
          "yaw": -1.0997120436607641,
          "pitch": 0.206195460653964,
          "title": "Razor",
          "text": "Text"
        }
      ]
    },
    {
      "id": "18-bathroom-inside",
      "name": "Bathroom Inside",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "19-upstairs-hall-end",
      "name": "Upstairs Hall End",
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
        "yaw": -1.6872975224425328,
        "pitch": 0.05908885780848294,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06408219791237002,
          "pitch": 0.5826230077828427,
          "rotation": 0,
          "target": "12-upstairs"
        },
        {
          "yaw": -2.278811111269391,
          "pitch": 0.8488392095260302,
          "rotation": 0,
          "target": "20-bedroom-2-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-bedroom-2-entry",
      "name": "Bedroom 2 Entry",
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
        "yaw": -2.7112862461892018,
        "pitch": 0.07391982714328904,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9042816330257377,
          "pitch": 0.5900989999274344,
          "rotation": 0,
          "target": "21-bed-2-front"
        },
        {
          "yaw": 0.34506723980839205,
          "pitch": 0.9601329843638275,
          "rotation": 0,
          "target": "19-upstairs-hall-end"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.7842765911460052,
          "pitch": 0.8703629580532812,
          "title": "Box of Toys",
          "text": "Text"
        }
      ]
    },
    {
      "id": "21-bed-2-front",
      "name": "Bed 2 Front",
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
        "yaw": -3.0189342403564297,
        "pitch": -0.08940204968791043,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.024620626303051,
          "pitch": 0.5417478288107453,
          "rotation": 0,
          "target": "22-bed-2-corner"
        },
        {
          "yaw": -0.8519032992073541,
          "pitch": 0.5660514429599246,
          "rotation": 0,
          "target": "20-bedroom-2-entry"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.5970157529511777,
          "pitch": 0.5825204524586631,
          "title": "Historic Site Sketches",
          "text": "Text"
        },
        {
          "yaw": 2.360367413463111,
          "pitch": 0.507708138937847,
          "title": "Katherine S. Patten Gravestone",
          "text": "1859-1914"
        },
        {
          "yaw": 0.2116977047152453,
          "pitch": -0.14245944260284737,
          "title": "Lamp Close-up",
          "text": "Text"
        }
      ]
    },
    {
      "id": "22-bed-2-corner",
      "name": "Bed 2 Corner",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5278586126662361,
          "pitch": 0.46977379629653626,
          "rotation": 0,
          "target": "21-bed-2-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.551220277952206,
          "pitch": 0.02519688048872304,
          "title": "Glass Dolls",
          "text": "Text"
        }
      ]
    },
    {
      "id": "23-house-outside",
      "name": "House Outside",
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
        "yaw": -0.07746135532451248,
        "pitch": 0.08017104834723199,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24267247522441338,
          "pitch": 0.17480932519832848,
          "rotation": 0,
          "target": "0-dey-house-entrance"
        },
        {
          "yaw": 2.403837671824556,
          "pitch": 0.013550664775191734,
          "rotation": 0,
          "target": "35-barn-outside"
        },
        {
          "yaw": -2.607142969448848,
          "pitch": -0.07313102784854308,
          "rotation": 0,
          "target": "24-schoolhouse-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.95939807584133,
          "pitch": -0.12968673904136807,
          "title": "Railroad?",
          "text": "Text"
        },
        {
          "yaw": -2.7984017766371316,
          "pitch": -0.0948551027042921,
          "title": "Railroad Info",
          "text": "Text"
        }
      ]
    },
    {
      "id": "24-schoolhouse-outside",
      "name": "Schoolhouse Outside",
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
        "yaw": -3.0581580775431156,
        "pitch": -0.22435031874485745,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1404580264638735,
          "pitch": 0.23228793882488574,
          "rotation": 0,
          "target": "25-schoolhouse-entryway"
        },
        {
          "yaw": -1.2656195436610904,
          "pitch": -0.03613007643898314,
          "rotation": 0,
          "target": "23-house-outside"
        },
        {
          "yaw": -0.6023080888233139,
          "pitch": -0.007934746177767238,
          "rotation": 0,
          "target": "35-barn-outside"
        },
        {
          "yaw": -2.3746676765758785,
          "pitch": 0.01391906915014296,
          "rotation": 5.497787143782138,
          "target": "46-equipment-barn-outside"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-schoolhouse-entryway",
      "name": "Schoolhouse Entryway",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.49869931534272993,
          "pitch": 0.7778737805727669,
          "rotation": 0.7853981633974483,
          "target": "26-schoolhouse-front"
        },
        {
          "yaw": -0.6335584009066544,
          "pitch": 0.7056416102948049,
          "rotation": 5.497787143782138,
          "target": "24-schoolhouse-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.0780307286817266,
          "pitch": -0.024364529510922495,
          "title": "Old Coat",
          "text": "Text"
        }
      ]
    },
    {
      "id": "26-schoolhouse-front",
      "name": "Schoolhouse Front",
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
        "yaw": 3.0956499439995184,
        "pitch": -0.10268711984725343,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1579537665880011,
          "pitch": 0.629211116738368,
          "rotation": 0,
          "target": "25-schoolhouse-entryway"
        },
        {
          "yaw": 1.9674024692952798,
          "pitch": 0.737939331885439,
          "rotation": 0,
          "target": "27-schoolhouse-front-left"
        },
        {
          "yaw": -1.566969274061048,
          "pitch": 0.6765776044120102,
          "rotation": 0,
          "target": "34-schoolhouse-front-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-schoolhouse-front-left",
      "name": "Schoolhouse Front Left",
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
        "yaw": 3.0647800946577757,
        "pitch": 0.016597812634437048,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4396867863838736,
          "pitch": 0.7534464845307003,
          "rotation": 0,
          "target": "26-schoolhouse-front"
        },
        {
          "yaw": -1.8455194589747066,
          "pitch": 0.6484966574961248,
          "rotation": 0,
          "target": "28-schoolhouse-mid-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9461131762625952,
          "pitch": 0.37909459415533675,
          "title": "The Last Remaining Original School Bell",
          "text": "Text"
        },
        {
          "yaw": 2.471494555782674,
          "pitch": 0.14385207259518928,
          "title": "Student Essay",
          "text": "Text"
        },
        {
          "yaw": 2.67322151958159,
          "pitch": 0.19488906975040088,
          "title": "Former Student &amp; First Nurse",
          "text": "Text"
        },
        {
          "yaw": -2.8720595080652913,
          "pitch": 0.29350852513417536,
          "title": "Schools History",
          "text": "1838-1938"
        },
        {
          "yaw": -3.0704563931396294,
          "pitch": 0.1769273894766421,
          "title": "Top-view",
          "text": "Text"
        }
      ]
    },
    {
      "id": "28-schoolhouse-mid-left",
      "name": "Schoolhouse Mid Left",
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
        "yaw": -2.8772228587429822,
        "pitch": 0.03300281439133812,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6477784039307348,
          "pitch": 0.4239564506203308,
          "rotation": 0,
          "target": "29-schoolhouse-back-left"
        },
        {
          "yaw": 1.8953782739527938,
          "pitch": 0.7487434740598395,
          "rotation": 0,
          "target": "27-schoolhouse-front-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6939631754740656,
          "pitch": 0.12341878836300424,
          "title": "Old Pencilcase",
          "text": "Text"
        },
        {
          "yaw": -2.582768792754969,
          "pitch": 0.16716468983556254,
          "title": "Top-view of Table",
          "text": "Text"
        }
      ]
    },
    {
      "id": "29-schoolhouse-back-left",
      "name": "Schoolhouse Back Left",
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
        "yaw": -2.769034600380188,
        "pitch": 0.024604453644030855,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0577104779818134,
          "pitch": 0.6525820892158247,
          "rotation": 0,
          "target": "28-schoolhouse-mid-left"
        },
        {
          "yaw": -1.545702170607246,
          "pitch": 0.48839514548263097,
          "rotation": 0,
          "target": "30-schoolhouse-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.9489722158227414,
          "pitch": 0.06308867507915572,
          "title": "Old Chalks",
          "text": "Text"
        },
        {
          "yaw": 2.742365876168649,
          "pitch": 0.1341252314132806,
          "title": "View Schools",
          "text": "Text"
        }
      ]
    },
    {
      "id": "30-schoolhouse-back",
      "name": "Schoolhouse Back",
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
        "yaw": -2.6458809831938943,
        "pitch": -0.23668094010144003,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5301721392897978,
          "pitch": 0.4154114434977547,
          "rotation": 0,
          "target": "31-schoolhouse-back-right"
        },
        {
          "yaw": 0.9679300581024943,
          "pitch": 0.8076479654832021,
          "rotation": 0,
          "target": "29-schoolhouse-back-left"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-schoolhouse-back-right",
      "name": "Schoolhouse Back Right",
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
        "yaw": 3.002726850230875,
        "pitch": -0.07798400286014129,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0690498385877394,
          "pitch": 0.7943533109892709,
          "rotation": 6.283185307179586,
          "target": "30-schoolhouse-back"
        },
        {
          "yaw": -1.722854400004735,
          "pitch": 0.599315623109602,
          "rotation": 0,
          "target": "32-schoolhouse-mid-1-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.787592097403719,
          "pitch": 0.12065632666745785,
          "title": "Pleasant Hill One-Room School c. 1908",
          "text": "Text"
        },
        {
          "yaw": 3.1089158499369285,
          "pitch": 0.002543418208720283,
          "title": "Old Textbooks and Chalkboard",
          "text": "Text"
        },
        {
          "yaw": -2.736105903829042,
          "pitch": 0.01987031951144047,
          "title": "Books",
          "text": "Text"
        },
        {
          "yaw": -2.8896984914495807,
          "pitch": 0.2935726025161891,
          "title": "Children's toys",
          "text": "Text"
        }
      ]
    },
    {
      "id": "32-schoolhouse-mid-1-right",
      "name": "Schoolhouse Mid 1 Right",
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
        "yaw": 2.9240323869275286,
        "pitch": -0.03442031107660881,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7791578245739679,
          "pitch": 0.5515137592638979,
          "rotation": 5.497787143782138,
          "target": "31-schoolhouse-back-right"
        },
        {
          "yaw": -1.8362913981016113,
          "pitch": 0.4979425743492065,
          "rotation": 0,
          "target": "33-schoolhouse-mid-2-right"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.9963240963852993,
          "pitch": 0.2917518220487345,
          "title": "Desks",
          "text": "Text"
        }
      ]
    },
    {
      "id": "33-schoolhouse-mid-2-right",
      "name": "Schoolhouse Mid 2 Right",
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
        "yaw": 3.0648443238686447,
        "pitch": 0.06070996715870791,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.417531181225307,
          "pitch": 0.6863383820629032,
          "rotation": 0,
          "target": "34-schoolhouse-front-right"
        },
        {
          "yaw": 1.84055425061407,
          "pitch": 0.6247053313136508,
          "rotation": 0,
          "target": "32-schoolhouse-mid-1-right"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-schoolhouse-front-right",
      "name": "Schoolhouse Front Right",
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
        "yaw": 3.0573761417070937,
        "pitch": 0.03074105520304471,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.48535652402615526,
          "pitch": 0.7144708535838475,
          "rotation": 0,
          "target": "33-schoolhouse-mid-2-right"
        },
        {
          "yaw": -1.661200586837074,
          "pitch": 0.6639318621989965,
          "rotation": 0,
          "target": "26-schoolhouse-front"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.421294671947053,
          "pitch": -0.13470314294301744,
          "title": "Old Varsity Jacket and Cap and Gown",
          "text": "Text"
        },
        {
          "yaw": -2.720223568821547,
          "pitch": -0.32098112622498576,
          "title": "High School Degree",
          "text": "Text"
        },
        {
          "yaw": -2.688965384333578,
          "pitch": 0.07356914307716877,
          "title": "Ely High School Picture",
          "text": "Text"
        }
      ]
    },
    {
      "id": "35-barn-outside",
      "name": "Barn Outside",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3630114770561512,
          "pitch": 0.1180757151957188,
          "rotation": 0,
          "target": "23-house-outside"
        },
        {
          "yaw": -1.6864602721326456,
          "pitch": -0.0025880299558291853,
          "rotation": 0,
          "target": "24-schoolhouse-outside"
        },
        {
          "yaw": 3.04924444396889,
          "pitch": 0.009280433096094498,
          "rotation": 0,
          "target": "36-barn-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-barn-center",
      "name": "Barn Center",
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
        "yaw": 3.0572192107403318,
        "pitch": 0.00023815275684846426,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2699598913132313,
          "pitch": 0.4426056877709321,
          "rotation": 0,
          "target": "35-barn-outside"
        },
        {
          "yaw": 1.1903824947152408,
          "pitch": 0.5214755757055407,
          "rotation": 0,
          "target": "37-barn-table"
        },
        {
          "yaw": 1.7756237591771766,
          "pitch": 0.3665408508396286,
          "rotation": 0,
          "target": "38-barn-left"
        },
        {
          "yaw": 2.283948343056239,
          "pitch": 0.3323047895576554,
          "rotation": 0,
          "target": "39-barn-left-back"
        },
        {
          "yaw": -1.4136969155594592,
          "pitch": 0.42014702230748213,
          "rotation": 12.566370614359176,
          "target": "41-woodworking-station"
        },
        {
          "yaw": -1.7470637427386855,
          "pitch": 0.3207859687458896,
          "rotation": 5.497787143782138,
          "target": "40-barn-car"
        },
        {
          "yaw": -2.5097663052170223,
          "pitch": 0.21905048543487382,
          "rotation": 0.7853981633974483,
          "target": "42-car-close-up"
        },
        {
          "yaw": 3.1017536963430175,
          "pitch": 0.17247410255518325,
          "rotation": 0,
          "target": "43-barn-outside-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-barn-table",
      "name": "Barn Table",
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
        "yaw": 2.8084305621354027,
        "pitch": 0.08481956069111973,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9978102656227321,
          "pitch": 0.5289794161854324,
          "rotation": 0,
          "target": "36-barn-center"
        },
        {
          "yaw": -0.5853524185347609,
          "pitch": 0.6932680015546389,
          "rotation": 0,
          "target": "38-barn-left"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.0705566664987547,
          "pitch": 0.2726308139071758,
          "title": "Some Berries",
          "text": "Text"
        },
        {
          "yaw": 2.417533977163143,
          "pitch": 0.4559485183728924,
          "title": "Article on the Farm",
          "text": "Text"
        },
        {
          "yaw": 2.745404472234008,
          "pitch": 0.5586705963750624,
          "title": "Images Booklet",
          "text": "Text"
        },
        {
          "yaw": 3.078500442333416,
          "pitch": 0.3527840744920212,
          "title": "Rope &amp; Antler",
          "text": "Text"
        },
        {
          "yaw": 2.9836479263974107,
          "pitch": 0.14507879964088133,
          "title": "Restoration Info",
          "text": "June 2016"
        },
        {
          "yaw": -2.047706474486912,
          "pitch": 0.27322215927474147,
          "title": "Signs",
          "text": "Text"
        },
        {
          "yaw": -2.3060480054035857,
          "pitch": 0.18718201659844702,
          "title": "Weighing Scale",
          "text": "Text"
        },
        {
          "yaw": -2.40255668386253,
          "pitch": -0.6222584119262411,
          "title": "Poultry Sign - Ruggiero Bros",
          "text": "Text"
        }
      ]
    },
    {
      "id": "38-barn-left",
      "name": "Barn Left",
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
        "yaw": 3.1006918119547358,
        "pitch": -0.008469693260920508,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.183245055948289,
          "pitch": 0.7804297388018675,
          "rotation": 0.7853981633974483,
          "target": "37-barn-table"
        },
        {
          "yaw": -1.420373895573114,
          "pitch": 0.6144092795674396,
          "rotation": 0,
          "target": "39-barn-left-back"
        },
        {
          "yaw": 0.24190392870386646,
          "pitch": 0.5774823288506035,
          "rotation": 0,
          "target": "36-barn-center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.4547533411419487,
          "pitch": 0.3903770572763037,
          "title": "<div>Seed Drill</div>",
          "text": "Text"
        }
      ]
    },
    {
      "id": "39-barn-left-back",
      "name": "Barn Left Back",
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
        "yaw": 2.4154043400607694,
        "pitch": 0.33629706132827764,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5749717940276433,
          "pitch": 0.7038365019216748,
          "rotation": 0,
          "target": "38-barn-left"
        },
        {
          "yaw": -1.0569318766260611,
          "pitch": 0.5610902184570961,
          "rotation": 0,
          "target": "36-barn-center"
        },
        {
          "yaw": -2.5278801036005376,
          "pitch": 0.4660947750974813,
          "rotation": 0,
          "target": "43-barn-outside-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-barn-car",
      "name": "Barn Car",
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
        "yaw": -0.4257426311903014,
        "pitch": 0.036945990254693584,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9154964045755474,
          "pitch": 0.3601493434616838,
          "rotation": 0,
          "target": "41-woodworking-station"
        },
        {
          "yaw": -1.3813181651327824,
          "pitch": 0.36476161599399504,
          "rotation": 0.7853981633974483,
          "target": "42-car-close-up"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1986531520872958,
          "pitch": 0.7220533765261301,
          "title": "Wheelbarrow",
          "text": "Text"
        },
        {
          "yaw": -0.5780730278679957,
          "pitch": 0.3710462245744477,
          "title": "Car close-up",
          "text": "Text"
        },
        {
          "yaw": -0.1907455265283282,
          "pitch": 0.1131282582649824,
          "title": "Car seat close-up",
          "text": "Text"
        }
      ]
    },
    {
      "id": "41-woodworking-station",
      "name": "Woodworking Station",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1951252120807432,
          "pitch": 0.5495075504867444,
          "rotation": 0,
          "target": "40-barn-car"
        },
        {
          "yaw": -2.6027249543316273,
          "pitch": 0.35504382883601693,
          "rotation": 0,
          "target": "36-barn-center"
        },
        {
          "yaw": 1.9465481933630029,
          "pitch": 0.5155491182641558,
          "rotation": 0,
          "target": "35-barn-outside"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.30874009068757147,
          "pitch": 0.416783479692711,
          "title": "Woodworking State Close-up",
          "text": "Text"
        },
        {
          "yaw": -0.27137670866552455,
          "pitch": 0.034190395614395186,
          "title": "Horse Information",
          "text": "Text"
        },
        {
          "yaw": 0.5576397877799764,
          "pitch": -0.11416271907590314,
          "title": "General Store",
          "text": "Text"
        },
        {
          "yaw": 0.02409172811247373,
          "pitch": -0.007226692466733908,
          "title": "Closet Close-up",
          "text": "Text"
        }
      ]
    },
    {
      "id": "42-car-close-up",
      "name": "Car Close-up",
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
        "yaw": 0.22907351022794487,
        "pitch": 0.17418446660693832,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2230073642702752,
          "pitch": 0.5820769220705717,
          "rotation": 0,
          "target": "40-barn-car"
        },
        {
          "yaw": -3.014014683763113,
          "pitch": 0.39328291944897487,
          "rotation": 0,
          "target": "36-barn-center"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-barn-outside-back",
      "name": "Barn Outside Back",
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
        "yaw": 0.6227887512931645,
        "pitch": 0.08219278227269555,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3777107440904235,
          "pitch": 0.197011249435608,
          "rotation": 0,
          "target": "36-barn-center"
        },
        {
          "yaw": 1.0982077592283677,
          "pitch": 0.5558037407165966,
          "rotation": 0,
          "target": "44-barn-field-view"
        },
        {
          "yaw": 2.7709425977939217,
          "pitch": 0.20741512814463725,
          "rotation": 0,
          "target": "45-old-machines"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-barn-field-view",
      "name": "Barn Field View",
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
        "yaw": -0.35573873075117923,
        "pitch": 0.03536523731623831,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8797055299022025,
          "pitch": 0.34822532436567144,
          "rotation": 0,
          "target": "43-barn-outside-back"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.6156707290805095,
          "pitch": -0.12120737259360936,
          "title": "Old Farming Machinery",
          "text": "Text"
        },
        {
          "yaw": -1.7109124949114491,
          "pitch": 0.3749895422582785,
          "title": "Red Box Close-up",
          "text": "Text"
        },
        {
          "yaw": -0.030531400722564328,
          "pitch": 0.06351635327881766,
          "title": "Fieldwork",
          "text": "Text"
        }
      ]
    },
    {
      "id": "45-old-machines",
      "name": "Old Machines",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.994815883324634,
          "pitch": 0.43051431321116773,
          "rotation": 0,
          "target": "43-barn-outside-back"
        },
        {
          "yaw": 2.4851269809228036,
          "pitch": 0.3405388031956207,
          "rotation": 6.283185307179586,
          "target": "36-barn-center"
        },
        {
          "yaw": -2.475238456890633,
          "pitch": 0.2712847356459207,
          "rotation": 0.7853981633974483,
          "target": "44-barn-field-view"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2015786195439375,
          "pitch": 0.13119675397976138,
          "title": "View Front of Plough",
          "text": "Text"
        },
        {
          "yaw": -0.04796353680184495,
          "pitch": 0.2199592719684098,
          "title": "Another machine",
          "text": "Text"
        }
      ]
    },
    {
      "id": "46-equipment-barn-outside",
      "name": "Equipment Barn Outside",
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
        "yaw": -0.0111703013575557,
        "pitch": -0.2957380120814488,
        "fov": 1.644774032309396
      },
      "linkHotspots": [
        {
          "yaw": 1.4311168090152124,
          "pitch": -0.008764438669095043,
          "rotation": 5.497787143782138,
          "target": "24-schoolhouse-outside"
        },
        {
          "yaw": -0.014072875735649859,
          "pitch": 0.3508634294246775,
          "rotation": 0,
          "target": "47-military-car-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-military-car-front",
      "name": "Military Car Front",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.134277506744377,
          "pitch": 0.4215045570012741,
          "rotation": 0,
          "target": "46-equipment-barn-outside"
        },
        {
          "yaw": -0.7535536185407459,
          "pitch": 0.5194512686032464,
          "rotation": 0,
          "target": "48-military-car-left"
        },
        {
          "yaw": 0.7548694511651703,
          "pitch": 0.5703510396461766,
          "rotation": 5.497787143782138,
          "target": "52-front-corner-of-military-car"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-military-car-left",
      "name": "Military Car Left",
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
        "yaw": 2.827879938968783,
        "pitch": 0.0864738663685003,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5323938810464304,
          "pitch": 0.4534808022101373,
          "rotation": 0,
          "target": "50-tool-display-1"
        },
        {
          "yaw": -1.4681596299099038,
          "pitch": 0.6286004758221342,
          "rotation": 0,
          "target": "58-tool-display-3"
        },
        {
          "yaw": -2.4909271654720975,
          "pitch": 0.5247217137491091,
          "rotation": 0,
          "target": "47-military-car-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-360_0120_pano",
      "name": "360_0120_pano",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "50-tool-display-1",
      "name": "Tool Display 1",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8032667172718018,
          "pitch": 0.4002602172480252,
          "rotation": 0,
          "target": "57-tool-display-2"
        },
        {
          "yaw": 2.331300688310086,
          "pitch": 0.5434080764697651,
          "rotation": 5.497787143782138,
          "target": "53-old-equipment-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-back-of-military-car",
      "name": "Back of Military Car",
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
        "yaw": 3.1113873563731893,
        "pitch": 0.14950952989975974,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3437681457383555,
          "pitch": 0.3351877032466568,
          "rotation": 0,
          "target": "52-front-corner-of-military-car"
        },
        {
          "yaw": -1.1963251897511888,
          "pitch": 0.45484871356983625,
          "rotation": 0,
          "target": "53-old-equipment-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-front-corner-of-military-car",
      "name": "Front Corner of Military Car",
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
        "yaw": 2.498046648555751,
        "pitch": 0.28633050321091247,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8225296217728744,
          "pitch": 0.2679926287358949,
          "rotation": 0,
          "target": "51-back-of-military-car"
        },
        {
          "yaw": 1.6391044613712742,
          "pitch": 0.9414065550574051,
          "rotation": 0,
          "target": "47-military-car-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-old-equipment-0",
      "name": "Old Equipment 0",
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
        "yaw": 3.0020377858876497,
        "pitch": -0.0757339247190778,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.41083825344855107,
          "pitch": 0.41027959403223235,
          "rotation": 0,
          "target": "48-military-car-left"
        },
        {
          "yaw": -0.375288263970571,
          "pitch": 0.4185207098511672,
          "rotation": 0,
          "target": "51-back-of-military-car"
        },
        {
          "yaw": 3.0808073618826803,
          "pitch": 0.37776379222756873,
          "rotation": 0,
          "target": "59-old-equipment-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-old-equipment-2",
      "name": "Old Equipment 2",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.030778455001232885,
          "pitch": 0.33187305007873746,
          "rotation": 0,
          "target": "55-old-equipment-3"
        },
        {
          "yaw": -2.9230195640860597,
          "pitch": 0.3162371193323317,
          "rotation": 0,
          "target": "59-old-equipment-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.454441474971306,
          "pitch": 0.05151624036635205,
          "title": "1918 Moline Model D - Front",
          "text": "Text"
        },
        {
          "yaw": 1.7384327803558426,
          "pitch": 0.10715509876876439,
          "title": "1918 Moline Model D - Back",
          "text": "Text"
        }
      ]
    },
    {
      "id": "55-old-equipment-3",
      "name": "Old Equipment 3",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.31860675873532607,
          "pitch": 0.6511173932218917,
          "rotation": 0,
          "target": "56-machinery-closeup"
        },
        {
          "yaw": -3.02746890098698,
          "pitch": 0.36402322954084454,
          "rotation": 0,
          "target": "54-old-equipment-2"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.242202882475585,
          "pitch": 0.043311019507534354,
          "title": "1929 John Deere General Purpose",
          "text": "Text"
        },
        {
          "yaw": 1.0541403089624577,
          "pitch": 0.1826075754874239,
          "title": "1933 Hart-Parr 1B-27 Row Crop",
          "text": "Text"
        }
      ]
    },
    {
      "id": "56-machinery-closeup",
      "name": "Machinery Closeup",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2861607323411572,
          "pitch": 0.4482827824232629,
          "rotation": 0,
          "target": "55-old-equipment-3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.2424704458409597,
          "pitch": 0.09549300888306078,
          "title": "1927 Farmall Regular Row Crop",
          "text": "Text"
        },
        {
          "yaw": 0.8742659394619725,
          "pitch": 0.09878976555922492,
          "title": "1939-1947 Farmall A Row Crop",
          "text": "Text"
        },
        {
          "yaw": -0.8816032828595031,
          "pitch": -0.11326349305435102,
          "title": "View Closely",
          "text": "Text"
        }
      ]
    },
    {
      "id": "57-tool-display-2",
      "name": "Tool Display 2",
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
        "yaw": -2.853435392142009,
        "pitch": 0.14289364175612107,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.087480935203078,
          "pitch": 0.5758666030334698,
          "rotation": 0,
          "target": "58-tool-display-3"
        },
        {
          "yaw": -0.5910711653934726,
          "pitch": 0.7869718579492702,
          "rotation": 0.7853981633974483,
          "target": "50-tool-display-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "58-tool-display-3",
      "name": "Tool Display 3",
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
        "yaw": -3.1032491783361884,
        "pitch": 0.12323682025244054,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.713613140306693,
          "pitch": 0.5527712481190434,
          "rotation": 0,
          "target": "48-military-car-left"
        },
        {
          "yaw": -0.7384589182915171,
          "pitch": 0.5027799614629362,
          "rotation": 7.0685834705770345,
          "target": "57-tool-display-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "59-old-equipment-1",
      "name": "Old Equipment 1",
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
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1694685576582966,
          "pitch": 0.39713007203160267,
          "rotation": 0,
          "target": "54-old-equipment-2"
        },
        {
          "yaw": 3.0836045235030287,
          "pitch": 0.30269931900470937,
          "rotation": 0,
          "target": "53-old-equipment-0"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.401603712737348,
          "pitch": 0.10786235222239071,
          "title": "Buggy C. 1905",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Dey Farm Complete Site",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
