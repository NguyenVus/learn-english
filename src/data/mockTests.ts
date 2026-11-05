/* Full Mock Exams & Practice Tests for A2, B1, and B2 */
import type { ByLevel, MockTest } from "../types";

export const mockTests: ByLevel<MockTest[]> = {
  A2: [
    {
      id: "mock-a2-1",
      level: "A2",
      title: "A2 Comprehensive Practice Test 1",
      desc: "20 questions: Grammar, Vocabulary, Error Identification, Sentence Rewrite & Reading.",
      timeLimit: 25,
      questions: [
        {
          lv: "A2",
          t: "mc",
          q: "My parents ___ in a small apartment near the city centre.",
          o: ["lives", "live", "are live", "living"],
          a: 1,
          x: "Chủ ngữ số nhiều 'My parents' (bố mẹ tôi) diễn tả sự thật ổn định lâu dài → Hiện tại đơn dùng động từ nguyên mẫu: 'live'. 'lives' chỉ dùng cho ngôi thứ 3 số ít."
        },
        {
          lv: "A2",
          t: "mc",
          q: "How ___ apples did you buy at the supermarket?",
          o: ["much", "many", "often", "long"],
          a: 1,
          x: "'apples' (những quả táo) là danh từ đếm được số nhiều → hỏi số lượng dùng 'How many'. 'How much' chỉ dùng cho danh từ không đếm được."
        },
        {
          lv: "A2",
          t: "mc",
          q: "We visited our grandparents two weeks ___.",
          o: ["before", "ago", "since", "last"],
          a: 1,
          x: "Cấu trúc chỉ thời gian trong quá khứ: [khoảng thời gian] + 'ago' (two weeks ago: cách đây 2 tuần). 'before' đứng trước mốc thời gian hoặc dùng trong thì hoàn thành."
        },
        {
          lv: "A2",
          t: "mc",
          q: "This jacket is ___ than the black one.",
          o: ["more warm", "warmer", "warmest", "as warm"],
          a: 1,
          x: "Tính từ ngắn 'warm' trong so sánh hơn đi với 'than' → thêm đuôi -er: 'warmer than'. Không dùng 'more warm'."
        },
        {
          lv: "A2",
          t: "mc",
          q: "You ___ stop when the traffic light turns red. It's the law.",
          o: ["must", "can", "may", "could"],
          a: 0,
          x: "Diễn tả quy định bắt buộc theo luật pháp ('It's the law') → dùng 'must' (phải)."
        },
        {
          lv: "A2",
          t: "mc",
          q: "She usually plays ___ piano in the evening.",
          o: ["a", "an", "the", "—"],
          a: 2,
          x: "Khi nói về việc chơi một loại nhạc cụ (play the piano, play the guitar) luôn có mạo từ 'the'."
        },
        {
          lv: "A2",
          t: "mc",
          q: "What time does your plane ___ off?",
          o: ["get", "take", "turn", "put"],
          a: 1,
          x: "Cụm động từ 'take off' nghĩa là máy bay cất cánh."
        },
        {
          lv: "A2",
          t: "mc",
          q: "If it rains this afternoon, we ___ the football match.",
          o: ["cancel", "would cancel", "will cancel", "cancelled"],
          a: 2,
          x: "Câu điều kiện loại 1 (If + hiện tại đơn, S + will + V): 'will cancel' (sẽ huỷ trận đấu)."
        },
        // Error Identification
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["She", "didn't went", "to the party", "yesterday"],
          a: 1,
          corr: "didn't go",
          x: "Sau trợ động từ phủ định trong quá khứ 'didn't', động từ chính phải ở dạng nguyên mẫu không chia: didn't go (không dùng didn't went)."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["There is", "many books", "on the shelf", "in my room"],
          a: 0,
          corr: "There are",
          x: "'many books' là danh từ số nhiều, nên to be phải chia ở dạng số nhiều: 'There are many books'."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["He is", "more taller", "than his brother", "Tom"],
          a: 1,
          corr: "taller",
          x: "'tall' là tính từ ngắn, dạng so sánh hơn là 'taller'. Không dùng 'more taller' (lỗi lặp từ so sánh hơn)."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["I am", "looking forward", "to see", "you soon"],
          a: 2,
          corr: "to seeing",
          x: "Cấu trúc 'look forward to + V-ing': sau to ở đây là giới từ nên động từ phải thêm đuôi -ing: 'to seeing'."
        },
        // Sentence Rewrite
        {
          lv: "A2",
          t: "rewrite",
          orig: "No one in my class is taller than Nam.",
          q: "Nam is ___ in my class.",
          a: "the tallest student|the tallest boy|the tallest person|the tallest",
          x: "Chuyển từ so sánh hơn 'không ai cao hơn Nam' sang so sánh nhất: 'Nam is the tallest in my class'."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "I haven't got enough money to buy this smartphone.",
          q: "This smartphone is ___ for me to buy.",
          a: "too expensive",
          x: "Cấu trúc tương đương: not enough money = too expensive (quá đắt đối với tôi để mua)."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "It is necessary for you to arrive on time tomorrow.",
          q: "You ___ on time tomorrow.",
          a: "must arrive|have to arrive|need to arrive",
          x: "'It is necessary for you to...' (Bạn cần phải...) tương đương với modal verb 'must arrive' hoặc 'have to arrive'."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "She started learning French three months ago.",
          q: "She has ___ for three months.",
          a: "learned French|been learning French|learnt French",
          x: "Chuyển từ quá khứ đơn với 'ago' sang hiện tại hoàn thành với 'for': 'has learned French for three months'."
        },
        // Reading Comprehension
        {
          lv: "A2",
          t: "mc",
          ctx: "Dear students, our school library will be closed from 12:00 to 14:00 on Friday for cleaning. Books due on Friday can be returned on Monday without any fine.",
          q: "What does the announcement say?",
          o: [
            "The library is closed all day on Friday.",
            "Students can return books on Monday without paying a fine.",
            "Students must pay a fine if they return books on Monday."
          ],
          a: 1,
          x: "Thông báo nêu rõ: 'Books due on Friday can be returned on Monday without any fine' (Sách đến hạn thứ Sáu có thể trả vào thứ Hai mà không bị phạt tiền)."
        },
        {
          lv: "A2",
          t: "mc",
          ctx: "Da Nang is famous for its beautiful sandy beaches and bridges. Every summer, thousands of tourists visit the city to watch the international fireworks festival.",
          q: "Why do many tourists visit Da Nang in the summer?",
          o: [
            "To build new bridges",
            "To enjoy the fireworks festival",
            "To avoid the beaches"
          ],
          a: 1,
          x: "Bài đọc: 'tourists visit the city to watch the international fireworks festival' (du khách đến để xem lễ hội pháo hoa quốc tế)."
        },
        {
          lv: "A2",
          t: "tf",
          ctx: "Tom usually cycles to work, but when it rains heavily, he takes the underground instead.",
          q: "Tom always travels to work by bicycle regardless of the weather.",
          a: false,
          x: "False. Bài đọc nêu rõ khi trời mưa to anh ấy đi tàu điện ngầm ('when it rains heavily, he takes the underground instead') chứ không phải luôn luôn đi xe đạp."
        },
        {
          lv: "A2",
          t: "gap",
          q: "We usually have lunch ___ 12:30 p.m. at the office.",
          a: "at",
          x: "Giới từ chỉ mốc giờ giấc cụ thể luôn là 'at': 'at 12:30 p.m.'."
        }
      ]
    },
    {
      id: "mock-a2-2",
      level: "A2",
      title: "A2 Comprehensive Practice Test 2",
      desc: "20 questions: Past tenses, Modals, Word Choice, Error Detection & Reading.",
      timeLimit: 25,
      questions: [
        {
          lv: "A2",
          t: "mc",
          q: "They ___ television when the power suddenly went off.",
          o: ["watched", "were watching", "are watching", "watch"],
          a: 1,
          x: "Hành động đang diễn ra trong quá khứ ('were watching') thì hành động ngắn khác xen vào ('power went off')."
        },
        {
          lv: "A2",
          t: "mc",
          q: "There is only a ___ milk left in the bottle.",
          o: ["few", "little", "many", "any"],
          a: 1,
          x: "'milk' là danh từ không đếm được, dùng 'a little' để chỉ một lượng nhỏ. 'a few' chỉ dùng cho danh từ đếm được số nhiều."
        },
        {
          lv: "A2",
          t: "mc",
          q: "She can play tennis very well, but she ___ swim.",
          o: ["can't", "mustn't", "doesn't have to", "shouldn't"],
          a: 0,
          x: "Diễn tả không có khả năng làm gì ở hiện tại dùng 'can't': 'she can't swim' (cô ấy không biết bơi)."
        },
        {
          lv: "A2",
          t: "mc",
          q: "Whose book is this? – It's ___.",
          o: ["mine", "my", "me", "I"],
          a: 0,
          x: "Đại từ sở hữu 'mine' đứng độc lập để thay thế cho 'my book'."
        },
        {
          lv: "A2",
          t: "mc",
          q: "I would like to make an ___ with Dr. Smith for Thursday.",
          o: ["application", "appointment", "arrangement", "admission"],
          a: 1,
          x: "'make an appointment' là cụm cố định nghĩa là hẹn gặp bác sĩ/nha sĩ."
        },
        {
          lv: "A2",
          t: "mc",
          q: "Be careful! You ___ drop that glass vase.",
          o: ["might", "must", "should", "need"],
          a: 0,
          x: "Diễn tả khả năng có thể xảy ra điều không mong muốn: 'You might drop that glass vase' (Bạn có thể làm rơi chiếc bình đấy)."
        },
        {
          lv: "A2",
          t: "mc",
          q: "Hanoi is the ___ city in northern Vietnam.",
          o: ["larger", "largest", "most large", "as large"],
          a: 1,
          x: "So sánh nhất của tính từ ngắn 'large' sau 'the' là 'largest'."
        },
        {
          lv: "A2",
          t: "mc",
          q: "We arrived ___ the airport two hours before departure.",
          o: ["at", "in", "to", "on"],
          a: 0,
          x: "Đến một địa điểm cụ thể như sân bay, nhà ga dùng giới từ 'at': 'arrived at the airport'."
        },
        // Error Detection
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["He don't", "like eating", "spicy food", "at dinner"],
          a: 0,
          corr: "He doesn't",
          x: "Chủ ngữ ngôi thứ 3 số ít 'He' phải dùng trợ động từ 'doesn't', không dùng 'don't'."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["I bought", "an useful", "English dictionary", "yesterday"],
          a: 1,
          corr: "a useful",
          x: "Từ 'useful' phiên âm bắt đầu bằng phụ âm /j/ (/ˈjuːsfl/), nên phải dùng mạo từ 'a' chứ không dùng 'an'."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["She is", "more good at", "English than", "her sister"],
          a: 1,
          corr: "better at",
          x: "So sánh hơn của tính từ 'good' là 'better'. Không dùng 'more good'."
        },
        {
          lv: "A2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["They have", "lived in", "this house", "since five years"],
          a: 3,
          corr: "for five years",
          x: "'five years' là khoảng thời gian (period of time) nên phải đi với 'for', không đi với 'since'."
        },
        // Sentence Rewrite
        {
          lv: "A2",
          t: "rewrite",
          orig: "Can you tell me your phone number?",
          q: "What ___ phone number?",
          a: "is your",
          x: "'Can you tell me your phone number?' tương đương câu hỏi trực tiếp: 'What is your phone number?'."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "Because the weather was bad, we cancelled the picnic.",
          q: "The weather was bad, ___ the picnic.",
          a: "so we cancelled|so we called off",
          x: "Chuyển từ mệnh đề nguyên nhân 'Because...' sang liên từ chỉ kết quả 'so' (vì vậy)."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "It took her two hours to complete the assignment.",
          q: "She spent two hours ___ the assignment.",
          a: "completing|finishing",
          x: "Cấu trúc tương đương: It takes sb time to-V = S spend time + V-ing ('spent two hours completing')."
        },
        {
          lv: "A2",
          t: "rewrite",
          orig: "My brother drives more carefully than me.",
          q: "I drive ___ than my brother.",
          a: "more carelessly|less carefully",
          x: "Trái nghĩa với 'more carefully' là 'less carefully' hoặc 'more carelessly'."
        },
        // Reading Comprehension
        {
          lv: "A2",
          t: "mc",
          ctx: "NOTICE: Please turn off all mobile phones during the concert. Photography and audio recording are strictly prohibited inside the auditorium.",
          q: "What are audience members forbidden to do?",
          o: [
            "Listen to the concert",
            "Take pictures or record sound",
            "Sit in the auditorium"
          ],
          a: 1,
          x: "Thông báo: 'Photography and audio recording are strictly prohibited' (Chụp ảnh và ghi âm bị nghiêm cấm hoàn toàn)."
        },
        {
          lv: "A2",
          t: "tf",
          ctx: "Mai works as a graphic designer. She works from home four days a week and visits the main studio only on Wednesdays.",
          q: "Mai goes to the office every working day.",
          a: false,
          x: "False. Mai làm việc tại nhà 4 ngày một tuần và chỉ đến văn phòng vào thứ Tư ('visits the main studio only on Wednesdays')."
        },
        {
          lv: "A2",
          t: "gap",
          q: "I am interested ___ learning how to play the guitar.",
          a: "in",
          x: "Cụm tính từ đi với giới từ cố định: 'be interested in + V-ing' (hứng thú với việc gì)."
        },
        {
          lv: "A2",
          t: "gap",
          q: "She doesn't like coffee, and she doesn't like tea ___.",
          a: "either",
          x: "Trong câu phủ định, từ đồng tình 'cũng không' đặt ở cuối câu là 'either' (khẳng định dùng 'too')."
        }
      ]
    }
,
    {
          "id": "mock-a2-3",
          "level": "A2",
          "title": "A2 Comprehensive Practice Test 3",
          "desc": "20 questions: Past Continuous, Going to, Prepositions, Quantifiers, Rewrite & Reading.",
          "timeLimit": 25,
          "questions": [
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "I ___ dinner when the phone suddenly rang.",
                      "o": [
                            "was cooking",
                            "cooked",
                            "am cooking",
                            "cook"
                      ],
                      "a": 0,
                      "x": "Hành động đang diễn ra trong quá khứ ('was cooking') thì hành động ngắn khác xen vào ('phone rang' - Quá khứ đơn)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "They ___ visit their grandparents next weekend. They already bought the train tickets.",
                      "o": [
                            "are going to",
                            "will to",
                            "go to",
                            "are go"
                      ],
                      "a": 0,
                      "x": "Kế hoạch đã có dự định và chuẩn bị từ trước ('bought tickets') → dùng 'be going to': 'are going to visit'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "Our English class starts ___ 8:30 on Monday mornings.",
                      "o": [
                            "in",
                            "on",
                            "at",
                            "to"
                      ],
                      "a": 2,
                      "x": "Trước mốc giờ giấc cụ thể luôn dùng giới từ 'at' (at 8:30)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "Tom ___ late for work because he always sets two alarms.",
                      "o": [
                            "is never",
                            "never is",
                            "is often",
                            "rarely is"
                      ],
                      "a": 0,
                      "x": "Trạng từ chỉ tần suất đứng sau động từ to be: 'is never late'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "Could you lend me ___ dollars? I forgot my wallet at home.",
                      "o": [
                            "a few",
                            "a little",
                            "much",
                            "any"
                      ],
                      "a": 0,
                      "x": "'dollars' là danh từ đếm được số nhiều → dùng 'a few' (một vài). 'a little' chỉ dùng cho danh từ không đếm được."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "Tomorrow is Sunday, so I ___ get up early for school.",
                      "o": [
                            "don't have to",
                            "mustn't",
                            "have to not",
                            "shouldn't to"
                      ],
                      "a": 0,
                      "x": "'don't have to' diễn tả sự không cần thiết (không phải làm gì). 'mustn't' là cấm đoán."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "My new laptop is much ___ than my old heavy computer.",
                      "o": [
                            "better",
                            "gooder",
                            "more good",
                            "best"
                      ],
                      "a": 0,
                      "x": "Dạng so sánh hơn bất quy tắc của 'good' là 'better' ('better than')."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "You can purchase cough medicine and vitamins at the local ___.",
                      "o": [
                            "pharmacy",
                            "bakery",
                            "library",
                            "butcher's"
                      ],
                      "a": 0,
                      "x": "'pharmacy' (hiệu thuốc / nhà thuốc) là nơi bán thuốc và vitamin."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "She don't",
                            "like eating",
                            "spicy food",
                            "for dinner"
                      ],
                      "a": 0,
                      "corr": "doesn't",
                      "x": "Chủ ngữ ngôi thứ 3 số ít 'She' trong thì Hiện tại đơn phủ định phải dùng trợ động từ 'doesn't', không dùng 'don't'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "I have seen",
                            "him yesterday",
                            "when I was",
                            "at the supermarket"
                      ],
                      "a": 0,
                      "corr": "saw",
                      "x": "Có mốc thời gian quá khứ xác định 'yesterday' → phải dùng Quá khứ đơn 'saw', không dùng Hiện tại hoàn thành 'have seen'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "There are",
                            "much people",
                            "waiting in line",
                            "at the bus stop"
                      ],
                      "a": 1,
                      "corr": "many people",
                      "x": "'people' là danh từ đếm được số nhiều → dùng 'many people', không dùng 'much'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "He is more tall",
                            "than his elder brother",
                            "who plays",
                            "basketball"
                      ],
                      "a": 0,
                      "corr": "taller",
                      "x": "'tall' là tính từ ngắn 1 âm tiết, so sánh hơn thêm đuôi -er thành 'taller', không dùng 'more tall'."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "No one in my class is taller than Nam.",
                      "key": "tallest",
                      "q": "Nam is ___ student in my class.",
                      "a": [
                            "the tallest"
                      ],
                      "x": "So sánh hơn nhất: 'Nam is the tallest student in my class' (Nam là học sinh cao nhất lớp)."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "It isn't necessary for you to wear a suit today.",
                      "key": "have",
                      "q": "You don't ___ a suit today.",
                      "a": [
                            "have to wear"
                      ],
                      "x": "Cấu trúc không cần thiết: 'It isn't necessary for sb to V' = 'sb don't have to V'."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "She began playing the guitar three years ago.",
                      "key": "for",
                      "q": "She has played the guitar ___.",
                      "a": [
                            "for three years",
                            "for 3 years"
                      ],
                      "x": "Chuyển từ Quá khứ đơn sang Hiện tại hoàn thành: 'three years ago' → 'for three years'."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "Why don't we go for a walk in the park?",
                      "key": "shall",
                      "q": "___ for a walk in the park?",
                      "a": [
                            "Shall we go"
                      ],
                      "x": "Cấu trúc đề xuất lời mời: 'Why don't we V...?' = 'Shall we V...?'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Hi Sarah,\nI am writing to tell you about my new apartment in Da Nang. I moved here last Saturday. The apartment has two bedrooms, a bright living room, and a small balcony overlooking the Han River. It is on the fifth floor of a modern building with an elevator and a gym. There is a supermarket across the street, so shopping for groceries is very convenient. My new job at the international school starts next Monday, and I can walk there in just ten minutes. Would you like to visit me next weekend?\nBest,\nLan",
                      "q": "When did Lan move into her new apartment?",
                      "o": [
                            "Last Saturday",
                            "Next Monday",
                            "Two weeks ago",
                            "Yesterday"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'I moved here last Saturday' (Tôi chuyển đến đây thứ Bảy tuần trước)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Hi Sarah,\nI am writing to tell you about my new apartment in Da Nang. I moved here last Saturday. The apartment has two bedrooms, a bright living room, and a small balcony overlooking the Han River. It is on the fifth floor of a modern building with an elevator and a gym. There is a supermarket across the street, so shopping for groceries is very convenient. My new job at the international school starts next Monday, and I can walk there in just ten minutes. Would you like to visit me next weekend?\nBest,\nLan",
                      "q": "What can Lan see from her apartment balcony?",
                      "o": [
                            "A school",
                            "The Han River",
                            "A gym",
                            "A train station"
                      ],
                      "a": 1,
                      "x": "Bài đọc: 'a small balcony overlooking the Han River' (ban công nhỏ nhìn ra sông Hàn)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Hi Sarah,\nI am writing to tell you about my new apartment in Da Nang. I moved here last Saturday. The apartment has two bedrooms, a bright living room, and a small balcony overlooking the Han River. It is on the fifth floor of a modern building with an elevator and a gym. There is a supermarket across the street, so shopping for groceries is very convenient. My new job at the international school starts next Monday, and I can walk there in just ten minutes. Would you like to visit me next weekend?\nBest,\nLan",
                      "q": "Why is grocery shopping easy for Lan?",
                      "o": [
                            "Her mother cooks for her",
                            "There is a supermarket across the street",
                            "She orders everything online",
                            "Food is delivered for free"
                      ],
                      "a": 1,
                      "x": "Bài đọc: 'There is a supermarket across the street, so shopping for groceries is very convenient'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Hi Sarah,\nI am writing to tell you about my new apartment in Da Nang. I moved here last Saturday. The apartment has two bedrooms, a bright living room, and a small balcony overlooking the Han River. It is on the fifth floor of a modern building with an elevator and a gym. There is a supermarket across the street, so shopping for groceries is very convenient. My new job at the international school starts next Monday, and I can walk there in just ten minutes. Would you like to visit me next weekend?\nBest,\nLan",
                      "q": "How does Lan plan to travel to her new workplace?",
                      "o": [
                            "By bus",
                            "By motorbike",
                            "On foot",
                            "By taxi"
                      ],
                      "a": 2,
                      "x": "Bài đọc: 'I can walk there in just ten minutes' (đi bộ mất 10 phút → On foot)."
                }
          ]
    },
    {
          "id": "mock-a2-4",
          "level": "A2",
          "title": "A2 Comprehensive Practice Test 4",
          "desc": "20 questions: Giving Advice, Conjunctions, Gerunds, Question Tags & Reading.",
          "timeLimit": 25,
          "questions": [
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "You look exhausted. You ___ stay up so late studying every night.",
                      "o": [
                            "shouldn't",
                            "must",
                            "can",
                            "needn't to"
                      ],
                      "a": 0,
                      "x": "Lời khuyên không nên làm gì: 'shouldn't + V nguyên thể' (Bạn không nên thức quá khuya)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "He was very tired after work, ___ he decided to skip the party and rest.",
                      "o": [
                            "so",
                            "because",
                            "although",
                            "but"
                      ],
                      "a": 0,
                      "x": "Liên từ chỉ kết quả: 'Anh ấy rất mệt sau giờ làm, vì vậy (so) anh ấy quyết định nghỉ ngơi'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "I'm hungry, but there is ___ in the fridge. It's completely empty.",
                      "o": [
                            "nothing",
                            "anything",
                            "something",
                            "everything"
                      ],
                      "a": 0,
                      "x": "'nothing' mang nghĩa phủ định (không có thứ gì): 'completely empty' (trống rỗng hoàn toàn)."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "My father enjoys ___ old stamps and coins in his free time.",
                      "o": [
                            "collecting",
                            "to collect",
                            "collect",
                            "collected"
                      ],
                      "a": 0,
                      "x": "Sau động từ 'enjoy' luôn đi với V-ing: 'enjoy collecting'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "If the weather ___ sunny tomorrow, we will go cycling along the beach.",
                      "o": [
                            "is",
                            "will be",
                            "was",
                            "are"
                      ],
                      "a": 0,
                      "x": "Mệnh đề 'if' trong câu điều kiện loại 1 chia thì Hiện tại đơn: 'the weather is'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "Mount Everest is the ___ mountain peak in the world.",
                      "o": [
                            "highest",
                            "most high",
                            "higher",
                            "highest of all"
                      ],
                      "a": 0,
                      "x": "So sánh hơn nhất của tính từ ngắn 'high' là 'the highest'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "You are coming to the birthday party tonight, ___?",
                      "o": [
                            "aren't you",
                            "don't you",
                            "are you",
                            "won't you"
                      ],
                      "a": 0,
                      "x": "Mệnh đề chính khẳng định 'You are' → câu hỏi đuôi phủ định: 'aren't you?'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "q": "I have a terrible toothache, so I must make an appointment with the ___.",
                      "o": [
                            "dentist",
                            "optician",
                            "surgeon",
                            "vet"
                      ],
                      "a": 0,
                      "x": "'dentist' là nha sĩ (khám và chữa bệnh về răng)."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "If it will rain",
                            "this afternoon,",
                            "we will cancel",
                            "the tennis match"
                      ],
                      "a": 0,
                      "corr": "If it rains",
                      "x": "Trong câu điều kiện loại 1, mệnh đề 'If' không dùng 'will', phải chia thì Hiện tại đơn: 'If it rains'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "She enjoys to read",
                            "historical novels",
                            "in the school library",
                            "every afternoon"
                      ],
                      "a": 0,
                      "corr": "enjoys reading",
                      "x": "Sau động từ 'enjoy' phải đi với V-ing: 'enjoys reading', không dùng 'enjoys to read'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "He didn't told",
                            "his parents about",
                            "the broken window",
                            "yesterday"
                      ],
                      "a": 0,
                      "corr": "didn't tell",
                      "x": "Sau trợ động từ 'didn't', động từ chính phải ở dạng nguyên thể: 'didn't tell', không dùng dạng quá khứ 'told'."
                },
                {
                      "lv": "A2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "This is the most good",
                            "movie I have",
                            "watched on Netflix",
                            "this year"
                      ],
                      "a": 0,
                      "corr": "the best",
                      "x": "'good' có dạng so sánh hơn nhất bất quy tắc là 'the best', không dùng 'the most good'."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "I haven't eaten sushi for six months.",
                      "key": "last",
                      "q": "The ___ sushi was six months ago.",
                      "a": [
                            "last time I ate",
                            "last time that I ate"
                      ],
                      "x": "'haven't done sth for [time]' = 'The last time I did sth was [time] ago'."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "It is a good idea to drink plenty of water every day.",
                      "key": "should",
                      "q": "You ___ plenty of water every day.",
                      "a": [
                            "should drink"
                      ],
                      "x": "'It is a good idea to V' = 'You should V' (lời khuyên nên làm gì)."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "This room is too dark for reading.",
                      "key": "enough",
                      "q": "This room is not ___ for reading.",
                      "a": [
                            "bright enough",
                            "light enough"
                      ],
                      "x": "'too dark' = 'not bright enough' (không đủ sáng)."
                },
                {
                      "lv": "A2",
                      "t": "rewrite",
                      "orig": "Peter runs faster than David.",
                      "key": "fast",
                      "q": "David does not run as ___ as Peter.",
                      "a": [
                            "fast"
                      ],
                      "x": "So sánh không bằng: 'S1 + V + faster than + S2' = 'S2 + doesn't V + as fast as + S1'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Dear Diary,\nToday was our first day in Sa Pa. We arrived at the train station early in the morning. The air was cool and fresh, completely different from the noisy streets of Hanoi. After checking into our hotel, we rented two bicycles and rode through the Muong Hoa Valley. The terraced rice fields looked like giant green staircases stretching up into the clouds. We stopped at a small local market where ethnic Black Hmong women were selling hand-embroidered scarves. I bought a beautiful blue scarf for my grandmother and a handmade wooden bracelet for myself. Tomorrow we are taking the cable car up to the peak of Fansipan. I can't wait!\nThu",
                      "q": "How did the air in Sa Pa feel compared to Hanoi?",
                      "o": [
                            "Hot and humid",
                            "Cool and fresh",
                            "Polluted and dry",
                            "Foggy and freezing"
                      ],
                      "a": 1,
                      "x": "Bài viết: 'The air was cool and fresh, completely different from the noisy streets of Hanoi'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Dear Diary,\nToday was our first day in Sa Pa. We arrived at the train station early in the morning. The air was cool and fresh, completely different from the noisy streets of Hanoi. After checking into our hotel, we rented two bicycles and rode through the Muong Hoa Valley. The terraced rice fields looked like giant green staircases stretching up into the clouds. We stopped at a small local market where ethnic Black Hmong women were selling hand-embroidered scarves. I bought a beautiful blue scarf for my grandmother and a handmade wooden bracelet for myself. Tomorrow we are taking the cable car up to the peak of Fansipan. I can't wait!\nThu",
                      "q": "How did Thu and her companion explore the valley?",
                      "o": [
                            "By bus",
                            "On foot",
                            "By bicycle",
                            "By cable car"
                      ],
                      "a": 2,
                      "x": "Bài viết: 'we rented two bicycles and rode through the Muong Hoa Valley'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Dear Diary,\nToday was our first day in Sa Pa. We arrived at the train station early in the morning. The air was cool and fresh, completely different from the noisy streets of Hanoi. After checking into our hotel, we rented two bicycles and rode through the Muong Hoa Valley. The terraced rice fields looked like giant green staircases stretching up into the clouds. We stopped at a small local market where ethnic Black Hmong women were selling hand-embroidered scarves. I bought a beautiful blue scarf for my grandmother and a handmade wooden bracelet for myself. Tomorrow we are taking the cable car up to the peak of Fansipan. I can't wait!\nThu",
                      "q": "What gift did Thu purchase for her grandmother?",
                      "o": [
                            "A handmade wooden bracelet",
                            "A blue scarf",
                            "A box of herbal tea",
                            "Traditional clothes"
                      ],
                      "a": 1,
                      "x": "Bài viết: 'I bought a beautiful blue scarf for my grandmother'."
                },
                {
                      "lv": "A2",
                      "t": "mc",
                      "ctx": "Dear Diary,\nToday was our first day in Sa Pa. We arrived at the train station early in the morning. The air was cool and fresh, completely different from the noisy streets of Hanoi. After checking into our hotel, we rented two bicycles and rode through the Muong Hoa Valley. The terraced rice fields looked like giant green staircases stretching up into the clouds. We stopped at a small local market where ethnic Black Hmong women were selling hand-embroidered scarves. I bought a beautiful blue scarf for my grandmother and a handmade wooden bracelet for myself. Tomorrow we are taking the cable car up to the peak of Fansipan. I can't wait!\nThu",
                      "q": "What activity does Thu look forward to tomorrow?",
                      "o": [
                            "Visiting Fansipan by cable car",
                            "Taking a train back to Hanoi",
                            "Renting motorbikes",
                            "Climbing the mountain on foot"
                      ],
                      "a": 0,
                      "x": "Bài viết: 'Tomorrow we are taking the cable car up to the peak of Fansipan'."
                }
          ]
    }
  ],
  B1: [
    {
      id: "mock-b1-1",
      level: "B1",
      title: "B1 Standard Mock Exam 1",
      desc: "25 questions: PET/VSTEP B1 format with Conditionals, Passives, Rewrites & Cloze.",
      timeLimit: 35,
      questions: [
        {
          lv: "B1",
          t: "mc",
          q: "I have lived in this neighbourhood ___ I was ten years old.",
          o: ["for", "since", "during", "while"],
          a: 1,
          x: "Mệnh đề quá khứ 'I was ten years old' là một mốc thời gian → dùng 'since'. 'for' chỉ dùng cho khoảng thời gian."
        },
        {
          lv: "B1",
          t: "mc",
          q: "If I ___ you, I would take that job offer immediately.",
          o: ["am", "was", "were", "would be"],
          a: 2,
          x: "Câu điều kiện loại 2 diễn tả lời khuyên: 'If I were you, I would...' ('were' dùng cho tất cả các ngôi trong văn phong chuẩn)."
        },
        {
          lv: "B1",
          t: "mc",
          q: "The bridge ___ by a team of Japanese engineers in 2010.",
          o: ["built", "was built", "has built", "was building"],
          a: 1,
          x: "Cây cầu là đối tượng được xây dựng + mốc quá khứ xác định 'in 2010' → bị động Quá khứ đơn: 'was built'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "She asked me where I ___ my holiday the previous summer.",
          o: ["spent", "have spent", "had spent", "spend"],
          a: 2,
          x: "Câu tường thuật gián tiếp lùi thì từ Quá khứ đơn ('spent') sang Quá khứ hoàn thành: 'had spent'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "We won't be able to catch the train ___ we leave right now.",
          o: ["if", "unless", "provided", "as long as"],
          a: 1,
          x: "'unless' = if not (trừ khi): 'Chúng ta sẽ không thể bắt kịp tàu trừ khi chúng ta rời đi ngay bây giờ'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "He didn't ___ to like vegetables, but now he eats salad every day.",
          o: ["use", "used", "uses", "using"],
          a: 0,
          x: "Sau trợ động từ 'didn't', dạng phủ định của used to đưa về nguyên thể 'use': 'didn't use to'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "Could you please give me a ___ with carrying these heavy boxes?",
          o: ["head", "hand", "finger", "arm"],
          a: 1,
          x: "Thành ngữ 'give someone a hand' nghĩa là giúp đỡ ai một tay."
        },
        {
          lv: "B1",
          t: "mc",
          q: "The man ___ car was stolen has reported the incident to the police.",
          o: ["who", "whom", "whose", "which"],
          a: 2,
          x: "Đại từ quan hệ chỉ sở hữu ('chiếc xe của người đàn ông đó') → dùng 'whose': 'whose car was stolen'."
        },
        // Error Identification
        {
          lv: "B1",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["Despite of", "the bad weather", "they decided to go", "hiking yesterday"],
          a: 0,
          corr: "Despite / In spite of",
          x: "'Despite' không đi với 'of' (chỉ có 'In spite of' hoặc 'Despite' + danh từ)."
        },
        {
          lv: "B1",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["I have seen", "that thrilling movie", "with my friends", "two days ago"],
          a: 0,
          corr: "saw",
          x: "Có mốc thời gian quá khứ xác định 'two days ago', bắt buộc dùng thì Quá khứ đơn 'saw', không dùng thì Hiện tại hoàn thành."
        },
        {
          lv: "B1",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["The teacher told", "the students", "not make noise", "in the library"],
          a: 2,
          corr: "not to make noise",
          x: "Cấu trúc tường thuật câu mệnh lệnh phủ định: tell sb not to-V ('told the students not to make noise')."
        },
        {
          lv: "B1",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["He is used to", "wake up early", "every morning to", "exercise"],
          a: 1,
          corr: "waking up",
          x: "Cấu trúc 'be used to + V-ing' (quen với việc gì ở hiện tại): 'He is used to waking up early'."
        },
        // Sentence Transformation with Keywords
        {
          lv: "B1",
          t: "rewrite",
          orig: "I last saw my cousin two years ago.",
          key: "SEEN",
          q: "I have ___ two years.",
          a: "not seen my cousin for|not seen him for|not seen her for",
          x: "Chuyển từ 'Lần cuối tôi gặp...' sang Hiện tại hoàn thành phủ định: 'have not seen my cousin for two years'."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "They are repairing the road outside our house.",
          key: "BEING",
          q: "The road outside our house ___ repaired.",
          a: "is being",
          x: "Chuyển sang bị động thì Hiện tại tiếp diễn: S + is/are + being + V3/ed ('is being repaired')."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "“Don't forget to lock the back door,” Mum said to me.",
          key: "REMINDED",
          q: "Mum ___ the back door.",
          a: "reminded me to lock|reminded me not to forget",
          x: "Động từ tường thuật nhắc nhở: remind sb to-V ('Mum reminded me to lock the back door')."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "I don't have a car, so I can't drive you home.",
          key: "IF",
          q: "___ a car, I would drive you home.",
          a: "If I had",
          x: "Câu điều kiện loại 2 giả định trái với hiện tại: 'If I had a car, I would drive you home'."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "Although he was exhausted, he finished the report.",
          key: "SPITE",
          q: "In ___ exhausted, he finished the report.",
          a: "spite of being|spite of feeling",
          x: "Cấu trúc tương đương: In spite of + V-ing ('In spite of being exhausted')."
        },
        // Gap-fill cloze
        {
          lv: "B1",
          t: "gap",
          q: "She apologized to her boss ___ arriving late for the meeting.",
          a: "for",
          x: "Cấu trúc: 'apologize to sb for doing sth' (xin lỗi ai vì đã làm gì)."
        },
        {
          lv: "B1",
          t: "gap",
          q: "I'm really looking forward to ___ (meet) your new colleague tomorrow.",
          a: "meeting",
          x: "Sau 'look forward to' dùng V-ing: 'meeting'."
        },
        {
          lv: "B1",
          t: "gap",
          q: "Neither Lan ___ her brother likes drinking coffee.",
          a: "nor",
          x: "Cặp liên từ tương quan: 'Neither... nor...' (không... cũng không...)."
        },
        {
          lv: "B1",
          t: "gap",
          q: "The thief managed to ___ (escape) before the security guards arrived.",
          a: "escape",
          x: "Cấu trúc: 'manage to + V nguyên mẫu' (xoay xở/thành công làm việc gì khó khăn)."
        },
        // Reading Comprehension
        {
          lv: "B1",
          t: "mc",
          ctx: "Ecotourism has surged in popularity across Southeast Asia over the past decade. Unlike conventional mass tourism, which often strains local resources and damages ecosystems, ecotourism prioritises conservation and cultural preservation while directly supporting local community livelihoods.",
          q: "What is the primary benefit of ecotourism described in the text?",
          o: [
            "It is cheaper than conventional mass tourism.",
            "It supports conservation and local communities while protecting ecosystems.",
            "It builds large luxury resorts in natural areas."
          ],
          a: 1,
          x: "Bài đọc: 'ecotourism prioritises conservation and cultural preservation while directly supporting local community livelihoods'."
        },
        {
          lv: "B1",
          t: "tfng",
          ctx: "Researchers have discovered that drinking green tea regularly may improve concentration and lower the risk of cardiovascular disease. The study was conducted over a five-year period involving 2,000 adults.",
          q: "Coffee has the exact same health benefits as green tea according to the researchers.",
          a: "NG",
          x: "Not Given. Đoạn văn chỉ nói về trà xanh (green tea), hoàn toàn không đề cập hay so sánh với cà phê (coffee)."
        },
        {
          lv: "B1",
          t: "tfng",
          ctx: "Electric vehicles (EVs) produce zero direct tailpipe emissions. However, the environmental benefit depends significantly on how the electricity used to charge them is generated.",
          q: "Electric vehicles are completely harmless to the environment under all circumstances.",
          a: "F",
          x: "False. Đoạn văn nêu 'However, the environmental benefit depends significantly on how the electricity... is generated' (lợi ích phụ thuộc vào nguồn tạo ra điện), nên không phải hoàn toàn vô hại trong mọi trường hợp."
        },
        {
          lv: "B1",
          t: "mc",
          ctx: "Hi Sarah, our flights for the conference in Singapore have been confirmed for 14th March. Could you let me know whether you need a single or twin room by tomorrow noon so I can finalize the hotel reservation? – David",
          q: "Why is David emailing Sarah?",
          o: [
            "To invite her to Singapore on holiday",
            "To request her room preference before booking the hotel",
            "To inform her that the conference is cancelled"
          ],
          a: 1,
          x: "David viết: 'Could you let me know whether you need a single or twin room by tomorrow noon so I can finalize the hotel reservation?' (nhờ Sarah chọn loại phòng trước trưa mai để hoàn tất đặt khách sạn)."
        }
      ]
    },
    {
      id: "mock-b1-2",
      level: "B1",
      title: "B1 Standard Mock Exam 2",
      desc: "25 questions: Modals, Relative Clauses, Collocations, Error Identification & Transformation.",
      timeLimit: 35,
      questions: [
        {
          lv: "B1",
          t: "mc",
          q: "The government should invest more money ___ renewable energy.",
          o: ["on", "in", "to", "at"],
          a: 1,
          x: "Động từ 'invest' đi với giới từ 'in': 'invest money in something' (đầu tư tiền vào cái gì)."
        },
        {
          lv: "B1",
          t: "mc",
          q: "You ___ buy tickets in advance; entry is completely free for students today.",
          o: ["mustn't", "don't have to", "can't", "shouldn't"],
          a: 1,
          x: "Vé vào cửa miễn phí nên không cần thiết phải mua (không bắt buộc) → dùng 'don't have to'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "The novel, ___ was written in 1925, remains a masterpiece of modern literature.",
          o: ["that", "which", "whose", "what"],
          a: 1,
          x: "Mệnh đề quan hệ không xác định (có dấu phẩy) bổ nghĩa cho danh từ chỉ vật 'The novel' → dùng 'which', không dùng 'that'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "He succeeded ___ passing the entrance exam with flying colours.",
          o: ["at", "on", "in", "with"],
          a: 2,
          x: "Cấu trúc: 'succeed in + V-ing' (thành công trong việc gì)."
        },
        {
          lv: "B1",
          t: "mc",
          q: "I would rather you ___ tell anyone about our conversation.",
          o: ["don't", "didn't", "won't", "not"],
          a: 1,
          x: "Cấu trúc: 'would rather + S + past simple' diễn tả mong muốn ai đó làm/không làm gì ở hiện tại: 'would rather you didn't tell'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "She has such a busy schedule that she rarely ___ time to relax.",
          o: ["has", "have", "had", "is having"],
          a: 0,
          x: "Chủ ngữ ngôi thứ 3 số ít 'she' đi với trạng từ tần suất 'rarely' ở thì Hiện tại đơn → 'has'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "By the time we reached the cinema, the opening scene ___.",
          o: ["already finished", "has already finished", "had already finished", "was finishing"],
          a: 2,
          x: "Hành động cảnh mở đầu phim kết thúc TRƯỚC khi chúng tôi đến rạp trong quá khứ → chia Quá khứ hoàn thành: 'had already finished'."
        },
        {
          lv: "B1",
          t: "mc",
          q: "Can you help me ___ this crossword puzzle? It's really tricky.",
          o: ["figure out", "put off", "turn into", "give up"],
          a: 0,
          x: "'figure out' nghĩa là tìm ra lời giải, giải quyết được câu đố."
        },
        // Error Identification
        {
          lv: "B1",
          t: "error",
          q: "Find the underlined error in the sentence:",
          parts: ["Although he studied", "very hard for", "the test, but he", "failed to pass"],
          a: 2,
          corr: "he (bỏ 'but')",
          x: "Trong tiếng Anh không dùng cả 'Although' và 'but' trong cùng một câu: nếu đã có Although ở mệnh đề đầu thì mệnh đề sau không dùng but."
        },
        {
          lv: "B1",
          t: "error",
          q: "Find the underlined error in the sentence:",
          parts: ["She asked him", "what time", "did the train leave", "for Hue"],
          a: 2,
          corr: "the train left",
          x: "Trong câu hỏi gián tiếp (reported question), trật tự từ là khẳng định (S + V) và lùi thì: 'what time the train left', không đảo trợ động từ 'did'."
        },
        {
          lv: "B1",
          t: "error",
          q: "Find the underlined error in the sentence:",
          parts: ["The news", "on television tonight", "were very shocking", "to all of us"],
          a: 2,
          corr: "was very shocking",
          x: "'news' (tin tức) là danh từ không đếm được luôn đi với động từ số ít: 'was', không dùng 'were'."
        },
        {
          lv: "B1",
          t: "error",
          q: "Find the underlined error in the sentence:",
          parts: ["If I had", "known his phone number,", "I will call him", "yesterday afternoon"],
          a: 2,
          corr: "would have called",
          x: "Câu điều kiện loại 3 nói về quá khứ ('yesterday afternoon'): mệnh đề chính phải dùng 'would have called', không dùng 'will call'."
        },
        // Sentence Rewrite
        {
          lv: "B1",
          t: "rewrite",
          orig: "They built this school in 1985.",
          key: "WAS",
          q: "This school ___ in 1985.",
          a: "was built",
          x: "Chuyển sang câu bị động quá khứ đơn: 'This school was built in 1985'."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "It's a pity that I can't attend your wedding party.",
          key: "WISH",
          q: "I ___ attend your wedding party.",
          a: "wish I could",
          x: "Cấu trúc ước muốn trái ngược hiện tại: 'I wish I could attend your wedding party'."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "“Why don't we go camping this weekend?” said Jack.",
          key: "SUGGESTED",
          q: "Jack ___ camping that weekend.",
          a: "suggested going|suggested that we go",
          x: "Cấu trúc gợi ý: suggest + V-ing ('suggested going camping')."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "The water was so cold that we couldn't swim.",
          key: "TOO",
          q: "The water was ___ swim in.",
          a: "too cold for us to|too cold to",
          x: "Cấu trúc: too + adj + (for sb) to-V ('too cold for us to swim in')."
        },
        {
          lv: "B1",
          t: "rewrite",
          orig: "You must finish your assignment before you go out.",
          key: "ALLOWED",
          q: "You are not ___ you finish your assignment.",
          a: "allowed to go out until|allowed to go out before",
          x: "Cấu trúc: not allowed to-V until/before ('not allowed to go out until you finish...')."
        },
        // Gap-fill
        {
          lv: "B1",
          t: "gap",
          q: "We need to cut ___ on plastic waste to protect our oceans.",
          a: "down",
          x: "Cụm động từ: 'cut down on' nghĩa là cắt giảm, giảm bớt tiêu thụ."
        },
        {
          lv: "B1",
          t: "gap",
          q: "She succeeded in finding a job despite ___ (have) no previous experience.",
          a: "having",
          x: "Sau giới từ 'despite' dùng danh động từ V-ing: 'having'."
        },
        {
          lv: "B1",
          t: "gap",
          q: "This laptop is far superior ___ my old one in every aspect.",
          a: "to",
          x: "Tính từ 'superior' (tốt hơn, vượt trội hơn) luôn đi với giới từ 'to', không đi với 'than'."
        },
        {
          lv: "B1",
          t: "gap",
          q: "He didn't turn ___ at the interview, which surprised everyone.",
          a: "up",
          x: "Cụm động từ: 'turn up' nghĩa là xuất hiện, có mặt (bằng nghĩa với arrive/appear)."
        },
        // Reading Comprehension
        {
          lv: "B1",
          t: "mc",
          ctx: "Urban farming has gained traction in major cities where land is scarce. By transforming unused rooftops and balconies into productive vegetable gardens, city dwellers not only produce fresh, organic food but also help reduce urban heat island effects.",
          q: "What is an additional environmental benefit of rooftop farming mentioned in the text?",
          o: [
            "It increases traffic efficiency.",
            "It lowers the urban heat island effect.",
            "It eliminates the need for water."
          ],
          a: 1,
          x: "Bài đọc nêu rõ: 'also help reduce urban heat island effects' (giúp giảm hiệu ứng đảo nhiệt đô thị)."
        },
        {
          lv: "B1",
          t: "tfng",
          ctx: "According to a survey of 1,500 secondary students, reading for pleasure for at least 20 minutes each day significantly enhances vocabulary acquisition and analytical thinking skills.",
          q: "Reading fiction improves vocabulary faster than reading non-fiction.",
          a: "NG",
          x: "Not Given. Bài đọc chỉ nói về việc đọc sách để giải trí (reading for pleasure), không hề so sánh giữa tiểu thuyết (fiction) và sách phi hư cấu (non-fiction)."
        },
        {
          lv: "B1",
          t: "tfng",
          ctx: "The museum offers free admission to senior citizens and children under 12 on weekdays. However, standard ticket prices apply to all visitors during weekends and public holidays.",
          q: "Senior citizens can enter the museum for free on Saturday afternoon.",
          a: "F",
          x: "False. Bài đọc: 'standard ticket prices apply to all visitors during weekends' (vé tiêu chuẩn áp dụng cho tất cả khách vào cuối tuần, bao gồm thứ Bảy)."
        },
        {
          lv: "B1",
          t: "mc",
          ctx: "Attention passengers on train EX-24 to Da Nang: Due to track maintenance, the train will depart from Platform 4 instead of Platform 2. Departure time remains unchanged at 16:45.",
          q: "What has changed about train EX-24?",
          o: [
            "The departure time",
            "The departure platform",
            "The destination city"
          ],
          a: 1,
          x: "Thông báo ghi rõ: 'the train will depart from Platform 4 instead of Platform 2' (chỉ thay đổi sân ga khởi hành, thời gian không đổi)."
        }
      ]
    }
,
    {
          "id": "mock-b1-3",
          "level": "B1",
          "title": "B1 Intermediate Practice Test 3",
          "desc": "25 questions: Past Perfect, Conditionals, Modals of Deduction, Phrasal Verbs & Cloze.",
          "timeLimit": 35,
          "questions": [
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "By the time the fire brigade arrived, the blaze ___ by the neighbours.",
                      "o": [
                            "had already been extinguished",
                            "already extinguished",
                            "has extinguished",
                            "was extinguishing"
                      ],
                      "a": 0,
                      "x": "Hành động xảy ra và kết thúc trước một mốc thời gian quá khứ ('by the time') → dùng Quá khứ hoàn thành bị động: 'had already been extinguished'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "The talented architect ___ designed this award-winning museum has retired.",
                      "o": [
                            "who",
                            "whom",
                            "whose",
                            "which"
                      ],
                      "a": 0,
                      "x": "Đại từ quan hệ làm chủ ngữ chỉ người ('The talented architect') → dùng 'who'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "If I ___ a million dollars right now, I would open a sanctuary for abandoned animals.",
                      "o": [
                            "had",
                            "have",
                            "would have",
                            "had had"
                      ],
                      "a": 0,
                      "x": "Câu điều kiện loại 2 giả định trái thực tế ở hiện tại: Mệnh đề 'if' chia thì Quá khứ đơn: 'had'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Due to unforeseen budget cuts, the committee had to ___ the annual charity gala.",
                      "o": [
                            "call off",
                            "put on",
                            "look into",
                            "break out"
                      ],
                      "a": 0,
                      "x": "'call off' = cancel (hủy bỏ). 'put on' là mặc/tổ chức; 'look into' là điều tra."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "___ having spent three weeks rehearsing, he still experienced stage fright.",
                      "o": [
                            "Despite",
                            "Although",
                            "Even though",
                            "However"
                      ],
                      "a": 0,
                      "x": "'Despite + V-ing/noun phrase' diễn tả sự tương phản (Mặc dù đã dành 3 tuần luyện tập)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "She has always been very keen ___ mastering digital audio production.",
                      "o": [
                            "on",
                            "in",
                            "at",
                            "for"
                      ],
                      "a": 0,
                      "x": "Cụm tính từ đi với giới từ cố định: 'keen on + V-ing/noun' (hào hứng, say mê làm gì)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Look at the puddle-covered streets! It ___ torrential rain during the night.",
                      "o": [
                            "must have been",
                            "should be",
                            "can't have been",
                            "might be"
                      ],
                      "a": 0,
                      "x": "Suy đoán logic có căn cứ rõ ràng ở hiện tại về quá khứ: 'must have been' (hẳn là đã có mưa lớn ban đêm)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "'I will send you the itinerary tomorrow,' David said. -> David told me that he ___.",
                      "o": [
                            "would send me the itinerary the next day",
                            "will send me the itinerary tomorrow",
                            "sent me the itinerary the following day",
                            "would send the itinerary tomorrow"
                      ],
                      "a": 0,
                      "x": "Câu gián tiếp lùi thì và đổi trạng từ: 'will' → 'would', 'tomorrow' → 'the next day / the following day'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "After five years of dedicated service, Elena was granted a well-deserved ___.",
                      "o": [
                            "promotion",
                            "resignation",
                            "pension",
                            "demotion"
                      ],
                      "a": 0,
                      "x": "'promotion' là sự thăng tiến / thăng chức trong công việc."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "A cutting-edge research facility ___ built in the northern science park this year.",
                      "o": [
                            "is being",
                            "is",
                            "has",
                            "was being"
                      ],
                      "a": 0,
                      "x": "Thì Hiện tại tiếp diễn dạng bị động: 'is being + V3/ed'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Although the heavy storm,",
                            "the regional express train",
                            "arrived on schedule",
                            "without disruption"
                      ],
                      "a": 0,
                      "corr": "Despite / In spite of",
                      "x": "'Although' phải đi kèm một mệnh đề (S + V). Với cụm danh từ 'the heavy storm', phải dùng 'Despite' hoặc 'In spite of'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "She politely asked me",
                            "where did I purchase",
                            "that handmade woolen coat",
                            "last winter"
                      ],
                      "a": 1,
                      "corr": "where I had purchased",
                      "x": "Trong câu hỏi gián tiếp, trật tự từ là dạng trần thuật (S + V) và lùi thì: 'where I had purchased', không đảo 'did I purchase'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "If I was knowing",
                            "her personal email address,",
                            "I would invite her",
                            "to the keynote lecture"
                      ],
                      "a": 0,
                      "corr": "If I knew",
                      "x": "'know' là động từ trạng thái (stative verb), không dùng dạng tiếp diễn 'was knowing'. Điều kiện loại 2 dùng 'If I knew'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The research team",
                            "has been worked",
                            "on the clean energy project",
                            "for six months"
                      ],
                      "a": 1,
                      "corr": "has been working",
                      "x": "Chủ ngữ chủ động thực hiện hành động kéo dài: dùng Hiện tại hoàn thành tiếp diễn 'has been working', không dùng 'has been worked'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "They opened the botanical garden to the public in May.",
                      "key": "opened",
                      "q": "The botanical garden ___ to the public in May.",
                      "a": [
                            "was opened"
                      ],
                      "x": "Chuyển từ câu chủ động sang bị động Quá khứ đơn: 'was opened'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "I haven't visited my hometown for nearly two years.",
                      "key": "last",
                      "q": "The ___ my hometown was nearly two years ago.",
                      "a": [
                            "last time I visited"
                      ],
                      "x": "Cấu trúc chuyển đổi thì: 'haven't visited... for [time]' = 'The last time I visited... was [time] ago'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "'Do you plan to attend the conference?' Mark asked me.",
                      "key": "whether",
                      "q": "Mark asked me ___ to attend the conference.",
                      "a": [
                            "whether I planned",
                            "if I planned"
                      ],
                      "x": "Câu hỏi Yes/No chuyển gián tiếp dùng 'whether/if' + chủ ngữ + lùi thì: 'whether I planned'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "He failed the certification exam because he was too careless.",
                      "key": "more",
                      "q": "If he had been ___, he wouldn't have failed the certification exam.",
                      "a": [
                            "more careful"
                      ],
                      "x": "Câu điều kiện loại 3: trái ngược với 'too careless' trong quá khứ là 'had been more careful'."
                },
                {
                      "lv": "B1",
                      "t": "gaptext",
                      "text": "Renewable energy has emerged as a crucial [alternative|solution] to conventional fossil fuels. By harnessing wind and solar resources, nations can substantially [reduce|lower|cut] their carbon emissions. However, authorities must [invest|channel] sufficient capital into upgrading national power grids."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "The concept of remote work has transitioned from a temporary pandemic contingency to a permanent pillar of modern corporate culture. Recent labor surveys reveal that approximately 58% of knowledge workers now operate under a hybrid model, dividing their workweek between home offices and central headquarters. Advocates emphasize significant benefits: zero commuting time, flexible working hours, and reduced office real estate expenditures for employers. Conversely, critics express concerns regarding diminished impromptu collaboration, digital fatigue from endless video conferences, and blurred boundaries between professional duties and private life.",
                      "q": "According to recent surveys, what percentage of knowledge workers use a hybrid model?",
                      "o": [
                            "Approximately 58%",
                            "Over 75%",
                            "Roughly 40%",
                            "Less than 20%"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'approximately 58% of knowledge workers now operate under a hybrid model'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "The concept of remote work has transitioned from a temporary pandemic contingency to a permanent pillar of modern corporate culture. Recent labor surveys reveal that approximately 58% of knowledge workers now operate under a hybrid model, dividing their workweek between home offices and central headquarters. Advocates emphasize significant benefits: zero commuting time, flexible working hours, and reduced office real estate expenditures for employers. Conversely, critics express concerns regarding diminished impromptu collaboration, digital fatigue from endless video conferences, and blurred boundaries between professional duties and private life.",
                      "q": "Which of the following is cited as a financial benefit for companies?",
                      "o": [
                            "Lower real estate and office expenses",
                            "Increased government tax subsidies",
                            "Lower salaries paid to employees",
                            "Free corporate equipment"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'reduced office real estate expenditures for employers' (giảm chi phí bất động sản/văn phòng cho người sử dụng lao động)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "The concept of remote work has transitioned from a temporary pandemic contingency to a permanent pillar of modern corporate culture. Recent labor surveys reveal that approximately 58% of knowledge workers now operate under a hybrid model, dividing their workweek between home offices and central headquarters. Advocates emphasize significant benefits: zero commuting time, flexible working hours, and reduced office real estate expenditures for employers. Conversely, critics express concerns regarding diminished impromptu collaboration, digital fatigue from endless video conferences, and blurred boundaries between professional duties and private life.",
                      "q": "What negative consequence is specifically linked to video calls?",
                      "o": [
                            "Digital fatigue",
                            "High internet bills",
                            "Loss of data connection",
                            "Difficulty purchasing webcams"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'digital fatigue from endless video conferences' (mệt mỏi kỹ thuật số từ các cuộc họp video liên miên)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "The concept of remote work has transitioned from a temporary pandemic contingency to a permanent pillar of modern corporate culture. Recent labor surveys reveal that approximately 58% of knowledge workers now operate under a hybrid model, dividing their workweek between home offices and central headquarters. Advocates emphasize significant benefits: zero commuting time, flexible working hours, and reduced office real estate expenditures for employers. Conversely, critics express concerns regarding diminished impromptu collaboration, digital fatigue from endless video conferences, and blurred boundaries between professional duties and private life.",
                      "q": "What is the primary conclusion of the passage?",
                      "o": [
                            "Hybrid work offers distinct advantages but also poses real workplace challenges",
                            "Every business should immediately shut down its physical offices",
                            "Employees universally dislike working from home",
                            "Commuting to the office is the most productive part of the day"
                      ],
                      "a": 0,
                      "x": "Đoạn văn phân tích cả lợi ích (Advocates emphasize...) và hạn chế (Conversely, critics express concerns...)."
                },
                {
                      "lv": "B1",
                      "t": "gap",
                      "q": "You will not pass the entrance exam ___ you study consistently every week.",
                      "a": "unless",
                      "x": "'unless' = if not (trừ khi): 'Bạn sẽ không qua kỳ thi trừ khi bạn học đều đặn mỗi tuần'."
                }
          ]
    },
    {
          "id": "mock-b1-4",
          "level": "B1",
          "title": "B1 Intermediate Practice Test 4",
          "desc": "25 questions: Habits with Used To, Wish Clauses, Collocations, Tags & Cloze.",
          "timeLimit": 35,
          "questions": [
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "She lived in Tokyo for five years, so she ___ commuting by crowded metro.",
                      "o": [
                            "is used to",
                            "used to",
                            "use to",
                            "is used for"
                      ],
                      "a": 0,
                      "x": "'be used to + V-ing' diễn tả việc đã quen với điều gì đó trong cuộc sống."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "The office lights are switched off and the doors are locked. The staff ___ home.",
                      "o": [
                            "must have gone",
                            "can go",
                            "should have gone",
                            "might to go"
                      ],
                      "a": 0,
                      "x": "Suy đoán chắc chắn về một sự việc trong quá khứ dựa trên bằng chứng hiện tại: 'must have gone'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Please remember ___ the windows securely before leaving the apartment.",
                      "o": [
                            "to close",
                            "closing",
                            "close",
                            "closed"
                      ],
                      "a": 0,
                      "x": "'remember to V' = nhớ phải làm gì trong tương lai; 'remember V-ing' = nhớ là mình đã làm gì trong quá khứ."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "I live in a bustling, noisy downtown street. I wish I ___ in a quiet suburban cottage.",
                      "o": [
                            "lived",
                            "live",
                            "would live",
                            "have lived"
                      ],
                      "a": 0,
                      "x": "'wish' diễn tả điều ước trái ngược với thực tế ở hiện tại chia thì Quá khứ đơn: 'lived'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Before launching the marketing campaign, the team ___ extensive consumer research.",
                      "o": [
                            "carried out",
                            "made up",
                            "gave in",
                            "took over"
                      ],
                      "a": 0,
                      "x": "'carry out research' (hoặc do/conduct research) là cụm động từ chuẩn chỉ việc tiến hành nghiên cứu."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "We are all enthusiastically looking forward to ___ the international science expo.",
                      "o": [
                            "attending",
                            "attend",
                            "attended",
                            "have attended"
                      ],
                      "a": 0,
                      "x": "Cấu trúc 'look forward to + V-ing' (trông mong, háo hức làm gì)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "The keynote presentation was ___ inspiring that the audience stood up to applaud.",
                      "o": [
                            "so",
                            "such",
                            "too",
                            "very"
                      ],
                      "a": 0,
                      "x": "Cấu trúc kết quả: 'so + adjective + that' (truyền cảm hứng đến mức mà...)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Nobody remembered to turn off the air conditioning, ___?",
                      "o": [
                            "did they",
                            "didn't they",
                            "did he",
                            "didn't he"
                      ],
                      "a": 0,
                      "x": "'Nobody' mang nghĩa phủ định và quy chiếu bằng đại từ 'they' → câu hỏi đuôi ở thể khẳng định: 'did they?'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "Adopting two-factor authentication drastically elevates your online data ___.",
                      "o": [
                            "security",
                            "installation",
                            "subscription",
                            "storage"
                      ],
                      "a": 0,
                      "x": "'data security' (an toàn / bảo mật dữ liệu)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "q": "He set two morning alarms ___ miss his university exam.",
                      "o": [
                            "so as not to",
                            "in order to not",
                            "so that not",
                            "not to so as"
                      ],
                      "a": 0,
                      "x": "Cấu trúc chỉ mục đích phủ định: 'so as not to + V nguyên thể' (để không bị lỡ)."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "I really look forward",
                            "to meet you again",
                            "at the upcoming symposium",
                            "next Thursday"
                      ],
                      "a": 1,
                      "corr": "to meeting you",
                      "x": "Sau 'look forward to' phải dùng danh động từ (V-ing): 'to meeting you'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The CEO is so occupied",
                            "that he has scarcely",
                            "no spare time",
                            "for personal hobbies"
                      ],
                      "a": 2,
                      "corr": "any spare time",
                      "x": "'scarcely' đã mang nghĩa phủ định (hầu như không), không được dùng 'no' tiếp theo mà dùng 'any spare time'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The cabin crew instructed",
                            "passengers don't unbuckle",
                            "their seatbelts during",
                            "severe air turbulence"
                      ],
                      "a": 1,
                      "corr": "not to unbuckle",
                      "x": "Cấu trúc gián tiếp câu mệnh lệnh: 'instruct sb not to V', không dùng 'don't unbuckle'."
                },
                {
                      "lv": "B1",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Neither the lead architect",
                            "nor his junior associates",
                            "was content with",
                            "the preliminary blueprints"
                      ],
                      "a": 2,
                      "corr": "were content with",
                      "x": "Cấu trúc 'Neither S1 nor S2 + V': động từ hòa hợp theo chủ ngữ gần nhất ('his junior associates' số nhiều → 'were content with')."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "The weather was so cold that the mountain pass was closed.",
                      "key": "such",
                      "q": "It was ___ that the mountain pass was closed.",
                      "a": [
                            "such cold weather"
                      ],
                      "x": "'so cold' chuyển thành 'such cold weather' (weather là danh từ không đếm được nên không dùng mạo từ 'a')."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "It took the volunteers four days to clean up the riverbank.",
                      "key": "spent",
                      "q": "The volunteers ___ the riverbank.",
                      "a": [
                            "spent four days cleaning up",
                            "spent 4 days cleaning up"
                      ],
                      "x": "Cấu trúc: 'It took sb [time] to V' = 'sb spent [time] V-ing'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "You ought to schedule a medical check-up immediately.",
                      "key": "time",
                      "q": "It is ___ a medical check-up.",
                      "a": [
                            "high time you scheduled",
                            "time you scheduled",
                            "about time you scheduled"
                      ],
                      "x": "Cấu trúc: 'It is high time + S + V(past)'."
                },
                {
                      "lv": "B1",
                      "t": "rewrite",
                      "orig": "I regret not submitting my scholarship application on time.",
                      "key": "wish",
                      "q": "I ___ my scholarship application on time.",
                      "a": [
                            "wish I had submitted",
                            "wish that I had submitted"
                      ],
                      "x": "Diễn tả sự nuối tiếc trong quá khứ: 'wish + S + had + V3/ed'."
                },
                {
                      "lv": "B1",
                      "t": "gaptext",
                      "text": "Maintaining consistent sleep patterns is foundational to cognitive health. Research demonstrates that maintaining a [regular|consistent] bedtime schedule regulates natural melatonin secretion. Furthermore, limiting screen exposure before bed can markedly [enhance|improve|boost] deep sleep cycles."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "Microplastics—synthetic polymer particles measuring less than five millimeters in diameter—have infiltrated virtually every aquatic ecosystem on Earth. Originating from fragmented consumer plastics, synthetic textiles, and industrial abrasives, these ubiquitous particles pose grave ecological risks. Marine organisms, ranging from microscopic zooplankton to colossal baleen whales, ingest microplastics, which can leach harmful plasticizers and endocrine-disrupting chemicals into their tissues. Recent marine biology studies indicate that microplastics also absorb heavy metals from seawater, amplifying their toxic potential as they ascend the marine food chain toward human consumers.",
                      "q": "What defines a microplastic according to the passage?",
                      "o": [
                            "A plastic particle under 5 millimeters across",
                            "A chemical additive used only in textiles",
                            "A biodegradable organic polymer",
                            "A heavy metal found in deep sea trenches"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'measuring less than five millimeters in diameter' (đường kính dưới 5mm)."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "Microplastics—synthetic polymer particles measuring less than five millimeters in diameter—have infiltrated virtually every aquatic ecosystem on Earth. Originating from fragmented consumer plastics, synthetic textiles, and industrial abrasives, these ubiquitous particles pose grave ecological risks. Marine organisms, ranging from microscopic zooplankton to colossal baleen whales, ingest microplastics, which can leach harmful plasticizers and endocrine-disrupting chemicals into their tissues. Recent marine biology studies indicate that microplastics also absorb heavy metals from seawater, amplifying their toxic potential as they ascend the marine food chain toward human consumers.",
                      "q": "Which of the following is NOT mentioned as a source of microplastics?",
                      "o": [
                            "Volcanic eruptions",
                            "Synthetic clothing textiles",
                            "Fragmented consumer plastics",
                            "Industrial abrasives"
                      ],
                      "a": 0,
                      "x": "Bài đọc nêu rõ: 'fragmented consumer plastics, synthetic textiles, and industrial abrasives'. Núi lửa không được nhắc đến."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "Microplastics—synthetic polymer particles measuring less than five millimeters in diameter—have infiltrated virtually every aquatic ecosystem on Earth. Originating from fragmented consumer plastics, synthetic textiles, and industrial abrasives, these ubiquitous particles pose grave ecological risks. Marine organisms, ranging from microscopic zooplankton to colossal baleen whales, ingest microplastics, which can leach harmful plasticizers and endocrine-disrupting chemicals into their tissues. Recent marine biology studies indicate that microplastics also absorb heavy metals from seawater, amplifying their toxic potential as they ascend the marine food chain toward human consumers.",
                      "q": "What happens as microplastics move up the food chain?",
                      "o": [
                            "Their toxic potential increases toward human consumers",
                            "They dissolve naturally in warm ocean currents",
                            "They become beneficial nutrients for predators",
                            "Marine animals develop immunity to them"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'amplifying their toxic potential as they ascend the marine food chain toward human consumers'."
                },
                {
                      "lv": "B1",
                      "t": "mc",
                      "ctx": "Microplastics—synthetic polymer particles measuring less than five millimeters in diameter—have infiltrated virtually every aquatic ecosystem on Earth. Originating from fragmented consumer plastics, synthetic textiles, and industrial abrasives, these ubiquitous particles pose grave ecological risks. Marine organisms, ranging from microscopic zooplankton to colossal baleen whales, ingest microplastics, which can leach harmful plasticizers and endocrine-disrupting chemicals into their tissues. Recent marine biology studies indicate that microplastics also absorb heavy metals from seawater, amplifying their toxic potential as they ascend the marine food chain toward human consumers.",
                      "q": "What is the tone of the author regarding microplastics?",
                      "o": [
                            "Concerned and analytical",
                            "Indifferent and humorous",
                            "Dismissive and sarcastic",
                            "Optimistic and casual"
                      ],
                      "a": 0,
                      "x": "Tác giả phân tích khoa học và cảnh báo rủi ro sinh thái nghiêm trọng ('grave ecological risks')."
                },
                {
                      "lv": "B1",
                      "t": "gap",
                      "q": "She succeeded in completing the marathon in ___ of her recent ankle sprain.",
                      "a": "spite",
                      "x": "Cụm giới từ chỉ sự nhượng bộ: 'in spite of' = despite (mặc dù bị bong gân cổ chân gần đây)."
                }
          ]
    }
  ],
  B2: [
    {
      id: "mock-b2-1",
      level: "B2",
      title: "B2 Advanced Mock Exam 1",
      desc: "25 questions: Inversion, Advanced Conditionals, Passive, Transformations & Academic Reading.",
      timeLimit: 40,
      questions: [
        {
          lv: "B2",
          t: "mc",
          q: "Seldom ___ such remarkable dedication in someone so young.",
          o: ["we see", "have we seen", "we have seen", "did we saw"],
          a: 1,
          x: "Đảo ngữ với trạng từ phủ định 'Seldom' đứng đầu câu: Seldom + trợ động từ + S + V: 'Seldom have we seen'."
        },
        {
          lv: "B2",
          t: "mc",
          q: "Had the weather forecast been more accurate, we ___ the mountain hike.",
          o: ["wouldn't start", "wouldn't have started", "didn't start", "won't have started"],
          a: 1,
          x: "Đảo ngữ câu điều kiện loại 3 (Had + S + V3/ed) → mệnh đề chính dùng 'wouldn't have started' (would have + V3)."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The company's new flagship device is rumoured ___ in early November.",
          o: ["to release", "to be released", "releasing", "to have releasing"],
          a: 1,
          x: "Cấu trúc bị động khách quan: S + is rumoured + to be + V3/ed ('to be released': được phát hành)."
        },
        {
          lv: "B2",
          t: "mc",
          q: "If I hadn't stayed up so late binge-watching shows, I ___ exhausted right now.",
          o: ["wouldn't be", "wouldn't have been", "weren't", "am not"],
          a: 0,
          x: "Câu điều kiện hỗn hợp (Mixed conditional): Giả định quá khứ ('hadn't stayed up') ảnh hưởng kết quả ở hiện tại ('right now') → dùng 'wouldn't be'."
        },
        {
          lv: "B2",
          t: "mc",
          q: "Under no circumstances ___ confidential client data be shared with third parties.",
          o: ["should", "you should", "must you", "ought"],
          a: 0,
          x: "Đảo ngữ với cụm từ phủ định 'Under no circumstances' (Trong bất kỳ hoàn cảnh nào cũng không): Under no circumstances + should + S + be + V3."
        },
        {
          lv: "B2",
          t: "mc",
          q: "Her extensive experience in marketing gives her an edge ___ other applicants.",
          o: ["over", "above", "against", "beyond"],
          a: 0,
          x: "Thành ngữ 'have/give an edge over someone' nghĩa là có lợi thế vượt trội hơn ai đó."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The suspect is believed ___ the country under a forged passport last night.",
          o: ["to leave", "to have left", "leaving", "having left"],
          a: 1,
          x: "Hành động rời khỏi đất nước đã xảy ra trước ('last night') so với thời điểm tin rằng ('is believed') → dùng Perfect Infinitive: 'to have left'."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The board rejected the proposal on the ___ that it carried excessive financial risk.",
          o: ["grounds", "reasons", "causes", "motive"],
          a: 0,
          x: "Cụm từ cố định: 'on the grounds that...' mang nghĩa là với lý do rằng, dựa trên căn cứ rằng."
        },
        // Error Identification
        {
          lv: "B2",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["Hardly had the meeting started", "than the fire alarm", "began ringing", "throughout the building"],
          a: 1,
          corr: "when the fire alarm",
          x: "Cấu trúc đảo ngữ: 'Hardly had + S + V3... WHEN' (chứ không dùng 'than'). 'No sooner... THAN'."
        },
        {
          lv: "B2",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["I would rather", "you don't disclose", "the proprietary source code", "to external contractors"],
          a: 1,
          corr: "you didn't disclose",
          x: "Cấu trúc: 'would rather + S + past simple' khi muốn ai đó làm/không làm gì ở hiện tại hoặc tương lai: 'you didn't disclose'."
        },
        {
          lv: "B2",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["The committee insisted", "that the director", "resigns from his post", "with immediate effect"],
          a: 2,
          corr: "resign (hoặc should resign)",
          x: "Cấu trúc bàng thái cách (Subjunctive mood): insist that + S + V nguyên thể không chia ('that the director resign')."
        },
        {
          lv: "B2",
          t: "error",
          q: "Identify the underlined error in the sentence:",
          parts: ["She was so overwhelmed", "with work that she", "could not barely find", "time to eat"],
          a: 2,
          corr: "could barely find",
          x: "'barely' đã mang nghĩa phủ định (hầu như không), không dùng cùng với 'not' (lỗi phủ định kép: 'could not barely')."
        },
        // Sentence Transformation with Keywords
        {
          lv: "B2",
          t: "rewrite",
          orig: "It was only when I checked my bank account that I realized I had been overcharged.",
          key: "DID",
          q: "Only when I checked my bank account ___ I had been overcharged.",
          a: "did I realize|did I realise",
          x: "Đảo ngữ với 'Only when': Only when + S + V, DID + S + V nguyên thể ('did I realize')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "I regret not having studied harder for the bar exam.",
          key: "WISH",
          q: "I ___ harder for the bar exam.",
          a: "wish I had studied|wish that I had studied",
          x: "Hối tiếc về quá khứ dùng 'wish + past perfect': 'I wish I had studied harder'."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "Experts predict that the global economy will rebound next quarter.",
          key: "EXPECTED",
          q: "The global economy ___ next quarter.",
          a: "is expected to rebound",
          x: "Chuyển sang bị động khách quan: S + is expected + to-V ('is expected to rebound')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "As soon as the plane touched down, passengers stood up to retrieve their luggage.",
          key: "SOONER",
          q: "No ___ the plane touched down than passengers stood up.",
          a: "sooner had",
          x: "Cấu trúc đảo ngữ: 'No sooner had + S + V3 than...'."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "Without your timely assistance, I could never have completed the audit.",
          key: "FOR",
          q: "Had it ___ your timely assistance, I could never have completed the audit.",
          a: "not been for",
          x: "Đảo ngữ điều kiện loại 3 với cụm cố định: 'Had it not been for + Noun phrase' (Nếu không nhờ có...)."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "I'm sure he didn't commit the crime because he was abroad at the time.",
          key: "HAVE",
          q: "He ___ the crime because he was abroad at the time.",
          a: "can't have committed|cannot have committed",
          x: "Suy đoán phủ định chắc chắn trong quá khứ: can't + have + V3 ('can't have committed')."
        },
        // Cloze Gaps
        {
          lv: "B2",
          t: "gap",
          q: "We must take into ___ all potential consequences before finalizing the merger.",
          a: "account|consideration",
          x: "Thành ngữ: 'take into account' hoặc 'take into consideration' nghĩa là cân nhắc, tính đến điều gì."
        },
        {
          lv: "B2",
          t: "gap",
          q: "His innovative methodology paved the ___ for groundbreaking medical advancements.",
          a: "way",
          x: "Thành ngữ: 'pave the way for' nghĩa là mở đường, đặt nền móng cho cái gì."
        },
        {
          lv: "B2",
          t: "gap",
          q: "The new regulations will come ___ effect starting on the first of January.",
          a: "into",
          x: "Cụm cố định: 'come into effect' nghĩa là bắt đầu có hiệu lực thi hành."
        },
        // Academic Reading
        {
          lv: "B2",
          t: "mc",
          ctx: "Artificial intelligence in clinical diagnosis has made staggering leaps in diagnostic precision, frequently outperforming experienced physicians in detecting minute radiological anomalies. Nonetheless, bioethicists caution that algorithmic opacity—often dubbed the 'black-box phenomenon'—poses formidable dilemmas regarding accountability when automated recommendations precipitate adverse patient outcomes.",
          q: "What is the primary concern raised by bioethicists regarding AI diagnosis?",
          o: [
            "AI systems are slower than human doctors at processing images.",
            "The inability to decipher how algorithms reach conclusions creates liability challenges when errors occur.",
            "Physicians are completely unwilling to collaborate with technological systems."
          ],
          a: 1,
          x: "Bài đọc nêu rõ: 'algorithmic opacity—often dubbed the 'black-box phenomenon'—poses formidable dilemmas regarding accountability when automated recommendations precipitate adverse patient outcomes' (sự thiếu minh bạch của thuật toán gây khó khăn cho việc quy trách nhiệm khi xảy ra sai sót)."
        },
        {
          lv: "B2",
          t: "tfng",
          ctx: "Behavioral economists argue that consumers' perception of value is largely influenced by anchoring effects: the cognitive bias whereby individuals rely too heavily on the initial piece of information offered when making financial decisions.",
          q: "Anchoring effects have a negligible impact on purchasing choices in real-world retail settings.",
          a: "F",
          x: "False. Bài đọc khẳng định 'perception of value is largely influenced by anchoring effects' (nhận thức giá trị chịu ảnh hưởng lớn từ hiệu ứng mỏ neo)."
        },
        {
          lv: "B2",
          t: "tfng",
          ctx: "Microplastics have now been detected in atmospheric samples collected from remote polar ice sheets, demonstrating that airborne transport mechanisms distribute synthetic particulate matter far beyond its terrestrial point of origin.",
          q: "Microplastics are causing immediate genetic mutations in polar bear populations.",
          a: "NG",
          x: "Not Given. Bài đọc chỉ nói về việc vi nhựa phân tán qua không khí đến các tảng băng vùng cực, không hề đề cập đến đột biến gen ở gấu bắc cực."
        },
        {
          lv: "B2",
          t: "mc",
          ctx: "The premise that creative genius is invariably tethered to eccentricity has long permeated popular lore. Yet contemporary psychological research underscores that divergent thinking flourishes most reliably within environments characterized by structured psychological safety rather than erratic turbulence.",
          q: "According to the passage, what environment best fosters creative thought?",
          o: [
            "Unpredictable and chaotic working conditions",
            "Environments where people feel psychologically safe and supported",
            "Strict adherence to traditional conventions without deviation"
          ],
          a: 1,
          x: "Bài đọc: 'divergent thinking flourishes most reliably within environments characterized by structured psychological safety' (tư duy sáng tạo phát triển mạnh mẽ nhất trong môi trường có sự an toàn tâm lý)."
        }
      ]
    },
    {
      id: "mock-b2-2",
      level: "B2",
      title: "B2 Advanced Mock Exam 2",
      desc: "25 questions: Collocations, Advanced Modals, Inversions, Discourse Markers & Sentence Transformations.",
      timeLimit: 40,
      questions: [
        {
          lv: "B2",
          t: "mc",
          q: "Little ___ that his brief comment would trigger a national controversy.",
          o: ["did he suspect", "he suspected", "had he suspect", "did he suspected"],
          a: 0,
          x: "Đảo ngữ với trạng từ phủ định 'Little' (hầu như không hề): Little + did + S + V nguyên mẫu ('Little did he suspect')."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The candidate's evasive replies only served to ___ public suspicion.",
          o: ["fuel", "burn", "cook", "boil"],
          a: 0,
          x: "Cụm từ cố định: 'fuel suspicion / fuel rumours' nghĩa là thổi bùng thêm mối nghi ngờ."
        },
        {
          lv: "B2",
          t: "mc",
          q: "I would appreciate ___ if you could keep this matter strictly confidential.",
          o: ["that", "it", "this", "so"],
          a: 1,
          x: "Cấu trúc cố định trang trọng: 'I would appreciate it if you could...' (dùng tân ngữ giả 'it')."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The project had to be abandoned for ___ of adequate financial backing.",
          o: ["lack", "shortage", "need", "absence"],
          a: 0,
          x: "Cụm từ: 'for lack of something' nghĩa là do thiếu thốn cái gì."
        },
        {
          lv: "B2",
          t: "mc",
          q: "Not until the late 1990s ___ accessible to the general public.",
          o: ["did the internet become", "the internet became", "had the internet become", "became the internet"],
          a: 0,
          x: "Đảo ngữ với 'Not until': Not until + thời gian + trợ động từ + S + V ('did the internet become')."
        },
        {
          lv: "B2",
          t: "mc",
          q: "The CEO was ___ to have embezzled millions of dollars from the retirement pension fund.",
          o: ["alleged", "accused", "blamed", "criticised"],
          a: 0,
          x: "Cấu trúc bị động: S + is/was alleged + to have + V3 ('was alleged to have embezzled': bị cáo buộc là đã biển thủ)."
        },
        {
          lv: "B2",
          t: "mc",
          q: "I would rather you ___ making sarcastic remarks during client presentations.",
          o: ["refrain from", "refrained from", "had refrained", "will refrain"],
          a: 1,
          x: "Cấu trúc: 'would rather you + past simple' ('refrained from') để thể hiện mong muốn ai đó dừng hành động ở hiện tại."
        },
        {
          lv: "B2",
          t: "mc",
          q: "Her persuasive argument tipped the ___ in favour of adopting the new policy.",
          o: ["scales", "balances", "weights", "measures"],
          a: 0,
          x: "Thành ngữ: 'tip the scales in favour of' nghĩa là làm nghiêng cán cân theo hướng có lợi cho điều gì."
        },
        // Error Identification
        {
          lv: "B2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["Had I known", "about the heavy traffic,", "I would take", "the subway instead"],
          a: 2,
          corr: "would have taken",
          x: "Đảo ngữ câu điều kiện loại 3 ('Had I known') diễn tả quá khứ thì mệnh đề chính phải là: 'would have taken', không dùng 'would take'."
        },
        {
          lv: "B2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["She insisted on", "that we should leave", "our luggage at", "the hotel reception"],
          a: 0,
          corr: "insisted that (bỏ 'on')",
          x: "Động từ 'insist' khi đi kèm mệnh đề that thì không có giới từ on: 'insisted that we should leave'."
        },
        {
          lv: "B2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["Not only", "she speaks three languages", "fluently, but she also", "plays the violin"],
          a: 1,
          corr: "does she speak",
          x: "Đảo ngữ với 'Not only' đứng đầu câu: Not only + does + she + speak ('Not only does she speak...')."
        },
        {
          lv: "B2",
          t: "error",
          q: "Find the error in the sentence:",
          parts: ["The doctor recommended", "that he takes", "a two-week holiday", "to recover completely"],
          a: 1,
          corr: "take (hoặc should take)",
          x: "Bàng thái cách: recommend that + S + V nguyên thể: 'that he take a two-week holiday'."
        },
        // Sentence Transformation
        {
          lv: "B2",
          t: "rewrite",
          orig: "It is widely believed that the ancient temple was constructed during the Ly dynasty.",
          key: "HAVE",
          q: "The ancient temple is believed ___ constructed during the Ly dynasty.",
          a: "to have been",
          x: "Cấu trúc bị động hoàn thành: is believed + to have been + V3 ('to have been constructed')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "He didn't realize how late it was until all the streetlights went off.",
          key: "WAS",
          q: "It ___ all the streetlights went off that he realized how late it was.",
          a: "was not until|wasn't until",
          x: "Cấu trúc câu chẻ nhấn mạnh: 'It was not until... that...'."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "She succeeded in business solely because of her relentless persistence.",
          key: "DOWN",
          q: "Her success in business was largely ___ her relentless persistence.",
          a: "down to|put down to",
          x: "Thành ngữ: 'be down to' nghĩa là do nhờ vào cái gì ('was largely down to her relentless persistence')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "If you should encounter any technical difficulties, please notify the help desk.",
          key: "SHOULD",
          q: "___ any technical difficulties, please notify the help desk.",
          a: "Should you encounter",
          x: "Đảo ngữ câu điều kiện loại 1: Should + S + V nguyên thể ('Should you encounter')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "I really regret having spoken so harshly to my supervisor yesterday.",
          key: "WISH",
          q: "I ___ so harshly to my supervisor yesterday.",
          a: "wish I hadn't spoken|wish that I had not spoken|wish I had not spoken",
          x: "Ước hối tiếc về quá khứ: wish + had not + V3 ('wish I hadn't spoken')."
        },
        {
          lv: "B2",
          t: "rewrite",
          orig: "The torrential rain prevented us from reaching the summit.",
          key: "POSSIBLE",
          q: "The torrential rain made ___ to reach the summit.",
          a: "it impossible for us|it impossible",
          x: "Cấu trúc: make it impossible (for sb) to-V ('made it impossible for us to reach the summit')."
        },
        // Gap-fill
        {
          lv: "B2",
          t: "gap",
          q: "He decided to pull a few ___ to help his niece secure the internship.",
          a: "strings",
          x: "Thành ngữ: 'pull strings' nghĩa là dùng các mối quan hệ quen biết, ô dù để giúp đỡ ai."
        },
        {
          lv: "B2",
          t: "gap",
          q: "The company was on the ___ of bankruptcy before the venture capital bailout.",
          a: "brink|verge",
          x: "Thành ngữ: 'on the brink of' hoặc 'on the verge of' nghĩa là trên bờ vực của cái gì (phá sản)."
        },
        {
          lv: "B2",
          t: "gap",
          q: "Her groundbreaking research shed new ___ on deep-sea bioluminescence.",
          a: "light",
          x: "Thành ngữ: 'shed light on' nghĩa là làm sáng tỏ, làm rõ một vấn đề."
        },
        // Reading Comprehension
        {
          lv: "B2",
          t: "mc",
          ctx: "The pervasive adoption of algorithmic curation across streaming platforms has engendered what sociologists term 'filter bubbles': cultural silos wherein users are progressively insulated from unconventional viewpoints or divergent artistic styles. While maximizing platform engagement metrics, this algorithmic homogenization risks circumscribing intellectual curiosity and stunting cultural serendipity.",
          q: "According to the passage, what is a detrimental consequence of algorithmic curation?",
          o: [
            "It lowers the subscription prices of streaming platforms.",
            "It narrows users' cultural exposure and restricts intellectual discovery.",
            "It encourages users to cancel their memberships."
          ],
          a: 1,
          x: "Bài đọc nêu rõ: 'this algorithmic homogenization risks circumscribing intellectual curiosity and stunting cultural serendipity' (hạn chế sự tò mò tri thức và làm giảm cơ hội khám phá văn hoá tình cờ)."
        },
        {
          lv: "B2",
          t: "tfng",
          ctx: "Neuroscientists utilizing fMRI technology have mapped elevated neural activity within the anterior insula during empathetic responses to another person's distress. Notably, this neural activation correlates strongly with self-reported dispositional empathy.",
          q: "Every individual experiences identical levels of neural activation in the anterior insula when observing distress.",
          a: "F",
          x: "False. Đoạn văn chỉ ra 'correlates strongly with self-reported dispositional empathy' (tương quan chặt chẽ với mức độ thấu cảm bẩm sinh của từng cá nhân), nghĩa là mỗi người có mức độ kích hoạt khác nhau."
        },
        {
          lv: "B2",
          t: "tfng",
          ctx: "Prolonged exposure to blue spectrum light emitted by digital screens suppresses endogenous melatonin synthesis in the pineal gland, thereby disrupting the natural circadian phase.",
          q: "Wearing blue-light-blocking glasses eliminates 100% of all sleep disorders.",
          a: "NG",
          x: "Not Given. Đoạn văn chỉ phân tích tác động của ánh sáng xanh tới melatonin, hoàn toàn không nói kính lọc ánh sáng xanh có thể loại bỏ 100% mọi rối loạn giấc ngủ hay không."
        },
        {
          lv: "B2",
          t: "mc",
          ctx: "The urban planning philosophy known as the '15-minute city' advocates designing metropolitan districts where essential amenities—employment hubs, grocery stores, healthcare clinics, and recreational parks—are accessible within a quarter-hour walk or bicycle ride from any residence.",
          q: "What is the core objective of the '15-minute city' model?",
          o: [
            "To build highways that enable cars to travel across the city in 15 minutes",
            "To ensure daily necessities and services are within short walking or cycling distance",
            "To require all employees to work from home indefinitely"
          ],
          a: 1,
          x: "Bài đọc: 'essential amenities... are accessible within a quarter-hour walk or bicycle ride from any residence' (mọi dịch vụ thiết yếu đều nằm trong khoảng cách 15 phút đi bộ hoặc xe đạp)."
        }
      ]
    }
,
    {
          "id": "mock-b2-3",
          "level": "B2",
          "title": "B2 Advanced Practice Test 3",
          "desc": "25 questions: Negative Inversion, Mixed Conditionals, Cleft Sentences, Transformations & Academic Reading.",
          "timeLimit": 45,
          "questions": [
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "Rarely ___ such unprecedented technological disruption across global logistics networks.",
                      "o": [
                            "have we witnessed",
                            "we have witnessed",
                            "did we witnessed",
                            "we witnessed"
                      ],
                      "a": 0,
                      "x": "Đảo ngữ với phó từ phủ định 'Rarely' đứng đầu câu: 'Rarely + auxiliary + S + V': 'Rarely have we witnessed'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "If she had accepted that research fellowship in Zurich last year, she ___ leading this clinical trial now.",
                      "o": [
                            "would be",
                            "would have been",
                            "will be",
                            "had been"
                      ],
                      "a": 0,
                      "x": "Điều kiện hỗn hợp: Giả định quá khứ ('had accepted last year') dẫn tới kết quả ở hiện tại ('now') → 'would + V nguyên thể': 'would be'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "___ the historical archives for three months, the curator discovered an uncatalogued manuscript.",
                      "o": [
                            "Having examined",
                            "Examined",
                            "Being examined",
                            "Examine"
                      ],
                      "a": 0,
                      "x": "Phân từ hoàn thành 'Having examined' nhấn mạnh hành động nghiên cứu đã hoàn tất trước khi phát hiện bản thảo."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "What intrigued the behavioral economists most ___ the sudden divergence in consumer spending patterns.",
                      "o": [
                            "was",
                            "were",
                            "are",
                            "have been"
                      ],
                      "a": 0,
                      "x": "Mệnh đề danh ngữ bắt đầu bằng 'What' làm chủ ngữ của câu chẻ (cleft sentence) chia to be số ít: 'was'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "The institutional review board recommended that the controversial experiment ___ immediately suspended.",
                      "o": [
                            "be",
                            "is",
                            "was",
                            "has been"
                      ],
                      "a": 0,
                      "x": "Thức giả định (subjunctive mood) sau động từ đề xuất 'recommended that + S + (should) be + V3/ed'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "The research methodology failed to draw a clear ___ between statistical correlation and empirical causation.",
                      "o": [
                            "distinction",
                            "difference",
                            "separation",
                            "contrast"
                      ],
                      "a": 0,
                      "x": "Collocation học thuật chuẩn: 'draw a distinction between A and B' (phân biệt rành mạch giữa A và B)."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "___ the substantial empirical data submitted by the team, the regulatory committee remained doubtful.",
                      "o": [
                            "Notwithstanding",
                            "Inasmuch as",
                            "Whereas",
                            "Albeit"
                      ],
                      "a": 0,
                      "x": "'Notwithstanding + noun phrase' = Despite (mặc dù có khối lượng dữ liệu thực nghiệm đáng kể)."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "After months of protracted debates, the dispute essentially ___ to disagreements over intellectual property rights.",
                      "o": [
                            "boiled down",
                            "glossed over",
                            "ironed out",
                            "panned out"
                      ],
                      "a": 0,
                      "x": "'boil down to sth' = quy về, chung quy lại là do nguyên nhân cốt lõi gì."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "Sociologists argue that algorithmic curation has rendered echo chambers virtually ___ in modern discourse.",
                      "o": [
                            "ubiquitous",
                            "ephemeral",
                            "precarious",
                            "meticulous"
                      ],
                      "a": 0,
                      "x": "'ubiquitous' = có mặt ở khắp mọi nơi, phổ biến rộng khắp."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "No sooner had the keynote speaker commenced her lecture ___ an unexpected power surge triggered the alarm.",
                      "o": [
                            "than",
                            "when",
                            "that",
                            "then"
                      ],
                      "a": 0,
                      "x": "Cấu trúc đảo ngữ: 'No sooner had + S + V3/ed + than + S + V(past)'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Seldom we have observed",
                            "such a profound convergence",
                            "between artificial intelligence",
                            "and structural genomics"
                      ],
                      "a": 0,
                      "corr": "Seldom have we observed",
                      "x": "Đảo ngữ với 'Seldom' đứng đầu câu: phải đảo trợ động từ 'have' lên trước chủ ngữ: 'Seldom have we observed'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Had the financial audit being conducted",
                            "with greater rigor last quarter,",
                            "the fiscal discrepancy",
                            "would have been resolved"
                      ],
                      "a": 0,
                      "corr": "been conducted",
                      "x": "Đảo ngữ câu điều kiện loại 3 thể bị động: 'Had + S + been + V3/ed', không dùng 'being conducted'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The dean formally requested that",
                            "each department chair submits",
                            "the strategic roadmap",
                            "before the plenary session"
                      ],
                      "a": 1,
                      "corr": "submit",
                      "x": "Thức giả định (subjunctive) sau 'requested that + S + V(bare inf)': 'submit', không chia 'submits'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Much to our relief,",
                            "despite of the contentious debates,",
                            "the diplomatic envoy secured",
                            "a bilateral agreement"
                      ],
                      "a": 1,
                      "corr": "despite the contentious debates",
                      "x": "'despite' đi trực tiếp với danh từ/cụm danh từ, không có giới từ 'of' ('in spite of' mới dùng 'of')."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "As soon as the treaty was ratified, border checkpoints relaxed their protocols.",
                      "key": "sooner",
                      "q": "No ___ than border checkpoints relaxed their protocols.",
                      "a": [
                            "sooner had the treaty been ratified"
                      ],
                      "x": "'No sooner had + S + V3/ed + than...'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "If you should encounter any technical anomalies during deployment, notify the administrator.",
                      "key": "should",
                      "q": "___ any technical anomalies during deployment, notify the administrator.",
                      "a": [
                            "Should you encounter"
                      ],
                      "x": "Đảo ngữ câu điều kiện loại 1 trang trọng: 'Should + S + V(inf)' thay cho 'If + S + should + V'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "Archaeologists believe that the stone monument was erected during the Bronze Age.",
                      "key": "believed",
                      "q": "The stone monument is ___ during the Bronze Age.",
                      "a": [
                            "believed to have been erected",
                            "believed to have been built"
                      ],
                      "x": "Thể bị động với động từ chỉ ý kiến tường thuật trong quá khứ: 'is believed to have been + V3/ed'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "The spacecraft would have been lost without the ground control team's rapid calculations.",
                      "key": "had",
                      "q": "If it ___ the ground control team's rapid calculations, the spacecraft would have been lost.",
                      "a": [
                            "had not been for",
                            "hadn't been for"
                      ],
                      "x": "Cấu trúc câu điều kiện loại 3: 'If it had not been for + N' = 'Without + N'."
                },
                {
                      "lv": "B2",
                      "t": "gaptext",
                      "text": "Cognitive load theory posits that working memory has a strictly finite processing [capacity|limitation]. Educational instructional designs must therefore minimize extraneous load to [facilitate|streamline] schema acquisition and optimize long-term conceptual [retention|mastery]."
                },
                {
                      "lv": "B2",
                      "t": "tfng",
                      "ctx": "Biophilic architectural design systematically incorporates natural light, living vegetation, natural ventilation, and organic materials into urban built environments. Empirical workplace studies demonstrate that biophilic interventions correlate with a 15% reduction in self-reported absenteeism and measurable drops in physiological biomarkers of stress, such as salivary cortisol levels.",
                      "q": "Biophilic architectural design relies exclusively on artificial air-conditioning systems to purify workplace air.",
                      "a": "F",
                      "x": "False. Đoạn văn nêu rõ biophilic design tích hợp thông gió tự nhiên ('natural ventilation'), hoàn toàn trái ngược với việc chỉ dùng máy lạnh nhân tạo."
                },
                {
                      "lv": "B2",
                      "t": "tfng",
                      "ctx": "Biophilic architectural design systematically incorporates natural light, living vegetation, natural ventilation, and organic materials into urban built environments. Empirical workplace studies demonstrate that biophilic interventions correlate with a 15% reduction in self-reported absenteeism and measurable drops in physiological biomarkers of stress, such as salivary cortisol levels.",
                      "q": "Every commercial building constructed in 2024 will be legally mandated to implement biophilic green walls.",
                      "a": "NG",
                      "x": "Not Given. Đoạn văn chỉ trình bày lợi ích sinh lý học của kiến trúc biophilic, không hề đề cập đến quy định pháp luật bắt buộc hay không."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "ctx": "Biophilic architectural design systematically incorporates natural light, living vegetation, natural ventilation, and organic materials into urban built environments. Empirical workplace studies demonstrate that biophilic interventions correlate with a 15% reduction in self-reported absenteeism and measurable drops in physiological biomarkers of stress, such as salivary cortisol levels.",
                      "q": "Which physiological change was recorded in biophilic office environments?",
                      "o": [
                            "Decreased salivary cortisol levels",
                            "Sharply elevated heart rates",
                            "Chronic vitamin D deficiencies",
                            "Heightened sensitivity to background noise"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'measurable drops in physiological biomarkers of stress, such as salivary cortisol levels'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "ctx": "Biophilic architectural design systematically incorporates natural light, living vegetation, natural ventilation, and organic materials into urban built environments. Empirical workplace studies demonstrate that biophilic interventions correlate with a 15% reduction in self-reported absenteeism and measurable drops in physiological biomarkers of stress, such as salivary cortisol levels.",
                      "q": "What reduction in employee absenteeism was reported in the studies?",
                      "o": [
                            "15%",
                            "50%",
                            "25%",
                            "5%"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'correlate with a 15% reduction in self-reported absenteeism'."
                },
                {
                      "lv": "B2",
                      "t": "gap",
                      "q": "Under no circumstances ___ confidential patient dossiers be transferred via unencrypted email.",
                      "a": [
                            "should",
                            "must",
                            "may"
                      ],
                      "x": "Đảo ngữ phủ định với cụm 'Under no circumstances + modal verb + S + V'."
                }
          ]
    },
    {
          "id": "mock-b2-4",
          "level": "B2",
          "title": "B2 Advanced Practice Test 4",
          "desc": "25 questions: Advanced Inversion, Double Comparatives, Concession, Collocations & TFNG Reading.",
          "timeLimit": 45,
          "questions": [
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "Only when the third longitudinal study was completed ___ the health commission approve the therapy.",
                      "o": [
                            "did",
                            "was",
                            "had",
                            "would"
                      ],
                      "a": 0,
                      "x": "Đảo ngữ với 'Only when + clause + auxiliary + S + V': 'did the health commission approve'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "The more sophisticated neural networks become, ___ transparent their decision pathways appear.",
                      "o": [
                            "the less",
                            "less",
                            "the least",
                            "much less"
                      ],
                      "a": 0,
                      "x": "Cấu trúc so sánh kép tăng tiến tương phản: 'The more..., the less...' (Mạng nơ-ron càng tinh vi thì đường đi quyết định của chúng càng kém minh bạch)."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "___ the theoretical proof appeared on paper, laboratory experiments repeatedly contradicted it.",
                      "o": [
                            "Impressive though",
                            "Although impressive",
                            "Despite impressive",
                            "However impressive"
                      ],
                      "a": 0,
                      "x": "Đảo tính từ nhấn mạnh sự nhượng bộ: 'Adj + though/as + S + V': 'Impressive though the theoretical proof appeared'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "The submerged archaeological citadel is reputed ___ by a tsunami in the third century BC.",
                      "o": [
                            "to have been destroyed",
                            "to destroy",
                            "destroying",
                            "that it was destroyed"
                      ],
                      "a": 0,
                      "x": "Cấu trúc bị động hoàn thành với động từ tường thuật: 'is reputed to have been + V3/ed'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "Novice investors all too frequently take sustained market stability for ___.",
                      "o": [
                            "granted",
                            "sure",
                            "given",
                            "certain"
                      ],
                      "a": 0,
                      "x": "Thành ngữ học thuật: 'take sth for granted' = coi điều gì là hiển nhiên, xem nhẹ rủi ro."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "The state agency tightened industrial emissions benchmarks ___ combating urban respiratory illnesses.",
                      "o": [
                            "with a view to",
                            "in view of",
                            "with regards to",
                            "in spite of"
                      ],
                      "a": 0,
                      "x": "'with a view to + V-ing' = với mục đích, hướng tới việc giải quyết điều gì."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "City planners drafted urgent contingency protocols to ___ the catastrophic risks of seasonal flash flooding.",
                      "o": [
                            "mitigate",
                            "exacerbate",
                            "obfuscate",
                            "proliferate"
                      ],
                      "a": 0,
                      "x": "'mitigate' = làm giảm thiểu, giảm nhẹ mức độ nghiêm trọng hoặc thiệt hại."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "We have invested far too much resources into this initiative; we ___ see it through to final fruition.",
                      "o": [
                            "might as well",
                            "can as well",
                            "would rather",
                            "should well"
                      ],
                      "a": 0,
                      "x": "'might as well + V' = chi bằng, tốt hơn hết là nên tiếp tục làm cho tới cùng."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "Subsequent oceanic seismic data failed to ___ the contentious continental drift hypothesis.",
                      "o": [
                            "substantiate",
                            "repudiate",
                            "fabricate",
                            "disseminate"
                      ],
                      "a": 0,
                      "x": "'substantiate' = chứng minh, cung cấp bằng chứng xác thực cho một giả thuyết khoa học."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "q": "___ the regulatory body ratifies the safety protocol, clinical testing will proceed next quarter.",
                      "o": [
                            "Provided that",
                            "Unless",
                            "Lest",
                            "Except"
                      ],
                      "a": 0,
                      "x": "'Provided that' = As long as / If (Với điều kiện là cơ quan quản lý phê chuẩn)."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Hardly the symposium had begun",
                            "when a power failure plunged",
                            "the main presentation hall",
                            "into total obscurity"
                      ],
                      "a": 0,
                      "corr": "Hardly had the symposium begun",
                      "x": "Đảo ngữ với 'Hardly' đứng đầu câu: 'Hardly had + S + V3/ed + when + S + V(past)'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The keynote speaker suggested to establish",
                            "an international oversight committee",
                            "to govern generative algorithms",
                            "responsibly"
                      ],
                      "a": 0,
                      "corr": "suggested establishing",
                      "x": "Sau động từ 'suggest' dùng danh động từ V-ing: 'suggested establishing', không dùng 'suggested to establish'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "The interdisciplinary panel of scientists",
                            "have unanimously endorsed",
                            "the revised carbon sequestration",
                            "target"
                      ],
                      "a": 1,
                      "corr": "has unanimously endorsed",
                      "x": "Chủ ngữ chính là danh từ tập hợp số ít 'The interdisciplinary panel' → động từ chia số ít: 'has unanimously endorsed'."
                },
                {
                      "lv": "B2",
                      "t": "error",
                      "q": "Identify the underlined error in the sentence:",
                      "parts": [
                            "Eminent as the philosopher was,",
                            "she refused to take any pride",
                            "on her lifetime achievements",
                            "and shunned publicity"
                      ],
                      "a": 2,
                      "corr": "in her lifetime achievements",
                      "x": "Cụm thành ngữ cố định: 'take pride in sth' (tự hào về điều gì), không dùng giới từ 'on'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "I only recognized the full gravity of the ecological crisis after reviewing the satellite telemetry.",
                      "key": "did",
                      "q": "Only after reviewing the satellite telemetry ___ the full gravity of the ecological crisis.",
                      "a": [
                            "did I recognize",
                            "did I recognise"
                      ],
                      "x": "'Only after + V-ing/clause + auxiliary + S + V': 'did I recognize'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "Although the research group possessed minimal institutional funding, they synthesized the compound.",
                      "key": "spite",
                      "q": "In ___ possessing minimal institutional funding, the research group synthesized the compound.",
                      "a": [
                            "spite of"
                      ],
                      "x": "'In spite of + V-ing/noun phrase' = Although + clause."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "Historians believe that the hidden underground tomb was plundered centuries ago.",
                      "key": "believed",
                      "q": "The hidden underground tomb is ___ plundered centuries ago.",
                      "a": [
                            "believed to have been"
                      ],
                      "x": "Bị động với động từ tường thuật: 'is believed to have been + V3/ed'."
                },
                {
                      "lv": "B2",
                      "t": "rewrite",
                      "orig": "Staff members must not disclose encrypted authentication keys under any circumstances.",
                      "key": "no",
                      "q": "Under ___ disclose encrypted authentication keys.",
                      "a": [
                            "no circumstances must staff members",
                            "no circumstances should staff members"
                      ],
                      "x": "Đảo ngữ phủ định bắt đầu bằng 'Under no circumstances + modal + S + V'."
                },
                {
                      "lv": "B2",
                      "t": "gaptext",
                      "text": "Behavioral economists argue that human cognition heavily depends upon mental [shortcuts|heuristics] to navigate complex decisions under uncertainty. While these rules of thumb are computationally efficient, they introduce [systematic|predictable] biases that frequently deviate from strictly [rational|optimal] outcomes."
                },
                {
                      "lv": "B2",
                      "t": "tfng",
                      "ctx": "Stratospheric aerosol injection (SAI) represents a proposed solar radiation modification technique designed to mimic the cooling mechanism observed following catastrophic volcanic eruptions. Proponents argue that introducing sub-micrometer sulfur dioxide particles into the stratosphere could reflect incoming solar irradiance back into space, thereby moderating mean planetary temperatures within months. However, atmospheric climate models caution that uneven aerosol deployment could disrupt monsoonal precipitation patterns across South Asia and induce chronic drought in equatorial rainforests.",
                      "q": "Stratospheric aerosol injection operates by actively vacuuming carbon dioxide directly from the lower troposphere.",
                      "a": "F",
                      "x": "False. Đoạn văn nêu rõ kỹ thuật này hoạt động bằng cách phản xạ bức xạ mặt trời trở lại không gian ('reflect incoming solar irradiance back into space') chứ không phải hút CO2 từ tầng đối lưu."
                },
                {
                      "lv": "B2",
                      "t": "tfng",
                      "ctx": "Stratospheric aerosol injection (SAI) represents a proposed solar radiation modification technique designed to mimic the cooling mechanism observed following catastrophic volcanic eruptions. Proponents argue that introducing sub-micrometer sulfur dioxide particles into the stratosphere could reflect incoming solar irradiance back into space, thereby moderating mean planetary temperatures within months. However, atmospheric climate models caution that uneven aerosol deployment could disrupt monsoonal precipitation patterns across South Asia and induce chronic drought in equatorial rainforests.",
                      "q": "The international community signed a universal treaty in 2025 banning all field testing of solar geoengineering.",
                      "a": "NG",
                      "x": "Not Given. Đoạn văn chỉ phân tích cơ chế và rủi ro khí hậu của SAI, hoàn toàn không nói về hiệp ước quốc tế nào năm 2025."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "ctx": "Stratospheric aerosol injection (SAI) represents a proposed solar radiation modification technique designed to mimic the cooling mechanism observed following catastrophic volcanic eruptions. Proponents argue that introducing sub-micrometer sulfur dioxide particles into the stratosphere could reflect incoming solar irradiance back into space, thereby moderating mean planetary temperatures within months. However, atmospheric climate models caution that uneven aerosol deployment could disrupt monsoonal precipitation patterns across South Asia and induce chronic drought in equatorial rainforests.",
                      "q": "What natural event inspires the core mechanism of SAI?",
                      "o": [
                            "Large volcanic eruptions",
                            "Oceanic thermohaline currents",
                            "Solar flare magnetic storms",
                            "Glacial calving"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'designed to mimic the cooling mechanism observed following catastrophic volcanic eruptions'."
                },
                {
                      "lv": "B2",
                      "t": "mc",
                      "ctx": "Stratospheric aerosol injection (SAI) represents a proposed solar radiation modification technique designed to mimic the cooling mechanism observed following catastrophic volcanic eruptions. Proponents argue that introducing sub-micrometer sulfur dioxide particles into the stratosphere could reflect incoming solar irradiance back into space, thereby moderating mean planetary temperatures within months. However, atmospheric climate models caution that uneven aerosol deployment could disrupt monsoonal precipitation patterns across South Asia and induce chronic drought in equatorial rainforests.",
                      "q": "What potential catastrophic hazard is associated with uneven aerosol dispersion?",
                      "o": [
                            "Disruption of monsoonal rainfall in South Asia and drought in rainforests",
                            "Immediate collapse of global satellite communications",
                            "Unprecedented rise in sea levels within weeks",
                            "Total depletion of stratospheric oxygen"
                      ],
                      "a": 0,
                      "x": "Bài đọc: 'could disrupt monsoonal precipitation patterns across South Asia and induce chronic drought in equatorial rainforests'."
                },
                {
                      "lv": "B2",
                      "t": "gap",
                      "q": "Little ___ the research team realize that their findings would redefine modern cellular immunology.",
                      "a": "did",
                      "x": "Đảo ngữ với phó từ phủ định 'Little': 'Little did + S + V(inf)'."
                }
          ]
    }
  ]
};

