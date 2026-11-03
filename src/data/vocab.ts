// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, VocabTopic, PhrasalVerb, Collocation, Mistake } from "../types";

export const vocab: ByLevel<VocabTopic[]> = {
 "A2": [
  {
   "topic": "Family",
   "words": [
    [
     "parents",
     "n",
     "bố mẹ",
     "your mother and father",
     "My parents work in the city."
    ],
    [
     "grandmother",
     "n",
     "bà",
     "the mother of your father or mother",
     "My grandmother tells great stories."
    ],
    [
     "brother",
     "n",
     "anh/em trai",
     "a boy or man with the same parents as you",
     "My brother is two years older than me."
    ],
    [
     "cousin",
     "n",
     "anh/chị/em họ",
     "the child of your aunt or uncle",
     "My cousin lives in Da Nang."
    ],
    [
     "aunt",
     "n",
     "cô, dì, bác gái",
     "the sister of your mother or father",
     "My aunt is a doctor."
    ],
    [
     "married",
     "adj",
     "đã kết hôn",
     "having a husband or wife",
     "My sister got married last year."
    ],
    [
     "look after",
     "v",
     "chăm sóc",
     "take care of someone",
     "I look after my little brother after school."
    ],
    [
     "get on with",
     "v",
     "hòa thuận với",
     "have a good relationship with",
     "I get on well with my sister."
    ],
    [
     "similar",
     "adj",
     "giống nhau",
     "almost the same",
     "My mum and I have similar hobbies."
    ],
    [
     "only child",
     "n",
     "con một",
     "a person with no brothers or sisters",
     "I'm an only child."
    ]
   ]
  },
  {
   "topic": "Home",
   "words": [
    [
     "flat",
     "n",
     "căn hộ",
     "a set of rooms to live in, in a building",
     "We live in a flat on the fifth floor."
    ],
    [
     "kitchen",
     "n",
     "nhà bếp",
     "the room where you cook",
     "Mum is cooking in the kitchen."
    ],
    [
     "bedroom",
     "n",
     "phòng ngủ",
     "a room for sleeping",
     "My bedroom is small but bright."
    ],
    [
     "furniture",
     "n",
     "đồ nội thất",
     "tables, chairs, beds, etc.",
     "We bought some new furniture."
    ],
    [
     "neighbour",
     "n",
     "hàng xóm",
     "a person who lives near you",
     "Our neighbours are very friendly."
    ],
    [
     "upstairs",
     "adv",
     "trên lầu",
     "on a higher floor",
     "The bathroom is upstairs."
    ],
    [
     "comfortable",
     "adj",
     "thoải mái",
     "pleasant to sit or be in",
     "This sofa is very comfortable."
    ],
    [
     "tidy",
     "adj",
     "gọn gàng",
     "neat and in order",
     "Please keep your room tidy."
    ],
    [
     "garden",
     "n",
     "vườn",
     "land near a house with plants",
     "We grow vegetables in the garden."
    ],
    [
     "rent",
     "n/v",
     "tiền thuê; thuê",
     "money paid to live in a place",
     "The rent is quite high."
    ]
   ]
  },
  {
   "topic": "Daily routine",
   "words": [
    [
     "get up",
     "v",
     "thức dậy",
     "leave your bed in the morning",
     "I get up at six o'clock."
    ],
    [
     "have breakfast",
     "v",
     "ăn sáng",
     "eat the first meal of the day",
     "We have breakfast together."
    ],
    [
     "commute",
     "v",
     "đi lại (đi làm/học)",
     "travel to work or school",
     "He commutes by bus every day."
    ],
    [
     "usually",
     "adv",
     "thường thường",
     "in most situations",
     "I usually walk to school."
    ],
    [
     "sometimes",
     "adv",
     "thỉnh thoảng",
     "not always",
     "Sometimes I cook dinner."
    ],
    [
     "never",
     "adv",
     "không bao giờ",
     "not at any time",
     "She never drinks coffee."
    ],
    [
     "take a shower",
     "v",
     "tắm vòi sen",
     "wash your body under water",
     "I take a shower every morning."
    ],
    [
     "homework",
     "n",
     "bài tập về nhà",
     "work a teacher gives you to do at home",
     "I do my homework after dinner."
    ],
    [
     "busy",
     "adj",
     "bận rộn",
     "having a lot to do",
     "Mondays are always busy."
    ],
    [
     "go to bed",
     "v",
     "đi ngủ",
     "get into bed to sleep",
     "I go to bed at eleven."
    ]
   ]
  },
  {
   "topic": "Food & drink",
   "words": [
    [
     "vegetables",
     "n",
     "rau củ",
     "plants you eat, like carrots",
     "Eat more vegetables."
    ],
    [
     "delicious",
     "adj",
     "ngon",
     "tasting very good",
     "This soup is delicious!"
    ],
    [
     "meal",
     "n",
     "bữa ăn",
     "breakfast, lunch or dinner",
     "Dinner is my favourite meal."
    ],
    [
     "spicy",
     "adj",
     "cay",
     "with a hot taste",
     "Thai food is often spicy."
    ],
    [
     "recipe",
     "n",
     "công thức nấu ăn",
     "instructions for cooking something",
     "Can you give me the recipe?"
    ],
    [
     "bottle",
     "n",
     "chai",
     "a container for drinks",
     "Buy a bottle of water."
    ],
    [
     "fresh",
     "adj",
     "tươi",
     "recently made or picked",
     "I love fresh fruit."
    ],
    [
     "order",
     "v",
     "gọi món",
     "ask for food in a restaurant",
     "Are you ready to order?"
    ],
    [
     "snack",
     "n",
     "đồ ăn vặt",
     "a small amount of food between meals",
     "I have a snack after school."
    ],
    [
     "healthy",
     "adj",
     "lành mạnh",
     "good for your body",
     "Fish is a healthy food."
    ]
   ]
  },
  {
   "topic": "Shopping",
   "words": [
    [
     "price",
     "n",
     "giá",
     "how much money something costs",
     "What's the price of this bag?"
    ],
    [
     "cheap",
     "adj",
     "rẻ",
     "not expensive",
     "These shoes are cheap."
    ],
    [
     "expensive",
     "adj",
     "đắt",
     "costing a lot of money",
     "That phone is very expensive."
    ],
    [
     "try on",
     "v",
     "mặc thử",
     "put on clothes to see if they fit",
     "Can I try on this jacket?"
    ],
    [
     "size",
     "n",
     "cỡ",
     "how big something is",
     "Do you have a bigger size?"
    ],
    [
     "receipt",
     "n",
     "hóa đơn",
     "a paper that shows you paid",
     "Keep the receipt."
    ],
    [
     "sale",
     "n",
     "đợt giảm giá",
     "a time when prices are lower",
     "There's a sale this weekend."
    ],
    [
     "cash",
     "n",
     "tiền mặt",
     "money in coins or notes",
     "Can I pay in cash?"
    ],
    [
     "customer",
     "n",
     "khách hàng",
     "a person who buys things",
     "The shop has many customers."
    ],
    [
     "change",
     "n",
     "tiền thối lại",
     "money you get back",
     "Here's your change."
    ]
   ]
  },
  {
   "topic": "Hobbies",
   "words": [
    [
     "hobby",
     "n",
     "sở thích",
     "something you enjoy doing in free time",
     "My hobby is painting."
    ],
    [
     "join",
     "v",
     "tham gia",
     "become a member of a group",
     "I want to join the music club."
    ],
    [
     "practise",
     "v",
     "luyện tập",
     "do something again to get better",
     "I practise the guitar every day."
    ],
    [
     "collect",
     "v",
     "sưu tầm",
     "get and keep things of one type",
     "He collects old coins."
    ],
    [
     "team",
     "n",
     "đội",
     "a group playing together",
     "Our team won the match."
    ],
    [
     "relaxing",
     "adj",
     "thư giãn",
     "making you calm",
     "Reading is relaxing."
    ],
    [
     "free time",
     "n",
     "thời gian rảnh",
     "time when you are not working",
     "What do you do in your free time?"
    ],
    [
     "be good at",
     "v",
     "giỏi về",
     "able to do something well",
     "She's good at drawing."
    ],
    [
     "camping",
     "n",
     "cắm trại",
     "sleeping outdoors in a tent",
     "We went camping last summer."
    ],
    [
     "instrument",
     "n",
     "nhạc cụ",
     "something used to make music",
     "Do you play an instrument?"
    ]
   ]
  },
  {
   "topic": "Travel",
   "words": [
    [
     "ticket",
     "n",
     "vé",
     "a paper that lets you travel",
     "I bought a train ticket."
    ],
    [
     "luggage",
     "n",
     "hành lý",
     "bags for travelling",
     "Don't forget your luggage."
    ],
    [
     "passport",
     "n",
     "hộ chiếu",
     "an official document for travelling abroad",
     "Show your passport, please."
    ],
    [
     "book",
     "v",
     "đặt trước",
     "arrange to have something later",
     "I booked a hotel room."
    ],
    [
     "platform",
     "n",
     "sân ga",
     "where you get on a train",
     "The train leaves from platform 3."
    ],
    [
     "delay",
     "n/v",
     "sự chậm trễ; trì hoãn",
     "when something happens later than planned",
     "There's a delay of 20 minutes."
    ],
    [
     "sightseeing",
     "n",
     "tham quan",
     "visiting famous places",
     "We went sightseeing in Hue."
    ],
    [
     "abroad",
     "adv",
     "ở nước ngoài",
     "in another country",
     "Have you ever been abroad?"
    ],
    [
     "journey",
     "n",
     "chuyến đi",
     "travelling from one place to another",
     "The journey takes three hours."
    ],
    [
     "map",
     "n",
     "bản đồ",
     "a drawing of an area",
     "Let's look at the map."
    ]
   ]
  },
  {
   "topic": "Weather",
   "words": [
    [
     "sunny",
     "adj",
     "nắng",
     "with a lot of sun",
     "It's sunny today."
    ],
    [
     "cloudy",
     "adj",
     "nhiều mây",
     "with many clouds",
     "It's cloudy and grey."
    ],
    [
     "windy",
     "adj",
     "có gió",
     "with a lot of wind",
     "It's too windy to cycle."
    ],
    [
     "temperature",
     "n",
     "nhiệt độ",
     "how hot or cold it is",
     "The temperature is 30 degrees."
    ],
    [
     "storm",
     "n",
     "cơn bão",
     "very bad weather with rain and wind",
     "There was a storm last night."
    ],
    [
     "umbrella",
     "n",
     "cái ô",
     "you hold it over you when it rains",
     "Take an umbrella."
    ],
    [
     "forecast",
     "n",
     "dự báo",
     "what the weather will be",
     "The forecast says rain."
    ],
    [
     "degree",
     "n",
     "độ",
     "a unit for temperature",
     "It's 25 degrees."
    ],
    [
     "wet",
     "adj",
     "ướt",
     "covered in water",
     "My shoes are wet."
    ],
    [
     "cool",
     "adj",
     "mát",
     "a little cold",
     "It's cool in the evening."
    ]
   ]
  },
  {
   "topic": "Friends & people",
   "words": [
    [
     "friendly",
     "adj",
     "thân thiện",
     "kind and pleasant",
     "Our new teacher is very friendly."
    ],
    [
     "funny",
     "adj",
     "hài hước",
     "making people laugh",
     "My brother is really funny."
    ],
    [
     "kind",
     "adj",
     "tốt bụng",
     "caring about others",
     "It was kind of you to help."
    ],
    [
     "shy",
     "adj",
     "nhút nhát",
     "nervous with new people",
     "She was shy on her first day."
    ],
    [
     "clever",
     "adj",
     "thông minh",
     "quick at learning",
     "He's very clever at maths."
    ],
    [
     "lazy",
     "adj",
     "lười biếng",
     "not wanting to work",
     "Don't be lazy – do your homework!"
    ],
    [
     "tall",
     "adj",
     "cao",
     "high, not short",
     "My father is very tall."
    ],
    [
     "curly",
     "adj",
     "xoăn",
     "with curls (hair)",
     "She has long curly hair."
    ],
    [
     "meet",
     "v",
     "gặp",
     "see someone and talk",
     "Let's meet at the café."
    ],
    [
     "invite",
     "v",
     "mời",
     "ask someone to come",
     "I invited ten friends to my party."
    ]
   ]
  },
  {
   "topic": "Health & body",
   "words": [
    [
     "headache",
     "n",
     "đau đầu",
     "a pain in your head",
     "I have a headache."
    ],
    [
     "cold",
     "n",
     "cảm lạnh",
     "a common illness with a runny nose",
     "I've got a cold."
    ],
    [
     "fever",
     "n",
     "sốt",
     "a high body temperature",
     "The child has a fever."
    ],
    [
     "medicine",
     "n",
     "thuốc",
     "something you take when ill",
     "Take this medicine twice a day."
    ],
    [
     "dentist",
     "n",
     "nha sĩ",
     "a doctor for teeth",
     "I go to the dentist every six months."
    ],
    [
     "sore",
     "adj",
     "đau, rát",
     "painful",
     "I have a sore throat."
    ],
    [
     "rest",
     "v/n",
     "nghỉ ngơi",
     "relax or sleep",
     "You need to rest."
    ],
    [
     "stomach",
     "n",
     "dạ dày, bụng",
     "the part of the body where food goes",
     "My stomach hurts."
    ],
    [
     "fit",
     "adj",
     "khỏe mạnh",
     "healthy and strong",
     "She runs every day to stay fit."
    ],
    [
     "sleep",
     "v/n",
     "ngủ",
     "rest with your eyes closed",
     "I sleep eight hours a night."
    ]
   ]
  },
  {
   "topic": "Town & places",
   "words": [
    [
     "post office",
     "n",
     "bưu điện",
     "a place to send letters",
     "The post office opens at eight."
    ],
    [
     "pharmacy",
     "n",
     "nhà thuốc",
     "a shop that sells medicine",
     "Is there a pharmacy near here?"
    ],
    [
     "traffic lights",
     "n",
     "đèn giao thông",
     "lights that control traffic",
     "Turn left at the traffic lights."
    ],
    [
     "corner",
     "n",
     "góc phố",
     "where two streets meet",
     "The bank is on the corner."
    ],
    [
     "opposite",
     "prep",
     "đối diện",
     "on the other side",
     "The café is opposite the school."
    ],
    [
     "straight on",
     "adv",
     "đi thẳng",
     "forward, without turning",
     "Go straight on for 200 metres."
    ],
    [
     "crowded",
     "adj",
     "đông đúc",
     "full of people",
     "The market is always crowded."
    ],
    [
     "museum",
     "n",
     "bảo tàng",
     "a building with old or interesting objects",
     "We visited the history museum."
    ],
    [
     "bridge",
     "n",
     "cây cầu",
     "a structure over a river",
     "Walk across the bridge."
    ],
    [
     "near",
     "prep",
     "gần",
     "not far from",
     "I live near the station."
    ]
   ]
  }
 ],
 "B1": [
  {
   "topic": "Work",
   "words": [
    [
     "apply for",
     "v",
     "nộp đơn xin",
     "formally ask for a job",
     "She applied for a job at a bank."
    ],
    [
     "interview",
     "n",
     "buổi phỏng vấn",
     "a meeting to decide if you get a job",
     "I have an interview tomorrow."
    ],
    [
     "salary",
     "n",
     "lương",
     "money you earn each month",
     "The salary is good."
    ],
    [
     "colleague",
     "n",
     "đồng nghiệp",
     "a person you work with",
     "My colleagues are friendly."
    ],
    [
     "experience",
     "n",
     "kinh nghiệm",
     "knowledge from doing something",
     "Do you have any experience?"
    ],
    [
     "deadline",
     "n",
     "hạn chót",
     "the time when work must be finished",
     "The deadline is Friday."
    ],
    [
     "promotion",
     "n",
     "sự thăng chức",
     "moving to a higher position",
     "He got a promotion last month."
    ],
    [
     "responsible for",
     "adj",
     "chịu trách nhiệm về",
     "having a duty to deal with",
     "I'm responsible for sales."
    ],
    [
     "part-time",
     "adj",
     "bán thời gian",
     "working only some hours",
     "She has a part-time job."
    ],
    [
     "career",
     "n",
     "sự nghiệp",
     "the jobs you do in your life",
     "She wants a career in medicine."
    ]
   ]
  },
  {
   "topic": "School & study",
   "words": [
    [
     "subject",
     "n",
     "môn học",
     "an area you study",
     "My favourite subject is biology."
    ],
    [
     "revise",
     "v",
     "ôn tập",
     "study again before an exam",
     "I need to revise for the test."
    ],
    [
     "pass",
     "v",
     "đỗ, vượt qua",
     "succeed in an exam",
     "Did you pass the exam?"
    ],
    [
     "fail",
     "v",
     "trượt",
     "not succeed in an exam",
     "He failed his driving test."
    ],
    [
     "degree",
     "n",
     "bằng đại học",
     "a university qualification",
     "She has a degree in law."
    ],
    [
     "take notes",
     "v",
     "ghi chép",
     "write down information",
     "Take notes during the lecture."
    ],
    [
     "attend",
     "v",
     "tham dự",
     "go to an event or class",
     "I attend classes every morning."
    ],
    [
     "skill",
     "n",
     "kỹ năng",
     "an ability to do something well",
     "Communication is an important skill."
    ],
    [
     "scholarship",
     "n",
     "học bổng",
     "money to pay for study",
     "He won a scholarship."
    ],
    [
     "knowledge",
     "n",
     "kiến thức",
     "information and understanding",
     "Reading improves your knowledge."
    ]
   ]
  },
  {
   "topic": "Health",
   "words": [
    [
     "symptom",
     "n",
     "triệu chứng",
     "a sign of illness",
     "A cough is a common symptom."
    ],
    [
     "headache",
     "n",
     "đau đầu",
     "pain in your head",
     "I have a terrible headache."
    ],
    [
     "prescription",
     "n",
     "đơn thuốc",
     "a doctor's paper for medicine",
     "The doctor gave me a prescription."
    ],
    [
     "recover",
     "v",
     "hồi phục",
     "get better after illness",
     "She recovered quickly."
    ],
    [
     "diet",
     "n",
     "chế độ ăn",
     "the food you usually eat",
     "A balanced diet is important."
    ],
    [
     "exercise",
     "n/v",
     "tập thể dục",
     "physical activity to stay healthy",
     "I exercise three times a week."
    ],
    [
     "stress",
     "n",
     "căng thẳng",
     "worry caused by problems",
     "Exams cause a lot of stress."
    ],
    [
     "injury",
     "n",
     "chấn thương",
     "damage to the body",
     "He has a knee injury."
    ],
    [
     "appointment",
     "n",
     "cuộc hẹn",
     "an arranged meeting",
     "I have a doctor's appointment."
    ],
    [
     "lifestyle",
     "n",
     "lối sống",
     "the way you live",
     "He has a healthy lifestyle."
    ]
   ]
  },
  {
   "topic": "Technology",
   "words": [
    [
     "device",
     "n",
     "thiết bị",
     "a machine or tool",
     "Turn off all devices."
    ],
    [
     "download",
     "v",
     "tải xuống",
     "copy from the internet",
     "Download the app for free."
    ],
    [
     "update",
     "n/v",
     "cập nhật",
     "make something newer",
     "Update your software."
    ],
    [
     "password",
     "n",
     "mật khẩu",
     "a secret word for an account",
     "Choose a strong password."
    ],
    [
     "screen",
     "n",
     "màn hình",
     "the flat part where you see images",
     "My phone screen is broken."
    ],
    [
     "online",
     "adj/adv",
     "trực tuyến",
     "connected to the internet",
     "I study online."
    ],
    [
     "charge",
     "v",
     "sạc",
     "put electricity into a battery",
     "I need to charge my phone."
    ],
    [
     "social media",
     "n",
     "mạng xã hội",
     "websites for sharing and chatting",
     "She spends hours on social media."
    ],
    [
     "install",
     "v",
     "cài đặt",
     "put software on a device",
     "Install the latest version."
    ],
    [
     "connection",
     "n",
     "kết nối",
     "a link to the internet",
     "The connection is slow."
    ]
   ]
  },
  {
   "topic": "Experiences",
   "words": [
    [
     "unforgettable",
     "adj",
     "không thể quên",
     "impossible to forget",
     "It was an unforgettable trip."
    ],
    [
     "explore",
     "v",
     "khám phá",
     "travel to learn about a place",
     "We explored the old town."
    ],
    [
     "get lost",
     "v",
     "bị lạc",
     "not know where you are",
     "We got lost in the forest."
    ],
    [
     "memorable",
     "adj",
     "đáng nhớ",
     "worth remembering",
     "My first concert was memorable."
    ],
    [
     "challenge",
     "n",
     "thử thách",
     "something difficult",
     "Climbing the mountain was a challenge."
    ],
    [
     "adventure",
     "n",
     "cuộc phiêu lưu",
     "an exciting experience",
     "It was a real adventure."
    ],
    [
     "achieve",
     "v",
     "đạt được",
     "succeed in doing something",
     "She achieved her goal."
    ],
    [
     "unexpected",
     "adj",
     "bất ngờ",
     "not expected",
     "We had an unexpected visitor."
    ],
    [
     "nervous",
     "adj",
     "lo lắng",
     "worried and a bit afraid",
     "I was nervous before the exam."
    ],
    [
     "proud",
     "adj",
     "tự hào",
     "pleased with what you did",
     "I'm proud of you."
    ]
   ]
  },
  {
   "topic": "Feelings",
   "words": [
    [
     "disappointed",
     "adj",
     "thất vọng",
     "sad because something was not as good as hoped",
     "I was disappointed with the result."
    ],
    [
     "relieved",
     "adj",
     "nhẹ nhõm",
     "happy that a worry has gone",
     "I was relieved when he called."
    ],
    [
     "embarrassed",
     "adj",
     "xấu hổ",
     "feeling silly in front of others",
     "I felt embarrassed when I fell."
    ],
    [
     "confident",
     "adj",
     "tự tin",
     "sure of yourself",
     "She's a confident speaker."
    ],
    [
     "anxious",
     "adj",
     "lo âu",
     "worried",
     "He's anxious about the interview."
    ],
    [
     "grateful",
     "adj",
     "biết ơn",
     "thankful",
     "I'm grateful for your help."
    ],
    [
     "annoyed",
     "adj",
     "bực mình",
     "a little angry",
     "I was annoyed by the noise."
    ],
    [
     "calm",
     "adj",
     "bình tĩnh",
     "not worried or excited",
     "Stay calm."
    ],
    [
     "lonely",
     "adj",
     "cô đơn",
     "sad because you are alone",
     "She felt lonely in the new city."
    ],
    [
     "excited",
     "adj",
     "hào hứng",
     "very happy and enthusiastic",
     "I'm excited about the trip."
    ]
   ]
  },
  {
   "topic": "Environment basics",
   "words": [
    [
     "recycle",
     "v",
     "tái chế",
     "use again in a new form",
     "We recycle paper and bottles."
    ],
    [
     "waste",
     "n",
     "rác thải; sự lãng phí",
     "things that are thrown away",
     "Reduce food waste."
    ],
    [
     "pollution",
     "n",
     "ô nhiễm",
     "dirty air, water or land",
     "Air pollution is bad in big cities."
    ],
    [
     "climate",
     "n",
     "khí hậu",
     "the usual weather of a place",
     "The climate is changing."
    ],
    [
     "protect",
     "v",
     "bảo vệ",
     "keep safe",
     "We must protect wild animals."
    ],
    [
     "energy",
     "n",
     "năng lượng",
     "power for machines and heat",
     "Solar energy is clean."
    ],
    [
     "plastic",
     "n",
     "nhựa",
     "a light, man-made material",
     "Avoid plastic bags."
    ],
    [
     "species",
     "n",
     "loài",
     "a type of animal or plant",
     "Many species are in danger."
    ],
    [
     "flood",
     "n",
     "lũ lụt",
     "a lot of water covering land",
     "The flood destroyed many homes."
    ],
    [
     "environmentally friendly",
     "adj",
     "thân thiện với môi trường",
     "not harmful to nature",
     "Buy environmentally friendly products."
    ]
   ]
  },
  {
   "topic": "Money & shopping",
   "words": [
    [
     "afford",
     "v",
     "đủ khả năng chi trả",
     "have enough money for",
     "I can't afford a new car."
    ],
    [
     "budget",
     "n",
     "ngân sách",
     "a plan for spending money",
     "We're on a tight budget."
    ],
    [
     "refund",
     "n",
     "tiền hoàn lại",
     "money returned to you",
     "Can I get a refund?"
    ],
    [
     "bargain",
     "n",
     "món hời",
     "something cheap and good",
     "These shoes were a bargain."
    ],
    [
     "borrow",
     "v",
     "mượn",
     "take something and give it back later",
     "Can I borrow your pen?"
    ],
    [
     "lend",
     "v",
     "cho mượn",
     "give something to be returned",
     "Could you lend me some money?"
    ],
    [
     "guarantee",
     "n",
     "bảo hành",
     "a promise that a product will work",
     "The laptop has a two-year guarantee."
    ],
    [
     "afford to",
     "v",
     "đủ tiền để",
     "have enough money to do something",
     "We can't afford to travel this year."
    ],
    [
     "save up",
     "v",
     "để dành",
     "keep money for something",
     "I'm saving up for a bike."
    ],
    [
     "discount",
     "n",
     "giảm giá",
     "a lower price",
     "Students get a 10% discount."
    ]
   ]
  }
 ],
 "B2": [
  {
   "topic": "Environment",
   "words": [
    [
     "sustainable",
     "adj",
     "bền vững",
     "not harming the environment long-term",
     "We need sustainable energy."
    ],
    [
     "emissions",
     "n",
     "khí thải",
     "gases released into the air",
     "Cars produce harmful emissions."
    ],
    [
     "renewable",
     "adj",
     "tái tạo được",
     "naturally replaced",
     "Solar power is renewable."
    ],
    [
     "deforestation",
     "n",
     "nạn phá rừng",
     "cutting down forests",
     "Deforestation threatens wildlife."
    ],
    [
     "biodiversity",
     "n",
     "đa dạng sinh học",
     "the variety of living things",
     "Rainforests have rich biodiversity."
    ],
    [
     "carbon footprint",
     "n",
     "dấu chân carbon",
     "the CO₂ your activities produce",
     "Flying increases your carbon footprint."
    ],
    [
     "endangered",
     "adj",
     "có nguy cơ tuyệt chủng",
     "at risk of disappearing",
     "Tigers are an endangered species."
    ],
    [
     "pollution",
     "n",
     "sự ô nhiễm",
     "dirty or harmful substances",
     "Air pollution is a serious problem."
    ],
    [
     "conservation",
     "n",
     "sự bảo tồn",
     "protecting nature",
     "Conservation projects protect forests."
    ],
    [
     "reduce",
     "v",
     "giảm",
     "make smaller",
     "We must reduce plastic waste."
    ]
   ]
  },
  {
   "topic": "Society",
   "words": [
    [
     "inequality",
     "n",
     "sự bất bình đẳng",
     "an unfair difference between groups",
     "Income inequality is growing."
    ],
    [
     "community",
     "n",
     "cộng đồng",
     "people living in one area",
     "The local community helped."
    ],
    [
     "poverty",
     "n",
     "sự nghèo đói",
     "the state of being poor",
     "Millions live in poverty."
    ],
    [
     "elderly",
     "adj",
     "cao tuổi",
     "old",
     "Elderly people need support."
    ],
    [
     "urban",
     "adj",
     "thuộc đô thị",
     "related to cities",
     "Urban areas are crowded."
    ],
    [
     "policy",
     "n",
     "chính sách",
     "a plan of action by a government",
     "The new policy is controversial."
    ],
    [
     "citizen",
     "n",
     "công dân",
     "a member of a country",
     "Every citizen has the right to vote."
    ],
    [
     "discrimination",
     "n",
     "sự phân biệt đối xử",
     "unfair treatment of a group",
     "Discrimination is illegal."
    ],
    [
     "volunteer",
     "n/v",
     "tình nguyện viên",
     "a person who works without pay",
     "She volunteers at a hospital."
    ],
    [
     "welfare",
     "n",
     "phúc lợi",
     "help and support for people",
     "Social welfare protects the poor."
    ]
   ]
  },
  {
   "topic": "Media",
   "words": [
    [
     "headline",
     "n",
     "tiêu đề báo",
     "the title of a news story",
     "The headline was shocking."
    ],
    [
     "journalist",
     "n",
     "nhà báo",
     "a person who writes news",
     "She works as a journalist."
    ],
    [
     "biased",
     "adj",
     "thiên vị",
     "showing unfair preference",
     "The report was biased."
    ],
    [
     "misleading",
     "adj",
     "gây hiểu lầm",
     "giving a wrong idea",
     "The advert was misleading."
    ],
    [
     "coverage",
     "n",
     "việc đưa tin",
     "reporting of an event",
     "The election received wide coverage."
    ],
    [
     "influence",
     "n/v",
     "ảnh hưởng",
     "the power to change people's ideas",
     "Media has a strong influence."
    ],
    [
     "advertising",
     "n",
     "quảng cáo",
     "promoting products",
     "Advertising is everywhere."
    ],
    [
     "censorship",
     "n",
     "sự kiểm duyệt",
     "controlling what is published",
     "Censorship limits free speech."
    ],
    [
     "viral",
     "adj",
     "lan truyền nhanh",
     "spreading quickly online",
     "The video went viral."
    ],
    [
     "reliable",
     "adj",
     "đáng tin cậy",
     "able to be trusted",
     "Use reliable sources."
    ]
   ]
  },
  {
   "topic": "Education",
   "words": [
    [
     "curriculum",
     "n",
     "chương trình học",
     "the subjects taught",
     "The curriculum includes coding."
    ],
    [
     "assessment",
     "n",
     "sự đánh giá",
     "judging someone's work",
     "Continuous assessment reduces stress."
    ],
    [
     "critical thinking",
     "n",
     "tư duy phản biện",
     "analysing ideas carefully",
     "Schools should teach critical thinking."
    ],
    [
     "tuition fees",
     "n",
     "học phí",
     "money paid for teaching",
     "Tuition fees are rising."
    ],
    [
     "academic",
     "adj",
     "thuộc học thuật",
     "related to study",
     "Her academic results are excellent."
    ],
    [
     "literacy",
     "n",
     "khả năng đọc viết",
     "the ability to read and write",
     "Literacy rates have improved."
    ],
    [
     "vocational",
     "adj",
     "thuộc dạy nghề",
     "related to skills for a job",
     "Vocational training is valuable."
    ],
    [
     "motivate",
     "v",
     "thúc đẩy, tạo động lực",
     "make someone want to do something",
     "Good teachers motivate students."
    ],
    [
     "qualification",
     "n",
     "bằng cấp",
     "an official proof of skills",
     "You need a teaching qualification."
    ],
    [
     "lifelong learning",
     "n",
     "học tập suốt đời",
     "learning throughout life",
     "Lifelong learning keeps your mind active."
    ]
   ]
  },
  {
   "topic": "Science",
   "words": [
    [
     "research",
     "n",
     "nghiên cứu",
     "detailed study to find facts",
     "Research shows sleep improves memory."
    ],
    [
     "evidence",
     "n",
     "bằng chứng",
     "facts that prove something",
     "There is no evidence for that claim."
    ],
    [
     "experiment",
     "n",
     "thí nghiệm",
     "a scientific test",
     "They did an experiment in the lab."
    ],
    [
     "breakthrough",
     "n",
     "bước đột phá",
     "an important discovery",
     "It was a medical breakthrough."
    ],
    [
     "hypothesis",
     "n",
     "giả thuyết",
     "an idea to be tested",
     "Scientists tested the hypothesis."
    ],
    [
     "data",
     "n",
     "dữ liệu",
     "facts and numbers",
     "We collected data from 500 people."
    ],
    [
     "artificial intelligence",
     "n",
     "trí tuệ nhân tạo",
     "computers that can think and learn",
     "Artificial intelligence is changing jobs."
    ],
    [
     "genetic",
     "adj",
     "thuộc di truyền",
     "related to genes",
     "It's a genetic disease."
    ],
    [
     "innovation",
     "n",
     "sự đổi mới",
     "a new idea or method",
     "Innovation drives the economy."
    ],
    [
     "ethical",
     "adj",
     "thuộc đạo đức",
     "morally right",
     "Is cloning ethical?"
    ]
   ]
  },
  {
   "topic": "Opinions & arguments",
   "words": [
    [
     "argue",
     "v",
     "lập luận",
     "give reasons for an opinion",
     "Some argue that exams are unfair."
    ],
    [
     "claim",
     "n/v",
     "khẳng định",
     "say something is true",
     "The company claims the product is safe."
    ],
    [
     "advantage",
     "n",
     "lợi thế, ưu điểm",
     "a good point",
     "One advantage is flexibility."
    ],
    [
     "drawback",
     "n",
     "nhược điểm",
     "a disadvantage",
     "The main drawback is the cost."
    ],
    [
     "controversial",
     "adj",
     "gây tranh cãi",
     "causing disagreement",
     "It's a controversial topic."
    ],
    [
     "convincing",
     "adj",
     "thuyết phục",
     "making you believe",
     "Her argument was convincing."
    ],
    [
     "perspective",
     "n",
     "góc nhìn",
     "a way of thinking about something",
     "From my perspective, it's fair."
    ],
    [
     "outweigh",
     "v",
     "lớn hơn, trội hơn",
     "be more important than",
     "The benefits outweigh the risks."
    ],
    [
     "justify",
     "v",
     "biện minh",
     "give good reasons for",
     "Can you justify your decision?"
    ],
    [
     "consequence",
     "n",
     "hậu quả",
     "a result",
     "Every decision has consequences."
    ]
   ]
  },
  {
   "topic": "Work & economy",
   "words": [
    [
     "productivity",
     "n",
     "năng suất",
     "the amount of work produced",
     "Remote work may increase productivity."
    ],
    [
     "automation",
     "n",
     "sự tự động hóa",
     "using machines instead of people",
     "Automation is changing factories."
    ],
    [
     "workforce",
     "n",
     "lực lượng lao động",
     "all the workers in a place",
     "The workforce is ageing."
    ],
    [
     "unemployment",
     "n",
     "thất nghiệp",
     "not having a job",
     "Unemployment has fallen."
    ],
    [
     "entrepreneur",
     "n",
     "doanh nhân khởi nghiệp",
     "a person who starts a business",
     "She's a successful entrepreneur."
    ],
    [
     "incentive",
     "n",
     "sự khuyến khích",
     "something that encourages action",
     "Tax incentives attract investors."
    ],
    [
     "recession",
     "n",
     "suy thoái kinh tế",
     "a period of economic decline",
     "Many firms closed during the recession."
    ],
    [
     "flexible",
     "adj",
     "linh hoạt",
     "able to change easily",
     "Flexible working hours are popular."
    ],
    [
     "burnout",
     "n",
     "kiệt sức",
     "extreme tiredness from work",
     "Long hours can lead to burnout."
    ],
    [
     "sector",
     "n",
     "lĩnh vực, ngành",
     "a part of the economy",
     "The tourism sector employs millions."
    ]
   ]
  },
  {
   "topic": "Health & wellbeing",
   "words": [
    [
     "wellbeing",
     "n",
     "sức khỏe toàn diện, hạnh phúc",
     "feeling healthy and happy",
     "Exercise improves mental wellbeing."
    ],
    [
     "sedentary",
     "adj",
     "ít vận động",
     "involving a lot of sitting",
     "A sedentary lifestyle is unhealthy."
    ],
    [
     "obesity",
     "n",
     "béo phì",
     "being very overweight",
     "Obesity rates are rising."
    ],
    [
     "deprivation",
     "n",
     "sự thiếu hụt",
     "not having something you need",
     "Sleep deprivation affects memory."
    ],
    [
     "resilience",
     "n",
     "khả năng phục hồi",
     "the ability to recover from difficulties",
     "Sport builds resilience."
    ],
    [
     "therapy",
     "n",
     "liệu pháp",
     "treatment for a problem",
     "She's having therapy for anxiety."
    ],
    [
     "nutrition",
     "n",
     "dinh dưỡng",
     "food and its effect on health",
     "Good nutrition is essential."
    ],
    [
     "prevention",
     "n",
     "sự phòng ngừa",
     "stopping something before it happens",
     "Prevention is better than cure."
    ],
    [
     "mindfulness",
     "n",
     "chánh niệm",
     "paying calm attention to the present",
     "Mindfulness can reduce stress."
    ],
    [
     "chronic",
     "adj",
     "mãn tính",
     "lasting a long time",
     "He suffers from chronic back pain."
    ]
   ]
  }
 ]
};

/** [phrasal verb, Vietnamese, example, level] */
export const phrasal: PhrasalVerb[] = [
 [
  "look forward to",
  "mong chờ",
  "I'm looking forward to the holiday.",
  "B1"
 ],
 [
  "give up",
  "từ bỏ",
  "Don't give up!",
  "B1"
 ],
 [
  "find out",
  "tìm ra, phát hiện",
  "I found out the truth.",
  "B1"
 ],
 [
  "get on with",
  "hòa hợp với",
  "I get on well with my boss.",
  "B1"
 ],
 [
  "look after",
  "chăm sóc",
  "She looks after her grandmother.",
  "B1"
 ],
 [
  "run out of",
  "hết, cạn",
  "We've run out of milk.",
  "B1"
 ],
 [
  "turn down",
  "từ chối; vặn nhỏ",
  "He turned down the job offer.",
  "B1"
 ],
 [
  "set up",
  "thành lập",
  "She set up her own company.",
  "B1"
 ],
 [
  "put off",
  "trì hoãn",
  "Don't put off your homework.",
  "B1"
 ],
 [
  "take up",
  "bắt đầu (sở thích)",
  "I've taken up yoga.",
  "B1"
 ],
 [
  "come up with",
  "nghĩ ra",
  "She came up with a great idea.",
  "B2"
 ],
 [
  "carry out",
  "tiến hành",
  "They carried out a survey.",
  "B2"
 ],
 [
  "bring about",
  "gây ra, mang lại",
  "The law brought about big changes.",
  "B2"
 ],
 [
  "cut down on",
  "cắt giảm",
  "Try to cut down on sugar.",
  "B2"
 ],
 [
  "put up with",
  "chịu đựng",
  "I can't put up with the noise.",
  "B2"
 ],
 [
  "look into",
  "xem xét, điều tra",
  "The police are looking into it.",
  "B2"
 ],
 [
  "rule out",
  "loại trừ",
  "We can't rule out a delay.",
  "B2"
 ],
 [
  "stand out",
  "nổi bật",
  "Her work really stands out.",
  "B2"
 ],
 [
  "back up",
  "ủng hộ; sao lưu",
  "Back up your argument with evidence.",
  "B2"
 ],
 [
  "phase out",
  "loại bỏ dần",
  "Plastic bags are being phased out.",
  "B2"
 ],
 [
  "get over",
  "vượt qua (bệnh, nỗi buồn)",
  "It took her weeks to get over the flu.",
  "B1"
 ],
 [
  "pick up",
  "đón; học lỏm",
  "I picked up some Spanish on holiday.",
  "B1"
 ],
 [
  "fill in",
  "điền (mẫu đơn)",
  "Please fill in this form.",
  "B1"
 ],
 [
  "check in",
  "làm thủ tục nhận phòng/lên máy bay",
  "We checked in at the hotel at 3 p.m.",
  "B1"
 ],
 [
  "break down",
  "bị hỏng",
  "Our car broke down on the motorway.",
  "B1"
 ],
 [
  "sort out",
  "giải quyết, sắp xếp",
  "I need to sort out my desk.",
  "B1"
 ],
 [
  "go on",
  "tiếp tục; diễn ra",
  "What's going on?",
  "B1"
 ],
 [
  "work out",
  "tập thể dục; tìm ra",
  "I work out three times a week.",
  "B1"
 ],
 [
  "call off",
  "hủy bỏ",
  "The match was called off because of rain.",
  "B2"
 ],
 [
  "take on",
  "đảm nhận; tuyển",
  "The company is taking on new staff.",
  "B2"
 ],
 [
  "point out",
  "chỉ ra",
  "She pointed out a mistake in the report.",
  "B2"
 ],
 [
  "go through",
  "trải qua; xem kỹ",
  "The country went through a difficult period.",
  "B2"
 ],
 [
  "keep up with",
  "theo kịp",
  "It's hard to keep up with technology.",
  "B2"
 ],
 [
  "live up to",
  "đáp ứng (kỳ vọng)",
  "The film didn't live up to my expectations.",
  "B2"
 ],
 [
  "turn out",
  "hóa ra",
  "The rumour turned out to be true.",
  "B2"
 ],
 [
  "set out",
  "bắt đầu (hành trình); trình bày",
  "The report sets out three main proposals.",
  "B2"
 ]
];

/** [collocation, Vietnamese, level] */
export const collocations: Collocation[] = [
 [
  "make a decision",
  "đưa ra quyết định",
  "B1"
 ],
 [
  "do homework",
  "làm bài tập",
  "B1"
 ],
 [
  "take a break",
  "nghỉ giải lao",
  "B1"
 ],
 [
  "pay attention",
  "chú ý",
  "B1"
 ],
 [
  "catch a cold",
  "bị cảm",
  "B1"
 ],
 [
  "make progress",
  "tiến bộ",
  "B1"
 ],
 [
  "have fun",
  "vui vẻ",
  "B1"
 ],
 [
  "save time",
  "tiết kiệm thời gian",
  "B1"
 ],
 [
  "keep in touch",
  "giữ liên lạc",
  "B1"
 ],
 [
  "do your best",
  "cố gắng hết sức",
  "B1"
 ],
 [
  "raise awareness",
  "nâng cao nhận thức",
  "B2"
 ],
 [
  "meet a deadline",
  "kịp hạn chót",
  "B2"
 ],
 [
  "take responsibility",
  "chịu trách nhiệm",
  "B2"
 ],
 [
  "play a key role",
  "đóng vai trò then chốt",
  "B2"
 ],
 [
  "reach a conclusion",
  "đi đến kết luận",
  "B2"
 ],
 [
  "pose a threat",
  "gây ra mối đe dọa",
  "B2"
 ],
 [
  "draw attention to",
  "thu hút sự chú ý tới",
  "B2"
 ],
 [
  "bear in mind",
  "ghi nhớ, lưu ý",
  "B2"
 ],
 [
  "heavy traffic",
  "giao thông đông đúc",
  "B2"
 ],
 [
  "strong argument",
  "lập luận vững chắc",
  "B2"
 ],
 [
  "take part in",
  "tham gia",
  "B1"
 ],
 [
  "make a mistake",
  "mắc lỗi",
  "B1"
 ],
 [
  "have a look",
  "xem qua",
  "B1"
 ],
 [
  "give advice",
  "đưa lời khuyên",
  "B1"
 ],
 [
  "get lost",
  "bị lạc",
  "B1"
 ],
 [
  "spend time",
  "dành thời gian",
  "B1"
 ],
 [
  "catch a bus",
  "bắt xe buýt",
  "B1"
 ],
 [
  "tell the truth",
  "nói sự thật",
  "B1"
 ],
 [
  "make an effort",
  "nỗ lực",
  "B2"
 ],
 [
  "come to terms with",
  "chấp nhận (điều khó khăn)",
  "B2"
 ],
 [
  "take into account",
  "tính đến",
  "B2"
 ],
 [
  "have an impact on",
  "có tác động đến",
  "B2"
 ],
 [
  "meet the needs of",
  "đáp ứng nhu cầu của",
  "B2"
 ],
 [
  "run the risk of",
  "có nguy cơ",
  "B2"
 ],
 [
  "a growing concern",
  "mối lo ngại ngày càng tăng",
  "B2"
 ],
 [
  "widely accepted",
  "được chấp nhận rộng rãi",
  "B2"
 ]
];

/** Common mistakes made by Vietnamese learners: [wrong, right, explanation] */
export const mistakes: Mistake[] = [
 [
  "I am agree with you.",
  "I agree with you.",
  "“agree” là động từ, không dùng “am”."
 ],
 [
  "She go to school by bus.",
  "She goes to school by bus.",
  "Ngôi thứ ba số ít (he/she/it) thêm -s/-es."
 ],
 [
  "I have many homeworks.",
  "I have a lot of homework.",
  "“homework” không đếm được."
 ],
 [
  "Can you give me an advice?",
  "Can you give me some advice / a piece of advice?",
  "“advice” không đếm được."
 ],
 [
  "My phone is more better.",
  "My phone is better.",
  "Không dùng “more” với so sánh -er/bất quy tắc."
 ],
 [
  "I very like music.",
  "I really like music. / I like music very much.",
  "“very” không đứng trước động từ."
 ],
 [
  "He is married with a doctor.",
  "He is married to a doctor.",
  "married to, không phải married with."
 ],
 [
  "We discussed about the plan.",
  "We discussed the plan.",
  "“discuss” không cần “about”."
 ],
 [
  "I have lived here since 3 years.",
  "I have lived here for 3 years.",
  "for + khoảng thời gian, since + mốc thời gian."
 ],
 [
  "People is friendly here.",
  "People are friendly here.",
  "“people” là danh từ số nhiều."
 ],
 [
  "Explain me this word.",
  "Explain this word to me.",
  "explain something to someone."
 ],
 [
  "I didn't went there.",
  "I didn't go there.",
  "Sau didn't dùng động từ nguyên mẫu."
 ],
 [
  "It depends of the weather.",
  "It depends on the weather.",
  "depend on."
 ],
 [
  "I'm interesting in history.",
  "I'm interested in history.",
  "-ed: cảm xúc của người; -ing: tính chất của vật."
 ],
 [
  "Despite of the rain, we went out.",
  "Despite the rain / In spite of the rain, we went out.",
  "despite không có “of”."
 ],
 [
  "She said me that she was tired.",
  "She told me that she was tired. / She said that…",
  "tell + người; say (to someone)."
 ],
 [
  "I look forward to see you.",
  "I look forward to seeing you.",
  "“to” ở đây là giới từ → V-ing."
 ],
 [
  "If it will rain, I'll stay home.",
  "If it rains, I'll stay home.",
  "Không dùng will trong mệnh đề if."
 ],
 [
  "How to say this in English?",
  "How do you say this in English?",
  "Câu hỏi cần trợ động từ."
 ],
 [
  "I make my homework every evening.",
  "I do my homework every evening.",
  "do homework, không phải make homework."
 ],
 [
  "I have 20 years old.",
  "I am 20 years old.",
  "Tuổi dùng “be”, không dùng “have”."
 ],
 [
  "She is very beautiful girl.",
  "She is a very beautiful girl.",
  "Danh từ số ít đếm được cần mạo từ a/an."
 ],
 [
  "I go to school by foot.",
  "I go to school on foot.",
  "on foot, nhưng by bus/by car."
 ],
 [
  "He suggested me to go.",
  "He suggested that I go / He suggested going.",
  "suggest không đi với “me to”."
 ],
 [
  "I'm boring in this class.",
  "I'm bored in this class.",
  "bored = cảm thấy chán; boring = gây chán."
 ],
 [
  "Let's go to home.",
  "Let's go home.",
  "go home không có “to”."
 ],
 [
  "I want that you help me.",
  "I want you to help me.",
  "want + someone + to V."
 ],
 [
  "He enjoys to play football.",
  "He enjoys playing football.",
  "enjoy + V-ing."
 ],
 [
  "The news are good.",
  "The news is good.",
  "“news” là danh từ không đếm được, đi với động từ số ít."
 ],
 [
  "Although it rained, but we went out.",
  "Although it rained, we went out.",
  "Không dùng although và but cùng lúc."
 ]
];
