// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, Question, WritingTaskBase } from "../types";

/** Placement test – lv is the difficulty used for weighting (A2 = 1, B1 = 2, B2 = 3) */
export const placement: Question[] = [
 {
  "lv": "A2",
  "t": "mc",
  "q": "She ___ to work by bus every day.",
  "o": [
   "go",
   "goes",
   "going",
   "is go"
  ],
  "a": 1
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "There isn't ___ milk in the fridge.",
  "o": [
   "some",
   "many",
   "any",
   "a"
  ],
  "a": 2
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "We ___ a great film last night.",
  "o": [
   "see",
   "have seen",
   "saw",
   "seeing"
  ],
  "a": 2
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "This is the ___ restaurant in town.",
  "o": [
   "good",
   "better",
   "best",
   "most good"
  ],
  "a": 2
 },
 {
  "lv": "B1",
  "t": "mc",
  "q": "I ___ here since 2019.",
  "o": [
   "live",
   "lived",
   "have lived",
   "am living"
  ],
  "a": 2
 },
 {
  "lv": "B1",
  "t": "mc",
  "q": "If it rains tomorrow, we ___ at home.",
  "o": [
   "stay",
   "would stay",
   "will stay",
   "stayed"
  ],
  "a": 2
 },
 {
  "lv": "B1",
  "t": "mc",
  "q": "The museum ___ in 1890.",
  "o": [
   "built",
   "was built",
   "has built",
   "is building"
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "q": "If I ___ harder, I would have passed.",
  "o": [
   "studied",
   "had studied",
   "have studied",
   "would study"
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "q": "She asked me where ___.",
  "o": [
   "did I live",
   "I lived",
   "do I live",
   "I live"
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "q": "He's not answering. He ___ asleep already.",
  "o": [
   "must be",
   "can't be",
   "must have",
   "should"
  ],
  "a": 0
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "Choose the word that means ΓÇ£not expensiveΓÇ¥.",
  "o": [
   "cheap",
   "busy",
   "heavy",
   "quiet"
  ],
  "a": 0
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "I need to buy a ___ for the train.",
  "o": [
   "passport",
   "ticket",
   "receipt",
   "luggage"
  ],
  "a": 1
 },
 {
  "lv": "B1",
  "t": "mc",
  "q": "I'm looking forward ___ you.",
  "o": [
   "to see",
   "seeing",
   "to seeing",
   "see"
  ],
  "a": 2
 },
 {
  "lv": "B1",
  "t": "mc",
  "q": "He felt ___ when everyone laughed at his mistake.",
  "o": [
   "embarrassed",
   "embarrassing",
   "confident",
   "relieved"
  ],
  "a": 0
 },
 {
  "lv": "B2",
  "t": "mc",
  "q": "The benefits of the plan clearly ___ the risks.",
  "o": [
   "outweigh",
   "overcome",
   "outrun",
   "overlook"
  ],
  "a": 0
 },
 {
  "lv": "B2",
  "t": "mc",
  "q": "Scientists have made an important ___ in cancer research.",
  "o": [
   "breakdown",
   "breakthrough",
   "outbreak",
   "break-in"
  ],
  "a": 1
 },
 {
  "lv": "A2",
  "t": "mc",
  "ctx": "NOTICE: The swimming pool is closed on Mondays. Children under 8 must swim with an adult.",
  "q": "What does the notice say?",
  "o": [
   "The pool opens on Mondays.",
   "Young children need an adult with them.",
   "Children can't swim here."
  ],
  "a": 1
 },
 {
  "lv": "B1",
  "t": "mc",
  "ctx": "Hi Sam, I'm afraid I can't make it to the cinema tonight. My boss has asked me to finish a report, so I'll be at the office until late. How about Saturday instead? ΓÇô Jo",
  "q": "Why is Jo writing?",
  "o": [
   "To invite Sam to the office",
   "To change their plans",
   "To ask for help with a report"
  ],
  "a": 1
 },
 {
  "lv": "B1",
  "t": "mc",
  "ctx": "Many people think that bats are blind, but this is not true. Most bats can see quite well, although they also use sound to find their way in the dark.",
  "q": "According to the text, most batsΓÇª",
  "o": [
   "cannot see at all",
   "can see and also use sound",
   "only use their eyes"
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "ctx": "While remote working offers undeniable flexibility, critics contend that it erodes the informal exchanges that often spark innovation, such as chance conversations in corridors.",
  "q": "What do critics believe about remote working?",
  "o": [
   "It is not flexible.",
   "It reduces spontaneous interactions that create new ideas.",
   "It makes corridors busier."
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "ctx": "The council's decision to postpone the project, ostensibly due to budget constraints, has prompted speculation that political pressure played a larger role.",
  "q": "What does the writer suggest?",
  "o": [
   "The official reason may not be the real reason.",
   "The project was cancelled forever.",
   "The council has a very large budget."
  ],
  "a": 0
 },
 {
  "lv": "A2",
  "t": "mc",
  "say": "Excuse me, what time does the next bus to the city centre leave? ΓÇô It leaves at half past nine.",
  "q": "≡ƒÄº Listen. When does the bus leave?",
  "o": [
   "9.00",
   "9.30",
   "9.45"
  ],
  "a": 1
 },
 {
  "lv": "B1",
  "t": "mc",
  "say": "I was going to cycle to work today, but my bike had a flat tyre, so I ended up taking a taxi, which cost me a fortune.",
  "q": "≡ƒÄº Listen. How did the speaker get to work?",
  "o": [
   "By bike",
   "By taxi",
   "By bus"
  ],
  "a": 1
 },
 {
  "lv": "B1",
  "t": "mc",
  "say": "The library will close early on Friday because of staff training. It will open again at the usual time on Saturday morning.",
  "q": "≡ƒÄº Listen. Why will the library close early?",
  "o": [
   "For cleaning",
   "Because of staff training",
   "Because it's a holiday"
  ],
  "a": 1
 },
 {
  "lv": "B2",
  "t": "mc",
  "say": "Although the new policy was intended to reduce traffic, early figures suggest that congestion has simply shifted to neighbouring districts rather than disappearing.",
  "q": "≡ƒÄº Listen. What happened after the new policy?",
  "o": [
   "Traffic disappeared completely.",
   "Traffic moved to nearby areas.",
   "Traffic increased everywhere."
  ],
  "a": 1
 }
];

export const stageWriting: ByLevel<WritingTaskBase> = {
 "A2": {
  "prompt": "Write an email to a friend about your favourite place in your town. Say where it is, what you do there and why you like it.",
  "min": 35,
  "max": 60,
  "k": [
   "place",
   "because",
   "like",
   "go"
  ]
 },
 "B1": {
  "prompt": "Write an email to a friend about a change you have made in your life recently (for example, a new hobby, school or habit). Explain why you made it and how you feel about it.",
  "min": 80,
  "max": 120,
  "k": [
   "because",
   "since",
   "feel",
   "however"
  ]
 },
 "B2": {
  "prompt": "ΓÇ£Young people today have more opportunities than their parents did.ΓÇ¥ Write a short opinion essay saying whether you agree, with reasons and examples.",
  "min": 140,
  "max": 200,
  "k": [
   "opportunities",
   "however",
   "for example",
   "in conclusion"
  ]
 }
};

export const stageSpeaking: ByLevel<string[]> = {
 "A2": [
  "My name is Lan and I live in a small town.",
  "I usually have breakfast at seven o'clock."
 ],
 "B1": [
  "I've been learning English for three years, and I really enjoy it.",
  "If I had more free time, I would travel around the country."
 ],
 "B2": [
  "Although technology has many benefits, it can also make people feel isolated.",
  "Had I known about the problem earlier, I would have tried to solve it."
 ]
};
