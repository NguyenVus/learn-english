// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, SpeakingTask, PronunciationSet } from "../types";

export const speaking: ByLevel<SpeakingTask[]> = {
 "A2": [
  {
   "id": "s-a2-1",
   "title": "Introduce yourself",
   "prompt": "Introduce yourself. Talk about your name, age, where you live, your family and your hobbies.",
   "vi": "Giß╗¢i thiß╗çu bß║ún th├ón: t├¬n, tuß╗òi, n╞íi sß╗æng, gia ─æ├¼nh v├á sß╗ƒ th├¡ch. N├│i c├óu ngß║»n, r├╡ r├áng.",
   "qs": [
    "What's your name and how old are you?",
    "Where do you live?",
    "Tell me about your family.",
    "What do you like doing in your free time?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "My name is",
    "I'm ... years old",
    "I live in",
    "There are ... people in my family",
    "I really enjoy",
    "In my free time"
   ]
  },
  {
   "id": "s-a2-2",
   "title": "Describe your day",
   "prompt": "Describe a normal day in your life, from the morning to the evening.",
   "vi": "M├┤ tß║ú mß╗Öt ng├áy b├¼nh th╞░ß╗¥ng. D├╣ng th├¼ hiß╗çn tß║íi ─æ╞ín v├á c├íc tß╗½ nß╗æi: first, then, after that.",
   "qs": [
    "What time do you get up?",
    "What do you do in the morning?",
    "What do you usually do in the afternoon?",
    "What do you do in the evening?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "I usually get up at",
    "First,",
    "After that,",
    "Then",
    "In the evening",
    "I go to bed at"
   ]
  },
  {
   "id": "s-a2-3",
   "title": "Answer personal questions",
   "prompt": "Answer these questions. Give two or three sentences for each one.",
   "vi": "Trß║ú lß╗¥i c├óu hß╗Åi c├í nh├ón, mß╗ùi c├óu 2ΓÇô3 c├óu, nhß╗¢ ─æ╞░a ra l├╜ do vß╗¢i because.",
   "qs": [
    "What is your favourite food? Why?",
    "What do you like about your town?",
    "What do you usually do at the weekend?",
    "What is your favourite school subject or job?"
   ],
   "prep": 30,
   "time": 75,
   "target": 55,
   "phrases": [
    "My favourite",
    "because",
    "I like it because",
    "Usually,",
    "It's really"
   ]
  },
  {
   "id": "s-a2-4",
   "title": "Talk about last weekend",
   "prompt": "Tell me about what you did last weekend.",
   "vi": "Kß╗â vß╗ü cuß╗æi tuß║ºn tr╞░ß╗¢c. D├╣ng th├¼ qu├í khß╗⌐ ─æ╞ín: went, had, saw, played...",
   "qs": [
    "Where did you go?",
    "Who were you with?",
    "What did you do?",
    "Did you enjoy it? Why or why not?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "Last weekend",
    "I went to",
    "We had a great time",
    "It was really",
    "After that,"
   ]
  },
  {
   "id": "s-a2-5",
   "title": "Your next holiday",
   "prompt": "Talk about your plans for your next holiday.",
   "vi": "N├│i vß╗ü kß║┐ hoß║ích kß╗│ nghß╗ë. D├╣ng be going to v├á would like to.",
   "qs": [
    "Where are you going to go?",
    "Who are you going to travel with?",
    "What are you going to do there?",
    "How are you going to travel?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "I'm going to",
    "I'd like to",
    "I think it will be",
    "We're going to travel by"
   ]
  },
  {
   "id": "s-a2-6",
   "title": "Describe your home",
   "prompt": "Describe your home. Talk about the rooms, your favourite room and what you do there.",
   "vi": "M├┤ tß║ú nh├á bß║ín: c├│ nhß╗»ng ph├▓ng n├áo, ph├▓ng bß║ín th├¡ch nhß║Ñt v├á bß║ín l├ám g├¼ ß╗ƒ ─æ├│. D├╣ng There is / There are.",
   "qs": [
    "Do you live in a house or a flat?",
    "How many rooms are there?",
    "What is your favourite room? Why?",
    "What do you do there?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "I live in",
    "There is",
    "There are",
    "My favourite room is",
    "because",
    "I usually"
   ]
  },
  {
   "id": "s-a2-7",
   "title": "Your favourite food",
   "prompt": "Talk about your favourite food or dish.",
   "vi": "N├│i vß╗ü m├│n ─ân y├¬u th├¡ch: l├á m├│n g├¼, c├│ nguy├¬n liß╗çu g├¼, ─ân khi n├áo, v├¼ sao th├¡ch.",
   "qs": [
    "What is your favourite dish?",
    "What is in it?",
    "When and where do you usually eat it?",
    "Why do you like it?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "My favourite dish is",
    "It's made with",
    "I usually eat it",
    "It tastes",
    "I like it because"
   ]
  },
  {
   "id": "s-a2-8",
   "title": "Describe a friend",
   "prompt": "Describe a good friend. Talk about what they look like, their personality and what you do together.",
   "vi": "M├┤ tß║ú bß║ín th├ón: ngoß║íi h├¼nh (He/She has...), t├¡nh c├ích (He/She is...), c├íc hoß║ít ─æß╗Öng l├ám c├╣ng nhau.",
   "qs": [
    "Who is your friend and how did you meet?",
    "What does he or she look like?",
    "What is he or she like?",
    "What do you do together?"
   ],
   "prep": 30,
   "time": 60,
   "target": 45,
   "phrases": [
    "My best friend is",
    "We met",
    "He has / She has",
    "He is very",
    "We often",
    "together"
   ]
  }
 ],
 "B1": [
  {
   "id": "s-b1-1",
   "title": "A memorable experience",
   "prompt": "Describe an experience you will never forget.",
   "vi": "Kß╗â mß╗Öt trß║úi nghiß╗çm ─æ├íng nhß╗¢: khi n├áo, ß╗ƒ ─æ├óu, chuyß╗çn g├¼ xß║úy ra, v├¼ sao ─æ├íng nhß╗¢. D├╣ng qu├í khß╗⌐ ─æ╞ín v├á qu├í khß╗⌐ tiß║┐p diß╗àn.",
   "qs": [
    "When and where did it happen?",
    "Who were you with?",
    "What happened?",
    "Why was it memorable?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "I'll never forget the time",
    "It happened about",
    "At first",
    "but then",
    "The best part was",
    "Looking back",
    "It taught me that"
   ]
  },
  {
   "id": "s-b1-2",
   "title": "Plans and ambitions",
   "prompt": "Talk about your plans for the next year and your ambitions for the future.",
   "vi": "N├│i vß╗ü kß║┐ hoß║ích v├á mß╗Ñc ti├¬u. D├╣ng be going to, hope to, plan to v├á c├óu ─æiß╗üu kiß╗çn loß║íi 1.",
   "qs": [
    "What are your plans for the next year?",
    "What would you like to achieve in five years?",
    "What might make your plans difficult?",
    "How are you preparing now?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "I'm planning to",
    "I'm hoping to",
    "If everything goes well",
    "One thing that might be difficult",
    "At the moment"
   ]
  },
  {
   "id": "s-b1-3",
   "title": "Describe a picture: a city park",
   "prompt": "Describe the picture. Say what you can see, what the people are doing and how they might feel.",
   "vi": "M├┤ tß║ú tranh: vß╗ï tr├¡ (on the left, in the background), h├ánh ─æß╗Öng (th├¼ hiß╗çn tß║íi tiß║┐p diß╗àn), suy ─æo├ín (It looks like..., They seem...).",
   "pic": "≡ƒî│ ΓÿÇ∩╕Å ≡ƒî│\n≡ƒº║≡ƒæ¿ΓÇì≡ƒæ⌐ΓÇì≡ƒæº   ≡ƒÅâΓÇìΓÖÇ∩╕Å≡ƒÉò\n≡ƒÜ▓≡ƒºÆ   ≡ƒìª≡ƒæ╡",
   "caption": "A sunny afternoon in a city park: a family is having a picnic, a woman is running with her dog, a child is riding a bike and an old woman is buying an ice cream.",
   "qs": [
    "What can you see in the picture?",
    "What are the people doing?",
    "How do you think they feel?",
    "Would you like to be there? Why?"
   ],
   "prep": 45,
   "time": 75,
   "target": 75,
   "phrases": [
    "In the picture, I can see",
    "On the left",
    "On the right",
    "In the background",
    "It looks like",
    "They seem to be",
    "I think they feel"
   ]
  },
  {
   "id": "s-b1-4",
   "title": "Give your opinion: school uniforms",
   "prompt": "Should students wear school uniforms? Give your opinion with reasons.",
   "vi": "N├¬u ├╜ kiß║┐n c├│ l├╜ do: In my opinion..., One reason is..., Some people think... but...",
   "qs": [
    "Do you think students should wear uniforms?",
    "Give two reasons for your opinion.",
    "What do people who disagree say?",
    "What is your final opinion?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "In my opinion",
    "I believe that",
    "One reason is that",
    "Another reason is",
    "Some people think",
    "All in all"
   ]
  },
  {
   "id": "s-b1-5",
   "title": "Describe a picture: a family kitchen",
   "prompt": "Describe the picture and say what you think is happening.",
   "vi": "M├┤ tß║ú tranh v├á ─æo├ín xem chuyß╗çn g├¼ ─æang diß╗àn ra. D├╣ng might/may/probably ─æß╗â suy ─æo├ín.",
   "pic": "≡ƒì│≡ƒÑù≡ƒæ⌐ΓÇì≡ƒì│\n≡ƒæª≡ƒô▒   ≡ƒæº≡ƒôÜ\n≡ƒÉê   ≡ƒòû",
   "caption": "A family kitchen in the evening: a mother is cooking dinner, a boy is looking at his phone, a girl is doing her homework at the table and a cat is sleeping on a chair.",
   "qs": [
    "What can you see?",
    "What are the people doing?",
    "What do you think will happen next?",
    "Is this similar to your home in the evening?"
   ],
   "prep": 45,
   "time": 75,
   "target": 75,
   "phrases": [
    "In the picture, I can see",
    "It looks like",
    "She might be",
    "He's probably",
    "I think they're going to",
    "This reminds me of"
   ]
  },
  {
   "id": "s-b1-6",
   "title": "A problem you solved",
   "prompt": "Talk about a problem you had and how you solved it.",
   "vi": "Kß╗â vß╗ü mß╗Öt vß║Ñn ─æß╗ü bß║ín tß╗½ng gß║╖p v├á c├ích giß║úi quyß║┐t. D├╣ng qu├í khß╗⌐ ─æ╞ín, qu├í khß╗⌐ tiß║┐p diß╗àn v├á c├íc tß╗½: so, because, in the end.",
   "qs": [
    "What was the problem?",
    "How did you feel?",
    "What did you do to solve it?",
    "What did you learn?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "A while ago",
    "The problem was that",
    "I felt",
    "so I decided to",
    "In the end",
    "I learned that"
   ]
  },
  {
   "id": "s-b1-7",
   "title": "Technology in your life",
   "prompt": "How has technology changed your daily life? Give examples.",
   "vi": "C├┤ng nghß╗ç ─æ├ú thay ─æß╗òi cuß╗Öc sß╗æng hß║▒ng ng├áy cß╗ºa bß║ín thß║┐ n├áo? D├╣ng th├¼ hiß╗çn tß║íi ho├án th├ánh v├á used to.",
   "qs": [
    "Which devices or apps do you use most?",
    "How has technology changed the way you study or work?",
    "What did people use to do before?",
    "Are there any disadvantages?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "I use ... every day",
    "Technology has changed",
    "I used to",
    "Nowadays",
    "On the other hand",
    "For example"
   ]
  },
  {
   "id": "s-b1-8",
   "title": "Compare two ways to travel",
   "prompt": "Compare travelling by train and travelling by plane. Which do you prefer and why?",
   "vi": "So s├ính ─æi t├áu v├á ─æi m├íy bay: tß╗æc ─æß╗Ö, gi├í, sß╗▒ thoß║úi m├íi, m├┤i tr╞░ß╗¥ng. D├╣ng so s├ính h╞ín v├á whereas.",
   "qs": [
    "What are the advantages of the train?",
    "What are the advantages of the plane?",
    "Which is better for the environment?",
    "Which do you prefer and why?"
   ],
   "prep": 45,
   "time": 90,
   "target": 90,
   "phrases": [
    "is faster than",
    "is more comfortable than",
    "whereas",
    "The main advantage of",
    "I prefer ... because",
    "It depends on"
   ]
  }
 ],
 "B2": [
  {
   "id": "s-b2-1",
   "title": "Compare: city life vs country life",
   "prompt": "Compare living in a big city with living in the countryside. Which would you choose and why?",
   "vi": "So s├ính hai lß╗▒a chß╗ìn: d├╣ng whereas, while, on the other hand, compared with. Kß║┐t th├║c bß║▒ng lß╗▒a chß╗ìn cß╗ºa bß║ín v├á l├╜ do.",
   "qs": [
    "What are the advantages of city life?",
    "What are the advantages of country life?",
    "What are the main drawbacks of each?",
    "Which would you choose, and why?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "Compared with",
    "whereas",
    "On the other hand",
    "One major advantage",
    "The main drawback",
    "If I had to choose",
    "Personally, I'd"
   ]
  },
  {
   "id": "s-b2-2",
   "title": "Defend your opinion: social media and teenagers",
   "prompt": "Some people say social media does more harm than good for teenagers. Do you agree? Defend your opinion with reasons and examples.",
   "vi": "Bß║úo vß╗ç quan ─æiß╗âm: n├¬u r├╡ ├╜ kiß║┐n, 2ΓÇô3 l├╜ do k├¿m v├¡ dß╗Ñ, phß║ún b├íc ├╜ kiß║┐n tr├íi chiß╗üu (While it is true that..., I would argue that...).",
   "qs": [
    "What is your position?",
    "What are your main reasons?",
    "Can you give an example?",
    "How would you answer someone who disagrees?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "I strongly believe",
    "The main reason is",
    "For instance",
    "While it is true that",
    "I would argue that",
    "That said",
    "To sum up"
   ]
  },
  {
   "id": "s-b2-3",
   "title": "Pros and cons: working from home",
   "prompt": "Discuss the advantages and disadvantages of working or studying from home.",
   "vi": "Thß║úo luß║¡n ╞░u v├á nh╞░ß╗úc ─æiß╗âm, d├╣ng tß╗½ nß╗æi n├óng cao: furthermore, nevertheless, as a result. ─É╞░a ra kß║┐t luß║¡n c├ón bß║▒ng.",
   "qs": [
    "What are the main benefits?",
    "What problems can it cause?",
    "Who benefits most, and who least?",
    "What is your overall view?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "One clear benefit",
    "Furthermore",
    "However",
    "Nevertheless",
    "As a result",
    "On balance",
    "Overall"
   ]
  },
  {
   "id": "s-b2-4",
   "title": "Compare two pictures: holidays",
   "prompt": "Compare these two holiday pictures. Which kind of holiday is better for relaxing, and which is better for learning?",
   "vi": "So s├ính hai tranh: ─æiß╗âm giß╗æng v├á kh├íc, suy ─æo├ín cß║úm x├║c (They must be..., It might be...), rß╗ôi n├¬u ├╜ kiß║┐n.",
   "pic": "≡ƒÅû∩╕Å≡ƒì╣≡ƒÿÄ     |     ≡ƒÅ¢∩╕Å≡ƒù║∩╕Å≡ƒô╕\nBeach resort     |     City sightseeing",
   "caption": "Picture A: people relaxing on a beach with drinks. Picture B: tourists with a map and cameras visiting historic buildings in a busy city.",
   "qs": [
    "What do the two pictures have in common?",
    "How are they different?",
    "How might the people feel?",
    "Which holiday would you prefer and why?"
   ],
   "prep": 60,
   "time": 90,
   "target": 120,
   "phrases": [
    "Both pictures show",
    "whereas",
    "In the first picture",
    "In contrast",
    "They must be",
    "They might be feeling",
    "I'd personally prefer"
   ]
  },
  {
   "id": "s-b2-5",
   "title": "Discuss: should university be free?",
   "prompt": "Should university education be free for everyone? Discuss the arguments on both sides and give your own opinion.",
   "vi": "Thß║úo luß║¡n hai ph├¡a cß╗ºa vß║Ñn ─æß╗ü x├ú hß╗Öi; d├╣ng c├óu ─æiß╗üu kiß╗çn loß║íi 2/3 v├á cß║Ñu tr├║c nhß║Ñn mß║ính (What matters most is...).",
   "qs": [
    "What are the arguments for free university?",
    "What are the arguments against?",
    "What could happen if it were free?",
    "What is your opinion?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "Supporters argue that",
    "Critics point out that",
    "If university were free",
    "What matters most is",
    "It could be argued that",
    "In conclusion"
   ]
  },
  {
   "id": "s-b2-6",
   "title": "Discuss: AI and the future of work",
   "prompt": "How will artificial intelligence change the world of work in the next twenty years? Discuss opportunities and risks.",
   "vi": "Thß║úo luß║¡n vß╗ü AI v├á viß╗çc l├ám: c╞í hß╗Öi, rß╗ºi ro, giß║úi ph├íp. D├╣ng t╞░╞íng lai tiß║┐p diß╗àn/ho├án th├ánh v├á tß╗½ nß╗æi n├óng cao.",
   "qs": [
    "Which jobs might change the most?",
    "What opportunities could AI create?",
    "What are the main risks?",
    "How should people prepare?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "In the next twenty years",
    "is likely to",
    "One major opportunity",
    "The main risk is",
    "Unless we",
    "It is essential that"
   ]
  },
  {
   "id": "s-b2-7",
   "title": "Defend your opinion: tourism",
   "prompt": "Some people believe that popular tourist destinations should limit the number of visitors. Do you agree? Defend your view.",
   "vi": "Bß║úo vß╗ç quan ─æiß╗âm vß╗ü viß╗çc giß╗¢i hß║ín kh├ích du lß╗ïch. ─É╞░a v├¡ dß╗Ñ cß╗Ñ thß╗â v├á phß║ún biß╗çn ├╜ kiß║┐n tr├íi chiß╗üu.",
   "qs": [
    "What is your position?",
    "What problems does overtourism cause?",
    "What would happen if visitors were limited?",
    "How would you respond to someone who disagrees?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "I firmly believe",
    "A clear example is",
    "If visitors were limited",
    "Admittedly,",
    "However, I would argue",
    "All things considered"
   ]
  },
  {
   "id": "s-b2-8",
   "title": "Describe a change you would make",
   "prompt": "If you could change one thing about the education system in your country, what would it be and why?",
   "vi": "Nß║┐u ─æ╞░ß╗úc thay ─æß╗òi mß╗Öt ─æiß╗üu trong gi├ío dß╗Ñc, bß║ín sß║╜ thay ─æß╗òi g├¼ v├á v├¼ sao? D├╣ng c├óu ─æiß╗üu kiß╗çn loß║íi 2 v├á wish.",
   "qs": [
    "What would you change?",
    "Why is this change necessary?",
    "What effects would it have?",
    "What difficulties might there be?"
   ],
   "prep": 60,
   "time": 120,
   "target": 150,
   "phrases": [
    "If I could change",
    "I wish",
    "This would mean that",
    "The main benefit would be",
    "One possible obstacle",
    "In the long run"
   ]
  }
 ]
};

/** Better word choices suggested after speaking: [basic, better alternatives] */
export const better: ByLevel<[string, string][]> = {
 "A2": [
  [
   "good",
   "great, nice, lovely"
  ],
  [
   "bad",
   "terrible, awful"
  ],
  [
   "big",
   "large, huge"
  ],
  [
   "very good",
   "excellent, amazing"
  ],
  [
   "like",
   "enjoy, love"
  ],
  [
   "happy",
   "glad, pleased"
  ],
  [
   "nice",
   "beautiful, friendly, delicious"
  ]
 ],
 "B1": [
  [
   "good",
   "great, useful, enjoyable"
  ],
  [
   "bad",
   "unpleasant, disappointing"
  ],
  [
   "I think",
   "In my opinion, I believe"
  ],
  [
   "a lot of",
   "plenty of, lots of"
  ],
  [
   "very",
   "really, extremely"
  ],
  [
   "but",
   "however, although"
  ],
  [
   "so",
   "therefore, that's why"
  ],
  [
   "thing",
   "item, aspect, idea"
  ]
 ],
 "B2": [
  [
   "very important",
   "essential, crucial, vital"
  ],
  [
   "I think",
   "From my point of view, I would argue that"
  ],
  [
   "a lot of",
   "a considerable number of, a great deal of"
  ],
  [
   "good",
   "beneficial, valuable, positive"
  ],
  [
   "bad",
   "harmful, damaging, detrimental"
  ],
  [
   "problem",
   "issue, challenge, drawback"
  ],
  [
   "so",
   "consequently, as a result"
  ],
  [
   "also",
   "furthermore, moreover, in addition"
  ],
  [
   "get",
   "obtain, gain, achieve"
  ],
  [
   "big",
   "significant, substantial"
  ]
 ]
};

/** Pronunciation sets (difficult sounds for Vietnamese learners) */
export const pron: PronunciationSet[] = [
 {
  "id": "p-final",
  "title": "Final consonants",
  "icon": "≡ƒöÜ",
  "tip": "Pronounce the last sound of each word clearly: cat /t/, bag /g/, five /v/, rice /s/.",
  "vi": "Ng╞░ß╗¥i Viß╗çt hay nuß╗æt ├óm cuß╗æi. H├úy bß║¡t r├╡ ├óm cuß╗æi /t/, /d/, /k/, /s/, /v/... V├¡ dß╗Ñ: ΓÇ£likeΓÇ¥ kh├íc ΓÇ£lightΓÇ¥, ΓÇ£riceΓÇ¥ kh├íc ΓÇ£ryeΓÇ¥.",
  "items": [
   "cat ┬╖ bag ┬╖ five ┬╖ rice ┬╖ desk",
   "I like that black cat.",
   "She bought a big red bag.",
   "Give me five minutes, please.",
   "We had rice and fish for lunch."
  ]
 },
 {
  "id": "p-ends",
  "title": "Endings: -s and -ed",
  "icon": "Γ₧ò",
  "tip": "-s: /s/ (books), /z/ (dogs), /╔¬z/ (buses). -ed: /t/ (walked), /d/ (played), /╔¬d/ (wanted).",
  "vi": "─Éß╗½ng bß╗Å ─æu├┤i -s v├á -ed. ΓÇ£He walksΓÇ¥ kh├íc ΓÇ£he walkΓÇ¥. ─Éu├┤i -ed sau t/d ─æß╗ìc l├á /╔¬d/: wanted, needed.",
  "items": [
   "books ┬╖ dogs ┬╖ buses ┬╖ walked ┬╖ played ┬╖ wanted",
   "She walks to school and plays the piano.",
   "I washed the dishes and watched a film.",
   "He wanted to visit his friends.",
   "My parents worked in two different cities."
  ]
 },
 {
  "id": "p-th",
  "title": "/╬╕/ and /├░/ (th)",
  "icon": "≡ƒæà",
  "tip": "Put your tongue between your teeth. /╬╕/ is voiceless (think, three), /├░/ is voiced (this, mother).",
  "vi": "├ém ΓÇ£thΓÇ¥ kh├┤ng phß║úi /t/ hay /d/ hay /s/. ─Éß║╖t l╞░ß╗íi giß╗»a hai h├ám r─âng rß╗ôi thß╗òi h╞íi: think Γëá sink, they Γëá day.",
  "items": [
   "think ┬╖ three ┬╖ thank ┬╖ this ┬╖ that ┬╖ mother",
   "I think there are three things.",
   "Thank you for this lovely birthday.",
   "My mother and father live together.",
   "Both brothers thought about the weather."
  ]
 },
 {
  "id": "p-sh",
  "title": "/╩â/ and /s/",
  "icon": "≡ƒñ½",
  "tip": "/s/: teeth close, air through the front (see). /╩â/: lips rounded forward (she).",
  "vi": "Ph├ón biß╗çt /s/ v├á /╩â/: see Γëá she, sip Γëá ship, sea Γëá she. Vß╗¢i /╩â/ h├úy chu m├┤i ra tr╞░ß╗¢c.",
  "items": [
   "see ┬╖ she ┬╖ sip ┬╖ ship ┬╖ sell ┬╖ shell",
   "She sells shells by the sea.",
   "Please wash the dishes in the sink.",
   "The ship is in the station.",
   "Sean showed us his special shoes."
  ]
 },
 {
  "id": "p-stress",
  "title": "Word stress",
  "icon": "≡ƒÄ»",
  "tip": "English words have one strong syllable. Say it louder and longer: PHOtograph, phoTOgraphy, photoGRAPHic.",
  "vi": "Tiß║┐ng Anh c├│ trß╗ìng ├óm. ├ém tiß║┐t in hoa ─æß╗ìc to v├á d├ái h╞ín. ─Éß╗ìc sai trß╗ìng ├óm khiß║┐n ng╞░ß╗¥i nghe kh├│ hiß╗âu d├╣ ph├ít ├óm ─æ├║ng tß╗½ng ├óm.",
  "items": [
   {
    "t": "photograph photography photographic",
    "s": "PHO-to-graph ┬╖ pho-TO-gra-phy ┬╖ pho-to-GRAPH-ic"
   },
   {
    "t": "important interesting comfortable",
    "s": "im-POR-tant ┬╖ IN-te-rest-ing ┬╖ COM-for-ta-ble"
   },
   {
    "t": "economy economic environment",
    "s": "e-CO-no-my ┬╖ e-co-NO-mic ┬╖ en-VI-ron-ment"
   },
   {
    "t": "The vegetables are comfortable and interesting.",
    "s": "VEG-e-ta-bles ┬╖ COM-for-ta-ble ┬╖ IN-te-rest-ing"
   },
   {
    "t": "I need information about the university.",
    "s": "in-for-MA-tion ┬╖ u-ni-VER-si-ty"
   }
  ]
 }
];
