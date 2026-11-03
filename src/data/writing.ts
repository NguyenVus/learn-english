// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, WritingTask } from "../types";

export const writing: ByLevel<WritingTask[]> = {
 "A2": [
  {
   "id": "w-a2-1",
   "type": "Note",
   "title": "A note to your flatmate",
   "prompt": "You are going out. Write a note to your flatmate. Say where you are going, when you will be back, and ask them to do one thing for you.",
   "vi": "Viết ghi chú ngắn (30–60 từ): bạn đi đâu, mấy giờ về, nhờ bạn cùng phòng làm một việc.",
   "min": 30,
   "max": 60,
   "k": [
    "going",
    "back",
    "please",
    "can you"
   ],
   "model": "Hi Sam,\n\nI'm going to the supermarket with Linh. We need food for the weekend. I'll be back at about 6 o'clock. Can you please take the washing in if it rains? Thanks a lot!\n\nMai"
  },
  {
   "id": "w-a2-2",
   "type": "Message",
   "title": "A message to a friend",
   "prompt": "Write a message to an English friend. Tell them about your new hobby: what it is, when you do it and why you like it.",
   "vi": "Viết tin nhắn (30–60 từ) kể về sở thích mới: là gì, khi nào làm, vì sao thích.",
   "min": 30,
   "max": 60,
   "k": [
    "hobby",
    "every",
    "because",
    "like"
   ],
   "model": "Hi Emma,\n\nGuess what? I have a new hobby. I'm learning to play the guitar! I have lessons every Tuesday evening and I practise at home every day. I like it because it's relaxing and I can play my favourite songs. \n\nTalk soon,\nNam"
  },
  {
   "id": "w-a2-3",
   "type": "Email",
   "title": "An invitation",
   "prompt": "Write an email to a friend. Invite them to your birthday party. Say when and where it is, and what you are going to do.",
   "vi": "Viết email mời bạn dự tiệc sinh nhật: thời gian, địa điểm, hoạt động.",
   "min": 40,
   "max": 60,
   "k": [
    "party",
    "saturday",
    "at",
    "going to",
    "come"
   ],
   "model": "Hi Tom,\n\nI'm having a birthday party on Saturday 15th June at my house. It starts at 7 p.m. We're going to have pizza and cake, and then we're going to play games and dance. Can you come? Please bring your favourite music!\n\nSee you soon,\nLan"
  },
  {
   "id": "w-a2-4",
   "type": "Email",
   "title": "Your last weekend",
   "prompt": "Write an email to your English penfriend about last weekend. Say where you went, who you were with and what you did.",
   "vi": "Kể về cuối tuần trước bằng thì quá khứ đơn (went, visited, ate, saw...).",
   "min": 40,
   "max": 60,
   "k": [
    "last weekend",
    "went",
    "with",
    "was"
   ],
   "model": "Hi Anna,\n\nLast weekend I went to the countryside with my family. We visited my grandparents' farm. On Saturday I fed the chickens and helped my grandmother in the garden. In the evening we ate fresh fish. It was quiet and beautiful. How was your weekend?\n\nLove,\nHoa"
  },
  {
   "id": "w-a2-5",
   "type": "Postcard",
   "title": "A postcard from holiday",
   "prompt": "You are on holiday. Write a postcard to a friend. Describe the place, the weather and one thing you are going to do tomorrow.",
   "vi": "Viết bưu thiếp: mô tả nơi đến, thời tiết và một việc bạn sẽ làm ngày mai (going to).",
   "min": 30,
   "max": 60,
   "k": [
    "weather",
    "beautiful",
    "tomorrow",
    "going to"
   ],
   "model": "Dear Ben,\n\nGreetings from Nha Trang! The beach is beautiful and the sea is warm. The weather is sunny and hot every day. The food is delicious, especially the seafood. Tomorrow I'm going to take a boat trip to the islands. \n\nWish you were here!\nMinh"
  },
  {
   "id": "w-a2-6",
   "type": "Email",
   "title": "Thank-you email",
   "prompt": "A friend gave you a birthday present. Write an email to say thank you. Say what the present was, why you like it and when you will use it.",
   "vi": "Viết email cảm ơn món quà (30–60 từ): quà là gì, vì sao thích, khi nào sẽ dùng.",
   "min": 30,
   "max": 60,
   "k": [
    "thank",
    "present",
    "because",
    "love"
   ],
   "model": "Hi Lan,\n\nThank you so much for the lovely present! I really love the blue backpack. It's perfect because my old bag is broken. I'm going to use it every day at school, and I'll take it on our class trip next month.\n\nSee you soon,\nHoa"
  },
  {
   "id": "w-a2-7",
   "type": "Description",
   "title": "My town",
   "prompt": "Write a short description of your town for an English website. Say where it is, what there is to do and what you like about it.",
   "vi": "Mô tả thị trấn/thành phố của bạn (40–60 từ): vị trí, có gì để làm, điều bạn thích.",
   "min": 40,
   "max": 60,
   "k": [
    "town",
    "there is",
    "there are",
    "like"
   ],
   "model": "I live in Vinh, a city in the north of central Vietnam. It isn't very big, but there are lots of things to do. There is a beautiful lake in the centre and there are many cheap cafés. I like my town because the people are friendly and the food is delicious."
  },
  {
   "id": "w-a2-8",
   "type": "Message",
   "title": "Changing plans",
   "prompt": "You can't meet your friend tomorrow. Write a message to say sorry, explain why, and suggest another day.",
   "vi": "Viết tin nhắn xin lỗi vì không gặp được, giải thích lý do và đề nghị ngày khác.",
   "min": 30,
   "max": 50,
   "k": [
    "sorry",
    "because",
    "can we",
    "instead"
   ],
   "model": "Hi Minh,\n\nI'm really sorry, but I can't meet you tomorrow. I have to help my parents because my grandparents are visiting. Can we go to the cinema on Sunday instead? The film starts at 4 p.m.\n\nLet me know!\nTuan"
  }
 ],
 "B1": [
  {
   "id": "w-b1-1",
   "type": "Informal email",
   "title": "Advice to a friend",
   "prompt": "Your English friend Alex wants to visit your country next summer and asks for advice. Write an email: suggest places to visit, what to bring and the best way to travel around.",
   "vi": "Email thân mật (80–120 từ) đưa lời khuyên: nơi nên đến, nên mang gì, cách di chuyển. Dùng: You should..., Why don't you...?, If I were you...",
   "min": 80,
   "max": 120,
   "k": [
    "visit",
    "should",
    "bring",
    "travel",
    "train",
    "bus"
   ],
   "model": "Hi Alex,\n\nIt's great that you're coming to Vietnam next summer! You should definitely visit Hoi An. The old town is beautiful at night, and the food is amazing. If you have time, Ha Long Bay is also worth seeing.\n\nIt'll be very hot, so bring light clothes, sun cream and a hat. Don't forget an umbrella, because it often rains in the afternoon.\n\nThe best way to travel around is by train or night bus. They're cheap and comfortable. For short trips in cities, you can use a motorbike taxi app.\n\nLet me know if you need anything else!\n\nBest wishes,\nLinh"
  },
  {
   "id": "w-b1-2",
   "type": "Story",
   "title": "A story: The wrong bag",
   "prompt": "Write a short story that begins with this sentence: “When I opened the bag, I realised it wasn't mine.”",
   "vi": "Truyện ngắn (80–120 từ): dùng quá khứ đơn, quá khứ tiếp diễn và quá khứ hoàn thành; có mở đầu, diễn biến, kết thúc.",
   "min": 80,
   "max": 120,
   "k": [
    "when",
    "was",
    "had",
    "suddenly",
    "finally"
   ],
   "model": "When I opened the bag, I realised it wasn't mine. Instead of my laptop and books, there was a camera, a map of Paris and a small red notebook.\n\nI had picked up the wrong bag at the café that morning while I was talking on the phone. I felt terrible. Suddenly, I noticed a phone number on the first page of the notebook, so I called it.\n\nA young woman answered. She was a French tourist and she had my bag! She was leaving the city that evening, so we met at the station an hour later.\n\nFinally, we swapped bags and laughed about it. We are still friends today."
  },
  {
   "id": "w-b1-3",
   "type": "Article",
   "title": "Article: My favourite app",
   "prompt": "You see this notice on a school website: “Articles wanted! Which app do you use most and why? How has it changed your life?” Write your article.",
   "vi": "Bài báo ngắn (80–120 từ): có tiêu đề, đoạn mở đầu thu hút, nội dung và kết luận. Có thể đặt câu hỏi cho người đọc.",
   "min": 80,
   "max": 120,
   "k": [
    "app",
    "because",
    "use",
    "changed",
    "for example"
   ],
   "model": "The App That Changed My Mornings\n\nDo you find it hard to stay organised? I used to, until I started using a simple planning app.\n\nEvery evening, I write down my tasks for the next day and the app reminds me at the right time. For example, it tells me when to leave for school and when my homework is due. As a result, I'm never late any more.\n\nThe app has also helped me to study better, because I can see how much time I spend on each subject.\n\nIf you want to feel less stressed, why not give a planning app a try?"
  },
  {
   "id": "w-b1-4",
   "type": "Informal email",
   "title": "Reply about a school trip",
   "prompt": "Your friend writes: “Our class is going on a trip next month. Should we go to the mountains or to the beach? What do you think?” Reply with your opinion and reasons.",
   "vi": "Trả lời email nêu ý kiến và lý do (80–120 từ). Dùng: I think..., because..., Another reason is..., However...",
   "min": 80,
   "max": 120,
   "k": [
    "think",
    "because",
    "mountains",
    "beach",
    "however"
   ],
   "model": "Hi Chris,\n\nThanks for your email! I think the mountains would be a better choice for your class trip.\n\nFirst of all, there are lots of activities you can do together, like hiking, camping and visiting villages. Another reason is that it's cooler there, so walking won't be too tiring.\n\nHowever, the beach is a good option if most people just want to relax. It's also easier to get to by bus.\n\nIn the end, maybe you could ask everyone to vote. Let me know what your class decides!\n\nTake care,\nMai"
  },
  {
   "id": "w-b1-5",
   "type": "Story",
   "title": "A story: An unexpected visitor",
   "prompt": "Write a short story that ends with this sentence: “It was the best surprise I had ever had.”",
   "vi": "Viết truyện kết thúc bằng câu cho sẵn. Hãy xây dựng tình huống bất ngờ và cảm xúc nhân vật.",
   "min": 80,
   "max": 120,
   "k": [
    "when",
    "was",
    "knock",
    "door",
    "surprise"
   ],
   "model": "It was a rainy Sunday afternoon and I was feeling bored. My parents were out, and I was watching TV alone.\n\nSuddenly, there was a knock at the door. I wasn't expecting anyone, so I felt a bit nervous. When I opened the door, I couldn't believe my eyes. My older brother was standing there with a huge smile and a suitcase.\n\nHe had been studying in Australia for two years, and he hadn't told anyone that he was coming home. We hugged for a long time, and then we made hot chocolate and talked for hours.\n\nIt was the best surprise I had ever had."
  },
  {
   "id": "w-b1-6",
   "type": "Review",
   "title": "Review: a restaurant or café",
   "prompt": "Write a review of a restaurant or café you have been to for a student website. Describe the place, the food and the service, and say whether you recommend it.",
   "vi": "Review quán ăn (80–120 từ): không gian, đồ ăn, phục vụ, giá cả, có khuyên người khác đến không.",
   "min": 80,
   "max": 120,
   "k": [
    "food",
    "service",
    "price",
    "recommend"
   ],
   "model": "The Green Leaf Café\n\nThe Green Leaf Café is a small vegetarian café near the city library. It's bright and quiet, so it's a great place to study or meet friends.\n\nThe food is fresh and tasty. I had a mushroom noodle soup and a mango smoothie, and both were excellent. The portions are generous, and the prices are reasonable for students.\n\nThe service was friendly, although it was a bit slow at lunchtime because the café was very busy.\n\nOverall, I would definitely recommend the Green Leaf Café, especially if you want a healthy meal in a relaxing place. Try to go before twelve to avoid the queue!"
  },
  {
   "id": "w-b1-7",
   "type": "Formal email",
   "title": "Applying for a summer job",
   "prompt": "You see an advert for summer staff at an international hotel. Write an email to apply. Say why you are interested, what experience and skills you have, and when you are available.",
   "vi": "Email xin việc làm thêm (80–120 từ): giọng trang trọng, Dear Sir or Madam, I am writing to apply for..., I look forward to hearing from you.",
   "min": 80,
   "max": 120,
   "k": [
    "dear",
    "apply",
    "experience",
    "available",
    "look forward"
   ],
   "model": "Dear Sir or Madam,\n\nI am writing to apply for the position of summer receptionist which I saw advertised on your website.\n\nI am a second-year tourism student, and I am very interested in working in an international environment. Last summer, I worked part-time in a café, where I learned to deal with customers politely and work as part of a team. I speak English and some Korean, and I am confident using computers.\n\nI am available from 1st June to 31st August and I can work weekends.\n\nI look forward to hearing from you.\n\nYours faithfully,\nPham Thi Lan"
  },
  {
   "id": "w-b1-8",
   "type": "Article",
   "title": "Article: The perfect weekend",
   "prompt": "A magazine for young people asks readers: “Describe your perfect weekend. Where would you go, who would you be with and what would you do?” Write your article.",
   "vi": "Bài báo (80–120 từ) dùng câu điều kiện loại 2 (would) để mô tả cuối tuần lý tưởng. Có tiêu đề hấp dẫn.",
   "min": 80,
   "max": 120,
   "k": [
    "would",
    "weekend",
    "with",
    "because"
   ],
   "model": "My Perfect Weekend\n\nWhat would my perfect weekend look like? It would definitely start by the sea.\n\nOn Saturday morning, I would take an early train to Quy Nhon with my two best friends. We would spend the day swimming, eating fresh seafood and relaxing on the beach. In the evening, we would watch the sunset and play guitar.\n\nOn Sunday, I would wake up late, have a long breakfast and explore the old fishing village by bike.\n\nThe best thing about this weekend? No homework, no phone notifications and lots of laughter. If only every weekend could be like that!"
  }
 ],
 "B2": [
  {
   "id": "w-b2-1",
   "type": "Opinion essay",
   "title": "Essay: Technology in the classroom",
   "prompt": "“Technology in classrooms does more harm than good.” To what extent do you agree? Write an opinion essay giving reasons and examples.",
   "vi": "Bài luận quan điểm (140–250 từ): mở bài nêu quan điểm, 2 đoạn thân bài (lý do + ví dụ, có phản biện), kết luận. Dùng từ nối: furthermore, nevertheless, consequently.",
   "min": 140,
   "max": 250,
   "k": [
    "technology",
    "students",
    "however",
    "furthermore",
    "in conclusion",
    "for example"
   ],
   "model": "Technology has become a familiar part of many classrooms, from interactive whiteboards to tablets. While some argue that it distracts students, I believe that, when used carefully, it does more good than harm.\n\nFirstly, technology gives students access to a huge range of resources. For example, a history class can watch interviews with real witnesses or explore a virtual museum, which makes lessons more engaging. Furthermore, educational apps allow learners to practise at their own pace and receive instant feedback.\n\nNevertheless, it would be unrealistic to ignore the drawbacks. Students may be tempted to use devices for games or social media, and too much screen time can affect concentration. Consequently, schools need clear rules and teachers must decide when technology genuinely supports learning rather than simply replacing traditional methods.\n\nIn conclusion, technology itself is neither good nor bad. Its value depends on how it is used. With thoughtful planning and sensible limits, I am convinced that it can greatly improve the quality of education."
  },
  {
   "id": "w-b2-2",
   "type": "Formal email",
   "title": "Formal complaint",
   "prompt": "You ordered a laptop online, but it arrived late and the screen was damaged. Write a formal email to the company: describe the problems, explain how this affected you, and say what you would like them to do.",
   "vi": "Email trang trọng phàn nàn: Dear Sir or Madam, I am writing to complain about..., I would be grateful if..., Yours faithfully. Tránh viết tắt (I'm → I am).",
   "min": 140,
   "max": 200,
   "k": [
    "dear",
    "writing",
    "order",
    "damaged",
    "would",
    "refund",
    "yours"
   ],
   "model": "Dear Sir or Madam,\n\nI am writing to complain about a laptop I ordered from your website on 3rd March (order number 48215).\n\nFirstly, although your website stated that delivery would take two days, the laptop arrived nine days later. As I had bought it specifically for an online course, I was unable to attend the first week of classes.\n\nSecondly, when I opened the box, I discovered that the screen was badly scratched and a section of it did not display anything. I have attached photographs as evidence.\n\nI was extremely disappointed, particularly as your company advertises fast delivery and high-quality checks. I would therefore be grateful if you could arrange for the damaged laptop to be collected and either replace it with a new one or provide a full refund. I would also appreciate some compensation for the delay.\n\nI look forward to receiving your prompt reply.\n\nYours faithfully,\nNguyen Van An"
  },
  {
   "id": "w-b2-3",
   "type": "Review",
   "title": "Review: a film or series",
   "prompt": "An international magazine wants reviews of a film or series that made you think. Write a review: describe it briefly, say what you liked and disliked, and whether you would recommend it.",
   "vi": "Bài review (140–220 từ): tiêu đề, giới thiệu ngắn (không kể hết cốt truyện), ưu/nhược điểm, khuyến nghị. Dùng tính từ đa dạng: gripping, thought-provoking, predictable.",
   "min": 140,
   "max": 220,
   "k": [
    "film",
    "series",
    "characters",
    "however",
    "recommend"
   ],
   "model": "A Quiet World: Thought-Provoking but Slow\n\n\"A Quiet World\" is a science-fiction series set in a future where people communicate only through their devices. The story follows Lena, a young engineer who discovers that the network is secretly controlling people's emotions.\n\nWhat impressed me most was the acting. The main characters are complex and believable, and Lena's struggle to reconnect with her family is genuinely moving. The visual style is also striking, with cold, empty cities that perfectly reflect the theme of isolation.\n\nHowever, the series is not without its flaws. The middle episodes are rather slow, and some scenes seem to repeat the same ideas. In addition, the ending felt rushed and left several questions unanswered.\n\nOverall, despite these weaknesses, \"A Quiet World\" is a thought-provoking series that encourages viewers to reflect on their own relationship with technology. I would recommend it to anyone who enjoys intelligent drama, as long as they are prepared to be patient."
  },
  {
   "id": "w-b2-4",
   "type": "Report",
   "title": "Report: improving the school library",
   "prompt": "Your principal has asked for a report on how the school library could be improved. Describe how students use it now, the main problems, and your recommendations.",
   "vi": "Báo cáo (160–250 từ): có tiêu đề và các mục (Introduction, Current situation, Problems, Recommendations). Văn phong trang trọng, dùng câu bị động.",
   "min": 160,
   "max": 250,
   "k": [
    "introduction",
    "students",
    "problems",
    "recommend",
    "library",
    "conclusion"
   ],
   "model": "Report on Improving the School Library\n\nIntroduction\nThe aim of this report is to describe how the library is currently used and to suggest ways in which it could be improved. The information is based on a survey of 120 students.\n\nCurrent situation\nAt present, the library is mainly used for quiet study during lunchtime. Only about a third of students said they borrow books regularly.\n\nProblems\nTwo main problems were identified. Firstly, many books are out of date, especially in the science section. Secondly, there are not enough computers, so students often have to wait to complete online research. Several students also mentioned that the library closes too early.\n\nRecommendations\nIt is recommended that part of next year's budget be spent on modern books and e-books. In addition, at least ten more computers should be installed. Finally, extending the opening hours until 6 p.m. would allow students to study after school.\n\nConclusion\nIf these changes are made, the library is likely to become a more popular and useful place for all students."
  },
  {
   "id": "w-b2-5",
   "type": "Informal email",
   "title": "Advice email: choosing a university",
   "prompt": "Your cousin can't decide whether to study at a university in your city or abroad. Write an informal email giving advice, comparing the two options and explaining what you would do in their position.",
   "vi": "Email thân mật B2: so sánh hai lựa chọn, dùng câu điều kiện (If I were you...), cấu trúc wish, và từ nối đa dạng.",
   "min": 140,
   "max": 220,
   "k": [
    "abroad",
    "if i were you",
    "by contrast",
    "on the other hand",
    "wish"
   ],
   "model": "Hi Duc,\n\nThanks for your message – I can see why you're finding this decision so hard!\n\nStudying here definitely has its advantages. You'd be close to the family, your living costs would be much lower, and you could keep your part-time job. On the other hand, you might miss the chance to become more independent.\n\nStudying abroad, by contrast, would push you out of your comfort zone. Your English would improve enormously, and you'd make friends from all over the world. That said, it's expensive, and the first few months can be really lonely. I still wish I had spent a semester abroad when I had the chance.\n\nIf I were you, I'd look into exchange programmes. That way, you could start here and spend a year overseas later, which would give you the best of both worlds.\n\nWhatever you decide, I'm sure you'll make the most of it. Let me know how it goes!\n\nLots of love,\nThu"
  },
  {
   "id": "w-b2-6",
   "type": "Opinion essay",
   "title": "Essay: Should tourism be limited?",
   "prompt": "“Popular tourist destinations should limit the number of visitors.” Discuss both sides of this statement and give your own opinion.",
   "vi": "Bài luận thảo luận hai phía (discussion essay): mở bài, đoạn ủng hộ, đoạn phản đối, kết luận với ý kiến cá nhân.",
   "min": 160,
   "max": 250,
   "k": [
    "tourism",
    "visitors",
    "on the other hand",
    "however",
    "in conclusion"
   ],
   "model": "In recent years, popular destinations from Venice to Ha Long Bay have struggled with ever-growing numbers of tourists. This has led some people to argue that visitor numbers should be restricted. While there are strong arguments on both sides, I believe that carefully designed limits are necessary.\n\nThose in favour of limits point out that overtourism can damage both the environment and local communities. Crowds cause erosion and pollution at natural sites, while rising rents and noise make historic city centres difficult places to live. By controlling numbers, authorities can protect these places for future generations and improve the experience for visitors themselves.\n\nOn the other hand, critics argue that tourism provides essential income and jobs, particularly in regions with few other industries. Strict limits could harm small businesses and make travel a privilege for the wealthy if prices rise as a result.\n\nIn my view, the solution lies in smart management rather than simple bans. Measures such as advance booking, fees on the busiest days and the promotion of lesser-known areas can reduce pressure without closing the door to visitors. In conclusion, limits are justified, provided that they are fair and that local people share the benefits of tourism."
  },
  {
   "id": "w-b2-7",
   "type": "Proposal",
   "title": "Proposal: a greener campus",
   "prompt": "Your college wants ideas to become more environmentally friendly. Write a proposal describing the current situation and recommending three practical changes.",
   "vi": "Viết đề xuất (proposal) có tiêu đề các mục: Introduction, Current situation, Recommendations, Conclusion. Văn phong trang trọng, dùng should / it is recommended that.",
   "min": 160,
   "max": 250,
   "k": [
    "introduction",
    "recommend",
    "students",
    "energy",
    "conclusion"
   ],
   "model": "Proposal for a Greener Campus\n\nIntroduction\nThis proposal aims to suggest practical ways in which our college could reduce its environmental impact. It is based on discussions with students and staff.\n\nCurrent situation\nAt present, a large amount of plastic is used in the canteen, many lights and air conditioners are left on in empty classrooms, and most students travel to college by motorbike.\n\nRecommendations\nFirstly, I recommend that the canteen stop selling drinks in single-use plastic bottles and install free water fountains instead. Students could be encouraged to bring reusable bottles.\n\nSecondly, motion sensors should be fitted in classrooms so that lights and air conditioning switch off automatically when rooms are empty. This would save energy and reduce costs.\n\nThirdly, the college could create a safe bicycle parking area and organise a bike-sharing scheme for students who live nearby.\n\nConclusion\nThese changes are relatively inexpensive and easy to introduce. If they are adopted, the college would not only become greener but also set a positive example for the local community."
  },
  {
   "id": "w-b2-8",
   "type": "Letter to the editor",
   "title": "Letter: More green spaces",
   "prompt": "Your local newspaper has published an article saying that a park in your city will be replaced by a shopping centre. Write a letter to the editor giving your opinion and suggesting alternatives.",
   "vi": "Thư gửi tòa soạn (formal letter): nêu lý do viết, quan điểm có lý do và đề xuất giải pháp thay thế. Kết thư: Yours faithfully.",
   "min": 160,
   "max": 250,
   "k": [
    "dear",
    "article",
    "park",
    "alternative",
    "yours"
   ],
   "model": "Dear Editor,\n\nI am writing in response to your article of 10th May, which reported that Riverside Park is to be replaced by a new shopping centre. As a resident who has used the park for many years, I strongly oppose this plan.\n\nFirstly, the park is one of the few green spaces left in our increasingly crowded city. Every morning it is full of elderly people exercising, families with young children and students studying under the trees. Losing it would have a serious impact on residents' physical and mental health.\n\nFurthermore, the city already has three large shopping centres within five kilometres of the park, one of which is half empty. It is difficult to see why another one is needed.\n\nI would therefore like to suggest some alternatives. The council could redevelop the empty shopping centre instead, or build the new centre on the unused industrial land near the railway station. At the same time, Riverside Park could be improved with better lighting and more sports facilities.\n\nI hope the council will reconsider its decision and listen to the people who use the park every day.\n\nYours faithfully,\nTran Minh Duc"
  }
 ]
};

/** Linking words checked in writing (cumulative by level) */
export const linkers: ByLevel<string[]> = {
 "A2": [
  "and",
  "but",
  "because",
  "so",
  "then",
  "also",
  "or",
  "first",
  "after that",
  "finally",
  "when"
 ],
 "B1": [
  "however",
  "although",
  "for example",
  "as well as",
  "in addition",
  "on the other hand",
  "firstly",
  "secondly",
  "while",
  "unless",
  "so that",
  "as a result",
  "instead"
 ],
 "B2": [
  "furthermore",
  "moreover",
  "nevertheless",
  "whereas",
  "consequently",
  "therefore",
  "in contrast",
  "despite",
  "in spite of",
  "on the whole",
  "to sum up",
  "in conclusion",
  "not only",
  "provided that",
  "overall",
  "that said",
  "on balance"
 ]
};
