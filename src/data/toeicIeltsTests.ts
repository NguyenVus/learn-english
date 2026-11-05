/* Authentic TOEIC ETS & IELTS Academic Mock Exam Datasets */
import type { ByLevel, MockTest } from "../types";

export const toeicIeltsTests: ByLevel<MockTest[]> = {
  "A2": [
    {
      "id": "mock-a2-3",
      "level": "A2",
      "title": "TOEIC Starter Practice Test (Target 350-450)",
      "category": "toeic",
      "target": "TOEIC 350 - 450",
      "desc": "20 câu hỏi Part 5 Incomplete Sentences: Ngữ pháp công sở căn bản, từ vựng văn phòng, đại từ, giới từ và liên từ.",
      "timeLimit": 20,
      "questions": [
        {
          "lv": "A2",
          "t": "mc",
          "q": "Mr. Tanaka will attend the annual sales conference in Tokyo next ___.",
          "o": [
            "week",
            "weeks",
            "weekly",
            "weekend"
          ],
          "a": 0,
          "x": "Cụm chỉ thời gian tương lai: 'next week' (tuần tới). Không dùng danh từ số nhiều hay phó từ sau 'next' trong ngữ cảnh này."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "All employees must show their identification badges ___ entering the research laboratory.",
          "o": [
            "before",
            "until",
            "during",
            "between"
          ],
          "a": 0,
          "x": "Giới từ 'before' + V-ing ('before entering': trước khi bước vào). 'until' chỉ mốc thời gian kéo dài, 'during' + danh từ."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The new photocopier in room 302 operates very ___.",
          "o": [
            "quiet",
            "quietly",
            "quietness",
            "quieter"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ thường 'operates' (vận hành) cần một phó từ (adverb) đuôi -ly → 'quietly' (một cách êm ái)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Ms. Gomez called the supplier to check on the status of our ___.",
          "o": [
            "order",
            "ordered",
            "ordering",
            "orderly"
          ],
          "a": 0,
          "x": "Sau tính từ sở hữu 'our' cần một danh từ (noun) → 'order' (đơn hàng). 'check on the status of our order': kiểm tra trạng thái đơn hàng."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The management team thanked the staff for ___ hard work during the product launch.",
          "o": [
            "they",
            "them",
            "their",
            "theirs"
          ],
          "a": 2,
          "x": "Đứng trước cụm danh từ 'hard work' cần tính từ sở hữu 'their' (sự làm việc chăm chỉ của họ). 'theirs' là đại từ sở hữu, không đứng trước danh từ."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Visitors are reminded to sign the guest register ___ the reception desk.",
          "o": [
            "at",
            "on",
            "into",
            "to"
          ],
          "a": 0,
          "x": "Chỉ vị trí cụ thể tại một điểm bàn tiếp tân dùng giới từ 'at' ('at the reception desk')."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "We need to hire an ___ assistant for the marketing department as soon as possible.",
          "o": [
            "addition",
            "additional",
            "additionally",
            "additive"
          ],
          "a": 1,
          "x": "Đứng trước danh từ 'assistant' (trợ lý) cần một tính từ (adjective) bổ nghĩa → 'additional' (bổ sung/thêm)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The monthly budget report was prepared ___ by the accounting team.",
          "o": [
            "careful",
            "carefully",
            "caring",
            "care"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ ở dạng bị động 'was prepared' cần một phó từ chỉ thể cách → 'carefully' (được chuẩn bị cẩn thận)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Please turn off all computer monitors ___ you leave the office for the weekend.",
          "o": [
            "when",
            "so",
            "because of",
            "during"
          ],
          "a": 0,
          "x": "Liên từ 'when' nối hai mệnh đề chỉ thời điểm ('khi bạn rời văn phòng'). 'because of' và 'during' phải đi kèm danh từ/cụm danh từ."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The warranty on the laptop covers all repairs for one ___ from the purchase date.",
          "o": [
            "year",
            "years",
            "yearly",
            "yearlong"
          ],
          "a": 0,
          "x": "Sau số đếm 'one' danh từ ở dạng số ít → 'one year' (một năm)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "If you have any questions about the new policy, please contact ___ Human Resources.",
          "o": [
            "a",
            "an",
            "the",
            "—"
          ],
          "a": 3,
          "x": "Trước tên phòng ban chức năng khi dùng trực tiếp như một thực thể liên hệ ('contact Human Resources') không dùng mạo từ."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The flight to Chicago was delayed ___ bad weather conditions.",
          "o": [
            "because",
            "because of",
            "although",
            "despite of"
          ],
          "a": 1,
          "x": "Sau chỗ trống là cụm danh từ 'bad weather conditions' (điều kiện thời tiết xấu) → dùng 'because of'. 'because' phải đi với mệnh đề (S + V)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Customers can track their shipments online ___ our tracking website.",
          "o": [
            "through",
            "across",
            "against",
            "under"
          ],
          "a": 0,
          "x": "'through our tracking website': thông qua / qua trang web theo dõi đơn hàng của chúng tôi."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The cafeteria will be ___ for renovations from Monday to Wednesday.",
          "o": [
            "close",
            "closed",
            "closing",
            "closely"
          ],
          "a": 1,
          "x": "Sau 'will be' cần tính từ hoặc quá khứ phân từ chỉ trạng thái đóng cửa → 'closed' (bị đóng cửa / tạm ngưng phục vụ)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "All department managers are invited to the meeting, ___ attendance is not mandatory.",
          "o": [
            "but",
            "or",
            "so",
            "for"
          ],
          "a": 0,
          "x": "Quan hệ tương phản: Mọi quản lý đều được mời, NHƯNG việc tham dự không bắt buộc → dùng liên từ 'but'."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Mr. Henderson has worked as a graphic designer ___ over ten years.",
          "o": [
            "since",
            "for",
            "during",
            "while"
          ],
          "a": 1,
          "x": "Hiện tại hoàn thành 'has worked' đi với khoảng thời gian 'over ten years' (hơn 10 năm) → dùng giới từ 'for'."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Please submit your travel expense claim ___ Friday afternoon at the latest.",
          "o": [
            "by",
            "at",
            "until",
            "in"
          ],
          "a": 0,
          "x": "'by Friday afternoon at the latest': muộn nhất là trước/vào chiều thứ Sáu (chỉ hạn chót deadline dùng 'by')."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The train station is located within walking ___ of the grand hotel.",
          "o": [
            "distant",
            "distance",
            "distantly",
            "distances"
          ],
          "a": 1,
          "x": "Cụm từ cố định trong đề thi TOEIC: 'within walking distance of...' (trong cự ly có thể đi bộ tới)."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "Employees who work overtime will receive ___ compensation.",
          "o": [
            "extra",
            "extraness",
            "extraordinary",
            "extract"
          ],
          "a": 0,
          "x": "'extra compensation': tiền thù lao làm thêm / trả thêm. 'extra' đóng vai trò tính từ bổ nghĩa cho 'compensation'."
        },
        {
          "lv": "A2",
          "t": "mc",
          "q": "The CEO asked everyone to arrive ___ for the morning briefing.",
          "o": [
            "prompt",
            "promptly",
            "promptness",
            "prompter"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ 'arrive' (đến nơi) cần phó từ 'promptly' (đúng giờ, không chậm trễ)."
        }
      ]
    },
    {
      "id": "mock-a2-4",
      "level": "A2",
      "title": "IELTS Foundation Reading & Vocab Test (Band 4.0 - 5.0)",
      "category": "ielts",
      "target": "IELTS Band 4.0 - 5.0",
      "desc": "15 câu hỏi: Đọc hiểu bài đọc 'Modern Public Libraries' với dạng câu hỏi True/False/Not Given, Trắc nghiệm và Điền từ.",
      "timeLimit": 20,
      "questions": [
        {
          "lv": "A2",
          "t": "tfng",
          "ctx": "Reading Passage: Modern Public Libraries\nPublic libraries have changed dramatically over the past two decades. In the past, they were quiet places where visitors went only to borrow printed books or study silently. Today, modern libraries have transformed into community hubs. They offer free Wi-Fi, computer workstations, 3D printers, and recording studios. Many branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children. Furthermore, a growing number of libraries now feature small cafes where visitors can drink coffee and talk without whispering.",
          "q": "In the past, visitors were encouraged to talk loudly in public libraries.",
          "a": "F",
          "x": "Đoạn văn nói: 'In the past, they were quiet places where visitors went only to borrow printed books or study silently' → Khẳng định xưa kia thư viện là nơi yên tĩnh học tập trong im lặng, không hề khuyến khích nói to → False."
        },
        {
          "lv": "A2",
          "t": "tfng",
          "ctx": "Reading Passage: Modern Public Libraries (Tiếp tục)\nToday, modern libraries have transformed into community hubs. They offer free Wi-Fi, computer workstations, 3D printers, and recording studios. Many branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children.",
          "q": "Some modern libraries have equipment for recording audio or podcasts.",
          "a": "T",
          "x": "Đoạn văn nêu rõ: 'They offer free Wi-Fi, computer workstations, 3D printers, and recording studios' (phòng thu âm) → Đúng với nhận định câu hỏi → True."
        },
        {
          "lv": "A2",
          "t": "tfng",
          "ctx": "Reading Passage: Modern Public Libraries (Tiếp tục)\nMany branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children. Furthermore, a growing number of libraries now feature small cafes where visitors can drink coffee and talk without whispering.",
          "q": "All public libraries around the world receive government funding.",
          "a": "NG",
          "x": "Bài đọc chỉ nói về các dịch vụ và hoạt động của thư viện hiện đại, hoàn toàn KHÔNG đề cập đến nguồn ngân sách chính phủ có tài trợ cho tất cả thư viện trên thế giới hay không → Not Given."
        },
        {
          "lv": "A2",
          "t": "tfng",
          "ctx": "Reading Passage: Modern Public Libraries (Tiếp tục)\nFurthermore, a growing number of libraries now feature small cafes where visitors can drink coffee and talk without whispering.",
          "q": "Visitors in some modern libraries are allowed to speak at normal volume in designated cafe areas.",
          "a": "T",
          "x": "Bài đọc viết: 'feature small cafes where visitors can drink coffee and talk without whispering' (nói chuyện không cần thì thầm = âm lượng bình thường) → True."
        },
        {
          "lv": "A2",
          "t": "tfng",
          "ctx": "Reading Passage: Modern Public Libraries (Phần 2)\nDigital borrowing has also seen immense popularity. Cardholders can download e-books and audiobooks directly to their smartphones using dedicated mobile apps. As a result, physical visits to book shelves have decreased by 15%, but overall digital engagement has doubled since 2018.",
          "q": "Fewer people are visiting physical bookshelves than before.",
          "a": "T",
          "x": "Đoạn văn viết: 'physical visits to book shelves have decreased by 15%' (lượt đến kệ sách trực tiếp giảm 15%) → Đồng nghĩa với 'Fewer people are visiting...' → True."
        },
        {
          "lv": "A2",
          "t": "mc",
          "ctx": "Reading Passage: Modern Public Libraries\nToday, modern libraries have transformed into community hubs. They offer free Wi-Fi, computer workstations, 3D printers, and recording studios. Many branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children.",
          "q": "According to the passage, who can attend weekly coding classes at many libraries?",
          "o": [
            "Immigrants",
            "Young children",
            "Teenagers",
            "Senior citizens"
          ],
          "a": 2,
          "x": "Bài đọc nói: 'weekly coding workshops for teenagers' (lớp lập trình hàng tuần cho thanh thiếu niên) → Đáp án đúng là Teenagers."
        },
        {
          "lv": "A2",
          "t": "mc",
          "ctx": "Reading Passage: Modern Public Libraries\nCardholders can download e-books and audiobooks directly to their smartphones using dedicated mobile apps.",
          "q": "How can library members access digital audiobooks?",
          "o": [
            "By buying physical CDs",
            "Through smartphone mobile apps",
            "By mailing a paper request",
            "Only in the main central library"
          ],
          "a": 1,
          "x": "Bài đọc nói: 'download e-books and audiobooks directly to their smartphones using dedicated mobile apps' → Through smartphone mobile apps."
        },
        {
          "lv": "A2",
          "t": "mc",
          "ctx": "Reading Passage: Modern Public Libraries\nToday, modern libraries have transformed into community hubs. They offer free Wi-Fi, computer workstations, 3D printers, and recording studios.",
          "q": "The word 'hubs' in the passage is closest in meaning to:",
          "o": [
            "central centres of activity",
            "quiet silent rooms",
            "storage warehouses",
            "isolated corners"
          ],
          "a": 0,
          "x": "Từ 'hub' trong ngữ cảnh 'community hubs' nghĩa là trung tâm đầu mối kết nối các hoạt động cộng đồng ('central centres of activity')."
        },
        {
          "lv": "A2",
          "t": "mc",
          "ctx": "Reading Passage: Modern Public Libraries\nIn the past, they were quiet places where visitors went only to borrow printed books or study silently.",
          "q": "What was the main purpose of visiting libraries twenty years ago?",
          "o": [
            "Taking digital coding exams",
            "Drinking coffee with friends",
            "Borrowing printed books or studying",
            "Using 3D printing equipment"
          ],
          "a": 2,
          "x": "Trích dẫn: 'In the past, they were quiet places where visitors went only to borrow printed books or study silently'."
        },
        {
          "lv": "A2",
          "t": "mc",
          "ctx": "Reading Passage: Modern Public Libraries\nAs a result, physical visits to book shelves have decreased by 15%, but overall digital engagement has doubled since 2018.",
          "q": "What has happened to digital engagement since 2018?",
          "o": [
            "It has remained unchanged",
            "It has dropped slightly",
            "It has doubled",
            "It has ceased completely"
          ],
          "a": 2,
          "x": "Trích dẫn: 'overall digital engagement has doubled since 2018' (tương tác trực tuyến đã tăng gấp đôi)."
        },
        {
          "lv": "A2",
          "t": "gap",
          "ctx": "Reading Passage: Summary\nComplete the sentences using ONE WORD from the passage:\n'They offer free Wi-Fi, computer workstations, 3D printers, and recording studios. Many branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children.'",
          "q": "Modern libraries offer free Wi-Fi, 3D printers and recording ___.",
          "a": "studios",
          "x": "Từ trong bài đọc điền vào chỗ trống: 'recording studios' (phòng thu âm)."
        },
        {
          "lv": "A2",
          "t": "gap",
          "ctx": "Reading Passage: Summary\n'Many branches host weekly coding workshops for teenagers, language classes for immigrants, and storytime sessions for young children.'",
          "q": "Libraries organise language classes specifically designed for ___.",
          "a": "immigrants",
          "x": "Từ trong bài đọc: 'language classes for immigrants' (lớp học ngoại ngữ cho người nhập cư)."
        },
        {
          "lv": "A2",
          "t": "gap",
          "ctx": "Reading Passage: Summary\n'Furthermore, a growing number of libraries now feature small cafes where visitors can drink coffee and talk without whispering.'",
          "q": "In library cafes, visitors can enjoy a drink without having to ___.",
          "a": "whisper|whispering",
          "x": "Từ trong bài đọc: 'without whispering' (không cần phải thì thầm)."
        },
        {
          "lv": "A2",
          "t": "gap",
          "ctx": "Reading Passage: Summary\n'Cardholders can download e-books and audiobooks directly to their smartphones using dedicated mobile apps.'",
          "q": "Library users can access e-books through mobile ___ on their phones.",
          "a": "apps|applications",
          "x": "Từ trong bài đọc: 'using dedicated mobile apps'."
        },
        {
          "lv": "A2",
          "t": "gap",
          "ctx": "Reading Passage: Summary\n'As a result, physical visits to book shelves have decreased by 15%, but overall digital engagement has doubled since 2018.'",
          "q": "Since 2018, digital engagement with library services has ___.",
          "a": "doubled",
          "x": "Từ trong bài đọc: 'overall digital engagement has doubled'."
        }
      ]
    }
  ],
  "B1": [
    {
      "id": "mock-b1-3",
      "level": "B1",
      "title": "TOEIC ETS Intermediate Test 1 (Target 550-650)",
      "category": "toeic",
      "target": "TOEIC 550 - 650",
      "desc": "22 câu hỏi chuẩn ETS: Part 5 Incomplete Sentences (14 câu) & Part 6 Text Completion (8 câu với Email khách hàng và Memo nội bộ).",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B1",
          "t": "mc",
          "q": "The marketing director announced that the upcoming promotional campaign would be ___ by a prominent advertising firm.",
          "o": [
            "conduct",
            "conducting",
            "conducted",
            "conductor"
          ],
          "a": 2,
          "x": "Cấu trúc bị động của tương lai trong quá khứ: 'would be + V3/ed' → 'conducted'. Chiến dịch quảng cáo được thực hiện bởi công ty quảng cáo."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "___ the economic downturn, NexaTech recorded a significant increase in international sales.",
          "o": [
            "Despite",
            "Although",
            "Even though",
            "However"
          ],
          "a": 0,
          "x": "Sau chỗ trống là cụm danh từ 'the economic downturn' (sự suy thoái kinh tế) mang ý nghĩa tương phản → dùng giới từ 'Despite'. 'Although' và 'Even though' phải đi cùng mệnh đề."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Staff members must submit their receipts promptly in order to be ___ for business travel expenses.",
          "o": [
            "reimbursed",
            "reimbursing",
            "reimbursement",
            "reimburses"
          ],
          "a": 0,
          "x": "Cấu trúc bị động 'to be reimbursed' (được hoàn lại tiền công tác phí)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The newly renovated auditorium is spacious enough to ___ up to five hundred conference attendees.",
          "o": [
            "accommodate",
            "accommodates",
            "accommodating",
            "accommodation"
          ],
          "a": 0,
          "x": "Cấu trúc 'adj + enough + to-V(nguyên mẫu)' → 'to accommodate' (đủ rộng rãi để chứa đến 500 khách tham dự)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Customer reviews indicate that the latest smartphone model is ___ superior to its predecessor.",
          "o": [
            "substance",
            "substantial",
            "substantially",
            "substantiate"
          ],
          "a": 2,
          "x": "Bổ nghĩa cho tính từ so sánh 'superior' (vượt trội hơn) cần một phó từ chỉ mức độ → 'substantially' (vượt trội hơn đáng kể)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Neither the regional manager ___ the store supervisors were aware of the revised inventory protocol.",
          "o": [
            "or",
            "nor",
            "and",
            "but"
          ],
          "a": 1,
          "x": "Cặp liên từ tương quan bắt buộc: 'Neither ... nor ...' (Cả quản lý khu vực lẫn giám sát cửa hàng đều không...)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Dr. Evans has asked the laboratory technicians to verify the test results ___ finalizing the chemical analysis.",
          "o": [
            "prior to",
            "instead",
            "whereas",
            "as if"
          ],
          "a": 0,
          "x": "'prior to + V-ing' = before (trước khi hoàn tất phân tích hóa học). 'instead' đi với 'of', 'whereas' nối 2 mệnh đề tương phản."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The maintenance crew worked overnight so that the assembly line could operate ___ the following morning.",
          "o": [
            "smooth",
            "smoothly",
            "smoothness",
            "smoothed"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ 'operate' (hoạt động/vận hành) cần một phó từ → 'smoothly' (hoạt động một cách trơn tru)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Any employee ___ badge has expired must visit the security desk on the ground floor.",
          "o": [
            "who",
            "whom",
            "whose",
            "which"
          ],
          "a": 2,
          "x": "Đại từ quan hệ chỉ sở hữu: 'whose badge' (người mà thẻ nhân viên đã hết hạn)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "We regret to inform you that your subscription cannot be renewed ___ payment is received.",
          "o": [
            "until",
            "during",
            "while",
            "since"
          ],
          "a": 0,
          "x": "'until + mệnh đề' (cho tới khi khoản thanh toán được nhận). 'cannot be renewed until payment is received'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The board of directors expressed their complete ___ with the interim financial results.",
          "o": [
            "satisfied",
            "satisfaction",
            "satisfactory",
            "satisfyingly"
          ],
          "a": 1,
          "x": "Sau tính từ 'complete' cần một danh từ (noun) → 'satisfaction' (sự hài lòng tuyệt đối)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Mr. Davies will oversee the European expansion project ___ Ms. Albright is on maternity leave.",
          "o": [
            "while",
            "during",
            "despite",
            "between"
          ],
          "a": 0,
          "x": "Sau chỗ trống là mệnh đề có chủ ngữ và động từ 'Ms. Albright is on...' → dùng liên từ 'while' (trong khi). 'during' chỉ đi với danh từ."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Our logistics team is currently exploring more ___ shipping methods to reduce transportation overhead.",
          "o": [
            "economical",
            "economics",
            "economize",
            "economically"
          ],
          "a": 0,
          "x": "Đứng trước danh từ 'shipping methods' (phương thức vận chuyển) cần một tính từ bổ nghĩa → 'economical' (tiết kiệm chi phí)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Tickets for the charity gala are selling quickly, so attendees are encouraged to reserve theirs ___.",
          "o": [
            "early",
            "earliness",
            "earlier",
            "earliest"
          ],
          "a": 0,
          "x": "Cụm 'reserve theirs early' (đặt vé sớm). 'early' ở đây là phó từ bổ nghĩa cho động từ 'reserve'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\nRead the following email regarding an order delay:\n\nTo: Marcus Vance <m.vance@vanceconsulting.com>\nFrom: Clara Oswald <c.oswald@premieroffice.com>\nDate: October 14\nSubject: Order #PO-8829 Update\n\nDear Mr. Vance,\nI am writing to update you on the status of your recent furniture order for your new branch office. Due to an unexpected shortage of raw materials at our factory, the shipment of executive desks has been ___ (15) delayed.",
          "q": "Question 15: Select the best word to complete blank (15).",
          "o": [
            "momentary",
            "temporarily",
            "temporary",
            "temperament"
          ],
          "a": 1,
          "x": "Đứng giữa trợ động từ 'has been' và phân từ hai 'delayed' cần một phó từ (adverb) đuôi -ly → 'temporarily delayed' (tạm thời bị trì hoãn)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Email tiếp tục)\nWe now anticipate that your order will depart our regional distribution warehouse on October 22. ___ (16), we would like to offer you a 15% discount on your next order as an apology for any inconvenience caused.",
          "q": "Question 16: Select the best transitional phrase for blank (16).",
          "o": [
            "In addition",
            "On the contrary",
            "In spite of",
            "Otherwise"
          ],
          "a": 0,
          "x": "Bổ sung thêm chính sách đền bù và ưu đãi cho khách hàng: 'In addition' (Thêm vào đó, chúng tôi muốn gửi tặng bạn ưu đãi giảm giá 15%...)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Email tiếp tục)\nOur delivery specialists will contact you twenty-four hours prior to delivery to ___ (17) a convenient delivery window.",
          "q": "Question 17: Select the best verb for blank (17).",
          "o": [
            "confirm",
            "confirming",
            "confirmation",
            "confirmed"
          ],
          "a": 0,
          "x": "Cấu trúc chỉ mục đích: 'to + V(nguyên mẫu)' → 'to confirm a convenient delivery window' (để xác nhận khung giờ giao hàng thuận tiện)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Email tiếp tục)\n___ (18). We sincerely appreciate your patience and ongoing business partnership.\n\nWarm regards,\nClara Oswald\nCustomer Logistics Specialist",
          "q": "Question 18: Select the sentence that best fits blank (18).",
          "o": [
            "Please disregard our invoice if you have already cancelled your account.",
            "Should you require any changes to your delivery address, please notify us immediately.",
            "Desks that have already been assembled cannot be returned for a refund.",
            "Our showroom is closed on national holidays and weekends."
          ],
          "a": 1,
          "x": "Câu chuyển tiếp logic liên quan trực tiếp đến việc chuẩn bị giao hàng: 'Should you require any changes to your delivery address, please notify us immediately' (Nếu quý khách cần thay đổi địa chỉ giao hàng, vui lòng báo ngay cho chúng tôi)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\nRead the following office memorandum:\n\nMEMORANDUM\nTo: All Headquarters Staff\nFrom: Facilities Management\nDate: November 3\nSubject: Implementation of Digital Parking Permits\n\nBeginning December 1, our company will transition from plastic parking tags to a fully digital parking validation system. This initiative aims to enhance campus security and ___ (19) administrative processing times.",
          "q": "Question 19: Select the best word for blank (19).",
          "o": [
            "reduce",
            "reduction",
            "reducing",
            "reduced"
          ],
          "a": 0,
          "x": "Cấu trúc song song liên kết bởi 'and': 'to enhance campus security and reduce administrative processing times' (động từ nguyên mẫu sau 'to')."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Memo tiếp tục)\nTo register your vehicle, please log in to the employee self-service portal and enter your license plate number under the 'Transport' tab. The registration process is ___ (20) and takes less than three minutes to complete.",
          "q": "Question 20: Select the best adjective for blank (20).",
          "o": [
            "straightforward",
            "straightforwardly",
            "straighten",
            "straightness"
          ],
          "a": 0,
          "x": "Sau động từ liên kết 'is' cần một tính từ miêu tả tính chất của quy trình đăng ký → 'straightforward' (đơn giản, dễ thực hiện)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Memo tiếp tục)\nOnce registered, license plate recognition cameras at each gate will automatically grant access to the parking structures. ___ (21), employees who drive different vehicles must update their profiles before parking on site.",
          "q": "Question 21: Select the best connector for blank (21).",
          "o": [
            "Consequently",
            "However",
            "Similarly",
            "For instance"
          ],
          "a": 1,
          "x": "Ý đối lập / lưu ý ngoại lệ: Hệ thống tự động nhận diện biển số; TUY NHIÊN ('However'), nhân viên lái xe khác phải cập nhật hồ sơ trước khi đỗ."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Memo tiếp tục)\n___ (22). We thank you for your cooperation as we modernize our campus facilities.",
          "q": "Question 22: Select the sentence that best fits blank (22).",
          "o": [
            "All physical passes must be returned to HR by November 25.",
            "Parking fees will be doubled for all senior management executives.",
            "The cafeteria menu will be updated on the same day.",
            "Visitors are strictly prohibited from using company parking at all times."
          ],
          "a": 0,
          "x": "Câu thông báo chuyển giao phù hợp với ngữ cảnh huỷ bỏ thẻ nhựa: 'All physical passes must be returned to HR by November 25' (Mọi thẻ vật lý phải được hoàn trả lại cho HR trước ngày 25/11)."
        }
      ]
    },
    {
      "id": "mock-b1-4",
      "level": "B1",
      "title": "TOEIC ETS Intermediate Test 2 (Target 600-700)",
      "category": "toeic",
      "target": "TOEIC 600 - 700",
      "desc": "22 câu hỏi Part 5 & 6: Khảo sát khách hàng, bảo trì hệ thống, tuyển dụng nhân sự & đàm phán hợp đồng cung ứng.",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B1",
          "t": "mc",
          "q": "Mr. Patel conducted a survey to determine which software features users found most ___.",
          "o": [
            "beneficial",
            "beneficially",
            "benefit",
            "benefiting"
          ],
          "a": 0,
          "x": "Cấu trúc 'find something + adj' (nhận thấy điều gì như thế nào) → 'found most beneficial' (nhận thấy hữu ích nhất)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The technical support team resolved the network malfunction with remarkable ___.",
          "o": [
            "efficient",
            "efficiency",
            "efficiently",
            "efficiencies"
          ],
          "a": 1,
          "x": "Sau tính từ 'remarkable' và giới từ 'with' cần một danh từ không đếm được → 'efficiency' (sự hiệu quả xuất sắc)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Only candidates who meet all the minimum educational qualifications will be called for an ___.",
          "o": [
            "interview",
            "interviews",
            "interviewing",
            "interviewed"
          ],
          "a": 0,
          "x": "Sau mạo từ 'an' danh từ đếm được ở dạng số ít bắt đầu bằng nguyên âm → 'an interview' (một buổi phỏng vấn)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The warranty does not cover damages caused by improper handling or unauthorized ___.",
          "o": [
            "modifications",
            "modify",
            "modified",
            "modifying"
          ],
          "a": 0,
          "x": "Sau tính từ 'unauthorized' (không được cấp phép) cần một danh từ số nhiều → 'modifications' (những sự sửa đổi/can thiệp kỹ thuật trái phép)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Our flight was delayed, but the airline representatives provided us ___ food vouchers and hotel accommodations.",
          "o": [
            "with",
            "for",
            "to",
            "by"
          ],
          "a": 0,
          "x": "Cấu trúc: 'provide somebody WITH something' (cung cấp cho ai cái gì)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The construction project was finished two months ahead of schedule, ___ saving the firm considerable resources.",
          "o": [
            "thereby",
            "whereas",
            "although",
            "unless"
          ],
          "a": 0,
          "x": "'thereby + V-ing': bằng cách ấy / nhờ đó mà ('thereby saving the firm...')."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The keynote speaker was so inspiring that the audience listened to her lecture with ___ attention.",
          "o": [
            "divided",
            "undivided",
            "dividing",
            "division"
          ],
          "a": 1,
          "x": "Thành ngữ tiếng Anh công sở kinh điển: 'with undivided attention' (với sự tập trung hoàn toàn / chăm chú lắng nghe)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Ms. Chen was promoted to senior account executive because of her ___ record of securing corporate contracts.",
          "o": [
            "impress",
            "impressive",
            "impressively",
            "impression"
          ],
          "a": 1,
          "x": "Đứng trước danh từ 'record' (thành tích/hồ sơ) cần một tính từ bổ nghĩa → 'impressive record' (thành tích ấn tượng)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The new branch office is expected to create ___ fifty new employment opportunities in the region.",
          "o": [
            "approximate",
            "approximately",
            "approximation",
            "approximating"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho số lượng 'fifty' cần một phó từ chỉ ước lượng → 'approximately fifty' (xấp xỉ / khoảng 50 cơ hội việc làm)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Neither of the proposed venues ___ available on the scheduled conference date.",
          "o": [
            "is",
            "are",
            "were",
            "have been"
          ],
          "a": 0,
          "x": "Chủ ngữ 'Neither of + danh từ số nhiều' về mặt ngữ pháp chuẩn luôn chia động từ ở ngôi thứ ba số ít → 'is available'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "All participants are requested to wear formal business attire throughout the ___ of the summit.",
          "o": [
            "duration",
            "durable",
            "durably",
            "durability"
          ],
          "a": 0,
          "x": "'throughout the duration of the summit' (trong suốt khoảng thời gian diễn ra hội nghị thượng đỉnh). 'duration': khoảng thời gian tồn tại/diễn ra."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "Employees wishing to take vacation time during the holiday season must obtain written ___ from their department head.",
          "o": [
            "approve",
            "approval",
            "approving",
            "approved"
          ],
          "a": 1,
          "x": "Sau tính từ 'written' cần một danh từ → 'written approval' (sự chấp thuận bằng văn bản)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The newly installed air conditioning unit operates much more ___ than our previous system.",
          "o": [
            "efficient",
            "efficiently",
            "efficiency",
            "more efficient"
          ],
          "a": 1,
          "x": "So sánh hơn của phó từ: 'much more efficiently' bổ nghĩa cho động từ 'operates'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "q": "The revised employee handbook includes detailed guidelines ___ acceptable use of company email accounts.",
          "o": [
            "regarding",
            "regard",
            "regarded",
            "regardless"
          ],
          "a": 0,
          "x": "Giới từ 'regarding' = concerning / about (liên quan đến / về việc sử dụng email công ty)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\nRead the following website announcement:\n\nSCHEDULED SYSTEM UPGRADE\nTo ensure optimal security and faster page load speeds for our customers, Apex Banking will perform scheduled system maintenance on Sunday, May 15. The maintenance window will begin at 1:00 AM and is ___ (15) to conclude by 6:00 AM.",
          "q": "Question 15: Select the best word for blank (15).",
          "o": [
            "expected",
            "expecting",
            "expectation",
            "expectant"
          ],
          "a": 0,
          "x": "Cấu trúc bị động chỉ dự kiến: 'is expected to conclude' (được dự kiến sẽ hoàn thành trước 6:00 sáng)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Thông báo tiếp tục)\nDuring this five-hour period, both the online banking portal and our mobile application will be temporarily ___ (16). However, in-store ATM services will remain fully functional throughout the maintenance.",
          "q": "Question 16: Select the best adjective for blank (16).",
          "o": [
            "unavailable",
            "accessible",
            "convenient",
            "reliable"
          ],
          "a": 0,
          "x": "Dựa vào ngữ cảnh bảo trì hệ thống: cổng ngân hàng trực tuyến và ứng dụng di động sẽ tạm thời không truy cập được ('unavailable')."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Thông báo tiếp tục)\nIf you have recurring bill payments scheduled for May 15, they will be processed ___ (17) as soon as systems are restored at 6:00 AM.",
          "q": "Question 17: Select the best adverb for blank (17).",
          "o": [
            "automatic",
            "automatically",
            "automation",
            "automate"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ bị động 'will be processed' cần phó từ → 'automatically' (được xử lý tự động)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 15–18)\n(Thông báo tiếp tục)\n___ (18). For urgent inquiries, our 24/7 emergency telephone hotline will remain staffed.\n\nThank you for choosing Apex Banking.",
          "q": "Question 18: Select the sentence that best fits blank (18).",
          "o": [
            "We apologize for any temporary inconvenience this maintenance may cause.",
            "All physical bank branches will permanently close their doors next month.",
            "Customers who fail to upgrade their passwords will incur an administrative fine.",
            "International transfers require minimum three business days to clear."
          ],
          "a": 0,
          "x": "Lời xin lỗi khách hàng chuẩn mực của doanh nghiệp khi bảo trì: 'We apologize for any temporary inconvenience this maintenance may cause'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\nRead the internal email below:\n\nTo: Regional Sales Representatives\nFrom: Brenda Cole, VP of Global Sales\nDate: September 5\nSubject: Launch of Quarterly Client Incentive Program\n\nDear Team,\nI am thrilled to announce the launch of our fourth-quarter incentive program. In recognition of your remarkable efforts this past year, the company has created an enhanced bonus pool for representatives who ___ (19) their quarterly sales targets by at least fifteen percent.",
          "q": "Question 19: Select the best verb for blank (19).",
          "o": [
            "exceed",
            "exceeds",
            "exceeded",
            "exceeding"
          ],
          "a": 0,
          "x": "Đại từ quan hệ 'who' thay cho danh từ số nhiều 'representatives' → động từ ở hiện tại chia số nhiều: 'exceed' (vượt chỉ tiêu doanh số)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Email tiếp tục)\nIn addition to cash bonuses, the top three sales performers in each territory will receive an all-expenses-paid trip to our annual executive retreat in Maui. Complete details regarding the criteria and scoring rubrics are attached ___ (20) this email.",
          "q": "Question 20: Select the best preposition for blank (20).",
          "o": [
            "to",
            "at",
            "for",
            "with"
          ],
          "a": 0,
          "x": "Cụm từ quen thuộc: 'attached TO this email' (được đính kèm theo email này)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Email tiếp tục)\nWe encourage all team members to collaborate and share best practices during our weekly regional meetings. ___ (21), team leaders will hold one-on-one coaching sessions to help you refine your sales pitches.",
          "q": "Question 21: Select the best transitional word for blank (21).",
          "o": [
            "Furthermore",
            "Nevertheless",
            "Instead",
            "Conversely"
          ],
          "a": 0,
          "x": "Bổ sung thêm thông tin hỗ trợ tích cực: 'Furthermore' (Hơn nữa, các trưởng nhóm sẽ tổ chức các buổi huấn luyện 1-1...)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 19–22)\n(Email tiếp tục)\n___ (22). Let's work together to make this quarter our most prosperous yet!\n\nBest regards,\nBrenda Cole",
          "q": "Question 22: Select the sentence that best fits blank (22).",
          "o": [
            "We have full confidence in your abilities to reach new heights.",
            "Travel reimbursements will no longer be provided for client lunches.",
            "All sales contracts must be reviewed by outside legal counsel.",
            "Employees with lowest scores will be assigned mandatory weekend shifts."
          ],
          "a": 0,
          "x": "Lời động viên khích lệ tinh thần phù hợp với giọng văn của Phó chủ tịch: 'We have full confidence in your abilities to reach new heights' (Chúng tôi hoàn toàn tin tưởng vào khả năng của các bạn để chạm tới những đỉnh cao mới)."
        }
      ]
    },
    {
      "id": "mock-b1-5",
      "level": "B1",
      "title": "IELTS Academic Reading Test 1 (Band 5.5 - 6.5)",
      "category": "ielts",
      "target": "IELTS Band 5.5 - 6.5",
      "desc": "18 câu hỏi chuẩn IELTS: Đọc hiểu bài đọc 'Urban Heat Islands & Green Roof Solutions' gồm True/False/Not Given, Trắc nghiệm và Tóm tắt điền từ.",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage: Urban Heat Islands & Green Roof Solutions\n\nParagraph A: As metropolitan areas around the world continue to expand, urban climatologists have documented a concerning meteorological phenomenon known as the Urban Heat Island (UHI) effect. Densely built city centres can be anywhere from 2°C to 8°C warmer than surrounding rural areas. This discrepancy is largely attributed to the prevalence of dark asphalt pavements, concrete facades, and tar roofs, which absorb solar radiation during daylight hours and re-radiate it as thermal energy at night. Furthermore, the scarcity of vegetative cover severely curtails natural evapotranspiration, a process through which plants cool the atmosphere by releasing moisture.\n\nParagraph B: The consequences of elevated urban temperatures extend far beyond thermal discomfort. Heightened temperatures trigger a surge in energy consumption as domestic and commercial air conditioning systems operate at peak capacity, which in turn escalates greenhouse gas emissions from fossil-fuel power plants. In addition, stagnant warm air traps vehicular pollutants near ground level, exacerbating respiratory ailments such as asthma and bronchitis among vulnerable city dwellers.",
          "q": "City centres are generally cooler than surrounding rural landscapes during hot summer days.",
          "a": "F",
          "x": "Đoạn A khẳng định: 'Densely built city centres can be anywhere from 2°C to 8°C warmer than surrounding rural areas' (Trung tâm thành phố ấm hơn từ 2 đến 8 độ C so với vùng nông thôn) → Ngược lại với câu hỏi → False."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph A: ...This discrepancy is largely attributed to the prevalence of dark asphalt pavements, concrete facades, and tar roofs, which absorb solar radiation during daylight hours and re-radiate it as thermal energy at night. Furthermore, the scarcity of vegetative cover severely curtails natural evapotranspiration, a process through which plants cool the atmosphere by releasing moisture.",
          "q": "Evapotranspiration by plants has a cooling influence on ambient air temperatures.",
          "a": "T",
          "x": "Đoạn A nói: 'evapotranspiration, a process through which plants cool the atmosphere by releasing moisture' (quá trình thoát hơi nước qua đó thực vật làm mát bầu khí quyển) → True."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: ...Heightened temperatures trigger a surge in energy consumption as domestic and commercial air conditioning systems operate at peak capacity, which in turn escalates greenhouse gas emissions from fossil-fuel power plants.",
          "q": "Increased use of air conditioning contributes to greater emissions of greenhouse gases.",
          "a": "T",
          "x": "Đoạn B khẳng định: air conditioning 'in turn escalates greenhouse gas emissions from fossil-fuel power plants' → True."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: ...In addition, stagnant warm air traps vehicular pollutants near ground level, exacerbating respiratory ailments such as asthma and bronchitis among vulnerable city dwellers.",
          "q": "All residents diagnosed with respiratory illnesses must relocate outside metropolitan areas.",
          "a": "NG",
          "x": "Bài đọc chỉ nói nhiệt độ cao làm trầm trọng thêm các bệnh hô hấp ('exacerbating respiratory ailments'), hoàn toàn KHÔNG nói mọi cư dân mắc bệnh phải chuyển ra ngoại ô sinh sống → Not Given."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: In response to this urban crisis, architects and municipal planners have increasingly turned to green roofs—also termed living roofs—as an effective ecological countermeasure. A green roof consists of a multi-layered system comprising a waterproof membrane, a root barrier, drainage mats, lightweight growing substrate, and a drought-tolerant plant canopy. Research conducted in Stuttgart and Chicago demonstrates that green roofs can lower internal roof temperatures by up to 25°C, slashing building cooling costs by 15% to 30%.",
          "q": "Research in Stuttgart and Chicago proved that living roofs can decrease building cooling expenses.",
          "a": "T",
          "x": "Đoạn C nói rõ: 'slashing building cooling costs by 15% to 30%' (giảm chi phí làm mát toà nhà từ 15% đến 30%) → True."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph D: Despite their documented advantages, the widespread installation of green roofs faces initial financial resistance. The capital outlay for installing a living roof is approximately two to three times higher than that of conventional asphalt roofing. However, proponents argue that because living vegetation protects underlying waterproof membranes from ultraviolet degradation, green roofs last twice as long as traditional alternatives, generating substantial long-term net savings.",
          "q": "Conventional asphalt roofs typically last longer than multi-layered green roofs.",
          "a": "F",
          "x": "Đoạn D nói: 'green roofs last twice as long as traditional alternatives' (mái nhà xanh có tuổi thọ cao gấp đôi so với phương án truyền thống) → Khẳng định mái truyền thống bền hơn là Sai → False."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph A: Densely built city centres can be anywhere from 2°C to 8°C warmer than surrounding rural areas. This discrepancy is largely attributed to the prevalence of dark asphalt pavements, concrete facades, and tar roofs...",
          "q": "According to Paragraph A, what is the primary reason why cities absorb excessive heat during the day?",
          "o": [
            "Dark construction materials capture solar radiation and release it at night",
            "Cities receive significantly more sunlight than nearby countryside",
            "High humidity prevents cloud formation above skyscrapers",
            "Underground subway tunnels generate constant volcanic heat"
          ],
          "a": 0,
          "x": "Đoạn A nêu: 'This discrepancy is largely attributed to the prevalence of dark asphalt pavements, concrete facades, and tar roofs, which absorb solar radiation during daylight hours and re-radiate it as thermal energy at night'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph B: In addition, stagnant warm air traps vehicular pollutants near ground level, exacerbating respiratory ailments such as asthma and bronchitis among vulnerable city dwellers.",
          "q": "The word 'exacerbating' in Paragraph B is closest in meaning to:",
          "o": [
            "worsening",
            "curing",
            "monitoring",
            "lessening"
          ],
          "a": 0,
          "x": "Từ 'exacerbate' mang nghĩa làm trầm trọng thêm, làm xấu đi tình trạng sức khỏe = 'worsening'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: A green roof consists of a multi-layered system comprising a waterproof membrane, a root barrier, drainage mats, lightweight growing substrate, and a drought-tolerant plant canopy.",
          "q": "Which of the following is NOT listed as a component layer of a green roof?",
          "o": [
            "Root barrier",
            "Waterproof membrane",
            "Lead protective shield",
            "Drainage mats"
          ],
          "a": 2,
          "x": "Trong các lớp được liệt kê ở Đoạn C: 'waterproof membrane, a root barrier, drainage mats, lightweight growing substrate, and a drought-tolerant plant canopy'. Hoàn toàn không có 'Lead protective shield' (tấm chắn chì)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: Research conducted in Stuttgart and Chicago demonstrates that green roofs can lower internal roof temperatures by up to 25°C...",
          "q": "By how much can internal roof temperatures drop according to research cited in Paragraph C?",
          "o": [
            "Up to 5°C",
            "Up to 15°C",
            "Up to 25°C",
            "Up to 45°C"
          ],
          "a": 2,
          "x": "Trích đoạn C: 'can lower internal roof temperatures by up to 25°C'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph D: The capital outlay for installing a living roof is approximately two to three times higher than that of conventional asphalt roofing. However, proponents argue that because living vegetation protects underlying waterproof membranes from ultraviolet degradation...",
          "q": "What protects the waterproof membrane in green roofs from UV damage?",
          "o": [
            "Living vegetation",
            "Synthetic asphalt",
            "Air conditioning exhaust",
            "Dark concrete slabs"
          ],
          "a": 0,
          "x": "Trích đoạn D: 'because living vegetation protects underlying waterproof membranes from ultraviolet degradation'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph D: The capital outlay for installing a living roof is approximately two to three times higher than that of conventional asphalt roofing.",
          "q": "What is the primary obstacle hindering the immediate widespread adoption of green roofs?",
          "o": [
            "Strict municipal building bans",
            "High upfront initial installation costs",
            "Shortage of drought-resistant seeds",
            "Lack of architectural interest"
          ],
          "a": 1,
          "x": "Đoạn D nhấn mạnh: 'The capital outlay for installing a living roof is approximately two to three times higher than that of conventional asphalt roofing' (Chi phí vốn ban đầu cao gấp 2-3 lần)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary (Questions 13–18)\nComplete the summary below using NO MORE THAN TWO WORDS from the passage:\n\nParagraph A: 'As metropolitan areas around the world continue to expand, urban climatologists have documented a concerning meteorological phenomenon known as the Urban Heat Island (UHI) effect. Densely built city centres can be anywhere from 2°C to 8°C warmer than surrounding rural areas.'",
          "q": "Scientists refer to the temperature disparity between cities and countryside as the Urban Heat ___ effect.",
          "a": "Island|island",
          "x": "Cụm thuật ngữ trong bài đọc: 'Urban Heat Island effect' (hiệu ứng đảo nhiệt đô thị)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph A: 'Furthermore, the scarcity of vegetative cover severely curtails natural evapotranspiration, a process through which plants cool the atmosphere by releasing moisture.'",
          "q": "Plants naturally cool atmospheric air by releasing ___ through their leaves.",
          "a": "moisture|water",
          "x": "Từ trong bài đọc: 'by releasing moisture' (bằng cách giải phóng độ ẩm/hơi nước)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'Heightened temperatures trigger a surge in energy consumption as domestic and commercial air conditioning systems operate at peak capacity...'",
          "q": "Rising heat waves lead to an increase in overall energy ___.",
          "a": "consumption",
          "x": "Từ trong bài đọc: 'a surge in energy consumption' (sự gia tăng đột biến trong tiêu thụ năng lượng)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'In response to this urban crisis, architects and municipal planners have increasingly turned to green roofs—also termed living roofs—as an effective ecological countermeasure.'",
          "q": "Another common name used by planners for green roofs is ___ roofs.",
          "a": "living",
          "x": "Từ trong bài đọc: 'green roofs—also termed living roofs'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'A green roof consists of a multi-layered system comprising a waterproof membrane, a root barrier, drainage mats, lightweight growing substrate, and a drought-tolerant plant canopy.'",
          "q": "Green roofs incorporate plants that are specifically drought-___.",
          "a": "tolerant",
          "x": "Từ trong bài đọc: 'drought-tolerant plant canopy' (thảm thực vật có khả năng chịu hạn)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph D: 'However, proponents argue that because living vegetation protects underlying waterproof membranes from ultraviolet degradation, green roofs last twice as long as traditional alternatives, generating substantial long-term net savings.'",
          "q": "In the long run, extended durability allows living roofs to produce substantial net ___.",
          "a": "savings",
          "x": "Từ trong bài đọc: 'generating substantial long-term net savings' (tạo ra khoản tiết kiệm ròng đáng kể về lâu dài)."
        }
      ]
    },
    {
      "id": "mock-b1-6",
      "level": "B1",
      "title": "IELTS Academic Reading Test 2 (Band 6.0 - 7.0)",
      "category": "ielts",
      "target": "IELTS Band 6.0 - 7.0",
      "desc": "18 câu hỏi: Bài đọc 'The Art of Memory: Cognitive Science & Mnemonics' với dạng Matching Headings, True/False/Not Given & Gap-fill.",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage: The Cognitive Science of Memory & Mnemonics\n\nParagraph A: Ancient orators in Classical Greece and Rome were renowned for delivering speeches lasting several hours without relying on written notes. Their secret lay in a spatial mnemonic technique known as the 'Method of Loci' or the 'Memory Palace'. According to historical legend, the poet Simonides of Ceos originated this method around 500 BCE after surviving the catastrophic collapse of a banquet hall. By visualizing the precise seating arrangement of guests prior to the disaster, he was able to identify the victims for their grieving families, realizing that human memory is exceptionally attuned to spatial orientation.",
          "q": "Simonides discovered the memory technique while memorising a long political speech.",
          "a": "F",
          "x": "Đoạn A kể lại rằng Simonides phát hiện ra kỹ thuật này sau khi sống sót khỏi vụ sập phòng tiệc và nhớ vị trí ngồi của các nạn nhân, không phải khi đang học thuộc một bài diễn văn chính trị → False."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph A: ...realizing that human memory is exceptionally attuned to spatial orientation.\n\nParagraph B: Modern neuroimaging studies have provided empirical validation for this classical art. Functional Magnetic Resonance Imaging (fMRI) scans reveal that when memory champions memorize hundreds of random digits or shuffled decks of cards, they do not exhibit superior general cognitive ability or larger brain volume. Instead, they activate regions of the brain normally dedicated to spatial navigation, particularly the hippocampus and the retrosplenial cortex.",
          "q": "Memory champions possess significantly larger brains than ordinary people.",
          "a": "F",
          "x": "Đoạn B khẳng định: 'they do not exhibit superior general cognitive ability or larger brain volume' (họ không hề có năng lực nhận thức tổng quát vượt trội hay thể tích não lớn hơn) → Khẳng định não họ to hơn là Sai → False."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: ...Instead, they activate regions of the brain normally dedicated to spatial navigation, particularly the hippocampus and the retrosplenial cortex.",
          "q": "The hippocampus is an area of the human brain involved in navigation and spatial mapping.",
          "a": "T",
          "x": "Đoạn B chỉ ra: 'activate regions of the brain normally dedicated to spatial navigation, particularly the hippocampus' → True."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: To construct a Memory Palace, a practitioner selects a thoroughly familiar architectural environment, such as their childhood home, university campus, or daily walking route. Abstract information to be remembered is then converted into vivid, eccentric, or emotionally charged mental images and mentally deposited along a predetermined sequential path. When recalling the information, the practitioner takes an imaginary stroll through the loci, retrieving each item in its exact order.",
          "q": "Visual images that are unusual or emotionally striking are easier for the brain to retain.",
          "a": "T",
          "x": "Đoạn C nói: thông tin được chuyển thành 'vivid, eccentric, or emotionally charged mental images' (hình ảnh sinh động, kỳ dị hoặc giàu cảm xúc) để dễ ghi nhớ → True."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: ...When recalling the information, the practitioner takes an imaginary stroll through the loci, retrieving each item in its exact order.\n\nParagraph D: Despite the proven effectiveness of spatial mnemonics, contemporary educational curricula largely neglect systematic memory training. Critics argue that in an era of ubiquitous smartphones and search engines, rote retention has become obsolete.",
          "q": "Most primary schools today teach students the Method of Loci on a daily basis.",
          "a": "F",
          "x": "Đoạn D nói rõ: 'contemporary educational curricula largely neglect systematic memory training' (các chương trình giáo dục hiện đại phần lớn bỏ bê việc rèn luyện trí nhớ có hệ thống) → False."
        },
        {
          "lv": "B1",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph D: ...However, cognitive scientists counter that working memory and internal knowledge structures are foundational to critical reasoning and creative problem-solving, warning that excessive reliance on external digital repositories may erode our capacity for sustained contemplation.",
          "q": "Some researchers express concern that relying too heavily on digital devices could impair deep thought.",
          "a": "T",
          "x": "Đoạn D viết: 'warning that excessive reliance on external digital repositories may erode our capacity for sustained contemplation' (lo ngại rằng phụ thuộc quá mức vào thiết bị kỹ thuật số bên ngoài có thể bào mòn khả năng suy ngẫm sâu) → True."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph A: Ancient orators in Classical Greece and Rome were renowned for delivering speeches lasting several hours without relying on written notes. Their secret lay in a spatial mnemonic technique known as the 'Method of Loci'...",
          "q": "The 'Method of Loci' relies fundamentally on the human brain's natural capacity for:",
          "o": [
            "spatial orientation and physical layouts",
            "arithmetic calculations and mathematical logic",
            "photographic recognition of written words",
            "auditory rhythm and musical pitch"
          ],
          "a": 0,
          "x": "Đoạn A khẳng định kỹ thuật dựa trên: 'realizing that human memory is exceptionally attuned to spatial orientation' (định hướng không gian)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph B: Functional Magnetic Resonance Imaging (fMRI) scans reveal that when memory champions memorize hundreds of random digits... they activate regions of the brain normally dedicated to spatial navigation...",
          "q": "What medical technology did researchers use to monitor brain activity in memory competitors?",
          "o": [
            "Functional Magnetic Resonance Imaging (fMRI)",
            "X-ray tomography",
            "Electrocardiogram (ECG)",
            "Ultrasound imaging"
          ],
          "a": 0,
          "x": "Trích đoạn B: 'Functional Magnetic Resonance Imaging (fMRI) scans reveal...'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: To construct a Memory Palace, a practitioner selects a thoroughly familiar architectural environment, such as their childhood home...",
          "q": "What type of location is recommended when building an initial Memory Palace?",
          "o": [
            "A place the practitioner knows intimately",
            "A completely imaginary fantasy castle",
            "A busy airport terminal visited only once",
            "A dark featureless underground room"
          ],
          "a": 0,
          "x": "Đoạn C nói: 'selects a thoroughly familiar architectural environment, such as their childhood home...' (một địa điểm cực kỳ quen thuộc)."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: Abstract information to be remembered is then converted into vivid, eccentric, or emotionally charged mental images...",
          "q": "The word 'eccentric' in Paragraph C is closest in meaning to:",
          "o": [
            "unconventional and odd",
            "dull and boring",
            "invisible and hidden",
            "logical and numerical"
          ],
          "a": 0,
          "x": "Từ 'eccentric' mang nghĩa độc đáo, kỳ dị, khác thường = 'unconventional and odd'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph D: However, cognitive scientists counter that working memory and internal knowledge structures are foundational to critical reasoning and creative problem-solving...",
          "q": "Why do cognitive scientists argue that internal memory retention is still vital today?",
          "o": [
            "It serves as the foundation for creative problem-solving and critical reasoning",
            "It saves electrical power on smartphones",
            "It guarantees instant employment in technology firms",
            "It prevents biological ageing in the eye muscles"
          ],
          "a": 0,
          "x": "Trích đoạn D: 'internal knowledge structures are foundational to critical reasoning and creative problem-solving'."
        },
        {
          "lv": "B1",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph D: ...warning that excessive reliance on external digital repositories may erode our capacity for sustained contemplation.",
          "q": "The word 'erode' in Paragraph D most nearly means:",
          "o": [
            "gradually weaken and wear away",
            "rapidly accelerate and expand",
            "organize into folders",
            "photocopy accurately"
          ],
          "a": 0,
          "x": "Từ 'erode' mang nghĩa xói mòn, bào mòn dần = 'gradually weaken and wear away'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary (Questions 13–18)\nComplete the notes below using ONE WORD ONLY from the passage:\n\nParagraph A: 'Ancient orators in Classical Greece and Rome were renowned for delivering speeches lasting several hours without relying on written notes. Their secret lay in a spatial mnemonic technique known as the Method of Loci...'",
          "q": "Classical Greek and Roman ___ famously delivered multi-hour speeches from memory.",
          "a": "orators",
          "x": "Từ trong bài đọc: 'Ancient orators in Classical Greece and Rome...' (những nhà hùng biện cổ đại)."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph A: 'According to historical legend, the poet Simonides of Ceos originated this method around 500 BCE...'",
          "q": "Historical tradition credits a poet named ___ with creating the spatial memory technique.",
          "a": "Simonides",
          "x": "Tên riêng trong bài đọc: 'the poet Simonides of Ceos'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'Instead, they activate regions of the brain normally dedicated to spatial navigation, particularly the hippocampus and the retrosplenial cortex.'",
          "q": "Memory experts stimulate regions of the human brain normally used for spatial ___.",
          "a": "navigation",
          "x": "Từ trong bài đọc: 'regions of the brain normally dedicated to spatial navigation'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'To construct a Memory Palace, a practitioner selects a thoroughly familiar architectural environment, such as their childhood home...'",
          "q": "A practitioner often selects their childhood ___ as a physical layout for loci.",
          "a": "home",
          "x": "Từ trong bài đọc: 'such as their childhood home'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'When recalling the information, the practitioner takes an imaginary stroll through the loci, retrieving each item in its exact order.'",
          "q": "To recall items, the memoriser visualizes an imaginary ___ through the designated rooms.",
          "a": "stroll|walk",
          "x": "Từ trong bài đọc: 'the practitioner takes an imaginary stroll through the loci'."
        },
        {
          "lv": "B1",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph D: 'However, cognitive scientists counter that working memory and internal knowledge structures are foundational to critical reasoning and creative problem-solving...'",
          "q": "Scientists emphasize that working memory is vital for creative ___.",
          "a": "problem-solving|reasoning",
          "x": "Từ trong bài đọc: 'creative problem-solving'."
        }
      ]
    }
  ],
  "B2": [
    {
      "id": "mock-b2-3",
      "level": "B2",
      "title": "TOEIC ETS Advanced Master Test 1 (Target 750-850+)",
      "category": "toeic",
      "target": "TOEIC 750 - 850+",
      "desc": "24 câu hỏi Part 5 & 6 nâng cao: Báo cáo tài chính quý, nghị quyết hội đồng quản trị, đảo ngữ, giả định cách & cấu trúc phức hợp.",
      "timeLimit": 30,
      "questions": [
        {
          "lv": "B2",
          "t": "mc",
          "q": "___ you encounter any technical complications during software deployment, please contact the IT helpdesk immediately.",
          "o": [
            "Should",
            "Were",
            "Had",
            "Unless"
          ],
          "a": 0,
          "x": "Cấu trúc đảo ngữ câu điều kiện loại 1: 'Should + S + V(inf)' = If you encounter... Trong đề thi TOEIC điểm cao, đảo ngữ với 'Should' xuất hiện thường xuyên trong văn bản công sở trang trọng."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The auditing committee insisted that the chief financial officer ___ all expenditure receipts before Friday.",
          "o": [
            "submits",
            "submit",
            "submitted",
            "submitting"
          ],
          "a": 1,
          "x": "Cấu trúc giả định thức (Subjunctive mood) sau động từ yêu cầu/khuyên bảo: 'insisted that + S + (should) V(nguyên mẫu)' → 'submit'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The merger was finalized strictly in ___ with international antitrust regulations.",
          "o": [
            "accordance",
            "accord",
            "according",
            "accordingly"
          ],
          "a": 0,
          "x": "Cụm giới từ cố định: 'in accordance with' (phù hợp với / tuân thủ theo các quy định chống độc quyền quốc tế)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The corporate restructuring plan was met with skepticism, ___ its long-term benefits were clearly articulated.",
          "o": [
            "even though",
            "in spite of",
            "despite",
            "as a result"
          ],
          "a": 0,
          "x": "Sau chỗ trống là một mệnh đề hoàn chỉnh (S: 'its long-term benefits' + V: 'were clearly articulated') biểu đạt quan hệ tương phản → dùng liên từ 'even though'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Sales representatives are reminded that client confidentiality agreements are binding ___ employment termination.",
          "o": [
            "subsequent to",
            "in spite",
            "regarding to",
            "on behalf"
          ],
          "a": 0,
          "x": "'subsequent to' = after / following (ngay cả sau khi chấm dứt hợp đồng lao động). Cụm giới từ trang trọng phổ biến trong hợp đồng pháp lý thương mại."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The vice president spoke so ___ regarding market volatility that foreign investors felt substantially reassured.",
          "o": [
            "persuasive",
            "persuasively",
            "persuasion",
            "persuaded"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho động từ 'spoke' (nói) trong cấu trúc 'so + adv + that' cần một phó từ → 'persuasively' (nói một cách đầy thuyết phục)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Had the procurement team evaluated supplier quotes earlier, the shipment delays ___ avoided.",
          "o": [
            "could have been",
            "can be",
            "would be",
            "were"
          ],
          "a": 0,
          "x": "Đảo ngữ câu điều kiện loại 3: 'Had + S + V3/ed ..., S + would/could + have been + V3/ed' (đã có thể được tránh khỏi)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The executive committee commended Ms. Zhao for her ___ contributions to sustainable energy research.",
          "o": [
            "exemplify",
            "exemplary",
            "exemplification",
            "exemplifyingly"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho danh từ 'contributions' cần một tính từ → 'exemplary contributions' (những đóng góp mẫu mực / gương mẫu)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The new manufacturing plant is situated in an area with convenient access to ___ sea and air transit hubs.",
          "o": [
            "both",
            "either",
            "neither",
            "all"
          ],
          "a": 0,
          "x": "Cặp liên từ song hành: 'both A and B' ('both sea and air transit hubs': cả cảng biển lẫn trung tâm hàng không)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Under no circumstances ___ confidential patent documentation be removed from the secured archive.",
          "o": [
            "should",
            "ought",
            "must",
            "have to"
          ],
          "a": 0,
          "x": "Đảo ngữ với cụm từ phủ định đứng đầu câu: 'Under no circumstances + should / may + S + be + V3/ed' (Trong bất kỳ hoàn cảnh nào cũng không được phép...)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The updated financial software makes ___ possible to generate comprehensive cash flow models in seconds.",
          "o": [
            "it",
            "this",
            "that",
            "them"
          ],
          "a": 0,
          "x": "Cấu trúc tân ngữ giả: 'make IT possible + to-V' (khiến cho việc tạo mô hình dòng tiền trở nên khả thi)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Despite initial technical obstacles, the research division ___ in patenting their synthetic polymer.",
          "o": [
            "succeeded",
            "managed",
            "achieved",
            "accomplished"
          ],
          "a": 0,
          "x": "Cấu trúc đi với giới từ 'in + V-ing': 'succeed in doing something'. 'manage' đi với 'to-V', 'achieve/accomplish' đi trực tiếp với tân ngữ danh từ."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The company's quarterly revenue figures were ___ higher than consensus Wall Street estimates.",
          "o": [
            "considerable",
            "considerably",
            "consideration",
            "considering"
          ],
          "a": 1,
          "x": "Bổ nghĩa cho tính từ so sánh 'higher' cần phó từ mức độ → 'considerably higher' (cao hơn đáng kể)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Employees are strictly forbidden from sharing company credentials ___ authorized by corporate IT security.",
          "o": [
            "unless",
            "if",
            "because",
            "despite"
          ],
          "a": 0,
          "x": "'unless + phân từ rút gọn' = unless they are authorized (trừ khi được cấp phép bởi an ninh thông tin công ty)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The seminar facilitator provided ___ feedback on each participant's sales negotiation simulation.",
          "o": [
            "constructive",
            "constructively",
            "construction",
            "construct"
          ],
          "a": 0,
          "x": "Đứng trước danh từ 'feedback' cần tính từ bổ nghĩa → 'constructive feedback' (những phản hồi mang tính xây dựng)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Neither of the proposed marketing strategies ___ feasible within our existing fiscal constraints.",
          "o": [
            "is",
            "are",
            "were",
            "have been"
          ],
          "a": 0,
          "x": "Quy tắc ngữ pháp chuẩn: 'Neither of + danh từ số nhiều' đi với động từ số ít 'is feasible'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\nRead the following excerpt from a shareholder letter:\n\nTo Our Valued Shareholders,\nFiscal year 2024 has marked a pivotal milestone in the strategic trajectory of Vantage Global Logistics. Through calculated investments in automated fulfillment networks, we have accelerated delivery fulfillment times while ___ (17) operational expenditure by fourteen percent.",
          "q": "Question 17: Select the best word for blank (17).",
          "o": [
            "curtailing",
            "curtailed",
            "curtailment",
            "curtail"
          ],
          "a": 0,
          "x": "Cấu trúc rút gọn đồng chủ ngữ sau liên từ 'while + V-ing' ('while curtailing operational expenditure': trong khi đồng thời cắt giảm chi phí vận hành)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thư cổ đông tiếp tục)\nOur expansion into Southeast Asian emerging markets has yielded results that substantially ___ (18) our initial projections. Customer acquisition rates in Vietnam and Indonesia expanded by over thirty-five percent year-over-year.",
          "q": "Question 18: Select the best verb for blank (18).",
          "o": [
            "surpassed",
            "surpasses",
            "surpassing",
            "surpass"
          ],
          "a": 0,
          "x": "Hành động đã hoàn thành trong năm tài chính vừa qua → Quá khứ đơn 'surpassed' (vượt qua các dự báo ban đầu)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thư cổ đông tiếp tục)\nLooking ahead, we intend to allocate capital towards autonomous electric freight vehicles. ___ (19), our engineering division is partnering with premier battery manufacturers to ensure fleet reliability.",
          "q": "Question 19: Select the best transitional phrase for blank (19).",
          "o": [
            "To this end",
            "In contrast",
            "Conversely",
            "On the other hand"
          ],
          "a": 0,
          "x": "'To this end' = Để đạt được mục tiêu này (liên kết kế hoạch điện hóa phương tiện với việc hợp tác sản xuất pin)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thư cổ đông tiếp tục)\n___ (20). We remain deeply grateful for your steadfast confidence in our executive leadership.\n\nSincerely,\nArthur Pendelton\nChief Executive Officer",
          "q": "Question 20: Select the sentence that best fits blank (20).",
          "o": [
            "We believe these continuous innovations will deliver sustained dividend growth.",
            "All manufacturing facilities will cease operations indefinitely due to supply constraints.",
            "Shareholders are requested to surrender their voting proxies immediately.",
            "Quarterly dividends for the upcoming period have been entirely cancelled."
          ],
          "a": 0,
          "x": "Thông điệp lạc quan kết thư cổ đông của CEO: 'We believe these continuous innovations will deliver sustained dividend growth' (Chúng tôi tin rằng những cải tiến liên tục này sẽ mang lại sự tăng trưởng cổ tức bền vững)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\nRead the following board resolution excerpt:\n\nRESOLUTION OF THE BOARD OF DIRECTORS\nWhereas, OmniCorp intends to strengthen its environmental, social, and corporate governance (ESG) oversight; and\nWhereas, international compliance standards now mandate ___ (21) disclosures of carbon emissions across all supply tiers;",
          "q": "Question 21: Select the best adjective for blank (21).",
          "o": [
            "rigorous",
            "rigorously",
            "rigor",
            "rigorousness"
          ],
          "a": 0,
          "x": "Bổ nghĩa cho danh từ 'disclosures' (các bản công bố thông tin) cần một tính từ → 'rigorous disclosures' (những công bố thông tin nghiêm ngặt/chặt chẽ)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Nghị quyết tiếp tục)\nNow, therefore, be it resolved that the Corporation shall establish a Sustainability Committee, whose members shall be appointed by majority vote. This committee shall be endowed with the full authority to ___ (22) third-party environmental audits without prior executive clearance.",
          "q": "Question 22: Select the best verb for blank (22).",
          "o": [
            "commission",
            "commissioning",
            "commissioned",
            "commissions"
          ],
          "a": 0,
          "x": "Sau 'the authority to' cần động từ nguyên thể → 'to commission' (ủy thác / chỉ định thực hiện các cuộc kiểm toán môi trường từ bên thứ ba)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Nghị quyết tiếp tục)\nThe committee will present its inaugural assessment to shareholders at the annual meeting in Zurich. ___ (23), regular updates will be published quarterly on the corporate investor portal.",
          "q": "Question 23: Select the best transition for blank (23).",
          "o": [
            "In the interim",
            "Otherwise",
            "Nevertheless",
            "Despite"
          ],
          "a": 0,
          "x": "'In the interim' = In the meantime (Trong khoảng thời gian chờ đợi hội nghị thường niên ở Zurich, các bản tin cập nhật định kỳ sẽ được xuất bản hàng quý)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Nghị quyết tiếp tục)\n___ (24).\n\nAdopted by unanimous vote of the Board of Directors on October 28.",
          "q": "Question 24: Select the sentence that best fits blank (24).",
          "o": [
            "Any policy amendments proposed by the committee must receive formal board ratification.",
            "All executive stock options are hereby deemed void and uncollectible.",
            "Directors who fail to attend will be dismissed without compensation.",
            "The Zurich headquarters building has been leased to an external holding company."
          ],
          "a": 0,
          "x": "Quy định pháp lý chuẩn trong nghị quyết hội đồng quản trị: 'Any policy amendments proposed by the committee must receive formal board ratification' (Bất kỳ sửa đổi chính sách nào do ủy ban đề xuất đều phải nhận được sự phê chuẩn chính thức của HĐQT)."
        }
      ]
    },
    {
      "id": "mock-b2-4",
      "level": "B2",
      "title": "TOEIC ETS Advanced Master Test 2 (Target 850-990)",
      "category": "toeic",
      "target": "TOEIC 850 - 990 (Max)",
      "desc": "24 câu hỏi Part 5 & 6 đỉnh cao: Đàm phán thương mại quốc tế, tái cấu trúc chuỗi cung ứng, từ vựng phân hóa cao & bẫy ngữ pháp ETS.",
      "timeLimit": 30,
      "questions": [
        {
          "lv": "B2",
          "t": "mc",
          "q": "The contractual negotiations reached an impasse, as neither party was willing to make ___ on key royalty percentages.",
          "o": [
            "concessions",
            "concede",
            "concessionary",
            "conceding"
          ],
          "a": 0,
          "x": "Cụm danh từ thành ngữ trong đàm phán hợp đồng thương mại: 'make concessions' (nhượng bộ / thỏa hiệp về phần trăm tiền bản quyền)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The lead counsel advised that the patent dispute be settled out of court, lest protracted litigation ___ the company's brand prestige.",
          "o": [
            "damage",
            "damages",
            "damaged",
            "damaging"
          ],
          "a": 0,
          "x": "Cấu trúc giả định thức với 'lest' (vì sợ rằng / e rằng): 'lest + S + (should) V(nguyên mẫu)' → 'damage'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The senior economist cautioned that the decline in consumer discretionary spending was by no means ___.",
          "o": [
            "negligible",
            "negligent",
            "neglect",
            "negligently"
          ],
          "a": 0,
          "x": "Phân biệt từ vựng dễ nhầm lẫn: 'negligible' (nhỏ không đáng kể) vs 'negligent' (cẩu thả/bỏ bê). 'by no means negligible': hoàn toàn không hề nhỏ / không thể xem thường."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Rarely ___ such unprecedented surge in commercial demand for renewable microgrid components.",
          "o": [
            "has the industry witnessed",
            "the industry has witnessed",
            "witnessed the industry",
            "industry witnessed"
          ],
          "a": 0,
          "x": "Đảo ngữ với phó từ phủ định đứng đầu câu: 'Rarely + trợ động từ + S + V' → 'has the industry witnessed'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The CEO was commended for navigating the enterprise through turbulence with ___ composure.",
          "o": [
            "unflappable",
            "unflappably",
            "flap",
            "flapping"
          ],
          "a": 0,
          "x": "Bổ nghĩa cho danh từ 'composure' (sự điềm tĩnh) cần một tính từ cao cấp → 'unflappable composure' (sự điềm tĩnh không gì lay chuyển nổi)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "All overseas branch expenditures must be reconciled in strict ___ with the parent corporation's accounting standards.",
          "o": [
            "conformity",
            "conforming",
            "conform",
            "conformist"
          ],
          "a": 0,
          "x": "'in strict conformity with' = in accordance with (tuân thủ nghiêm ngặt theo các tiêu chuẩn kế toán của tập đoàn mẹ)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The advisory board recommended that management ___ the deployment of redundant server clusters.",
          "o": [
            "expedite",
            "expedites",
            "expedited",
            "expediting"
          ],
          "a": 0,
          "x": "Cấu trúc Subjunctive: 'recommended that + S + V(nguyên mẫu)' → 'expedite' (đẩy nhanh tiến độ triển khai)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Had the compliance department detected the bookkeeping discrepancy earlier, the regulatory audit ___ unnecessary.",
          "o": [
            "would have been",
            "will be",
            "was",
            "had been"
          ],
          "a": 0,
          "x": "Đảo ngữ điều kiện loại 3: 'Had + S + V3/ed ..., S + would have been + adj'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The human resources panel found Ms. Varma to be ___ qualified for the director of global communications role.",
          "o": [
            "exceptionally",
            "exceptional",
            "exceptions",
            "excepting"
          ],
          "a": 0,
          "x": "Bổ nghĩa cho tính từ 'qualified' cần một phó từ chỉ mức độ xuất chúng → 'exceptionally qualified' (đủ tiêu chuẩn một cách vượt bậc)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The quarterly earnings announcement was accompanied by a ___ review of regional supply chain vulnerabilities.",
          "o": [
            "comprehensive",
            "comprehensible",
            "comprehend",
            "comprehending"
          ],
          "a": 0,
          "x": "Phân biệt từ vựng: 'comprehensive' (toàn diện, sâu rộng) vs 'comprehensible' (có thể hiểu được). Ở đây cần bản đánh giá toàn diện → 'comprehensive review'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Not until the external audit was officially concluded ___ authorize dividend distributions.",
          "o": [
            "did the board",
            "the board did",
            "the board had",
            "had the board"
          ],
          "a": 0,
          "x": "Đảo ngữ với 'Not until + clause + auxiliary + S + V' → 'did the board authorize'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Mr. Sterling delivered an address that was both intellectually rigorous ___ accessible to non-technical stakeholders.",
          "o": [
            "and",
            "or",
            "but",
            "nor"
          ],
          "a": 0,
          "x": "Cặp liên từ tương quan: 'both ... and ...' ('both intellectually rigorous AND accessible')."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The international courier service guarantees delivery within twenty-four hours, barring unforeseen weather ___.",
          "o": [
            "disruptions",
            "disrupt",
            "disruptive",
            "disrupting"
          ],
          "a": 0,
          "x": "Sau tính từ 'weather' và phân từ giới từ 'barring' (trừ khi có) cần danh từ số nhiều → 'disruptions' (các gián đoạn do thời tiết)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The firm's proprietary battery chemistry offers an energy density substantially superior ___ that of conventional lithium-ion cells.",
          "o": [
            "to",
            "than",
            "from",
            "with"
          ],
          "a": 0,
          "x": "Tính từ gốc Latin 'superior' luôn đi với giới từ 'to', không đi với 'than' ('superior to that of...')."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "Corporate travel policies specify that executive flights exceeding eight hours are eligible for business class ___.",
          "o": [
            "upgrades",
            "upgrading",
            "upgraded",
            "upgradeable"
          ],
          "a": 0,
          "x": "Cụm danh từ kép: 'business class upgrades' (nâng hạng vé thương gia)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "q": "The new CEO expressed unwavering optimism, ___ that consumer market indicators remained volatile.",
          "o": [
            "notwithstanding",
            "provided",
            "as long as",
            "supposing"
          ],
          "a": 0,
          "x": "'notwithstanding that...' = despite the fact that (mặc dù thực tế là các chỉ số thị trường vẫn biến động mạnh)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\nRead the policy excerpt on international trade compliance:\n\nGLOBAL TRADE ADVISORY: TARIFF RECLASSIFICATION\nEffective January 1, customs authorities in several major maritime hubs will enforce revised harmonized tariff schedules. Importers and freight forwarders are advised that documentation discrepancies will result in mandatory port-of-entry impoundment and ___ (17) administrative penalties.",
          "q": "Question 17: Select the best adjective for blank (17).",
          "o": [
            "substantial",
            "substantially",
            "substantiate",
            "substance"
          ],
          "a": 0,
          "x": "Bổ nghĩa cho cụm danh từ 'administrative penalties' (các hình phạt hành chính) cần tính từ → 'substantial' (đáng kể / nặng nề)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thông báo tiếp tục)\nTo facilitate compliance, our trade compliance portal has been updated with an algorithmic classification validator. Shippers can cross-reference harmonized tariff codes with current customs schedules to confirm that declarations are ___ (18) accurate.",
          "q": "Question 18: Select the best adverb for blank (18).",
          "o": [
            "meticulously",
            "meticulous",
            "meticulousness",
            "meticulouslyness"
          ],
          "a": 0,
          "x": "Bổ nghĩa cho tính từ 'accurate' cần phó từ → 'meticulously accurate' (chính xác một cách tỉ mỉ/tuyệt đối)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thông báo tiếp tục)\n___ (19), our customs legal taskforce will host weekly webinars throughout November to assist enterprise clients with complex cross-border documentation.",
          "q": "Question 19: Select the best transition for blank (19).",
          "o": [
            "In parallel",
            "In contrast",
            "Conversely",
            "On the contrary"
          ],
          "a": 0,
          "x": "'In parallel' = Song song với điều đó (kết nối việc nâng cấp hệ thống với việc mở thêm các hội thảo hướng dẫn doanh nghiệp)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 17–20)\n(Thông báo tiếp tục)\n___ (20). Thank you for your continued adherence to global maritime compliance standards.",
          "q": "Question 20: Select the sentence that best fits blank (20).",
          "o": [
            "We strongly urge all logistics managers to audit their export dossiers immediately.",
            "All cargo shipping rates will be quadrupled without prior customer notification.",
            "Maritime shipping has been suspended along all European shipping lanes.",
            "Customs documentation is no longer required for containerized cargo."
          ],
          "a": 0,
          "x": "Khuyến nghị hành động khẩn thiết cho các nhà quản lý logistics: 'We strongly urge all logistics managers to audit their export dossiers immediately' (Chúng tôi tha thiết đề nghị mọi quản lý logistics rà soát hồ sơ xuất khẩu ngay lập tức)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\nRead the executive appointment announcement:\n\nANNOUNCEMENT: APPOINTMENT OF CHIEF OPERATING OFFICER\nThe Board of Directors is pleased to announce the appointment of Dr. Elena Rostova as Chief Operating Officer, effective December 1. Dr. Rostova brings over two decades of transformative leadership experience in advanced semiconductor manufacturing and international supply chain ___ (21).",
          "q": "Question 21: Select the best noun for blank (21).",
          "o": [
            "optimization",
            "optimize",
            "optimizing",
            "optimized"
          ],
          "a": 0,
          "x": "Song hành với cụm danh từ 'semiconductor manufacturing' sau liên từ 'and' cần danh từ → 'supply chain optimization' (tối ưu hóa chuỗi cung ứng)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Thông báo tiếp tục)\nPrior to joining our organization, Dr. Rostova spearheaded the operational turnaround at Silicon Dynamics, where she successfully oversaw the construction of three cleanroom fabrication plants on time and ___ (22) budget.",
          "q": "Question 22: Select the best preposition for blank (22).",
          "o": [
            "under",
            "down",
            "below",
            "beneath"
          ],
          "a": 0,
          "x": "Cụm thành ngữ kinh doanh quen thuộc: 'on time and under budget' (đúng hạn và dưới mức ngân sách dự toán)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Thông báo tiếp tục)\nIn her new capacity, Dr. Rostova will report directly to the Chief Executive Officer and will supervise global fabrication, procurement, and automated logistics. ___ (23), she will lead our upcoming enterprise resource planning (ERP) system integration.",
          "q": "Question 23: Select the best connector for blank (23).",
          "o": [
            "Additionally",
            "Conversely",
            "On the other hand",
            "Nonetheless"
          ],
          "a": 0,
          "x": "Bổ sung thêm nhiệm vụ quan trọng: 'Additionally' (Thêm vào đó, cô ấy sẽ dẫn dắt việc tích hợp hệ thống ERP toàn doanh nghiệp...)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "TOEIC Part 6: Text Completion (Questions 21–24)\n(Thông báo tiếp tục)\n___ (24). Please join us in welcoming Dr. Rostova to the executive leadership team.\n\nBoard of Directors, Apex Microelectronics",
          "q": "Question 24: Select the sentence that best fits blank (24).",
          "o": [
            "A town hall reception will be held on December 5 to introduce her to headquarters staff.",
            "Employees are instructed to cease communication with the operations department.",
            "All current manufacturing projects will be terminated immediately.",
            "The company will relocate its global headquarters to an undisclosed location."
          ],
          "a": 0,
          "x": "Thông báo sự kiện giao lưu nội bộ chào đón lãnh đạo mới: 'A town hall reception will be held on December 5 to introduce her to headquarters staff'."
        }
      ]
    },
    {
      "id": "mock-b2-5",
      "level": "B2",
      "title": "IELTS Academic Master Reading Test 1 (Band 7.0 - 8.0)",
      "category": "ielts",
      "target": "IELTS Band 7.0 - 8.0",
      "desc": "18 câu hỏi: Bài đọc học thuật 'Deep-Sea Hydrothermal Vents & Chemosynthesis' với T/F/NG, Trắc nghiệm suy luận & Tóm tắt chuyên sâu.",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage: Deep-Sea Hydrothermal Vents & The Origins of Life\n\nParagraph A: Prior to 1977, marine biologists operated under the foundational assumption that all life on Earth was ultimately dependent upon solar radiation. Photosynthesis was universally perceived as the sole energetic engine powering biological food webs, with sunlight driving primary organic synthesis in surface waters and organic detritus filtering down into the abyssal depths. This paradigm was shattered when the research submersible Alvin explored the Galapagos Rift, an ocean floor spreading center located more than 2,500 meters below sea level. There, scientists discovered towering mineral chimneys ejecting superheated, mineral-laden fluid into the frigid abyss, surrounded by flourishing, high-density ecosystems featuring giant tube worms, ghost-white crabs, and colossal bivalves.",
          "q": "Before 1977, the prevailing scientific consensus maintained that all biological ecosystems required sunlight.",
          "a": "T",
          "x": "Đoạn A khẳng định: 'Prior to 1977, marine biologists operated under the foundational assumption that all life on Earth was ultimately dependent upon solar radiation' → True."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph A: ...This paradigm was shattered when the research submersible Alvin explored the Galapagos Rift, an ocean floor spreading center located more than 2,500 meters below sea level. There, scientists discovered towering mineral chimneys ejecting superheated, mineral-laden fluid into the frigid abyss, surrounded by flourishing, high-density ecosystems...",
          "q": "The Galapagos Rift was explored by robotic drones without any human crew members.",
          "a": "F",
          "x": "Đoạn A nói chuyến thám hiểm được thực hiện bởi 'research submersible Alvin' (tàu ngầm có người lái Alvin - một biểu tượng thám hiểm hải dương học), không phải máy bay/tàu lặn không người lái → False."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: Subsequent biochemical analysis revealed that these extreme benthic communities are sustained not by photosynthesis, but by chemosynthesis. Chemotrophic bacteria utilize the oxidation of reduced sulfur compounds, primarily toxic hydrogen sulfide dissolving out of the volcanic basalt, to fix inorganic carbon into metabolic carbohydrates. Remarkable symbiotic relationships have evolved: the giant hydrothermal worm Riftia pachyptila lacks a mouth, gut, or digestive tract entirely. Instead, its vascularized red plume absorbs sulfide and oxygen from the hydrothermal plumes, transporting them via hemoglobin to a specialized internal organ called the trophosome, where billions of endosymbiotic bacteria generate nutrients for the host organism.",
          "q": "Giant tube worms digest smaller marine organisms using an internal stomach cavity.",
          "a": "F",
          "x": "Đoạn B khẳng định sâu ống khổng lồ: 'lacks a mouth, gut, or digestive tract entirely' (hoàn toàn không có miệng, ruột hay đường tiêu hóa) mà sống dựa vào vi khuẩn nội cộng sinh → False."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: ...transporting them via hemoglobin to a specialized internal organ called the trophosome, where billions of endosymbiotic bacteria generate nutrients for the host organism.",
          "q": "The specialized organ 'trophosome' in tube worms houses colonies of symbiotic bacteria.",
          "a": "T",
          "x": "Đoạn B viết: 'a specialized internal organ called the trophosome, where billions of endosymbiotic bacteria generate nutrients...' → True."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: The discovery of vent ecosystems has profound ramifications for abiogenesis—the origin of life on primitive Earth. Astrobiologists hypothesize that the early planetary surface was periodically bombarded by sterilizing asteroids and drenched in lethal ultraviolet radiation prior to the formation of the ozone layer. Protected beneath kilometers of ocean water, stable alkaline hydrothermal vents could have functioned as organic incubators. The porous micro-cavities within iron-sulfur mineral structures could have concentrated primitive prebiotic molecules, driving the synthesis of fatty acids, amino acids, and primitive RNA.",
          "q": "Primitive Earth's surface was shielded by a dense protective ozone layer four billion years ago.",
          "a": "F",
          "x": "Đoạn C nói rõ bề mặt Trái Đất cổ đại bị chiếu bởi bức xạ tử ngoại chết người 'prior to the formation of the ozone layer' (trước khi tầng ô-dôn được hình thành) → False."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: ...Furthermore, this opens compelling avenues for astrobiology. The discovery that thriving biospheres can flourish in complete darkness fueled by geothermal energy has made icy celestial bodies with subsurface liquid oceans—such as Jupiter's moon Europa and Saturn's moon Enceladus—promising candidates for finding extraterrestrial life.",
          "q": "NASA has already retrieved live biological specimens from the hydrothermal vents of Europa.",
          "a": "NG",
          "x": "Bài đọc chỉ nói Mặt Trăng Europa của Sao Mộc là ứng viên đầy hứa hẹn để tìm kiếm sự sống ngoài Trái Đất ('promising candidates for finding extraterrestrial life'), hoàn toàn KHÔNG nói NASA đã lấy được mẫu sinh vật sống từ đó → Not Given."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph A: Prior to 1977, marine biologists operated under the foundational assumption that all life on Earth was ultimately dependent upon solar radiation. Photosynthesis was universally perceived as the sole energetic engine...",
          "q": "What was the long-standing biological assumption dismantled by the Alvin expedition?",
          "o": [
            "All biological life ultimately derives its energy from solar photosynthesis",
            "The ocean floor is completely flat and devoid of volcanic activity",
            "Crustaceans cannot survive in water temperatures above 4°C",
            "Bacteria require gaseous nitrogen to synthesize amino acids"
          ],
          "a": 0,
          "x": "Đoạn A nêu: 'Prior to 1977, marine biologists operated under the foundational assumption that all life on Earth was ultimately dependent upon solar radiation'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph B: Chemotrophic bacteria utilize the oxidation of reduced sulfur compounds, primarily toxic hydrogen sulfide dissolving out of the volcanic basalt, to fix inorganic carbon into metabolic carbohydrates.",
          "q": "What chemical compound serves as the primary energetic fuel for chemosynthesis at hydrothermal vents?",
          "o": [
            "Hydrogen sulfide",
            "Sodium chloride",
            "Methane gas",
            "Calcium carbonate"
          ],
          "a": 0,
          "x": "Trích đoạn B: 'primarily toxic hydrogen sulfide dissolving out of the volcanic basalt'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph B: ...where billions of endosymbiotic bacteria generate nutrients for the host organism.",
          "q": "The term 'endosymbiotic' refers to an ecological relationship in which:",
          "o": [
            "One organism lives symbiotically within the body or cells of another",
            "Two rival species engage in predatory competition for territory",
            "Organisms migrate thousands of miles seasonally to breed",
            "Bacteria destroy host tissue through infectious toxicity"
          ],
          "a": 0,
          "x": "'Endosymbiosis' (nội cộng sinh) chỉ mối quan hệ tương hỗ trong đó vi khuẩn sinh sống trực tiếp bên trong cơ thể sinh vật chủ và đôi bên cùng có lợi."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: The porous micro-cavities within iron-sulfur mineral structures could have concentrated primitive prebiotic molecules...",
          "q": "The word 'prebiotic' in Paragraph C refers to chemical entities that:",
          "o": [
            "existed prior to the emergence of biological life",
            "cure bacterial infections in human patients",
            "accelerate decomposition of dead organic matter",
            "derive exclusively from synthetic laboratory plastic"
          ],
          "a": 0,
          "x": "Tiền tố 'pre-' (trước) + 'biotic' (sự sống) = 'prebiotic' (tiền sinh học / tồn tại trước khi sự sống hữu cơ sơ khai xuất hiện)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: Protected beneath kilometers of ocean water, stable alkaline hydrothermal vents could have functioned as organic incubators.",
          "q": "Why were deep-sea hydrothermal vents uniquely protected environments on early Earth?",
          "o": [
            "Massive ocean depth shielded them from asteroid impacts and cosmic ultraviolet radiation",
            "They were frozen in permanent glacial ice caps",
            "Volcanic steam repelled all incoming meteors",
            "Water currents extinguished solar flares completely"
          ],
          "a": 0,
          "x": "Đoạn C giải thích: 'Protected beneath kilometers of ocean water... Astrobiologists hypothesize that the early planetary surface was periodically bombarded by sterilizing asteroids and drenched in lethal ultraviolet radiation'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: ...has made icy celestial bodies with subsurface liquid oceans—such as Jupiter's moon Europa and Saturn's moon Enceladus—promising candidates for finding extraterrestrial life.",
          "q": "Which planetary bodies are highlighted as promising targets in astrobiology due to subsurface ocean vents?",
          "o": [
            "Europa and Enceladus",
            "Mars and Venus",
            "Mercury and the Moon",
            "Titan and Pluto"
          ],
          "a": 0,
          "x": "Trích đoạn C: 'such as Jupiter's moon Europa and Saturn's moon Enceladus'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary (Questions 13–18)\nComplete the technical summary below using ONE WORD ONLY from the passage:\n\nParagraph A: 'This paradigm was shattered when the research submersible Alvin explored the Galapagos Rift, an ocean floor spreading center located more than 2,500 meters below sea level. There, scientists discovered towering mineral chimneys ejecting superheated, mineral-laden fluid...'",
          "q": "Scientists first discovered hydrothermal vent chimneys using the research submersible ___.",
          "a": "Alvin",
          "x": "Tên riêng con tàu ngầm trong bài đọc: 'the research submersible Alvin'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'Subsequent biochemical analysis revealed that these extreme benthic communities are sustained not by photosynthesis, but by chemosynthesis.'",
          "q": "Hydrothermal biological communities derive their energy not from sunlight, but through ___.",
          "a": "chemosynthesis",
          "x": "Từ trong bài đọc: 'sustained not by photosynthesis, but by chemosynthesis'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'Instead, its vascularized red plume absorbs sulfide and oxygen from the hydrothermal plumes, transporting them via hemoglobin to a specialized internal organ called the trophosome...'",
          "q": "Giant tube worms transport absorbed compounds to a specialized internal organ called the ___.",
          "a": "trophosome",
          "x": "Thuật ngữ cơ quan trong bài đọc: 'a specialized internal organ called the trophosome'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'The discovery of vent ecosystems has profound ramifications for abiogenesis—the origin of life on primitive Earth.'",
          "q": "The study of hydrothermal vents provides crucial insights into ___, the scientific inquiry into the origins of life.",
          "a": "abiogenesis",
          "x": "Thuật ngữ học thuật trong bài đọc: 'abiogenesis—the origin of life on primitive Earth'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'Protected beneath kilometers of ocean water, stable alkaline hydrothermal vents could have functioned as organic incubators.'",
          "q": "Scientists postulate that alkaline hydrothermal vents acted as organic ___ on early Earth.",
          "a": "incubators",
          "x": "Từ trong bài đọc: 'could have functioned as organic incubators'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: '...The porous micro-cavities within iron-sulfur mineral structures could have concentrated primitive prebiotic molecules, driving the synthesis of fatty acids, amino acids, and primitive RNA.'",
          "q": "Mineral cavities facilitated the synthesis of amino acids and primitive strands of ___.",
          "a": "RNA",
          "x": "Phân tử di truyền sơ khai trong bài đọc: 'primitive RNA'."
        }
      ]
    },
    {
      "id": "mock-b2-6",
      "level": "B2",
      "title": "IELTS Academic Master Reading Test 2 (Band 7.5 - 8.5+)",
      "category": "ielts",
      "target": "IELTS Band 7.5 - 8.5+",
      "desc": "18 câu hỏi: Bài đọc học thuật 'Artificial Intelligence, Neural Networks & Creative Cognition' với T/F/NG, Trắc nghiệm suy luận & Điền từ.",
      "timeLimit": 25,
      "questions": [
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage: Artificial Intelligence, Neural Networks & The Philosophy of Creative Cognition\n\nParagraph A: For centuries, human creativity was heralded by philosophers and artists alike as the ultimate sanctuary of human exceptionalism. While mechanized automation easily surpassed human physical labor during the Industrial Revolution, the faculty to compose a moving symphony, paint an evocative landscape, or formulate a novel scientific theorem was regarded as an irreducibly conscious spark. However, the advent of generative artificial intelligence, powered by deep artificial neural networks and multi-billion-parameter large language models (LLMs), has radically destabilized this anthropocentric conviction. Machines can now compose musical concertos in the style of Bach, synthesize photorealistic artwork from textual descriptions, and engineer novel enzymatic proteins with unprecedented speed.",
          "q": "Historically, philosophers viewed artistic creation as an exclusively human attribute.",
          "a": "T",
          "x": "Đoạn A nêu: 'For centuries, human creativity was heralded by philosophers and artists alike as the ultimate sanctuary of human exceptionalism' (Nơi trú ngụ cuối cùng của thuyết loài người ngoại lệ / độc tôn) → True."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph A: ...Machines can now compose musical concertos in the style of Bach, synthesize photorealistic artwork from textual descriptions, and engineer novel enzymatic proteins with unprecedented speed.\n\nParagraph B: At the architectural core of modern generative systems lies the 'Transformer' deep learning architecture, introduced in 2017. Transformers leverage a mathematical mechanism called 'self-attention' to compute dynamic probabilistic correlations across massive datasets. Rather than processing text or pixels sequentially, attention mechanisms allow the neural network to weigh the contextual relevance of all tokens simultaneously, regardless of their distance in the sequence.",
          "q": "The Transformer deep learning architecture was invented in the 19th century.",
          "a": "F",
          "x": "Đoạn B chỉ rõ Transformer được giới thiệu vào năm 2017 ('introduced in 2017'), không phải thế kỷ 19 → False."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph B: ...Rather than processing text or pixels sequentially, attention mechanisms allow the neural network to weigh the contextual relevance of all tokens simultaneously, regardless of their distance in the sequence.",
          "q": "Self-attention mechanisms evaluate the contextual relationships among data tokens at the same time.",
          "a": "T",
          "x": "Đoạn B khẳng định: 'allow the neural network to weigh the contextual relevance of all tokens simultaneously' (đồng thời) → True."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: This rapid capability has ignited ferocious ontological debates within cognitive science. Skeptics, invoking philosopher John Searle's renowned 'Chinese Room' thought experiment, argue that generative models are merely 'stochastic parrots'. They assert that statistical manipulation of linguistic tokens does not equate to genuine comprehension, intentionality, or conscious subjective experience. A neural network does not 'feel' melancholic grief when generating an elegiac poem; it merely calculates the highest probability token sequences that human readers associate with grief.",
          "q": "Philosopher John Searle argued that mechanical manipulation of symbols demonstrates genuine mental understanding.",
          "a": "F",
          "x": "Thí nghiệm 'Căn phòng Trung Hoa' của John Searle chứng minh rằng thao tác máy móc các ký hiệu KHÔNG đồng nghĩa với sự thấu hiểu thực sự ('statistical manipulation of linguistic tokens does not equate to genuine comprehension') → Khẳng định ông ủng hộ điều ngược lại là Sai → False."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph C: ...Conversely, computational functionalists argue that human cognition may itself be an elaborate biological prediction engine. Pioneering cognitive neuroscientists propose the 'predictive processing' framework, which posits that the human brain is fundamentally a hierarchical inference machine that continuously generates and updates hypotheses to minimize sensory surprise.",
          "q": "The predictive processing theory suggests the human brain functions as an inference-based prediction machine.",
          "a": "T",
          "x": "Đoạn C nói rõ: 'predictive processing framework, which posits that the human brain is fundamentally a hierarchical inference machine...' → True."
        },
        {
          "lv": "B2",
          "t": "tfng",
          "ctx": "Reading Passage (Tiếp tục)\nParagraph D: Whatever the philosophical verdict, the economic and practical ramifications are already undeniable. Generative AI is rapidly evolving from an experimental novelty into an ubiquitous cognitive co-pilot. In software engineering, legal discovery, and pharmacology, human experts increasingly operate as directors and curators rather than sole primary producers.",
          "q": "International courts have banned all commercial use of AI in software development.",
          "a": "NG",
          "x": "Bài đọc nói AI đang trở thành trợ lý đắc lực trong kỹ thuật phần mềm, khám phá pháp lý và dược học, hoàn toàn KHÔNG nói toà án quốc tế đã cấm việc sử dụng thương mại → Not Given."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph A: For centuries, human creativity was heralded by philosophers and artists alike as the ultimate sanctuary of human exceptionalism...",
          "q": "The phrase 'human exceptionalism' in Paragraph A refers to the belief that:",
          "o": [
            "Human beings possess unique intellectual and artistic qualities distinct from all other entities",
            "Human physical stamina surpasses that of mechanical industrial engines",
            "Human language is strictly limited to phonetic speech sounds",
            "All human beings achieve identical levels of mathematical competence"
          ],
          "a": 0,
          "x": "'Human exceptionalism' (thuyết loài người ngoại lệ) chỉ niềm tin rằng con người sở hữu những phẩm chất trí tuệ và sáng tạo độc nhất vô nhị, tách biệt với mọi cỗ máy hay loài sinh vật khác."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph B: At the architectural core of modern generative systems lies the 'Transformer' deep learning architecture, introduced in 2017. Transformers leverage a mathematical mechanism called 'self-attention'...",
          "q": "What fundamental mathematical innovation underpins the Transformer architecture?",
          "o": [
            "Self-attention mechanisms",
            "Analogue magnetic tapes",
            "Mechanical gears",
            "Manual punch cards"
          ],
          "a": 0,
          "x": "Trích đoạn B: 'Transformers leverage a mathematical mechanism called self-attention'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: Skeptics, invoking philosopher John Searle's renowned 'Chinese Room' thought experiment, argue that generative models are merely 'stochastic parrots'...",
          "q": "Why do AI skeptics employ the term 'stochastic parrots' when describing generative language models?",
          "o": [
            "To emphasize that models predict statistical patterns without real comprehension",
            "To highlight that neural networks mimic bird vocalizations in tropical forests",
            "To criticize the green feathered appearance of supercomputer servers",
            "To praise the photographic memory of artificial intelligence"
          ],
          "a": 0,
          "x": "'Stochastic parrots' (những con vẹt xác suất) là thuật ngữ chỉ việc mô hình chỉ bắt chước và ghép nối xác suất các từ ngữ mà không hề có ý thức hay thấu hiểu ngữ nghĩa bên trong."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: A neural network does not 'feel' melancholic grief when generating an elegiac poem; it merely calculates the highest probability token sequences...",
          "q": "The word 'elegiac' in Paragraph C most nearly means:",
          "o": [
            "mournful and sorrowful",
            "hilarious and comic",
            "scientific and detached",
            "commercial and promotional"
          ],
          "a": 0,
          "x": "'Elegiac' mang nghĩa thê lương, bi thương, mang âm hưởng khúc bi ca = 'mournful and sorrowful'."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph C: ...which posits that the human brain is fundamentally a hierarchical inference machine that continuously generates and updates hypotheses to minimize sensory surprise.",
          "q": "According to the predictive processing framework, what is the brain's continuous evolutionary objective?",
          "o": [
            "Minimizing sensory prediction errors and surprises",
            "Memorizing every single historical event in chronological order",
            "Converting all physical sensory inputs into binary code",
            "Generating randomized electrical shocks across muscle nerves"
          ],
          "a": 0,
          "x": "Trích đoạn C: 'continuously generates and updates hypotheses to minimize sensory surprise' (giảm thiểu sai số dự đoán và bất ngờ từ giác quan)."
        },
        {
          "lv": "B2",
          "t": "mc",
          "ctx": "Reading Passage\nParagraph D: In software engineering, legal discovery, and pharmacology, human experts increasingly operate as directors and curators rather than sole primary producers.",
          "q": "How is the professional role of human experts evolving in response to AI integration?",
          "o": [
            "Transitioning into curators and strategic directors who evaluate AI outputs",
            "Leaving intellectual occupations to return entirely to agricultural manual labor",
            "Refusing to supervise computer programs on ethical grounds",
            "Writing all raw computer code manually by hand without software tools"
          ],
          "a": 0,
          "x": "Trích đoạn D: 'human experts increasingly operate as directors and curators rather than sole primary producers'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary (Questions 13–18)\nComplete the notes below using ONE WORD ONLY from the passage:\n\nParagraph A: 'For centuries, human creativity was heralded by philosophers and artists alike as the ultimate sanctuary of human exceptionalism...'",
          "q": "Historically, philosophers regarded artistic creativity as the ultimate sanctuary of human ___.",
          "a": "exceptionalism",
          "x": "Từ trong bài đọc: 'the ultimate sanctuary of human exceptionalism'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'At the architectural core of modern generative systems lies the Transformer deep learning architecture, introduced in 2017.'",
          "q": "The breakthrough deep learning architecture introduced in 2017 is named the ___.",
          "a": "Transformer",
          "x": "Tên mô hình kiến trúc trong bài đọc: 'the Transformer deep learning architecture'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph B: 'Transformers leverage a mathematical mechanism called self-attention to compute dynamic probabilistic correlations across massive datasets.'",
          "q": "Transformers compute dynamic correlations across tokens using a mechanism termed self-___.",
          "a": "attention",
          "x": "Thuật ngữ trong bài đọc: 'a mathematical mechanism called self-attention'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: 'Skeptics, invoking philosopher John Searle's renowned Chinese Room thought experiment, argue that generative models are merely stochastic parrots.'",
          "q": "Skeptical philosophers compare large language models to stochastic ___.",
          "a": "parrots",
          "x": "Từ trong bài đọc: 'are merely stochastic parrots'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph C: '...cognitive neuroscientists propose the predictive processing framework, which posits that the human brain is fundamentally a hierarchical inference machine...'",
          "q": "Functionalists view the human brain as an elaborate biological inference ___.",
          "a": "machine|engine",
          "x": "Từ trong bài đọc: 'hierarchical inference machine'."
        },
        {
          "lv": "B2",
          "t": "gap",
          "ctx": "Reading Passage Summary\nParagraph D: 'Generative AI is rapidly evolving from an experimental novelty into an ubiquitous cognitive co-pilot. In software engineering, legal discovery, and pharmacology...'",
          "q": "In high-skilled professions, generative AI tools act increasingly as a cognitive ___-pilot.",
          "a": "co-pilot|copilot",
          "x": "Từ trong bài đọc: 'ubiquitous cognitive co-pilot'."
        }
      ]
    }
  ]
};
