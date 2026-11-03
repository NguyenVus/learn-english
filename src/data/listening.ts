// Learning content (originally migrated from the single-file version).
// Add new items here; the question formats are described in src/types.ts.
import type { ByLevel, ListeningItem } from "../types";

export const listening: ByLevel<ListeningItem[]> = {
 "A2": [
  {
   "id": "l-a2-1",
   "title": "Meeting a New Classmate",
   "type": "Dialogue",
   "speakers": {
    "A": "Mai",
    "B": "Jack"
   },
   "lines": [
    [
     "A",
     "Hi! Are you new here?"
    ],
    [
     "B",
     "Yes, I am. I'm Jack. I started yesterday."
    ],
    [
     "A",
     "Nice to meet you, Jack. I'm Mai. Where are you from?"
    ],
    [
     "B",
     "I'm from Australia, from Sydney. My family moved here because my mum has a new job."
    ],
    [
     "A",
     "Oh, cool. Do you like it here?"
    ],
    [
     "B",
     "Yes, but I don't know many people yet."
    ],
    [
     "A",
     "Well, some of us play badminton after school on Wednesdays. Do you want to come?"
    ],
    [
     "B",
     "I'd love to! What time?"
    ],
    [
     "A",
     "At four o'clock, in the sports hall."
    ],
    [
     "B",
     "Great. See you on Wednesday, then."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Where is Jack from?",
     "o": [
      "Sydney",
      "London",
      "Hanoi"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Why did Jack's family move?",
     "o": [
      "His dad has a new job.",
      "His mum has a new job.",
      "For a new school."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When do they play badminton?",
     "o": [
      "On Tuesdays",
      "On Wednesdays",
      "On Fridays"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Where do they play?",
     "o": [
      "In the park",
      "In the sports hall",
      "At Mai's house"
     ],
     "a": 1
    }
   ],
   "gap": "Jack started school [yesterday]. They play badminton at [four|4] o'clock in the sports [hall].",
   "dict": "I don't know many people yet."
  },
  {
   "id": "l-a2-2",
   "title": "A Phone Message from the Dentist",
   "type": "Message",
   "speakers": {
    "A": "Sarah"
   },
   "lines": [
    [
     "A",
     "Hello, this is a message for Mr Brown. This is Sarah from Smile Dental Clinic."
    ],
    [
     "A",
     "You have an appointment with Doctor Lee on Thursday at ten thirty, but unfortunately Doctor Lee is ill this week."
    ],
    [
     "A",
     "Can you come on Friday at two fifteen instead?"
    ],
    [
     "A",
     "Please call us back on zero one two three, four five six, seven eight nine. We are open from eight a.m. to six p.m."
    ],
    [
     "A",
     "Thank you and have a nice day."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Who is the message for?",
     "o": [
      "Doctor Lee",
      "Mr Brown",
      "Sarah"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What day was the old appointment?",
     "o": [
      "Tuesday",
      "Thursday",
      "Friday"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What time is the new appointment?",
     "o": [
      "10.30",
      "2.15",
      "2.50"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When does the clinic close?",
     "o": [
      "At 5 p.m.",
      "At 6 p.m.",
      "At 8 p.m."
     ],
     "a": 1
    }
   ],
   "gap": "Doctor Lee is [ill|sick] this week. Can you come on [Friday] at two [fifteen|15] instead?",
   "dict": "You have an appointment with Doctor Lee on Thursday."
  },
  {
   "id": "l-a2-3",
   "title": "At the Caf├⌐",
   "type": "Dialogue",
   "speakers": {
    "A": "Waiter",
    "B": "Customer"
   },
   "lines": [
    [
     "A",
     "Good morning. What can I get you?"
    ],
    [
     "B",
     "Hi. Can I have a cup of tea, please?"
    ],
    [
     "A",
     "Sure. With milk?"
    ],
    [
     "B",
     "No, thanks. Just lemon. And do you have any sandwiches?"
    ],
    [
     "A",
     "Yes, we have cheese, chicken and egg sandwiches."
    ],
    [
     "B",
     "I'll have a chicken sandwich, please. How much is that?"
    ],
    [
     "A",
     "The tea is two pounds and the sandwich is four fifty. So that's six pounds fifty."
    ],
    [
     "B",
     "Here you are."
    ],
    [
     "A",
     "Thank you. Are you eating here or taking it away?"
    ],
    [
     "B",
     "Eating here, please."
    ],
    [
     "A",
     "OK. Please sit down and I'll bring it to your table."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What does the customer drink?",
     "o": [
      "Coffee with milk",
      "Tea with lemon",
      "Orange juice"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which sandwich does she order?",
     "o": [
      "Cheese",
      "Egg",
      "Chicken"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "How much does she pay?",
     "o": [
      "┬ú4.50",
      "┬ú6.50",
      "┬ú6.00"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Where does she eat?",
     "o": [
      "At home",
      "In the caf├⌐",
      "In the park"
     ],
     "a": 1
    }
   ],
   "gap": "Can I have a cup of [tea], please? We have cheese, chicken and [egg] sandwiches. So that's six pounds [fifty|50].",
   "dict": "Please sit down and I'll bring it to your table."
  },
  {
   "id": "l-a2-4",
   "title": "How Was Your Weekend?",
   "type": "Dialogue",
   "speakers": {
    "A": "Anna",
    "B": "Tom"
   },
   "lines": [
    [
     "A",
     "Hi Tom! How was your weekend?"
    ],
    [
     "B",
     "It was great, thanks. On Saturday I went to my cousin's wedding."
    ],
    [
     "A",
     "Oh, lovely! Where was it?"
    ],
    [
     "B",
     "In a hotel by the lake. There were about two hundred guests and the food was amazing."
    ],
    [
     "A",
     "Did you dance?"
    ],
    [
     "B",
     "Yes, all night! I was very tired on Sunday, so I stayed at home and watched films. What about you?"
    ],
    [
     "A",
     "I didn't do much. I studied for my exam on Saturday, and on Sunday I went swimming with my sister."
    ],
    [
     "B",
     "When is your exam?"
    ],
    [
     "A",
     "Next Tuesday. I'm a bit nervous."
    ],
    [
     "B",
     "Don't worry, you'll be fine!"
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What did Tom do on Saturday?",
     "o": [
      "He went to a wedding.",
      "He studied.",
      "He went swimming."
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "How many guests were there?",
     "o": [
      "About 100",
      "About 200",
      "About 300"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What did Tom do on Sunday?",
     "o": [
      "He danced.",
      "He watched films at home.",
      "He went to the lake."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When is Anna's exam?",
     "o": [
      "Next Monday",
      "Next Tuesday",
      "Next Thursday"
     ],
     "a": 1
    }
   ],
   "gap": "The wedding was in a hotel by the [lake]. On Sunday Anna went [swimming] with her [sister].",
   "dict": "I studied for my exam on Saturday."
  },
  {
   "id": "l-a2-5",
   "title": "Train Station Announcement",
   "type": "Announcement",
   "speakers": {
    "A": "Announcer"
   },
   "lines": [
    [
     "A",
     "Attention, please. This is an announcement for passengers travelling to Brighton."
    ],
    [
     "A",
     "The ten fifteen train to Brighton is delayed by twenty minutes. It will now leave at ten thirty-five from platform six, not platform four."
    ],
    [
     "A",
     "We are sorry for the delay."
    ],
    [
     "A",
     "Passengers for London, your train is on time and will leave from platform two at ten twenty."
    ],
    [
     "A",
     "Please remember to take all your bags with you. Thank you."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Where is the delayed train going?",
     "o": [
      "London",
      "Brighton",
      "Bristol"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How long is the delay?",
     "o": [
      "15 minutes",
      "20 minutes",
      "35 minutes"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which platform will the Brighton train leave from?",
     "o": [
      "Two",
      "Four",
      "Six"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "What time does the London train leave?",
     "o": [
      "10.15",
      "10.20",
      "10.35"
     ],
     "a": 1
    }
   ],
   "gap": "The train is delayed by [twenty|20] minutes. It will now leave from platform [six|6]. The London train is on [time].",
   "dict": "Please remember to take all your bags with you."
  },
  {
   "id": "l-a2-6",
   "title": "Asking for Directions",
   "type": "Dialogue",
   "speakers": {
    "A": "Tourist",
    "B": "Local"
   },
   "lines": [
    [
     "A",
     "Excuse me, can you help me? I'm looking for the post office."
    ],
    [
     "B",
     "Sure. Go straight down this street and turn left at the traffic lights."
    ],
    [
     "A",
     "Turn left at the traffic lights. OK."
    ],
    [
     "B",
     "Then walk for about two minutes. The post office is on the right, next to a big bookshop."
    ],
    [
     "A",
     "Is it far?"
    ],
    [
     "B",
     "No, it's only about five minutes on foot."
    ],
    [
     "A",
     "Great. And is it open on Saturdays?"
    ],
    [
     "B",
     "Yes, until twelve o'clock, I think."
    ],
    [
     "A",
     "Thank you very much!"
    ],
    [
     "B",
     "You're welcome."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Where does the tourist want to go?",
     "o": [
      "The bank",
      "The post office",
      "The bookshop"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Where should the tourist turn left?",
     "o": [
      "At the bookshop",
      "At the traffic lights",
      "At the bus stop"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is next to the post office?",
     "o": [
      "A caf├⌐",
      "A big bookshop",
      "A bank"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How long does it take on foot?",
     "o": [
      "Two minutes",
      "Five minutes",
      "Twelve minutes"
     ],
     "a": 1
    }
   ],
   "gap": "Turn [left] at the traffic lights. The post office is on the [right]. It's open until [twelve|12] o'clock on Saturdays.",
   "dict": "Go straight down this street and turn left at the traffic lights."
  },
  {
   "id": "l-a2-7",
   "title": "Booking a Table",
   "type": "Phone call",
   "speakers": {
    "A": "Restaurant",
    "B": "Customer"
   },
   "lines": [
    [
     "A",
     "Good afternoon, Golden Lotus Restaurant. How can I help you?"
    ],
    [
     "B",
     "Hi. I'd like to book a table for Friday evening, please."
    ],
    [
     "A",
     "Of course. For how many people?"
    ],
    [
     "B",
     "For six people. It's my mother's birthday."
    ],
    [
     "A",
     "Lovely. What time would you like?"
    ],
    [
     "B",
     "At seven thirty, if possible."
    ],
    [
     "A",
     "Let me check. Yes, that's fine. Can I have your name, please?"
    ],
    [
     "B",
     "It's Nguyen. N, G, U, Y, E, N."
    ],
    [
     "A",
     "Thank you. And a phone number?"
    ],
    [
     "B",
     "Zero nine one two, three four five, six seven eight."
    ],
    [
     "A",
     "Perfect. A table for six at seven thirty on Friday. See you then!"
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Which day is the booking for?",
     "o": [
      "Thursday",
      "Friday",
      "Saturday"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How many people?",
     "o": [
      "Four",
      "Six",
      "Seven"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Why are they going to the restaurant?",
     "o": [
      "A birthday",
      "A wedding",
      "A business meeting"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What time is the booking?",
     "o": [
      "6.30",
      "7.00",
      "7.30"
     ],
     "a": 2
    }
   ],
   "gap": "I'd like to book a [table] for Friday evening. It's my mother's [birthday]. At seven [thirty|30], if possible.",
   "dict": "I'd like to book a table for Friday evening, please."
  },
  {
   "id": "l-a2-8",
   "title": "Talking About Hobbies",
   "type": "Dialogue",
   "speakers": {
    "A": "Lily",
    "B": "Duc"
   },
   "lines": [
    [
     "A",
     "Duc, what do you do in your free time?"
    ],
    [
     "B",
     "I really like drawing. I usually draw people and animals."
    ],
    [
     "A",
     "Wow, that's cool. Do you take lessons?"
    ],
    [
     "B",
     "Yes, I go to an art class every Thursday after school. What about you?"
    ],
    [
     "A",
     "I love music. I play the piano, and I'm learning the guitar too."
    ],
    [
     "B",
     "How long have you played the piano?"
    ],
    [
     "A",
     "Since I was eight, so about six years."
    ],
    [
     "B",
     "That's a long time! Do you play in concerts?"
    ],
    [
     "A",
     "Sometimes. There's a school concert next month. You should come!"
    ],
    [
     "B",
     "I'd love to."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What does Duc like doing?",
     "o": [
      "Playing the guitar",
      "Drawing",
      "Swimming"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When is Duc's art class?",
     "o": [
      "Tuesday",
      "Thursday",
      "Saturday"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How long has Lily played the piano?",
     "o": [
      "About two years",
      "About six years",
      "About eight years"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What will happen next month?",
     "o": [
      "An art exhibition",
      "A school concert",
      "A music exam"
     ],
     "a": 1
    }
   ],
   "gap": "I usually draw people and [animals]. I'm learning the [guitar] too. There's a school [concert] next month.",
   "dict": "I go to an art class every Thursday after school."
  },
  {
   "id": "l-a2-9",
   "title": "Shopping for Clothes",
   "type": "Dialogue",
   "speakers": {
    "A": "Assistant",
    "B": "Customer"
   },
   "lines": [
    [
     "A",
     "Hello. Can I help you?"
    ],
    [
     "B",
     "Yes, I'm looking for a jacket. Something warm for winter."
    ],
    [
     "A",
     "These jackets are very popular. What size are you?"
    ],
    [
     "B",
     "Medium, I think."
    ],
    [
     "A",
     "Here's a medium in black. Would you like to try it on?"
    ],
    [
     "B",
     "Yes, please. ΓÇª Hmm, it's a bit small. Do you have a large?"
    ],
    [
     "A",
     "Yes, here you are. We have it in black and dark blue."
    ],
    [
     "B",
     "I'll take the dark blue one. How much is it?"
    ],
    [
     "A",
     "It's forty-five dollars, but there's a twenty per cent discount this week."
    ],
    [
     "B",
     "Great! Can I pay by card?"
    ],
    [
     "A",
     "Of course."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is the customer looking for?",
     "o": [
      "A coat",
      "A jacket",
      "A sweater"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What size does the customer buy?",
     "o": [
      "Small",
      "Medium",
      "Large"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "Which colour does the customer choose?",
     "o": [
      "Black",
      "Dark blue",
      "Grey"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How will the customer pay?",
     "o": [
      "In cash",
      "By card",
      "By phone"
     ],
     "a": 1
    }
   ],
   "gap": "I'm looking for a [jacket]. It's a bit [small]. There's a [twenty|20] per cent discount this week.",
   "dict": "Would you like to try it on?"
  }
 ],
 "B1": [
  {
   "id": "l-b1-1",
   "title": "Advice Before an Interview",
   "type": "Conversation",
   "speakers": {
    "A": "Lucy",
    "B": "Ryan"
   },
   "lines": [
    [
     "A",
     "So, your interview's tomorrow, isn't it? Are you ready?"
    ],
    [
     "B",
     "Not really. I've never had an interview for a real office job before. I'm worried I'll forget everything."
    ],
    [
     "A",
     "That's normal. Have you looked at the company's website?"
    ],
    [
     "B",
     "Yes, I spent about an hour on it last night. They make software for hospitals."
    ],
    [
     "A",
     "Good. They'll probably ask you why you want to work there, so think about that. And prepare a couple of examples of times when you solved a problem or worked in a team."
    ],
    [
     "B",
     "I could talk about the student project I organised last year. We raised money for a children's charity."
    ],
    [
     "A",
     "Perfect. That shows you can lead a group. Oh, and don't forget to ask them some questions at the end. It shows you're interested."
    ],
    [
     "B",
     "Like what?"
    ],
    [
     "A",
     "You could ask what a typical day looks like, or what training they offer new staff."
    ],
    [
     "B",
     "OK. What about clothes? It's a technology company, so maybe jeans are fine?"
    ],
    [
     "A",
     "I wouldn't risk it. Wear something smart. You can always dress more casually once you've got the job!"
    ],
    [
     "B",
     "Fair enough. Thanks, Lucy. I feel a bit better now."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What does the company make?",
     "o": [
      "Video games",
      "Software for hospitals",
      "Medical equipment"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What example will Ryan talk about?",
     "o": [
      "A student charity project",
      "A part-time job",
      "A sports team"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Why should Ryan ask questions at the end?",
     "o": [
      "It shows he is intelligent.",
      "It shows he is interested.",
      "It gives him more time."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What does Lucy say about clothes?",
     "o": [
      "Jeans are fine.",
      "Wear something smart.",
      "Wear a uniform."
     ],
     "a": 1
    }
   ],
   "gap": "I spent about an [hour] on it last night. We raised money for a children's [charity]. You could ask what [training] they offer new staff.",
   "dict": "They'll probably ask you why you want to work there."
  },
  {
   "id": "l-b1-2",
   "title": "At the Doctor's",
   "type": "Conversation",
   "speakers": {
    "A": "Doctor",
    "B": "Mr Evans"
   },
   "lines": [
    [
     "A",
     "Good morning, Mr Evans. What seems to be the problem?"
    ],
    [
     "B",
     "Well, I've been getting a lot of headaches recently, about three or four times a week. They usually start in the afternoon."
    ],
    [
     "A",
     "I see. How long has this been happening?"
    ],
    [
     "B",
     "For about a month. I started a new job in October, and I'm at the computer most of the day."
    ],
    [
     "A",
     "Do you take breaks from the screen?"
    ],
    [
     "B",
     "Not really. I'm usually so busy that I even eat lunch at my desk."
    ],
    [
     "A",
     "And how much water do you drink during the day?"
    ],
    [
     "B",
     "Hmm, not much. Mostly coffee. Maybe four or five cups."
    ],
    [
     "A",
     "That might be part of the problem. Too much coffee and not enough water can both cause headaches. Drink at least six glasses of water a day, cut down to two coffees, and take a short break every hour."
    ],
    [
     "B",
     "OK, I can try that."
    ],
    [
     "A",
     "Also, when did you last have your eyes tested?"
    ],
    [
     "B",
     "Years ago, I think."
    ],
    [
     "A",
     "Then please book an eye test as well. If the headaches don't get better in two weeks, come back and see me."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "How often does Mr Evans get headaches?",
     "o": [
      "Every day",
      "Three or four times a week",
      "Once a week"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When did he start his new job?",
     "o": [
      "In September",
      "In October",
      "In November"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How many coffees a day should he have?",
     "o": [
      "Two",
      "Four",
      "Six"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "When should he come back?",
     "o": [
      "If his eyes hurt",
      "If the headaches don't improve in two weeks",
      "After the eye test"
     ],
     "a": 1
    }
   ],
   "gap": "I've been getting a lot of [headaches] recently. Drink at least [six|6] glasses of water a day. Take a short [break] every hour.",
   "dict": "Too much coffee and not enough water can both cause headaches."
  },
  {
   "id": "l-b1-3",
   "title": "Tech Talk: Staying Safe Online",
   "type": "Radio talk",
   "speakers": {
    "A": "Presenter"
   },
   "lines": [
    [
     "A",
     "Welcome back to Tech Talk. Today's tip is about protecting your personal information online. Every week, our listeners tell us about problems with hacked accounts, so here are three simple things you can do."
    ],
    [
     "A",
     "First, use a different password for each account. I know it's hard to remember them all, so consider using a password manager, which stores them safely for you."
    ],
    [
     "A",
     "Second, turn on two-step verification wherever you can. This means that when you log in, you need your password and also a code sent to your phone. Even if someone steals your password, they can't get in without the code."
    ],
    [
     "A",
     "Third, be careful with emails and messages that ask you to click on a link or enter your details, especially if they say something urgent, like your account will be closed today. Real companies rarely ask for your password by email. If you're not sure, go directly to the company's website instead."
    ],
    [
     "A",
     "That's all for today. Next week, we'll look at how to keep your children safe online."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is the main topic?",
     "o": [
      "New phones",
      "Protecting personal information",
      "Online shopping"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What does a password manager do?",
     "o": [
      "Creates email accounts",
      "Stores passwords safely",
      "Changes passwords every day"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Two-step verification needsΓÇª",
     "o": [
      "a password and a code sent to your phone",
      "two different passwords",
      "only a fingerprint"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What is next week's topic?",
     "o": [
      "Children's safety online",
      "Phone batteries",
      "Social media"
     ],
     "a": 0
    }
   ],
   "gap": "Use a different [password] for each account. Turn on two-step [verification]. Real companies [rarely] ask for your password by email.",
   "dict": "If you're not sure, go directly to the company's website instead."
  },
  {
   "id": "l-b1-4",
   "title": "A Memorable Trip",
   "type": "Conversation",
   "speakers": {
    "A": "Emma",
    "B": "Sam"
   },
   "lines": [
    [
     "A",
     "Sam, you went to Japan last summer, didn't you? How was it?"
    ],
    [
     "B",
     "Amazing, but it didn't start very well. When we landed in Tokyo, my suitcase wasn't there. The airline had sent it to Seoul by mistake!"
    ],
    [
     "A",
     "Oh no! What did you do?"
    ],
    [
     "B",
     "Well, I had to buy some clothes and a toothbrush at the airport. The airline said it would arrive the next day, but it actually took three days."
    ],
    [
     "A",
     "That's awful. Did it spoil the trip?"
    ],
    [
     "B",
     "Not at all, actually. While I was waiting, I explored the area near our hotel, and I found a tiny restaurant run by an old couple. The food was incredible, so we went back almost every evening."
    ],
    [
     "A",
     "Where else did you go?"
    ],
    [
     "B",
     "We spent four days in Kyoto, visiting temples and gardens. The best part was getting up at five in the morning to see a famous shrine before the crowds arrived. It was so peaceful."
    ],
    [
     "A",
     "Would you go back?"
    ],
    [
     "B",
     "Definitely. Next time I'd like to go in spring, when the cherry blossoms are out. But I'll pack a change of clothes in my hand luggage!"
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Where did Sam's suitcase go?",
     "o": [
      "Tokyo",
      "Seoul",
      "Kyoto"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How long did the suitcase take to arrive?",
     "o": [
      "One day",
      "Two days",
      "Three days"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "What was the best part of Kyoto?",
     "o": [
      "A small restaurant",
      "Seeing a shrine early in the morning",
      "Shopping"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "When would Sam like to go next time?",
     "o": [
      "In winter",
      "In spring",
      "In autumn"
     ],
     "a": 1
    }
   ],
   "gap": "The airline had sent it to Seoul by [mistake]. I found a tiny restaurant run by an old [couple]. We spent four days in Kyoto, visiting temples and [gardens].",
   "dict": "Next time I'd like to go in spring, when the cherry blossoms are out."
  },
  {
   "id": "l-b1-5",
   "title": "What's On This Weekend",
   "type": "Radio announcement",
   "speakers": {
    "A": "Presenter"
   },
   "lines": [
    [
     "A",
     "Good morning and here's what's happening in the city this weekend."
    ],
    [
     "A",
     "On Saturday, the annual food festival returns to Central Park from ten in the morning until eight in the evening. There will be more than fifty stalls selling dishes from around the world, as well as cooking demonstrations by local chefs. Entry is free, but bring cash, because not all stalls accept cards."
    ],
    [
     "A",
     "If you're into sport, the city half marathon takes place on Sunday morning. The race starts at eight o'clock outside the town hall, so expect road closures in the city centre until around one p.m."
    ],
    [
     "A",
     "For families, the Science Museum is holding a special robot exhibition all weekend. Children can build and program their own robots in free workshops, but places are limited, so you need to book online in advance."
    ],
    [
     "A",
     "And finally, the weather: Saturday will be sunny and warm, but there's a good chance of rain on Sunday afternoon, so take an umbrella."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "When does the food festival end?",
     "o": [
      "6 p.m.",
      "8 p.m.",
      "10 p.m."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Why should people bring cash?",
     "o": [
      "There is an entry fee.",
      "Not all stalls accept cards.",
      "For parking."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Where does the half marathon start?",
     "o": [
      "In Central Park",
      "Outside the town hall",
      "At the museum"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What do you need to do for the robot workshops?",
     "o": [
      "Nothing, just arrive",
      "Book online in advance",
      "Pay at the door"
     ],
     "a": 1
    }
   ],
   "gap": "There will be more than [fifty|50] stalls. Expect road [closures] in the city centre. There's a good chance of [rain] on Sunday afternoon.",
   "dict": "Children can build and program their own robots in free workshops."
  },
  {
   "id": "l-b1-6",
   "title": "Planning a Group Project",
   "type": "Conversation",
   "speakers": {
    "A": "Hana",
    "B": "Leo",
    "C": "Minh"
   },
   "lines": [
    [
     "A",
     "OK, so we need to give a presentation about renewable energy in two weeks. How should we divide the work?"
    ],
    [
     "B",
     "I think we should each choose one type of energy. I'm happy to do solar power."
    ],
    [
     "C",
     "I'll take wind power then. I did some research on it last year."
    ],
    [
     "A",
     "Great, so I'll do hydropower. What about the slides?"
    ],
    [
     "B",
     "Why don't we make one shared document? Then everyone can add their part and we can keep the design the same."
    ],
    [
     "C",
     "Good idea. But someone needs to check the whole presentation at the end."
    ],
    [
     "A",
     "I can do that, as long as everyone finishes their part by next Wednesday."
    ],
    [
     "B",
     "That's fine with me. Should we practise together before the presentation?"
    ],
    [
     "C",
     "Definitely. How about meeting in the library on Thursday afternoon?"
    ],
    [
     "A",
     "Thursday works for me. Let's say three o'clock."
    ],
    [
     "B",
     "Perfect. I'll send everyone a message to remind them."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is the presentation about?",
     "o": [
      "Climate change",
      "Renewable energy",
      "Recycling"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which energy will Minh present?",
     "o": [
      "Solar power",
      "Wind power",
      "Hydropower"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Who will check the whole presentation?",
     "o": [
      "Leo",
      "Minh",
      "Hana"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "When will they practise?",
     "o": [
      "Wednesday at three",
      "Thursday at three",
      "Friday morning"
     ],
     "a": 1
    }
   ],
   "gap": "We need to give a presentation about renewable energy in two [weeks]. Why don't we make one shared [document]? How about meeting in the [library] on Thursday afternoon?",
   "dict": "Everyone can add their part and we can keep the design the same."
  },
  {
   "id": "l-b1-7",
   "title": "Returning a Faulty Product",
   "type": "Conversation",
   "speakers": {
    "A": "Customer",
    "B": "Shop assistant"
   },
   "lines": [
    [
     "A",
     "Hello. I bought these wireless headphones here last week, but the left side has stopped working."
    ],
    [
     "B",
     "I'm sorry to hear that. Do you have the receipt?"
    ],
    [
     "A",
     "Yes, here it is. I bought them on the twelfth."
    ],
    [
     "B",
     "Thank you. Have you tried charging them fully?"
    ],
    [
     "A",
     "Yes, several times. I've also tried them with two different phones, and it's the same problem."
    ],
    [
     "B",
     "OK. They're still under guarantee, so you have two options. We can send them back to the manufacturer for repair, which usually takes about two weeks, or we can exchange them for a new pair today."
    ],
    [
     "A",
     "I'd prefer to exchange them, please. I use them every day for work."
    ],
    [
     "B",
     "No problem. Unfortunately, we don't have the white ones in stock right now. Would black be OK?"
    ],
    [
     "A",
     "Black is fine."
    ],
    [
     "B",
     "Great. I'll just need to check the new pair works before you leave."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is wrong with the headphones?",
     "o": [
      "They won't charge.",
      "The left side doesn't work.",
      "They are too big."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How long does a repair usually take?",
     "o": [
      "Two days",
      "One week",
      "Two weeks"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "What does the customer choose?",
     "o": [
      "A repair",
      "An exchange",
      "A refund"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Why does the customer get black headphones?",
     "o": [
      "She prefers black.",
      "White ones are out of stock.",
      "Black ones are cheaper."
     ],
     "a": 1
    }
   ],
   "gap": "Do you have the [receipt]? They're still under [guarantee|warranty]. We don't have the white ones in [stock] right now.",
   "dict": "I've also tried them with two different phones, and it's the same problem."
  },
  {
   "id": "l-b1-8",
   "title": "Museum Audio Guide",
   "type": "Audio guide",
   "speakers": {
    "A": "Guide"
   },
   "lines": [
    [
     "A",
     "Welcome to the City History Museum. This audio guide will take you through our three main galleries. Please press the number next to each object to hear more information."
    ],
    [
     "A",
     "On the ground floor, you'll find our gallery about the city's early history, with tools and pottery that are more than two thousand years old. Please don't touch the objects, as many of them are very fragile."
    ],
    [
     "A",
     "The first floor focuses on the nineteenth century, when the city became an important trading port. Don't miss the model of the old harbour, which was built by local students."
    ],
    [
     "A",
     "On the second floor, our newest gallery shows how the city has changed in the last fifty years, with photographs, videos and interviews with residents."
    ],
    [
     "A",
     "The museum caf├⌐ is next to the main entrance, and the gift shop is on the ground floor. Photography is allowed in all galleries, but please do not use flash. Enjoy your visit!"
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "How many main galleries are there?",
     "o": [
      "Two",
      "Three",
      "Four"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is on the first floor?",
     "o": [
      "Early history",
      "The nineteenth century",
      "The last fifty years"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Who built the model of the harbour?",
     "o": [
      "Local students",
      "Museum staff",
      "A famous artist"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What are visitors NOT allowed to do?",
     "o": [
      "Take photos",
      "Use flash",
      "Visit the caf├⌐"
     ],
     "a": 1
    }
   ],
   "gap": "Many of the objects are very [fragile]. The city became an important trading [port]. Photography is allowed, but please do not use [flash].",
   "dict": "Please press the number next to each object to hear more information."
  },
  {
   "id": "l-b1-9",
   "title": "Should I Get a Pet?",
   "type": "Conversation",
   "speakers": {
    "A": "Mai",
    "B": "Tom"
   },
   "lines": [
    [
     "A",
     "Tom, I'm thinking of getting a dog. You've got one, haven't you? What do you think?"
    ],
    [
     "B",
     "I love having a dog, but it's a big responsibility. You need to walk it at least twice a day, even when it's raining."
    ],
    [
     "A",
     "Hmm, I work from home three days a week, so that should be OK."
    ],
    [
     "B",
     "What about the other two days? Dogs don't like being alone for long periods."
    ],
    [
     "A",
     "My neighbour said she could take it for a walk at lunchtime."
    ],
    [
     "B",
     "That would help. You should also think about the cost. Food, vet bills and insurance can be quite expensive."
    ],
    [
     "A",
     "I hadn't thought about insurance. How much do you pay?"
    ],
    [
     "B",
     "About twenty pounds a month. And if you go on holiday, you'll need someone to look after it."
    ],
    [
     "A",
     "Maybe I should start by looking after your dog for a weekend. Then I'll know if I'm ready!"
    ],
    [
     "B",
     "That's a great idea. I'm going away next month, actually."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "How often should you walk a dog, according to Tom?",
     "o": [
      "Once a day",
      "At least twice a day",
      "Three times a week"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Who could walk the dog at lunchtime?",
     "o": [
      "Tom",
      "Mai's neighbour",
      "Mai's sister"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How much does Tom pay for insurance?",
     "o": [
      "About ┬ú10 a month",
      "About ┬ú20 a month",
      "About ┬ú50 a month"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What will Mai do first?",
     "o": [
      "Buy a dog",
      "Look after Tom's dog for a weekend",
      "Talk to a vet"
     ],
     "a": 1
    }
   ],
   "gap": "It's a big [responsibility]. Dogs don't like being [alone] for long periods. Food, vet bills and [insurance] can be quite expensive.",
   "dict": "Maybe I should start by looking after your dog for a weekend."
  }
 ],
 "B2": [
  {
   "id": "l-b2-1",
   "title": "Plastic Packaging: Who Is Responsible?",
   "type": "Discussion",
   "speakers": {
    "A": "Host",
    "B": "Dr Lewis",
    "C": "Karen Wu"
   },
   "lines": [
    [
     "A",
     "Today we're discussing plastic packaging in supermarkets. With me are Dr Daniel Lewis, an environmental researcher, and Karen Wu, who runs a chain of grocery stores. Daniel, how serious is the problem?"
    ],
    [
     "B",
     "It's very serious. Around half of all plastic produced is designed to be used just once, and packaging is the largest part of that. Only a small fraction is actually recycled. We're finding microplastics everywhere, from the deep ocean to human blood."
    ],
    [
     "A",
     "Karen, as a retailer, do you accept that supermarkets are part of the problem?"
    ],
    [
     "C",
     "To some extent, yes. But packaging isn't there just for fun. It protects food, keeps it fresh for longer and reduces food waste, which also has a huge environmental impact. A cucumber wrapped in plastic can last several days longer than one without."
    ],
    [
     "B",
     "That's true in some cases, but a lot of packaging has nothing to do with freshness. Think of bananas in plastic bags, or apples on plastic trays. Those are mainly about presentation and convenience."
    ],
    [
     "C",
     "I agree that there's unnecessary packaging, and we've removed quite a lot in our stores. Customers can now bring their own containers for things like rice and nuts. But not all customers are willing to change their habits, especially if it's less convenient."
    ],
    [
     "A",
     "So whose responsibility is it? Shops, customers or governments?"
    ],
    [
     "B",
     "All three, but I'd argue governments need to lead. Voluntary action has been far too slow. Taxes on single-use plastic or making manufacturers pay for recycling create a level playing field."
    ],
    [
     "C",
     "I'd support clear rules, as long as they're introduced gradually and businesses get time to adapt. Small shops like mine can't afford to change everything overnight."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Who is Karen Wu?",
     "o": [
      "An environmental researcher",
      "The owner of grocery stores",
      "A government minister"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is Karen's main argument for packaging?",
     "o": [
      "It is cheap.",
      "It reduces food waste.",
      "Customers like it."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which example of unnecessary packaging does Daniel give?",
     "o": [
      "Wrapped cucumbers",
      "Bananas in plastic bags",
      "Rice in containers"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is Karen's view on government rules?",
     "o": [
      "She opposes them.",
      "She supports them if introduced gradually.",
      "She wants them immediately."
     ],
     "a": 1
    }
   ],
   "gap": "Around half of all plastic produced is designed to be used just [once]. We're finding [microplastics] everywhere. Voluntary action has been far too [slow].",
   "dict": "Packaging protects food, keeps it fresh for longer and reduces food waste."
  },
  {
   "id": "l-b2-2",
   "title": "Remote Work and the Future of Cities",
   "type": "Talk",
   "speakers": {
    "A": "Lecturer"
   },
   "lines": [
    [
     "A",
     "Before 2020, working from home was a privilege enjoyed by a relatively small number of employees. Then, almost overnight, millions of office workers found themselves holding meetings from their kitchens. Several years later, many companies have adopted hybrid models, with staff splitting their week between home and the workplace."
    ],
    [
     "A",
     "This shift has consequences that go far beyond individual workers. Business districts that were once crowded from Monday to Friday now see far fewer people, particularly on Mondays and Fridays. Caf├⌐s and sandwich shops that depended on office workers have struggled, and some have closed. At the same time, suburbs and smaller towns have experienced a revival, as people spend more time, and money, closer to home."
    ],
    [
     "A",
     "Housing markets have also been affected. With commuting no longer necessary every day, some workers have moved further away from expensive cities in search of larger homes and gardens. This has pushed up prices in some rural areas, sometimes causing tension with local residents."
    ],
    [
     "A",
     "So what will happen to empty office buildings? Some cities are experimenting with converting them into apartments, which could help ease housing shortages. However, this is often more complicated than it sounds, since office buildings are typically deep, with limited natural light in the centre and plumbing designed for shared bathrooms."
    ],
    [
     "A",
     "Ultimately, the cities that adapt most successfully will probably be those that become places people want to visit, not just places they have to go to work."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is a hybrid model?",
     "o": [
      "Working only from home",
      "Splitting the week between home and the workplace",
      "Working at weekends"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "On which days are business districts quietest?",
     "o": [
      "Tuesdays and Thursdays",
      "Mondays and Fridays",
      "Wednesdays"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What problem has appeared in some rural areas?",
     "o": [
      "Poor internet",
      "Rising house prices",
      "Too many offices"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Why is converting offices into flats difficult?",
     "o": [
      "The buildings are too small.",
      "Limited natural light and unsuitable plumbing",
      "The land is too expensive."
     ],
     "a": 1
    }
   ],
   "gap": "Many companies have adopted [hybrid] models. Suburbs and smaller towns have experienced a [revival]. This could help ease housing [shortages].",
   "dict": "Some workers have moved further away from expensive cities in search of larger homes."
  },
  {
   "id": "l-b2-3",
   "title": "Can We Trust What We Read Online?",
   "type": "Discussion",
   "speakers": {
    "A": "Host",
    "B": "Mia",
    "C": "Mr Grant"
   },
   "lines": [
    [
     "A",
     "Today we're asking whether young people can tell the difference between real and fake news online. Mia, you're a university student. Where do you get your news?"
    ],
    [
     "B",
     "Honestly, mostly from social media and short videos. I rarely visit news websites directly. But I think my generation is more sceptical than people assume. We've grown up with the internet, so we know not to believe everything we see."
    ],
    [
     "C",
     "I'd like to believe that, but research suggests otherwise. Several studies have found that many students struggle to distinguish between sponsored content and genuine news. Being comfortable with technology isn't the same as being able to evaluate information critically."
    ],
    [
     "B",
     "That's a fair point. I suppose it's easy to share something quickly without checking it, especially when it confirms what you already think."
    ],
    [
     "A",
     "Mr Grant, should schools be doing more?"
    ],
    [
     "C",
     "Absolutely. In my school, students learn to check the original source, look at what other reliable outlets are reporting and notice emotional language designed to provoke a reaction. One technique we teach is called lateral reading: instead of staying on a single website, you open new tabs to find out what others say about it."
    ],
    [
     "B",
     "I wish I'd been taught that at school. I learned most of it by making mistakes, like sharing a story that turned out to be a joke from a satirical website."
    ],
    [
     "A",
     "Is technology itself part of the solution?"
    ],
    [
     "C",
     "It can help. Fact-checking tools and warning labels are useful. But no tool can replace human judgement. We need readers who ask questions."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Where does Mia mainly get her news?",
     "o": [
      "Newspapers",
      "Social media and short videos",
      "Television"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What does Mr Grant think?",
     "o": [
      "Young people are very good at judging news.",
      "Being comfortable with technology isn't enough.",
      "Schools teach too much about media."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is lateral reading?",
     "o": [
      "Reading slowly",
      "Checking what other sources say about a website",
      "Reading only headlines"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What did Mia once share by mistake?",
     "o": [
      "A joke story from a satirical website",
      "A fake advert",
      "A private photo"
     ],
     "a": 0
    }
   ],
   "gap": "My generation is more [sceptical|skeptical] than people assume. Students notice emotional language designed to [provoke] a reaction. No tool can replace human [judgement|judgment].",
   "dict": "Being comfortable with technology isn't the same as being able to evaluate information critically."
  },
  {
   "id": "l-b2-4",
   "title": "Learning How to Learn",
   "type": "Talk",
   "speakers": {
    "A": "Speaker"
   },
   "lines": [
    [
     "A",
     "Most of us spend years in education, yet very few of us are ever taught how to learn effectively. In fact, some of the most popular study methods are among the least effective."
    ],
    [
     "A",
     "Take rereading. Many students read their notes again and again before an exam. It feels productive, because the material becomes familiar. Unfortunately, familiarity is not the same as knowledge. When the exam comes, students often discover that they can recognise information but not recall it."
    ],
    [
     "A",
     "Research points to two techniques that work much better. The first is retrieval practice: testing yourself instead of simply reviewing. The effort of pulling information out of your memory strengthens it."
    ],
    [
     "A",
     "The second is spacing. Rather than studying a topic for five hours in one day, it's more effective to spread those hours over several days or weeks. Each time you return to the material, you have forgotten a little, and relearning it makes the memory more durable."
    ],
    [
     "A",
     "A third useful idea is interleaving, which means mixing different types of problems in one session. It feels harder, and that's precisely the point. Learning that feels difficult is often learning that lasts."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What is the problem with rereading?",
     "o": [
      "It is too slow.",
      "Familiarity is not the same as knowledge.",
      "It makes you tired."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Retrieval practice meansΓÇª",
     "o": [
      "testing yourself",
      "reading again",
      "highlighting notes"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Spacing meansΓÇª",
     "o": [
      "studying everything at once",
      "spreading study over time",
      "studying in a quiet place"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Interleaving meansΓÇª",
     "o": [
      "mixing different types of problems",
      "studying with friends",
      "taking long breaks"
     ],
     "a": 0
    }
   ],
   "gap": "Familiarity is not the same as [knowledge]. Relearning it makes the memory more [durable]. Learning that feels [difficult|hard] is often learning that lasts.",
   "dict": "The effort of pulling information out of your memory strengthens it."
  },
  {
   "id": "l-b2-5",
   "title": "Why Do We Sleep?",
   "type": "Interview",
   "speakers": {
    "A": "Host",
    "B": "Dr Patel"
   },
   "lines": [
    [
     "A",
     "Joining me today is Dr Ravi Patel, a sleep scientist. Dr Patel, we spend about a third of our lives asleep. Do we actually know why?"
    ],
    [
     "B",
     "We know much more than we did twenty years ago, although there are still open questions. One of the clearest findings is that sleep is essential for memory. During deep sleep, the brain appears to replay and strengthen what we learned during the day."
    ],
    [
     "A",
     "So staying up all night before an exam is a bad idea?"
    ],
    [
     "B",
     "A very bad idea. Students who stay up all night tend to perform worse than those who study less but sleep properly."
    ],
    [
     "A",
     "How much sleep do adults really need?"
    ],
    [
     "B",
     "For most adults, between seven and nine hours. Many people who believe they're fine on five or six hours are simply used to feeling tired."
    ],
    [
     "A",
     "What are the consequences of not getting enough?"
    ],
    [
     "B",
     "In the short term, poor concentration, worse mood and slower reaction times, which is why tired driving is so dangerous. Over the long term, chronic lack of sleep has been linked to heart disease and depression, although the relationships are complex."
    ],
    [
     "A",
     "Any practical advice for our listeners?"
    ],
    [
     "B",
     "Keep a regular schedule, even at weekends. Make your bedroom dark, cool and quiet, and avoid screens for at least an hour before bed. And if you can't sleep, get up, do something relaxing in dim light, and go back to bed when you feel sleepy."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What does deep sleep help with?",
     "o": [
      "Digestion",
      "Memory",
      "Only muscles"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Students who stay up all night before an examΓÇª",
     "o": [
      "perform better",
      "perform worse",
      "perform the same"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How much sleep do most adults need?",
     "o": [
      "5ΓÇô6 hours",
      "7ΓÇô9 hours",
      "10ΓÇô12 hours"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What should you do if you can't sleep?",
     "o": [
      "Stay in bed and wait",
      "Get up and do something relaxing",
      "Use your phone"
     ],
     "a": 1
    }
   ],
   "gap": "The brain appears to replay and [strengthen] what we learned. Tired driving is so [dangerous]. Avoid screens for at least an [hour] before bed.",
   "dict": "Many people who believe they're fine on five or six hours are simply used to feeling tired."
  },
  {
   "id": "l-b2-6",
   "title": "The Four-Day Week Debate",
   "type": "Discussion",
   "speakers": {
    "A": "Host",
    "B": "Claire",
    "C": "Marcus"
   },
   "lines": [
    [
     "A",
     "Today's question: should the four-day working week become the norm? Claire, you run a marketing agency that switched two years ago."
    ],
    [
     "B",
     "That's right. We kept salaries the same and reduced hours from forty to thirty-two. Honestly, I was sceptical at first, but productivity has held up, staff turnover has dropped, and recruitment is far easier. Candidates now actively seek us out."
    ],
    [
     "C",
     "I don't doubt it works for some office-based businesses. But I run a chain of care homes, and our residents need support every hour of every day. A four-day week for my staff would mean hiring roughly twenty per cent more people, and frankly, the funding simply isn't there."
    ],
    [
     "B",
     "I accept that it's not a one-size-fits-all solution. But even in sectors like yours, there might be flexible arrangements, such as compressed hours or longer rest periods between shifts, that achieve some of the same benefits."
    ],
    [
     "C",
     "Perhaps, but compressed hours can be counterproductive in care. Twelve-hour shifts are exhausting, and fatigue leads to mistakes."
    ],
    [
     "A",
     "So is there a risk that the four-day week widens the gap between different types of workers?"
    ],
    [
     "C",
     "Absolutely. If it becomes a perk mainly for well-paid professionals, those in essential services may feel left behind."
    ],
    [
     "B",
     "That's a fair point. Any national policy would need to come with proper investment in sectors that can't simply cut hours."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "What did Claire's company do?",
     "o": [
      "Cut salaries by 20%",
      "Reduced hours to 32 with the same pay",
      "Moved to twelve-hour shifts"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Why is Marcus doubtful?",
     "o": [
      "His staff don't want it.",
      "Care homes need staff all the time and funding is limited.",
      "It reduced productivity in his business."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What does Marcus say about compressed hours in care?",
     "o": [
      "They are ideal.",
      "They can cause fatigue and mistakes.",
      "They are illegal."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What do both speakers agree on at the end?",
     "o": [
      "The policy should start immediately.",
      "Some sectors would need extra investment.",
      "Office work should be banned."
     ],
     "a": 1
    }
   ],
   "gap": "Productivity has held up, and staff [turnover] has dropped. It's not a one-size-fits-[all] solution. Any national policy would need to come with proper [investment].",
   "dict": "If it becomes a perk mainly for well-paid professionals, those in essential services may feel left behind."
  },
  {
   "id": "l-b2-7",
   "title": "Why We Procrastinate",
   "type": "Talk",
   "speakers": {
    "A": "Psychologist"
   },
   "lines": [
    [
     "A",
     "Almost everyone procrastinates from time to time, putting off a task even though we know that delaying it will make things worse. For a long time, procrastination was seen simply as a problem of laziness or poor time management. Recent research, however, suggests that it is primarily about emotions."
    ],
    [
     "A",
     "When a task makes us feel anxious, bored or uncertain, avoiding it brings immediate relief. Scrolling through our phones or tidying the desk feels better in the moment, so the brain learns to repeat that behaviour. The problem, of course, is that the task doesn't disappear, and the stress usually grows."
    ],
    [
     "A",
     "Understanding this changes the solution. Rather than relying on willpower or ever more detailed schedules, it helps to reduce the emotional cost of starting. One technique is to break a large task into a very small first step, such as writing a single sentence or opening the relevant file. Another is to commit to working for just five minutes; once we begin, continuing is often far easier."
    ],
    [
     "A",
     "Self-compassion also plays a surprising role. Studies have found that students who forgave themselves for procrastinating before one exam were less likely to procrastinate before the next. Criticising ourselves harshly tends to increase negative feelings, which, ironically, makes avoidance more tempting."
    ],
    [
     "A",
     "So the next time you find yourself delaying something important, ask not 'Why am I so lazy?' but 'What feeling am I trying to avoid?'"
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "According to recent research, procrastination is mainly aboutΓÇª",
     "o": [
      "laziness",
      "poor time management",
      "emotions"
     ],
     "a": 2
    },
    {
     "t": "mc",
     "q": "Why does the brain repeat avoidance?",
     "o": [
      "It brings immediate relief.",
      "It saves energy.",
      "It improves memory."
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "Which technique is recommended?",
     "o": [
      "Making a very detailed schedule",
      "Committing to work for five minutes",
      "Working only at night"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What did the study on self-compassion find?",
     "o": [
      "It made students lazier.",
      "Students who forgave themselves procrastinated less later.",
      "It had no effect."
     ],
     "a": 1
    }
   ],
   "gap": "Avoiding it brings immediate [relief]. Break a large task into a very small first [step]. Criticising ourselves harshly tends to increase negative [feelings].",
   "dict": "Once we begin, continuing is often far easier."
  },
  {
   "id": "l-b2-8",
   "title": "Is Fast Fashion Worth It?",
   "type": "Interview",
   "speakers": {
    "A": "Interviewer",
    "B": "Designer"
   },
   "lines": [
    [
     "A",
     "You've built a clothing brand around repair and reuse. Why did you leave the mainstream fashion industry?"
    ],
    [
     "B",
     "I worked for a large retailer for eight years, and I became increasingly uncomfortable with the pace. We were launching new collections almost every fortnight, and I knew that much of what we produced would be worn a handful of times before being thrown away."
    ],
    [
     "A",
     "But fast fashion makes clothes affordable for people on low incomes. Isn't that a good thing?"
    ],
    [
     "B",
     "It's a genuine concern, and I don't want to lecture anyone. But cheap clothes often aren't cheap in the long run if they fall apart after a few washes. Buying second-hand, or buying one good-quality item instead of three poor ones, can actually save money."
    ],
    [
     "A",
     "What does your business do differently?"
    ],
    [
     "B",
     "Every item comes with free repairs for life. We also take back old clothes, ours or anyone else's, and either resell them or turn the fabric into new products. Customers tell us they value clothes more when they know they can keep them for years."
    ],
    [
     "A",
     "Can a model like yours compete with the big brands?"
    ],
    [
     "B",
     "Not on price alone. But I think there's a growing number of consumers, especially younger ones, who care about where their clothes come from. And if governments make producers responsible for waste, the economics could change very quickly."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Why did the designer leave the retailer?",
     "o": [
      "She was fired.",
      "She was uncomfortable with the speed of production.",
      "She wanted a higher salary."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "How often did the retailer launch collections?",
     "o": [
      "Every fortnight",
      "Every month",
      "Twice a year"
     ],
     "a": 0
    },
    {
     "t": "mc",
     "q": "What does her brand offer with every item?",
     "o": [
      "A discount on the next purchase",
      "Free repairs for life",
      "A free bag"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What could change the economics quickly?",
     "o": [
      "Lower cotton prices",
      "Governments making producers responsible for waste",
      "More advertising"
     ],
     "a": 1
    }
   ],
   "gap": "Much of what we produced would be worn a [handful] of times. Cheap clothes often aren't cheap in the long [run]. Customers [value] clothes more when they can keep them for years.",
   "dict": "Buying one good-quality item instead of three poor ones can actually save money."
  },
  {
   "id": "l-b2-9",
   "title": "Space Exploration: Is It Worth the Cost?",
   "type": "Discussion",
   "speakers": {
    "A": "Host",
    "B": "Dr Okafor",
    "C": "Ben"
   },
   "lines": [
    [
     "A",
     "Space agencies and private companies are spending billions on missions to the Moon and Mars. Dr Okafor, as an astrophysicist, how do you justify that?"
    ],
    [
     "B",
     "Space research has given us far more than people realise: satellite navigation, weather forecasting, water purification systems and medical imaging all owe something to space technology. Satellites are also essential for monitoring climate change, deforestation and natural disasters."
    ],
    [
     "C",
     "I don't dispute that satellites are useful. My concern is with the crewed missions to Mars. The money involved could transform healthcare or fight poverty here on Earth."
    ],
    [
     "B",
     "The budgets are smaller than many assume, though. NASA receives well under one per cent of US federal spending. And international cooperation in space has historically been a rare area where rival countries work together."
    ],
    [
     "C",
     "That's true for public agencies, but private companies are increasingly driven by profit and prestige. Who decides how space is used, and who benefits?"
    ],
    [
     "B",
     "That's a legitimate question. We urgently need clearer international rules, for example on space debris, which is a growing danger to the satellites we all depend on."
    ],
    [
     "A",
     "So perhaps the debate isn't whether to explore, but how?"
    ],
    [
     "C",
     "Exactly. I'd support exploration that is transparent, shares its benefits widely and doesn't create a new mess in orbit."
    ]
   ],
   "q": [
    {
     "t": "mc",
     "q": "Which benefit of space research does Dr Okafor mention?",
     "o": [
      "Faster cars",
      "Weather forecasting",
      "Cheaper food"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What is Ben mainly concerned about?",
     "o": [
      "All satellites",
      "Crewed missions to Mars",
      "Weather forecasting"
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "What does Dr Okafor say about NASA's budget?",
     "o": [
      "It is half of US spending.",
      "It is well under 1% of federal spending.",
      "It has doubled recently."
     ],
     "a": 1
    },
    {
     "t": "mc",
     "q": "Which danger do both speakers want rules for?",
     "o": [
      "Space debris",
      "Solar storms",
      "Asteroids"
     ],
     "a": 0
    }
   ],
   "gap": "Satellites are essential for monitoring climate [change]. International [cooperation] in space has been rare. Space [debris] is a growing danger.",
   "dict": "The debate isn't whether to explore, but how."
  }
 ]
};
