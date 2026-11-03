// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { Guide, GuideMap } from "../types";

export const guides: Guide[] = [
 {
  "id": "gd-read-skills",
  "skill": "reading",
  "icon": "≡ƒöÄ",
  "title": "Reading skills: skimming, scanning and guessing words",
  "intro": "<p>Good readers do not read every word at the same speed. They change the way they read depending on the task.</p><ul><li><b>Skimming</b> ΓÇô reading quickly to get the <b>general idea</b> (gist). Read the title, the first and last paragraph, and the first sentence of each paragraph.</li><li><b>Scanning</b> ΓÇô looking quickly for <b>specific information</b>: names, numbers, dates, key words. Move your eyes fast and stop only when you find the word.</li><li><b>Reading for detail</b> ΓÇô reading a small part carefully to understand exactly what it says.</li><li><b>Guessing meaning from context</b> ΓÇô use the words around an unknown word, its position (noun? verb? adjective?) and word parts (un-, -less, -ful, -tion).</li></ul>",
  "steps": [
   "Read the title and look at any pictures ΓÇô predict the topic.",
   "Skim the whole text in 1ΓÇô2 minutes. What is each paragraph about?",
   "Read the questions and underline key words.",
   "Scan the text to find where each answer is.",
   "Read that part carefully before you answer.",
   "Don't stop at every unknown word ΓÇô guess, then check later."
  ],
  "traps": [
   "Reading slowly from the first word to the last and running out of time.",
   "Translating every word into Vietnamese.",
   "Choosing an answer just because it contains the same word as the text."
  ],
  "vi": "─Éß╗ìc l╞░ß╗¢t (skimming) ─æß╗â nß║»m ├╜ ch├¡nh, ─æß╗ìc qu├⌐t (scanning) ─æß╗â t├¼m th├┤ng tin cß╗Ñ thß╗â (t├¬n, sß╗æ, ng├áy). ─Éß╗½ng dß╗ïch tß╗½ng tß╗½. ─Éo├ín ngh─⌐a tß╗½ mß╗¢i dß╗▒a v├áo ngß╗» cß║únh, vß╗ï tr├¡ trong c├óu v├á tiß╗ün tß╗æ/hß║¡u tß╗æ (un-, -less, -ful, -tionΓÇª).",
  "example": {
   "ctx": "The village was so isolated that the nearest shop was a three-hour walk away.",
   "q": "What does ΓÇ£isolatedΓÇ¥ probably mean?",
   "a": "far away from other places",
   "why": "The second part of the sentence (a three-hour walk to the nearest shop) explains the meaning."
  },
  "practice": [
   {
    "t": "mc",
    "ctx": "After the long hike, we were famished, so we ate everything on the table in ten minutes.",
    "q": "ΓÇ£FamishedΓÇ¥ probably meansΓÇª",
    "o": [
     "very tired",
     "very hungry",
     "very happy"
    ],
    "a": 1,
    "x": "They ate everything quickly ΓåÆ very hungry."
   },
   {
    "t": "mc",
    "ctx": "Unlike his talkative sister, Nam is quite reserved and rarely shares his feelings.",
    "q": "ΓÇ£ReservedΓÇ¥ probably meansΓÇª",
    "o": [
     "quiet and private",
     "angry",
     "very funny"
    ],
    "a": 0,
    "x": "ΓÇ£Unlike his talkative sisterΓÇ¥ shows the opposite of talkative."
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
  "icon": "≡ƒöÿ",
  "title": "Multiple choice questions",
  "intro": "<p>You read a question and choose the best answer from three or four options. The questions usually follow the order of the text. Wrong options (<b>distractors</b>) often use words from the text but change the meaning.</p>",
  "steps": [
   "Read the question stem first, without looking at the options ΓÇô what exactly is it asking?",
   "Find the part of the text that answers it (scan for key words or synonyms).",
   "Read that part carefully and form your own answer.",
   "Now compare with the options. Choose the one with the same meaning.",
   "Check why the other options are wrong: not mentioned, opposite, or only partly true."
  ],
  "traps": [
   "Choosing the option with the same words as the text (word matching) ΓÇô look for the same MEANING.",
   "Options that are true in real life but not stated in the text.",
   "Options that are only half correct (e.g. right person, wrong time).",
   "Small words that change everything: not, only, always, never, all, some."
  ],
  "vi": "─Éß╗ìc c├óu hß╗Åi tr╞░ß╗¢c, t├¼m ─æoß║ín chß╗⌐a th├┤ng tin, tß╗▒ trß║ú lß╗¥i rß╗ôi mß╗¢i so vß╗¢i c├íc lß╗▒a chß╗ìn. Cß║⌐n thß║¡n ph╞░╞íng ├ín ΓÇ£bß║½yΓÇ¥ lß║╖p lß║íi tß╗½ trong b├ái nh╞░ng sai ngh─⌐a, hoß║╖c chß╗ë ─æ├║ng mß╗Öt nß╗¡a. Ch├║ ├╜ c├íc tß╗½: not, only, always, never.",
  "example": {
   "ctx": "Although Mai loves cooking, she rarely has time on weekdays, so she usually cooks big meals on Sundays.",
   "q": "When does Mai usually cook big meals? (a) on weekdays (b) on Sundays (c) every day",
   "a": "(b) on Sundays",
   "why": "Option (a) uses the word ΓÇ£weekdaysΓÇ¥ from the text, but the text says she rarely has time then."
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
    "x": "ΓÇ£used toΓÇ¥ = past; ΓÇ£since January ΓÇª until 9 p.m.ΓÇ¥ = now."
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
  "icon": "Γ£à",
  "title": "True / False / Not Given",
  "intro": "<p>You decide if a statement agrees with the text.</p><ul><li><b>True</b> ΓÇô the text says the same thing (often with different words).</li><li><b>False</b> ΓÇô the text says the <b>opposite</b>, or something that makes the statement impossible.</li><li><b>Not Given</b> ΓÇô the text does <b>not say</b>. You cannot know if it is true or false from the text.</li></ul><p>At A2 you usually only have True / False. From B1 you also need Not Given.</p>",
  "steps": [
   "Read the statement and underline key words (names, numbers, and words like all, always, only, more).",
   "Scan the text for the matching part. Statements follow the order of the text.",
   "Compare carefully: same meaning ΓåÆ True; opposite ΓåÆ False.",
   "If you can't find the information at all, or only part of it, think ΓÇ£Not GivenΓÇ¥.",
   "Use only the text ΓÇô not your own knowledge."
  ],
  "traps": [
   "Using your own knowledge: ΓÇ£Smoking is bad for youΓÇ¥ may be true in life but Not Given in the text.",
   "Confusing False and Not Given: False needs the text to say the opposite.",
   "Missing qualifiers: ΓÇ£some studentsΓÇ¥ in the text vs ΓÇ£all studentsΓÇ¥ in the statement = False.",
   "Comparisons: the text says A is popular; the statement says A is MORE popular than B ΓåÆ often Not Given."
  ],
  "vi": "True: b├ái n├│i giß╗æng ├╜ (c├│ thß╗â d├╣ng tß╗½ kh├íc). False: b├ái n├│i ng╞░ß╗úc lß║íi. Not Given: b├ái KH├öNG ─æß╗ü cß║¡p. Kh├┤ng d├╣ng hiß╗âu biß║┐t c├í nh├ón. Cß║⌐n thß║¡n c├íc tß╗½: all/some, always/sometimes, more/less ΓÇô chß╗ë cß║ºn kh├íc mß╗Öt tß╗½ l├á c├│ thß╗â False.",
  "example": {
   "ctx": "The caf├⌐ opened in 2019. It is popular with students because of its cheap prices.",
   "q": "(1) The caf├⌐ is cheap. (2) The caf├⌐ opened in 2020. (3) The caf├⌐ has free Wi-Fi.",
   "a": "(1) True (2) False (3) Not Given",
   "why": "Wi-Fi is not mentioned at all, so it is Not Given, not False."
  },
  "practice": [
   {
    "t": "tfng",
    "ctx": "Some students in the class walk to school, but most come by bus.",
    "q": "All the students take the bus.",
    "a": "F",
    "x": "ΓÇ£mostΓÇ¥, not ΓÇ£allΓÇ¥, and some walk."
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
  "icon": "Γ£Å∩╕Å",
  "title": "Gap-fill and sentence completion",
  "intro": "<p>You complete sentences or notes with a word (or words) from the text. The sentence usually <b>paraphrases</b> the text, so you need to find the matching idea first.</p>",
  "steps": [
   "Read the sentence and predict the type of word: noun? verb? number? plural?",
   "Look at the words before and after the gap (grammar clues: a/an, the, to, -s).",
   "Find the part of the text with the same meaning.",
   "Copy the word(s) exactly ΓÇô check spelling.",
   "Re-read the complete sentence: is it grammatically correct and does it make sense?"
  ],
  "traps": [
   "Wrong form: ΓÇ£two ___ΓÇ¥ needs a plural noun.",
   "Spelling mistakes ΓÇô a wrong spelling is usually marked wrong.",
   "Writing more words than allowed (e.g. ΓÇ£NO MORE THAN TWO WORDSΓÇ¥).",
   "Choosing a word that fits grammatically but not the meaning of the text."
  ],
  "vi": "─Éo├ín loß║íi tß╗½ cß║ºn ─æiß╗ün (danh tß╗½, ─æß╗Öng tß╗½, sß╗æΓÇª), dß╗▒a v├áo tß╗½ ─æß╗⌐ng tr╞░ß╗¢c/sau chß╗ù trß╗æng. T├¼m ─æoß║ín c├│ ├╜ t╞░╞íng ─æ╞░╞íng (th╞░ß╗¥ng ─æ╞░ß╗úc diß╗àn ─æß║ít lß║íi), ch├⌐p ─æ├║ng ch├¡nh tß║ú. ─Éß╗ìc lß║íi cß║ú c├óu ─æß╗â kiß╗âm tra ngß╗» ph├íp.",
  "example": {
   "ctx": "Visitors must buy their tickets online at least two days before their visit.",
   "q": "Tickets have to be bought ___ in advance.",
   "a": "online",
   "why": "ΓÇ£must buy ΓÇª onlineΓÇ¥ = ΓÇ£have to be bought onlineΓÇ¥. The gap needs an adverb of place/way."
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
  "icon": "≡ƒöù",
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
  "vi": "─Éß╗ìc hß║┐t c├íc lß╗▒a chß╗ìn tr╞░ß╗¢c v├á gß║ích ├╜ ch├¡nh. ─Éß╗ìc tß╗½ng ─æoß║ín rß╗ôi ─æß╗æi chiß║┐u. L├ám c├óu dß╗à tr╞░ß╗¢c ─æß╗â loß║íi trß╗½. Th├┤ng tin th╞░ß╗¥ng kh├┤ng theo thß╗⌐ tß╗▒ v├á c├│ thß╗â c├│ lß╗▒a chß╗ìn thß╗½a.",
  "example": {
   "ctx": "Ana: ΓÇ£I prefer trains because I can read.ΓÇ¥ Ben: ΓÇ£I always fly ΓÇô it's quicker.ΓÇ¥",
   "q": "Who cares most about speed?",
   "a": "Ben",
   "why": "ΓÇ£quickerΓÇ¥ = speed. Ana talks about reading, not speed."
  },
  "practice": [
   {
    "t": "match",
    "ctx": "Kim: I hate crowds, so I go to the beach in winter. ΓÇö Leo: I go anywhere with good street food. ΓÇö Mia: I only travel if I can practise my Spanish.",
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
  "icon": "≡ƒÅ╖∩╕Å",
  "title": "Matching headings (B2)",
  "intro": "<p>You choose the best heading for each paragraph from a list. There are usually <b>extra headings</b> you don't need. A heading summarises the <b>main idea of the whole paragraph</b>, not one detail.</p>",
  "steps": [
   "Read all the headings and notice how they differ (e.g. causes vs solutions vs history).",
   "For each paragraph, read the first one or two sentences and the last sentence ΓÇô the topic sentence is usually there.",
   "Ask: what is the paragraph mainly about? Say it in a few words.",
   "Choose the heading with the same main idea.",
   "Leave difficult paragraphs until the end ΓÇô fewer headings will remain."
  ],
  "traps": [
   "Choosing a heading because one word from it appears in the paragraph.",
   "Choosing a heading that describes only one example or detail.",
   "Headings that are too general or about a different time (past vs future)."
  ],
  "vi": "Ti├¬u ─æß╗ü phß║úi bao qu├ít ├¥ CH├ìNH cß╗ºa cß║ú ─æoß║ín, kh├┤ng phß║úi mß╗Öt chi tiß║┐t. ─Éß╗ìc c├óu ─æß║ºu (c├óu chß╗º ─æß╗ü) v├á c├óu cuß╗æi cß╗ºa ─æoß║ín. Cß║⌐n thß║¡n ti├¬u ─æß╗ü chß╗⌐a tß╗½ giß╗æng trong ─æoß║ín nh╞░ng chß╗ë n├│i vß╗ü mß╗Öt chi tiß║┐t. Lu├┤n c├│ ti├¬u ─æß╗ü thß╗½a.",
  "example": {
   "ctx": "ΓÇ£Many cities now offer free bikes. However, the schemes are expensive, and bikes are often stolen or damaged. Some cities have closed their programmes.ΓÇ¥",
   "q": "Best heading: (a) The history of bicycles (b) Problems with bike-sharing (c) Why cycling is healthy",
   "a": "(b) Problems with bike-sharing",
   "why": "Most of the paragraph is about costs, theft and closures ΓÇô problems."
  },
  "practice": [
   {
    "t": "mc",
    "ctx": "ΓÇ£Solar panels have become far cheaper over the last decade. In some countries, solar power is now the cheapest source of new electricity, and households can save money within a few years.ΓÇ¥",
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
    "ctx": "ΓÇ£To reduce stress, experts suggest regular exercise, enough sleep and limiting time on social media. Even ten minutes of walking can help.ΓÇ¥",
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
  "icon": "≡ƒæé",
  "title": "Listening skills: predict, listen for key words, don't panic",
  "intro": "<p>In listening you cannot go back like in reading, so preparation is very important.</p><ul><li><b>Predict</b> before you listen: who is speaking, where, about what? What kind of answer (number, place, reason)?</li><li><b>Listen for signposts</b>: <i>first, but, however, actually, the main reason, finally</i> ΓÇô they show where important information comes.</li><li><b>Expect paraphrase</b>: the recording rarely uses the same words as the question.</li><li><b>Speakers often change their minds</b>: <i>ΓÇ£Let's meet at sixΓÇª no, actually, seven is better.ΓÇ¥</i></li></ul>",
  "steps": [
   "Read the questions before you listen and underline key words.",
   "Predict possible answers and the type of information.",
   "On the first listening, answer what you can ΓÇô don't stop on one question.",
   "On the second listening, check and complete.",
   "Use the transcript afterwards to find what you missed and listen again."
  ],
  "traps": [
   "Writing the first number or name you hear ΓÇô it may be corrected later.",
   "Panicking when you miss one answer and then missing the next ones too.",
   "Choosing an option because you heard the same word."
  ],
  "vi": "─Éß╗ìc c├óu hß╗Åi tr╞░ß╗¢c v├á ─æo├ín nß╗Öi dung. Ch├║ ├╜ c├íc tß╗½ b├ío hiß╗çu (but, actually, however, finally). Ng╞░ß╗¥i n├│i hay ─æß╗òi ├╜ (ΓÇ£no, actuallyΓÇªΓÇ¥). Bß╗Å lß╗í mß╗Öt c├óu th├¼ bß╗Å qua v├á nghe c├óu tiß║┐p theo, ─æß╗½ng hoß║úng. Sau khi l├ám b├ái, ─æß╗ìc transcript v├á nghe lß║íi.",
  "example": {
   "ctx": "≡ƒÄº ΓÇ£The meeting was planned for Tuesday, but the manager is away, so we've moved it to Thursday.ΓÇ¥",
   "q": "When is the meeting?",
   "a": "Thursday",
   "why": "Tuesday is mentioned first, but ΓÇ£but ΓÇª moved it to ThursdayΓÇ¥ gives the final answer."
  },
  "practice": [
   {
    "t": "mc",
    "say": "I was going to take the train at nine, but it was cancelled, so I caught the ten o'clock bus instead.",
    "q": "≡ƒÄº How did the speaker travel?",
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
    "q": "≡ƒÄº How much did the speaker pay?",
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
  "icon": "≡ƒöÿ",
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
   "Choosing an option that is mentioned but then rejected (ΓÇ£not the red oneΓÇªΓÇ¥).",
   "Not noticing negatives: ΓÇ£I don't really likeΓÇªΓÇ¥."
  ],
  "vi": "─Éß╗ìc tr╞░ß╗¢c c├óu hß╗Åi v├á c├íc ph╞░╞íng ├ín. Th╞░ß╗¥ng cß║ú 3 ph╞░╞íng ├ín ─æß╗üu ─æ╞░ß╗úc nhß║»c tß╗¢i, nh╞░ng chß╗ë mß╗Öt ph╞░╞íng ├ín ─æ├║ng. Gß║ích bß╗Å ph╞░╞íng ├ín bß╗ï phß╗º ─æß╗ïnh hoß║╖c bß╗ï ─æß╗òi ├╜.",
  "example": {
   "ctx": "≡ƒÄº ΓÇ£I thought about the blue jacket, and the black one looked nice, but in the end I bought the grey one because it was warmer.ΓÇ¥",
   "q": "Which jacket did she buy?",
   "a": "the grey one",
   "why": "Blue and black are mentioned but rejected; ΓÇ£in the endΓÇ¥ signals the answer."
  },
  "practice": [
   {
    "t": "mc",
    "say": "We considered going to the beach, and my brother wanted to go to the mountains, but in the end we stayed in the city and visited museums.",
    "q": "≡ƒÄº Where did they go?",
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
    "q": "≡ƒÄº Which sport does the speaker find most exciting to watch?",
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
  "icon": "≡ƒô¥",
  "title": "Listening: gap-fill and note completion",
  "intro": "<p>You complete sentences or notes with words you hear. The words you write are usually <b>exactly what the speaker says</b>, but the sentence around the gap may be paraphrased.</p>",
  "steps": [
   "Read the sentences before listening. Predict the word type (number, day, noun, adjective).",
   "Notice grammar clues: ΓÇ£an ___ΓÇ¥ (vowel sound), ΓÇ£two ___ΓÇ¥ (plural).",
   "Listen for the idea of the sentence ΓÇô the gap usually comes soon after.",
   "Write quickly; correct spelling later.",
   "Check spelling, singular/plural and numbers at the end."
  ],
  "traps": [
   "Numbers: thirteen /╬╕╔£╦É╦êti╦Én/ vs thirty /╦ê╬╕╔£╦Éti/ ΓÇô listen to the stress.",
   "Spelling of names when they are spelled out letter by letter.",
   "Missing the plural -s."
  ],
  "vi": "─Éo├ín loß║íi tß╗½ cß║ºn ─æiß╗ün tr╞░ß╗¢c khi nghe. Ch├║ ├╜ ph├ón biß╗çt sß╗æ: thirteen (nhß║Ñn ├óm sau) ΓÇô thirty (nhß║Ñn ├óm ─æß║ºu). Kiß╗âm tra ch├¡nh tß║ú, sß╗æ ├¡t/sß╗æ nhiß╗üu sau khi nghe.",
  "example": {
   "ctx": "≡ƒÄº ΓÇ£The museum opens at half past nine and closes at five.ΓÇ¥",
   "q": "The museum opens at ___.",
   "a": "9.30 / half past nine",
   "why": "Prediction: a time. ΓÇ£half past nineΓÇ¥ = 9.30."
  },
  "practice": [
   {
    "t": "gap",
    "say": "The course costs fifteen pounds a week, and it starts on the third of June.",
    "q": "≡ƒÄº The course costs ┬ú___ a week.",
    "a": [
     "15",
     "fifteen"
    ]
   },
   {
    "t": "gap",
    "say": "Please bring a pencil, a notebook and your student card to the first lesson.",
    "q": "≡ƒÄº Bring a pencil, a notebook and your student ___.",
    "a": "card"
   }
  ]
 },
 {
  "id": "gd-listen-dict",
  "skill": "listening",
  "icon": "Γî¿∩╕Å",
  "title": "Dictation: writing exactly what you hear",
  "intro": "<p>Dictation trains you to hear <b>every word</b>, including small words that are often unstressed: <i>a, the, to, of, and, have, been</i>. In natural speech, words join together (<i>want to ΓåÆ wanna, did you ΓåÆ didja</i>), so dictation is great practice for real listening.</p>",
  "steps": [
   "Listen to the whole sentence once without writing.",
   "Listen again and write the key words (nouns, verbs).",
   "Listen a third time (use ≡ƒÉó Slow) and add the small words.",
   "Check grammar: does the verb need -s or -ed? Is there an article?",
   "Compare with the correct sentence and listen again to the words you missed."
  ],
  "traps": [
   "Missing endings: -s, -ed, 'll, 've.",
   "Missing articles and prepositions.",
   "Writing words that sound similar but are wrong (their / there, four / for)."
  ],
  "vi": "Nghe cß║ú c├óu tr╞░ß╗¢c, rß╗ôi ghi tß╗½ ch├¡nh, sau ─æ├│ ─æiß╗ün tß╗½ nhß╗Å (a, the, to, ofΓÇª). Ch├║ ├╜ ─æu├┤i -s, -ed, 'll, 've th╞░ß╗¥ng bß╗ï ─æß╗ìc l╞░ß╗¢t. Sau khi kiß╗âm tra, nghe lß║íi ─æ├║ng nhß╗»ng chß╗ù sai.",
  "example": {
   "ctx": "≡ƒÄº ΓÇ£She's been working here for two years.ΓÇ¥",
   "q": "Common mistake: ΓÇ£She working here for two years.ΓÇ¥",
   "a": "She's been working here for two years.",
   "why": "ΓÇ£'s beenΓÇ¥ is unstressed and easy to miss ΓÇô grammar knowledge (present perfect continuous) helps you hear it."
  },
  "practice": [
   {
    "t": "gap",
    "say": "I've already finished my homework.",
    "q": "≡ƒÄº I've ___ finished my homework.",
    "a": "already"
   },
   {
    "t": "gap",
    "say": "They're going to visit their grandparents.",
    "q": "≡ƒÄº They're going to visit ___ grandparents.",
    "a": "their"
   }
  ]
 },
 {
  "id": "gd-speak-fluency",
  "skill": "speaking",
  "icon": "≡ƒùú∩╕Å",
  "title": "Speaking basics: fluency, pronunciation and fillers",
  "intro": "<p>Examiners and listeners care about four things: <b>fluency</b> (speaking without long pauses), <b>vocabulary</b>, <b>grammar</b> and <b>pronunciation</b>. Being easy to understand matters more than having a perfect accent.</p><ul><li>Use <b>natural fillers</b> instead of silence: <i>WellΓÇª, Let me thinkΓÇª, That's an interesting questionΓÇª, ActuallyΓÇª</i></li><li><b>Extend</b> every answer: answer + reason + example (A-R-E).</li><li>Pronounce <b>final sounds</b> (-t, -d, -s, -ed) and <b>word stress</b> clearly.</li><li>If you don't know a word, <b>paraphrase</b>: <i>ΓÇ£the thing you use to open a bottleΓÇ¥</i>.</li></ul>",
  "steps": [
   "Listen to the question carefully. Repeat key words in your answer.",
   "Give a direct answer first.",
   "Add a reason (becauseΓÇª, the main reason isΓÇª).",
   "Add an example or a personal detail (for exampleΓÇª, last week IΓÇª).",
   "Speak at a steady speed ΓÇô about 100ΓÇô140 words per minute is fine."
  ],
  "traps": [
   "One-word answers (ΓÇ£Yes.ΓÇ¥ ΓÇ£Football.ΓÇ¥).",
   "Long silences while searching for a perfect word.",
   "Learning answers by heart ΓÇô it sounds unnatural.",
   "Dropping final consonants: ΓÇ£I likeΓÇ¥ sounds like ΓÇ£I lieΓÇ¥."
  ],
  "vi": "Trß║ú lß╗¥i theo c├┤ng thß╗⌐c A-R-E: Answer (trß║ú lß╗¥i) ΓÇô Reason (l├╜ do) ΓÇô Example (v├¡ dß╗Ñ). D├╣ng tß╗½ ─æß╗çm tß╗▒ nhi├¬n (WellΓÇª, Let me thinkΓÇª) thay v├¼ im lß║╖ng. Kh├┤ng biß║┐t tß╗½ th├¼ diß╗àn ─æß║ít c├ích kh├íc. Ph├ít ├óm r├╡ ├óm cuß╗æi v├á trß╗ìng ├óm.",
  "phrases": [
   "Well, let me thinkΓÇª",
   "That's a good question.",
   "To be honest,ΓÇª",
   "What I mean isΓÇª",
   "For example,ΓÇª",
   "The main reason is thatΓÇª",
   "I'm not sure, but I thinkΓÇª"
  ],
  "example": {
   "ctx": "Q: Do you like cooking?",
   "q": "Weak: ΓÇ£Yes.ΓÇ¥",
   "a": "Better: ΓÇ£Yes, I do. I find it relaxing after school, and I love trying new recipes. For example, last weekend I made spring rolls for my family.ΓÇ¥",
   "why": "Answer + reason + example = a natural, extended answer."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which answer is best for ΓÇ£Do you like your town?ΓÇ¥",
    "o": [
     "Yes.",
     "Yes, I like it because it's quiet and green. For example, there's a lovely lake where I walk every evening.",
     "My town."
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "You forget the word ΓÇ£ladderΓÇ¥. What is the best strategy?",
    "o": [
     "Stop speaking.",
     "Say it in Vietnamese.",
     "Say ΓÇ£the thing you climb to reach a high placeΓÇ¥."
    ],
    "a": 2
   }
  ]
 },
 {
  "id": "gd-speak-personal",
  "skill": "speaking",
  "icon": "≡ƒÖï",
  "title": "Introducing yourself and answering personal questions (A2)",
  "intro": "<p>The first part of most speaking tests asks about you: name, home, family, studies or work, hobbies and daily routine. Use the <b>present simple</b> for facts and habits, and give two or three sentences for each question.</p>",
  "steps": [
   "Start with a short, friendly introduction (name, age, where you live).",
   "For each question, answer and add one extra detail.",
   "Use frequency words: always, usually, sometimes.",
   "Use connectors: and, but, because, so.",
   "Smile and keep eye contact ΓÇô it helps you sound confident."
  ],
  "traps": [
   "Answers that are too short.",
   "Mistakes with he/she + verb-s (ΓÇ£My father workΓÇªΓÇ¥ ΓåÆ ΓÇ£worksΓÇ¥).",
   "Saying ΓÇ£I am 15 yearsΓÇ¥ ΓåÆ ΓÇ£I'm 15 (years old)ΓÇ¥."
  ],
  "vi": "Phß║ºn giß╗¢i thiß╗çu bß║ún th├ón d├╣ng th├¼ hiß╗çn tß║íi ─æ╞ín. Mß╗ùi c├óu trß║ú lß╗¥i 2ΓÇô3 c├óu, th├¬m chi tiß║┐t. Lß╗ùi hay gß║╖p: qu├¬n -s (My father works), ΓÇ£I have 15 years oldΓÇ¥ (sai) ΓåÆ ΓÇ£I'm 15 years oldΓÇ¥.",
  "structure": [
   "Greeting + name: Hi, my name isΓÇª / I'mΓÇª",
   "Age and home: I'm ΓÇª years old and I live inΓÇª",
   "Family: There are ΓÇª people in my family: ΓÇª",
   "Study/work: I'm a student atΓÇª / I work asΓÇª",
   "Hobbies: In my free time, I really enjoyΓÇª becauseΓÇª"
  ],
  "phrases": [
   "My name isΓÇª",
   "I'm fromΓÇª / I live inΓÇª",
   "There are four people in my family.",
   "I'm in Year 10 atΓÇª",
   "In my free time, IΓÇª",
   "I'm really intoΓÇª",
   "I usuallyΓÇª at the weekend."
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
    "q": "Choose the best answer to ΓÇ£What do you do in your free time?ΓÇ¥",
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
  "icon": "≡ƒû╝∩╕Å",
  "title": "Describing a picture, a place or a person",
  "intro": "<p>When you describe a picture, imagine the listener <b>cannot see it</b>. Go from general to specific: what the picture shows ΓåÆ people and actions ΓåÆ details ΓåÆ feelings or guesses.</p><ul><li>Use the <b>present continuous</b> for actions: <i>A woman is running.</i></li><li>Use <b>there is / there are</b> and <b>prepositions of place</b>: <i>in the foreground, in the background, on the left, next to</i>.</li><li><b>Speculate</b>: <i>It looks likeΓÇª They might beΓÇª She seemsΓÇª</i> (B1ΓÇôB2: <i>must be, can't be</i>).</li></ul>",
  "steps": [
   "Say what the picture shows in general (place, time, weather).",
   "Describe the main people and what they are doing.",
   "Mention details using position words.",
   "Guess how people feel or why they are there.",
   "Finish with a personal comment (Would you like to be there?)."
  ],
  "traps": [
   "Listing objects without connecting them.",
   "Using the present simple for actions in the picture (ΓÇ£A boy rides a bikeΓÇ¥ ΓåÆ ΓÇ£is ridingΓÇ¥).",
   "Saying only what you are sure about ΓÇô it's fine to guess."
  ],
  "vi": "M├┤ tß║ú tranh: ─æi tß╗½ tß╗òng qu├ít ─æß║┐n chi tiß║┐t. D├╣ng hiß╗çn tß║íi tiß║┐p diß╗àn cho h├ánh ─æß╗Öng, there is/are + giß╗¢i tß╗½ vß╗ï tr├¡ (on the left, in the background), v├á suy ─æo├ín (It looks likeΓÇª, They might beΓÇª, She must beΓÇª).",
  "structure": [
   "Overview: This picture showsΓÇª / In this picture, I can seeΓÇª",
   "Main people/actions: In the foreground, aΓÇª is ΓÇª-ing",
   "Details: On the left / rightΓÇª In the backgroundΓÇª",
   "Speculation: It looks likeΓÇª / They seem to beΓÇª / They might beΓÇª",
   "Personal comment: I'd love to be there becauseΓÇª"
  ],
  "phrases": [
   "This picture showsΓÇª",
   "In the foreground / backgroundΓÇª",
   "On the left / On the rightΓÇª",
   "It looks like a ΓÇª day.",
   "They seem to be enjoyingΓÇª",
   "She might be waiting forΓÇª",
   "It reminds me ofΓÇª"
  ],
  "example": {
   "ctx": "Picture: a family having a picnic in a park.",
   "q": "Model start",
   "a": "This picture shows a family having a picnic in a park on a sunny afternoon. In the foreground, the parents are sitting on a blanket and the little girl is eating a sandwich. In the background, there are some tall trees. They look relaxed and happy ΓÇô maybe it's a weekend.",
   "why": "Overview ΓåÆ actions (present continuous) ΓåÆ position words ΓåÆ speculation."
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
  "icon": "≡ƒôû",
  "title": "Telling a story or talking about an experience",
  "intro": "<p>To talk about the past, organise your story clearly: <b>set the scene ΓåÆ what happened ΓåÆ the result ΓåÆ how you felt / what you learned</b>.</p><ul><li><b>Past simple</b> for the main events: <i>I went, we saw</i>.</li><li><b>Past continuous</b> for background: <i>It was raining. We were walking home whenΓÇª</i></li><li><b>Past perfect</b> (B1+) for earlier events: <i>I realised I had left my phone at home.</i></li><li>Time connectors: <i>at first, then, suddenly, after that, in the end, finally</i>.</li></ul>",
  "steps": [
   "Say when and where it happened, and who was there.",
   "Describe the background (weather, situation).",
   "Tell the main events in order using connectors.",
   "Describe the high point or problem (suddenlyΓÇª).",
   "End with the result and your feelings or lesson."
  ],
  "traps": [
   "Mixing present and past tenses.",
   "No connectors ΓÇô the story sounds like a list.",
   "Forgetting irregular verbs (go ΓåÆ went, buy ΓåÆ bought)."
  ],
  "vi": "Kß╗â chuyß╗çn theo tr├¼nh tß╗▒: bß╗æi cß║únh ΓåÆ diß╗àn biß║┐n ΓåÆ kß║┐t quß║ú ΓåÆ cß║úm x├║c/b├ái hß╗ìc. D├╣ng qu├í khß╗⌐ ─æ╞ín (sß╗▒ kiß╗çn ch├¡nh), qu├í khß╗⌐ tiß║┐p diß╗àn (bß╗æi cß║únh), qu├í khß╗⌐ ho├án th├ánh (viß╗çc xß║úy ra tr╞░ß╗¢c). D├╣ng tß╗½ nß╗æi thß╗¥i gian: at first, suddenly, in the end.",
  "structure": [
   "Scene: It happened two years ago, when I wasΓÇª",
   "Background: It was a hot day and we wereΓÇª",
   "Events: First,ΓÇª Then,ΓÇª Suddenly,ΓÇª",
   "Result: In the end,ΓÇª",
   "Feeling/lesson: I feltΓÇª / It taught me thatΓÇª"
  ],
  "phrases": [
   "I'll never forget the time whenΓÇª",
   "It all started whenΓÇª",
   "While we wereΓÇª, ΓÇª",
   "Suddenly,ΓÇª",
   "To make things worse,ΓÇª",
   "Luckily,ΓÇª",
   "In the end,ΓÇª",
   "Looking back, I thinkΓÇª"
  ],
  "example": {
   "ctx": "Q: Tell me about a time you got lost.",
   "q": "Model start",
   "a": "I'll never forget the day I got lost in Hanoi. It was my first visit, and I was walking around the Old Quarter while my friends were shopping. Suddenly, I realised I had no idea where I wasΓÇª",
   "why": "Clear scene + past continuous background + past perfect + connector ΓÇ£suddenlyΓÇ¥."
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
  "icon": "≡ƒÆ¼",
  "title": "Giving and defending opinions",
  "intro": "<p>Give a <b>clear opinion</b>, support it with <b>reasons and examples</b>, and show that you understand the <b>other side</b>. At B2 you should also respond to counter-arguments.</p><p>A useful pattern is <b>O-R-E-C</b>: Opinion ΓåÆ Reason ΓåÆ Example ΓåÆ Conclusion.</p>",
  "steps": [
   "State your opinion clearly in the first sentence.",
   "Give your first reason and an example.",
   "Give a second reason (another point, furthermoreΓÇª).",
   "Mention the opposite view and respond to it (While some people thinkΓÇª, I'd argue thatΓÇª).",
   "Conclude by repeating your opinion in different words."
  ],
  "traps": [
   "ΓÇ£I think yes.ΓÇ¥ ΓåÆ ΓÇ£Yes, I think so.ΓÇ¥ / ΓÇ£I agree.ΓÇ¥",
   "ΓÇ£I am agree.ΓÇ¥ ΓåÆ ΓÇ£I agree.ΓÇ¥",
   "Giving reasons without examples.",
   "Changing your opinion in the middle without explaining."
  ],
  "vi": "N├¬u quan ─æiß╗âm theo O-R-E-C: Opinion ΓÇô Reason ΓÇô Example ΓÇô Conclusion. ß╗₧ B2 cß║ºn nhß║»c ─æß║┐n quan ─æiß╗âm ─æß╗æi lß║¡p v├á phß║ún biß╗çn (While some people thinkΓÇª, I would argue thatΓÇª). Lß╗ùi hay gß║╖p: ΓÇ£I am agreeΓÇ¥ ΓåÆ ΓÇ£I agreeΓÇ¥.",
  "structure": [
   "Opinion: In my opinion,ΓÇª / I strongly believe thatΓÇª",
   "Reason 1 + example: The main reason isΓÇª For instance,ΓÇª",
   "Reason 2: Another point isΓÇª / Furthermore,ΓÇª",
   "Other side: Some people argue thatΓÇª However,ΓÇª",
   "Conclusion: So, overall, I thinkΓÇª"
  ],
  "phrases": [
   "In my opinion / From my point of view,ΓÇª",
   "I strongly believe thatΓÇª",
   "I see your point, butΓÇª",
   "That may be true, butΓÇª",
   "While it's true thatΓÇª, I'd argue thatΓÇª",
   "On the whole,ΓÇª",
   "That's why I thinkΓÇª"
  ],
  "example": {
   "ctx": "Q: Should students wear uniforms?",
   "q": "Model answer",
   "a": "In my opinion, students should wear uniforms. The main reason is that uniforms make everyone equal ΓÇô nobody feels bad about wearing cheap clothes. For example, at my school, nobody judges others by their brands. Some people say uniforms limit creativity, but students can express themselves in many other ways. So, overall, I think uniforms are a good idea.",
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
     "That may be true, butΓÇª",
     "No."
    ],
    "a": 1
   }
  ]
 },
 {
  "id": "gd-speak-compare",
  "skill": "speaking",
  "icon": "ΓÜû∩╕Å",
  "title": "Comparing, contrasting and discussing pros and cons (B1ΓÇôB2)",
  "intro": "<p>Some tasks ask you to compare two situations or pictures, or to discuss advantages and disadvantages. Organise your answer into <b>similarities ΓåÆ differences ΓåÆ your preference</b>, or <b>advantages ΓåÆ disadvantages ΓåÆ balanced conclusion</b>.</p><ul><li>Comparatives: <i>more expensive than, not as ΓÇª as, far / much better</i>.</li><li>Contrast words: <i>whereas, while, on the other hand, in contrast, however</i>.</li><li>Pros and cons language: <i>One major advantage isΓÇª The main drawback isΓÇª On balanceΓÇª</i></li></ul>",
  "steps": [
   "Say briefly what the two options / situations are.",
   "Mention one or two similarities (BothΓÇª).",
   "Explain the main differences (whereasΓÇª, on the other handΓÇª).",
   "Give the advantages and disadvantages with examples.",
   "Finish with your preference or a balanced conclusion (It depends onΓÇª)."
  ],
  "traps": [
   "Describing each picture separately without comparing.",
   "Using only ΓÇ£butΓÇ¥ ΓÇô vary with whereas, however, on the other hand.",
   "ΓÇ£more cheaperΓÇ¥ ΓåÆ ΓÇ£cheaperΓÇ¥."
  ],
  "vi": "So s├ính: giß╗æng nhau (BothΓÇª) ΓåÆ kh├íc nhau (whereas, on the other hand) ΓåÆ lß╗▒a chß╗ìn cß╗ºa bß║ín. ╞»u ΓÇô nh╞░ß╗úc: One major advantageΓÇª The main drawbackΓÇª On balanceΓÇª ─Éß╗½ng m├┤ tß║ú ri├¬ng tß╗½ng tranh m├á phß║úi so s├ính.",
  "structure": [
   "Introduce: Both pictures showΓÇª / There are two options:ΓÇª",
   "Similarity: In both cases,ΓÇª",
   "Difference: In the firstΓÇª, whereas in the secondΓÇª",
   "Pros/cons: One advantageΓÇª On the other hand, a drawbackΓÇª",
   "Conclusion: On balance, I'd preferΓÇª becauseΓÇª / It depends onΓÇª"
  ],
  "phrases": [
   "Both ΓÇª and ΓÇª",
   "whereas / while",
   "Compared withΓÇª,ΓÇª",
   "One major advantage isΓÇª",
   "The main drawback isΓÇª",
   "On the other hand,ΓÇª",
   "On balance,ΓÇª",
   "It depends onΓÇª"
  ],
  "example": {
   "ctx": "Q: Compare studying online and in a classroom.",
   "q": "Model start",
   "a": "Both online and classroom learning can help students make progress. However, online learning is far more flexible, whereas classroom learning offers more contact with teachers and classmates. One major advantage of studying online is that you can study at any time. On the other hand, it's easy to lose motivation. On balance, I prefer a mix of both.",
   "why": "Similarity ΓåÆ difference ΓåÆ pros/cons ΓåÆ balanced conclusion."
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
    "q": "Which word best completes: ΓÇ£City life is exciting, ___ country life is peaceful.ΓÇ¥",
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
  "icon": "≡ƒº▒",
  "title": "Writing basics: paragraphs, linking words and checking",
  "intro": "<p>Every good text has a clear <b>purpose</b> (inform, invite, complain, argue), a <b>reader</b> (friend, manager, teacher) and an <b>organisation</b> (paragraphs). Each paragraph has one main idea, usually introduced in the <b>topic sentence</b>.</p><p>Plan for 3ΓÇô5 minutes before writing, and keep 3ΓÇô5 minutes at the end to check.</p>",
  "steps": [
   "Read the task and underline every point you must include.",
   "Decide who the reader is ΓåÆ formal or informal style.",
   "Plan: write 3ΓÇô5 short notes, one per paragraph.",
   "Write, using linking words to connect ideas.",
   "Check: all points covered? Word count? Tenses, -s endings, articles, spelling, punctuation?"
  ],
  "traps": [
   "Missing one of the task points ΓÇô this lowers your task score.",
   "One long paragraph with no breaks.",
   "Repeating the same words (good, very, thing).",
   "Very long sentences joined with ΓÇ£andΓÇª andΓÇª andΓÇªΓÇ¥."
  ],
  "vi": "Tr╞░ß╗¢c khi viß║┐t: gß║ích c├íc ├╜ bß║»t buß╗Öc, x├íc ─æß╗ïnh ng╞░ß╗¥i ─æß╗ìc (trang trß╗ìng hay th├ón mß║¡t), lß║¡p d├án ├╜ ngß║»n. Mß╗ùi ─æoß║ín mß╗Öt ├╜ ch├¡nh. Sau khi viß║┐t: kiß╗âm tra ─æß╗º ├╜ ch╞░a, sß╗æ tß╗½, th├¼ ─æß╗Öng tß╗½, -s/-es, mß║ío tß╗½, ch├¡nh tß║ú, dß║Ñu c├óu.",
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
  "icon": "≡ƒô⌐",
  "title": "Short messages, notes, postcards and simple emails (A2)",
  "intro": "<p>A2 tasks are short (30ΓÇô60 words) but you must include <b>every point</b> in the task. Use a friendly, simple style.</p><ul><li>Start: <i>Hi / Hello / Dear + name,</i></li><li>Use short, clear sentences and simple connectors: <i>and, but, because, so</i>.</li><li>End: <i>See you soon, / Love, / Thanks, / Bye for now,</i> + your name.</li></ul>",
  "steps": [
   "Read the task and count the points (usually 2ΓÇô3).",
   "Write the greeting.",
   "Write one or two sentences for each point.",
   "Add a closing phrase and your name.",
   "Check the word count and the verb forms."
  ],
  "traps": [
   "Forgetting a point (e.g. not saying WHEN).",
   "Writing too much ΓÇô stay close to the word limit.",
   "No greeting or no closing."
  ],
  "vi": "B├ái viß║┐t A2 ngß║»n (30ΓÇô60 tß╗½) nh╞░ng phß║úi ─æß╗º Tß║ñT Cß║ó c├íc ├╜ ─æß╗ü y├¬u cß║ºu. Bß║»t ─æß║ºu bß║▒ng Hi/Dear + t├¬n, kß║┐t th├║c bß║▒ng See you soon / Love + t├¬n. C├óu ngß║»n, r├╡ r├áng.",
  "structure": [
   "Greeting: Hi Tom,",
   "Point 1",
   "Point 2",
   "Point 3",
   "Closing + name: See you soon, Lan"
  ],
  "phrases": [
   "Thanks for your message!",
   "Would you like toΓÇª?",
   "Can youΓÇª?",
   "I'm sorry, but I can'tΓÇª",
   "Let's meet atΓÇª",
   "Don't forget toΓÇª",
   "See you soon! / Write back soon!"
  ],
  "example": {
   "ctx": "Task: Tell a friend you can't come to football. Say why and suggest another day.",
   "q": "Model",
   "a": "Hi Nam, I'm sorry, but I can't play football tomorrow because I have a dentist appointment. Can we play on Saturday instead? See you soon, Minh",
   "why": "3 points: can't come Γ£ö, why Γ£ö, another day Γ£ö ΓÇô in 30 words."
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
    "q": "The task says: ΓÇ£say where, when and what to bringΓÇ¥. Your message only says where and when. What's wrong?",
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
  "icon": "≡ƒÆî",
  "title": "Informal emails and letters (B1ΓÇôB2)",
  "intro": "<p>You write to a friend or family member to give news, advice, invitations or replies. The style is <b>friendly and natural</b>: contractions (<i>I'm, don't</i>), phrasal verbs, exclamations and direct questions are fine.</p>",
  "steps": [
   "Open warmly and refer to their message (Thanks for your email!).",
   "Paragraph for each main point in the task.",
   "Use friendly language: Guess whatΓÇª, By the wayΓÇª, AnywayΓÇª",
   "Ask a question to the reader.",
   "Close informally (Hope to hear from you soon, Take care, Love)."
  ],
  "traps": [
   "Too formal (ΓÇ£I am writing to inform youΓÇªΓÇ¥ to a friend).",
   "No paragraphs.",
   "Forgetting to answer the friend's questions."
  ],
  "vi": "Email th├ón mß║¡t: mß╗ƒ ─æß║ºu th├ón thiß╗çn, nhß║»c lß║íi th╞░ cß╗ºa bß║ín, mß╗ùi ─æoß║ín mß╗Öt ├╜, c├│ thß╗â d├╣ng viß║┐t tß║»t (I'm, don't), c├óu hß╗Åi, c├óu cß║úm th├ín. Kß║┐t th├║c: Take care / Love / Best wishes.",
  "structure": [
   "Greeting: Hi / Dear Alex,",
   "Opening: Thanks for your email ΓÇô it was great to hear from you!",
   "Body 1: main news / answer",
   "Body 2: advice / details / suggestion",
   "Closing: Write back soon! / Take care, + name"
  ],
  "phrases": [
   "It was great to hear from you!",
   "Sorry I haven't written for ages.",
   "Guess what?",
   "You shouldΓÇª / Why don't youΓÇª? / If I were you, I'dΓÇª",
   "By the way,ΓÇª",
   "Anyway, I'd better go now.",
   "Can't wait to see you!",
   "Take care / Lots of love,"
  ],
  "example": {
   "ctx": "Friend: ΓÇ£Any ideas for my trip to Vietnam?ΓÇ¥",
   "q": "Model opening",
   "a": "Hi Alex, Thanks for your email ΓÇô I'm so excited you're coming! You should definitely visit Hoi An. If I were you, I'd go in spring, when it isn't too hotΓÇª",
   "why": "Friendly opening + advice language + contractions."
  },
  "practice": [
   {
    "t": "mc",
    "q": "Which opening is right for an informal email?",
    "o": [
     "I am writing to inform you thatΓÇª",
     "It was great to hear from you!",
     "Dear Sir or Madam,"
    ],
    "a": 1
   },
   {
    "t": "mc",
    "q": "Which phrase gives advice?",
    "o": [
     "If I were you, I'dΓÇª",
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
  "icon": "≡ƒô¿",
  "title": "Formal emails and letters (applications, complaints, requests)",
  "intro": "<p>Formal emails go to people you don't know or to organisations: applying for a job, complaining, asking for information, writing to a newspaper. Use <b>full forms</b> (I am, not I'm), polite language, no slang and clear paragraphs.</p><ul><li>Unknown name: <i>Dear Sir or Madam, ΓÇª Yours faithfully,</i></li><li>Known name: <i>Dear Mr Smith / Dear Ms Lee, ΓÇª Yours sincerely,</i></li><li>Email to a company can also end: <i>Kind regards,</i></li></ul>",
  "steps": [
   "Opening: state the reason for writing in the first sentence.",
   "Paragraph 1: details (what, when, order numberΓÇª).",
   "Paragraph 2: further information / problems / experience.",
   "Paragraph 3: what you want them to do (request, action).",
   "Formal closing line + correct sign-off + full name."
  ],
  "traps": [
   "Contractions and informal words (ΓÇ£HiΓÇ¥, ΓÇ£Thanks a lotΓÇ¥, ΓÇ£stuffΓÇ¥).",
   "Wrong sign-off (Dear Sir or Madam ΓåÆ Yours faithfully; Dear Mr X ΓåÆ Yours sincerely).",
   "Being rude in a complaint ΓÇô be firm but polite."
  ],
  "vi": "Th╞░ trang trß╗ìng: kh├┤ng viß║┐t tß║»t, kh├┤ng d├╣ng tß╗½ l├│ng. Dear Sir or Madam ΓåÆ Yours faithfully; Dear Mr/Ms + hß╗ì ΓåÆ Yours sincerely. C├óu ─æß║ºu n├¬u l├╜ do viß║┐t. Th╞░ ph├án n├án: ki├¬n quyß║┐t nh╞░ng lß╗ïch sß╗▒, n├¬u r├╡ mong muß╗æn (refund, replacement).",
  "structure": [
   "Dear Sir or Madam, / Dear Ms Nguyen,",
   "Reason: I am writing to apply for / complain about / enquire aboutΓÇª",
   "Details / evidence",
   "Request: I would be grateful if you couldΓÇª",
   "I look forward to hearing from you. Yours faithfully / sincerely, Full name"
  ],
  "phrases": [
   "I am writing to apply for the position ofΓÇª",
   "I am writing to complain aboutΓÇª",
   "I would like to enquire aboutΓÇª",
   "I would be grateful if you couldΓÇª",
   "I have attachedΓÇª / Please find attachedΓÇª",
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
    "q": "You start ΓÇ£Dear Sir or Madam,ΓÇ¥. How do you finish?",
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
  "icon": "≡ƒôÜ",
  "title": "Writing a story",
  "intro": "<p>A story needs a clear <b>beginning, middle and end</b>, interesting details and a range of <b>past tenses</b>. If the task gives you the first or last sentence, you must use it exactly.</p><ul><li>Use <b>past simple, past continuous and past perfect</b>.</li><li>Add <b>feelings and senses</b>: <i>I was terrified. The room was silent.</i></li><li>Use <b>direct speech</b> occasionally: <i>ΓÇ£Who's there?ΓÇ¥ I whispered.</i></li><li>Use <b>time connectors</b> and adverbs: <i>suddenly, immediately, luckily, eventually</i>.</li></ul>",
  "steps": [
   "Plan: who, where, when, what problem, how it ends.",
   "Beginning: set the scene and introduce the main character.",
   "Middle: the problem or surprise (suddenlyΓÇª).",
   "End: how the problem was solved and how the character felt.",
   "Check tenses and that you used the given sentence exactly."
  ],
  "traps": [
   "Changing the given sentence.",
   "Only using the past simple.",
   "A story with no problem or surprise ΓÇô it's boring.",
   "An ending that doesn't connect with the beginning."
  ],
  "vi": "Truyß╗çn c├│ mß╗ƒ ─æß║ºu ΓÇô diß╗àn biß║┐n (c├│ vß║Ñn ─æß╗ü/bß║Ñt ngß╗¥) ΓÇô kß║┐t th├║c. D├╣ng c├íc th├¼ qu├í khß╗⌐, th├¬m cß║úm x├║c, hß╗Öi thoß║íi ngß║»n, tß╗½ nß╗æi (suddenly, luckily, eventually). Nß║┐u ─æß╗ü cho c├óu mß╗ƒ ─æß║ºu/kß║┐t th├║c th├¼ phß║úi giß╗» nguy├¬n.",
  "structure": [
   "Beginning: time, place, character",
   "Build-up: what the character was doing",
   "Problem / surprise: Suddenly,ΓÇª",
   "Climax / solution: Luckily,ΓÇª / Eventually,ΓÇª",
   "Ending: feelings, result (or the given last sentence)"
  ],
  "phrases": [
   "It was a ΓÇª evening whenΓÇª",
   "While I wasΓÇª, I noticedΓÇª",
   "Suddenly, ΓÇª",
   "To my surprise,ΓÇª",
   "I couldn't believe my eyes.",
   "Luckily, ΓÇª",
   "Eventually, ΓÇª",
   "It was the best/worst day of my life."
  ],
  "example": {
   "ctx": "Given first sentence: ΓÇ£When I opened the door, the room was completely dark.ΓÇ¥",
   "q": "Model continuation",
   "a": "When I opened the door, the room was completely dark. I had been away for only an hour, but something felt wrong. Suddenly, the lights came on and twenty people shouted, ΓÇ£Happy birthday!ΓÇ¥",
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
  "icon": "≡ƒô░",
  "title": "Writing an article",
  "intro": "<p>An article is written for a magazine, website or school newsletter. It should be <b>interesting and engaging</b> for the reader. It needs a <b>title</b>, an opening that grabs attention, and a personal, lively style.</p><ul><li>Catchy title: <i>The App That Changed My Life</i></li><li>Hook: a question, a surprising fact or a short story.</li><li>Speak to the reader: <i>Have you everΓÇª? You'll loveΓÇª</i></li></ul>",
  "steps": [
   "Write a short, catchy title.",
   "Opening paragraph: hook the reader with a question or surprising fact.",
   "Body paragraphs: answer the questions in the task, with examples and personal experience.",
   "Final paragraph: summarise and leave the reader with a thought, advice or question.",
   "Check: is it interesting? Did you answer every question in the task?"
  ],
  "traps": [
   "No title.",
   "Writing like a formal essay ΓÇô articles can be personal and lively.",
   "Not answering all the questions in the task notice."
  ],
  "vi": "B├ái b├ío (article): c├│ ti├¬u ─æß╗ü hß║Ñp dß║½n, mß╗ƒ ─æß║ºu thu h├║t (c├óu hß╗Åi, sß╗▒ thß║¡t th├║ vß╗ï), giß╗ìng v─ân sinh ─æß╗Öng, n├│i chuyß╗çn vß╗¢i ng╞░ß╗¥i ─æß╗ìc (Have you everΓÇª?). Trß║ú lß╗¥i ─æß╗º c├íc c├óu hß╗Åi trong ─æß╗ü v├á kß║┐t th├║c bß║▒ng lß╗¥i khuy├¬n/c├óu hß╗Åi.",
  "structure": [
   "Title",
   "Hook / introduction",
   "Body 1: first question in the task",
   "Body 2: second question + example",
   "Conclusion: advice, opinion or question to the reader"
  ],
  "phrases": [
   "Have you ever wonderedΓÇª?",
   "ImagineΓÇª",
   "Believe it or not,ΓÇª",
   "Let me tell you aboutΓÇª",
   "The best thing about ΓÇª isΓÇª",
   "If youΓÇª, why notΓÇª?",
   "So, what are you waiting for?"
  ],
  "example": {
   "ctx": "Task: Write an article about your favourite place to relax.",
   "q": "Model opening",
   "a": "My Secret Garden. Do you ever feel like escaping from the noise of the city? I do ΓÇô and I've found the perfect place. Behind my grandmother's house, there's a tiny garden that hardly anyone knows aboutΓÇª",
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
  "icon": "Γ¡É",
  "title": "Writing a review (film, book, restaurant, app)",
  "intro": "<p>A review <b>describes and evaluates</b> something and gives a <b>recommendation</b>. Readers want to know: what is it, what is good and bad, and should I try it? Don't tell the whole story of a film or book.</p><ul><li>Use <b>a range of adjectives</b>: <i>gripping, thought-provoking, predictable, overrated, cosy, overpriced</i>.</li><li>Use the <b>present simple</b> to describe a film's or book's story.</li></ul>",
  "steps": [
   "Title (the name + a short opinion).",
   "Introduction: what it is (type, where, who it's by).",
   "Positive points with examples.",
   "Negative points (however, the only downsideΓÇª).",
   "Recommendation: who would enjoy it and your rating."
  ],
  "traps": [
   "Telling the whole plot, including the ending.",
   "Only positive or only negative points ΓÇô give a balanced view.",
   "Weak adjectives only (good, bad, nice)."
  ],
  "vi": "B├ái review: giß╗¢i thiß╗çu ngß║»n (kh├┤ng kß╗â hß║┐t nß╗Öi dung), ╞░u ─æiß╗âm, nh╞░ß╗úc ─æiß╗âm, khuyß║┐n nghß╗ï (n├¬n/kh├┤ng n├¬n, d├ánh cho ai). D├╣ng t├¡nh tß╗½ phong ph├║: gripping, predictable, cosy, overpriced. D├╣ng hiß╗çn tß║íi ─æ╞ín khi t├│m tß║»t cß╗æt truyß╗çn.",
  "structure": [
   "Title",
   "What it is: ΓÇª is a ΓÇª set in / located inΓÇª",
   "What I liked: The best thing about it isΓÇª",
   "What I didn't like: However,ΓÇª / The only downside isΓÇª",
   "Recommendation: I would (not) recommend it toΓÇª"
  ],
  "phrases": [
   "ΓÇª is set inΓÇª",
   "It tells the story ofΓÇª",
   "What impressed me most wasΓÇª",
   "The acting / food / service is outstanding.",
   "However, the ending is rather predictable.",
   "The only downside isΓÇª",
   "I would highly recommend it to anyone whoΓÇª",
   "Overall, I'd give it four stars out of five."
  ],
  "example": {
   "ctx": "Restaurant review",
   "q": "Model sentences",
   "a": "The Green Leaf is a cosy vegetarian caf├⌐ near the library. What impressed me most was the mushroom noodle soup ΓÇô fresh and full of flavour. The only downside is the slow service at lunchtime. I'd highly recommend it to students on a budget.",
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
  "icon": "≡ƒºá",
  "title": "Opinion essays and discussion essays (B1ΓÇôB2)",
  "intro": "<p>Essays answer a question or statement in a <b>formal, logical</b> way.</p><ul><li><b>Opinion essay</b> (ΓÇ£To what extent do you agree?ΓÇ¥): state your opinion in the introduction and support it in every body paragraph; you may include and reject one counter-argument.</li><li><b>Discussion essay</b> (ΓÇ£Discuss both views and give your opinionΓÇ¥): one paragraph for each side, then your opinion in the conclusion.</li></ul><p>Each body paragraph: <b>topic sentence ΓåÆ explanation ΓåÆ example ΓåÆ link</b>. Avoid contractions and very informal words.</p>",
  "steps": [
   "Analyse the question: opinion or discussion? Underline key words.",
   "Introduction: paraphrase the topic + give your opinion (or say you'll discuss both sides).",
   "Body 1: main argument + example.",
   "Body 2: second argument OR the other side + response.",
   "Conclusion: summarise and restate your opinion in new words ΓÇô no new ideas."
  ],
  "traps": [
   "No clear opinion in an opinion essay.",
   "Copying the question word for word in the introduction.",
   "Body paragraphs without examples.",
   "New arguments in the conclusion.",
   "Informal language: ΓÇ£a lot of stuffΓÇ¥, ΓÇ£kidsΓÇ¥, ΓÇ£I'mΓÇ¥."
  ],
  "vi": "B├ái luß║¡n: mß╗ƒ b├ái diß╗àn ─æß║ít lß║íi ─æß╗ü + n├¬u quan ─æiß╗âm; th├ón b├ái mß╗ùi ─æoß║ín c├│ c├óu chß╗º ─æß╗ü ΓÇô giß║úi th├¡ch ΓÇô v├¡ dß╗Ñ; kß║┐t luß║¡n t├│m tß║»t v├á nhß║»c lß║íi quan ─æiß╗âm (kh├┤ng th├¬m ├╜ mß╗¢i). V─ân phong trang trß╗ìng, kh├┤ng viß║┐t tß║»t. Opinion essay: ß╗ºng hß╗Ö mß╗Öt ph├¡a; discussion essay: tr├¼nh b├áy hai ph├¡a rß╗ôi n├¬u ├╜ kiß║┐n.",
  "structure": [
   "Introduction: background + thesis (In my view,ΓÇª / This essay will discussΓÇª)",
   "Body 1: Firstly,ΓÇª For example,ΓÇª",
   "Body 2: Furthermore,ΓÇª / On the other hand, some argue thatΓÇª",
   "(Body 3: counter-argument and response)",
   "Conclusion: In conclusion,ΓÇª (restate opinion)"
  ],
  "phrases": [
   "It is often argued thatΓÇª",
   "In my view / I firmly believe thatΓÇª",
   "Firstly, ΓÇª Secondly, ΓÇª",
   "A good example of this isΓÇª",
   "Furthermore / Moreover,ΓÇª",
   "On the other hand, critics claim thatΓÇª",
   "Nevertheless,ΓÇª",
   "In conclusion, / To sum up,ΓÇª"
  ],
  "example": {
   "ctx": "ΓÇ£Technology in classrooms does more harm than good.ΓÇ¥ To what extent do you agree?",
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
  "icon": "≡ƒôè",
  "title": "Reports and proposals (B2)",
  "intro": "<p>A <b>report</b> describes a situation and makes recommendations for someone in authority (a principal, manager). A <b>proposal</b> suggests a plan for the future. Both use <b>headings</b>, a <b>formal, impersonal style</b> and often the passive voice.</p><ul><li>Report: <i>Introduction ΓåÆ Findings / Current situation ΓåÆ Problems ΓåÆ Recommendations ΓåÆ Conclusion</i></li><li>Proposal: <i>Introduction ΓåÆ Current situation ΓåÆ Suggestions ΓåÆ Expected benefits / Conclusion</i></li></ul>",
  "steps": [
   "Write a clear title (Report onΓÇª / Proposal forΓÇª).",
   "Introduction: state the aim and where your information comes from.",
   "Use one heading per section; keep paragraphs short.",
   "Present facts objectively (it was found thatΓÇª, the majority of studentsΓÇª).",
   "Recommendations: specific, practical actions (It is recommended thatΓÇª, ΓÇª should beΓÇª)."
  ],
  "traps": [
   "No headings.",
   "Writing like a story or a personal letter.",
   "Vague recommendations (ΓÇ£make it betterΓÇ¥).",
   "Too many ΓÇ£IΓÇ¥ sentences ΓÇô use impersonal forms."
  ],
  "vi": "B├ío c├ío/─æß╗ü xuß║Ñt: c├│ ti├¬u ─æß╗ü v├á c├íc mß╗Ñc (Introduction, Current situation, Problems, Recommendations, Conclusion). V─ân phong trang trß╗ìng, kh├ích quan, hay d├╣ng bß╗ï ─æß╗Öng (It was found thatΓÇª, It is recommended thatΓÇª). ─Éß╗ü xuß║Ñt phß║úi cß╗Ñ thß╗â, khß║ú thi.",
  "structure": [
   "Title",
   "Introduction: The aim of this report is toΓÇª",
   "Current situation / Findings",
   "Problems",
   "Recommendations",
   "Conclusion"
  ],
  "phrases": [
   "The aim of this report is toΓÇª",
   "The information is based on a survey ofΓÇª",
   "It was found thatΓÇª / The majority ofΓÇª",
   "A significant number of students stated thatΓÇª",
   "It is recommended thatΓÇª",
   "ΓÇª should be introduced / installed.",
   "If these changes are made, ΓÇª"
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
