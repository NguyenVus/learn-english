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
  "a": 1,
  "x": "Chủ ngữ 'She' là ngôi thứ 3 số ít, diễn tả thói quen hàng ngày ('every day') → dùng thì Hiện tại đơn: 'goes' (thêm -es vào go). Các phương án: 'go' sai vì thiếu -es; 'is go' sai ngữ pháp; 'going' phải có to be."
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
  "a": 2,
  "x": "Dùng 'any' trong câu phủ định ('isn't') với danh từ không đếm được ('milk'). 'some' chỉ dùng trong câu khẳng định/lời mời; 'many' chỉ dùng cho danh từ đếm được số nhiều; 'a' chỉ dùng cho danh từ đếm được số ít."
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
  "a": 2,
  "x": "Dấu hiệu 'last night' (tối qua) chỉ thời điểm xác định đã kết thúc trong quá khứ → chia thì Quá khứ đơn: 'saw' (dạng V2 của see). Không dùng thì Hiện tại hoàn thành 'have seen' khi có mốc thời gian quá khứ rõ ràng."
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
  "a": 2,
  "x": "Sau mạo từ 'the' trong cấu trúc so sánh nhất của tính từ bất quy tắc 'good' → dùng 'best' (the best). 'better' là so sánh hơn (better than); 'most good' sai ngữ pháp."
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
  "a": 2,
  "x": "Dấu hiệu 'since 2019' (từ năm 2019 đến nay) chỉ hành động bắt đầu trong quá khứ và vẫn tiếp diễn ở hiện tại → chia thì Hiện tại hoàn thành: 'have lived'. 'lived' là quá khứ đơn (đã kết thúc); 'live' là hiện tại đơn."
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
  "a": 2,
  "x": "Câu điều kiện loại 1 (sự việc có thể xảy ra ở tương lai): Mệnh đề If dùng Hiện tại đơn ('If it rains'), mệnh đề chính dùng 'will + V nguyên mẫu' → 'will stay'. 'would stay' chỉ dùng cho điều kiện loại 2."
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
  "a": 1,
  "x": "Chủ ngữ 'The museum' (viện bảo tàng) là vật chịu tác động (được xây dựng) + mốc thời gian quá khứ 'in 1890' → dùng câu bị động thì Quá khứ đơn: 'was built' (was/were + V3/ed)."
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
  "a": 1,
  "x": "Mệnh đề chính dùng 'would have passed' là dấu hiệu của Câu điều kiện loại 3 (giả định trái ngược với quá khứ) → Mệnh đề If chia ở Quá khứ hoàn thành: 'had studied' (had + V3/ed)."
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
  "a": 1,
  "x": "Câu tường thuật gián tiếp dạng câu hỏi Wh-: trật tự từ chuyển về dạng khẳng định (S + V) và lùi thì: 'where I lived'. Không đảo trợ động từ 'did/do' lên trước chủ ngữ."
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
  "a": 0,
  "x": "Dự đoán có căn cứ chắc chắn ở hiện tại ('anh ấy không nghe máy, chắc hẳn là đã ngủ rồi') → dùng 'must be' + tính từ (must be asleep). 'can't be' = chắc chắn không thể; 'must have' cần có V3 đi kèm."
 },
 {
  "lv": "A2",
  "t": "mc",
  "q": "Choose the word that means “not expensive”.",
  "o": [
   "cheap",
   "busy",
   "heavy",
   "quiet"
  ],
  "a": 0,
  "x": "“cheap” nghĩa là rẻ (not expensive). Các từ khác: 'busy' = bận rộn; 'heavy' = nặng; 'quiet' = yên tĩnh."
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
  "a": 1,
  "x": "“ticket” nghĩa là vé (train ticket: vé tàu hoả). Các từ khác: 'passport' = hộ chiếu; 'receipt' = biên lai/hoá đơn; 'luggage' = hành lý."
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
  "a": 2,
  "x": "Cấu trúc cố định: 'look forward to + V-ing' (rất mong đợi điều gì) → 'to seeing'. Người học thường nhầm lẫn chọn 'to see' vì thói quen to + V nguyên mẫu."
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
  "a": 0,
  "x": "Tính từ đuôi '-ed' dùng miêu tả cảm xúc con người: 'embarrassed' (cảm thấy xấu hổ, ngượng ngùng). Tính từ đuôi '-ing' ('embarrassing') dùng mô tả bản chất của sự việc."
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
  "a": 0,
  "x": "Động từ 'outweigh' nghĩa là vượt trội hơn, nhiều sức nặng/giá trị hơn (benefits outweigh risks: lợi ích lớn hơn rủi ro). 'overcome' = vượt qua khó khăn; 'overlook' = bỏ sót/bỏ qua."
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
  "a": 1,
  "x": "Cụm danh từ 'make a breakthrough' nghĩa là tạo ra bước đột phá quan trọng. 'breakdown' = sự cố/suy sụp; 'outbreak' = sự bùng phát dịch bệnh; 'break-in' = vụ đột nhập trái phép."
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
  "a": 1,
  "x": "Thông báo ghi rõ: 'Children under 8 must swim with an adult' (trẻ dưới 8 tuổi phải đi cùng người lớn) → tương ứng với 'Young children need an adult with them'. Phương án 'The pool opens on Mondays' sai vì bài ghi 'closed on Mondays'."
 },
 {
  "lv": "B1",
  "t": "mc",
  "ctx": "Hi Sam, I'm afraid I can't make it to the cinema tonight. My boss has asked me to finish a report, so I'll be at the office until late. How about Saturday instead? – Jo",
  "q": "Why is Jo writing?",
  "o": [
   "To invite Sam to the office",
   "To change their plans",
   "To ask for help with a report"
  ],
  "a": 1,
  "x": "Jo viết báo tối nay không đi xem phim được vì phải ở lại văn phòng làm báo cáo, và đề xuất dời sang thứ Bảy ('How about Saturday instead?') → mục đích là 'To change their plans' (đổi kế hoạch)."
 },
 {
  "lv": "B1",
  "t": "mc",
  "ctx": "Many people think that bats are blind, but this is not true. Most bats can see quite well, although they also use sound to find their way in the dark.",
  "q": "According to the text, most bats…",
  "o": [
   "cannot see at all",
   "can see and also use sound",
   "only use their eyes"
  ],
  "a": 1,
  "x": "Bài đọc: 'Most bats can see quite well, although they also use sound...' (Hầu hết dơi nhìn khá tốt, mặc dù chúng cũng dùng âm thanh) → 'can see and also use sound'. Phương án 'cannot see at all' sai vì bài khẳng định 'this is not true'."
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
  "a": 1,
  "x": "Bài đọc: 'critics contend that it erodes the informal exchanges that often spark innovation' (những người chỉ trích cho rằng làm việc từ xa làm giảm các cuộc trò chuyện tự phát - vốn khơi nguồn sáng tạo) → tương đương 'It reduces spontaneous interactions that create new ideas'."
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
  "a": 0,
  "x": "Từ 'ostensibly' mang nghĩa 'bề ngoài tuyên bố là vậy nhưng thực tế có thể khác' + 'speculation that political pressure played a larger role' → Tác giả ngụ ý lý do chính thức chưa chắc là lý do thực sự ('The official reason may not be the real reason')."
 },
 {
  "lv": "A2",
  "t": "mc",
  "say": "Excuse me, what time does the next bus to the city centre leave? – It leaves at half past nine.",
  "q": "🎧 Listen. When does the bus leave?",
  "o": [
   "9.00",
   "9.30",
   "9.45"
  ],
  "a": 1,
  "x": "Đoạn nghe: 'It leaves at half past nine' → 'half past nine' là 9 giờ 30 phút (9.30)."
 },
 {
  "lv": "B1",
  "t": "mc",
  "say": "I was going to cycle to work today, but my bike had a flat tyre, so I ended up taking a taxi, which cost me a fortune.",
  "q": "🎧 Listen. How did the speaker get to work?",
  "o": [
   "By bike",
   "By taxi",
   "By bus"
  ],
  "a": 1,
  "x": "Người nói dự định đạp xe nhưng xe thủng lốp ('had a flat tyre'), cuối cùng đã đi taxi ('ended up taking a taxi') → phương tiện thực tế là 'By taxi'. Đừng để bị lừa bởi từ 'cycle' ở đầu câu."
 },
 {
  "lv": "B1",
  "t": "mc",
  "say": "The library will close early on Friday because of staff training. It will open again at the usual time on Saturday morning.",
  "q": "🎧 Listen. Why will the library close early?",
  "o": [
   "For cleaning",
   "Because of staff training",
   "Because it's a holiday"
  ],
  "a": 1,
  "x": "Đoạn nghe: 'The library will close early on Friday because of staff training' (Thư viện đóng cửa sớm vào thứ Sáu vì đào tạo nhân viên) → 'Because of staff training'."
 },
 {
  "lv": "B2",
  "t": "mc",
  "say": "Although the new policy was intended to reduce traffic, early figures suggest that congestion has simply shifted to neighbouring districts rather than disappearing.",
  "q": "🎧 Listen. What happened after the new policy?",
  "o": [
   "Traffic disappeared completely.",
   "Traffic moved to nearby areas.",
   "Traffic increased everywhere."
  ],
  "a": 1,
  "x": "Đoạn nghe: 'congestion has simply shifted to neighbouring districts rather than disappearing' (ùn tắc chỉ dịch chuyển sang các khu vực lân cận thay vì biến mất) → 'Traffic moved to nearby areas'. 'Shifted to neighbouring districts' đồng nghĩa với 'moved to nearby areas'."
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
  "prompt": "“Young people today have more opportunities than their parents did.” Write a short opinion essay saying whether you agree, with reasons and examples.",
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
