// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, ReadingPassage } from "../types";

export const reading: ByLevel<ReadingPassage[]> = {
 "A2": [
  {
   "id": "r-a2-1",
   "title": "My Big Family",
   "topic": "Family",
   "text": "Hi, I'm Linh and I'm thirteen years old. I live in Hai Phong with my parents, my grandmother and my little brother, Minh. My father is a bus driver and he works long hours. My mother is a nurse at the city hospital. She usually works in the morning, so she cooks dinner for us every evening.\n\nMy grandmother is seventy-two, but she is very active. Every morning she walks to the park and does exercise with her friends. She also tells us funny stories about her childhood.\n\nMinh is seven. He loves football and he plays it every afternoon after school. Sometimes he is noisy, but he is kind and he always shares his sweets with me.\n\nAt the weekend, my aunt and uncle visit us with my two cousins. We have a big lunch together and then we play games in the living room. I love my big family!",
   "g": {
    "active": [
     "năng động",
     "full of energy"
    ],
    "childhood": [
     "thời thơ ấu",
     "the time when you were a child"
    ],
    "noisy": [
     "ồn ào",
     "making a lot of noise"
    ],
    "share": [
     "chia sẻ",
     "give part of something to others"
    ],
    "cousin": [
     "anh/chị/em họ",
     "the child of your aunt or uncle"
    ],
    "nurse": [
     "y tá",
     "a person who cares for sick people"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What does Linh's mother do?",
     "o": [
      "She is a teacher.",
      "She is a nurse.",
      "She is a bus driver."
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "Linh's grandmother goes to the park every morning.",
     "a": true
    },
    {
     "t": "tf",
     "q": "Minh doesn't like football.",
     "a": false
    },
    {
     "t": "gap",
     "q": "Linh's father works long ___.",
     "a": "hours"
    },
    {
     "t": "mc",
     "q": "Who visits the family at the weekend?",
     "o": [
      "Linh's grandparents",
      "Linh's aunt, uncle and cousins",
      "Linh's school friends"
     ],
     "a": 1
    },
    {
     "t": "match",
     "q": "Match each person with what they do.",
     "p": [
      [
       "Father",
       "drives a bus"
      ],
      [
       "Grandmother",
       "tells funny stories"
      ],
      [
       "Minh",
       "plays football"
      ],
      [
       "Mother",
       "cooks dinner"
      ]
     ]
    }
   ]
  },
  {
   "id": "r-a2-2",
   "title": "Our New Flat",
   "topic": "Home",
   "text": "Last month my family moved to a new flat in the city centre. It is on the eighth floor of a tall building, so we can see the river from our windows. There is a lift, but my dad always takes the stairs because he wants to stay fit.\n\nThe flat has three bedrooms, a kitchen, a bathroom and a small balcony. My bedroom is next to the kitchen. It is not very big, but it is bright and I have a desk under the window. I do my homework there every evening.\n\nMy favourite place is the balcony. My mum keeps plants and flowers there, and on hot evenings we sit outside and eat fruit together.\n\nThe only problem is the noise. The street below is very busy, and I can hear motorbikes until late at night. But I still love our new home.",
   "g": {
    "move": [
     "chuyển (nhà)",
     "go to live in a different place"
    ],
    "floor": [
     "tầng",
     "a level of a building"
    ],
    "lift": [
     "thang máy",
     "a machine that carries people up and down"
    ],
    "stairs": [
     "cầu thang",
     "steps for going up or down"
    ],
    "balcony": [
     "ban công",
     "a small area outside a window, above the ground"
    ],
    "fit": [
     "khỏe mạnh",
     "healthy and strong"
    ],
    "bright": [
     "sáng sủa",
     "full of light"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Where is the new flat?",
     "o": [
      "On the ground floor",
      "On the eighth floor",
      "Next to a school"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The writer's dad uses the lift every day.",
     "a": false
    },
    {
     "t": "mc",
     "q": "Where is the writer's bedroom?",
     "o": [
      "Next to the bathroom",
      "Next to the kitchen",
      "Next to the balcony"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The writer does homework at a desk under the ___.",
     "a": "window"
    },
    {
     "t": "tf",
     "q": "The family sits on the balcony on hot evenings.",
     "a": true
    },
    {
     "t": "mc",
     "q": "What is the problem with the flat?",
     "o": [
      "It is too small.",
      "It is noisy.",
      "It is far from the river."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-a2-3",
   "title": "Tom's Busy Day",
   "topic": "Daily routine",
   "text": "Tom is a student at a high school in Manchester. On weekdays, he gets up at half past six. First, he has a shower and gets dressed. Then he has breakfast with his sister. He usually eats toast and drinks orange juice.\n\nSchool starts at quarter to nine. Tom goes there by bike because it is only two kilometres from his house. His favourite subject is science, but he doesn't like history very much.\n\nAfter school, Tom has a part-time job. He works at a small café on Tuesdays and Thursdays. He washes cups and cleans the tables. He earns some money and saves it for a new laptop.\n\nIn the evening, Tom does his homework and chats with his friends online. He never goes to bed before eleven o'clock, so he is often tired in the morning!",
   "g": {
    "weekday": [
     "ngày trong tuần",
     "Monday to Friday"
    ],
    "dressed": [
     "mặc quần áo (get dressed)",
     "put on your clothes"
    ],
    "subject": [
     "môn học",
     "something you study at school"
    ],
    "part-time": [
     "bán thời gian",
     "working only some hours or days"
    ],
    "earn": [
     "kiếm (tiền)",
     "get money for work"
    ],
    "save": [
     "tiết kiệm",
     "keep money to use later"
    ],
    "tired": [
     "mệt",
     "needing rest or sleep"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What time does Tom get up on weekdays?",
     "o": [
      "6.00",
      "6.30",
      "8.45"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How does Tom go to school?",
     "o": [
      "By bus",
      "On foot",
      "By bike"
     ],
     "a": 2
    },
    {
     "t": "tf",
     "q": "Tom loves history.",
     "a": false
    },
    {
     "t": "gap",
     "q": "Tom works at a café on Tuesdays and ___.",
     "a": "thursdays"
    },
    {
     "t": "mc",
     "q": "Why does Tom save money?",
     "o": [
      "For a holiday",
      "For a new laptop",
      "For a new bike"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "Tom goes to bed early.",
     "a": false
    }
   ]
  },
  {
   "id": "r-a2-4",
   "title": "A Day at the Bakery",
   "topic": "Work and routine",
   "text": "Mrs Hoa has a small bakery on Le Loi Street. Her day starts very early. She gets up at four o'clock every morning, when the streets are still dark and quiet. At half past four, she starts making bread. She makes about two hundred loaves every day.\n\nThe bakery opens at six. Many customers buy bread on their way to work or school. Mrs Hoa's daughter, Mai, helps in the shop before she goes to university. She takes the money and puts the bread in paper bags.\n\nIn the afternoon, the shop is quieter. Mrs Hoa cleans the kitchen and orders flour and eggs for the next day. She also makes cakes for birthdays and weddings. Her chocolate cake is very popular.\n\nThe bakery closes at seven in the evening. Mrs Hoa is tired, but she is happy because she loves her job.",
   "g": {
    "bakery": [
     "tiệm bánh",
     "a shop that makes and sells bread and cakes"
    ],
    "loaves": [
     "ổ bánh mì (số nhiều của loaf)",
     "pieces of bread baked in one shape"
    ],
    "customer": [
     "khách hàng",
     "a person who buys things in a shop"
    ],
    "flour": [
     "bột mì",
     "powder used to make bread"
    ],
    "order": [
     "đặt hàng",
     "ask for goods to be sent to you"
    ],
    "popular": [
     "được ưa chuộng",
     "liked by many people"
    ],
    "wedding": [
     "đám cưới",
     "a ceremony when two people marry"
    ]
   },
   "q": [
    {
     "t": "tf",
     "q": "Mrs Hoa starts making bread at half past four.",
     "a": true
    },
    {
     "t": "mc",
     "q": "How many loaves does she make every day?",
     "o": [
      "About 100",
      "About 200",
      "About 400"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Who helps in the shop?",
     "o": [
      "Her son",
      "Her husband",
      "Her daughter"
     ],
     "a": 2
    },
    {
     "t": "gap",
     "q": "In the afternoon, Mrs Hoa orders flour and ___ for the next day.",
     "a": "eggs"
    },
    {
     "t": "mc",
     "q": "What is very popular?",
     "o": [
      "Her bread rolls",
      "Her chocolate cake",
      "Her coffee"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The bakery closes at six in the evening.",
     "a": false
    }
   ]
  },
  {
   "id": "r-a2-5",
   "title": "The Saturday Market",
   "topic": "Shopping",
   "text": "Every Saturday morning, Lan goes to the market near her house with her grandmother. The market is open from six until eleven, and it is always busy and colourful.\n\nFirst, they buy vegetables. Lan's grandmother always chooses fresh tomatoes, carrots and green beans. She checks every one carefully before she pays. Then they go to the fruit stall. Lan loves mangoes, but this week they are expensive because it is not mango season. So they buy bananas and oranges instead. They are cheaper.\n\nNext, they visit the fish seller. He knows Lan's grandmother well and often gives her a small discount. Today he gives Lan a free bag of shrimps!\n\nBefore they go home, they always stop at a food stall and have a bowl of noodle soup. Lan thinks shopping at the market is more fun than shopping at the supermarket, because the sellers are friendly and you can talk to them.",
   "g": {
    "stall": [
     "quầy hàng",
     "a table or small shop in a market"
    ],
    "fresh": [
     "tươi",
     "recently picked or made"
    ],
    "season": [
     "mùa",
     "a period of the year"
    ],
    "instead": [
     "thay vào đó",
     "in place of something else"
    ],
    "discount": [
     "giảm giá",
     "a lower price"
    ],
    "seller": [
     "người bán",
     "a person who sells things"
    ],
    "colourful": [
     "nhiều màu sắc",
     "having many bright colours"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "When does the market close?",
     "o": [
      "At six",
      "At eleven",
      "At noon"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "Lan's grandmother checks the vegetables carefully.",
     "a": true
    },
    {
     "t": "mc",
     "q": "Why don't they buy mangoes?",
     "o": [
      "Lan doesn't like them.",
      "They are expensive this week.",
      "The fruit stall is closed."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The fish seller often gives Lan's grandmother a small ___.",
     "a": "discount"
    },
    {
     "t": "tf",
     "q": "They have noodle soup at a restaurant in the city centre.",
     "a": false
    },
    {
     "t": "mc",
     "q": "Why does Lan prefer the market?",
     "o": [
      "It is cheaper.",
      "The sellers are friendly.",
      "It is open all day."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-a2-6",
   "title": "What's in Your Lunch Box?",
   "topic": "Food",
   "text": "At Green Hill School, students can buy lunch in the canteen or bring a lunch box from home. We asked three students about their lunch.\n\nSara, 14: \"I always bring my lunch. My mum makes rice with chicken and vegetables. I also have a piece of fruit, usually an apple. I don't drink fizzy drinks because they have too much sugar. I drink water.\"\n\nBen, 15: \"I eat in the canteen. The food is hot and there is a different menu every day. My favourite day is Friday because there is fish and chips! It costs three pounds, which isn't expensive.\"\n\nKim, 13: \"I'm a vegetarian, so I don't eat meat or fish. I usually bring a sandwich with cheese and salad, and some yoghurt. Sometimes I buy soup in the canteen when it is cold outside.\"\n\nWhich lunch do you think is the healthiest?",
   "g": {
    "canteen": [
     "căng tin",
     "a place in a school where students eat"
    ],
    "fizzy": [
     "có ga",
     "with bubbles of gas"
    ],
    "menu": [
     "thực đơn",
     "a list of food you can choose"
    ],
    "vegetarian": [
     "người ăn chay",
     "a person who does not eat meat or fish"
    ],
    "healthiest": [
     "lành mạnh nhất",
     "best for your body"
    ],
    "sugar": [
     "đường",
     "a sweet substance"
    ]
   },
   "q": [
    {
     "t": "match",
     "q": "Match each student with the correct information.",
     "p": [
      [
       "Sara",
       "doesn't drink fizzy drinks"
      ],
      [
       "Ben",
       "likes Fridays best"
      ],
      [
       "Kim",
       "doesn't eat meat"
      ]
     ]
    },
    {
     "t": "mc",
     "q": "How much does fish and chips cost?",
     "o": [
      "Two pounds",
      "Three pounds",
      "Four pounds"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "Kim sometimes buys soup in the canteen.",
     "a": true
    },
    {
     "t": "gap",
     "q": "Sara usually has an ___ as her piece of fruit.",
     "a": "apple"
    },
    {
     "t": "tf",
     "q": "Ben brings his lunch from home.",
     "a": false
    }
   ]
  },
  {
   "id": "r-a2-7",
   "title": "Join the Photo Club!",
   "topic": "Hobbies",
   "text": "Do you like taking photos? Then come and join the Riverside Photo Club!\n\nWe are a friendly group of people of all ages. Our youngest member is twelve and our oldest is seventy-five. We meet every Wednesday evening from seven to nine at the Riverside Library, in Room 3.\n\nAt our meetings, we share our photos and give each other tips. Sometimes a professional photographer visits and teaches us something new, for example how to take good photos at night.\n\nOnce a month, on a Sunday, we go on a photo walk. Last month we went to the old harbour and took pictures of the boats at sunrise. Next month we are going to visit the botanical garden.\n\nYou don't need an expensive camera. A phone camera is fine! Membership costs ten pounds a year. Your first meeting is free.\n\nFor more information, email Jack at riversidephoto@mail.com.",
   "g": {
    "join": [
     "tham gia",
     "become a member of a group"
    ],
    "member": [
     "thành viên",
     "a person in a group or club"
    ],
    "tips": [
     "mẹo, lời khuyên",
     "useful pieces of advice"
    ],
    "professional": [
     "chuyên nghiệp",
     "doing something as a paid job"
    ],
    "harbour": [
     "bến cảng",
     "a place where boats stay"
    ],
    "sunrise": [
     "bình minh",
     "the time when the sun comes up"
    ],
    "membership": [
     "phí/tư cách hội viên",
     "being a member of a club"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "When does the club meet?",
     "o": [
      "On Wednesday evenings",
      "On Sunday mornings",
      "Every day"
     ],
     "a": 0
    },
    {
     "t": "tf",
     "q": "The oldest member is seventy.",
     "a": false
    },
    {
     "t": "mc",
     "q": "What do members do once a month?",
     "o": [
      "Have a party",
      "Go on a photo walk",
      "Visit a museum"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "You need an expensive camera to join.",
     "a": false
    },
    {
     "t": "gap",
     "q": "Membership costs ten pounds a ___.",
     "a": "year"
    },
    {
     "t": "tf",
     "q": "Your first meeting costs nothing.",
     "a": true
    }
   ]
  },
  {
   "id": "r-a2-8",
   "title": "My Best Weekend",
   "topic": "Free time (past)",
   "text": "Last weekend was the best weekend of the year! On Saturday morning, my best friend Hana and I took the bus to the beach. The journey was about one hour. The weather was sunny and warm, and the sea was very blue.\n\nWe swam in the morning and then we had lunch at a small seafood restaurant. I ate grilled fish and Hana had crab. It was delicious! In the afternoon, we built a big sandcastle and played volleyball with some other teenagers.\n\nOn Saturday evening we stayed at Hana's aunt's house near the beach. She cooked a big dinner for us and we watched a film together.\n\nOn Sunday it rained, so we visited a small museum about the history of the town. I didn't expect it to be interesting, but it was great. We came home in the evening, tired but very happy.",
   "g": {
    "journey": [
     "chuyến đi",
     "travelling from one place to another"
    ],
    "seafood": [
     "hải sản",
     "fish and shellfish eaten as food"
    ],
    "grilled": [
     "nướng",
     "cooked over direct heat"
    ],
    "crab": [
     "cua",
     "a sea animal with a shell and ten legs"
    ],
    "sandcastle": [
     "lâu đài cát",
     "a model castle made of sand"
    ],
    "expect": [
     "mong đợi, nghĩ rằng",
     "think something will happen"
    ],
    "delicious": [
     "ngon",
     "tasting very good"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How did they travel to the beach?",
     "o": [
      "By car",
      "By bus",
      "By train"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "It was cold on Saturday.",
     "a": false
    },
    {
     "t": "mc",
     "q": "What did Hana eat for lunch?",
     "o": [
      "Grilled fish",
      "Crab",
      "Chicken"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "On Saturday evening they watched a ___ together.",
     "a": [
      "film",
      "movie"
     ]
    },
    {
     "t": "tf",
     "q": "They went to the museum because it rained.",
     "a": true
    },
    {
     "t": "tf",
     "q": "The writer thought the museum was boring.",
     "a": false
    }
   ]
  },
  {
   "id": "r-a2-9",
   "title": "A Trip to Da Lat",
   "topic": "Travel",
   "text": "Hello everyone! I'm writing this blog post from Da Lat, a city in the mountains in the south of Vietnam. I arrived here two days ago with my parents.\n\nDa Lat is very different from Ho Chi Minh City, where I live. It is much cooler here, especially at night, so I'm wearing my warm jacket. The air is fresh and the city is quieter.\n\nYesterday we visited a flower garden and a strawberry farm. We picked strawberries and ate a lot of them! In the evening, we walked around the night market. I tried grilled rice paper, a popular street food here. It was crispy and tasty.\n\nTomorrow we're going to rent bicycles and ride around the lake. On our last day, we're going to visit a coffee farm because my dad loves coffee.\n\nI'm going to post more photos soon. Bye for now!",
   "g": {
    "blog": [
     "nhật ký trực tuyến",
     "a website where someone writes about their life"
    ],
    "especially": [
     "đặc biệt là",
     "more than usual"
    ],
    "picked": [
     "hái",
     "took fruit or flowers from a plant"
    ],
    "crispy": [
     "giòn",
     "hard and making a noise when you bite it"
    ],
    "rent": [
     "thuê",
     "pay money to use something for a time"
    ],
    "tasty": [
     "ngon",
     "having a good flavour"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Where is Da Lat?",
     "o": [
      "By the sea",
      "In the mountains",
      "In the north of Vietnam"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The writer lives in Da Lat.",
     "a": false
    },
    {
     "t": "mc",
     "q": "Why is the writer wearing a warm jacket?",
     "o": [
      "It is raining.",
      "It is cool at night.",
      "It is windy."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "At the night market, the writer tried grilled rice ___.",
     "a": "paper"
    },
    {
     "t": "mc",
     "q": "What are they going to do tomorrow?",
     "o": [
      "Visit a coffee farm",
      "Ride bicycles around the lake",
      "Go to a strawberry farm"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The writer's dad loves coffee.",
     "a": true
    }
   ]
  },
  {
   "id": "r-a2-10",
   "title": "Riverside Hostel – Guest Information",
   "topic": "Travel",
   "text": "Welcome to Riverside Hostel! We hope you enjoy your stay. Please read this information.\n\nBreakfast: Breakfast is in the dining room on the ground floor from 7 a.m. to 10 a.m. It is free for all guests.\n\nKitchen: You can use the guest kitchen from 8 a.m. to 10 p.m. Please wash your plates and cups after you use them.\n\nWi-Fi: The Wi-Fi password is on the back of your room key card.\n\nQuiet time: Please be quiet between 11 p.m. and 7 a.m. Other guests are sleeping.\n\nBikes: You can rent a bike at reception for five dollars a day. There is a map of the bike paths by the river.\n\nCheck-out: Please leave your room before 11 a.m. on your last day. You can leave your bags at reception if your bus or train is later.\n\nNeed help? Our reception is open 24 hours a day. Just ask!",
   "g": {
    "guest": [
     "khách lưu trú",
     "a person staying in a hotel"
    ],
    "hostel": [
     "nhà nghỉ giá rẻ",
     "a cheap place to stay for travellers"
    ],
    "ground": [
     "mặt đất (ground floor: tầng trệt)",
     "the floor at street level"
    ],
    "reception": [
     "quầy lễ tân",
     "the desk where guests are welcomed"
    ],
    "password": [
     "mật khẩu",
     "a secret word to use a service"
    ],
    "check-out": [
     "trả phòng",
     "leaving a hotel at the end of your stay"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "When is breakfast?",
     "o": [
      "7–10 a.m.",
      "8–10 a.m.",
      "7–11 a.m."
     ],
     "a": 0
    },
    {
     "t": "tf",
     "q": "Guests have to pay for breakfast.",
     "a": false
    },
    {
     "t": "mc",
     "q": "Where can you find the Wi-Fi password?",
     "o": [
      "At reception",
      "On the back of the key card",
      "In the kitchen"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "You can rent a bike for five dollars a ___.",
     "a": "day"
    },
    {
     "t": "tf",
     "q": "You can leave your bags at reception after check-out.",
     "a": true
    },
    {
     "t": "mc",
     "q": "When must you leave your room on your last day?",
     "o": [
      "Before 10 a.m.",
      "Before 11 a.m.",
      "Before 12 p.m."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-a2-11",
   "title": "My Best Friend, Huy",
   "topic": "Friends",
   "text": "My best friend is called Huy. We met on our first day at secondary school four years ago. We sat next to each other in maths, and he helped me when I didn't understand a problem. Since then, we have been very good friends.\n\nHuy is tall and thin, and he has short black hair and glasses. He is very funny and always makes people laugh. He is also very clever, especially at science and computers. He wants to be a software engineer in the future.\n\nWe have a lot in common. We both love video games, basketball and spicy food. Every Saturday afternoon, we play basketball in the park near my house. After that, we usually eat bánh mì at a small shop on the corner.\n\nSometimes we argue, but we never stay angry for long. I think a good friend is someone you can trust, and I can always trust Huy.",
   "g": {
    "clever": [
     "thông minh",
     "quick at learning and understanding"
    ],
    "in common": [
     "điểm chung (have in common)",
     "shared interests"
    ],
    "argue": [
     "cãi nhau",
     "speak angrily because you disagree"
    ],
    "trust": [
     "tin tưởng",
     "believe someone is honest"
    ],
    "glasses": [
     "kính mắt",
     "two pieces of glass you wear to see better"
    ],
    "engineer": [
     "kỹ sư",
     "a person who designs machines or systems"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Where did the writer meet Huy?",
     "o": [
      "At primary school",
      "At secondary school",
      "In the park"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "Huy is short and has long hair.",
     "a": false
    },
    {
     "t": "gap",
     "q": "Huy wants to be a software ___.",
     "a": "engineer"
    },
    {
     "t": "mc",
     "q": "What do they do every Saturday afternoon?",
     "o": [
      "Play video games",
      "Play basketball",
      "Go to the cinema"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The writer and Huy never argue.",
     "a": false
    },
    {
     "t": "mc",
     "q": "What is a good friend, according to the writer?",
     "o": [
      "Someone who is funny",
      "Someone you can trust",
      "Someone who is clever"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-a2-12",
   "title": "Weather Around Vietnam",
   "topic": "Weather",
   "text": "Vietnam is a long country, so the weather is very different from north to south.\n\nIn the north, in cities like Hanoi, there are four seasons. Winter, from December to February, can be cold and grey, and people wear jackets and scarves. Spring is warm and often a little rainy. Summer is very hot and humid, with big storms. Autumn, in October and November, is many people's favourite season because the sky is clear and the air is cool.\n\nIn the south, in places like Ho Chi Minh City, there are only two seasons: the dry season and the rainy season. The dry season is from December to April. It is sunny and hot almost every day. In the rainy season, from May to November, it often rains heavily in the afternoon, but usually only for an hour or two.\n\nThe centre of the country has typhoons between September and November, so it is better to visit at another time of year.",
   "g": {
    "season": [
     "mùa",
     "a period of the year with typical weather"
    ],
    "humid": [
     "ẩm",
     "with a lot of water in the air"
    ],
    "scarf": [
     "khăn quàng",
     "a piece of cloth worn around the neck"
    ],
    "clear": [
     "trong, quang đãng",
     "without clouds"
    ],
    "heavily": [
     "nặng hạt, nhiều",
     "a lot, strongly"
    ],
    "typhoon": [
     "bão lớn",
     "a very strong tropical storm"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How many seasons are there in the north?",
     "o": [
      "Two",
      "Three",
      "Four"
     ],
     "a": 2
    },
    {
     "t": "tf",
     "q": "Winter in Hanoi can be cold and grey.",
     "a": true
    },
    {
     "t": "mc",
     "q": "Why do many people like autumn in the north?",
     "o": [
      "It is very hot.",
      "The sky is clear and the air is cool.",
      "There are big storms."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "In the south, the dry season is from December to ___.",
     "a": "april"
    },
    {
     "t": "tf",
     "q": "In the rainy season, it rains all day in Ho Chi Minh City.",
     "a": false
    },
    {
     "t": "match",
     "q": "Match the place with the weather.",
     "p": [
      [
       "North in summer",
       "hot, humid and stormy"
      ],
      [
       "South, Dec–Apr",
       "sunny and hot"
      ],
      [
       "Centre, Sep–Nov",
       "typhoons"
      ]
     ]
    }
   ]
  },
  {
   "id": "r-a2-13",
   "title": "Healthy Habits Week",
   "topic": "Health",
   "text": "Next week is Healthy Habits Week at Sunrise School! Here is our plan.\n\nMonday – Breakfast Day. The canteen will serve free healthy breakfasts from 7.00 to 7.45 a.m. Try our fruit salad and wholemeal bread!\n\nTuesday – Walk to School Day. Please walk or cycle to school if you can. There will be a small prize for every class with more than twenty walkers.\n\nWednesday – Water Day. Bring a water bottle. Fizzy drinks will not be sold in the canteen on this day.\n\nThursday – Sports Afternoon. There will be no lessons after lunch. Students can choose football, badminton, dance or yoga.\n\nFriday – Sleep Talk. A doctor from the city hospital will talk to Years 8 and 9 about sleep and screens in the main hall at 10 a.m.\n\nWe hope everyone takes part. Remember: small changes every day can make a big difference!",
   "g": {
    "habit": [
     "thói quen",
     "something you do regularly"
    ],
    "wholemeal": [
     "nguyên cám",
     "made from whole grains"
    ],
    "prize": [
     "giải thưởng",
     "something you win"
    ],
    "take part": [
     "tham gia",
     "join an activity"
    ],
    "difference": [
     "sự khác biệt",
     "a change"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What happens on Monday?",
     "o": [
      "Free healthy breakfasts",
      "A sports afternoon",
      "A talk by a doctor"
     ],
     "a": 0
    },
    {
     "t": "tf",
     "q": "Every student who walks to school gets a prize.",
     "a": false
    },
    {
     "t": "gap",
     "q": "On Wednesday, students should bring a water ___.",
     "a": "bottle"
    },
    {
     "t": "mc",
     "q": "Which activity is NOT on Thursday?",
     "o": [
      "Yoga",
      "Swimming",
      "Dance"
     ],
     "a": 1
    },
    {
     "t": "tf",
     "q": "The doctor's talk is for all students.",
     "a": false
    },
    {
     "t": "mc",
     "q": "Where is the Sleep Talk?",
     "o": [
      "In the canteen",
      "In the main hall",
      "At the city hospital"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-a2-14",
   "title": "A Message from Grandma",
   "topic": "Family and technology",
   "text": "Hi darling,\n\nGuess what? I'm writing this on my new phone! Your cousin Phong helped me to set it up yesterday. Now I can send you messages and see your photos. It's wonderful!\n\nThe screen is quite big, so I can read everything without my glasses. Phong showed me how to make video calls, too. Can we try one this Sunday evening at about eight o'clock? I want to see your new haircut!\n\nI still can't use some things. I pressed something by mistake this morning and the phone started playing loud music in the market. Everybody looked at me! But it was funny, and a young woman helped me to turn it off.\n\nYour grandfather says he doesn't need a smartphone, but I saw him looking at my photos for a long time last night. Maybe he will want one soon!\n\nPlease write back when you can. Lots of love,\nGrandma",
   "g": {
    "set up": [
     "cài đặt",
     "prepare a device to use"
    ],
    "screen": [
     "màn hình",
     "the glass part of a phone"
    ],
    "video call": [
     "gọi video",
     "a phone call where you see the other person"
    ],
    "haircut": [
     "kiểu tóc mới cắt",
     "the style of your hair after cutting"
    ],
    "by mistake": [
     "do nhầm lẫn",
     "without wanting to"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Who helped Grandma with her phone?",
     "o": [
      "Her grandfather",
      "Her cousin's son Phong",
      "The writer's cousin Phong"
     ],
     "a": 2
    },
    {
     "t": "tf",
     "q": "Grandma needs her glasses to read the screen.",
     "a": false
    },
    {
     "t": "mc",
     "q": "When does Grandma want a video call?",
     "o": [
      "Saturday morning",
      "Sunday at about 8 p.m.",
      "Every evening"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Grandma wants to see the writer's new ___.",
     "a": "haircut"
    },
    {
     "t": "tf",
     "q": "The phone played loud music in the market.",
     "a": true
    },
    {
     "t": "tf",
     "q": "Grandfather is not interested in the photos at all.",
     "a": false
    }
   ]
  },
  {
   "id": "r-a2-15",
   "title": "Lost and Found",
   "topic": "Daily life",
   "text": "Last Tuesday, Minh lost his wallet on the bus home from work. He only noticed when he wanted to buy dinner at a street stall. His wallet had his ID card, his bank card and about three hundred thousand dong inside.\n\nMinh was very worried. First, he called his bank and stopped his card. Then he went to the bus station and asked at the information desk. The woman there said that nobody had brought a wallet, but she wrote down his phone number.\n\nThe next morning, Minh's phone rang. It was the bus driver, Mr Tuan. He had found the wallet under a seat at the end of the day and taken it to the lost property office. Minh went there after work and got his wallet back. Nothing was missing!\n\nMinh wanted to give Mr Tuan some money to say thank you, but he said no. So Minh wrote a letter to the bus company to tell them about their kind and honest driver.",
   "g": {
    "wallet": [
     "ví",
     "a small case for money and cards"
    ],
    "notice": [
     "để ý, nhận ra",
     "see or realise"
    ],
    "lost property": [
     "phòng đồ thất lạc",
     "a place where lost things are kept"
    ],
    "missing": [
     "bị mất, thiếu",
     "not there"
    ],
    "honest": [
     "trung thực",
     "telling the truth, not stealing"
    ],
    "seat": [
     "ghế ngồi",
     "a place to sit"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "When did Minh notice his wallet was missing?",
     "o": [
      "On the bus",
      "When he wanted to buy dinner",
      "The next morning"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What did Minh do first?",
     "o": [
      "Called his bank",
      "Went to the bus station",
      "Called the driver"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "Mr Tuan found the wallet under a ___.",
     "a": "seat"
    },
    {
     "t": "tf",
     "q": "Some money was missing from the wallet.",
     "a": false
    },
    {
     "t": "tf",
     "q": "Mr Tuan accepted money from Minh.",
     "a": false
    },
    {
     "t": "mc",
     "q": "How did Minh say thank you?",
     "o": [
      "He bought Mr Tuan dinner.",
      "He wrote a letter to the bus company.",
      "He gave him a present."
     ],
     "a": 1
    }
   ]
  }
 ],
 "B1": [
  {
   "id": "r-b1-1",
   "title": "My First Job Interview",
   "topic": "Work",
   "text": "When I was nineteen, I applied for a summer job at a hotel by the sea. I had never had a job interview before, so I was extremely nervous. The night before, I couldn't sleep at all.\n\nI had prepared carefully. I had read about the hotel on its website, and my older sister had asked me some typical interview questions, such as \"Why do you want this job?\" and \"What are your strengths?\". I had also chosen my clothes: a simple white shirt and dark trousers.\n\nOn the day of the interview, I left home early, but the bus broke down halfway, and I had to walk the last two kilometres in the rain. I arrived ten minutes late, wet and embarrassed. I was sure I had already lost my chance.\n\nHowever, the manager, a friendly woman called Mrs Patel, just smiled and gave me a towel. She asked me about my studies, my hobbies and how I dealt with difficult situations. I told her the truth about the bus and the walk in the rain. To my surprise, she said that this showed I didn't give up easily.\n\nA week later, she phoned me and offered me the job. I worked at the reception desk all summer, and it was one of the best experiences of my life. I improved my English because many guests came from abroad, and I learned how to stay calm when things go wrong.\n\nSince then, I have had several interviews, and I have always remembered that summer. My advice? Prepare well, be honest, and don't panic if something unexpected happens. Sometimes a problem can become an opportunity.",
   "g": {
    "applied": [
     "nộp đơn",
     "asked formally for a job"
    ],
    "nervous": [
     "lo lắng, hồi hộp",
     "worried and a little afraid"
    ],
    "strengths": [
     "điểm mạnh",
     "good qualities or abilities"
    ],
    "embarrassed": [
     "xấu hổ",
     "feeling shy or uncomfortable"
    ],
    "dealt": [
     "xử lý (deal with)",
     "took action to solve a problem"
    ],
    "offered": [
     "đề nghị",
     "said you would give something"
    ],
    "abroad": [
     "nước ngoài",
     "in or to another country"
    ],
    "opportunity": [
     "cơ hội",
     "a chance to do something"
    ],
    "panic": [
     "hoảng loạn",
     "suddenly feel very afraid"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How did the writer feel before the interview?",
     "o": [
      "Relaxed",
      "Very nervous",
      "Bored"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The writer's sister works in a hotel.",
     "a": "NG"
    },
    {
     "t": "tfng",
     "q": "The writer arrived on time for the interview.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "Why did Mrs Patel like the writer's story about the bus?",
     "o": [
      "It was funny.",
      "It showed the writer didn't give up easily.",
      "It was a good excuse."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The writer's English improved because many guests came from ___.",
     "a": "abroad"
    },
    {
     "t": "tfng",
     "q": "The writer has had more interviews since that summer.",
     "a": "T"
    }
   ]
  },
  {
   "id": "r-b1-2",
   "title": "Online Learning: Is It Right for You?",
   "topic": "School",
   "text": "Ten years ago, most people studied in a classroom with a teacher in front of them. Today, millions of students all over the world take courses online, from language lessons to university degrees. But is online learning right for everyone?\n\nOne big advantage is flexibility. You can study at any time and in any place, as long as you have an internet connection. This is very useful for people who have a job or a family. Students can also watch recorded lessons again if they didn't understand something the first time.\n\nAnother advantage is cost. Online courses are often cheaper than traditional ones, and students save money on transport and accommodation. Some excellent courses are even free.\n\nHowever, online learning also has disadvantages. Many students find it hard to stay motivated without a teacher or classmates around them. It is easy to put off studying when nobody is checking your progress. In fact, a large number of people who start free online courses never finish them.\n\nAnother problem is the lack of social contact. In a real classroom, you can chat with other students, ask questions immediately and work in groups. Online, you may feel lonely, especially if the course has no live lessons.\n\nSo how can you succeed as an online learner? Experts suggest making a timetable and studying at the same time every day. It also helps to find a study partner, join an online discussion group and set small goals, for example finishing one unit a week. Finally, choose a quiet place to study and turn off your phone notifications.\n\nOnline learning is not easier than classroom learning; it is simply different. If you are organised and motivated, it can open many doors.",
   "g": {
    "flexibility": [
     "sự linh hoạt",
     "the ability to change easily"
    ],
    "degrees": [
     "bằng cấp đại học",
     "qualifications from a university"
    ],
    "accommodation": [
     "chỗ ở",
     "a place to live or stay"
    ],
    "motivated": [
     "có động lực",
     "wanting to do something"
    ],
    "lack": [
     "sự thiếu",
     "not having enough of something"
    ],
    "timetable": [
     "thời gian biểu",
     "a plan of times for activities"
    ],
    "notifications": [
     "thông báo",
     "messages that appear on your phone"
    ],
    "succeed": [
     "thành công",
     "achieve what you want"
    ],
    "organised": [
     "có tổ chức, ngăn nắp",
     "planning things well"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Which advantage does the writer mention first?",
     "o": [
      "Cost",
      "Flexibility",
      "Social contact"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Online courses are always cheaper than classroom courses.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Most people who start free online courses finish them.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Online students get better exam results than classroom students.",
     "a": "NG"
    },
    {
     "t": "gap",
     "q": "Experts suggest making a ___ and studying at the same time every day.",
     "a": "timetable"
    },
    {
     "t": "mc",
     "q": "According to the writer, online learning is…",
     "o": [
      "easier than classroom learning",
      "different from classroom learning",
      "only for people with jobs"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-3",
   "title": "Why Teenagers Need More Sleep",
   "topic": "Health",
   "text": "Many parents complain that their teenage children stay up late and are impossible to wake up in the morning. They often think teenagers are just lazy. But scientists say there is a biological reason for this behaviour.\n\nDuring the teenage years, the body's internal clock changes. The brain starts producing melatonin, the hormone that makes us feel sleepy, about two hours later than in children or adults. As a result, many teenagers don't feel tired until eleven o'clock or even midnight. However, they still have to get up early for school, so they often sleep only six or seven hours a night.\n\nDoctors recommend that teenagers sleep between eight and ten hours. When they don't get enough sleep, they may find it difficult to concentrate in class, and their memory gets worse. Lack of sleep can also affect their mood, making them more stressed or angry. Some studies have even linked poor sleep with a higher risk of illness and accidents.\n\nTechnology makes the problem worse. Many young people use their phones in bed, and the blue light from screens tells the brain that it is still daytime. Messages and social media also keep the mind active when it should be relaxing.\n\nWhat can be done? Some schools in the USA and the UK have started lessons later, at around nine or half past nine. Teachers at these schools report that students are more awake and attentive, and some schools have seen better exam results.\n\nTeenagers can also help themselves. Experts suggest keeping phones out of the bedroom, avoiding coffee and energy drinks in the evening, and going to bed at the same time every night, even at weekends. Sleep, they say, is not a waste of time; it is one of the best ways to stay healthy and do well at school.",
   "g": {
    "complain": [
     "phàn nàn",
     "say you are unhappy about something"
    ],
    "biological": [
     "thuộc sinh học",
     "related to the body"
    ],
    "internal": [
     "bên trong",
     "inside"
    ],
    "hormone": [
     "hoóc-môn",
     "a chemical that controls body functions"
    ],
    "recommend": [
     "khuyên",
     "advise someone to do something"
    ],
    "concentrate": [
     "tập trung",
     "give all your attention"
    ],
    "mood": [
     "tâm trạng",
     "the way you feel"
    ],
    "risk": [
     "nguy cơ",
     "the chance of something bad happening"
    ],
    "attentive": [
     "chăm chú",
     "listening and watching carefully"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Why do teenagers often feel sleepy later at night?",
     "o": [
      "They drink too much coffee.",
      "Their brain produces melatonin later.",
      "They are lazy."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Doctors recommend that teenagers sleep between eight and ___ hours.",
     "a": [
      "ten",
      "10"
     ]
    },
    {
     "t": "tfng",
     "q": "Lack of sleep can make teenagers' memory worse.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "All schools in the UK now start lessons at half past nine.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Blue light from screens helps the brain relax.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "Which of these is NOT advice from experts?",
     "o": [
      "Keep phones out of the bedroom.",
      "Sleep late at weekends.",
      "Avoid energy drinks in the evening."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-4",
   "title": "Walking Meetings",
   "topic": "Health at work",
   "text": "In many offices, people spend most of the day sitting down: at their desks, in meetings and even during lunch. Doctors warn that sitting for long periods is bad for our health. It can lead to back pain, weight gain and heart problems. So some companies are trying a simple idea: walking meetings.\n\nInstead of sitting around a table, two or three colleagues go for a walk while they discuss their work. The meeting might take place in a park near the office or simply along the street. Most walking meetings last between twenty and forty minutes.\n\nDaniel Reyes, a manager at a software company in Toronto, started holding walking meetings two years ago. \"At first my team thought it was a strange idea,\" he says. \"But now they love it. People seem more relaxed and honest when they are walking side by side. And we often come back with better ideas.\"\n\nResearch supports his experience. A study at a university in California found that people had more creative ideas while walking than while sitting. Walking also gives workers a break from their screens and a chance to get some fresh air.\n\nOf course, walking meetings are not right for every situation. They don't work well for large groups, or when people need to look at documents or take detailed notes. Bad weather can also be a problem, especially in winter. And some people may find it hard to walk long distances.\n\nExperts suggest starting with short one-to-one meetings and planning a simple route in advance. It is also a good idea to tell colleagues beforehand so they can wear comfortable shoes. Even a short walk once a day can make a real difference to how we feel at work.",
   "g": {
    "warn": [
     "cảnh báo",
     "tell someone about a danger"
    ],
    "periods": [
     "khoảng thời gian",
     "lengths of time"
    ],
    "colleagues": [
     "đồng nghiệp",
     "people you work with"
    ],
    "research": [
     "nghiên cứu",
     "careful study to find new facts"
    ],
    "creative": [
     "sáng tạo",
     "having new and original ideas"
    ],
    "detailed": [
     "chi tiết",
     "including many small facts"
    ],
    "route": [
     "tuyến đường",
     "the way from one place to another"
    ],
    "advance": [
     "trước (in advance)",
     "before a particular time"
    ],
    "beforehand": [
     "từ trước",
     "earlier"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Which health problem is NOT mentioned?",
     "o": [
      "Back pain",
      "Heart problems",
      "Eye problems"
     ],
     "a": 2
    },
    {
     "t": "gap",
     "q": "Most walking meetings last between twenty and ___ minutes.",
     "a": [
      "forty",
      "40"
     ]
    },
    {
     "t": "tfng",
     "q": "Daniel's team liked the idea immediately.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "The California study found that walking can help creativity.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Daniel's company has offices in several countries.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "When are walking meetings NOT a good idea?",
     "o": [
      "For one-to-one meetings",
      "When people need to read documents",
      "When the weather is good"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-5",
   "title": "A Week Without My Phone",
   "topic": "Technology",
   "text": "Last month, my teacher challenged our class to live without smartphones for one week. Most of my classmates laughed, but twelve of us agreed to try. I was one of them, although I wasn't sure I would succeed. I usually spend about five hours a day on my phone.\n\nThe first two days were really difficult. I kept reaching into my pocket to check messages, even though my phone was locked in a drawer at home. I felt anxious because I thought I was missing important news from my friends. I also realised how often I used my phone for simple things: checking the time, the weather and the bus timetable. I had to buy a cheap watch and ask people for directions!\n\nBy the third day, however, something changed. I started noticing things around me. On the bus, I looked out of the window instead of at a screen, and I discovered a small bookshop near my school that I had never seen before. In the evenings, I finished my homework much faster because nothing interrupted me. I even started reading a novel, which I hadn't done for years.\n\nThe biggest surprise was sleep. Without my phone in bed, I fell asleep earlier and woke up feeling more rested.\n\nOf course, there were some problems. I missed a party because I didn't see the invitation in our group chat, and my mum got worried when she couldn't contact me after school.\n\nWhen the week finished, I was happy to get my phone back. But I have changed some habits. I now leave my phone outside my bedroom at night, and I have deleted two social media apps. I still use my phone every day, but now I feel that I control it, not the other way round.",
   "g": {
    "challenged": [
     "thách thức",
     "invited someone to try something difficult"
    ],
    "drawer": [
     "ngăn kéo",
     "a box in furniture that slides in and out"
    ],
    "anxious": [
     "lo âu",
     "worried and nervous"
    ],
    "realised": [
     "nhận ra",
     "understood something"
    ],
    "directions": [
     "chỉ đường",
     "instructions about how to get somewhere"
    ],
    "noticing": [
     "để ý",
     "seeing or becoming aware of"
    ],
    "interrupted": [
     "làm gián đoạn",
     "stopped something for a short time"
    ],
    "novel": [
     "tiểu thuyết",
     "a long story in a book"
    ],
    "rested": [
     "được nghỉ ngơi",
     "not tired any more"
    ],
    "habits": [
     "thói quen",
     "things you do often"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How many hours a day did the writer usually spend on the phone?",
     "o": [
      "Two",
      "Five",
      "Twelve"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "All the students in the class took part in the challenge.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "The writer bought a cheap ___ to check the time.",
     "a": "watch"
    },
    {
     "t": "tfng",
     "q": "The bookshop had opened recently.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What was the biggest surprise?",
     "o": [
      "Doing homework faster",
      "Sleeping better",
      "Making new friends"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The writer now keeps the phone out of the bedroom at night.",
     "a": "T"
    }
   ]
  },
  {
   "id": "r-b1-6",
   "title": "Is Your Home Smart?",
   "topic": "Technology",
   "text": "Imagine coming home on a cold evening. Before you arrive, the heating has already turned on. As you open the door, the lights switch on and your favourite music starts playing. This is not science fiction; it is a smart home, and more and more people are living in one.\n\nA smart home uses devices that are connected to the internet. You can control them with an app on your phone or with your voice, using a smart speaker. Popular devices include smart lights, heating systems, security cameras, door locks and even fridges that tell you when you need to buy more milk.\n\nSupporters say smart homes make life easier and safer. For example, if you forget to turn off the lights, you can do it from your office. Parents can check a camera to see if their children have arrived home from school. Smart heating can also save energy, because it only heats rooms when people are using them. For older people or people with disabilities, voice control can be especially helpful.\n\nHowever, not everyone is convinced. Smart devices can be expensive, and they sometimes stop working when the internet connection is down. The biggest worry for many people is privacy. Smart speakers are always listening for their \"wake word\", and some users are not comfortable with a device that might record their conversations. There have also been cases of hackers getting into home cameras.\n\nExperts advise people who want a smart home to start with one or two devices, buy from well-known companies, and change the default passwords immediately. It is also important to update the software regularly.\n\nSo, is a smart home a good idea? It depends on your needs, your budget and how much you trust technology.",
   "g": {
    "devices": [
     "thiết bị",
     "machines or tools"
    ],
    "heating": [
     "hệ thống sưởi",
     "a system that keeps a building warm"
    ],
    "security": [
     "an ninh",
     "protection from danger"
    ],
    "supporters": [
     "người ủng hộ",
     "people who agree with an idea"
    ],
    "disabilities": [
     "khuyết tật",
     "conditions that make some activities difficult"
    ],
    "convinced": [
     "bị thuyết phục",
     "completely sure"
    ],
    "privacy": [
     "quyền riêng tư",
     "being free from others watching you"
    ],
    "hackers": [
     "tin tặc",
     "people who get into computers illegally"
    ],
    "default": [
     "mặc định",
     "the original setting"
    ],
    "budget": [
     "ngân sách",
     "the money you have to spend"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Smart home devices are connected to…",
     "o": [
      "the electricity only",
      "the internet",
      "the television"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Smart heating can help save energy.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Smart homes are cheaper to buy than normal homes.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is the biggest worry for many people?",
     "o": [
      "Cost",
      "Privacy",
      "Noise"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Experts advise changing the default ___ immediately.",
     "a": [
      "passwords",
      "password"
     ]
    },
    {
     "t": "match",
     "q": "Match each device with what it does.",
     "p": [
      [
       "Smart speaker",
       "responds to your voice"
      ],
      [
       "Smart fridge",
       "tells you to buy more milk"
      ],
      [
       "Security camera",
       "shows if children are home"
      ]
     ]
    }
   ]
  },
  {
   "id": "r-b1-7",
   "title": "Lost in the Old Quarter",
   "topic": "Experiences",
   "text": "Two years ago, I travelled to Vietnam on my own for the first time. On my second evening in Hanoi, I decided to explore the Old Quarter without a map. I wanted to feel like a real traveller, not a tourist following a guidebook.\n\nAt first everything was wonderful. The narrow streets were full of motorbikes, street food stalls and shops selling everything from silk to shoes. I bought a bowl of bun cha and sat on a tiny plastic chair, watching the busy world go by. While I was eating, it started to get dark.\n\nWhen I tried to go back to my hotel, I realised I had no idea where I was. All the streets looked similar, and my phone battery was almost dead. I walked for half an hour, but I only got more lost. I was beginning to feel worried.\n\nThen I noticed an old man who was sitting outside a small shop, drinking tea. I showed him the hotel's business card. He didn't speak English and I didn't speak Vietnamese, but he smiled, closed his shop and gestured for me to follow him. We walked together for about fifteen minutes through streets I had never seen. When we reached my hotel, he simply waved and walked away before I could even thank him properly.\n\nI have travelled to many countries since then, but that evening is still one of my favourite memories. It taught me two things. First, always carry a fully charged phone or a paper map! Second, and more importantly, kindness doesn't need a common language. Whenever I see a lost tourist in my own city now, I try to help them, just like that old man helped me.",
   "g": {
    "explore": [
     "khám phá",
     "travel around a place to learn about it"
    ],
    "narrow": [
     "hẹp",
     "not wide"
    ],
    "silk": [
     "lụa",
     "soft fine cloth"
    ],
    "similar": [
     "tương tự",
     "almost the same"
    ],
    "battery": [
     "pin",
     "it gives power to a phone"
    ],
    "gestured": [
     "ra hiệu",
     "moved hands to show something"
    ],
    "properly": [
     "đúng cách, tử tế",
     "in the correct way"
    ],
    "memories": [
     "kỷ niệm",
     "things you remember"
    ],
    "charged": [
     "đã sạc",
     "with full power"
    ],
    "kindness": [
     "lòng tốt",
     "being friendly and helpful"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Why did the writer go out without a map?",
     "o": [
      "The phone was broken.",
      "The writer wanted to feel like a real traveller.",
      "The writer forgot it."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The writer was travelling with a friend.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "The writer's phone ___ was almost dead.",
     "a": "battery"
    },
    {
     "t": "tfng",
     "q": "The old man spoke a little English.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "The writer went back to thank the old man the next day.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is the most important lesson for the writer?",
     "o": [
      "Never travel alone.",
      "Kindness doesn't need a common language.",
      "Street food is dangerous."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-8",
   "title": "Volunteering at an Animal Shelter",
   "topic": "Experiences",
   "text": "Every Saturday morning, while most of her friends are still asleep, seventeen-year-old Chloe takes the bus to the Hope Animal Shelter on the edge of town. She has been volunteering there for eighteen months.\n\nThe shelter looks after dogs and cats that have been abandoned or lost. At any time, it has about forty dogs and twenty-five cats. It is run by four paid staff and a team of around thirty volunteers, mostly students and retired people.\n\nChloe's tasks vary. She cleans the cages, prepares food and takes the dogs for walks. \"Walking the dogs is my favourite part,\" she says. \"Some of them are very scared when they arrive, because they have had a hard life. It's amazing when a dog that was afraid of people starts to trust you.\"\n\nThe work isn't always easy. Cleaning can be dirty and tiring, and it can be sad when an animal is ill. But Chloe says she has gained a lot from the experience. She has become more patient and responsible, and she has made new friends of all ages. She has also decided what she wants to do in the future: she is planning to study veterinary medicine at university.\n\nThe shelter's manager, Ruth Adams, says volunteers are essential. \"Without them, we simply couldn't care for so many animals,\" she explains. \"We don't need people with special skills. We need people who are reliable and who love animals.\"\n\nIf you are interested in volunteering, the shelter asks you to come for a short training session first. Volunteers must be at least sixteen, and they are asked to give a minimum of three hours a week.",
   "g": {
    "volunteering": [
     "làm tình nguyện",
     "working without being paid"
    ],
    "shelter": [
     "trại cứu hộ",
     "a place that protects animals or people"
    ],
    "abandoned": [
     "bị bỏ rơi",
     "left forever by the owner"
    ],
    "retired": [
     "đã nghỉ hưu",
     "no longer working because of age"
    ],
    "vary": [
     "khác nhau",
     "are different"
    ],
    "cages": [
     "chuồng",
     "boxes with bars for animals"
    ],
    "trust": [
     "tin tưởng",
     "believe someone is good"
    ],
    "patient": [
     "kiên nhẫn",
     "able to wait calmly"
    ],
    "responsible": [
     "có trách nhiệm",
     "can be trusted to do the right thing"
    ],
    "reliable": [
     "đáng tin cậy",
     "you can depend on them"
    ],
    "essential": [
     "thiết yếu",
     "very important and necessary"
    ]
   },
   "q": [
    {
     "t": "gap",
     "q": "Chloe has been volunteering for eighteen ___.",
     "a": "months"
    },
    {
     "t": "mc",
     "q": "About how many cats does the shelter have?",
     "o": [
      "Twenty-five",
      "Forty",
      "Thirty"
     ],
     "a": 0
    },
    {
     "t": "tfng",
     "q": "All the people who work at the shelter are paid.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "What is Chloe's favourite part of the work?",
     "o": [
      "Cleaning the cages",
      "Walking the dogs",
      "Preparing food"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Chloe wants to study to become a vet.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Volunteers need special skills.",
     "a": "F"
    }
   ]
  },
  {
   "id": "r-b1-9",
   "title": "My Gap Year Plan",
   "topic": "Plans",
   "text": "Next June I'm going to finish secondary school, and I've decided to take a gap year before I start university. A gap year is a year when you take a break from education to travel, work or volunteer. My parents weren't very happy about the idea at first. They were worried that I would lose interest in studying. But after I showed them my plan, they agreed.\n\nFor the first three months, I'm going to work full-time in a supermarket near my home. I want to save as much money as possible for the rest of the year. I'm also going to do an online first-aid course, which I think will be useful when I travel.\n\nIn October, I'm flying to Australia. I've applied for a working holiday visa, which allows young people to work there for up to a year. I'm hoping to find a job on a farm, picking fruit, because I've heard it's a good way to meet people and earn money at the same time.\n\nAfter that, if I have enough money, I'd like to spend two months travelling around Southeast Asia. I'm especially excited about visiting Vietnam and Thailand. I'm going to stay in cheap hostels and travel by bus and train.\n\nI'll come back home in August, just before university starts. I'm going to study engineering, and I hope the experience will make me more independent and confident.\n\nOf course, a gap year isn't for everyone. It can be expensive, and some students find it hard to go back to studying. But I believe that if you plan carefully and have clear goals, it can be one of the most valuable experiences of your life.",
   "g": {
    "gap": [
     "khoảng trống (gap year: năm nghỉ)",
     "a break or space"
    ],
    "full-time": [
     "toàn thời gian",
     "working all the normal hours"
    ],
    "visa": [
     "thị thực",
     "a document that lets you enter a country"
    ],
    "engineering": [
     "ngành kỹ thuật",
     "the study of designing machines and structures"
    ],
    "independent": [
     "tự lập",
     "not needing help from others"
    ],
    "confident": [
     "tự tin",
     "sure about your abilities"
    ],
    "valuable": [
     "quý giá",
     "very useful or important"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How did the writer's parents feel about the idea at first?",
     "o": [
      "Excited",
      "Worried",
      "Angry"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The writer is going to do an online ___ course.",
     "a": [
      "first-aid",
      "first aid"
     ]
    },
    {
     "t": "tfng",
     "q": "A working holiday visa lets young people work in Australia for up to a year.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "The writer has already found a job on a farm.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "The writer has visited Thailand before.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What will the writer study at university?",
     "o": [
      "Medicine",
      "Engineering",
      "Tourism"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-10",
   "title": "Starting Again at Forty",
   "topic": "Work and plans",
   "text": "For fifteen years, Marta Silva worked as an accountant in a large bank in Lisbon. She had a good salary and a comfortable life, but she wasn't happy. \"Every Monday morning I felt tired before the week had even started,\" she remembers. \"I was good at my job, but I didn't enjoy it.\"\n\nMarta had always loved cooking. At weekends, she baked bread and cakes for her friends, and they often told her that she should open her own café. For years she thought it was just a dream. Then, when she turned forty, she decided it was now or never.\n\nShe didn't leave the bank immediately. First, she took evening classes at a cooking school for a year. Then she worked part-time in a friend's restaurant at weekends to learn how a food business really works. \"I learned that running a café isn't only about food,\" she says. \"You have to deal with suppliers, staff, money and customers who are sometimes difficult.\"\n\nFinally, after saving money for two years, she resigned from her job and opened a small café near the university. The first year was very hard. She worked twelve hours a day, six days a week, and she earned much less than before. There were months when she wasn't sure the business would survive.\n\nToday, three years later, the café is popular with students and local workers, and Marta employs four people. \"I'm busier than I've ever been, but I'm much happier,\" she says. \"My advice to anyone who wants to change career is: don't wait for the perfect moment, because it never comes. But do prepare carefully and be realistic about the difficulties.\"",
   "g": {
    "accountant": [
     "kế toán",
     "a person who manages financial records"
    ],
    "salary": [
     "lương",
     "money paid for work each month"
    ],
    "suppliers": [
     "nhà cung cấp",
     "companies that provide goods"
    ],
    "staff": [
     "nhân viên",
     "the people who work for a business"
    ],
    "resigned": [
     "nghỉ việc",
     "officially left a job"
    ],
    "survive": [
     "tồn tại được",
     "continue to exist"
    ],
    "employs": [
     "thuê, tuyển dụng",
     "pays people to work"
    ],
    "realistic": [
     "thực tế",
     "seeing things as they really are"
    ],
    "career": [
     "sự nghiệp",
     "the jobs you do in your working life"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What was Marta's job before the café?",
     "o": [
      "Cook",
      "Accountant",
      "Teacher"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Marta left the bank as soon as she decided to change career.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Marta took evening classes at a cooking school for a ___.",
     "a": "year"
    },
    {
     "t": "tfng",
     "q": "Marta earned more in her first year at the café than at the bank.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Marta's café is near the university.",
     "a": "T"
    },
    {
     "t": "mc",
     "q": "What is Marta's advice?",
     "o": [
      "Wait for the perfect moment.",
      "Don't wait, but prepare carefully.",
      "Never leave a good job."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-11",
   "title": "The Four-Day Week",
   "topic": "Work",
   "text": "Imagine working only four days a week for the same salary. For thousands of employees around the world, this is no longer a dream. In recent years, companies in countries such as the UK, Iceland, Spain and Japan have tested a four-day working week, and many have decided to keep it.\n\nIn one large trial in Britain, around sixty companies reduced their employees' hours by about twenty per cent without cutting pay. At the end of six months, most of the companies said that productivity had stayed the same or even improved. Workers reported feeling less stressed and more satisfied with their jobs, and fewer people took days off because they were ill.\n\nSupporters say that people work more efficiently when they know they have a long weekend. Meetings become shorter, and employees waste less time. A three-day weekend also gives people more time for their families, hobbies and exercise.\n\nHowever, the four-day week does not work for every job. Hospitals, schools and shops need staff every day, so they would have to hire more people, which is expensive. Some workers in the trials said that they felt under pressure to do five days of work in four, and that their working days had become longer and more tiring.\n\nExperts believe that the idea will continue to spread, but probably in different forms. Some companies may let staff choose which day they take off, while others may offer shorter days instead. What is clear is that many people now want more balance between work and the rest of their lives.",
   "g": {
    "salary": [
     "lương",
     "money you receive for working"
    ],
    "trial": [
     "thử nghiệm",
     "a test of something new"
    ],
    "productivity": [
     "năng suất",
     "how much work is done"
    ],
    "efficiently": [
     "hiệu quả",
     "without wasting time"
    ],
    "hire": [
     "thuê, tuyển",
     "employ someone"
    ],
    "pressure": [
     "áp lực",
     "a feeling that you must do something"
    ],
    "balance": [
     "sự cân bằng",
     "a good mix of different things"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "In the British trial, what happened to pay?",
     "o": [
      "It was cut by 20%.",
      "It stayed the same.",
      "It increased."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Most companies in the trial said productivity got worse.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Fewer workers took sick days during the trial.",
     "a": "T"
    },
    {
     "t": "gap",
     "q": "Hospitals and schools would have to ___ more people.",
     "a": "hire"
    },
    {
     "t": "tfng",
     "q": "The four-day week is now the law in Iceland.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What problem did some workers report?",
     "o": [
      "Their salary went down.",
      "They felt pressure to do five days' work in four.",
      "They had too many meetings."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-12",
   "title": "Learning to Cook at University",
   "topic": "Experiences",
   "text": "When Anh left home to study in Da Nang, she had never cooked a proper meal. At home, her mother and grandmother had always done the cooking, and Anh had only made instant noodles. \"For the first month, I lived on noodles, bread and takeaway food,\" she laughs. \"I spent too much money and I felt tired all the time.\"\n\nThings changed when her flatmate, Thu, suggested that they cook together twice a week. Thu had worked in her family's restaurant and knew how to prepare simple, cheap dishes. On their first evening, they made fried rice with egg and vegetables. \"It wasn't perfect, but it was the best meal I had eaten since I'd arrived,\" Anh says.\n\nAfter a few weeks, Anh started looking for recipes online and calling her mother for advice. She learned to make soup, grilled fish and several kinds of stir-fried vegetables. She also discovered that planning meals for the week and shopping at the local market saved her a lot of money. She soon realised that cooking at home was not only cheaper but also much healthier than eating takeaway food every day.\n\nNow, in her second year, Anh cooks almost every day and often invites classmates for dinner. \"Cooking has become my way of relaxing after studying,\" she explains. \"And it's a great way to make friends, because everyone loves free food!\"\n\nHer advice for new students is simple: start with three or four easy recipes, cook with friends, and don't worry about making mistakes. \"My first attempts were terrible,\" she admits, \"but that's how you learn.\"",
   "g": {
    "proper": [
     "đúng nghĩa, tử tế",
     "real, correct"
    ],
    "instant noodles": [
     "mì ăn liền",
     "noodles you prepare in minutes"
    ],
    "takeaway": [
     "đồ ăn mang về",
     "food bought to eat at home"
    ],
    "flatmate": [
     "bạn cùng phòng",
     "a person you share a flat with"
    ],
    "recipe": [
     "công thức nấu ăn",
     "instructions for cooking a dish"
    ],
    "attempt": [
     "lần thử",
     "a try"
    ],
    "admit": [
     "thừa nhận",
     "agree that something is true"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What did Anh mostly eat in her first month?",
     "o": [
      "Home-cooked meals",
      "Noodles, bread and takeaway food",
      "Food from the university canteen"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Thu had experience in a restaurant.",
     "a": "T"
    },
    {
     "t": "gap",
     "q": "Their first meal together was fried rice with egg and ___.",
     "a": "vegetables"
    },
    {
     "t": "tfng",
     "q": "Shopping at the market cost Anh more money.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Anh wants to open a restaurant after university.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is Anh's advice?",
     "o": [
      "Only cook expensive dishes",
      "Start with easy recipes and don't worry about mistakes",
      "Always eat in restaurants"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b1-13",
   "title": "Electric Scooters: Help or Problem?",
   "topic": "Technology",
   "text": "In many cities around the world, shared electric scooters have appeared almost overnight. Using an app, you can find a scooter on the street, unlock it with your phone, ride it to your destination and leave it there. The cost is usually a small fee to start plus a few cents per minute.\n\nSupporters say e-scooters are a cheap and fun way to make short journeys, especially for trips that are too far to walk but too short for a bus. Because they are electric, they don't produce pollution while they are being used, and they can help to reduce traffic if people use them instead of cars. They can also be a useful link to train and metro stations for people who live a little too far away to walk.\n\nHowever, e-scooters have also caused many problems. Pedestrians complain that riders go too fast on pavements and that scooters are left in the middle of the street, where people can trip over them. There have been many accidents, and some riders have been seriously injured, often because they were not wearing helmets. In addition, studies have shown that many scooter trips replace walking or cycling, not car journeys, so the environmental benefits may be smaller than expected.\n\nAs a result, cities have introduced new rules. Paris, for example, held a public vote in 2023, and most voters chose to ban shared scooters. Other cities have set speed limits, created special parking areas or made helmets compulsory.\n\nSo, are e-scooters the future of city transport? Perhaps, but only if they are well managed and if riders behave responsibly.",
   "g": {
    "unlock": [
     "mở khóa",
     "open something that is locked"
    ],
    "destination": [
     "điểm đến",
     "the place you are going to"
    ],
    "fee": [
     "phí",
     "money you pay for a service"
    ],
    "pavement": [
     "vỉa hè",
     "the path at the side of a road"
    ],
    "trip": [
     "vấp ngã (trip over)",
     "fall because your foot hits something"
    ],
    "helmet": [
     "mũ bảo hiểm",
     "a hard hat that protects your head"
    ],
    "compulsory": [
     "bắt buộc",
     "required by a rule"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How do you unlock a shared e-scooter?",
     "o": [
      "With a key",
      "With your phone",
      "With a bus ticket"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "E-scooters produce pollution while people ride them.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Many scooter trips replace walking or cycling.",
     "a": "T"
    },
    {
     "t": "gap",
     "q": "Many injured riders were not wearing ___.",
     "a": [
      "helmets",
      "a helmet"
     ]
    },
    {
     "t": "mc",
     "q": "What happened in Paris in 2023?",
     "o": [
      "Scooters became free.",
      "Voters chose to ban shared scooters.",
      "Helmets became compulsory."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "E-scooters are cheaper than buses in every city.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b1-14",
   "title": "Why I Started Running",
   "topic": "Health",
   "text": "Two years ago, I couldn't run for more than a minute without stopping. I worked in an office, I spent my evenings on the sofa, and I often felt tired and stressed. One day, a colleague told me about a free app that helps beginners to start running. It sounded too easy, but I decided to try it.\n\nThe app's plan lasted nine weeks. In the first week, I had to run for one minute and then walk for ninety seconds, eight times. It was harder than I expected, and my legs hurt the next day. But the plan increased the running time very slowly, so I never felt that it was impossible. Some evenings I didn't want to go out at all, but I always felt better afterwards.\n\nAfter about a month, I noticed some changes. I was sleeping better, I had more energy at work, and I felt calmer. I also started to enjoy the time on my own, listening to music or podcasts while I ran along the river.\n\nAt the end of the nine weeks, I could run for thirty minutes without stopping. I was so proud that I signed up for a five-kilometre race in my city. I finished it in thirty-four minutes, and the atmosphere at the finish line was amazing.\n\nSince then, I have run two ten-kilometre races, and I've joined a running club that meets twice a week. I'm not fast, but that doesn't matter. Running has helped me to stay healthy, make new friends and deal with stress. If I can do it, anyone can!",
   "g": {
    "beginner": [
     "người mới bắt đầu",
     "a person who is starting to learn"
    ],
    "increase": [
     "tăng",
     "make bigger"
    ],
    "energy": [
     "năng lượng",
     "the strength to be active"
    ],
    "podcast": [
     "chương trình âm thanh",
     "an audio programme you download"
    ],
    "sign up": [
     "đăng ký",
     "put your name down for an activity"
    ],
    "atmosphere": [
     "bầu không khí",
     "the feeling in a place"
    ],
    "deal with": [
     "đối phó với",
     "manage a problem"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How long did the app's plan last?",
     "o": [
      "Four weeks",
      "Nine weeks",
      "Thirty weeks"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The first week of the plan was easy for the writer.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "After a month, the writer was sleeping better and had more ___.",
     "a": "energy"
    },
    {
     "t": "mc",
     "q": "How long did the 5 km race take?",
     "o": [
      "30 minutes",
      "34 minutes",
      "45 minutes"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The writer's running club meets twice a week.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "The writer wants to run a marathon next year.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b1-15",
   "title": "Choosing a Course After School",
   "topic": "School and plans",
   "text": "At the end of secondary school, many students face a difficult question: what should I study next? Choosing a course can affect your career, your friends and even where you live, so it is natural to feel nervous. Here is some advice from university advisers.\n\nFirst, think about what you enjoy. Students who study a subject they find interesting usually work harder and get better results. Ask yourself which lessons make time pass quickly and which topics you read about in your free time.\n\nSecond, research the jobs that the course can lead to. Some degrees, such as medicine or engineering, prepare you for a specific profession. Others, like history or languages, develop general skills that are useful in many careers. Look at websites, talk to people who work in those fields and, if possible, do some work experience.\n\nThird, find out as much as possible about the course itself. Two courses with the same name can be very different. Check the modules you will study, how you will be assessed and whether there are opportunities to study abroad or do an internship.\n\nDon't forget practical questions, too. How much will the course cost? Can you get a scholarship? Would you prefer to study in a big city or a smaller town?\n\nFinally, don't choose a course only because your friends are doing it or because your parents want you to. It is your future, so listen to advice, but make the decision yourself. And remember: if you realise later that you have made the wrong choice, it is usually possible to change.",
   "g": {
    "adviser": [
     "cố vấn",
     "a person who gives advice"
    ],
    "profession": [
     "nghề nghiệp",
     "a job that needs special training"
    ],
    "module": [
     "học phần",
     "one part of a course"
    ],
    "assess": [
     "đánh giá",
     "judge or test"
    ],
    "internship": [
     "thực tập",
     "a period of work experience"
    ],
    "scholarship": [
     "học bổng",
     "money to pay for study"
    ],
    "realise": [
     "nhận ra",
     "understand something"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Why should you choose a subject you enjoy?",
     "o": [
      "It is always cheaper.",
      "You will probably work harder and get better results.",
      "Your friends will study it too."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "History degrees prepare students for one specific profession.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Check the ___ you will study on the course.",
     "a": [
      "modules",
      "module"
     ]
    },
    {
     "t": "tfng",
     "q": "Two courses with the same name are always the same.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Most students change their course after the first year.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is the writer's final advice?",
     "o": [
      "Follow your parents' wishes.",
      "Listen to advice but decide yourself.",
      "Choose the course your friends choose."
     ],
     "a": 1
    }
   ]
  }
 ],
 "B2": [
  {
   "id": "r-b2-1",
   "title": "The Hidden Cost of Fast Fashion",
   "topic": "Environment",
   "text": "Walk into any high-street clothing store and you will find T-shirts that cost less than a sandwich. Over the past two decades, the fashion industry has transformed itself. Instead of releasing two collections a year, many brands now introduce new designs every few weeks, and shoppers have come to expect constant novelty. This model, known as \"fast fashion\", has made trendy clothes affordable for millions of people. Yet behind the low prices lies a considerable environmental cost.\n\nProducing clothes requires enormous amounts of resources. Cotton, one of the most widely used fibres, is an extremely thirsty crop: growing enough to make a single pair of jeans can consume several thousand litres of water. Synthetic fabrics such as polyester, on the other hand, are made from oil, and every time they are washed, they release tiny plastic fibres that eventually end up in rivers and oceans. Dyeing and finishing processes add chemicals that, in countries with weak regulations, are often poured directly into local waterways.\n\nThe problem does not end when clothes leave the factory. Because they are so cheap, many garments are worn only a handful of times before being thrown away. Studies suggest that the average consumer buys far more clothing than twenty years ago, but keeps each item for roughly half as long. The vast majority of unwanted clothes are either burned or sent to landfill, and only a tiny percentage is recycled into new garments. In some developing countries, mountains of second-hand clothing shipped from wealthier nations have become a serious waste problem in their own right.\n\nSome companies have responded to growing public concern by launching \"sustainable\" or \"eco-friendly\" collections. Critics argue, however, that many of these initiatives amount to little more than marketing, a practice often called greenwashing. A brand that sells a few items made from recycled materials while continuing to produce millions of cheap garments every month is hardly solving the problem. Genuine progress, they say, would mean producing fewer garments, not simply adding a green label to a small part of the range.\n\nSo what can individuals do? Experts point out that the most sustainable garment is the one already in your wardrobe. Buying fewer, better-quality items, repairing clothes instead of replacing them, and shopping second-hand can all reduce our impact. Clothing swaps and rental services are also becoming increasingly popular, particularly among young people. Ultimately, though, many campaigners believe that lasting change will require stricter laws that hold manufacturers responsible for the entire life cycle of their products.",
   "g": {
    "transformed": [
     "biến đổi hoàn toàn",
     "changed completely"
    ],
    "novelty": [
     "sự mới lạ",
     "the quality of being new"
    ],
    "affordable": [
     "vừa túi tiền",
     "cheap enough to buy"
    ],
    "considerable": [
     "đáng kể",
     "large in amount"
    ],
    "fibres": [
     "sợi",
     "thin threads"
    ],
    "synthetic": [
     "tổng hợp, nhân tạo",
     "made by people, not natural"
    ],
    "regulations": [
     "quy định",
     "official rules"
    ],
    "garments": [
     "quần áo",
     "pieces of clothing"
    ],
    "landfill": [
     "bãi chôn lấp rác",
     "a place where waste is buried"
    ],
    "greenwashing": [
     "tẩy xanh",
     "making a company seem more eco-friendly than it is"
    ],
    "sustainable": [
     "bền vững",
     "not harming the environment long-term"
    ],
    "wardrobe": [
     "tủ quần áo",
     "a cupboard for clothes"
    ],
    "campaigners": [
     "nhà vận động",
     "people who work for a cause"
    ]
   },
   "q": [
    {
     "t": "head",
     "q": "Choose the best heading for each paragraph. There are two extra headings.",
     "h": [
      "A business model built on speed",
      "The resources behind our clothes",
      "A short life, then the rubbish heap",
      "Marketing or real change?",
      "Small steps and bigger solutions",
      "Why cotton is better than polyester",
      "The history of the high street"
     ],
     "a": [
      0,
      1,
      2,
      3,
      4
     ]
    },
    {
     "t": "tfng",
     "q": "Making one pair of jeans may use thousands of litres of water.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Most unwanted clothes are recycled into new garments.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "In the text, “greenwashing” means…",
     "o": [
      "recycling old clothes",
      "making a brand look more environmentally friendly than it is",
      "washing clothes at low temperatures"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Rental services are mainly popular with older consumers.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Experts say the most sustainable garment is the one already in your ___.",
     "a": "wardrobe"
    }
   ]
  },
  {
   "id": "r-b2-2",
   "title": "Rewilding: Letting Nature Take Back Control",
   "topic": "Environment",
   "text": "For centuries, humans have shaped the landscape to suit their needs, clearing forests for farmland, draining wetlands and hunting large animals until they disappeared. Today, a growing movement is attempting something radically different. Known as rewilding, it aims to restore ecosystems by allowing natural processes to take over again, with as little human management as possible.\n\nUnlike traditional conservation, which often focuses on protecting a particular species or carefully maintaining a habitat, rewilding takes a more hands-off approach. The idea is to repair the basic conditions for nature, for example by removing dams or reintroducing missing animals, and then step back. Supporters argue that ecosystems are far better at managing themselves than we are. In their view, nature has been recovering from disturbances for millions of years, and our role should be to remove the obstacles rather than to control every detail.\n\nOne of the most famous examples comes from Yellowstone National Park in the United States. Wolves had been eliminated from the park by the 1920s, and without them, the population of elk grew rapidly. The elk ate young trees along the rivers, which in turn led to riverbank erosion. When wolves were reintroduced in 1995, elk numbers fell and their behaviour changed. Trees began to recover, and with them came birds, beavers and fish. Scientists still debate how much of this change was caused by the wolves alone, but the case has become a powerful symbol of what rewilding might achieve.\n\nIn Europe, rewilding projects range from returning beavers to British rivers to allowing abandoned farmland in Spain and Portugal to turn back into forest. In the Netherlands, a controversial reserve called Oostvaardersplassen introduced large grazing animals such as deer and wild horses. However, during harsh winters, many of the animals starved, sparking public anger and a heated discussion about whether humans should intervene.\n\nThis highlights one of the main criticisms of rewilding. Farmers worry that predators such as wolves and lynx will attack their livestock, and some rural communities feel that decisions are being made by city-dwelling environmentalists who do not depend on the land for their living. Others question whether it is realistic to recreate \"wild\" landscapes in densely populated countries.\n\nDespite these concerns, interest in rewilding continues to grow. Advocates point out that healthy ecosystems store carbon, reduce flooding and support tourism, bringing economic benefits to rural areas. Many now argue that the most successful projects are those that involve local people from the beginning, combining ecological goals with the needs of the communities who live alongside them.",
   "g": {
    "landscape": [
     "cảnh quan",
     "everything you can see in an area of land"
    ],
    "draining": [
     "rút nước",
     "removing water from"
    ],
    "restore": [
     "khôi phục",
     "bring back to a good condition"
    ],
    "ecosystems": [
     "hệ sinh thái",
     "living things in an area and their environment"
    ],
    "habitat": [
     "môi trường sống",
     "the natural home of an animal or plant"
    ],
    "reintroducing": [
     "tái thả",
     "bringing an animal back to an area"
    ],
    "erosion": [
     "xói mòn",
     "gradual damage by water or wind"
    ],
    "controversial": [
     "gây tranh cãi",
     "causing disagreement"
    ],
    "starved": [
     "chết đói",
     "died from lack of food"
    ],
    "intervene": [
     "can thiệp",
     "become involved to change a situation"
    ],
    "livestock": [
     "gia súc",
     "farm animals"
    ],
    "advocates": [
     "người ủng hộ",
     "people who publicly support an idea"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How is rewilding different from traditional conservation?",
     "o": [
      "It focuses on one species.",
      "It uses less human management.",
      "It is more expensive."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Wolves had disappeared from Yellowstone before 1930.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Scientists all agree that wolves alone caused the changes in Yellowstone.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "In the Netherlands, many animals ___ during harsh winters.",
     "a": "starved"
    },
    {
     "t": "match",
     "q": "Match each place with its rewilding project.",
     "p": [
      [
       "Britain",
       "returning beavers to rivers"
      ],
      [
       "Spain and Portugal",
       "farmland turning back into forest"
      ],
      [
       "The Netherlands",
       "introducing deer and wild horses"
      ]
     ]
    },
    {
     "t": "tfng",
     "q": "Most rewilding projects are paid for by tourism.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "According to the last paragraph, the most successful projects…",
     "o": [
      "avoid rural areas",
      "involve local people from the beginning",
      "focus only on tourism"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-3",
   "title": "The Loneliness Epidemic",
   "topic": "Society",
   "text": "It may seem strange that in an age when we can contact almost anyone in the world instantly, more people than ever report feeling lonely. Yet surveys in many countries suggest exactly that. In the United Kingdom, the problem was considered so serious that in 2018 the government appointed a Minister for Loneliness, the first position of its kind in the world.\n\nLoneliness is not the same as being alone. Many people enjoy spending time by themselves, while others feel isolated even when surrounded by friends and family. Psychologists define loneliness as the gap between the social connections we have and the ones we would like to have. It is, in other words, a subjective feeling rather than an objective situation.\n\nTraditionally, loneliness was seen as a problem mainly affecting older people, particularly those who have lost a partner or live far from their families. While this group remains vulnerable, recent research has produced a surprising finding: young adults aged between sixteen and twenty-four often report the highest levels of loneliness of any age group. Possible explanations include moving away from home for study or work, the pressure to appear successful on social media, and a decline in community activities that once brought people together.\n\nThe consequences are more serious than many people realise. Chronic loneliness has been linked to depression, anxiety, poor sleep and even heart disease. Some researchers have claimed that its impact on life expectancy is comparable to that of smoking, although this comparison remains a subject of debate. What is clear is that humans are social creatures, and long periods of isolation affect both mental and physical health.\n\nVarious solutions are being tried. Some doctors now practise \"social prescribing\", referring lonely patients to local groups such as gardening clubs, walking groups or choirs instead of, or as well as, prescribing medication. Intergenerational projects, in which students share housing with elderly people or visit care homes, have shown promising results for both age groups. Technology, often blamed for the problem, can also be part of the solution: online communities help people with rare illnesses or specific interests find others like them.\n\nUltimately, however, experts emphasise that tackling loneliness cannot be left to governments alone. Small actions, such as chatting with a neighbour, inviting a new colleague to lunch or simply making a phone call, can make a significant difference. Loneliness, they argue, is not a personal failure but a shared social challenge.",
   "g": {
    "epidemic": [
     "đại dịch, sự lan rộng",
     "something bad that affects many people"
    ],
    "appointed": [
     "bổ nhiệm",
     "chose someone for an official job"
    ],
    "isolated": [
     "bị cô lập",
     "alone and without contact"
    ],
    "subjective": [
     "chủ quan",
     "based on personal feelings"
    ],
    "vulnerable": [
     "dễ bị tổn thương",
     "easily hurt or harmed"
    ],
    "decline": [
     "sự suy giảm",
     "a decrease"
    ],
    "chronic": [
     "mãn tính",
     "lasting a long time"
    ],
    "expectancy": [
     "tuổi thọ (life expectancy)",
     "how long a person is likely to live"
    ],
    "prescribing": [
     "kê đơn",
     "telling a patient to take a medicine"
    ],
    "intergenerational": [
     "liên thế hệ",
     "between different age groups"
    ],
    "tackling": [
     "giải quyết",
     "trying to deal with a problem"
    ],
    "emphasise": [
     "nhấn mạnh",
     "show something is important"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What did the UK government do in 2018?",
     "o": [
      "Banned social media for children",
      "Appointed a Minister for Loneliness",
      "Opened new care homes"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "According to psychologists, people who live alone are always lonely.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Young adults often report higher levels of loneliness than older people.",
     "a": "T"
    },
    {
     "t": "mc",
     "q": "“Social prescribing” means…",
     "o": [
      "giving patients more medicine",
      "referring patients to community activities",
      "treating patients online"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "All researchers agree that loneliness is as harmful as smoking.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Projects where students share housing with elderly people are called ___ projects.",
     "a": "intergenerational"
    },
    {
     "t": "tfng",
     "q": "The UK's Minister for Loneliness was later replaced by a new department.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b2-4",
   "title": "Should City Centres Be Car-Free?",
   "topic": "Society (opinion)",
   "text": "From Oslo to Madrid, a number of European cities have taken bold steps to reduce or even ban private cars in their historic centres. Supporters see this as an essential move towards cleaner, safer and more liveable cities. Opponents, on the other hand, warn of damage to businesses and inconvenience for residents. As more cities around the world consider similar policies, the debate is becoming increasingly heated.\n\nThe most obvious argument in favour of car-free centres concerns air quality. Road traffic is a major source of nitrogen dioxide and fine particles, pollutants associated with asthma, heart disease and other serious conditions. When Madrid restricted traffic in its central district, monitoring stations recorded a significant drop in pollution within months. Reducing traffic also cuts noise, which is increasingly recognised as a health hazard in its own right.\n\nSafety is another key consideration. Fewer cars mean fewer accidents, and streets become more welcoming for pedestrians, cyclists and children. In Oslo, which removed most parking spaces from its centre and replaced them with benches, bike lanes and small parks, the number of pedestrian deaths fell dramatically. Many residents say the city simply feels more pleasant to walk around. Local cafés have also gained space for outdoor tables, which has made the streets livelier in the evenings.\n\nCritics, however, raise legitimate concerns. Shop owners frequently fear that customers who can no longer drive into the centre will shop elsewhere, for example in out-of-town shopping malls. Elderly and disabled people, who may depend on cars, can find it harder to reach essential services. There is also a risk that traffic is simply pushed into surrounding neighbourhoods, where it causes congestion and pollution for people who may be less able to complain.\n\nEvidence suggests that the economic fears are often exaggerated. Studies in several cities have found that pedestrians and cyclists tend to visit local shops more frequently than drivers, even if they spend less on each visit, and that footfall often rises once streets become more attractive. Nevertheless, the transition can be difficult, and some small businesses do struggle during the early stages.\n\nIn my view, the benefits of car-free centres clearly outweigh the drawbacks, but only if such schemes are carefully designed. Cities need to invest in reliable, affordable public transport before restricting cars, provide exceptions for disabled drivers and deliveries, and consult local businesses throughout the process. A car-free centre should not be imposed overnight; it should be built together with the people who live and work there.",
   "g": {
    "bold": [
     "táo bạo",
     "brave and confident"
    ],
    "liveable": [
     "đáng sống",
     "pleasant to live in"
    ],
    "opponents": [
     "người phản đối",
     "people who disagree"
    ],
    "pollutants": [
     "chất gây ô nhiễm",
     "substances that pollute"
    ],
    "hazard": [
     "mối nguy",
     "a danger"
    ],
    "pedestrians": [
     "người đi bộ",
     "people walking in the street"
    ],
    "legitimate": [
     "chính đáng",
     "reasonable and fair"
    ],
    "congestion": [
     "tắc nghẽn",
     "too much traffic"
    ],
    "exaggerated": [
     "bị phóng đại",
     "made to seem bigger than it is"
    ],
    "footfall": [
     "lượng khách qua lại",
     "the number of people visiting a place"
    ],
    "outweigh": [
     "vượt trội hơn",
     "be more important than"
    ],
    "imposed": [
     "bị áp đặt",
     "forced on people"
    ]
   },
   "q": [
    {
     "t": "head",
     "q": "Choose the best heading for each paragraph. There is one extra heading.",
     "h": [
      "A growing controversy",
      "Cleaner air and quieter streets",
      "Safer places for people",
      "The case against",
      "Do shops really lose out?",
      "Conditions for success",
      "How cars changed our cities"
     ],
     "a": [
      0,
      1,
      2,
      3,
      4,
      5
     ]
    },
    {
     "t": "tfng",
     "q": "Madrid saw pollution fall soon after it restricted traffic.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Pedestrians spend more money on each visit than drivers.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Traffic may be pushed into surrounding neighbourhoods, causing ___.",
     "a": "congestion"
    },
    {
     "t": "mc",
     "q": "What is the writer's opinion?",
     "o": [
      "Cars should be banned immediately.",
      "The benefits outweigh the drawbacks if schemes are well designed.",
      "Car-free centres always harm businesses."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-5",
   "title": "News in the Age of the Algorithm",
   "topic": "Media",
   "text": "Not long ago, most people got their news from a handful of sources: a morning newspaper, the radio or the evening television bulletin. Editors decided which stories were important, and everyone saw more or less the same headlines. Today, a growing proportion of people, especially under the age of thirty-five, encounter news mainly through social media feeds, video platforms and news aggregator apps. This shift has transformed not only how we consume information, but also what we consume.\n\nOn social media, what appears on your screen is largely determined by algorithms: sets of rules that predict what content will keep you engaged. These algorithms learn from your behaviour: what you click, share, comment on and how long you spend looking at something. The result is a highly personalised feed. On the positive side, this means people can easily follow topics that genuinely interest them, from local politics to climate science, and discover voices that traditional media might have ignored.\n\nHowever, critics argue that personalisation comes at a price. Because algorithms tend to prioritise content that provokes strong reactions, sensational or emotionally charged stories often spread faster than careful, balanced reporting. Some researchers have also warned of \"filter bubbles\", in which users are mainly exposed to views that confirm what they already believe. While the extent of this effect is disputed, it raises concerns about increasing polarisation in society.\n\nThe speed of social media has created another challenge: misinformation. False or misleading stories can reach millions of people before journalists or fact-checkers have had time to investigate. During elections and public health emergencies, such content can have real consequences. Platforms have introduced measures such as warning labels and partnerships with fact-checking organisations, but many experts believe these efforts remain insufficient.\n\nTraditional news organisations, meanwhile, face their own difficulties. As advertising revenue has moved online, many local newspapers have closed, leaving some communities with little independent coverage of local issues. Some publishers have responded by introducing paywalls, asking readers to pay for quality journalism, while others rely on donations or public funding.\n\nWhat does this mean for ordinary readers? Media literacy, the ability to evaluate sources critically, is becoming an essential skill. Checking who is behind a story, looking for the original source, comparing several outlets and being aware of our own biases can help us navigate a complex information landscape. In the end, algorithms may shape what we see, but we still have a choice about what we believe.",
   "g": {
    "bulletin": [
     "bản tin",
     "a short news broadcast"
    ],
    "aggregator": [
     "ứng dụng tổng hợp",
     "a service that collects content from many sources"
    ],
    "algorithms": [
     "thuật toán",
     "sets of rules a computer follows"
    ],
    "engaged": [
     "bị cuốn hút",
     "interested and involved"
    ],
    "prioritise": [
     "ưu tiên",
     "treat as more important"
    ],
    "sensational": [
     "giật gân",
     "shocking, to attract attention"
    ],
    "polarisation": [
     "sự phân cực",
     "division into opposite groups"
    ],
    "misinformation": [
     "thông tin sai lệch",
     "false information"
    ],
    "revenue": [
     "doanh thu",
     "money a business receives"
    ],
    "paywalls": [
     "tường phí",
     "systems that require payment to read content"
    ],
    "literacy": [
     "hiểu biết, năng lực",
     "skill or knowledge in an area"
    ],
    "biases": [
     "định kiến",
     "unfair preferences"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Who mainly gets news through social media, according to the text?",
     "o": [
      "People over 65",
      "People under 35",
      "Journalists"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Algorithms learn from users' behaviour.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Researchers fully agree on how strong the filter bubble effect is.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "False or misleading information is called ___.",
     "a": "misinformation"
    },
    {
     "t": "tfng",
     "q": "Most local newspapers have introduced paywalls.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is media literacy?",
     "o": [
      "The ability to evaluate sources critically",
      "The ability to write news articles",
      "Knowing how algorithms are programmed"
     ],
     "a": 0
    }
   ]
  },
  {
   "id": "r-b2-6",
   "title": "The Influencer Economy",
   "topic": "Media",
   "text": "Ask a group of teenagers what they want to be when they grow up, and a surprising number will answer: \"an influencer\". Over the past decade, people who build large followings on platforms such as Instagram, YouTube and TikTok have become some of the most powerful figures in marketing. Brands now spend billions of dollars every year paying them to promote products, from cosmetics to cars.\n\nThe appeal for companies is easy to understand. Traditional advertising is increasingly ignored; many viewers skip adverts or use ad-blocking software. Influencers, by contrast, often have a close and trusting relationship with their audience. When a creator that people have followed for years recommends a product, it can feel more like advice from a friend than a sales pitch. Interestingly, so-called micro-influencers, with between ten thousand and one hundred thousand followers, often achieve higher engagement rates than celebrities with millions.\n\nFor the influencers themselves, the reality is often less glamorous than it appears. Only a small minority earn enough to make a living. Producing content consistently is time-consuming and stressful, and income can disappear overnight if a platform changes its algorithm or a brand ends a partnership. Many creators report burnout, anxiety and pressure to share ever more of their private lives in order to stay relevant.\n\nThe influencer industry has also raised ethical questions. In the past, some influencers promoted products without making it clear that they were being paid, which misled their followers. Many countries have since introduced rules requiring sponsored posts to be clearly labelled, although enforcement is inconsistent. There is particular concern about younger audiences, who may find it difficult to distinguish between genuine opinions and advertising. Critics also argue that the carefully edited images common on social media can promote unrealistic standards of beauty and lifestyle.\n\nNot all influence is commercial, however. Some creators use their platforms to educate, raising awareness of issues such as mental health, environmental protection or financial literacy. Teachers, doctors and scientists have found large audiences by explaining complex topics in accessible ways. In this sense, the line between entertainment, education and marketing is becoming increasingly blurred.\n\nWhether we see influencers as a positive or negative force probably depends on how we engage with them. Following creators critically, noticing when content is sponsored and remembering that online lives are often carefully curated can help us enjoy what social media offers without being unduly influenced by it.",
   "g": {
    "followings": [
     "lượng người theo dõi",
     "groups of people who follow someone"
    ],
    "promote": [
     "quảng bá",
     "advertise to increase sales"
    ],
    "appeal": [
     "sức hấp dẫn",
     "the quality of being attractive"
    ],
    "pitch": [
     "lời chào hàng (sales pitch)",
     "words used to persuade people to buy"
    ],
    "engagement": [
     "mức độ tương tác",
     "how much people interact with content"
    ],
    "glamorous": [
     "hào nhoáng",
     "exciting and attractive"
    ],
    "burnout": [
     "kiệt sức",
     "extreme tiredness from overwork"
    ],
    "ethical": [
     "thuộc đạo đức",
     "related to what is morally right"
    ],
    "misled": [
     "đánh lừa",
     "made someone believe something false"
    ],
    "sponsored": [
     "được tài trợ",
     "paid for by a company"
    ],
    "blurred": [
     "mờ nhạt",
     "not clear"
    ],
    "curated": [
     "được chọn lọc kỹ",
     "carefully selected and organised"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "Why do brands like working with influencers?",
     "o": [
      "They are cheaper than TV adverts.",
      "They have a trusting relationship with their audience.",
      "They never use algorithms."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Micro-influencers often have higher engagement rates than celebrities.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Most influencers earn enough money to live on.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Many creators report ___, anxiety and pressure to share their private lives.",
     "a": "burnout"
    },
    {
     "t": "tfng",
     "q": "All countries strictly enforce rules about sponsored posts.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Some doctors have built large audiences on social media.",
     "a": "T"
    },
    {
     "t": "mc",
     "q": "What is the writer's conclusion?",
     "o": [
      "Influencers are harmful.",
      "It depends on how we engage with them.",
      "Influencers should be banned for teenagers."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-7",
   "title": "Exams: Measuring Learning or Getting in the Way?",
   "topic": "Education",
   "text": "Every year, millions of students around the world sit high-stakes exams that can determine which university they attend and, in some cases, the direction of their entire career. In Vietnam, the national high school graduation exam is a major event; in South Korea, flights are rescheduled so that aircraft noise does not disturb students during the English listening test. Yet despite their importance, exams remain one of the most debated aspects of education.\n\nDefenders of traditional examinations point to their fairness. A standardised test, taken by all students under the same conditions and marked anonymously, offers a relatively objective way to compare candidates from different schools and backgrounds. Without such tests, they argue, university admissions might depend more heavily on personal connections or on the reputation of a student's school, which could disadvantage those from less privileged communities. In many countries, a national exam is also seen as one of the few ways in which a talented student from a poor rural area can compete equally with wealthier peers.\n\nCritics, however, argue that exams measure only a narrow range of abilities. Skills such as creativity, teamwork, critical thinking and practical problem-solving are difficult to assess in a timed written paper. Moreover, when results carry enormous consequences, teachers may feel pressure to \"teach to the test\", focusing on exam techniques rather than deep understanding. Students, in turn, may learn to memorise information for a few hours rather than to genuinely engage with ideas.\n\nThere are also concerns about well-being. Surveys in several countries have linked intense exam pressure with anxiety, sleep problems and, in extreme cases, more serious mental health difficulties. Some students perform poorly not because they lack knowledge but because stress affects them on the day itself. Others become so focused on grades that they lose their natural curiosity about learning.\n\nIn response, some education systems have experimented with alternatives. Finland, often praised for its schools, has very few standardised tests before the end of secondary education, relying instead on teacher assessment. Other countries have introduced a mix of coursework, projects and oral presentations alongside written exams, so that a single bad day does not decide a student's future.\n\nPerhaps the real question is not whether we should have exams, but what role they should play. Used wisely, as one source of information among several, tests can motivate students and provide valuable feedback. The danger arises when a single score becomes the only measure that matters. It is a balance that every education system has to find for itself.",
   "g": {
    "high-stakes": [
     "có tính quyết định cao",
     "with very important results"
    ],
    "rescheduled": [
     "dời lịch",
     "changed to another time"
    ],
    "standardised": [
     "được chuẩn hóa",
     "the same for everyone"
    ],
    "anonymously": [
     "ẩn danh",
     "without names"
    ],
    "admissions": [
     "tuyển sinh",
     "accepting students into a school"
    ],
    "privileged": [
     "có đặc quyền",
     "having advantages others don't have"
    ],
    "assess": [
     "đánh giá",
     "judge the quality of"
    ],
    "memorise": [
     "học thuộc",
     "learn by heart"
    ],
    "well-being": [
     "sức khỏe tinh thần",
     "feeling healthy and happy"
    ],
    "curiosity": [
     "sự tò mò",
     "wanting to know things"
    ],
    "coursework": [
     "bài tập tính điểm",
     "work done during a course"
    ],
    "oral": [
     "bằng lời nói",
     "spoken"
    ]
   },
   "q": [
    {
     "t": "head",
     "q": "Choose the best heading for each paragraph. There is one extra heading.",
     "h": [
      "A worldwide obsession",
      "The argument for fairness",
      "What tests cannot measure",
      "The human cost",
      "Other ways of assessing students",
      "Finding the right balance",
      "Why exams are getting easier"
     ],
     "a": [
      0,
      1,
      2,
      3,
      4,
      5
     ]
    },
    {
     "t": "tfng",
     "q": "In South Korea, flights are changed during part of the national exam.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Finland has no exams at all.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "“Teach to the test” means…",
     "o": [
      "focus on exam techniques rather than deep understanding",
      "refuse to give students tests",
      "write the national exam questions"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "Before the end of secondary school, Finland relies on teacher ___.",
     "a": "assessment"
    }
   ]
  },
  {
   "id": "r-b2-8",
   "title": "Is It Ever Too Late to Learn a Language?",
   "topic": "Education",
   "text": "It is a widely held belief that children are naturally better language learners than adults. Most of us know someone who moved abroad as a child and now speaks the local language like a native, while their parents still struggle after decades. But is age really the deciding factor, and does this mean adults should give up?\n\nResearch does support part of the common view. Studies of immigrants have found that people who start learning a language in early childhood are far more likely to achieve a native-like accent than those who begin as teenagers or adults. Some scientists have linked this to a \"critical period\" during which the brain is especially sensitive to the sounds of language. A large study published in 2018, which analysed online grammar quiz results from hundreds of thousands of people, suggested that the ability to master grammar to a native level declines after around the age of seventeen.\n\nHowever, this is only part of the story. Being able to reach native-like perfection is not the same as being able to learn a language well. In fact, when it comes to the early stages of learning, adults and older teenagers often make faster progress than young children. They have more developed memory strategies, a better understanding of how grammar works and, crucially, the ability to study deliberately. A motivated adult can reach a high level of communicative ability within a few years.\n\nChildren's apparent advantage also has a lot to do with their environment. A child who moves to a new country typically spends hours every day at school, surrounded by native speakers and with a strong social need to fit in. Adults, on the other hand, often learn in a classroom for a few hours a week, while continuing to use their first language at work and at home. When adults are given comparable exposure, the gap narrows considerably.\n\nThere are also benefits to learning later in life that go beyond communication. Several studies have suggested that bilingualism may help to keep the brain active and could delay the onset of dementia by several years, although researchers are still investigating the exact relationship. Learning a language also opens doors to new cultures, friendships and career opportunities at any age.\n\nSo, rather than worrying about lost time, adult learners might focus on what really makes a difference: regular practice, meaningful exposure to the language and realistic goals. A perfect accent may be out of reach, but clear, confident communication certainly is not.",
   "g": {
    "native": [
     "người bản xứ",
     "a person born in a place"
    ],
    "struggle": [
     "gặp khó khăn",
     "try hard but find it difficult"
    ],
    "immigrants": [
     "người nhập cư",
     "people who come to live in another country"
    ],
    "accent": [
     "giọng",
     "a way of pronouncing words"
    ],
    "sensitive": [
     "nhạy cảm",
     "reacting easily"
    ],
    "master": [
     "thành thạo",
     "learn to do something very well"
    ],
    "deliberately": [
     "có chủ đích",
     "on purpose"
    ],
    "exposure": [
     "sự tiếp xúc",
     "contact with something"
    ],
    "narrows": [
     "thu hẹp",
     "becomes smaller"
    ],
    "bilingualism": [
     "song ngữ",
     "the ability to speak two languages"
    ],
    "onset": [
     "sự khởi phát",
     "the beginning of something bad"
    ],
    "dementia": [
     "chứng mất trí",
     "an illness that affects memory"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What does research show about people who start learning in early childhood?",
     "o": [
      "They make faster progress at first.",
      "They are more likely to get a native-like accent.",
      "They have better memory strategies."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The 2018 study used results from online grammar quizzes.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Adults usually progress more slowly than children in the early stages.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Children who move abroad have a strong social need to fit ___.",
     "a": "in"
    },
    {
     "t": "tfng",
     "q": "Researchers have proved exactly how bilingualism prevents dementia.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "What is the main message of the text?",
     "o": [
      "Adults should give up.",
      "Adults can communicate well with the right practice.",
      "Only children can learn grammar."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-9",
   "title": "The Science of Habits",
   "topic": "Science",
   "text": "Researchers estimate that a large proportion of our daily actions, perhaps as much as forty per cent, are not the result of conscious decisions but of habits. From the way we brush our teeth to the route we take to work, much of our behaviour runs on autopilot. This is not necessarily a bad thing; habits allow us to complete routine tasks quickly while our minds are busy with other things. Understanding how habits form can help us replace bad ones with better ones.\n\nHabits develop through a process that scientists often describe as a loop. First, there is a cue, a trigger that tells the brain to start a particular behaviour, such as feeling bored or arriving home. Then comes the routine, the behaviour itself, for example checking your phone or eating a snack. Finally, there is a reward, something pleasant that the brain remembers. Each time the loop is repeated, the connection between cue and routine becomes stronger, until the behaviour happens almost automatically.\n\nThis process is closely linked to a region deep in the brain called the basal ganglia, which plays a central role in forming routines. As a behaviour becomes habitual, activity in the parts of the brain responsible for decision-making decreases. This is efficient, since it frees up mental energy for other tasks, but it also explains why habits are so hard to break: we often perform them without thinking at all. It also explains why simply deciding to change is rarely enough; the old routine is still stored in the brain, ready to be triggered by the familiar cue.\n\nContrary to the popular claim that it takes twenty-one days to form a new habit, research suggests the process usually takes much longer. In one well-known study at University College London, participants took anywhere from eighteen to over two hundred days to make a new behaviour automatic, with an average of around sixty-six days. Encouragingly, missing a single day did not seem to affect the overall process significantly.\n\nSo how can we use this knowledge? Experts recommend making desired habits as easy as possible and unwanted habits more difficult. Linking a new behaviour to an existing cue, for example doing ten minutes of vocabulary review straight after breakfast, can help. Rather than trying to remove a bad habit completely, it is often more effective to keep the same cue and reward but change the routine. Above all, patience is essential: lasting change rarely happens overnight.",
   "g": {
    "conscious": [
     "có ý thức",
     "aware of what you are doing"
    ],
    "autopilot": [
     "chế độ tự động",
     "doing something without thinking"
    ],
    "cue": [
     "tín hiệu",
     "a signal to do something"
    ],
    "trigger": [
     "tác nhân kích hoạt",
     "something that causes an action"
    ],
    "reward": [
     "phần thưởng",
     "something good you get"
    ],
    "region": [
     "vùng",
     "an area"
    ],
    "efficient": [
     "hiệu quả",
     "working well without waste"
    ],
    "contrary": [
     "trái với (contrary to)",
     "opposite to"
    ],
    "participants": [
     "người tham gia",
     "people who take part"
    ],
    "significantly": [
     "đáng kể",
     "in an important way"
    ],
    "desired": [
     "mong muốn",
     "wanted"
    ]
   },
   "q": [
    {
     "t": "head",
     "q": "Choose the best heading for each paragraph. There are two extra headings.",
     "h": [
      "Life on autopilot",
      "How the habit loop works",
      "What happens in the brain",
      "How long change really takes",
      "Practical strategies",
      "Why willpower always fails",
      "Habits in the animal world"
     ],
     "a": [
      0,
      1,
      2,
      3,
      4
     ]
    },
    {
     "t": "gap",
     "q": "The three parts of the habit loop are the cue, the routine and the ___.",
     "a": "reward"
    },
    {
     "t": "tfng",
     "q": "Research shows a new habit always forms in twenty-one days.",
     "a": "F"
    },
    {
     "t": "mc",
     "q": "In the UCL study, how long did it take on average to form a habit?",
     "o": [
      "21 days",
      "About 66 days",
      "Over 200 days"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "The UCL study only included university students.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b2-10",
   "title": "Lab-grown Meat: Food of the Future?",
   "topic": "Science",
   "text": "In 2013, a scientist in the Netherlands presented the world's first burger grown in a laboratory. Made from cells taken from a living cow, it had cost more than 250,000 euros to produce. A decade later, several companies around the world were racing to bring \"cultivated meat\" to supermarket shelves, and a small number of restaurants had already begun serving it. Supporters claim it could transform the way we feed the planet; sceptics are not so sure.\n\nThe basic process involves taking a small sample of cells from an animal and placing them in a nutrient-rich liquid inside large steel tanks called bioreactors. The cells multiply, eventually forming muscle and fat tissue that can be processed into products such as burgers, nuggets or sausages. Crucially, no animal needs to be slaughtered.\n\nThe potential advantages are considerable. Livestock farming is responsible for a significant share of global greenhouse gas emissions and uses vast areas of land, contributing to deforestation. Supporters argue that cultivated meat could dramatically reduce these impacts while also ending the suffering of billions of animals raised in industrial farms. It could also reduce the risk of diseases passing from animals to humans and limit the overuse of antibiotics in agriculture.\n\nNevertheless, significant obstacles remain. Producing cultivated meat on a large scale is technically challenging and still far more expensive than conventional meat. Moreover, the environmental benefits depend heavily on the energy used to power bioreactors; if that energy comes from fossil fuels, the carbon footprint could be higher than expected. Some studies have even suggested that, under certain conditions, cultivated beef might have a larger climate impact than some forms of traditional farming.\n\nConsumer acceptance is another uncertain factor. Surveys show that many people are curious about trying lab-grown meat, but a considerable number describe it as \"unnatural\" and say they would not eat it regularly. Farmers' organisations in several countries have campaigned against it, and a few governments have even introduced bans, arguing that it threatens traditional agriculture and food culture.\n\nMeanwhile, plant-based alternatives made from ingredients such as soy, peas and mushrooms are already widely available and considerably cheaper. Some experts believe that a combination of approaches, including eating less meat overall, improving farming practices and developing new technologies, will be necessary to make our food system sustainable.\n\nWhether cultivated meat becomes an everyday product or remains a niche curiosity will depend on science, economics and, above all, on the choices of ordinary consumers.",
   "g": {
    "laboratory": [
     "phòng thí nghiệm",
     "a room for scientific work"
    ],
    "cultivated": [
     "được nuôi cấy",
     "grown in controlled conditions"
    ],
    "sceptics": [
     "người hoài nghi",
     "people who doubt"
    ],
    "nutrient": [
     "chất dinh dưỡng",
     "a substance that helps living things grow"
    ],
    "multiply": [
     "nhân lên",
     "increase in number"
    ],
    "slaughtered": [
     "bị giết mổ",
     "killed for food"
    ],
    "emissions": [
     "khí thải",
     "gases sent into the air"
    ],
    "deforestation": [
     "nạn phá rừng",
     "cutting down forests"
    ],
    "antibiotics": [
     "thuốc kháng sinh",
     "medicines that kill bacteria"
    ],
    "conventional": [
     "thông thường",
     "traditional and usual"
    ],
    "footprint": [
     "dấu chân (carbon)",
     "the effect something has on the environment"
    ],
    "niche": [
     "thị trường ngách",
     "a small specialised area"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "How much did the first lab-grown burger cost to produce?",
     "o": [
      "About 25,000 euros",
      "More than 250,000 euros",
      "About 2.5 million euros"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The cells grow in large steel tanks called ___.",
     "a": "bioreactors"
    },
    {
     "t": "tfng",
     "q": "Producing cultivated meat requires killing animals.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Cultivated meat always has a smaller carbon footprint than traditional meat.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Some governments have banned lab-grown meat.",
     "a": "T"
    },
    {
     "t": "match",
     "q": "Match each term with its meaning.",
     "p": [
      [
       "Bioreactor",
       "a tank where cells grow"
      ],
      [
       "Deforestation",
       "cutting down forests"
      ],
      [
       "Plant-based",
       "made from soy, peas or mushrooms"
      ]
     ]
    },
    {
     "t": "mc",
     "q": "What do some experts believe will be necessary?",
     "o": [
      "Only cultivated meat",
      "A combination of approaches",
      "More industrial farms"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-11",
   "title": "The Hidden Life of Cities at Night",
   "topic": "Society",
   "text": "When most people go to bed, cities do not simply switch off. Hospitals, power stations, delivery services, cleaning companies and food markets all depend on workers who start their day when others are finishing theirs. In many large cities, as much as a fifth of the workforce regularly works at night, and this \"night-time economy\" is becoming increasingly important.\n\nFor some, night work offers clear advantages. Pay is often higher, the roads are quieter, and there may be fewer managers around. Students and parents sometimes choose night shifts because they fit around studies or childcare. Many cities also have a lively evening culture of restaurants, theatres and music venues, which brings in tourists and generates considerable income.\n\nHowever, there is growing evidence that working through the night comes at a cost. Humans are designed to be active during daylight, and disrupting our internal body clock can affect sleep, digestion and mood. Long-term night workers have been found to have a higher risk of conditions such as heart disease and diabetes, although researchers stress that lifestyle factors also play a role. Social life can suffer too: it is difficult to see friends or attend family events when your timetable is the opposite of theirs.\n\nCities themselves have often been slow to recognise the needs of night workers. Public transport may stop running at midnight, leaving people with expensive taxis or long walks home through poorly lit streets. Shops and services close just when night workers have time to use them. Night workers who want to see a doctor, visit a bank or attend a meeting at their child's school often have to do so when they should be sleeping. Safety, particularly for women travelling alone, is a recurring concern.\n\nIn response, some cities have appointed \"night mayors\" or night-time commissioners. Their role is to represent businesses, residents and workers who are active after dark, and to balance the interests of those who want a vibrant nightlife with those who simply want to sleep. Amsterdam was among the first to create such a position, and London, New York and Sydney have followed with similar roles.\n\nPractical measures range from running trains all night at weekends to improving street lighting and offering health checks designed for shift workers. Advocates argue that a well-managed night-time economy can make cities safer, more inclusive and more economically dynamic. The challenge is to ensure that the people who keep cities running around the clock are not forgotten simply because they work while the rest of us are asleep.",
   "g": {
    "workforce": [
     "lực lượng lao động",
     "all the people who work"
    ],
    "shift": [
     "ca làm việc",
     "a period of work"
    ],
    "venue": [
     "địa điểm (tổ chức sự kiện)",
     "a place where events happen"
    ],
    "disrupt": [
     "làm gián đoạn",
     "stop something working normally"
    ],
    "digestion": [
     "tiêu hóa",
     "how the body processes food"
    ],
    "recurring": [
     "lặp đi lặp lại",
     "happening again and again"
    ],
    "commissioner": [
     "ủy viên",
     "an official in charge of something"
    ],
    "vibrant": [
     "sôi động",
     "full of life and energy"
    ],
    "inclusive": [
     "bao trùm, hòa nhập",
     "including everyone"
    ],
    "dynamic": [
     "năng động",
     "full of energy and change"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "According to the text, what proportion of workers in some cities work at night?",
     "o": [
      "About 5%",
      "Up to a fifth",
      "More than half"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Night work is always paid less than day work.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Researchers say that night work is the only cause of heart disease in night workers.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Some cities have appointed night ___ to represent people active after dark.",
     "a": [
      "mayors",
      "mayor"
     ]
    },
    {
     "t": "tfng",
     "q": "Amsterdam was one of the first cities to create a night-time role.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Night mayors are elected by night workers.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What is the writer's main concern in the last paragraph?",
     "o": [
      "Nightlife should be banned.",
      "Night workers should not be forgotten.",
      "Cities should close earlier."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-12",
   "title": "Should Homework Be Abolished?",
   "topic": "Education (opinion)",
   "text": "Few aspects of school life provoke as much debate among parents, teachers and students as homework. Some countries assign hours of it every evening, while others have reduced it dramatically. So, is homework a valuable tool for learning or an outdated tradition that should be abolished?\n\nSupporters of homework argue that it reinforces what students learn in class. Practising a new maths technique or reviewing vocabulary at home helps information move into long-term memory. Homework can also teach independence, time management and responsibility, skills that will be essential at university and in the workplace. In addition, it gives parents a window into what their children are studying.\n\nCritics, however, point out that the evidence is more mixed than many people assume. Research suggests that for older secondary students, a moderate amount of homework is linked to better results, but for younger children the benefits are small or non-existent. Beyond a certain point, extra homework seems to bring no additional gains and may even be counterproductive, leading to stress, lack of sleep and less time for exercise, hobbies and family. A number of education researchers have also noted that the quality of a task appears to matter more than the time students spend on it.\n\nThere is also an issue of fairness. Students from wealthier families are more likely to have a quiet room, a computer, internet access and parents who can help. Those without such resources may struggle to complete assignments, so homework can unintentionally widen the gap between advantaged and disadvantaged students.\n\nIn my view, abolishing homework entirely would be a mistake, but the way it is set needs to change. Homework should be short, purposeful and clearly connected to classroom learning, rather than simply \"finishing the exercise\". Reading for pleasure, preparing questions for the next lesson or completing a short online quiz can be more effective than pages of repetitive tasks. Teachers should also coordinate so that students do not receive large assignments from several subjects on the same night.\n\nSchools could support students by offering homework clubs where they can work in a calm environment with access to computers and staff who can help. That way, homework becomes an opportunity rather than a source of inequality.\n\nUltimately, the question is not whether homework is good or bad, but whether it is well designed. Quality matters far more than quantity, and a thoughtful twenty-minute task is likely to achieve more than two hours of busy work.",
   "g": {
    "abolish": [
     "bãi bỏ",
     "officially end"
    ],
    "assign": [
     "giao (bài tập)",
     "give someone a task"
    ],
    "reinforce": [
     "củng cố",
     "make stronger"
    ],
    "moderate": [
     "vừa phải",
     "not too much or too little"
    ],
    "counterproductive": [
     "phản tác dụng",
     "having the opposite effect"
    ],
    "unintentionally": [
     "vô tình",
     "without meaning to"
    ],
    "disadvantaged": [
     "thiệt thòi",
     "without the advantages others have"
    ],
    "purposeful": [
     "có mục đích",
     "with a clear aim"
    ],
    "coordinate": [
     "phối hợp",
     "organise together"
    ],
    "quantity": [
     "số lượng",
     "how much of something"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "According to research in the text, homework benefits are clearest for…",
     "o": [
      "young children",
      "older secondary students",
      "university students"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "More homework always leads to better results.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Students from wealthier families may find homework easier to complete.",
     "a": "T"
    },
    {
     "t": "gap",
     "q": "Schools could offer homework ___ with computers and staff.",
     "a": [
      "clubs",
      "club"
     ]
    },
    {
     "t": "mc",
     "q": "What is the writer's opinion?",
     "o": [
      "Homework should be abolished.",
      "Homework should be kept but designed better.",
      "Students should get more homework."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Finland has completely banned homework.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b2-13",
   "title": "The Race to Save Coral Reefs",
   "topic": "Environment",
   "text": "Coral reefs cover less than one per cent of the ocean floor, yet they support around a quarter of all marine species. They protect coastlines from storms, provide food and income for hundreds of millions of people, and attract tourists from all over the world. Today, however, reefs are in serious danger, and scientists are racing to find ways of saving them. Their success or failure will affect not only marine life but also the many coastal communities that depend on healthy reefs for their survival.\n\nThe greatest threat is rising sea temperatures. Corals live in partnership with tiny algae that live inside their tissues, giving them both food and their bright colours. When the water becomes too warm for too long, corals expel these algae and turn white, a process known as bleaching. Bleached corals are not dead, but if temperatures do not return to normal quickly, they may starve. Mass bleaching events, which affect huge areas at once, have become far more frequent in recent decades. Australia's Great Barrier Reef, the largest reef system on Earth, has suffered several since 2016.\n\nOther pressures make the situation worse. Pollution from farms and cities carries nutrients and sediment into the sea, reducing water quality. Overfishing removes species that keep reefs healthy, such as fish that eat algae. Destructive practices, including fishing with explosives, and careless tourism, such as touching or standing on corals, cause further damage. Meanwhile, the ocean is becoming more acidic as it absorbs carbon dioxide, which makes it harder for corals to build their skeletons.\n\nScientists are experimenting with a range of solutions. Some are growing coral fragments in underwater \"nurseries\" and replanting them on damaged reefs. Others are selectively breeding corals that can tolerate higher temperatures, or studying naturally resilient reefs to understand their secrets. More ambitious ideas include shading reefs with fine sprays of seawater that brighten clouds and reflect sunlight.\n\nThese efforts are important, but researchers are clear that they cannot replace action on climate change. Restoration projects can protect valuable areas and buy time, but they operate on a tiny scale compared with the size of the world's reefs. Without significant cuts in greenhouse gas emissions, many experts fear that most reefs could be severely degraded by the end of the century.\n\nLocal action still matters. Well-managed marine protected areas, reduced pollution and responsible tourism can make reefs more resilient, giving them a better chance of recovering after bleaching events.",
   "g": {
    "marine": [
     "thuộc biển",
     "related to the sea"
    ],
    "coastline": [
     "đường bờ biển",
     "the land along the sea"
    ],
    "algae": [
     "tảo",
     "very simple plants that live in water"
    ],
    "expel": [
     "đẩy ra, trục xuất",
     "force something out"
    ],
    "bleaching": [
     "tẩy trắng (san hô)",
     "when corals lose colour"
    ],
    "sediment": [
     "trầm tích",
     "sand and mud carried by water"
    ],
    "acidic": [
     "có tính axit",
     "containing acid"
    ],
    "fragment": [
     "mảnh nhỏ",
     "a small piece"
    ],
    "resilient": [
     "có khả năng phục hồi",
     "able to recover quickly"
    ],
    "degraded": [
     "bị suy thoái",
     "damaged and in worse condition"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What proportion of marine species do coral reefs support?",
     "o": [
      "About 1%",
      "About a quarter",
      "About half"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Bleached corals are always dead.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "When corals lose their algae and turn white, this is called ___.",
     "a": "bleaching"
    },
    {
     "t": "tfng",
     "q": "The Great Barrier Reef has experienced several mass bleaching events since 2016.",
     "a": "T"
    },
    {
     "t": "match",
     "q": "Match each threat with its effect.",
     "p": [
      [
       "Overfishing",
       "removes fish that eat algae"
      ],
      [
       "Farm and city pollution",
       "reduces water quality"
      ],
      [
       "A more acidic ocean",
       "makes it harder to build skeletons"
      ]
     ]
    },
    {
     "t": "mc",
     "q": "What do researchers say about restoration projects?",
     "o": [
      "They can replace action on climate change.",
      "They help but cannot replace cutting emissions.",
      "They have already saved most reefs."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Cloud brightening has already been used across the whole Great Barrier Reef.",
     "a": "NG"
    }
   ]
  },
  {
   "id": "r-b2-14",
   "title": "Artificial Intelligence at Work",
   "topic": "Science and technology",
   "text": "Only a few years ago, artificial intelligence seemed like something from science fiction. Today, AI tools write emails, translate documents, summarise reports, generate images and even help doctors read medical scans. As these systems become more capable, one question dominates public debate: what will AI mean for our jobs?\n\nPrevious waves of technology mainly affected routine manual work. Machines replaced many factory and farm jobs, while computers took over tasks such as filing and basic calculation. What makes the current wave different is that it reaches into areas once considered uniquely human, including writing, design, analysis and customer service. Some economists estimate that a significant share of tasks in office-based jobs could be automated, at least in part.\n\nHowever, automating a task is not the same as eliminating a job. Most jobs consist of many different tasks, and AI is better at some than others. A lawyer might use software to search thousands of documents in minutes, but still needs to advise clients, negotiate and appear in court. In many cases, AI may act as an assistant that removes repetitive work and allows people to focus on more complex or creative aspects of their role. Early studies suggest that less experienced workers may benefit most, as AI tools help them reach the standard of more senior colleagues more quickly.\n\nNevertheless, the transition is unlikely to be painless. Some roles, particularly those built around producing standard text or answering simple queries, may shrink considerably. Workers whose skills become less valuable may find it difficult to retrain, especially later in their careers. There are also concerns about the quality and reliability of AI output: these systems can produce confident but inaccurate answers, reproduce biases found in their training data, and raise questions about privacy and copyright.\n\nHow societies respond will shape the outcome. Governments and employers can invest in training so that workers learn to use AI effectively and move into growing areas. Schools and universities may need to place greater emphasis on skills that machines find hard to replicate, such as critical thinking, ethical judgement, collaboration and communication. Clear rules about transparency, for instance requiring companies to disclose when customers are dealing with an AI system, could help to maintain public trust.\n\nHistory suggests that new technologies tend to destroy some jobs while creating others that were previously unimaginable. Whether AI ultimately widens inequality or raises living standards for most people will depend less on the technology itself than on the choices we make about how to use it.",
   "g": {
    "capable": [
     "có năng lực",
     "able to do things well"
    ],
    "dominate": [
     "chi phối",
     "be the most important"
    ],
    "routine": [
     "thường lệ, lặp lại",
     "done regularly in the same way"
    ],
    "automate": [
     "tự động hóa",
     "make a machine do a task"
    ],
    "eliminate": [
     "loại bỏ",
     "remove completely"
    ],
    "negotiate": [
     "đàm phán",
     "discuss to reach an agreement"
    ],
    "query": [
     "câu hỏi, yêu cầu",
     "a question"
    ],
    "retrain": [
     "đào tạo lại",
     "learn new skills for a new job"
    ],
    "replicate": [
     "sao chép, tái tạo",
     "copy exactly"
    ],
    "transparency": [
     "sự minh bạch",
     "being open and clear"
    ],
    "disclose": [
     "công khai, tiết lộ",
     "make information known"
    ]
   },
   "q": [
    {
     "t": "mc",
     "q": "What makes the current wave of technology different?",
     "o": [
      "It only affects factory work.",
      "It affects tasks once thought uniquely human.",
      "It is cheaper than earlier technology."
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Automating a task always means a job disappears.",
     "a": "F"
    },
    {
     "t": "tfng",
     "q": "Early studies suggest less experienced workers may benefit most from AI tools.",
     "a": "T"
    },
    {
     "t": "gap",
     "q": "AI systems can reproduce ___ found in their training data.",
     "a": [
      "biases",
      "bias"
     ]
    },
    {
     "t": "mc",
     "q": "Which skill does the text say machines find hard to replicate?",
     "o": [
      "Searching documents",
      "Ethical judgement",
      "Translating text"
     ],
     "a": 1
    },
    {
     "t": "tfng",
     "q": "Most governments already require companies to disclose AI use.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "According to the last paragraph, the impact of AI will depend mainly on…",
     "o": [
      "the technology itself",
      "the choices societies make",
      "the price of computers"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "r-b2-15",
   "title": "Tourism: Blessing or Burden?",
   "topic": "Society and environment",
   "text": "For many destinations, tourism is an economic lifeline. It creates jobs in hotels, restaurants, transport and shops, supports local crafts and can fund the protection of historic sites and natural areas. In Vietnam, places such as Hoi An, Ha Long Bay and Sa Pa have been transformed by visitors from around the world. Yet in recent years, a growing number of residents in popular destinations have begun to ask whether there can be too much of a good thing.\n\nThe term \"overtourism\" describes situations in which the number of visitors damages the quality of life for local people or the experience of tourists themselves. In cities such as Venice, Barcelona and Amsterdam, residents have complained about crowded streets, noise and rising rents as apartments are converted into holiday rentals. Some long-standing residents have been pushed out of their own neighbourhoods. In natural areas, heavy visitor numbers can lead to erosion, litter and disturbance to wildlife. Popular hiking trails can become so crowded at weekends that walkers have to queue on narrow paths, which rather defeats the purpose of escaping to nature.\n\nThe economic benefits, too, are not always shared fairly. Much of the money spent by tourists may go to large international companies rather than local businesses, and many tourism jobs are seasonal and poorly paid. Communities that become dependent on tourism can be particularly vulnerable when visitor numbers suddenly fall, as many discovered during the pandemic.\n\nDestinations are experimenting with different responses. Venice has introduced an entry fee for day-trippers on busy days, while Amsterdam has restricted new hotels and holiday rentals in the city centre. Some national parks limit the number of daily visitors or require advance booking. Others are trying to spread tourism more evenly, promoting lesser-known regions and encouraging travel outside the peak season.\n\nTourists can also make a difference. Choosing locally owned accommodation, eating in family-run restaurants, respecting local customs and avoiding the most crowded times can all reduce negative impacts. Staying longer in one place, rather than rushing between famous sights, often benefits local economies more and provides a richer experience.\n\nTourism, then, is neither simply a blessing nor a burden. Managed well, it can support livelihoods, encourage cultural exchange and fund conservation. Managed poorly, it can damage the very places that people travel to see. The key is to plan tourism around the needs of local communities, rather than expecting communities to adapt to unlimited growth.",
   "g": {
    "lifeline": [
     "phao cứu sinh, nguồn sống",
     "something very important for survival"
    ],
    "craft": [
     "nghề thủ công",
     "making things by hand"
    ],
    "overtourism": [
     "quá tải du lịch",
     "too many tourists in one place"
    ],
    "convert": [
     "chuyển đổi",
     "change into something else"
    ],
    "seasonal": [
     "theo mùa",
     "only at certain times of year"
    ],
    "pandemic": [
     "đại dịch",
     "a disease that spreads around the world"
    ],
    "day-tripper": [
     "khách đi trong ngày",
     "a visitor who does not stay overnight"
    ],
    "peak": [
     "cao điểm",
     "the busiest time"
    ],
    "livelihood": [
     "sinh kế",
     "the way you earn money to live"
    ],
    "burden": [
     "gánh nặng",
     "a heavy responsibility or problem"
    ]
   },
   "q": [
    {
     "t": "head",
     "q": "Choose the best heading for each paragraph. There is one extra heading.",
     "h": [
      "An economic lifeline under question",
      "When visitors become too many",
      "Who really benefits?",
      "Cities and parks fight back",
      "What travellers can do",
      "Finding the balance",
      "The history of package holidays"
     ],
     "a": [
      0,
      1,
      2,
      3,
      4,
      5
     ]
    },
    {
     "t": "tfng",
     "q": "Some residents of popular cities have had to leave their neighbourhoods.",
     "a": "T"
    },
    {
     "t": "tfng",
     "q": "Tourism jobs are usually well paid and available all year.",
     "a": "F"
    },
    {
     "t": "gap",
     "q": "Venice has introduced an entry ___ for day-trippers on busy days.",
     "a": "fee"
    },
    {
     "t": "tfng",
     "q": "Hoi An has introduced a limit on daily visitors.",
     "a": "NG"
    },
    {
     "t": "mc",
     "q": "What does the writer believe is the key?",
     "o": [
      "Stopping tourism completely",
      "Planning tourism around local communities' needs",
      "Building more hotels"
     ],
     "a": 1
    }
   ]
  }
 ]
};
