// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, GrammarLesson } from "../types";

export const grammar: ByLevel<GrammarLesson[]> = {
 "A2": [
  {
   "id": "g-a2-1",
   "title": "Present simple and present continuous",
   "ex": "<p><b>Present simple</b> = habits, routines, facts: <i>I <b>work</b> in a bank. She <b>gets up</b> at 7.</i> Add <b>-s/-es</b> with he/she/it. Negative: <i>don't / doesn't + verb</i>.</p><p><b>Present continuous</b> = actions happening now or around now: <i>I <b>am reading</b>. They <b>are staying</b> with friends this week.</i> Form: <i>am/is/are + verb-ing</i>.</p><p>Signal words: <i>always, usually, every day</i> ΓåÆ simple; <i>now, at the moment, today, Look!</i> ΓåÆ continuous. State verbs (<i>like, know, want, need</i>) are usually not continuous.</p>",
   "vi": "Hiß╗çn tß║íi ─æ╞ín: th├│i quen, sß╗▒ thß║¡t (nhß╗¢ th├¬m -s/-es vß╗¢i he/she/it). Hiß╗çn tß║íi tiß║┐p diß╗àn: viß╗çc ─æang diß╗àn ra l├║c n├│i (am/is/are + V-ing). ─Éß╗Öng tß╗½ chß╗ë trß║íng th├íi nh╞░ like, know, want kh├┤ng chia tiß║┐p diß╗àn: n├│i ΓÇ£I knowΓÇ¥, kh├┤ng n├│i ΓÇ£I am knowingΓÇ¥.",
   "eg": [
    "My brother plays football every Sunday.",
    "Look! It's raining.",
    "She doesn't eat meat.",
    "What are you doing at the moment?"
   ],
   "q": [
    {
     "t": "mc",
     "q": "My sister ___ in a hospital.",
     "o": [
      "work",
      "works",
      "is work"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Be quiet! The baby ___.",
     "o": [
      "sleeps",
      "is sleeping",
      "sleep"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "He ___ (not / like) coffee.",
     "a": [
      "doesn't like",
      "does not like"
     ]
    },
    {
     "t": "mc",
     "q": "I ___ the answer.",
     "o": [
      "know",
      "am knowing",
      "knows"
     ],
     "a": 0,
     "x": "ΓÇ£knowΓÇ¥ is a state verb, so we use the present simple."
    },
    {
     "t": "gap",
     "q": "Look! They ___ (play) in the garden.",
     "a": [
      "are playing",
      "'re playing"
     ]
    },
    {
     "t": "mc",
     "q": "We usually ___ dinner at 7 p.m.",
     "o": [
      "are having",
      "have",
      "has"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "___ she speak Japanese?",
     "o": [
      "Do",
      "Does",
      "Is"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "This week I ___ (stay) with my aunt.",
     "a": [
      "am staying",
      "'m staying"
     ]
    },
    {
     "t": "mc",
     "q": "Water ___ at 100┬░C.",
     "o": [
      "boils",
      "is boiling",
      "boil"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What ___ you doing now?",
     "o": [
      "do",
      "are",
      "is"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-a2-2",
   "title": "Past simple",
   "ex": "<p>Use the <b>past simple</b> for finished actions in the past: <i>I <b>visited</b> Hue last year.</i></p><p>Regular verbs add <b>-ed</b>: <i>play ΓåÆ played, study ΓåÆ studied, stop ΓåÆ stopped</i>. Many common verbs are irregular: <i>go ΓåÆ went, have ΓåÆ had, see ΓåÆ saw, buy ΓåÆ bought, eat ΓåÆ ate</i>.</p><p>Negative and questions use <b>did</b> + base verb: <i>I <b>didn't go</b>. <b>Did</b> you <b>see</b> it?</i> (not <s>didn't went</s>). Be: <i>was / were</i>.</p><p>Signal words: <i>yesterday, last week, ago, in 2020</i>.</p>",
   "vi": "Qu├í khß╗⌐ ─æ╞ín diß╗àn tß║ú h├ánh ─æß╗Öng ─æ├ú kß║┐t th├║c. ─Éß╗Öng tß╗½ c├│ quy tß║»c th├¬m -ed; bß║Ñt quy tß║»c phß║úi hß╗ìc thuß╗Öc (go ΓåÆ went). Sau did/didn't d├╣ng ─æß╗Öng tß╗½ nguy├¬n mß║½u: ΓÇ£I didn't goΓÇ¥, kh├┤ng phß║úi ΓÇ£I didn't wentΓÇ¥.",
   "eg": [
    "We watched a film last night.",
    "She went to Da Nang two years ago.",
    "Did you finish your homework?",
    "I wasn't at home yesterday."
   ],
   "q": [
    {
     "t": "gap",
     "q": "Yesterday I ___ (go) to the cinema.",
     "a": "went"
    },
    {
     "t": "mc",
     "q": "She ___ her keys last night.",
     "o": [
      "lose",
      "losed",
      "lost"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "We didn't ___ the bus.",
     "o": [
      "catch",
      "caught",
      "catched"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "___ you enjoy the party?",
     "a": "did"
    },
    {
     "t": "mc",
     "q": "They ___ at home last Sunday.",
     "o": [
      "was",
      "were",
      "did"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "He ___ (study) English for two hours.",
     "a": "studied"
    },
    {
     "t": "mc",
     "q": "I ___ a new phone last month.",
     "o": [
      "buy",
      "bought",
      "buyed"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Where ___ you go on holiday?",
     "o": [
      "did",
      "do",
      "were"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "The train ___ (stop) at every station.",
     "a": "stopped"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I didn't saw him.",
      "I didn't see him.",
      "I not saw him."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-a2-3",
   "title": "Future: will and going to",
   "ex": "<p><b>Going to</b> = plans and intentions decided before speaking: <i>I'm <b>going to</b> visit my grandparents next week.</i> Also predictions based on what we can see: <i>Look at those clouds! It's <b>going to</b> rain.</i></p><p><b>Will</b> = decisions made at the moment of speaking, offers, promises and general predictions: <i>I'm thirsty. ΓÇô I'll get you some water. I think it <b>will</b> be sunny tomorrow.</i></p><p>Negative: <i>won't (= will not)</i>, <i>I'm not going toΓÇª</i></p>",
   "vi": "ΓÇ£Going toΓÇ¥ cho kß║┐ hoß║ích ─æ├ú ─æß╗ïnh tr╞░ß╗¢c hoß║╖c dß╗▒ ─æo├ín c├│ dß║Ñu hiß╗çu r├╡. ΓÇ£WillΓÇ¥ cho quyß║┐t ─æß╗ïnh ngay l├║c n├│i, lß╗¥i hß╗⌐a, ─æß╗ü nghß╗ï gi├║p ─æß╗í, dß╗▒ ─æo├ín chung (I think... will...).",
   "eg": [
    "We're going to move house in May.",
    "The phone's ringing. ΓÇô I'll answer it.",
    "I promise I won't be late.",
    "I think robots will do many jobs in the future."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I've decided. I ___ study medicine.",
     "o": [
      "will",
      "am going to",
      "going to"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "A: It's cold in here. B: I ___ close the window.",
     "o": [
      "'ll",
      "'m going to",
      "am"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Look at that car! It ___ crash!",
     "o": [
      "will",
      "is going to",
      "goes to"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I promise I ___ (not) tell anyone.",
     "a": [
      "won't",
      "will not"
     ]
    },
    {
     "t": "mc",
     "q": "I think she ___ win the competition.",
     "o": [
      "will",
      "is going",
      "going to"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "We ___ (travel) to Hanoi next weekend ΓÇô we've bought the tickets.",
     "a": [
      "are going to travel",
      "'re going to travel"
     ]
    },
    {
     "t": "mc",
     "q": "___ you help me with this bag, please?",
     "o": [
      "Will",
      "Are",
      "Going to"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What ___ do after school today?",
     "o": [
      "will you going to",
      "are you going to",
      "you will"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Don't worry. I ___ (call) you when I arrive.",
     "a": [
      "will call",
      "'ll call"
     ]
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I going to buy a car.",
      "I'm going to buy a car.",
      "I'm going buy a car."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-a2-4",
   "title": "Comparatives and superlatives",
   "ex": "<p><b>Short adjectives</b>: add <b>-er / -est</b>: <i>cheap ΓåÆ cheaper ΓåÆ the cheapest; big ΓåÆ bigger ΓåÆ the biggest; easy ΓåÆ easier ΓåÆ the easiest</i>.</p><p><b>Long adjectives</b>: <i>more / the most</i>: <i>expensive ΓåÆ more expensive ΓåÆ the most expensive</i>.</p><p>Irregular: <i>good ΓåÆ better ΓåÆ the best; bad ΓåÆ worse ΓåÆ the worst; far ΓåÆ further ΓåÆ the furthest</i>.</p><p>Use <b>than</b> with comparatives: <i>Hanoi is bigger <b>than</b> Hue.</i> Use <b>the</b> with superlatives. <i>as ΓÇª as</i> = equal: <i>She is as tall as me.</i></p>",
   "vi": "So s├ính h╞ín: t├¡nh tß╗½ ngß║»n + -er + than; t├¡nh tß╗½ d├ái: more + adj + than. So s├ính nhß║Ñt: the + -est / the most. Kh├┤ng d├╣ng ΓÇ£more betterΓÇ¥ ΓÇô chß╗ë n├│i ΓÇ£betterΓÇ¥.",
   "eg": [
    "My bag is heavier than yours.",
    "This is the most beautiful beach in the area.",
    "Today is worse than yesterday.",
    "He isn't as fast as his brother."
   ],
   "q": [
    {
     "t": "gap",
     "q": "A plane is ___ (fast) than a train.",
     "a": "faster"
    },
    {
     "t": "mc",
     "q": "This hotel is ___ than the other one.",
     "o": [
      "more cheap",
      "cheaper",
      "cheapest"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She is the ___ student in our class.",
     "o": [
      "most intelligent",
      "more intelligent",
      "intelligentest"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "My cooking is bad, but yours is ___!",
     "a": "worse"
    },
    {
     "t": "mc",
     "q": "It's the ___ day of the year.",
     "o": [
      "hotter",
      "hottest",
      "most hot"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "My phone is more better than yours.",
      "My phone is better than yours.",
      "My phone is gooder than yours."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "English is ___ (easy) than Chinese for me.",
     "a": "easier"
    },
    {
     "t": "mc",
     "q": "Tom is as tall ___ his father.",
     "o": [
      "than",
      "as",
      "like"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which is the ___ city in the world?",
     "o": [
      "bigest",
      "biggest",
      "most big"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "This film is ___ (interesting) than the book.",
     "a": "more interesting"
    }
   ]
  },
  {
   "id": "g-a2-5",
   "title": "Countable and uncountable nouns",
   "ex": "<p><b>Countable</b> nouns have singular and plural: <i>an apple, two apples</i>. <b>Uncountable</b> nouns have no plural and no <i>a/an</i>: <i>water, rice, money, information, advice, homework, furniture</i>.</p><p><i>some</i> (positive) / <i>any</i> (negatives and questions) ΓÇô with both types. <i>many / a few</i> + countable; <i>much / a little</i> + uncountable; <i>a lot of</i> + both.</p><p><i>How many apples? How much milk?</i> Use units for uncountable: <i>a bottle of water, a piece of advice, a cup of tea</i>.</p>",
   "vi": "Danh tß╗½ kh├┤ng ─æß║┐m ─æ╞░ß╗úc (water, rice, information, advice, homework...) kh├┤ng c├│ sß╗æ nhiß╗üu v├á kh├┤ng ─æi vß╗¢i a/an. many/a few + ─æß║┐m ─æ╞░ß╗úc; much/a little + kh├┤ng ─æß║┐m ─æ╞░ß╗úc. Lß╗ùi hay gß║╖p: ΓÇ£informationsΓÇ¥, ΓÇ£an adviceΓÇ¥.",
   "eg": [
    "There are some eggs in the fridge.",
    "We don't have much time.",
    "Can I give you a piece of advice?",
    "How many people came?"
   ],
   "q": [
    {
     "t": "mc",
     "q": "How ___ sugar do you want?",
     "o": [
      "many",
      "much",
      "a few"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "There aren't ___ chairs in the room.",
     "o": [
      "any",
      "much",
      "a little"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Can you give me some ___?",
     "o": [
      "advices",
      "advice",
      "an advice"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "How ___ students are in your class?",
     "a": "many"
    },
    {
     "t": "mc",
     "q": "I need ___ information about the course.",
     "o": [
      "an",
      "some",
      "many"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I have ___ friends in Da Nang.",
     "o": [
      "a few",
      "a little",
      "much"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "Would you like a ___ of tea?",
     "a": "cup"
    },
    {
     "t": "mc",
     "q": "We have ___ homework today.",
     "o": [
      "many",
      "a lot of",
      "a"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "The furnitures are new.",
      "The furniture is new.",
      "A furniture is new."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "There's only a ___ milk left. Let's buy some more.",
     "a": "little"
    }
   ]
  },
  {
   "id": "g-a2-6",
   "title": "can, must, have to",
   "ex": "<p><b>can / can't</b> = ability or permission: <i>I <b>can</b> swim. <b>Can</b> I open the window?</i></p><p><b>must</b> = strong obligation, often from the speaker or rules: <i>You <b>must</b> wear a seatbelt.</i> <b>mustn't</b> = it is not allowed: <i>You <b>mustn't</b> smoke here.</i></p><p><b>have to</b> = obligation from outside (rules, situation): <i>I <b>have to</b> wear a uniform at school.</i> <b>don't have to</b> = it is not necessary: <i>You <b>don't have to</b> come ΓÇô it's optional.</i></p><p>After modal verbs use the base verb without <i>to</i>: <s>can to swim</s> ΓåÆ <i>can swim</i>.</p>",
   "vi": "can: khß║ú n─âng/xin ph├⌐p. must: bß║»t buß╗Öc (mß║ính). mustn't: cß║Ñm. have to: bß║»t buß╗Öc do ho├án cß║únh/quy ─æß╗ïnh. don't have to: kh├┤ng cß║ºn thiß║┐t (KH├üC vß╗¢i mustn't). Sau can/must kh├┤ng c├│ ΓÇ£toΓÇ¥.",
   "eg": [
    "She can speak three languages.",
    "You mustn't use your phone in the exam.",
    "We have to get up early tomorrow.",
    "You don't have to pay. It's free."
   ],
   "q": [
    {
     "t": "mc",
     "q": "You ___ touch that. It's dangerous!",
     "o": [
      "mustn't",
      "don't have to",
      "can"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "It's Sunday, so I ___ go to work.",
     "o": [
      "mustn't",
      "don't have to",
      "can't to"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "___ I use your pen, please?",
     "o": [
      "Must",
      "Can",
      "Have"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Students ___ wear a uniform. It's a school rule. (have)",
     "a": [
      "have to",
      "must"
     ]
    },
    {
     "t": "mc",
     "q": "My grandfather ___ use a computer.",
     "o": [
      "can't",
      "mustn't",
      "doesn't have"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I can to play the piano.",
      "I can play the piano.",
      "I can playing the piano."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "She ___ work on Saturdays ΓÇô she has a day off. (not / have to)",
     "a": [
      "doesn't have to",
      "does not have to"
     ]
    },
    {
     "t": "mc",
     "q": "You ___ be 18 to drive a car in Vietnam.",
     "o": [
      "have to",
      "can",
      "don't have to"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Does he ___ get up early?",
     "o": [
      "must",
      "have to",
      "has to"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Passengers ___ smoke on the plane. It's not allowed.",
     "a": [
      "mustn't",
      "must not",
      "can't",
      "cannot"
     ]
    }
   ]
  },
  {
   "id": "g-a2-7",
   "title": "Prepositions of time and place",
   "ex": "<p><b>Time</b>: <b>at</b> + clock times and short expressions (<i>at 7 o'clock, at night, at the weekend</i>); <b>on</b> + days and dates (<i>on Monday, on 5th May, on my birthday</i>); <b>in</b> + months, years, seasons, parts of the day (<i>in July, in 2025, in summer, in the morning</i>).</p><p><b>Place</b>: <b>in</b> = inside an area (<i>in the kitchen, in Hanoi</i>); <b>on</b> = on a surface or line (<i>on the table, on the wall, on the second floor</i>); <b>at</b> = a point or place for an activity (<i>at the bus stop, at school, at home</i>). Also: <i>next to, between, opposite, behind, under, in front of</i>.</p>",
   "vi": "Thß╗¥i gian: at + giß╗¥; on + ng├áy/thß╗⌐; in + th├íng/n─âm/m├╣a/buß╗òi. N╞íi chß╗æn: in (b├¬n trong), on (tr├¬n bß╗ü mß║╖t, tß║ºng), at (mß╗Öt ─æiß╗âm cß╗Ñ thß╗â: at school, at home).",
   "eg": [
    "The meeting is at 3 p.m. on Friday.",
    "I was born in 2008.",
    "Your keys are on the table.",
    "Meet me at the station."
   ],
   "q": [
    {
     "t": "mc",
     "q": "The film starts ___ 8 o'clock.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "My birthday is ___ June.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "We have English ___ Tuesdays.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I usually study ___ the evening.",
     "a": "in"
    },
    {
     "t": "mc",
     "q": "The picture is ___ the wall.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She lives ___ Ho Chi Minh City.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "I'll wait for you ___ the bus stop.",
     "a": "at"
    },
    {
     "t": "mc",
     "q": "The bank is ___ the post office and the caf├⌐.",
     "o": [
      "between",
      "opposite of",
      "next"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "What do you do ___ the weekend? (UK)",
     "a": "at"
    },
    {
     "t": "mc",
     "q": "Our flat is ___ the third floor.",
     "o": [
      "in",
      "on",
      "at"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-a2-8",
   "title": "Articles: a, an, the",
   "ex": "<p><b>a / an</b> = one thing, mentioned for the first time, or a job: <i>I saw <b>a</b> film. She's <b>an</b> engineer.</i> Use <b>an</b> before a vowel <b>sound</b>: <i>an apple, an hour</i> (but <i>a university</i>).</p><p><b>the</b> = something already mentioned, or the only one: <i>The film was great. <b>The</b> sun is hot.</i> Also with superlatives (<i>the best</i>), some places (<i>the cinema, the bank</i>) and instruments (<i>play the piano</i>).</p><p><b>No article</b> with plural or uncountable nouns in general, meals, sports and most cities/countries: <i>I like <b>cats</b>. We have <b>lunch</b> at 12. She plays <b>tennis</b>. I live in <b>Hanoi</b>.</i></p>",
   "vi": "a/an: mß╗Öt vß║¡t ch╞░a x├íc ─æß╗ïnh, nghß╗ü nghiß╗çp (an tr╞░ß╗¢c nguy├¬n ├óm theo c├ích ─æß╗ìc: an hour, a university). the: vß║¡t ─æ├ú biß║┐t, duy nhß║Ñt, so s├ính nhß║Ñt. Kh├┤ng d├╣ng mß║ío tß╗½ khi n├│i chung chung vß╗¢i danh tß╗½ sß╗æ nhiß╗üu/kh├┤ng ─æß║┐m ─æ╞░ß╗úc, bß╗»a ─ân, m├┤n thß╗â thao.",
   "eg": [
    "I've got a dog. The dog is called Milo.",
    "She's an architect.",
    "The Moon goes around the Earth.",
    "I usually have breakfast at seven."
   ],
   "q": [
    {
     "t": "mc",
     "q": "My father is ___ doctor.",
     "o": [
      "a",
      "an",
      "the"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "I waited for ___ hour.",
     "o": [
      "a",
      "an",
      "the"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Can you close ___ door, please?",
     "o": [
      "a",
      "an",
      "the"
     ],
     "a": 2
    },
    {
     "t": "gap",
     "q": "She plays ___ guitar in a band.",
     "a": "the"
    },
    {
     "t": "mc",
     "q": "I love ___ music.",
     "o": [
      "the",
      "a",
      "ΓÇö"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "He studies at ___ university in Hue.",
     "o": [
      "a",
      "an",
      "ΓÇö"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "This is ___ best pizza in town.",
     "a": "the"
    },
    {
     "t": "mc",
     "q": "We have ___ dinner at 7 p.m.",
     "o": [
      "a",
      "the",
      "ΓÇö"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "I bought ___ umbrella yesterday.",
     "o": [
      "a",
      "an",
      "the"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I like the football.",
      "I like football.",
      "I like a football."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-a2-9",
   "title": "Adverbs of frequency and present habits",
   "ex": "<p>Adverbs of frequency say <b>how often</b>: <i>always (100%) ΓåÆ usually ΓåÆ often ΓåÆ sometimes ΓåÆ rarely ΓåÆ never (0%)</i>.</p><p>Position: <b>before</b> the main verb (<i>I <b>often</b> walk to school</i>) but <b>after</b> the verb <i>be</i> (<i>She is <b>always</b> late</i>).</p><p>Questions: <i>How often do youΓÇª?</i> Answers with expressions: <i>every day, once a week, twice a month, three times a year</i> (usually at the end of the sentence).</p>",
   "vi": "Trß║íng tß╗½ tß║ºn suß║Ñt (always, usually, often, sometimes, rarely, never) ─æß╗⌐ng tr╞░ß╗¢c ─æß╗Öng tß╗½ th╞░ß╗¥ng nh╞░ng sau ─æß╗Öng tß╗½ to be. How often...? trß║ú lß╗¥i bß║▒ng once/twice/three times a week...",
   "eg": [
    "I usually get up at six.",
    "He is never late.",
    "We go swimming twice a week.",
    "How often do you visit your grandparents?"
   ],
   "q": [
    {
     "t": "mc",
     "q": "Choose the correct order.",
     "o": [
      "I go always to bed late.",
      "I always go to bed late.",
      "Always I go to bed late."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She ___ tired on Mondays.",
     "o": [
      "often is",
      "is often",
      "often"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "How ___ do you play football? ΓÇô Twice a week.",
     "a": "often"
    },
    {
     "t": "mc",
     "q": "I ___ eat meat. I'm a vegetarian.",
     "o": [
      "always",
      "never",
      "usually"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "We visit our grandparents ___.",
     "o": [
      "once a month",
      "a month once",
      "once month"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "I go to the gym three ___ a week.",
     "a": "times"
    },
    {
     "t": "mc",
     "q": "They ___ watch TV in the evening.",
     "o": [
      "sometimes",
      "are sometimes",
      "sometime"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Which means about 10%?",
     "o": [
      "usually",
      "rarely",
      "often"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "He is usually at home.",
      "He usually is at home.",
      "Usually he at home."
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "My brother is ___ (100%) hungry after school.",
     "a": "always"
    }
   ]
  }
 ],
 "B1": [
  {
   "id": "g-b1-1",
   "title": "Present perfect vs past simple",
   "ex": "<p><b>Present perfect</b> (<i>have/has + past participle</i>) connects the past with now: experiences (<i>I've <b>been</b> to Japan.</i>), unfinished time (<i>I've <b>lived</b> here <b>for</b> five years / <b>since</b> 2020.</i>), recent results (<i>I've <b>lost</b> my keys.</i>). Common words: <i>ever, never, already, yet, just, for, since</i>.</p><p><b>Past simple</b> = finished time, often with a time expression: <i>I <b>went</b> to Japan <b>in 2019</b>.</i> Don't use the present perfect with <i>yesterday, last year, ago</i>.</p><p><b>for</b> + a period (<i>for three weeks</i>); <b>since</b> + a starting point (<i>since Monday</i>).</p>",
   "vi": "Hiß╗çn tß║íi ho├án th├ánh: kinh nghiß╗çm, viß╗çc k├⌐o d├ái ─æß║┐n nay, kß║┐t quß║ú c├▓n li├¬n quan hiß╗çn tß║íi. Qu├í khß╗⌐ ─æ╞ín: thß╗¥i ─æiß╗âm ─æ├ú kß║┐t th├║c r├╡ r├áng (yesterday, last year, ago). for + khoß║úng thß╗¥i gian; since + mß╗æc thß╗¥i gian. Lß╗ùi hay gß║╖p: ΓÇ£I have seen him yesterdayΓÇ¥.",
   "eg": [
    "Have you ever eaten durian?",
    "She has worked here since 2021.",
    "I saw that film last week.",
    "We haven't finished yet."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I ___ to London three times.",
     "o": [
      "have been",
      "went",
      "was"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "She ___ her phone yesterday.",
     "o": [
      "has lost",
      "lost",
      "have lost"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "We've known each other ___ 2015.",
     "a": "since"
    },
    {
     "t": "gap",
     "q": "They have lived in this house ___ ten years.",
     "a": "for"
    },
    {
     "t": "mc",
     "q": "___ you ever tried sushi?",
     "o": [
      "Did",
      "Have",
      "Were"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I ___ him two days ago.",
     "o": [
      "have met",
      "met",
      "meet"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Have you finished your homework ___? (question about now)",
     "a": "yet"
    },
    {
     "t": "mc",
     "q": "He has ___ arrived. He's taking off his coat.",
     "o": [
      "just",
      "yet",
      "ever"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I have seen her last night.",
      "I saw her last night.",
      "I have saw her last night."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "How long ___ you worked here? (present perfect)",
     "a": "have"
    }
   ]
  },
  {
   "id": "g-b1-2",
   "title": "Past continuous",
   "ex": "<p>Form: <i>was/were + verb-ing</i>. Use it for an action <b>in progress</b> at a time in the past: <i>At 8 p.m. I <b>was watching</b> TV.</i></p><p>Often used with the past simple: the long action (continuous) is interrupted by a short action (simple): <i>I <b>was walking</b> home <b>when</b> it <b>started</b> to rain.</i> <i>While</i> + continuous: <i><b>While</b> she <b>was cooking</b>, the phone rang.</i></p><p>Two actions at the same time: <i>He was reading while I was studying.</i></p>",
   "vi": "Qu├í khß╗⌐ tiß║┐p diß╗àn (was/were + V-ing): h├ánh ─æß╗Öng ─æang diß╗àn ra tß║íi mß╗Öt thß╗¥i ─æiß╗âm trong qu├í khß╗⌐. Kß║┐t hß╗úp vß╗¢i qu├í khß╗⌐ ─æ╞ín: h├ánh ─æß╗Öng d├ái (tiß║┐p diß╗àn) bß╗ï h├ánh ─æß╗Öng ngß║»n (qu├í khß╗⌐ ─æ╞ín) chen v├áo. when + qu├í khß╗⌐ ─æ╞ín, while + qu├í khß╗⌐ tiß║┐p diß╗àn.",
   "eg": [
    "I was sleeping when you called.",
    "What were you doing at 10 o'clock?",
    "While we were waiting, it started to snow.",
    "They weren't listening to the teacher."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I ___ a shower when the doorbell rang.",
     "o": [
      "had",
      "was having",
      "have"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "While she was driving, she ___ an accident.",
     "o": [
      "saw",
      "was seeing",
      "sees"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "At 9 p.m. yesterday, we ___ (watch) a film.",
     "a": "were watching"
    },
    {
     "t": "mc",
     "q": "What ___ you doing at midnight?",
     "o": [
      "did",
      "were",
      "was"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "He fell off his bike while he ___ (ride) to school.",
     "a": "was riding"
    },
    {
     "t": "mc",
     "q": "The children ___ when the teacher came in.",
     "o": [
      "were shouting",
      "shouted",
      "shouts"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "It ___ when we left the house.",
     "o": [
      "was raining",
      "rained",
      "is raining"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "I ___ (not / listen), so I didn't hear the question.",
     "a": [
      "wasn't listening",
      "was not listening"
     ]
    },
    {
     "t": "mc",
     "q": "___ she was cooking, he set the table.",
     "o": [
      "When",
      "While",
      "During"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I broke my leg when I ___.",
     "o": [
      "was skiing",
      "skiing",
      "was ski"
     ],
     "a": 0
    }
   ]
  },
  {
   "id": "g-b1-3",
   "title": "First and second conditionals",
   "ex": "<p><b>First conditional</b> = real or likely future situations: <i>If + present simple, will + verb</i>. <i>If it <b>rains</b>, we <b>will stay</b> at home.</i></p><p><b>Second conditional</b> = unreal, imaginary or unlikely situations (now/future): <i>If + past simple, would + verb</i>. <i>If I <b>had</b> more money, I <b>would travel</b> around the world.</i> With <i>be</i>, we often use <i>were</i> for all persons: <i>If I <b>were</b> you, I'd apologise.</i></p><p><i>unless</i> = if ΓÇª not: <i>You'll miss the bus unless you hurry.</i></p>",
   "vi": "─Éiß╗üu kiß╗çn loß║íi 1 (c├│ thß╗â xß║úy ra): If + hiß╗çn tß║íi ─æ╞ín, will + V. Loß║íi 2 (kh├┤ng c├│ thß║¡t ß╗ƒ hiß╗çn tß║íi/kh├│ xß║úy ra): If + qu├í khß╗⌐ ─æ╞ín, would + V. Kh├┤ng d├╣ng ΓÇ£willΓÇ¥ sau ΓÇ£ifΓÇ¥ trong mß╗çnh ─æß╗ü ─æiß╗üu kiß╗çn: ΓÇ£If it will rainΓÇ¥ l├á sai.",
   "eg": [
    "If you study hard, you'll pass.",
    "If I won the lottery, I'd buy a house.",
    "If I were you, I'd take the job.",
    "Unless you leave now, you'll be late."
   ],
   "q": [
    {
     "t": "mc",
     "q": "If it ___ tomorrow, we'll go to the beach.",
     "o": [
      "will be sunny",
      "is sunny",
      "was sunny"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "If I had a car, I ___ you to the airport.",
     "o": [
      "will drive",
      "would drive",
      "drive"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If I ___ (be) you, I would talk to her.",
     "a": "were"
    },
    {
     "t": "mc",
     "q": "You'll be tired ___ you go to bed early.",
     "o": [
      "if",
      "unless",
      "when"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If she ___ (miss) the bus, she will walk.",
     "a": "misses"
    },
    {
     "t": "mc",
     "q": "What would you do if you ___ a famous person?",
     "o": [
      "meet",
      "met",
      "will meet"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "If we don't hurry, we ___ the train.",
     "o": [
      "would miss",
      "will miss",
      "missed"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If I knew the answer, I ___ (tell) you.",
     "a": [
      "would tell",
      "'d tell"
     ]
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "If it will rain, I will stay home.",
      "If it rains, I will stay home.",
      "If it rains, I would stay home."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "If he ___ more, he would be healthier.",
     "o": [
      "exercises",
      "exercised",
      "will exercise"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b1-4",
   "title": "Passive voice (basic)",
   "ex": "<p>Use the <b>passive</b> when the action is more important than who does it, or when we don't know who does it. Form: <i>be + past participle</i>.</p><p>Present simple: <i>English <b>is spoken</b> in many countries.</i> Past simple: <i>The bridge <b>was built</b> in 1902.</i> Present perfect: <i>My bike <b>has been stolen</b>!</i> Future: <i>The results <b>will be announced</b> tomorrow.</i></p><p>Use <b>by</b> to say who did it (only if important): <i>The book was written <b>by</b> a teacher.</i></p>",
   "vi": "C├óu bß╗ï ─æß╗Öng: be + V3/ed. D├╣ng khi h├ánh ─æß╗Öng quan trß╗ìng h╞ín ng╞░ß╗¥i l├ám. Chia ΓÇ£beΓÇ¥ theo th├¼: is/are (hiß╗çn tß║íi), was/were (qu├í khß╗⌐), has been (hiß╗çn tß║íi ho├án th├ánh), will be (t╞░╞íng lai). by + ng╞░ß╗¥i thß╗▒c hiß╗çn (nß║┐u cß║ºn).",
   "eg": [
    "Coffee is grown in the Central Highlands.",
    "The window was broken last night.",
    "The match has been cancelled.",
    "The new school will be opened next year."
   ],
   "q": [
    {
     "t": "mc",
     "q": "Rice ___ in many Asian countries.",
     "o": [
      "grows",
      "is grown",
      "is grow"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "This house ___ (build) in 1990.",
     "a": "was built"
    },
    {
     "t": "mc",
     "q": "The letters ___ every morning.",
     "o": [
      "are delivered",
      "deliver",
      "are deliver"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "My wallet ___! I can't find it anywhere.",
     "o": [
      "has stolen",
      "has been stolen",
      "was steal"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The winners will ___ (announce) tomorrow.",
     "a": "be announced"
    },
    {
     "t": "mc",
     "q": "ΓÇ£Romeo and JulietΓÇ¥ was written ___ Shakespeare.",
     "o": [
      "from",
      "by",
      "with"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Choose the passive: ΓÇ£Someone cleans the office every day.ΓÇ¥",
     "o": [
      "The office cleans every day.",
      "The office is cleaned every day.",
      "The office was cleaned every day."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The museum ___ (visit) by thousands of people every year.",
     "a": "is visited"
    },
    {
     "t": "mc",
     "q": "The meeting ___ because the manager was ill.",
     "o": [
      "was cancelled",
      "cancelled",
      "is cancel"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Smartphones ___ in factories all over the world.",
     "o": [
      "make",
      "are made",
      "are making"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b1-5",
   "title": "Relative clauses",
   "ex": "<p>Relative clauses give more information about a noun. <b>who</b> = people, <b>which</b> = things, <b>that</b> = people or things (defining clauses), <b>where</b> = places, <b>whose</b> = possession.</p><p><b>Defining</b> (necessary information, no commas): <i>The woman <b>who lives next door</b> is a doctor.</i></p><p><b>Non-defining</b> (extra information, with commas, no <i>that</i>): <i>My brother, <b>who lives in Hue</b>, is a teacher.</i></p><p>You can leave out <i>who/which/that</i> when it is the object: <i>The book (that) I bought is great.</i></p>",
   "vi": "Mß╗çnh ─æß╗ü quan hß╗ç: who (ng╞░ß╗¥i), which (vß║¡t), that (ng╞░ß╗¥i/vß║¡t, chß╗ë trong mß╗çnh ─æß╗ü x├íc ─æß╗ïnh), where (n╞íi chß╗æn), whose (sß╗ƒ hß╗»u). Mß╗çnh ─æß╗ü kh├┤ng x├íc ─æß╗ïnh c├│ dß║Ñu phß║⌐y v├á kh├┤ng d├╣ng ΓÇ£thatΓÇ¥.",
   "eg": [
    "That's the man who helped me.",
    "The phone which I bought last week is broken.",
    "This is the caf├⌐ where we first met.",
    "I have a friend whose father is a pilot."
   ],
   "q": [
    {
     "t": "mc",
     "q": "The girl ___ won the prize is my cousin.",
     "o": [
      "which",
      "who",
      "where"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "This is the town ___ I grew up.",
     "o": [
      "which",
      "where",
      "who"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "The laptop ___ I bought is very fast. (thing)",
     "a": [
      "which",
      "that"
     ]
    },
    {
     "t": "mc",
     "q": "I know a man ___ dog can open doors.",
     "o": [
      "who",
      "whose",
      "which"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "My mother, ___ is 50, still runs every day.",
     "o": [
      "that",
      "who",
      "which"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Do you remember the restaurant ___ we had dinner last year?",
     "a": "where"
    },
    {
     "t": "mc",
     "q": "The film ___ we watched was boring.",
     "o": [
      "who",
      "what",
      "that"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "Hanoi, that is the capital, is busy.",
      "Hanoi, which is the capital, is busy.",
      "Hanoi, where is the capital, is busy."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "A teacher is a person ___ helps students learn.",
     "a": [
      "who",
      "that"
     ]
    },
    {
     "t": "mc",
     "q": "That's the student ___ essay won the competition.",
     "o": [
      "who",
      "whose",
      "which"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b1-6",
   "title": "used to",
   "ex": "<p><b>used to + verb</b> = past habits or states that are not true now: <i>I <b>used to</b> play the piano, but I stopped.</i> <i>There <b>used to</b> be a cinema here.</i></p><p>Negative: <i>didn't use to</i>. Question: <i>Did you use toΓÇª?</i> (no <i>-d</i> after did).</p><p>Don't confuse with <b>be used to + -ing</b> = be familiar with: <i>I'm used to getting up early.</i></p>",
   "vi": "used to + V: th├│i quen/trß║íng th├íi trong qu├í khß╗⌐ nay kh├┤ng c├▓n. Phß╗º ─æß╗ïnh/nghi vß║Ñn: didn't use to / Did you use to (kh├┤ng c├│ -d). Kh├íc vß╗¢i ΓÇ£be used to + V-ingΓÇ¥ (─æ├ú quen vß╗¢i).",
   "eg": [
    "I used to live in the countryside.",
    "She didn't use to like vegetables.",
    "Did you use to walk to school?",
    "He's used to working at night."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I ___ play football every day when I was a child.",
     "o": [
      "use to",
      "used to",
      "was used to"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "There ___ be a park here, but now it's a car park. (two words)",
     "a": "used to"
    },
    {
     "t": "mc",
     "q": "Did you ___ have long hair?",
     "o": [
      "used to",
      "use to",
      "using to"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She didn't ___ drink coffee.",
     "o": [
      "use to",
      "used to",
      "uses to"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "I'm used to ___ in a big city now.",
     "o": [
      "live",
      "living",
      "lived"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "My grandparents ___ (use to) write letters instead of emails.",
     "a": "used to"
    },
    {
     "t": "mc",
     "q": "Which sentence talks about a past habit?",
     "o": [
      "I used to swim every morning.",
      "I'm used to swimming.",
      "I use to swim."
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "He ___ be shy, but now he's very confident.",
     "o": [
      "used to",
      "is used to",
      "use"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "We ___ (not) use to have a TV.",
     "a": [
      "didn't",
      "did not"
     ]
    },
    {
     "t": "mc",
     "q": "Choose the correct question.",
     "o": [
      "Did you used to play games?",
      "Did you use to play games?",
      "Used you to play games?"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b1-7",
   "title": "Gerunds and infinitives (basic)",
   "ex": "<p>Some verbs are followed by <b>-ing</b> (gerund): <i>enjoy, finish, mind, avoid, suggest, keep, practise</i>: <i>I enjoy <b>reading</b>.</i></p><p>Some verbs are followed by <b>to + verb</b> (infinitive): <i>want, decide, hope, plan, agree, promise, need, would like</i>: <i>She decided <b>to leave</b>.</i></p><p>After prepositions use <b>-ing</b>: <i>I'm good at <b>drawing</b>. Thanks for <b>helping</b>.</i> As a subject, use -ing: <i><b>Swimming</b> is good exercise.</i> After adjectives, often to + verb: <i>It's easy <b>to learn</b>.</i></p>",
   "vi": "─Éß╗Öng tß╗½ + V-ing: enjoy, finish, mind, avoid, suggest, keep. ─Éß╗Öng tß╗½ + to V: want, decide, hope, plan, agree, promise, need. Sau giß╗¢i tß╗½ lu├┤n d├╣ng V-ing: interested in learning, good at cooking.",
   "eg": [
    "I've finished doing my homework.",
    "We hope to see you soon.",
    "She's interested in learning Korean.",
    "It's important to drink enough water."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I enjoy ___ to music.",
     "o": [
      "to listen",
      "listening",
      "listen"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She wants ___ a doctor.",
     "o": [
      "to become",
      "becoming",
      "become"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "Have you finished ___ (write) your essay?",
     "a": "writing"
    },
    {
     "t": "mc",
     "q": "They decided ___ by train.",
     "o": [
      "travelling",
      "to travel",
      "travel"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "He's good at ___ photos.",
     "o": [
      "take",
      "to take",
      "taking"
     ],
     "a": 2
    },
    {
     "t": "gap",
     "q": "Would you mind ___ (open) the window?",
     "a": "opening"
    },
    {
     "t": "mc",
     "q": "I hope ___ you again soon.",
     "o": [
      "seeing",
      "to see",
      "see"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "___ too much sugar is bad for you.",
     "o": [
      "Eat",
      "To eating",
      "Eating"
     ],
     "a": 2
    },
    {
     "t": "gap",
     "q": "We agreed ___ (meet) at six.",
     "a": "to meet"
    },
    {
     "t": "mc",
     "q": "Thanks for ___ me!",
     "o": [
      "help",
      "to help",
      "helping"
     ],
     "a": 2
    }
   ]
  },
  {
   "id": "g-b1-8",
   "title": "Modal verbs: should, might, may, could",
   "ex": "<p><b>should / shouldn't</b> = advice: <i>You <b>should</b> see a doctor. You <b>shouldn't</b> work so late.</i> (<i>ought to</i> is similar but more formal.)</p><p><b>might / may / could</b> = possibility: <i>It <b>might</b> rain later. She <b>may</b> be at the library. We <b>could</b> go to the beach if it's sunny.</i> Negative possibility: <i>might not / may not</i> (not <s>couldn't</s> for possibility).</p><p><b>could</b> also = past ability and polite requests: <i>I <b>could</b> swim when I was five. <b>Could</b> you help me?</i></p><p>After all modals: base verb without <i>to</i>.</p>",
   "vi": "should: lß╗¥i khuy├¬n. might/may/could: khß║ú n─âng (c├│ thß╗â). might not/may not: c├│ thß╗â kh├┤ng. could c├▓n d├╣ng cho khß║ú n─âng trong qu├í khß╗⌐ v├á lß╗¥i ─æß╗ü nghß╗ï lß╗ïch sß╗▒. Sau modal l├á ─æß╗Öng tß╗½ nguy├¬n mß║½u kh├┤ng ΓÇ£toΓÇ¥.",
   "eg": [
    "You should drink more water.",
    "I might go out tonight, but I'm not sure.",
    "Could you open the window, please?",
    "He may not come to the party."
   ],
   "q": [
    {
     "t": "mc",
     "q": "You look tired. You ___ go to bed.",
     "o": [
      "should",
      "might",
      "could to"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Take an umbrella. It ___ rain.",
     "o": [
      "should",
      "might",
      "must"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "You ___ eat so much sugar. It's bad for you. (negative advice)",
     "a": [
      "shouldn't",
      "should not"
     ]
    },
    {
     "t": "mc",
     "q": "___ you tell me the time, please?",
     "o": [
      "Should",
      "Could",
      "Might"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I'm not sure, but she ___ be at work.",
     "o": [
      "may",
      "should",
      "can't"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "When I was a child, I ___ climb trees very fast. (past ability)",
     "a": "could"
    },
    {
     "t": "mc",
     "q": "We ___ not finish today. There's too much work.",
     "o": [
      "might",
      "should",
      "could"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "You should to study.",
      "You should study.",
      "You should studying."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What's the best advice? ΓÇ£I have a terrible toothache.ΓÇ¥",
     "o": [
      "You might see a dentist.",
      "You should see a dentist.",
      "You could to see a dentist."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I'm not sure what to do this weekend. I ___ visit my aunt. (possibility)",
     "a": [
      "might",
      "may",
      "could"
     ]
    }
   ]
  },
  {
   "id": "g-b1-9",
   "title": "Future forms: present continuous, going to, will, present simple",
   "ex": "<p><b>Present continuous</b> = fixed arrangements (often with a time and place): <i>I'm <b>meeting</b> Tom at six.</i></p><p><b>Be going to</b> = plans and intentions: <i>I'm <b>going to</b> learn Korean next year.</i></p><p><b>Will</b> = predictions, instant decisions, promises: <i>I think it <b>will</b> be difficult. I'<b>ll</b> call you later.</i></p><p><b>Present simple</b> = timetables and schedules: <i>The train <b>leaves</b> at 8.15. The course <b>starts</b> on Monday.</i></p><p>After <i>when, as soon as, before, after, until</i> about the future, use the <b>present simple</b>: <i>I'll call you <b>when</b> I <b>arrive</b>.</i></p>",
   "vi": "T╞░╞íng lai: hiß╗çn tß║íi tiß║┐p diß╗àn (lß╗ïch hß║╣n ─æ├ú sß║»p xß║┐p), be going to (dß╗▒ ─æß╗ïnh), will (dß╗▒ ─æo├ín, quyß║┐t ─æß╗ïnh tß╗⌐c thß╗¥i, lß╗¥i hß╗⌐a), hiß╗çn tß║íi ─æ╞ín (lß╗ïch tr├¼nh, thß╗¥i gian biß╗âu). Sau when/as soon as... d├╣ng hiß╗çn tß║íi ─æ╞ín.",
   "eg": [
    "We're flying to Da Nang on Friday.",
    "The film starts at 7.30.",
    "I'll text you as soon as I get home.",
    "She's going to study abroad."
   ],
   "q": [
    {
     "t": "mc",
     "q": "The bus ___ at 9.45 tomorrow. (timetable)",
     "o": [
      "leaves",
      "is going to leave",
      "will leaving"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "I ___ the dentist at 3 p.m. on Monday. It's booked.",
     "o": [
      "see",
      "'m seeing",
      "'ll see"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I'll phone you when I ___ (arrive).",
     "a": "arrive"
    },
    {
     "t": "mc",
     "q": "I think robots ___ do most housework in the future.",
     "o": [
      "are doing",
      "will",
      "do"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "A: The phone's ringing. B: I ___ get it!",
     "o": [
      "'m going to",
      "'ll",
      "get"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "We ___ (buy) a new car next year. We've already decided. (going to)",
     "a": [
      "are going to buy",
      "'re going to buy"
     ]
    },
    {
     "t": "mc",
     "q": "The course ___ on 5th September.",
     "o": [
      "starts",
      "is starting to",
      "will starting"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I'll wait until you will finish.",
      "I'll wait until you finish.",
      "I wait until you will finish."
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "What ___ you doing this weekend? (arrangement)",
     "a": "are"
    },
    {
     "t": "mc",
     "q": "Don't worry. I promise I ___ forget.",
     "o": [
      "won't",
      "'m not going",
      "don't"
     ],
     "a": 0
    }
   ]
  }
 ],
 "B2": [
  {
   "id": "g-b2-1",
   "title": "Review of all tenses",
   "ex": "<p><b>Simple</b> forms describe complete actions or facts; <b>continuous</b> forms describe actions in progress; <b>perfect</b> forms look back from a point in time.</p><ul><li>Present perfect continuous: duration up to now ΓÇô <i>I've <b>been waiting</b> for an hour.</i></li><li>Past perfect: an action before another past action ΓÇô <i>When I arrived, the film <b>had</b> already <b>started</b>.</i></li><li>Past perfect continuous: duration before a past moment ΓÇô <i>She was tired because she <b>had been working</b> all day.</i></li><li>Future continuous: in progress at a future time ΓÇô <i>This time tomorrow I'<b>ll be flying</b> to Paris.</i></li><li>Future perfect: completed before a future time ΓÇô <i>By 2030, I <b>will have finished</b> my degree.</i></li></ul>",
   "vi": "├ön tß║¡p 12 th├¼: ch├║ ├╜ th├¼ ho├án th├ánh tiß║┐p diß╗àn (nhß║Ñn mß║ính qu├í tr├¼nh), qu├í khß╗⌐ ho├án th├ánh (viß╗çc xß║úy ra tr╞░ß╗¢c mß╗Öt viß╗çc kh├íc trong qu├í khß╗⌐), t╞░╞íng lai tiß║┐p diß╗àn v├á t╞░╞íng lai ho├án th├ánh (by + mß╗æc thß╗¥i gian).",
   "eg": [
    "I've been learning English since I was ten.",
    "By the time we got there, everyone had left.",
    "Don't call at eight ΓÇô I'll be having dinner.",
    "She will have retired by next summer."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I ___ for this company for six years now.",
     "o": [
      "work",
      "have been working",
      "had worked"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When I got to the station, the train ___.",
     "o": [
      "already left",
      "had already left",
      "has already left"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "By next June, I ___ (finish) my course. (future perfect)",
     "a": [
      "will have finished",
      "'ll have finished"
     ]
    },
    {
     "t": "mc",
     "q": "This time next week, we ___ on the beach.",
     "o": [
      "will lie",
      "will be lying",
      "are lying"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Her eyes were red because she ___.",
     "o": [
      "cried",
      "had been crying",
      "has cried"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Water ___ (freeze) at 0┬░C.",
     "a": "freezes"
    },
    {
     "t": "mc",
     "q": "I ___ to the gym three times this week.",
     "o": [
      "have been",
      "went",
      "had been"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "While I ___ the report, my computer crashed.",
     "o": [
      "wrote",
      "was writing",
      "had written"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "How long ___ you been studying? (present perfect continuous)",
     "a": "have"
    },
    {
     "t": "mc",
     "q": "She ___ never ___ a plane before her trip last year.",
     "o": [
      "has / taken",
      "had / taken",
      "did / take"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-2",
   "title": "Third and mixed conditionals",
   "ex": "<p><b>Third conditional</b> = imaginary past (it didn't happen): <i>If + past perfect, would have + past participle</i>. <i>If I <b>had studied</b>, I <b>would have passed</b>.</i></p><p><b>Mixed conditional</b> (past ΓåÆ present): <i>If + past perfect, would + verb</i>. <i>If I <b>had taken</b> that job, I <b>would be</b> rich now.</i></p><p>(present ΓåÆ past): <i>If + past simple, would have + past participle</i>. <i>If I <b>were</b> more organised, I <b>wouldn't have missed</b> the deadline.</i></p><p>Variations: <i>could have / might have</i>; inversion in formal style: <i><b>Had</b> I known, I would have helped.</i></p>",
   "vi": "─Éiß╗üu kiß╗çn loß║íi 3: giß║ú ─æß╗ïnh tr├íi vß╗¢i qu├í khß╗⌐ (If + had V3, would have V3). Hß╗ùn hß╗úp: ─æiß╗üu kiß╗çn qu├í khß╗⌐ ΓÇô kß║┐t quß║ú hiß╗çn tß║íi (If + had V3, would + V) hoß║╖c ng╞░ß╗úc lß║íi. ─Éß║úo ngß╗» trang trß╗ìng: Had I known...",
   "eg": [
    "If we had left earlier, we wouldn't have missed the flight.",
    "If she hadn't helped me, I'd still be lost.",
    "If I spoke French, I would have understood the film.",
    "Had I known, I would have called you."
   ],
   "q": [
    {
     "t": "mc",
     "q": "If I ___ about the party, I would have come.",
     "o": [
      "knew",
      "had known",
      "have known"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If you had asked me, I ___ (help) you. (third conditional)",
     "a": [
      "would have helped",
      "'d have helped"
     ]
    },
    {
     "t": "mc",
     "q": "If he had saved money, he ___ a car now.",
     "o": [
      "would have",
      "would have had",
      "will have"
     ],
     "a": 0,
     "x": "Mixed conditional: past condition, present result."
    },
    {
     "t": "mc",
     "q": "If I weren't afraid of flying, I ___ to Australia last year.",
     "o": [
      "would go",
      "would have gone",
      "had gone"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "___ I known the truth, I would have acted differently.",
     "o": [
      "If",
      "Had",
      "Have"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If it ___ (not / rain), we would have played the match.",
     "a": [
      "hadn't rained",
      "had not rained"
     ]
    },
    {
     "t": "mc",
     "q": "She might have won if she ___ harder.",
     "o": [
      "trained",
      "had trained",
      "would train"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "If I had gone to bed earlier, I ___ so tired now.",
     "o": [
      "wouldn't be",
      "wouldn't have been",
      "won't be"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "We ___ (could / catch) the train if we had run. (could + have + V3)",
     "a": "could have caught"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "If I would have known, I would have told you.",
      "If I had known, I would have told you.",
      "If I knew, I would have told you yesterday."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-3",
   "title": "Advanced passive",
   "ex": "<p><b>Passive with modals</b>: <i>The work <b>must be finished</b> by Friday. It <b>should have been done</b> earlier.</i></p><p><b>Impersonal passive</b> (formal reporting): <i><b>It is said that</b> the castle is haunted.</i> / <i>The castle <b>is said to be</b> haunted.</i> Also: <i>It is believed / thought / reported / expected thatΓÇª</i>; past reference: <i>He <b>is thought to have left</b> the country.</i></p><p><b>Causative</b>: <i>have/get something done</i> = arrange for someone to do it: <i>I <b>had my hair cut</b>. We're <b>getting the car repaired</b>.</i></p><p>Passive -ing and infinitive: <i>I hate <b>being interrupted</b>. She wants <b>to be promoted</b>.</i></p>",
   "vi": "Bß╗ï ─æß╗Öng n├óng cao: vß╗¢i ─æß╗Öng tß╗½ khuyß║┐t thiß║┐u (must be done, should have been done), bß╗ï ─æß╗Öng kh├ích quan (It is said that... / He is said to be...), thß╗â sai khiß║┐n (have/get something done), bß╗ï ─æß╗Öng vß╗¢i V-ing v├á to V.",
   "eg": [
    "The building is believed to be 500 years old.",
    "It has been reported that prices will rise.",
    "I'm having my laptop fixed tomorrow.",
    "He doesn't like being told what to do."
   ],
   "q": [
    {
     "t": "mc",
     "q": "The report ___ by tomorrow.",
     "o": [
      "must finish",
      "must be finished",
      "must finished"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "It ___ that the minister will resign.",
     "o": [
      "is expected",
      "expects",
      "is expecting"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "The thief is believed ___ (escape) through the window. (perfect infinitive)",
     "a": "to have escaped"
    },
    {
     "t": "mc",
     "q": "I ___ my eyes tested last week.",
     "o": [
      "had",
      "made",
      "did"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "She hates ___ in public.",
     "o": [
      "criticising",
      "being criticised",
      "be criticised"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "This problem should ___ (deal) with years ago.",
     "a": "have been dealt"
    },
    {
     "t": "mc",
     "q": "The singer is said ___ very generous.",
     "o": [
      "being",
      "to be",
      "be"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "We're getting our kitchen ___ next month.",
     "o": [
      "redecorate",
      "redecorated",
      "redecorating"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "All documents need ___ (check) carefully before the meeting. (passive infinitive)",
     "a": "to be checked"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "The results are expected announcing soon.",
      "The results are expected to be announced soon.",
      "The results expect to be announced soon."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-4",
   "title": "Reported speech",
   "ex": "<p>When the reporting verb is in the past, tenses usually move back: <i>ΓÇ£I <b>am</b> tired.ΓÇ¥ ΓåÆ She said (that) she <b>was</b> tired.</i> present simple ΓåÆ past simple; present continuous ΓåÆ past continuous; present perfect / past simple ΓåÆ past perfect; will ΓåÆ would; can ΓåÆ could.</p><p>Time and place words change: <i>now ΓåÆ then, today ΓåÆ that day, tomorrow ΓåÆ the next day, yesterday ΓåÆ the day before, here ΓåÆ there</i>.</p><p>Questions: <i>ΓÇ£Where do you live?ΓÇ¥ ΓåÆ He asked me <b>where I lived</b>.</i> (normal word order); yes/no: <i>He asked <b>if/whether</b> I was ready.</i> Commands: <i>She told me <b>to sit down</b> / <b>not to worry</b>.</i> Other verbs: <i>suggest, advise, warn, deny, admit, promise</i>.</p>",
   "vi": "C├óu t╞░ß╗¥ng thuß║¡t: l├╣i th├¼ (am ΓåÆ was, will ΓåÆ would, have done ΓåÆ had done), ─æß╗òi trß║íng tß╗½ thß╗¥i gian/n╞íi chß╗æn. C├óu hß╗Åi t╞░ß╗¥ng thuß║¡t kh├┤ng ─æß║úo ngß╗»: He asked where I lived. Mß╗çnh lß╗çnh: tell/ask + someone + (not) to V.",
   "eg": [
    "He said he would call me the next day.",
    "She asked whether I had finished.",
    "The doctor advised me to rest.",
    "He admitted breaking the window."
   ],
   "q": [
    {
     "t": "mc",
     "q": "ΓÇ£I'm busy.ΓÇ¥ ΓåÆ She said she ___ busy.",
     "o": [
      "is",
      "was",
      "has been"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "ΓÇ£I'll help you.ΓÇ¥ ΓåÆ He said he ___ help me.",
     "o": [
      "will",
      "would",
      "can"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "ΓÇ£Where do you work?ΓÇ¥ ΓåÆ She asked me where I ___.",
     "a": "worked"
    },
    {
     "t": "mc",
     "q": "ΓÇ£Don't be late.ΓÇ¥ ΓåÆ He told us ___ late.",
     "o": [
      "not be",
      "not to be",
      "don't be"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "ΓÇ£I saw him yesterday.ΓÇ¥ ΓåÆ She said she had seen him ___.",
     "o": [
      "yesterday",
      "the day before",
      "tomorrow"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "ΓÇ£Are you ready?ΓÇ¥ ΓåÆ He asked ___ I was ready.",
     "a": [
      "if",
      "whether"
     ]
    },
    {
     "t": "mc",
     "q": "ΓÇ£I have lost my keys.ΓÇ¥ ΓåÆ He said he ___ his keys.",
     "o": [
      "has lost",
      "had lost",
      "lost"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "ΓÇ£You should see a doctor.ΓÇ¥ ΓåÆ She advised me ___ a doctor.",
     "o": [
      "seeing",
      "to see",
      "see"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "ΓÇ£I didn't take the money.ΓÇ¥ ΓåÆ He denied ___ the money.",
     "a": "taking"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "She asked me what was my name.",
      "She asked me what my name was.",
      "She asked me what is my name."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-5",
   "title": "Modal verbs for deduction",
   "ex": "<p>We use modals to say how sure we are.</p><p><b>Present</b>: <i>must</i> (almost certain it's true), <i>might / may / could</i> (possible), <i>can't</i> (almost certain it's not true): <i>She's not answering. She <b>must be</b> busy. That <b>can't be</b> Tom ΓÇô he's in Paris.</i></p><p><b>Past</b>: modal + <b>have + past participle</b>: <i>The streets are wet. It <b>must have rained</b>. He <b>might have missed</b> the bus. She <b>can't have seen</b> us.</i></p><p>Note: for negative deduction, use <b>can't</b>, not <i>mustn't</i>.</p>",
   "vi": "Suy ─æo├ín: must (chß║»c chß║»n l├á ─æ├║ng), might/may/could (c├│ thß╗â), can't (chß║»c chß║»n kh├┤ng ─æ├║ng). Qu├í khß╗⌐: must/might/can't + have + V3. Kh├┤ng d├╣ng ΓÇ£mustn'tΓÇ¥ ─æß╗â suy ─æo├ín phß╗º ─æß╗ïnh.",
   "eg": [
    "You must be hungry after that long walk.",
    "He might be at the library.",
    "They can't have finished already ΓÇô they only started ten minutes ago.",
    "She must have forgotten our meeting."
   ],
   "q": [
    {
     "t": "mc",
     "q": "The lights are off. They ___ be at home.",
     "o": [
      "must",
      "can't",
      "must have"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "He's been working all day. He ___ be exhausted.",
     "o": [
      "must",
      "can't",
      "mustn't"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "I can't find my wallet. I ___ have left it in the taxi. (possible)",
     "a": [
      "might",
      "may",
      "could"
     ]
    },
    {
     "t": "mc",
     "q": "The ground is wet. It ___ during the night.",
     "o": [
      "must rain",
      "must have rained",
      "can't rain"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She ___ the email ΓÇô she replied immediately.",
     "o": [
      "can't have read",
      "must have read",
      "might read"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "That ___ be true! It's impossible.",
     "a": [
      "can't",
      "cannot"
     ]
    },
    {
     "t": "mc",
     "q": "Where's Linh? ΓÇô She ___ be in the library, but I'm not sure.",
     "o": [
      "must",
      "might",
      "can't"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "He failed the test. He ___ studied enough.",
     "o": [
      "can't have",
      "mustn't have",
      "must"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "You ___ be Anna's sister ΓÇô you look exactly like her! (almost certain)",
     "a": "must"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "They must have went home.",
      "They must have gone home.",
      "They must gone home."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-6",
   "title": "wish / if only",
   "ex": "<p><b>wish / if only + past simple</b> = regret about the present: <i>I <b>wish</b> I <b>had</b> more free time. If only I <b>were</b> taller.</i></p><p><b>wish / if only + past perfect</b> = regret about the past: <i>I <b>wish</b> I <b>hadn't said</b> that. If only we <b>had left</b> earlier!</i></p><p><b>wish + would</b> = annoyance or desire for someone else to change: <i>I <b>wish</b> you <b>would stop</b> talking.</i> (Not used about yourself: <s>I wish I wouldΓÇª</s>)</p><p><i>wish + could</i> = ability: <i>I wish I <b>could</b> play the guitar.</i></p>",
   "vi": "wish/if only + qu├í khß╗⌐ ─æ╞ín: ╞░ß╗¢c ─æiß╗üu tr├íi hiß╗çn tß║íi. + qu├í khß╗⌐ ho├án th├ánh: hß╗æi tiß║┐c vß╗ü qu├í khß╗⌐. + would: mong ng╞░ß╗¥i kh├íc thay ─æß╗òi h├ánh vi (th╞░ß╗¥ng mang ├╜ ph├án n├án). + could: ╞░ß╗¢c c├│ khß║ú n─âng.",
   "eg": [
    "I wish I lived closer to the sea.",
    "If only I had studied harder for the exam.",
    "I wish my neighbours would turn their music down.",
    "She wishes she could speak Japanese."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I wish I ___ more money. (now)",
     "o": [
      "have",
      "had",
      "will have"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I wish I ___ that. I'm sorry. (past)",
     "o": [
      "didn't say",
      "hadn't said",
      "wouldn't say"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "If only it ___ (stop) raining! (I want it to change)",
     "a": "would stop"
    },
    {
     "t": "mc",
     "q": "She wishes she ___ swim.",
     "o": [
      "can",
      "could",
      "would"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I wish I ___ (be) taller.",
     "a": [
      "were",
      "was"
     ]
    },
    {
     "t": "mc",
     "q": "If only we ___ the bus. Now we're late.",
     "o": [
      "didn't miss",
      "hadn't missed",
      "wouldn't miss"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "I wish you ___ leaving your clothes on the floor!",
     "o": [
      "stopped",
      "would stop",
      "had stopped"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "He wishes he ___ (go) to the concert last night.",
     "a": "had gone"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "I wish I would be rich.",
      "I wish I were rich.",
      "I wish I am rich."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Do you ever wish you ___ in another country?",
     "o": [
      "lived",
      "live",
      "will live"
     ],
     "a": 0
    }
   ]
  },
  {
   "id": "g-b2-7",
   "title": "Gerunds vs infinitives (advanced)",
   "ex": "<p>Some verbs change meaning with -ing or to + verb:</p><ul><li><b>remember / forget</b> + -ing = memory of a past action; + to = an action you need to do: <i>I remember <b>locking</b> the door. Remember <b>to lock</b> the door.</i></li><li><b>stop</b> + -ing = end an activity; + to = stop in order to do something: <i>He stopped <b>smoking</b>. He stopped <b>to smoke</b>.</i></li><li><b>try</b> + -ing = experiment; + to = make an effort: <i>Try <b>restarting</b> it. I tried <b>to open</b> it, but it was stuck.</i></li><li><b>regret</b> + -ing = sorry about the past; + to = formal bad news: <i>I regret <b>telling</b> him. We regret <b>to inform</b> youΓÇª</i></li><li><b>mean</b> + -ing = involve; + to = intend.</li></ul><p>Perfect and passive forms: <i>He denied <b>having taken</b> it. She expects <b>to be chosen</b>.</i></p>",
   "vi": "Mß╗Öt sß╗æ ─æß╗Öng tß╗½ ─æß╗òi ngh─⌐a: remember/forget + V-ing (nhß╗¢/qu├¬n ─æ├ú l├ám) vs + to V (nhß╗¢/qu├¬n phß║úi l├ám); stop + V-ing (ngß╗½ng hß║│n) vs + to V (dß╗½ng lß║íi ─æß╗â l├ám); try + V-ing (thß╗¡) vs + to V (cß╗æ gß║»ng); regret + V-ing (hß╗æi hß║¡n ─æ├ú l├ám) vs + to V (lß║Ñy l├ám tiß║┐c phß║úi b├ío).",
   "eg": [
    "I'll never forget meeting her for the first time.",
    "Don't forget to call your mother.",
    "We stopped to buy some water.",
    "Taking the job would mean moving to another city."
   ],
   "q": [
    {
     "t": "mc",
     "q": "I remember ___ this film as a child. (memory)",
     "o": [
      "to watch",
      "watching",
      "watch"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Please remember ___ the lights before you leave.",
     "o": [
      "turning off",
      "to turn off",
      "turn off"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "He stopped ___ (smoke) ten years ago and feels much healthier.",
     "a": "smoking"
    },
    {
     "t": "mc",
     "q": "We stopped ___ a coffee on the way. (in order to)",
     "o": [
      "having",
      "to have",
      "have"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "If the printer doesn't work, try ___ it off and on again.",
     "o": [
      "to turn",
      "turning",
      "turn"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "We regret ___ (inform) you that the flight has been cancelled.",
     "a": "to inform"
    },
    {
     "t": "mc",
     "q": "I regret not ___ harder at school.",
     "o": [
      "to study",
      "studying",
      "study"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She denied ___ the documents.",
     "o": [
      "to have taken",
      "having taken",
      "take"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "I tried ___ (lift) the box, but it was too heavy.",
     "a": "to lift"
    },
    {
     "t": "mc",
     "q": "Getting a better job will mean ___ longer hours.",
     "o": [
      "to work",
      "working",
      "work"
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-8",
   "title": "Inversion for emphasis",
   "ex": "<p>In formal or emphatic English, we can put a negative or limiting adverb at the start of the sentence and then <b>invert</b> the subject and auxiliary (like a question).</p><ul><li><i><b>Never have I seen</b> such a beautiful view.</i></li><li><i><b>Rarely / Seldom do</b> we get the chance to travel.</i></li><li><i><b>Not only did</b> she win, <b>but</b> she also broke the record.</i></li><li><i><b>No sooner had</b> I arrived <b>than</b> it started to rain. / <b>Hardly had</b> I arrived <b>when</b>ΓÇª</i></li><li><i><b>Under no circumstances should</b> you open this door.</i></li><li><i><b>Only after</b> the meeting <b>did</b> I understand.</i></li><li><i><b>Little did</b> he know thatΓÇª</i></li></ul><p>Without an auxiliary, add <b>do/does/did</b>.</p>",
   "vi": "─Éß║úo ngß╗» ─æß╗â nhß║Ñn mß║ính (v─ân phong trang trß╗ìng): Never/Rarely/Seldom/Not only/No sooner/Hardly/Under no circumstances/Only after/Little + trß╗ú ─æß╗Öng tß╗½ + chß╗º ngß╗» + ─æß╗Öng tß╗½. Nß║┐u kh├┤ng c├│ trß╗ú ─æß╗Öng tß╗½ th├¼ th├¬m do/does/did.",
   "eg": [
    "Never have I felt so nervous.",
    "Not only is the hotel cheap, but it's also beautiful.",
    "No sooner had we sat down than the lights went out.",
    "Under no circumstances should you share your password."
   ],
   "q": [
    {
     "t": "mc",
     "q": "Never ___ such a delicious meal.",
     "o": [
      "I have eaten",
      "have I eaten",
      "I ate"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Not only ___ late, but he also forgot the tickets.",
     "o": [
      "he was",
      "was he",
      "he is"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "No sooner had I left the house ___ it started to rain.",
     "a": "than"
    },
    {
     "t": "mc",
     "q": "Rarely ___ such talent in a young player.",
     "o": [
      "we see",
      "do we see",
      "we do see"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Under no circumstances ___ leave the building during the exam.",
     "o": [
      "you should",
      "should you",
      "you must"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Hardly had the film started ___ the power went off.",
     "a": "when"
    },
    {
     "t": "mc",
     "q": "Only after I got home ___ that I had lost my wallet.",
     "o": [
      "I realised",
      "did I realise",
      "I did realise"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Little ___ that she would become famous.",
     "o": [
      "she knew",
      "did she know",
      "knew she"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "Seldom ___ he complain about anything. (present)",
     "a": "does"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "Not only she speaks French, but also Italian.",
      "Not only does she speak French, but she also speaks Italian.",
      "Not only speaks she French, but also Italian."
     ],
     "a": 1
    }
   ]
  },
  {
   "id": "g-b2-9",
   "title": "Linking words and discourse markers",
   "ex": "<p><b>Contrast</b>: <i>although / even though + clause</i>; <i>despite / in spite of + noun or -ing</i>; <i>however / nevertheless</i> (new sentence, with a comma); <i>whereas / while</i> (comparing two facts).</p><p><b>Addition</b>: <i>moreover, furthermore, in addition, what is more</i>.</p><p><b>Cause and result</b>: <i>because of / due to / owing to + noun</i>; <i>therefore, consequently, as a result</i>; <i>so ΓÇª that / such ΓÇª that</i>.</p><p><b>Purpose</b>: <i>so that + clause; in order to / so as to + verb</i>.</p><p>Example: <i><b>Despite</b> the rain, we went out. <b>Although</b> it was raining, we went out. It was raining. <b>However</b>, we went out.</i></p>",
   "vi": "Tß╗½ nß╗æi n├óng cao: t╞░╞íng phß║ún (although + mß╗çnh ─æß╗ü, despite + danh tß╗½/V-ing, however ─æß╗⌐ng ─æß║ºu c├óu), bß╗ò sung (moreover, furthermore), nguy├¬n nh├ón-kß║┐t quß║ú (due to + danh tß╗½, therefore, as a result), mß╗Ñc ─æ├¡ch (so that + mß╗çnh ─æß╗ü, in order to + V).",
   "eg": [
    "Despite feeling ill, she went to work.",
    "The project was expensive. Nevertheless, it was a success.",
    "Flights were cancelled due to the storm.",
    "I left early so that I wouldn't miss the train."
   ],
   "q": [
    {
     "t": "mc",
     "q": "___ the heavy traffic, we arrived on time.",
     "o": [
      "Although",
      "Despite",
      "However"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "___ it was late, they continued working.",
     "o": [
      "Even though",
      "In spite of",
      "Due to"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "The plan is risky. ___, it could bring huge benefits. (contrast, new sentence)",
     "a": [
      "however",
      "nevertheless",
      "nonetheless"
     ]
    },
    {
     "t": "mc",
     "q": "The match was cancelled ___ bad weather.",
     "o": [
      "because",
      "due to",
      "so that"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "She saved money ___ she could travel abroad.",
     "o": [
      "so that",
      "in order to",
      "despite"
     ],
     "a": 0
    },
    {
     "t": "gap",
     "q": "He studied hard in ___ to pass the exam.",
     "a": "order"
    },
    {
     "t": "mc",
     "q": "My brother loves sport, ___ I prefer reading.",
     "o": [
      "whereas",
      "moreover",
      "therefore"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "The hotel was cheap. ___, it was close to the beach.",
     "o": [
      "However",
      "Moreover",
      "Although"
     ],
     "a": 1
    },
    {
     "t": "gap",
     "q": "It was ___ a good film that we watched it twice.",
     "a": "such"
    },
    {
     "t": "mc",
     "q": "Choose the correct sentence.",
     "o": [
      "Despite of the cost, they bought it.",
      "Despite the cost, they bought it.",
      "Despite it was expensive, they bought it."
     ],
     "a": 1
    }
   ]
  }
 ]
};
