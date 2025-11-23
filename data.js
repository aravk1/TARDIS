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
          "text": "This framed piece contains two original 1933 handwritten receipts from a small general-store–style business, the kind of place that sold a bit of everything: groceries, produce, household staples, and farm supplies. The lists include everyday items like beans, potatoes, onions, crackers, vinegar, and lard, each priced in just a few cents, showing what routine shopping looked like during the Great Depression era, when every penny mattered and purchases were often recorded by hand rather than printed. The aged paper, careful pencil entries, and itemized totals reflect a time when community stores kept running tallies for local families, and buyers purchased ingredients in small, practical amounts rather than in bulk.", 
          "photo": "img/ALLCloseUps/Receipts.jpg"
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
          "text": "This display features a small collection of vintage dairy packaging saved by Mr. John Kirkpatrick, who was known for his interest in old milk delivery traditions. The assortment includes single-serve milk and cream cartons that reflect the graphic styles and branding of the period. A printed milkman order sheet sits at the center, showing how families requested specific products before home delivery routes disappeared. The cartons and paperwork together illustrate how dairy products were purchased, delivered, and labeled during an era when daily milk service was still a routine part of household life." ,
          "photo": "img/ALLCloseUps/DairyProduct.jpg"
        },
        {
          "yaw": -2.237073376614431,
          "pitch": 0.06711697353878421,
          "title": "Feb. 23, 1923",
          "text": "This letter reflects the way Forsgate Farms operated as both a large agricultural business and a tightly run local institution in the early 1920s, when much of central New Jersey’s economy still depended on farming, credit, and personal trust. A note like this shows that farm superintendents often acted not just as managers, but as bookkeepers, community intermediaries, and problem-solvers who relied on personal relationships to settle debts. Addressing John Kirkpatrick suggests he held a position that involved financial oversight or customer accounts, indicating he was someone the farm relied on for judgment and local connections. The letter also hints at the informal nature of business at that time, when collecting money often depended on who you knew rather than on formal systems. Including a line congratulating Kirkpatrick on his new appointment suggests he was moving upward in responsibility within the regional farming or delivery network, showing his reputation mattered in these circles." ,
          "photo": "img/ALLCloseUps/Feb. 23, 1923.jpg"
        },
        {
          "yaw": 3.045398479520376,
          "pitch": -0.450254273427241,
          "title": "Native American Exhibit",
          "text": "This small exhibit highlights everyday items connected to the Lenape people and the early inhabitants of central New Jersey, whose tools and traditions shaped the region long before European settlement. The illustrated sheet showing grooved axes and hafted stone tools reflects the types of implements the Lenape crafted for hunting, wood-working, and daily survival, each made through labor-intensive techniques passed down through generations. The stone tool on display represents the kind of artifact often found in local fields and riverbanks, reminders that Lenape communities lived, traveled, and traded throughout the Raritan Valley. The doll evokes Lenape clothing traditions, beadwork, and storytelling practices that families used to teach children about identity and heritage. Nearby medicinal bottles connect to a later period when Indigenous knowledge of plants influenced early American remedies, even as pharmacies and settlers gradually replaced traditional healing systems.",
          "photo": "img/ALLCloseUps/Native American.jpg"
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
          "text": "This display contains original components from the first post office established in the Monroe area, including an early set of combination mailboxes and the door that once marked the entrance to the facility. Early rural post offices like this typically operated from small general stores or private homes and served as the central point for mail distribution before dedicated buildings existed. The mailbox cabinet reflects the period’s manual sorting system, where residents retrieved letters and parcels directly from assigned boxes rather than receiving home delivery. The door and metal boxes together document the early administrative structure of Monroe’s postal service and show the types of materials and equipment used during the first decades of organized mail handling in the township." , 
          "photo": "img/ALLCloseUps/Old Mail System.jpg" 

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
          "text": "Physical Culture City was an early-20th-century health and fitness community founded by Bernarr Macfadden, a prominent advocate of physical exercise, fresh air, and natural living. It operated as a self-contained training colony where residents followed structured routines that included calisthenics, outdoor sports, diet programs, and instructional lectures based on Macfadden’s philosophies. The photographs and documents in this display show the buildings, athletic fields, and large group activities that characterized the site. Physical Culture City is considered one of the first organized wellness settlements in New Jersey, reflecting a period when physical fitness movements were beginning to take shape long before commercial gyms became common.",
          "photo": "img/ALLCloseUps/Physical Culture City.jpg" 

        },
        {
          "yaw": 0.5487532266342221,
          "pitch": 0.4508857447128545,
          "title": "Meet Achsah Mount",
          "text": "Achsah Mount was a member of the Mount family, one of the long-established farming families in the region during the 19th century. She was born on January 10, 1829, as one of twelve children of Abidjan and Mary Mount, a large household typical of rural families who relied on many hands to manage farm work and domestic responsibilities. The family lived in the house along Route 33 West, a property that still stands today and represents the kind of multi-generational homestead common in that era. Achsah never married and lived her entire life within the family network, which likely meant participating in household labor, helping raise younger siblings, and contributing to farm operations. She lived to the age of 72, passing away in a period when many women’s lives were centered around family, land, and community ties. The portrait shown in the display, dated to the 1860s, is one of the few surviving images of her and provides a rare glimpse into the appearance and daily world of someone who otherwise would not have been widely documented in public records.",
          "photo": "img/ALLCloseUps/Meet Achsah Mount.jpg" 

        },
        {
          "yaw": 0.2800480538831316,
          "pitch": 0.3769076752417142,
          "title": "Spinning Wheel",
          "text": "This is a traditional spinning wheel, a tool that was commonly used from the 1700s through the early 1900s in households that produced their own textiles. Spinning wheels like this one were used to twist raw fibers—such as wool, flax, or cotton—into yarn or thread that could later be woven into fabric. The large wheel was turned by hand to power the spindle, and the operator fed fibers in gradually to control the thickness and strength of the thread. A setup like this typically sat in the main living area of a home, since spinning was a regular chore that could be done while supervising children or tending the household fire. The cones of yarn placed on the bench here illustrate the finished product that the wheel helped create. A wheel of this size and style suggests it was used for producing longer, finer thread rather than heavy rope, and it reflects the kind of home-based textile work that was essential before manufactured cloth became widely available." , 
          "photo": "img/ALLCloseUps/Spinning Wheel.jpg" 

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
          "text": "This book, titled The Pastor’s Life Record by J. N. Greene, was a tool used by ministers to document important events in the lives of the people in their congregations. Before widespread access to state-issued birth certificates, death certificates, and centralized civil record systems, churches were often the primary institutions responsible for keeping track of personal milestones. A pastor used a record book like this to log baptisms, births, marriages, confirmations, membership changes, and deaths within the community. These entries served as official proof of identity, age, and family relationships when no government registry existed or when rural areas lacked local clerks. Such books were also used to track pastoral visits, spiritual concerns, and major family events, creating a long-term chronicle of the community’s history. Many early genealogical records survive today because ministers maintained detailed volumes like this one, making them valuable sources for tracing family lines and documenting local life before the establishment of formal vital records systems.",
          "photo": "img/ALLCloseUps/Pastors Life Record.jpg" 

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
          "text": "This is an early Edison cylinder phonograph, one of the first machines ever used to record and play back sound. Unlike later gramophones that used flat discs, this type of phonograph played wax cylinders like the one shown beside it. The large metal horn amplified the sound mechanically, since these machines predate electric speakers. To operate it, the user wound a hand crank to power the mechanism, placed a wax cylinder onto the rotating mandrel, and lowered a small stylus onto the surface. As the cylinder turned, the stylus traced grooves that captured vibrations from the original recording, reproducing the sound through the horn. Machines like this were common from the late 1800s through the early 1900s and were found in homes, schools, and community halls. They were used for music, spoken-word recordings, and even early dictation. The cylinder container next to the phonograph is original packaging, often printed with the performer’s portrait or the title of the recording. This setup represents one of the earliest practical ways people could listen to recorded sound, long before vinyl records, radio, or modern audio technology.",
          "photo": "img/ALLCloseUps/Gramaphone.jpg" 

        },
        {
          "yaw": -0.14372716167596877,
          "pitch": 0.25647964706705295,
          "title": "Edison Gold Mould Record",
          "text": "This is the original storage container for an Edison Gold Moulded Record, one of the wax cylinders used on early phonographs in the early 1900s. The cardboard tube protected the cylinder inside, which was made of a hardened wax formula designed to produce clearer, longer-lasting playback than earlier soft-wax recordings. The phrase “Echo All Over the World” was a marketing slogan used by Edison to promote the reach and reliability of his recording technology at a time when cylinder records were still a new form of home entertainment. Each container was labeled with the brand, the manufacturing plant, and often the name of the performer or recording once the cylinder was placed inside. Containers like this were essential because wax cylinders were fragile and could easily crack without protection. This piece represents the packaging that accompanied one of the earliest commercially distributed sound recordings in history." ,
          "photo": "img/ALLCloseUps/Edison Gold Mould Record.jpg" 

        },
        {
          "yaw": 2.623231760387384,
          "pitch": 0.3368722886687472,
          "title": "Warren Southworth",
          "text": "This display honors Warren Southworth, a Monroe Township servicemember who was killed in action during World War II. Southworth entered military service in 1944 and was killed on December 22 of that year while serving in France, during the final months of the European campaign. The centerpiece photograph shows him standing beside the Monroe Township Honor Roll, a board that listed local residents serving in the armed forces. The medals included in the frame—the Purple Heart and additional commendations—represent the formal recognition he received from the U.S. Army for his service and sacrifice. The documents at the bottom include official military notifications and newspaper clippings reporting his death, which were commonly sent to families during the war. Together, the materials preserve the record of a local soldier whose life was cut short in combat and who is remembered within both his community and military history.",
          "photo": "img/ALLCloseUps/Warren Southworth.jpg" 

        },
        {
          "yaw": 0.29882549169558814,
          "pitch": 0.21556573670650359,
          "title": "Open Record Player",
          "text": "This is a Victrola floor-model phonograph produced by the Victor Talking Machine Company, one of the most common and recognizable home record players of the early 20th century. It played flat shellac records using a fully mechanical sound system housed inside a wooden cabinet that also served as storage for a family’s music collection. Victrolas like this were a major step in bringing recorded music into everyday households long before electronic record players or radios became widespread. Fun fact: this particular Victrola still works today!",
          "photo": "img/ALLCloseUps/Open Record Player.jpg" 

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
          "text": "This book is a mid-20th-century children’s anthology titled Best Loved Fairy Tales, published by Parents’ Magazine, a company known for producing educational and family-oriented books. Collections like this were common in American households from the 1940s through the 1960s, offering classic stories such as Cinderella, Little Red Riding Hood, Mother Goose rhymes, and other traditional folktales in simplified, child-friendly versions. The illustrations on the cover reflect the style of the period, showing dramatic scenes meant to spark imagination and encourage early reading. Books like this were often given as gifts, used in elementary classrooms, or kept as family bedtime-reading staples, and many remain nostalgic keepsakes for those who grew up during that era.",
          "photo": "img/ALLCloseUps/Fairy Tales.jpg" 

        },
        {
          "yaw": -0.9464291895580565,
          "pitch": 0.355558424623144,
          "title": "Grandpa's Jacket",
          "text": "This is a preserved child’s dress jacket from around 1914, kept as a family heirloom. The blue fabric, decorative white buttons, and gold fringe show that it was made as a special-occasion garment, likely worn for a school program, parade, or other community event. According to the handwritten note stored with it, the jacket belonged to a family member—referred to as a grandfather when he was a young boy—and has been passed down through generations. Children’s clothing from this period was often handmade or custom sewn, so garments like this were valued not only for their appearance but also for the work and care that went into making them. The small metal item stored alongside the jacket was kept with it as part of the original family collection, preserving both the outfit and the personal history connected to it.",
          "photo": "img/ALLCloseUps/Grandpa Jacket.jpg" 

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
          "text": "This is a set of garter cords, an item women used before the invention of modern pantyhose. Before the 1960s, women typically wore separate stockings that came up only to the thigh. To keep them from slipping down, they used devices like these—elastic cords or bands that fastened just above the knee. The cords were tightened enough to hold the stocking in place but loose enough to avoid discomfort. Garter cords and garter belts were everyday clothing accessories for decades, and they were considered as essential as shoes or gloves in a woman’s wardrobe. This example shows the type of practical garment hardware that was part of women’s daily dressing long before stretch nylon made full pantyhose possible.",
          "photo": "img/ALLCloseUps/Womens clothes.jpg" 

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
          "text": "This display brings together personal grooming items and early photographic equipment from the early 20th century. The brown hand mirror, natural-bristle brush, and celluloid comb represent typical vanity tools used in women’s and children’s daily grooming routines during that period. Beside them is a Kodak box camera, one of the simple, affordable models that helped make personal photography widely accessible. Next to it is a folding bellows camera, the type used for more formal portraits and higher-quality images. The photograph in the center shows Kathryn Ely at three years old, offering an example of the kind of childhood portrait these cameras produced." ,
          "photo": "img/ALLCloseUps/Table Close Up.jpg" 

        },
        {
          "yaw": -2.401438365769067,
          "pitch": 0.20820630491155612,
          "title": "Sewing Machine Info",
          "text": "This is an original instruction sheet that accompanied a Florence Vibrator sewing machine, produced by the A. G. Mason Manufacturing Company of Cleveland, Ohio, in the early 1900s. Sheets like this were included with home sewing machines to guide owners in choosing the correct needles and thread for different types of fabric, since early machines were very sensitive to needle size and quality. The chart lists which needle numbers to use with various weights of cotton and silk thread, reflecting the standardized sewing system of the period. The document also contains a strong warning about “bogus needles,” emphasizing that only genuine Florence flat-shank needles should be used—common language for manufacturers at the time, since counterfeit or incompatible needles could damage the machine. It even instructs owners not to let repairmen from other companies work on the machine, reminding users that unauthorized repairs could void the guarantee. This sheet shows how early sewing machine companies protected their products, instructed new owners, and helped standardize home sewing long before modern instruction manuals were common.",
          "photo": "img/ALLCloseUps/Sewing Machine Info.jpg" 

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
          "text": "This is an early portable electric hair dryer, likely from the 1940s or 1950s. Before modern handheld blow dryers became common, women used compact motorized units like this one, which were stored in small carrying cases lined with fabric or vinyl. The dryer produced heated air through the vented metal head, while the long cord allowed it to be used at a vanity or dressing table. The elastic fabric tubes inside the case were part of the original setup and were used to direct warm air into a bonnet or cap, allowing for hands-free drying and setting of hairstyles. These early dryers were popular because they brought salon-style hair setting into the home at a time when electric grooming devices were still new.",
          "photo": "img/ALLCloseUps/Hairdryer.jpg" 

        },
        {
          "yaw": -1.0997120436607641,
          "pitch": 0.206195460653964,
          "title": "Razor",
          "text": "This is a vintage safety razor set, the type commonly used by men from the early 1900s through the mid-20th century. The metal razor on the right holds a single double-edged blade, which was clamped between the top and bottom plates to create a safer, more controlled shave than older straight razors. The small gold-colored case contains the full kit: the razor handle (disassembled for storage), spare blades, and the original razor head. Sets like this were designed for travel and everyday use, and they were built from durable metal so they could last for decades. Safety razors dramatically changed personal grooming by making shaving quicker and more hygienic, and designs like this became the standard before disposable plastic razors appeared in the 1960s.",
          "photo": "img/ALLCloseUps/Razor.jpg" 

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
          "text": "This is a collection of early 20th-century cast-iron and tinplate toy vehicles, displayed in a wooden case to protect the pieces. Toys like these were made between the 1900s and 1930s by companies such as Hubley, Kenton, and Arcade, which specialized in heavy, durable metal toys. The set includes miniature fire engines, wagons, and early automobiles—popular themes at the time, since children’s toys often mirrored the machinery and transportation they saw in everyday life. These toys were hand-painted at the factory, and many featured moving parts such as rolling wheels, hinged ladders, or detachable horses. Cast-iron toys were prized for their sturdiness and remained family keepsakes because they survived decades of play.",
          "photo": "img/ALLCloseUps/Box of Toys.jpg" 

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
          "text": "This display contains printed sketch cards depicting several historic landmarks from Monroe Township in Middlesex County. These cards were created as small commemorative illustrations, often sold or distributed by local historical groups to document important community sites. The sketches include the Monroe Oak Tree, a long-recognized natural landmark; the Baker Home on Rhode Hall Road, dated 1860; the Spotswood Home Barn; and the Gravel Hill Sunday School from 1895. Each card highlights a different piece of Monroe’s early architectural, religious, or natural history, preserving the appearance of buildings and locations that played a role in shaping the township’s development. Collections like these help record structures that may have changed significantly or no longer exist, offering a visual record of Monroe’s heritage.",
          "photo": "img/ALLCloseUps/Historic Site Sketches.jpg" 

        },
        {
          "yaw": 2.360367413463111,
          "pitch": 0.507708138937847,
          "title": "Katherine S. Patten Gravestone",
          "text": "This display features a photograph of the gravestone of Katherine S. Patten, who lived from 1859 to 1914 and was the wife of Clarkson B. Applegate. The Applegate and Patten families were long-established names in the region, appearing in local records, cemeteries, and early township documents from the 19th and early 20th centuries. Framing a photograph of a gravestone is a common method used by historical societies and family historians to preserve and highlight individuals connected to the area’s early settlement and community life. The stone itself is shaped in the rounded, barrel-like style that became popular in the late 1800s, suggesting it was carved shortly after her death." ,
          "photo": "img/ALLCloseUps/Gravestone.jpg" 

        },
        {
          "yaw": 0.2116977047152453,
          "pitch": -0.14245944260284737,
          "title": "Lamp Close-up",
          "text": "This is a mid-20th-century porcelain figural lamp, designed with a decorative base featuring a pair of figures dressed in 18th-century European court attire. Lamps of this style were popular from the 1940s through the 1960s, when manufacturers often combined electric lighting with ornate porcelain figurines to create a statement piece for parlors, sitting rooms, or bedroom vanities. The figures—typically inspired by Rococo fashion with powdered wigs, embroidered coats, and full gowns—were meant to evoke elegance and refinement rather than depict specific historical individuals. The painted blue-and-white detailing reflects a common color palette used in European-style decorative ceramics. The brass-toned base and frosted glass globe are original components of these lamps, which were valued not only for illumination but also as ornamental household décor.",
          "photo": "img/ALLCloseUps/Lamp.jpg" 

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
          "text": "This display features porcelain figurines and a commemorative plate, all created in the classic blue-and-white ceramic style that became especially popular in European decorative arts. The two figurines depict 18th-century musicians and readers, dressed in Rococo-inspired clothing with detailed painting and gilt accents. These types of figurines were widely produced in the mid-20th century for use as parlor or china-cabinet decorations, often modeled after earlier German and French porcelain traditions. The plate in the foreground is a 1973 PÅSKEN plate—“Påsken” is the Scandinavian word for Easter—showing that it is part of a collectible Easter series produced by a Scandinavian porcelain manufacturer. Plates like this were typically released annually and purchased as holiday keepsakes. The blue floral and bird motif reflects the Art Nouveau revival designs common in Scandinavian ceramics during the 20th century.",
          "photo": "img/ALLCloseUps/Glass Dolls.jpg" 

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
          "text": "This preserved section of rail represents the original alignment of the Camden & Amboy Railroad as it passed through Monroe in the 1800s. The short length of track is set on granite sleepers, the heavy stone blocks used before wooden ties became standard in the mid-19th century. These stones are authentic remnants of the early railbed, illustrating how the line looked during its earliest decades of operation. Although the full railway was removed long ago, this installation marks the exact corridor where trains once ran, carrying passengers, freight, and mail across central New Jersey.",
          "photo": "img/ALLCloseUps/Railroad.jpg" 

        },
        {
          "yaw": -2.7984017766371316,
          "pitch": -0.0948551027042921,
          "title": "Railroad Info",
          "text": "This marker explains the history of the Camden & Amboy Railroad, one of New Jersey’s earliest and most important rail lines. Built in 1830, the line crossed through what is now Monroe Township from southwest to northeast. In its earliest years, railroad cars on this route were pulled by horses until 1833, when the English-built John Bull steam locomotive replaced horse-drawn service. The plaque notes that the original rails were laid on granite blocks known as “sleepers,” several of which have been preserved on site. These stone supports were later replaced by wooden ties, which offered smoother and more reliable travel. By 1871, the Camden & Amboy Railroad had been absorbed into the Pennsylvania Railroad system, reflecting the consolidation of early American railroads into larger networks. The sign was installed as part of a local Eagle Scout project.",
          "photo": "img/ALLCloseUps/Railroad info.jpg"
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
          "text": "This is a vintage men’s riding coat and pair of leather riding gaiters, the type worn for horseback travel or farm work in the early to mid-20th century. The coat is made from a heavy wool tweed, a durable fabric chosen for warmth and weather protection during outdoor labor or riding. The black leather gaiters, which zip up the sides, were worn over everyday shoes to shield the lower legs from mud, brush, and cold while on horseback. Outfits like this were common on farms and rural properties before automobiles became widespread, and they reflect the practical clothing used for daily transportation and fieldwork.",
          "photo": "img/ALLCloseUps/Old Coat.jpg" 

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
          "text": "This is the school bell from Monroe’s one-room schoolhouse, dated 1886. Bells like this were mounted either on the roof or outside the entrance and were rung to signal the start of the school day, recess, and dismissal. In rural communities, the sound of the bell carried across farmland and dirt roads, guiding children who walked long distances from surrounding homes. Cast from heavy iron, the bell’s durable construction allowed it to withstand weather for decades, even after the school itself closed. As one-room schoolhouses were phased out in the early 20th century, many bells were removed and preserved as historical artifacts.",
          "photo": "img/ALLCloseUps/School Bell.jpg" 
        },
        {
          "yaw": 2.471494555782674,
          "pitch": 0.14385207259518928,
          "title": "Student Essay",
          "text": "This document is a handwritten personal recollection titled “My School Days – Bur Rogers,” describing the author’s experiences attending the Old Church School, Monroe’s historic one-room schoolhouse. The account provides a first-hand narrative of daily life in the school, including walking across fields to reach the building, sharing a classroom that held only about 24 to 36 students across grades K–8, and relying on outdoor privies and a hand pump for water. The writer also notes details such as the lack of electricity, the use of the school bell, and the routines that structured the day. Memoirs like this are valuable because they preserve lived experiences that complement physical artifacts—offering insight into how rural education functioned before modern school systems, utilities, and transportation were in place.",
          "photo": "img/ALLCloseUps/Student Essay.jpg" 

        },
        {
          "yaw": 2.67322151958159,
          "pitch": 0.19488906975040088,
          "title": "Former Student &amp; First Nurse",
          "text": "This display features two historical photographs documenting education and school health in Monroe during the 1930s. The first image shows Jean Ely, a student at the Hall-Acres Four-Room School sometime in the 1930s, representing the generation of children who attended Monroe’s small, multi-grade school buildings before modern consolidated schools were built. The second photograph is of Josephine Chamberlain, identified as Monroe Township’s first school nurse in 1938. Her appointment reflects a major shift in public education during that era, when schools across the United States began hiring trained nurses to monitor student health, manage illnesses, and improve hygiene in classrooms",
          "photo": "img/ALLCloseUps/Student and Nurse.jpg" 

        },
        {
          "yaw": -2.8720595080652913,
          "pitch": 0.29350852513417536,
          "title": "Schools History",
          "text": "This page outlines the earliest forms of schooling in Monroe Township, beginning with an 18th-century Indian school built from hand-hewn timber near present-day Jamesburg. It describes how early education relied on itinerant teachers who boarded with local families and taught in log structures or private homes. The excerpt also preserves stories from these frontier schools, including an incident at the Matchaponix school where students barricaded their teacher outside and later tried to smoke him out through the chimney. Names of early 19th-century teachers are listed, along with references to apprenticeship papers that show how limited and irregular formal education was at the time.",
          "photo": "img/ALLCloseUps/Schools History.jpg" 

        },
        {
          "yaw": -3.0704563931396294,
          "pitch": 0.1769273894766421,
          "title": "Top-view",
          "text": "This panoramic photograph shows an entire school community assembled outdoors, likely students and teachers from multiple grades gathered for a formal group portrait. Panoramic class photos like this were common before individual school pictures became standard, and they were often taken during special occasions such as the start of a school year, a graduation, or a visit from an outside official. The long format allowed the photographer to capture the full student body at once, documenting class size, clothing styles, and the structure of early schooling in the area.",
          "photo": "img/ALLCloseUps/Top-view.jpg" 

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
          "text": "This is an early 20th-century wooden school pencil box, the kind many rural students used before mass-produced metal or plastic cases became common. The sliding lid is decorated with a printed strip featuring small portrait medallions—a popular style for inexpensive school supplies at the time. Inside the box are period writing tools, including a dip-pen with a metal nib and a simple wooden pencil. Boxes like this were durable enough to last for years and were often one of the few personal items a student brought to a one-room schoolhouse.",
          "photo": "img/ALLCloseUps/Pencilcase.jpg" 

        },
        {
          "yaw": -2.582768792754969,
          "pitch": 0.16716468983556254,
          "title": "Top-view of Table",
          "text": "This panel shows several of Monroe Township’s early one-room and small rural schools—buildings that served local children long before the establishment of a formal district. Each image captures a different schoolhouse, usually a single classroom heated by a stove and taught by one teacher who managed all grades at once. Schools like Prospect Plains (c. 1890), Pleasant Hill (c. 1908), Half-Acre, and Dey Grove were spaced throughout farming communities so children could walk from nearby homes. Many of these buildings were later converted into private residences or community spaces once larger, consolidated schools opened in the mid-20th century. The photographs also document the students and teachers who worked in these tight, multigrade environments, offering a snapshot of everyday education in rural New Jersey at the turn of the century." , 
          "photo": "img/ALLCloseUps/topview of table.jpg" 

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
          "text": "These boxes of chalk and gummed labels are examples of everyday materials used in rural and small-town classrooms before the dominance of modern markers and printed stickers. The chalk—produced by companies like Binney & Smith, the future makers of Crayola—was the standard writing medium for blackboards, and teachers often kept multiple colors for maps, diagrams, and lessons. The “gummed labels” were early adhesive tags that required moistening before use, commonly applied to student notebooks, textbooks, or classroom storage.",
          "photo": "img/ALLCloseUps/Chalks.jpg" 

        },
        {
          "yaw": 2.742365876168649,
          "pitch": 0.1341252314132806,
          "title": "View Schools",
          "text": "These photographs document several of the small neighborhood schools that once served Monroe’s farming communities. Dey Grove School (c.1924) and Rhode Hall’s one-room schoolhouse reflect the era when children of all ages were taught together by a single teacher in a single room. Pleasant Grove School, shown here in 1913 under teacher Rebecca T. Allen, shows how these schools acted as both educational and social centers for rural families. The Rhode Hall image also preserves a unique detail from local industry—its school logo was later reused on potato sacks produced by the nearby Clayton farms.",
          "photo": "img/ALLCloseUps/View Schools.jpg" 

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
          "text": "This photograph shows the students of Pleasant Hill, a one-room schoolhouse typical of early rural education. Under teacher Lenora Applegate, children of many ages learned together in a single space, often sharing books, supplies, and lessons. The image captures the mixed-grade structure of these schools and the close, small-community setting in which they operated." , 
          "photo": "img/ALLCloseUps/Pleasant Hill.jpg" 

        },
        {
          "yaw": 3.1089158499369285,
          "pitch": 0.002543418208720283,
          "title": "Old Textbooks and Chalkboard",
          "text": "This small standing chalkboard represents the type of portable board used in early classrooms, especially in one-room schoolhouses where teachers needed flexible space for multiple age groups. The patriotic paper trim across the top reflects materials commonly used in mid-20th-century classrooms, when teachers decorated boards with leftover textbook covers, flag prints, or bulletin-board scraps. Stacked beside it are older reference books—likely encyclopedias or graded readers—showing the kind of shared materials students relied on before schools had individual textbooks for each child. The toys and supplies tucked underneath the board echo the way classrooms doubled as storage spaces, with everything from chalk to teaching aids kept wherever there was room.",
          "photo": "img/ALLCloseUps/Old Textbooks and Chalkboard.jpg" 

        },
        {
          "yaw": -2.736105903829042,
          "pitch": 0.01987031951144047,
          "title": "Books",
          "text": "This collection of early 20th-century schoolbooks reflects the types of materials students used in one-room schoolhouses. Many of the books are children’s fiction titles—such as Dorothy Dainty at the Shore—which were commonly assigned to help beginning readers build vocabulary and fluency. Others are well-worn lesson books used for subjects like grammar, geography, and moral instruction. Their ornate cloth covers and embossed illustrations are typical of schoolbooks printed between the 1890s and 1920s, when publishers prioritized durability and decorative appeal for young readers.",
          "photo": "img/ALLCloseUps/Books.jpg" 

        },
        {
          "yaw": -2.8896984914495807,
          "pitch": 0.2935726025161891,
          "title": "Children's toys",
          "text": "This wooden wagon filled with small toys represents the kinds of simple, durable playthings found in early 20th-century one-room schoolhouses. The blocks, carved from wood and painted with letters, numbers, and silhouettes, were used to teach beginners basic literacy and counting through hands-on play. The miniature bowling pins and other small pieces reflect how recess entertainment relied on compact games that could be shared by many ages in a small space. Toys like these were often handmade at home or by local craftspeople, since mass-produced plastic toys didn’t yet exist. Their heavy wear shows how many children passed through the schoolhouse over the years, learning and playing with the same small set of classroom toys.",
          "photo": "img/ALLCloseUps/School Toys.jpg" 

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
          "text": "This is a classic early 20th-century student desk of the kind used in one-room schoolhouses. The wooden seat and back belonged to one child, while the attached desktop in front was used by the child sitting behind them—so rows of students were literally connected by their furniture. The cast-iron frame was made by the N. School-Church Furniture Co. of Trenton, New Jersey, one of several regional manufacturers that supplied durable, mass-produced desks to rural schools. Each student wrote on a personal slate like the one on the desk, since paper was expensive and slates could be wiped clean and reused all day.",
          "photo": "img/ALLCloseUps/Desks.jpg" 

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
          "text": "This display shows a mid-20th-century Monroe High School varsity jacket and graduation cap, preserved as an example of local school spirit and student life. The jacket’s bold purple and gold color scheme reflects the school’s longtime athletic colors, and the embroidered initials on the chest mark it as a personalized piece earned through participation in sports or other school activities. Letterman-style jackets like this became especially popular after the 1940s, symbolizing achievement, community identity, and pride in representing one’s school. The matching cap and gown highlight how graduation ceremonies were already adopting the modern traditions we recognize today.",
          "photo": "img/ALLCloseUps/Varsity Jacket.jpg" 

        },
        {
          "yaw": -2.720223568821547,
          "pitch": -0.32098112622498576,
          "title": "High School Degree",
          "text": "This case features early Monroe Township school documents, including original teacher contracts signed by the Board of Education, a 1906–1907 New Jersey School Register, and rolled archival records used for attendance and planning. At the center is a classic Monroe Township Public Schools diploma holder, alongside a hand bell once used by teachers to signal the start and end of lessons.",
          "photo": "img/ALLCloseUps/Diploma.jpg" 

        },
        {
          "yaw": -2.688965384333578,
          "pitch": 0.07356914307716877,
          "title": "Ely High School Picture",
          "text": "This is a formal high-school portrait of Kathryn Marie Ely, showing her seated in a white dress with short, waved 1920s–1930s–style hair. The wire-rimmed eyeglasses displayed underneath are the same pair she is wearing in the photograph, preserved as part of the collection.",
          "photo": "img/ALLCloseUps/Ely HS.jpg" 

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
          "text": "This display shows a set of wooden produce baskets filled with berries, representing the kinds of fruits grown and sold in the Monroe area. The berries are paired with early farm tools, including a hand-crank food grinder used in local kitchens for processing fruits and vegetables. There is also a cast-iron hand-crank grinder once used for preparing foods on Monroe farms. Devices like this helped families grind fruit, vegetables, and meat long before electric appliances existed.",
          "photo": "img/ALLCloseUps/Berries.jpg" 

        },
        {
          "yaw": 2.417533977163143,
          "pitch": 0.4559485183728924,
          "title": "Article on the Farm",
          "text": "This article describes how small early farm dwellings in the area were replaced by larger frame farmhouses with red-painted barns and sheds. It highlights the region’s productive farmland, where crops like corn, clover, and grass were rotated to improve soil quality. It also mentions that 400 to 500 mules worked locally—half on the Raritan Canal and the rest on nearby farms—and notes that peaches once grew in abundance before disease affected the orchards.",
          "photo": "img/ALLCloseUps/Article on the Farm.jpg" 

        },
        {
          "yaw": 2.745404472234008,
          "pitch": 0.5586705963750624,
          "title": "Images Booklet",
          "text": "This book, authored by John D. Katerba, is part of Arcadia Publishing’s Images of America series, which documents local history through archival photographs. The cover features a historic class portrait from one of Monroe Township’s early one-room schools, highlighting students and their teacher in the early 20th century. The volume preserves regional history through photographs, captions, and curated narratives drawn from township archives, family collections, and historical society records.",
          "photo": "img/ALLCloseUps/Images Booklet.jpg" 

        },
        {
          "yaw": 3.078500442333416,
          "pitch": 0.3527840744920212,
          "title": "Rope &amp; Antler",
          "text": "This display pairs a length of thick, weathered rope with a shed deer antler, both common items on early Monroe Township farms. Rope like this was used for hauling, tying livestock, and everyday chores, while naturally shed antlers were often repurposed as tools or handles. The rough texture of the rope and the worn surface of the antler highlight how heavily farmers relied on simple, durable materials. Together, they show the practical, resourceful nature of rural work in the late 19th and early 20th century.",
          "photo": "img/ALLCloseUps/Rope and antler.jpg" 

        },
        {
          "yaw": 2.9836479263974107,
          "pitch": 0.14507879964088133,
          "title": "Restoration Info",
          "text": "This informational sign describes the 2016 restoration of the historic Dey Barn, originally built in the 1830s from old-growth timber and maintained by the Dey family for generations. It outlines how the structure was dismantled, repaired, and rebuilt using traditional barn-raising techniques to preserve Monroe Township’s agricultural heritage.",
          "photo": "img/ALLCloseUps/Restoration.jpg" 

        },
        {
          "yaw": -2.047706474486912,
          "pitch": 0.27322215927474147,
          "title": "Signs",
          "text": "These hand-painted wooden signs were used by local Monroe Township farmers to label produce at roadside stands. “SNAP BEANS” marked freshly picked green beans, while “FOR SALE” was a general sign hung out front to signal that the day’s harvest was available. Signs like these were made quickly from scrap wood, painted in bold letters so they could be read from the road, and reused season after season as different crops came into harvest.",
          "photo": "img/ALLCloseUps/Signs.jpg" 

        },
        {
          "yaw": -2.3060480054035857,
          "pitch": 0.18718201659844702,
          "title": "Weighing Scale",
          "text": "This is a vintage household scale manufactured by Landers, Frary & Clark, a well-known Connecticut company that produced domestic goods from the mid-1800s through the early 20th century. Scales like this were commonly used in farm kitchens and small stores to weigh produce, dry goods, and ingredients for cooking or canning. Its cast-iron base and metal dial were built for durability, which is why many of these scales survived decades of regular use.",
          "photo": "img/ALLCloseUps/Weighing Scale.jpg" 

        },
        {
          "yaw": -2.40255668386253,
          "pitch": -0.6222584119262411,
          "title": "Poultry Sign - Ruggiero Bros",
          "text": "This wooden sign comes from the Ruggiero Brothers’ Monroe Poultry Farm, one of the many small, family-run agricultural businesses that once operated across Monroe Township. Poultry farms like theirs supplied eggs, meat, and fresh goods to local markets long before large-scale commercial farming became common. Signs of this style were typically hand-painted and hung roadside to attract customers passing through rural areas.",
          "photo": "img/ALLCloseUps/Poultry Sign.jpg" 


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
          "text": "This walk-behind seed planter was used by local farmers to plant crops in long, even rows. As the wheel rolled forward, the mechanism opened a small trench, dropped individual seeds from the metal hopper, and then covered them with soil in one continuous motion. Tools like this dramatically sped up planting compared to sowing by hand, helping farmers in Monroe Township manage larger fields with fewer workers. The simple construction and durable iron parts made it reliable for decades of seasonal use on family farms.",
          "photo": "img/ALLCloseUps/Seed Drill.jpg" 

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
          "text": "This is a hand-built wooden wheelbarrow used on small family farms for hauling firewood, harvest baskets, tools, and feed. Its curved side panels and single stout wheel are typical of early farm designs, made to move loads over uneven ground. The red tint on the boards comes from old protective stains commonly mixed on farms using linseed oil and natural pigments. Pieces like this were completely handmade, often repaired repeatedly, and used daily during planting, harvesting, and barn chores.",
          "photo": "img/ALLCloseUps/Wheelbarrow.jpg" 

        },
        {
          "yaw": -0.5780730278679957,
          "pitch": 0.3710462245744477,
          "title": "Car close-up",
          "text": "This is a lightweight, single-horse carriage once used for quick travel around rural Monroe Township. The long wooden shafts extended forward to attach to the horse’s harness, while the large spoked wheels and elevated seat provided a smoother ride over uneven dirt roads. Carriages like this were essential before automobiles, serving farmers, merchants, and families for everyday transportation across town.",
          "photo": "img/ALLCloseUps/Car close-up.jpg" 

        },
        {
          "yaw": -0.1907455265283282,
          "pitch": 0.1131282582649824,
          "title": "Car seat close-up",
          "text": "This close-up shows the elegant upholstered seat of a late 19th- to early 20th-century horse-drawn carriage. The tufted red cushion and curved wooden frame reflect the period’s craftsmanship, when comfort and style were added even to everyday farm and town transportation. This carriage would have been hitched to a single horse and used for local travel.",
          "photo": "img/ALLCloseUps/Car seat close-up.jpg" 

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
          "text": "This is a traditional shaving horse, a foot-powered woodworking bench used by farmers and craftspeople throughout the 1800s and early 1900s. The worker sat on the long bench and used the foot bar to clamp a piece of wood securely in place, then shaped it with a drawknife—just like the wood shavings scattered beneath it. Shaving horses were essential for making tool handles, wagon parts, fence posts, and other farm necessities.",
          "photo": "img/ALLCloseUps/woodworking state.jpg" 

        },
        {
          "yaw": -0.27137670866552455,
          "pitch": 0.034190395614395186,
          "title": "Horse Information",
          "text": "These illustrated cards were printed by D. M. Osborne & Co. of Auburn, New York, a major manufacturer of harvesting machinery in the late 19th century. Companies often used beautifully colored horse cards like these as advertising giveaways to farmers. Each card features a champion trotting horse—Phallas, Jay Eye See, and Maxie Cobb—all famous for setting speed records in the 1880s. Farmers admired these horses not only for their racing prestige but also because trotting bloodlines were associated with strength, endurance, and good farm stock. Cards like these would have been tacked inside barns, kept in farm ledgers, or traded among neighbors—serving both as early marketing tools and as small pieces of rural Americana.",
          "photo": "img/ALLCloseUps/horse info.jpg" 

        },
        {
          "yaw": 0.5576397877799764,
          "pitch": -0.11416271907590314,
          "title": "General Store",
          "text": "This is an original storefront window frame from a Monroe Township general store, once a central stop for groceries, dry goods, farm supplies, and community news. The bold painted lettering on the glass is typical of early 20th-century shopfront advertising. The historic photographs resting inside the frame show what local stores looked like during that era, complete with wooden porches, hitching posts, and early automobiles parked outside. The display highlights how general stores served as both commercial centers and social gathering spots in rural communities.",
          "photo": "img/ALLCloseUps/general store.jpg" 

        },
        {
          "yaw": 0.02409172811247373,
          "pitch": -0.007226692466733908,
          "title": "Closet Close-up",
          "text": "This wooden tack closet is where a farmer or stable hand kept all the essential equipment for working with horses. Inside are leather reins, bits, harness pieces, and other tools used to guide and care for farm horses. Saddles and extra straps were stored neatly on the upper shelf, ready for daily work in the fields or for pulling carriages. The horse illustrations pinned to the door were early advertising cards from D.M. Osborne & Co., a company that sold farm machinery and often distributed collectible horse prints. This little closet shows how central horses were to everyday farm life—providing power, transportation, and dependable labor long before tractors arrived.",
          "photo": "img/ALLCloseUps/closet close-up.jpg" 

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
          "text": "This is a horse-drawn cultivator, a common piece of farm equipment used before tractors became widespread. A farmer would sit on the metal seat and guide a team of horses while the machine’s iron wheels and adjustable shanks loosened soil between crop rows. Tools like this were essential for weed control and soil aeration, especially on small family farms where mechanized tractors had not yet arrived.",
          "photo": "img/ALLCloseUps/old farming machine.jpg" 

        },
        {
          "yaw": -1.7109124949114491,
          "pitch": 0.3749895422582785,
          "title": "Red Box Close-up",
          "text": "This hand-cranked cast-iron grinder was used on small farms to process feed such as corn, oats, and other grains for livestock. Feed would be poured into the top hopper, and turning the large side wheel powered the internal grinding plates. Its sturdy build and simple mechanics made it reliable equipment for daily farm work.",
          "photo": "img/ALLCloseUps/Red box.jpg" 

        },
        {
          "yaw": -0.030531400722564328,
          "pitch": 0.06351635327881766,
          "title": "Fieldwork",
          "text": "This is an antique horse-drawn manure spreader, recognizable by its long green wooden box, metal wheels, and rusted spreading mechanism at the back. Farmers filled the box with manure or compost, and as the wagon was pulled across the field, gears underneath would break up the material and scatter it evenly over the soil. Tools like this were essential before modern tractors—spreading fertilizer by hand took too long for large farms. Even though it’s weathered, you can still see how sturdy the iron frame and wheels were built to be, since it had to handle rough fields and heavy loads.",
          "photo": "img/ALLCloseUps/fieldwork.jpg" 

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
          "text": "This image shows an antique hay rake, a large horse-drawn tool used by farmers to gather cut hay into long rows called windrows. Its wide wooden frame and thin metal tines were designed to sweep dried grass off the field so it could be collected more easily. The big spoked wheels helped the machine roll smoothly over uneven ground, and the metal gears in the center controlled the movement of the rake mechanism. Today it sits as an outdoor display, rusted with age but still showing how early farm equipment operated before tractors and modern machinery.",
          "photo": "img/ALLCloseUps/front of the plough.jpg" 

        },
        {
          "yaw": -0.04796353680184495,
          "pitch": 0.2199592719684098,
          "title": "Another machine",
          "text": "This antique piece of farm equipment appears to be an old hand-cranked cream separator or feed grinder. Devices like this were used on early dairy and crop farms to process milk or grind grain by turning the large wheel to power the internal blades. Its heavy cast-iron body and curved tripod legs show how early machinery was built to be durable and entirely manual",
          "photo": "img/ALLCloseUps/another machine.jpg" 

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
