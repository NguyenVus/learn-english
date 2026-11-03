// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { Guide, GuideMap } from "../types";

export const guides: Guide[] = [
 {
  "id": "gd-read-skills",
  "skill": "reading",
  "icon": "🔎",
  "title": "Reading skills: skimming, scanning and guessing words",
  "intro": "<p>Good readers do not read every word at the same speed. They change the way they read depending on the task.</p><ul><li><b>Skimming</b> – reading quickly to get the <b>general idea</b> (gist). Read the title, the first and last paragraph, and the first sentence of each paragraph.</li><li><b>Scanning</b> – looking quickly for <b>specific information</b>: names, numbers, dates, key words. Move your eyes fast and stop only when you find the word.</li><li><b>Reading for detail</b> – reading a small part carefully to understand exactly what it says.</li><li><b>Guessing meaning from context</b> – use the words around an unknown word, its position (noun? verb? adjective?) and word parts (un-, -less, -ful, -tion).</li></ul>",
  "steps": [
   "Read the title and look at any pictures – predict the topic.",
   "Skim the whole text in 1–2 minutes. What is each paragraph about?",
   "Read the questions and underline key words.",
   "Scan the text to find where each answer is.",
   "Read that part carefully before you answer.",
   "Don't stop at every unknown word – guess, then check later."
  ],
  "traps": [
   "Reading slowly from the first word to the last and running out of time.",
   "Translating every word into Vietnamese.",
   "Choosing an answer just because it contains the same word as the text."
  ],
  "vi": "Đọc lướt (skimming) để nắm ý chính, đọc quét (scanning) để tìm thông tin cụ thể (tên, số, ngày). Đừng dịch từng từ. Đoán nghĩa từ mới dựa vào ngữ cảnh, vị trí trong câu và tiền tố/hậu tố (un-, -less, -ful, -tion…).",
  "example": {
   "ctx": "The village was so isolated that the nearest shop was a three-hour walk away.",
   "q": "What does “isolated” probably mean?",
   "a": "far away from other places",
   "why": "The second part of the sentence (a three-hour walk to the nearest shop) explains the meaning."
  },
  "practice": [
   {
    "t": "mc",
    "ctx": "After the long hike, we were famished, so we ate everything on the table in ten minutes.",
    "q": "“Famished” probably means…",
    "o": [
     "very tired",
     "very hungry",
     "very happy"
    ],
    "a": 1,
    "x": "They ate everything quickly → very hungry."
   },
   {
    "t": "mc",
    "ctx": "Unlike his talkative sister, Nam is quite reserved and rarely shares his feelings.",
    "q": "“Reserved” probably means…",
    "o": [
     "quiet and private",
     "angry",
     "very funny"
    ],
    "a": 0,
    "x": "“Unlike his talkative sister” shows the opposite of talkative."
   },
   {
    "t": "mc",
    "q": "You want to find the year a museum opened. Which strategy is best?",
    "o": [
     "Skimming",
     "Scanning for a number",
     "Reading every word slowly"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-read-mc",
  "skill": "reading",
  "icon": "🔘",
  "title": "Multiple choice questions",
  "intro": "<p>You read a question and choose the best answer from three or four options. The questions usually follow the order of the text. Wrong options (<b>distractors</b>) often use words from the text but change the meaning.</p>",
  "steps": [
   "Read the question stem first, without looking at the options – what exactly is it asking?",
   "Find the part of the text that answers it (scan for key words or synonyms).",
   "Read that part carefully and form your own answer.",
   "Now compare with the options. Choose the one with the same meaning.",
   "Check why the other options are wrong: not mentioned, opposite, or only partly true."
  ],
  "traps": [
   "Choosing the option with the same words as the text (word matching) – look for the same MEANING.",
   "Options that are true in real life but not stated in the text.",
   "Options that are only half correct (e.g. right person, wrong time).",
   "Small words that change everything: not, only, always, never, all, some."
  ],
  "vi": "Đọc câu hỏi trước, tìm đoạn chứa thông tin, tự trả lời rồi mới so với các lựa chọn. Cẩn thận phương án “bẫy” lặp lại từ trong bài nhưng sai nghĩa, hoặc chỉ đúng một nửa. Chú ý các từ: not, only, always, never.",
  "example": {
   "ctx": "Although Mai loves cooking, she rarely has time on weekdays, so she usually cooks big meals on Sundays.",
   "q": "When does Mai usually cook big meals? (a) on weekdays (b) on Sundays (c) every day",
   "a": "(b) on Sundays",
   "why": "Option (a) uses the word “weekdays” from the text, but the text says she rarely has time then."
  },
  "practice": [
   {
    "t": "mc",
    "ctx": "The library used to close at 6 p.m., but since January it has stayed open until 9 p.m. on weekdays.",
    "q": "What time does the library close on weekdays now?",
    "o": [
     "6 p.m.",
     "9 p.m.",
     "It is open all night."
    ],
    "a": 1,
    "x": "“used to” = past; “since January … until 9 p.m.” = now."
   },
   {
    "t": "mc",
    "ctx": "Tom wanted to study medicine, but his grades in chemistry weren't high enough, so he chose nursing instead.",
    "q": "What does Tom study?",
    "o": [
     "Medicine",
     "Chemistry",
     "Nursing"
    ],
    "a": 2,
    "x": "Medicine and chemistry are distractors from the text."
   },
   {
    "t": "mc",
    "ctx": "Few visitors know that the castle's tower can be climbed; most just walk around the gardens.",
    "q": "What do most visitors do?",
    "o": [
     "Climb the tower",
     "Walk around the gardens",
     "Ignore the castle"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-read-tfng",
  "skill": "reading",
  "icon": "✅",
  "title": "True / False / Not Given",
  "intro": "<p>You decide if a statement agrees with the text.</p><ul><li><b>True</b> – the text says the same thing (often with different words).</li><li><b>False</b> – the text says the <b>opposite</b>, or something that makes the statement impossible.</li><li><b>Not Given</b> – the text does <b>not say</b>. You cannot know if it is true or false from the text.</li></ul><p>At A2 you usually only have True / False. From B1 you also need Not Given.</p>",
  "steps": [
   "Read the statement and underline key words (names, numbers, and words like all, always, only, more).",
   "Scan the text for the matching part. Statements follow the order of the text.",
   "Compare carefully: same meaning → True; opposite → False.",
   "If you can't find the information at all, or only part of it, think “Not Given”.",
   "Use only the text – not your own knowledge."
  ],
  "traps": [
   "Using your own knowledge: “Smoking is bad for you” may be true in life but Not Given in the text.",
   "Confusing False and Not Given: False needs the text to say the opposite.",
   "Missing qualifiers: “some students” in the text vs “all students” in the statement = False.",
   "Comparisons: the text says A is popular; the statement says A is MORE popular than B → often Not Given."
  ],
  "vi": "True: bài nói giống ý (có thể dùng từ khác). False: bài nói ngược lại. Not Given: bài KHÔNG đề cập. Không dùng hiểu biết cá nhân. Cẩn thận các từ: all/some, always/sometimes, more/less – chỉ cần khác một từ là có thể False.",
  "example": {
   "ctx": "The café opened in 2019. It is popular with students because of its cheap prices.",
   "q": "(1) The café is cheap. (2) The café opened in 2020. (3) The café has free Wi-Fi.",
   "a": "(1) True (2) False (3) Not Given",
   "why": "Wi-Fi is not mentioned at all, so it is Not Given, not False."
  },
  "practice": [
   {
    "t": "tfng",
    "ctx": "Some students in the class walk to school, but most come by bus.",
    "q": "All the students take the bus.",
    "a": "F",
    "x": "“most”, not “all”, and some walk."
   },
   {
    "t": "tfng",
    "ctx": "The museum is open every day except Monday. Entry is free for children.",
    "q": "Adults pay ten dollars to enter.",
    "a": "NG",
    "x": "The text does not say how much adults pay."
   },
   {
    "t": "tfng",
    "ctx": "Linh started learning the piano when she was six and still practises every evening.",
    "q": "Linh has played the piano since she was a child.",
    "a": "T"
   },
   {
    "t": "tfng",
    "ctx": "The new phone is lighter than the old model, although its battery is smaller.",
    "q": "The new phone has a bigger battery than the old one.",
    "a": "F"
   }
  ]
 },
 {
  "id": "gd-read-gap",
  "skill": "reading",
  "icon": "✏️",
  "title": "Gap-fill and sentence completion",
  "intro": "<p>You complete sentences or notes with a word (or words) from the text. The sentence usually <b>paraphrases</b> the text, so you need to find the matching idea first.</p>",
  "steps": [
   "Read the sentence and predict the type of word: noun? verb? number? plural?",
   "Look at the words before and after the gap (grammar clues: a/an, the, to, -s).",
   "Find the part of the text with the same meaning.",
   "Copy the word(s) exactly – check spelling.",
   "Re-read the complete sentence: is it grammatically correct and does it make sense?"
  ],
  "traps": [
   "Wrong form: “two ___” needs a plural noun.",
   "Spelling mistakes – a wrong spelling is usually marked wrong.",
   "Writing more words than allowed (e.g. “NO MORE THAN TWO WORDS”).",
   "Choosing a word that fits grammatically but not the meaning of the text."
  ],
  "vi": "Đoán loại từ cần điền (danh từ, động từ, số…), dựa vào từ đứng trước/sau chỗ trống. Tìm đoạn có ý tương đương (thường được diễn đạt lại), chép đúng chính tả. Đọc lại cả câu để kiểm tra ngữ pháp.",
  "example": {
   "ctx": "Visitors must buy their tickets online at least two days before their visit.",
   "q": "Tickets have to be bought ___ in advance.",
   "a": "online",
   "why": "“must buy … online” = “have to be bought online”. The gap needs an adverb of place/way."
  },
  "practice": [
   {
    "t": "gap",
    "ctx": "The bakery sells about three hundred loaves of bread every morning.",
    "q": "Each morning the bakery sells around 300 ___ of bread.",
    "a": "loaves"
   },
   {
    "t": "gap",
    "ctx": "Because of the storm, the concert was moved from the park to the town hall.",
    "q": "The concert took place in the town ___ because of bad weather.",
    "a": "hall"
   },
   {
    "t": "gap",
    "ctx": "Participants felt much more relaxed after only two weeks of daily meditation.",
    "q": "After two weeks, participants felt more ___.",
    "a": "relaxed"
   }
  ]
 },
 {
  "id": "gd-read-match",
  "skill": "reading",
  "icon": "🔗",
  "title": "Matching (people, information, paragraphs)",
  "intro": "<p>You match items (people, places, statements) with information in the text. There may be <b>more options than items</b>, and the information is often <b>not in the same order</b> as the questions.</p>",
  "steps": [
   "Read all the options first and underline the key idea in each.",
   "Read the text section by section (e.g. each person's paragraph).",
   "After each section, check which option matches its meaning.",
   "Do the easy ones first; then the remaining options are fewer.",
   "Check that each option is used only once (unless the instructions say otherwise)."
  ],
  "traps": [
   "Matching by a single shared word instead of the whole idea.",
   "Two people mention the same topic, but only one gives the exact opinion.",
   "Forgetting that some options are extra and not used."
  ],
  "vi": "Đọc hết các lựa chọn trước và gạch ý chính. Đọc từng đoạn rồi đối chiếu. Làm câu dễ trước để loại trừ. Thông tin thường không theo thứ tự và có thể có lựa chọn thừa.",
  "example": {
   "ctx": "Ana: “I prefer trains because I can read.” Ben: “I always fly – it's quicker.”",
   "q": "Who cares most about speed?",
   "a": "Ben",
   "why": "“quicker” = speed. Ana talks about reading, not speed."
  },
  "practice": [
   {
    "t": "match",
    "ctx": "Kim: I hate crowds, so I go to the beach in winter. — Leo: I go anywhere with good street food. — Mia: I only travel if I can practise my Spanish.",
    "q": "Match each person with what matters to them.",
    "p": [
     [
      "Kim",
      "avoiding crowds"
     ],
     [
      "Leo",
      "food"
     ],
     [
      "Mia",
      "languages"
     ]
    ]
   }
  ]
 },
 {
  "id": "gd-read-head",
  "skill": "reading",
  "icon": "🏷️",
  "title": "Matching headings (B2)",
  "intro": "<p>You choose the best heading for each paragraph from a list. There are usually <b>extra headings</b> you don't need. A heading summarises the <b>main idea of the whole paragraph</b>, not one detail.</p>",
  "steps": [
   "Read all the headings and notice how they differ (e.g. causes vs solutions vs history).",
   "For each paragraph, read the first one or two sentences and the last sentence – the topic sentence is usually there.",
   "Ask: what is the paragraph mainly about? Say it in a few words.",
   "Choose the heading with the same main idea.",
   "Leave difficult paragraphs until the end – fewer headings will remain."
  ],
  "traps": [
   "Choosing a heading because one word from it appears in the paragraph.",
   "Choosing a heading that describes only one example or detail.",
   "Headings that are too general or about a different time (past vs future)."
  ],
  "vi": "Tiêu đề phải bao quát Ý CHÍNH của cả đoạn, không phải một chi tiết. Đọc câu đầu (câu chủ đề) và câu cuối của đoạn. Cẩn thận tiêu đề chứa từ giống trong đoạn nhưng chỉ nói về một chi tiết. Luôn có tiêu đề thừa.",
  "example": {
   "ctx": "“Many cities now offer free bikes. However, the schemes are expensive, and bikes are often stolen or damaged. Some cities have closed their programmes.”",
   "q": "Best heading: (a) The history of bicycles (b) Problems with bike-sharing (c) Why cycling is healthy",
   "a": "(b) Problems with bike-sharing",
   "why": "Most of the paragraph is about costs, theft and closures – problems."
  },
  "practice": [
   {
    "t": "mc",
    "ctx": "“Solar panels have become far cheaper over the last decade. In some countries, solar power is now the cheapest source of new electricity, and households can save money within a few years.”",
    "q": "Choose the best heading.",
    "o": [
     "The falling cost of solar energy",
     "How solar panels are made",
     "The dangers of electricity"
    ],
    "a": 0
   },
   {
    "t": "mc",
    "ctx": "“To reduce stress, experts suggest regular exercise, enough sleep and limiting time on social media. Even ten minutes of walking can help.”",
    "q": "Choose the best heading.",
    "o": [
     "Causes of stress",
     "Simple ways to manage stress",
     "Why social media is popular"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-listen-general",
  "skill": "listening",
  "icon": "👂",
  "title": "Listening skills: predict, listen for key words, don't panic",
  "intro": "<p>In listening you cannot go back like in reading, so preparation is very important.</p><ul><li><b>Predict</b> before you listen: who is speaking, where, about what? What kind of answer (number, place, reason)?</li><li><b>Listen for signposts</b>: <i>first, but, however, actually, the main reason, finally</i> – they show where important information comes.</li><li><b>Expect paraphrase</b>: the recording rarely uses the same words as the question.</li><li><b>Speakers often change their minds</b>: <i>“Let's meet at six… no, actually, seven is better.”</i></li></ul>",
  "steps": [
   "Read the questions before you listen and underline key words.",
   "Predict possible answers and the type of information.",
   "On the first listening, answer what you can – don't stop on one question.",
   "On the second listening, check and complete.",
   "Use the transcript afterwards to find what you missed and listen again."
  ],
  "traps": [
   "Writing the first number or name you hear – it may be corrected later.",
   "Panicking when you miss one answer and then missing the next ones too.",
   "Choosing an option because you heard the same word."
  ],
  "vi": "Đọc câu hỏi trước và đoán nội dung. Chú ý các từ báo hiệu (but, actually, however, finally). Người nói hay đổi ý (“no, actually…”). Bỏ lỡ một câu thì bỏ qua và nghe câu tiếp theo, đừng hoảng. Sau khi làm bài, đọc transcript và nghe lại.",
  "example": {
   "ctx": "🎧 “The meeting was planned for Tuesday, but the manager is away, so we've moved it to Thursday.”",
   "q": "When is the meeting?",
   "a": "Thursday",
   "why": "Tuesday is mentioned first, but “but … moved it to Thursday” gives the final answer."
  },
  "practice": [
   {
    "t": "mc",
    "say": "I was going to take the train at nine, but it was cancelled, so I caught the ten o'clock bus instead.",
    "q": "🎧 How did the speaker travel?",
    "o": [
     "By train at nine",
     "By bus at ten",
     "By train at ten"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "say": "The tickets are usually twenty dollars, but students get half price, so I only paid ten.",
    "q": "🎧 How much did the speaker pay?",
    "o": [
     "Twenty dollars",
     "Ten dollars",
     "Fifteen dollars"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-listen-mc",
  "skill": "listening",
  "icon": "🔘",
  "title": "Listening: multiple choice",
  "intro": "<p>You choose the right option while listening. Often <b>all options are mentioned</b> in the recording, but only one answers the question.</p>",
  "steps": [
   "Before listening, read the question and the options. Think about how they are different.",
   "Listen for the part that answers the question (questions follow the order of the recording).",
   "Pay attention to words like but, actually, in the end, I'd rather.",
   "Cross out options that are mentioned but rejected.",
   "Check your answer on the second listening."
  ],
  "traps": [
   "Choosing the option that is mentioned first.",
   "Choosing an option that is mentioned but then rejected (“not the red one…”).",
   "Not noticing negatives: “I don't really like…”."
  ],
  "vi": "Đọc trước câu hỏi và các phương án. Thường cả 3 phương án đều được nhắc tới, nhưng chỉ một phương án đúng. Gạch bỏ phương án bị phủ định hoặc bị đổi ý.",
  "example": {
   "ctx": "🎧 “I thought about the blue jacket, and the black one looked nice, but in the end I bought the grey one because it was warmer.”",
   "q": "Which jacket did she buy?",
   "a": "the grey one",
   "why": "Blue and black are mentioned but rejected; “in the end” signals the answer."
  },
  "practice": [
   {
    "t": "mc",
    "say": "We considered going to the beach, and my brother wanted to go to the mountains, but in the end we stayed in the city and visited museums.",
    "q": "🎧 Where did they go?",
    "o": [
     "The beach",
     "The mountains",
     "The city"
    ],
    "a": 2
   },
   {
    "t": "mc",
    "say": "It's not that I dislike football. I just find tennis more exciting to watch, although I play basketball myself.",
    "q": "🎧 Which sport does the speaker find most exciting to watch?",
    "o": [
     "Football",
     "Tennis",
     "Basketball"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-listen-gap",
  "skill": "listening",
  "icon": "📝",
  "title": "Listening: gap-fill and note completion",
  "intro": "<p>You complete sentences or notes with words you hear. The words you write are usually <b>exactly what the speaker says</b>, but the sentence around the gap may be paraphrased.</p>",
  "steps": [
   "Read the sentences before listening. Predict the word type (number, day, noun, adjective).",
   "Notice grammar clues: “an ___” (vowel sound), “two ___” (plural).",
   "Listen for the idea of the sentence – the gap usually comes soon after.",
   "Write quickly; correct spelling later.",
   "Check spelling, singular/plural and numbers at the end."
  ],
  "traps": [
   "Numbers: thirteen /θɜːˈtiːn/ vs thirty /ˈθɜːti/ – listen to the stress.",
   "Spelling of names when they are spelled out letter by letter.",
   "Missing the plural -s."
  ],
  "vi": "Đoán loại từ cần điền trước khi nghe. Chú ý phân biệt số: thirteen (nhấn âm sau) – thirty (nhấn âm đầu). Kiểm tra chính tả, số ít/số nhiều sau khi nghe.",
  "example": {
   "ctx": "🎧 “The museum opens at half past nine and closes at five.”",
   "q": "The museum opens at ___.",
   "a": "9.30 / half past nine",
   "why": "Prediction: a time. “half past nine” = 9.30."
  },
  "practice": [
   {
    "t": "gap",
    "say": "The course costs fifteen pounds a week, and it starts on the third of June.",
    "q": "🎧 The course costs £___ a week.",
    "a": [
     "15",
     "fifteen"
    ]
   },
   {
    "t": "gap",
    "say": "Please bring a pencil, a notebook and your student card to the first lesson.",
    "q": "🎧 Bring a pencil, a notebook and your student ___.",
    "a": "card"
   }
  ]
 },
 {
  "id": "gd-listen-dict",
  "skill": "listening",
  "icon": "⌨️",
  "title": "Dictation: writing exactly what you hear",
  "intro": "<p>Dictation trains you to hear <b>every word</b>, including small words that are often unstressed: <i>a, the, to, of, and, have, been</i>. In natural speech, words join together (<i>want to → wanna, did you → didja</i>), so dictation is great practice for real listening.</p>",
  "steps": [
   "Listen to the whole sentence once without writing.",
   "Listen again and write the key words (nouns, verbs).",
   "Listen a third time (use 🐢 Slow) and add the small words.",
   "Check grammar: does the verb need -s or -ed? Is there an article?",
   "Compare with the correct sentence and listen again to the words you missed."
  ],
  "traps": [
   "Missing endings: -s, -ed, 'll, 've.",
   "Missing articles and prepositions.",
   "Writing words that sound similar but are wrong (their / there, four / for)."
  ],
  "vi": "Nghe cả câu trước, rồi ghi từ chính, sau đó điền từ nhỏ (a, the, to, of…). Chú ý đuôi -s, -ed, 'll, 've thường bị đọc lướt. Sau khi kiểm tra, nghe lại đúng những chỗ sai.",
  "example": {
   "ctx": "🎧 “She's been working here for two years.”",
   "q": "Common mistake: “She working here for two years.”",
   "a": "She's been working here for two years.",
   "why": "“'s been” is unstressed and easy to miss – grammar knowledge (present perfect continuous) helps you hear it."
  },
  "practice": [
   {
    "t": "gap",
    "say": "I've already finished my homework.",
    "q": "🎧 I've ___ finished my homework.",
    "a": "already"
   },
   {
    "t": "gap",
    "say": "They're going to visit their grandparents.",
    "q": "🎧 They're going to visit ___ grandparents.",
    "a": "their"
   }
  ]
 },
 {
  "id": "gd-speak-fluency",
  "skill": "speaking",
  "icon": "🗣️",
  "title": "Speaking basics: fluency, pronunciation and fillers",
  "intro": "<p>Examiners and listeners care about four things: <b>fluency</b> (speaking without long pauses), <b>vocabulary</b>, <b>grammar</b> and <b>pronunciation</b>. Being easy to understand matters more than having a perfect accent.</p><ul><li>Use <b>natural fillers</b> instead of silence: <i>Well…, Let me think…, That's an interesting question…, Actually…</i></li><li><b>Extend</b> every answer: answer + reason + example (A-R-E).</li><li>Pronounce <b>final sounds</b> (-t, -d, -s, -ed) and <b>word stress</b> clearly.</li><li>If you don't know a word, <b>paraphrase</b>: <i>“the thing you use to open a bottle”</i>.</li></ul>",
  "steps": [
   "Listen to the question carefully. Repeat key words in your answer.",
   "Give a direct answer first.",
   "Add a reason (because…, the main reason is…).",
   "Add an example or a personal detail (for example…, last week I…).",
   "Speak at a steady speed – about 100–140 words per minute is fine."
  ],
  "traps": [
   "One-word answers (“Yes.” “Football.”).",
   "Long silences while searching for a perfect word.",
   "Learning answers by heart – it sounds unnatural.",
   "Dropping final consonants: “I like” sounds like “I lie”."
  ],
  "vi": "Trả lời theo công thức A-R-E: Answer (trả lời) – Reason (lý do) – Example (ví dụ). Dùng từ đệm tự nhiên (Well…, Let me think…) thay vì im lặng. Không biết từ thì diễn đạt cách khác. Phát âm rõ âm cuối và trọng âm.",
  "phrases": [
   "Well, let me think…",
   "That's a good question.",
   "To be honest,…",
   "What I mean is…",
   "For example,…",
   "The main reason is that…",
   "I'm not sure, but I think…"
  ],
  "example": {
   "ctx": "Q: Do you like cooking?",
   "q": "Weak: “Yes.”",
   "a": "Better: “Yes, I do. I find it relaxing after school, and I love trying new recipes. For example, last weekend I made spring rolls for my family.”",
   "why": "Answer + reason + example = a natural, extended answer."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which answer is best for “Do you like your town?”",
    "o": [
     "Yes.",
     "Yes, I like it because it's quiet and green. For example, there's a lovely lake where I walk every evening.",
     "My town."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "You forget the word “ladder”. What is the best strategy?",
    "o": [
     "Stop speaking.",
     "Say it in Vietnamese.",
     "Say “the thing you climb to reach a high place”."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "gd-speak-personal",
  "skill": "speaking",
  "icon": "🙋",
  "title": "Introducing yourself and answering personal questions (A2)",
  "intro": "<p>The first part of most speaking tests asks about you: name, home, family, studies or work, hobbies and daily routine. Use the <b>present simple</b> for facts and habits, and give two or three sentences for each question.</p>",
  "steps": [
   "Start with a short, friendly introduction (name, age, where you live).",
   "For each question, answer and add one extra detail.",
   "Use frequency words: always, usually, sometimes.",
   "Use connectors: and, but, because, so.",
   "Smile and keep eye contact – it helps you sound confident."
  ],
  "traps": [
   "Answers that are too short.",
   "Mistakes with he/she + verb-s (“My father work…” → “works”).",
   "Saying “I am 15 years” → “I'm 15 (years old)”."
  ],
  "vi": "Phần giới thiệu bản thân dùng thì hiện tại đơn. Mỗi câu trả lời 2–3 câu, thêm chi tiết. Lỗi hay gặp: quên -s (My father works), “I have 15 years old” (sai) → “I'm 15 years old”.",
  "structure": [
   "Greeting + name: Hi, my name is… / I'm…",
   "Age and home: I'm … years old and I live in…",
   "Family: There are … people in my family: …",
   "Study/work: I'm a student at… / I work as…",
   "Hobbies: In my free time, I really enjoy… because…"
  ],
  "phrases": [
   "My name is…",
   "I'm from… / I live in…",
   "There are four people in my family.",
   "I'm in Year 10 at…",
   "In my free time, I…",
   "I'm really into…",
   "I usually… at the weekend."
  ],
  "example": {
   "ctx": "Q: Tell me about your family.",
   "q": "Model answer",
   "a": "There are four people in my family: my parents, my younger sister and me. My father is an engineer and my mother works in a bank. My sister is ten and she's very funny. We usually have dinner together and talk about our day.",
   "why": "Clear facts + small details + present simple."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Choose the correct sentence.",
    "o": [
     "I have 16 years old.",
     "I'm 16 years old.",
     "I'm 16 years."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Choose the best answer to “What do you do in your free time?”",
    "o": [
     "Free time.",
     "I usually play badminton with my friends because it keeps me fit.",
     "I playing badminton."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-speak-describe",
  "skill": "speaking",
  "icon": "🖼️",
  "title": "Describing a picture, a place or a person",
  "intro": "<p>When you describe a picture, imagine the listener <b>cannot see it</b>. Go from general to specific: what the picture shows → people and actions → details → feelings or guesses.</p><ul><li>Use the <b>present continuous</b> for actions: <i>A woman is running.</i></li><li>Use <b>there is / there are</b> and <b>prepositions of place</b>: <i>in the foreground, in the background, on the left, next to</i>.</li><li><b>Speculate</b>: <i>It looks like… They might be… She seems…</i> (B1–B2: <i>must be, can't be</i>).</li></ul>",
  "steps": [
   "Say what the picture shows in general (place, time, weather).",
   "Describe the main people and what they are doing.",
   "Mention details using position words.",
   "Guess how people feel or why they are there.",
   "Finish with a personal comment (Would you like to be there?)."
  ],
  "traps": [
   "Listing objects without connecting them.",
   "Using the present simple for actions in the picture (“A boy rides a bike” → “is riding”).",
   "Saying only what you are sure about – it's fine to guess."
  ],
  "vi": "Mô tả tranh: đi từ tổng quát đến chi tiết. Dùng hiện tại tiếp diễn cho hành động, there is/are + giới từ vị trí (on the left, in the background), và suy đoán (It looks like…, They might be…, She must be…).",
  "structure": [
   "Overview: This picture shows… / In this picture, I can see…",
   "Main people/actions: In the foreground, a… is …-ing",
   "Details: On the left / right… In the background…",
   "Speculation: It looks like… / They seem to be… / They might be…",
   "Personal comment: I'd love to be there because…"
  ],
  "phrases": [
   "This picture shows…",
   "In the foreground / background…",
   "On the left / On the right…",
   "It looks like a … day.",
   "They seem to be enjoying…",
   "She might be waiting for…",
   "It reminds me of…"
  ],
  "example": {
   "ctx": "Picture: a family having a picnic in a park.",
   "q": "Model start",
   "a": "This picture shows a family having a picnic in a park on a sunny afternoon. In the foreground, the parents are sitting on a blanket and the little girl is eating a sandwich. In the background, there are some tall trees. They look relaxed and happy – maybe it's a weekend.",
   "why": "Overview → actions (present continuous) → position words → speculation."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which sentence describes an action in a picture correctly?",
    "o": [
     "The boy plays football.",
     "The boy is playing football.",
     "The boy play football."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which phrase is used to guess?",
    "o": [
     "In the background",
     "It looks like",
     "There are"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-speak-story",
  "skill": "speaking",
  "icon": "📖",
  "title": "Telling a story or talking about an experience",
  "intro": "<p>To talk about the past, organise your story clearly: <b>set the scene → what happened → the result → how you felt / what you learned</b>.</p><ul><li><b>Past simple</b> for the main events: <i>I went, we saw</i>.</li><li><b>Past continuous</b> for background: <i>It was raining. We were walking home when…</i></li><li><b>Past perfect</b> (B1+) for earlier events: <i>I realised I had left my phone at home.</i></li><li>Time connectors: <i>at first, then, suddenly, after that, in the end, finally</i>.</li></ul>",
  "steps": [
   "Say when and where it happened, and who was there.",
   "Describe the background (weather, situation).",
   "Tell the main events in order using connectors.",
   "Describe the high point or problem (suddenly…).",
   "End with the result and your feelings or lesson."
  ],
  "traps": [
   "Mixing present and past tenses.",
   "No connectors – the story sounds like a list.",
   "Forgetting irregular verbs (go → went, buy → bought)."
  ],
  "vi": "Kể chuyện theo trình tự: bối cảnh → diễn biến → kết quả → cảm xúc/bài học. Dùng quá khứ đơn (sự kiện chính), quá khứ tiếp diễn (bối cảnh), quá khứ hoàn thành (việc xảy ra trước). Dùng từ nối thời gian: at first, suddenly, in the end.",
  "structure": [
   "Scene: It happened two years ago, when I was…",
   "Background: It was a hot day and we were…",
   "Events: First,… Then,… Suddenly,…",
   "Result: In the end,…",
   "Feeling/lesson: I felt… / It taught me that…"
  ],
  "phrases": [
   "I'll never forget the time when…",
   "It all started when…",
   "While we were…, …",
   "Suddenly,…",
   "To make things worse,…",
   "Luckily,…",
   "In the end,…",
   "Looking back, I think…"
  ],
  "example": {
   "ctx": "Q: Tell me about a time you got lost.",
   "q": "Model start",
   "a": "I'll never forget the day I got lost in Hanoi. It was my first visit, and I was walking around the Old Quarter while my friends were shopping. Suddenly, I realised I had no idea where I was…",
   "why": "Clear scene + past continuous background + past perfect + connector “suddenly”."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Choose the best sentence for background in a story.",
    "o": [
     "It rained when we walk home.",
     "It was raining while we were walking home.",
     "It rains and we walked home."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which connector introduces the final result?",
    "o": [
     "Suddenly",
     "In the end",
     "While"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-speak-opinion",
  "skill": "speaking",
  "icon": "💬",
  "title": "Giving and defending opinions",
  "intro": "<p>Give a <b>clear opinion</b>, support it with <b>reasons and examples</b>, and show that you understand the <b>other side</b>. At B2 you should also respond to counter-arguments.</p><p>A useful pattern is <b>O-R-E-C</b>: Opinion → Reason → Example → Conclusion.</p>",
  "steps": [
   "State your opinion clearly in the first sentence.",
   "Give your first reason and an example.",
   "Give a second reason (another point, furthermore…).",
   "Mention the opposite view and respond to it (While some people think…, I'd argue that…).",
   "Conclude by repeating your opinion in different words."
  ],
  "traps": [
   "“I think yes.” → “Yes, I think so.” / “I agree.”",
   "“I am agree.” → “I agree.”",
   "Giving reasons without examples.",
   "Changing your opinion in the middle without explaining."
  ],
  "vi": "Nêu quan điểm theo O-R-E-C: Opinion – Reason – Example – Conclusion. Ở B2 cần nhắc đến quan điểm đối lập và phản biện (While some people think…, I would argue that…). Lỗi hay gặp: “I am agree” → “I agree”.",
  "structure": [
   "Opinion: In my opinion,… / I strongly believe that…",
   "Reason 1 + example: The main reason is… For instance,…",
   "Reason 2: Another point is… / Furthermore,…",
   "Other side: Some people argue that… However,…",
   "Conclusion: So, overall, I think…"
  ],
  "phrases": [
   "In my opinion / From my point of view,…",
   "I strongly believe that…",
   "I see your point, but…",
   "That may be true, but…",
   "While it's true that…, I'd argue that…",
   "On the whole,…",
   "That's why I think…"
  ],
  "example": {
   "ctx": "Q: Should students wear uniforms?",
   "q": "Model answer",
   "a": "In my opinion, students should wear uniforms. The main reason is that uniforms make everyone equal – nobody feels bad about wearing cheap clothes. For example, at my school, nobody judges others by their brands. Some people say uniforms limit creativity, but students can express themselves in many other ways. So, overall, I think uniforms are a good idea.",
   "why": "O-R-E + counter-argument + conclusion."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Choose the correct sentence.",
    "o": [
     "I am agree with you.",
     "I agree with you.",
     "I agreeing with you."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which phrase introduces a counter-argument politely?",
    "o": [
     "You're wrong.",
     "That may be true, but…",
     "No."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-speak-compare",
  "skill": "speaking",
  "icon": "⚖️",
  "title": "Comparing, contrasting and discussing pros and cons (B1–B2)",
  "intro": "<p>Some tasks ask you to compare two situations or pictures, or to discuss advantages and disadvantages. Organise your answer into <b>similarities → differences → your preference</b>, or <b>advantages → disadvantages → balanced conclusion</b>.</p><ul><li>Comparatives: <i>more expensive than, not as … as, far / much better</i>.</li><li>Contrast words: <i>whereas, while, on the other hand, in contrast, however</i>.</li><li>Pros and cons language: <i>One major advantage is… The main drawback is… On balance…</i></li></ul>",
  "steps": [
   "Say briefly what the two options / situations are.",
   "Mention one or two similarities (Both…).",
   "Explain the main differences (whereas…, on the other hand…).",
   "Give the advantages and disadvantages with examples.",
   "Finish with your preference or a balanced conclusion (It depends on…)."
  ],
  "traps": [
   "Describing each picture separately without comparing.",
   "Using only “but” – vary with whereas, however, on the other hand.",
   "“more cheaper” → “cheaper”."
  ],
  "vi": "So sánh: giống nhau (Both…) → khác nhau (whereas, on the other hand) → lựa chọn của bạn. Ưu – nhược: One major advantage… The main drawback… On balance… Đừng mô tả riêng từng tranh mà phải so sánh.",
  "structure": [
   "Introduce: Both pictures show… / There are two options:…",
   "Similarity: In both cases,…",
   "Difference: In the first…, whereas in the second…",
   "Pros/cons: One advantage… On the other hand, a drawback…",
   "Conclusion: On balance, I'd prefer… because… / It depends on…"
  ],
  "phrases": [
   "Both … and …",
   "whereas / while",
   "Compared with…,…",
   "One major advantage is…",
   "The main drawback is…",
   "On the other hand,…",
   "On balance,…",
   "It depends on…"
  ],
  "example": {
   "ctx": "Q: Compare studying online and in a classroom.",
   "q": "Model start",
   "a": "Both online and classroom learning can help students make progress. However, online learning is far more flexible, whereas classroom learning offers more contact with teachers and classmates. One major advantage of studying online is that you can study at any time. On the other hand, it's easy to lose motivation. On balance, I prefer a mix of both.",
   "why": "Similarity → difference → pros/cons → balanced conclusion."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Choose the correct sentence.",
    "o": [
     "Trains are more cheaper than planes.",
     "Trains are cheaper than planes.",
     "Trains are cheap than planes."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which word best completes: “City life is exciting, ___ country life is peaceful.”",
    "o": [
     "whereas",
     "because",
     "so"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gd-write-basics",
  "skill": "writing",
  "icon": "🧱",
  "title": "Writing basics: paragraphs, linking words and checking",
  "intro": "<p>Every good text has a clear <b>purpose</b> (inform, invite, complain, argue), a <b>reader</b> (friend, manager, teacher) and an <b>organisation</b> (paragraphs). Each paragraph has one main idea, usually introduced in the <b>topic sentence</b>.</p><p>Plan for 3–5 minutes before writing, and keep 3–5 minutes at the end to check.</p>",
  "steps": [
   "Read the task and underline every point you must include.",
   "Decide who the reader is → formal or informal style.",
   "Plan: write 3–5 short notes, one per paragraph.",
   "Write, using linking words to connect ideas.",
   "Check: all points covered? Word count? Tenses, -s endings, articles, spelling, punctuation?"
  ],
  "traps": [
   "Missing one of the task points – this lowers your task score.",
   "One long paragraph with no breaks.",
   "Repeating the same words (good, very, thing).",
   "Very long sentences joined with “and… and… and…”."
  ],
  "vi": "Trước khi viết: gạch các ý bắt buộc, xác định người đọc (trang trọng hay thân mật), lập dàn ý ngắn. Mỗi đoạn một ý chính. Sau khi viết: kiểm tra đủ ý chưa, số từ, thì động từ, -s/-es, mạo từ, chính tả, dấu câu.",
  "structure": [
   "Opening (purpose)",
   "Body paragraph 1 (point 1)",
   "Body paragraph 2 (point 2)",
   "(Body paragraph 3 if needed)",
   "Closing"
  ],
  "phrases": [
   "Adding: and, also, as well as, in addition, furthermore",
   "Contrast: but, however, although, whereas, on the other hand",
   "Reason/result: because, since, so, therefore, as a result",
   "Examples: for example, for instance, such as",
   "Sequence: first, then, after that, finally",
   "Concluding: in conclusion, to sum up, overall"
  ],
  "example": {
   "ctx": "Task: Invite a friend to a picnic. Say where, when and what to bring.",
   "q": "Plan",
   "a": "Para 1: greeting + invitation (picnic on Saturday). Para 2: where & when (West Lake, 10 a.m.). Para 3: what to bring (drinks, a hat). Closing: reply soon.",
   "why": "Each task point gets its own place in the plan, so nothing is forgotten."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which linking word shows contrast?",
    "o": [
     "Therefore",
     "However",
     "For example"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "What should you do first?",
    "o": [
     "Start writing immediately.",
     "Underline the task points and plan.",
     "Count the words."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-write-short",
  "skill": "writing",
  "icon": "📩",
  "title": "Short messages, notes, postcards and simple emails (A2)",
  "intro": "<p>A2 tasks are short (30–60 words) but you must include <b>every point</b> in the task. Use a friendly, simple style.</p><ul><li>Start: <i>Hi / Hello / Dear + name,</i></li><li>Use short, clear sentences and simple connectors: <i>and, but, because, so</i>.</li><li>End: <i>See you soon, / Love, / Thanks, / Bye for now,</i> + your name.</li></ul>",
  "steps": [
   "Read the task and count the points (usually 2–3).",
   "Write the greeting.",
   "Write one or two sentences for each point.",
   "Add a closing phrase and your name.",
   "Check the word count and the verb forms."
  ],
  "traps": [
   "Forgetting a point (e.g. not saying WHEN).",
   "Writing too much – stay close to the word limit.",
   "No greeting or no closing."
  ],
  "vi": "Bài viết A2 ngắn (30–60 từ) nhưng phải đủ TẤT CẢ các ý đề yêu cầu. Bắt đầu bằng Hi/Dear + tên, kết thúc bằng See you soon / Love + tên. Câu ngắn, rõ ràng.",
  "structure": [
   "Greeting: Hi Tom,",
   "Point 1",
   "Point 2",
   "Point 3",
   "Closing + name: See you soon, Lan"
  ],
  "phrases": [
   "Thanks for your message!",
   "Would you like to…?",
   "Can you…?",
   "I'm sorry, but I can't…",
   "Let's meet at…",
   "Don't forget to…",
   "See you soon! / Write back soon!"
  ],
  "example": {
   "ctx": "Task: Tell a friend you can't come to football. Say why and suggest another day.",
   "q": "Model",
   "a": "Hi Nam, I'm sorry, but I can't play football tomorrow because I have a dentist appointment. Can we play on Saturday instead? See you soon, Minh",
   "why": "3 points: can't come ✔, why ✔, another day ✔ – in 30 words."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which is a good closing for a message to a friend?",
    "o": [
     "Yours faithfully,",
     "See you soon,",
     "Dear Sir,"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "The task says: “say where, when and what to bring”. Your message only says where and when. What's wrong?",
    "o": [
     "Nothing.",
     "It is missing one point.",
     "It is too formal."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-write-informal",
  "skill": "writing",
  "icon": "💌",
  "title": "Informal emails and letters (B1–B2)",
  "intro": "<p>You write to a friend or family member to give news, advice, invitations or replies. The style is <b>friendly and natural</b>: contractions (<i>I'm, don't</i>), phrasal verbs, exclamations and direct questions are fine.</p>",
  "steps": [
   "Open warmly and refer to their message (Thanks for your email!).",
   "Paragraph for each main point in the task.",
   "Use friendly language: Guess what…, By the way…, Anyway…",
   "Ask a question to the reader.",
   "Close informally (Hope to hear from you soon, Take care, Love)."
  ],
  "traps": [
   "Too formal (“I am writing to inform you…” to a friend).",
   "No paragraphs.",
   "Forgetting to answer the friend's questions."
  ],
  "vi": "Email thân mật: mở đầu thân thiện, nhắc lại thư của bạn, mỗi đoạn một ý, có thể dùng viết tắt (I'm, don't), câu hỏi, câu cảm thán. Kết thúc: Take care / Love / Best wishes.",
  "structure": [
   "Greeting: Hi / Dear Alex,",
   "Opening: Thanks for your email – it was great to hear from you!",
   "Body 1: main news / answer",
   "Body 2: advice / details / suggestion",
   "Closing: Write back soon! / Take care, + name"
  ],
  "phrases": [
   "It was great to hear from you!",
   "Sorry I haven't written for ages.",
   "Guess what?",
   "You should… / Why don't you…? / If I were you, I'd…",
   "By the way,…",
   "Anyway, I'd better go now.",
   "Can't wait to see you!",
   "Take care / Lots of love,"
  ],
  "example": {
   "ctx": "Friend: “Any ideas for my trip to Vietnam?”",
   "q": "Model opening",
   "a": "Hi Alex, Thanks for your email – I'm so excited you're coming! You should definitely visit Hoi An. If I were you, I'd go in spring, when it isn't too hot…",
   "why": "Friendly opening + advice language + contractions."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which opening is right for an informal email?",
    "o": [
     "I am writing to inform you that…",
     "It was great to hear from you!",
     "Dear Sir or Madam,"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which phrase gives advice?",
    "o": [
     "If I were you, I'd…",
     "Yours sincerely,",
     "I look forward to hearing from you."
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gd-write-formal",
  "skill": "writing",
  "icon": "📨",
  "title": "Formal emails and letters (applications, complaints, requests)",
  "intro": "<p>Formal emails go to people you don't know or to organisations: applying for a job, complaining, asking for information, writing to a newspaper. Use <b>full forms</b> (I am, not I'm), polite language, no slang and clear paragraphs.</p><ul><li>Unknown name: <i>Dear Sir or Madam, … Yours faithfully,</i></li><li>Known name: <i>Dear Mr Smith / Dear Ms Lee, … Yours sincerely,</i></li><li>Email to a company can also end: <i>Kind regards,</i></li></ul>",
  "steps": [
   "Opening: state the reason for writing in the first sentence.",
   "Paragraph 1: details (what, when, order number…).",
   "Paragraph 2: further information / problems / experience.",
   "Paragraph 3: what you want them to do (request, action).",
   "Formal closing line + correct sign-off + full name."
  ],
  "traps": [
   "Contractions and informal words (“Hi”, “Thanks a lot”, “stuff”).",
   "Wrong sign-off (Dear Sir or Madam → Yours faithfully; Dear Mr X → Yours sincerely).",
   "Being rude in a complaint – be firm but polite."
  ],
  "vi": "Thư trang trọng: không viết tắt, không dùng từ lóng. Dear Sir or Madam → Yours faithfully; Dear Mr/Ms + họ → Yours sincerely. Câu đầu nêu lý do viết. Thư phàn nàn: kiên quyết nhưng lịch sự, nêu rõ mong muốn (refund, replacement).",
  "structure": [
   "Dear Sir or Madam, / Dear Ms Nguyen,",
   "Reason: I am writing to apply for / complain about / enquire about…",
   "Details / evidence",
   "Request: I would be grateful if you could…",
   "I look forward to hearing from you. Yours faithfully / sincerely, Full name"
  ],
  "phrases": [
   "I am writing to apply for the position of…",
   "I am writing to complain about…",
   "I would like to enquire about…",
   "I would be grateful if you could…",
   "I have attached… / Please find attached…",
   "I look forward to hearing from you.",
   "Yours faithfully, / Yours sincerely,"
  ],
  "example": {
   "ctx": "Complaint about a late delivery.",
   "q": "Model opening",
   "a": "Dear Sir or Madam, I am writing to complain about the late delivery of my order (no. 48215), which arrived nine days after the date promised on your website.",
   "why": "Reason in the first sentence + specific details + full forms."
  },
  "practice": [
   {
    "t": "mc",
    "q": "You start “Dear Sir or Madam,”. How do you finish?",
    "o": [
     "Yours sincerely,",
     "Yours faithfully,",
     "Love,"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which sentence is formal?",
    "o": [
     "Can you send me the info?",
     "I would be grateful if you could send me further information.",
     "Send me the info, thanks!"
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-write-story",
  "skill": "writing",
  "icon": "📚",
  "title": "Writing a story",
  "intro": "<p>A story needs a clear <b>beginning, middle and end</b>, interesting details and a range of <b>past tenses</b>. If the task gives you the first or last sentence, you must use it exactly.</p><ul><li>Use <b>past simple, past continuous and past perfect</b>.</li><li>Add <b>feelings and senses</b>: <i>I was terrified. The room was silent.</i></li><li>Use <b>direct speech</b> occasionally: <i>“Who's there?” I whispered.</i></li><li>Use <b>time connectors</b> and adverbs: <i>suddenly, immediately, luckily, eventually</i>.</li></ul>",
  "steps": [
   "Plan: who, where, when, what problem, how it ends.",
   "Beginning: set the scene and introduce the main character.",
   "Middle: the problem or surprise (suddenly…).",
   "End: how the problem was solved and how the character felt.",
   "Check tenses and that you used the given sentence exactly."
  ],
  "traps": [
   "Changing the given sentence.",
   "Only using the past simple.",
   "A story with no problem or surprise – it's boring.",
   "An ending that doesn't connect with the beginning."
  ],
  "vi": "Truyện có mở đầu – diễn biến (có vấn đề/bất ngờ) – kết thúc. Dùng các thì quá khứ, thêm cảm xúc, hội thoại ngắn, từ nối (suddenly, luckily, eventually). Nếu đề cho câu mở đầu/kết thúc thì phải giữ nguyên.",
  "structure": [
   "Beginning: time, place, character",
   "Build-up: what the character was doing",
   "Problem / surprise: Suddenly,…",
   "Climax / solution: Luckily,… / Eventually,…",
   "Ending: feelings, result (or the given last sentence)"
  ],
  "phrases": [
   "It was a … evening when…",
   "While I was…, I noticed…",
   "Suddenly, …",
   "To my surprise,…",
   "I couldn't believe my eyes.",
   "Luckily, …",
   "Eventually, …",
   "It was the best/worst day of my life."
  ],
  "example": {
   "ctx": "Given first sentence: “When I opened the door, the room was completely dark.”",
   "q": "Model continuation",
   "a": "When I opened the door, the room was completely dark. I had been away for only an hour, but something felt wrong. Suddenly, the lights came on and twenty people shouted, “Happy birthday!”",
   "why": "Past perfect + suspense + surprise with direct speech."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which sentence uses the past perfect correctly?",
    "o": [
     "When I arrived, the film already started.",
     "When I arrived, the film had already started.",
     "When I arrived, the film has already started."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "The task gives the last sentence. What should you do?",
    "o": [
     "Change it a little.",
     "Use it exactly as your final sentence.",
     "Use it as your first sentence."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-write-article",
  "skill": "writing",
  "icon": "📰",
  "title": "Writing an article",
  "intro": "<p>An article is written for a magazine, website or school newsletter. It should be <b>interesting and engaging</b> for the reader. It needs a <b>title</b>, an opening that grabs attention, and a personal, lively style.</p><ul><li>Catchy title: <i>The App That Changed My Life</i></li><li>Hook: a question, a surprising fact or a short story.</li><li>Speak to the reader: <i>Have you ever…? You'll love…</i></li></ul>",
  "steps": [
   "Write a short, catchy title.",
   "Opening paragraph: hook the reader with a question or surprising fact.",
   "Body paragraphs: answer the questions in the task, with examples and personal experience.",
   "Final paragraph: summarise and leave the reader with a thought, advice or question.",
   "Check: is it interesting? Did you answer every question in the task?"
  ],
  "traps": [
   "No title.",
   "Writing like a formal essay – articles can be personal and lively.",
   "Not answering all the questions in the task notice."
  ],
  "vi": "Bài báo (article): có tiêu đề hấp dẫn, mở đầu thu hút (câu hỏi, sự thật thú vị), giọng văn sinh động, nói chuyện với người đọc (Have you ever…?). Trả lời đủ các câu hỏi trong đề và kết thúc bằng lời khuyên/câu hỏi.",
  "structure": [
   "Title",
   "Hook / introduction",
   "Body 1: first question in the task",
   "Body 2: second question + example",
   "Conclusion: advice, opinion or question to the reader"
  ],
  "phrases": [
   "Have you ever wondered…?",
   "Imagine…",
   "Believe it or not,…",
   "Let me tell you about…",
   "The best thing about … is…",
   "If you…, why not…?",
   "So, what are you waiting for?"
  ],
  "example": {
   "ctx": "Task: Write an article about your favourite place to relax.",
   "q": "Model opening",
   "a": "My Secret Garden. Do you ever feel like escaping from the noise of the city? I do – and I've found the perfect place. Behind my grandmother's house, there's a tiny garden that hardly anyone knows about…",
   "why": "Title + question hook + personal tone."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which is the best opening for an article?",
    "o": [
     "In this article I will write about sport.",
     "Did you know that just ten minutes of exercise a day can improve your mood?",
     "Sport. It is good."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "What does an article need that an email doesn't?",
    "o": [
     "A title",
     "A greeting",
     "A signature"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gd-write-review",
  "skill": "writing",
  "icon": "⭐",
  "title": "Writing a review (film, book, restaurant, app)",
  "intro": "<p>A review <b>describes and evaluates</b> something and gives a <b>recommendation</b>. Readers want to know: what is it, what is good and bad, and should I try it? Don't tell the whole story of a film or book.</p><ul><li>Use <b>a range of adjectives</b>: <i>gripping, thought-provoking, predictable, overrated, cosy, overpriced</i>.</li><li>Use the <b>present simple</b> to describe a film's or book's story.</li></ul>",
  "steps": [
   "Title (the name + a short opinion).",
   "Introduction: what it is (type, where, who it's by).",
   "Positive points with examples.",
   "Negative points (however, the only downside…).",
   "Recommendation: who would enjoy it and your rating."
  ],
  "traps": [
   "Telling the whole plot, including the ending.",
   "Only positive or only negative points – give a balanced view.",
   "Weak adjectives only (good, bad, nice)."
  ],
  "vi": "Bài review: giới thiệu ngắn (không kể hết nội dung), ưu điểm, nhược điểm, khuyến nghị (nên/không nên, dành cho ai). Dùng tính từ phong phú: gripping, predictable, cosy, overpriced. Dùng hiện tại đơn khi tóm tắt cốt truyện.",
  "structure": [
   "Title",
   "What it is: … is a … set in / located in…",
   "What I liked: The best thing about it is…",
   "What I didn't like: However,… / The only downside is…",
   "Recommendation: I would (not) recommend it to…"
  ],
  "phrases": [
   "… is set in…",
   "It tells the story of…",
   "What impressed me most was…",
   "The acting / food / service is outstanding.",
   "However, the ending is rather predictable.",
   "The only downside is…",
   "I would highly recommend it to anyone who…",
   "Overall, I'd give it four stars out of five."
  ],
  "example": {
   "ctx": "Restaurant review",
   "q": "Model sentences",
   "a": "The Green Leaf is a cosy vegetarian café near the library. What impressed me most was the mushroom noodle soup – fresh and full of flavour. The only downside is the slow service at lunchtime. I'd highly recommend it to students on a budget.",
   "why": "Description + specific praise + one downside + recommendation."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which adjective is best to describe an exciting film?",
    "o": [
     "nice",
     "gripping",
     "good"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "What should a film review NOT include?",
    "o": [
     "The ending of the story",
     "The actors",
     "A recommendation"
    ],
    "a": 0
   }
  ]
 },
 {
  "id": "gd-write-essay",
  "skill": "writing",
  "icon": "🧠",
  "title": "Opinion essays and discussion essays (B1–B2)",
  "intro": "<p>Essays answer a question or statement in a <b>formal, logical</b> way.</p><ul><li><b>Opinion essay</b> (“To what extent do you agree?”): state your opinion in the introduction and support it in every body paragraph; you may include and reject one counter-argument.</li><li><b>Discussion essay</b> (“Discuss both views and give your opinion”): one paragraph for each side, then your opinion in the conclusion.</li></ul><p>Each body paragraph: <b>topic sentence → explanation → example → link</b>. Avoid contractions and very informal words.</p>",
  "steps": [
   "Analyse the question: opinion or discussion? Underline key words.",
   "Introduction: paraphrase the topic + give your opinion (or say you'll discuss both sides).",
   "Body 1: main argument + example.",
   "Body 2: second argument OR the other side + response.",
   "Conclusion: summarise and restate your opinion in new words – no new ideas."
  ],
  "traps": [
   "No clear opinion in an opinion essay.",
   "Copying the question word for word in the introduction.",
   "Body paragraphs without examples.",
   "New arguments in the conclusion.",
   "Informal language: “a lot of stuff”, “kids”, “I'm”."
  ],
  "vi": "Bài luận: mở bài diễn đạt lại đề + nêu quan điểm; thân bài mỗi đoạn có câu chủ đề – giải thích – ví dụ; kết luận tóm tắt và nhắc lại quan điểm (không thêm ý mới). Văn phong trang trọng, không viết tắt. Opinion essay: ủng hộ một phía; discussion essay: trình bày hai phía rồi nêu ý kiến.",
  "structure": [
   "Introduction: background + thesis (In my view,… / This essay will discuss…)",
   "Body 1: Firstly,… For example,…",
   "Body 2: Furthermore,… / On the other hand, some argue that…",
   "(Body 3: counter-argument and response)",
   "Conclusion: In conclusion,… (restate opinion)"
  ],
  "phrases": [
   "It is often argued that…",
   "In my view / I firmly believe that…",
   "Firstly, … Secondly, …",
   "A good example of this is…",
   "Furthermore / Moreover,…",
   "On the other hand, critics claim that…",
   "Nevertheless,…",
   "In conclusion, / To sum up,…"
  ],
  "example": {
   "ctx": "“Technology in classrooms does more harm than good.” To what extent do you agree?",
   "q": "Model introduction",
   "a": "Technology has become a familiar part of many classrooms, from interactive whiteboards to tablets. While some argue that it distracts students, I believe that, when used carefully, it does more good than harm.",
   "why": "Paraphrased background + clear thesis with a nod to the opposite view."
  },
  "practice": [
   {
    "t": "mc",
    "q": "What belongs in the conclusion?",
    "o": [
     "A completely new argument",
     "A summary and your opinion restated",
     "A list of examples"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which sentence is best for a formal essay?",
    "o": [
     "Kids use phones a lot, which is bad.",
     "Young people spend a considerable amount of time on their phones.",
     "Kids are on their phones like all the time."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-write-report",
  "skill": "writing",
  "icon": "📊",
  "title": "Reports and proposals (B2)",
  "intro": "<p>A <b>report</b> describes a situation and makes recommendations for someone in authority (a principal, manager). A <b>proposal</b> suggests a plan for the future. Both use <b>headings</b>, a <b>formal, impersonal style</b> and often the passive voice.</p><ul><li>Report: <i>Introduction → Findings / Current situation → Problems → Recommendations → Conclusion</i></li><li>Proposal: <i>Introduction → Current situation → Suggestions → Expected benefits / Conclusion</i></li></ul>",
  "steps": [
   "Write a clear title (Report on… / Proposal for…).",
   "Introduction: state the aim and where your information comes from.",
   "Use one heading per section; keep paragraphs short.",
   "Present facts objectively (it was found that…, the majority of students…).",
   "Recommendations: specific, practical actions (It is recommended that…, … should be…)."
  ],
  "traps": [
   "No headings.",
   "Writing like a story or a personal letter.",
   "Vague recommendations (“make it better”).",
   "Too many “I” sentences – use impersonal forms."
  ],
  "vi": "Báo cáo/đề xuất: có tiêu đề và các mục (Introduction, Current situation, Problems, Recommendations, Conclusion). Văn phong trang trọng, khách quan, hay dùng bị động (It was found that…, It is recommended that…). Đề xuất phải cụ thể, khả thi.",
  "structure": [
   "Title",
   "Introduction: The aim of this report is to…",
   "Current situation / Findings",
   "Problems",
   "Recommendations",
   "Conclusion"
  ],
  "phrases": [
   "The aim of this report is to…",
   "The information is based on a survey of…",
   "It was found that… / The majority of…",
   "A significant number of students stated that…",
   "It is recommended that…",
   "… should be introduced / installed.",
   "If these changes are made, …"
  ],
  "example": {
   "ctx": "Report on the school canteen",
   "q": "Model recommendation",
   "a": "Recommendations: It is recommended that healthier options, such as salads and fruit, be added to the menu. In addition, a second serving counter should be opened at lunchtime to reduce queues.",
   "why": "Impersonal, specific, uses passive and should."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which sentence is best for a report?",
    "o": [
     "I think the canteen is awful.",
     "It was found that 70% of students were unhappy with the canteen.",
     "The canteen sucks."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "What is essential in a report?",
    "o": [
     "Headings",
     "Direct speech",
     "A greeting"
    ],
    "a": 0
   }
  ]
 }
];

/** Which guide belongs to which exercise */
export const guideMap: GuideMap = {
 "reading": {
  "mc": "gd-read-mc",
  "tf": "gd-read-tfng",
  "tfng": "gd-read-tfng",
  "gap": "gd-read-gap",
  "match": "gd-read-match",
  "head": "gd-read-head"
 },
 "writing": {
  "Note": "gd-write-short",
  "Message": "gd-write-short",
  "Postcard": "gd-write-short",
  "Description": "gd-write-short",
  "Email": "gd-write-short",
  "Informal email": "gd-write-informal",
  "Formal email": "gd-write-formal",
  "Letter to the editor": "gd-write-formal",
  "Story": "gd-write-story",
  "Article": "gd-write-article",
  "Review": "gd-write-review",
  "Opinion essay": "gd-write-essay",
  "Report": "gd-write-report",
  "Proposal": "gd-write-report"
 },
 "speaking": {
  "s-a2-1": "gd-speak-personal",
  "s-a2-2": "gd-speak-personal",
  "s-a2-3": "gd-speak-personal",
  "s-a2-4": "gd-speak-story",
  "s-a2-5": "gd-speak-personal",
  "s-a2-6": "gd-speak-describe",
  "s-a2-7": "gd-speak-personal",
  "s-a2-8": "gd-speak-describe",
  "s-b1-1": "gd-speak-story",
  "s-b1-2": "gd-speak-personal",
  "s-b1-3": "gd-speak-describe",
  "s-b1-4": "gd-speak-opinion",
  "s-b1-5": "gd-speak-describe",
  "s-b1-6": "gd-speak-story",
  "s-b1-7": "gd-speak-opinion",
  "s-b1-8": "gd-speak-compare",
  "s-b2-1": "gd-speak-compare",
  "s-b2-2": "gd-speak-opinion",
  "s-b2-3": "gd-speak-compare",
  "s-b2-4": "gd-speak-compare",
  "s-b2-5": "gd-speak-opinion",
  "s-b2-6": "gd-speak-compare",
  "s-b2-7": "gd-speak-opinion",
  "s-b2-8": "gd-speak-opinion"
 }
};
