# tools/gen_toeic_2hours.py
import json

def make_listening_questions():
    questions = []

    # PART 1: Photographs (Questions 1 - 6)
    p1_data = [
        ("TOEIC Part 1: Photographs (Question 1)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 1. (A) A man is typing on a computer keyboard. (B) A man is adjusting his necktie. (C) A man is organizing paper files into a folder. (D) A man is drinking coffee from a ceramic mug.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch các câu: (A) Một người đàn ông đang gõ trên bàn phím máy tính. (B) Đang chỉnh cà vạt. (C) Đang xếp hồ sơ. (D) Đang uống cà phê. → Đáp án (A) miêu tả hành động chính xác."),
        
        ("TOEIC Part 1: Photographs (Question 2)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 2. (A) Some bicycles are parked alongside a brick wall. (B) A cyclist is riding across an intersection. (C) Bicycles are being loaded onto a transport truck. (D) A mechanic is repairing a bicycle tire.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch các câu: (A) Một số xe đạp đang được đỗ dọc theo bờ tường gạch. (B) Người đi xe đạp đang băng qua ngã tư. (C) Xe đạp đang được bốc lên xe tải. (D) Thợ đang sửa lốp xe. → Đáp án (A) mô tả trạng thái tĩnh của các xe đỗ cạnh tường."),

        ("TOEIC Part 1: Photographs (Question 3)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 3. (A) The woman is presenting slides to a conference audience. (B) The woman is pouring water into a glass. (C) The woman is sitting in a waiting room chair. (D) The woman is walking down an exterior staircase.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch các câu: (A) Người phụ nữ đang thuyết trình các slide trước khán giả hội thảo. (B) Đang rót nước. (C) Đang ngồi trong phòng chờ. (D) Đang đi xuống cầu thang. → Đáp án (A) chuẩn hành động thuyết trình."),

        ("TOEIC Part 1: Photographs (Question 4)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 4. (A) Merchandise is neatly arranged on wooden display shelves. (B) A cashier is scanning a customer's grocery items. (C) A store clerk is sweeping the supermarket floor. (D) The grocery carts are stacked outside the entrance.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch: (A) Hàng hóa được xếp ngăn nắp trên các kệ trưng bày bằng gỗ. (B) Thu ngân đang quét mã vạch. (C) Nhân viên quét sàn. (D) Xe đẩy xếp ngoài cửa. → Đáp án (A) mô tả đúng cách bố trí hàng hóa."),

        ("TOEIC Part 1: Photographs (Question 5)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 5. (A) Construction workers are wearing hard hats at a job site. (B) Workers are planting young trees in a public park. (C) A road crew is painting pedestrian crosswalk lines. (D) Heavy machinery is clearing snow from a highway.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch: (A) Các công nhân xây dựng đang đội mũ bảo hộ tại công trường. (B) Đang trồng cây. (C) Đang sơn vạch kẻ đường. (D) Đang dọn tuyết. → Đáp án (A) chuẩn trang phục bảo hộ (hard hats) công trường."),

        ("TOEIC Part 1: Photographs (Question 6)\nLook at the photograph and listen to the four statements.",
         "Look at the photograph numbered 6. (A) Some passengers are boarding a commercial aircraft via a stairway. (B) An airplane is flying high above the cloud layer. (C) Luggage is moving on an indoor baggage carousel. (D) Pilots are conducting a pre-flight briefing in the terminal.",
         "Listen to the statements. Which statement best describes the scene?",
         ["Statement (A)", "Statement (B)", "Statement (C)", "Statement (D)"],
         0,
         "Dịch: (A) Hành khách đang lên máy bay qua cầu thang bộ. (B) Máy bay đang bay trên mây. (C) Hành lý trên băng chuyền. (D) Phi công đang họp giao ban. → Đáp án (A) mô tả đúng hành động boarding.")
    ]

    for i, (ctx, say, q, o, a, x) in enumerate(p1_data):
        questions.append({
            "lv": "B1",
            "t": "mc",
            "ctx": ctx,
            "say": say,
            "q": f"Part 1 (Câu {i+1}): {q}",
            "o": o,
            "a": a,
            "x": x
        })

    # PART 2: Question-Response (Questions 7 - 31 = 25 questions)
    p2_data = [
        ("Where did Mr. Henderson put the quarterly sales report? (A) In the conference room cabinet. (B) Yes, he reported it yesterday. (C) At three o'clock.",
         0, "Hỏi nơi chốn 'Where...' → Đáp án (A) chỉ địa điểm 'In the conference room cabinet' (Trong tủ tài liệu phòng họp). (B) trả lời Yes cho câu hỏi Where là sai; (C) trả lời thời gian."),
        ("When is the project deadline for the new mobile banking application? (A) By next Friday at 5:00 PM. (B) It was very expensive to download. (C) The programmer has five years of experience.",
         0, "Hỏi thời gian 'When...' → Đáp án (A) chỉ mốc thời gian 'By next Friday at 5:00 PM' (Trước 5h chiều thứ Sáu tới)."),
        ("Who will be heading the international marketing delegation to Tokyo? (A) Ms. Elena Rostova from the London branch. (B) On Tuesday morning. (C) It takes about twelve hours by plane.",
         0, "Hỏi người 'Who will be heading...' (Ai sẽ dẫn đầu đoàn?) → Đáp án (A) trả lời tên người 'Ms. Elena Rostova'."),
        ("Why was the morning train to Manchester delayed? (A) Because of maintenance work on the main track. (B) Yes, it arrived twenty minutes ago. (C) A round-trip ticket, please.",
         0, "Hỏi lý do 'Why...' → Đáp án (A) 'Because of maintenance work...' giải thích lý do bảo trì đường ray."),
        ("Would you prefer to sit inside the restaurant or on the outdoor patio? (A) The outdoor patio sounds lovely. (B) Yes, I have a reservation. (C) A table for four people.",
         0, "Câu hỏi lựa chọn 'Would you prefer A or B?' → Đáp án (A) chọn một vế 'The outdoor patio sounds lovely' (Ngồi ngoài trời nghe có vẻ tuyệt)."),
        ("Has the client signed the annual maintenance service agreement yet? (A) Yes, she returned the signed contract this morning. (B) Regular service is conducted on Mondays. (C) About fifty dollars per month.",
         0, "Câu hỏi thì hiện tại hoàn thành 'Has the client signed... yet?' → Đáp án (A) xác nhận 'Yes, she returned the signed contract this morning'."),
        ("How often does the shuttle bus depart from the hotel to the convention center? (A) Every fifteen minutes on the hour. (B) The convention center is downtown. (C) It is a very large passenger bus.",
         0, "Hỏi tần suất 'How often...' → Đáp án (A) 'Every fifteen minutes' (Cứ 15 phút một chuyến)."),
        ("Could you show me how to replace the toner cartridge in this photocopier? (A) Sure, let me walk you through the steps. (B) The copy machine is located in room 302. (C) Five hundred sheets of white paper.",
         0, "Lời nhờ vả 'Could you show me how to...?' → Đáp án (A) đồng ý giúp đỡ nhiệt tình 'Sure, let me walk you through the steps'."),
        ("Mr. Davies didn't attend the regional safety orientation, did he? (A) No, he was meeting with suppliers in Chicago. (B) The safety glasses are in the cabinet. (C) It was a very interesting lecture.",
         0, "Câu hỏi đuôi phủ định 'didn't attend... did he?' → Đáp án (A) xác nhận vắng mặt và đưa ra lý do hợp lý."),
        ("Where should I submit my travel expense reimbursement form? (A) To Brenda Caldwell in the accounting department. (B) The flight tickets cost four hundred dollars. (C) I had a wonderful trip to Seattle.",
         0, "Hỏi địa điểm/người nhận 'Where should I submit...?' → Đáp án (A) chỉ đích danh nhân sự kế toán nhận hồ sơ."),
        ("Is there an express pharmacy near this subway station? (A) Yes, there's one right across the street next to the bank. (B) The train runs every ten minutes. (C) I need two subway tokens.",
         0, "Hỏi 'Is there an express pharmacy...?' → Đáp án (A) chỉ vị trí tiệm thuốc đối diện bên đường."),
        ("What time does the keynote presentation begin tomorrow morning? (A) Promptly at nine o'clock. (B) In the grand ballroom. (C) Dr. Tanaka is an excellent speaker.",
         0, "Hỏi giờ 'What time...?' → Đáp án (A) 'Promptly at nine o'clock' (Đúng 9 giờ sáng)."),
        ("I thought the software licensing agreement was renewed last month. (A) It was, but only for the European office. (B) Software engineers work on the fifth floor. (C) Yes, I like using this laptop.",
         0, "Câu phát biểu giả định 'I thought...' → Đáp án (A) làm rõ thông tin 'It was, but only for the European office'."),
        ("Should we take a taxi to the airport or take the express train? (A) The express train is much faster during rush hour. (B) My flight leaves from terminal 2. (C) Yes, I have packed my suitcase.",
         0, "Câu hỏi lựa chọn phương tiện di chuyển → Đáp án (A) đưa ra khuyến nghị chọn tàu hỏa tốc hành vì nhanh hơn vào giờ cao điểm."),
        ("Have you had a chance to review the applicant's resume yet? (A) Not yet, I will look over it after lunch. (B) The applicant has five years of experience. (C) He graduated from Boston University.",
         0, "Hỏi 'Have you had a chance to... yet?' → Đáp án (A) 'Not yet, I will look over it after lunch' (Chưa, tôi sẽ xem sau bữa trưa)."),
        ("Why isn't the air conditioning working in conference room B? (A) A technician is currently fixing the cooling unit. (B) The meeting will last two hours. (C) We need eight extra chairs.",
         0, "Hỏi nguyên nhân 'Why isn't the AC working?' → Đáp án (A) giải thích thợ đang sửa dàn lạnh."),
        ("Can you help me set up the audiovisual projector for the client presentation? (A) Absolutely, I will grab the HDMI cable right now. (B) The presentation covered quarterly earnings. (C) We have twenty clients visiting today.",
         0, "Lời nhờ 'Can you help me set up...?' → Đáp án (A) 'Absolutely, I will grab the HDMI cable right now' (Chắc chắn rồi, tôi sẽ lấy dây cáp ngay)."),
        ("How much does it cost to park in the building's underground garage? (A) It's fifteen dollars for the entire day. (B) The garage is located on basement level 2. (C) I drove my hybrid sedan to work.",
         0, "Hỏi giá tiền 'How much does it cost...?' → Đáp án (A) báo giá 'fifteen dollars for the entire day'."),
        ("Who should I contact if I have questions regarding my employee medical benefits? (A) Sarah Jenkins in human resources. (B) The clinic is open Monday through Friday. (C) Yes, my health insurance card is valid.",
         0, "Hỏi liên hệ ai 'Who should I contact...?' → Đáp án (A) chỉ người phụ trách nhân sự."),
        ("You have already reserved the banquet hall for the holiday gala, haven't you? (A) Yes, I signed the deposit agreement yesterday. (B) The gala will feature live classical music. (C) A delicious three-course roast beef dinner.",
         0, "Câu hỏi đuôi xác nhận 'haven't you?' → Đáp án (A) xác nhận đã ký hợp đồng đặt cọc hôm qua."),
        ("Which laptop model did the IT department recommend for the design team? (A) The ProBook with the dedicated graphics card. (B) The graphic designers sit on the third floor. (C) Yes, the software operates smoothly.",
         0, "Hỏi mẫu laptop nào 'Which laptop model...?' → Đáp án (A) chỉ rõ dòng ProBook có card đồ họa chuyên dụng."),
        ("Didn't Ms. Vance say she would be working remotely on Thursday? (A) Actually, she decided to come into the office for a client meeting. (B) Her laptop was repaired last week. (C) Remote work is very convenient.",
         0, "Hỏi về lịch làm việc từ xa → Đáp án (A) phản hồi 'Actually, she decided to come into the office...' (Thực tế là cô ấy quyết định lên văn phòng họp khách hàng)."),
        ("Where are the spare toner cartridges for the color printer kept? (A) In the supply closet behind the reception desk. (B) It prints forty pages per minute. (C) The color photographs look very vibrant.",
         0, "Hỏi nơi để mực in 'Where are the spare cartridges kept?' → Đáp án (A) chỉ tủ đựng đồ sau quầy lễ tân."),
        ("Do you want me to email the meeting minutes to the entire department? (A) Yes, that would be very helpful, thank you. (B) The meeting concluded forty minutes late. (C) We discussed the annual marketing budget.",
         0, "Đề nghị giúp đỡ 'Do you want me to email...?' → Đáp án (A) đồng ý cảm ơn 'Yes, that would be very helpful, thank you'."),
        ("How did the negotiations with the German automotive supplier go? (A) Extremely well, we agreed on all contractual terms. (B) The supplier is based in Munich. (C) We traveled by Lufthansa business class.",
         0, "Hỏi kết quả cuộc đàm phán 'How did the negotiations go?' → Đáp án (A) 'Extremely well, we agreed on all contractual terms' (Rất tốt, hai bên đã thống nhất toàn bộ điều khoản).")
    ]

    for i, (say, a, x) in enumerate(p2_data):
        questions.append({
            "lv": "B1" if i < 12 else "B2",
            "t": "mc",
            "ctx": "TOEIC Listening Part 2: Question-Response\nListen to the audio question and three potential responses. Choose the most appropriate answer (A, B, or C).",
            "say": f"Question {7+i}. {say}",
            "q": f"Part 2 (Câu {7+i}): Listen to the question. What is the best response?",
            "o": ["Response (A)", "Response (B)", "Response (C)"],
            "a": a,
            "x": x
        })

    # PART 3: Short Conversations (Questions 32 - 70 = 39 questions = 13 dialogues x 3 Qs)
    p3_dialogues = [
        # Dialogue 1: 32-34
        ("TOEIC Part 3: Short Conversations (Questions 32–34)\nListen to the conversation between two colleagues:",
         "Man: Hi Rebecca, do you know if the travel department has booked our flights for the upcoming trade symposium in Chicago next month? Woman: I actually spoke with Kevin in corporate travel this morning. He said all non-stop flights on Thursday afternoon were sold out, so he booked us on an early Friday morning flight instead. Man: That works for me. As long as we land before 11:00 AM, we will have plenty of time to set up our marketing booth before the exhibition hall opens at 2:00 PM.",
         [
             ("What are the speakers discussing?",
              ["Setting up a new bank account", "Travel arrangements for an upcoming trade symposium", "A delay in product shipment", "Hiring a new graphic designer"], 1,
              "Họ đang thảo luận về việc đặt vé máy bay đi dự hội thảo thương mại tại Chicago."),
             ("Why were the speakers booked on a Friday morning flight?",
              ["Thursday afternoon flights were completely sold out", "The conference was postponed by one day", "The Friday flight was substantially cheaper", "The company travel policy was revised"], 0,
              "Người phụ nữ giải thích: 'all non-stop flights on Thursday afternoon were sold out, so he booked us on an early Friday morning flight instead'."),
             ("What will the speakers do at 2:00 PM on Friday?",
              ["Meet with the CEO at a restaurant", "Attend the opening of the exhibition hall", "Check into their hotel rooms", "Return to the airport for their flight home"], 1,
              "Người đàn ông nói: 'set up our marketing booth before the exhibition hall opens at 2:00 PM'.")
         ]),
        # Dialogue 2: 35-37
        ("TOEIC Part 3: Short Conversations (Questions 35–37)\nListen to the conversation in an office environment:",
         "Woman: Mark, have you noticed how many employees in our department have been complaining about back pain lately? Our office desk chairs are over seven years old and have almost no lumbar support. Man: You're completely right. In fact, the ergonomic assessment report we received last week strongly urged replacing all fifty workstations. Woman: I found an office furniture vendor called Terra Ergonomics offering a twenty percent volume discount on bulk executive chairs. Let's draft a formal requisition memo for the finance director today.",
         [
             ("What problem are the speakers discussing?",
              ["Office chairs lack ergonomic support causing back pain", "The office air conditioning is broken", "Employees are coming to work late", "Computer screens are flickering"], 0,
              "Nhân viên phàn nàn về đau lưng vì ghế văn phòng đã dùng 7 năm và không có đệm đỡ thắt lưng (lumbar support)."),
             ("How many workstations does the assessment recommend replacing?",
              ["Ten", "Twenty-five", "Fifty", "One hundred"], 2,
              "Người đàn ông nói: 'strongly urged replacing all fifty workstations'."),
             ("What will the speakers do next?",
              ["Call the police to report a theft", "Draft a purchase requisition memo for the finance director", "Order pizza for the department", "Visit a furniture factory in Chicago"], 1,
              "Người phụ nữ chốt: 'Let's draft a formal requisition memo for the finance director today'.")
         ]),
        # Dialogue 3: 38-40
        ("TOEIC Part 3: Short Conversations (Questions 38–40)\nListen to the conversation:",
         "Man: Sarah, could you review the performance metrics for our social media advertising campaign? The campaign has been running for two weeks now. Woman: The analytics look very promising. Website referral traffic increased by 45 percent, and our online store registered over 800 new customer accounts. Man: That's outstanding news. The marketing vice president wants a five-minute summary presentation during tomorrow's executive board meeting. Woman: I'll prepare a set of concise charts highlighting conversion rates and revenue growth before 5:00 PM today.",
         [
             ("What marketing activity are the speakers reviewing?",
              ["A television commercial shoot", "A social media advertising campaign", "A printed newspaper flyer", "A radio interview with the CEO"], 1,
              "Họ đang xem xét các chỉ số hiệu quả của chiến dịch quảng cáo trên mạng xã hội (social media campaign)."),
             ("What positive result did the campaign achieve?",
              ["Website traffic increased by 45 percent with 800 new accounts", "Product manufacturing costs were cut in half", "Store employees received a bonus", "The company opened five overseas branches"], 0,
              "Người phụ nữ thông báo: 'Website referral traffic increased by 45 percent, and our online store registered over 800 new customer accounts'."),
             ("What will Sarah do before 5:00 PM today?",
              ["Fly to New York for a client meeting", "Prepare charts for tomorrow's executive board presentation", "Delete old marketing files from the server", "Order lunch for the design team"], 1,
              "Sarah hứa: 'I'll prepare a set of concise charts highlighting conversion rates and revenue growth before 5:00 PM today'.")
         ]),
        # Dialogue 4: 41-43
        ("TOEIC Part 3: Short Conversations (Questions 41–43)\nListen to the conversation:",
         "Woman: Good morning, this is Cynthia from Apex Consulting. I'm calling to verify the audiovisual setup for our corporate seminar in your hotel ballroom this Thursday. Man: Certainly, Ms. Vance. We have reserved the Grand Ballroom for your group. According to your booking sheet, you requested two HD ceiling projectors, three wireless handheld microphones, and a high-speed dedicated Wi-Fi network. Woman: Exactly. We also have an overseas presenter joining via Zoom at 10:30 AM. Will your technicians be on-site to assist with the video connection? Man: Yes, our senior AV technician will be stationed in the control booth throughout your entire morning session.",
         [
             ("Why is the woman calling the hotel?",
              ["To cancel a hotel room reservation", "To confirm audiovisual equipment for an upcoming seminar", "To complain about a noisy room", "To inquire about swimming pool hours"], 1,
              "Người phụ nữ gọi điện để xác nhận hệ thống âm thanh, máy chiếu và Wi-Fi cho buổi hội thảo của công ty tại khách sạn."),
             ("What special requirement does the seminar have at 10:30 AM?",
              ["A catered champagne lunch", "An overseas presenter joining remotely via video conference", "A fire evacuation drill", "A live orchestra performance"], 1,
              "Cô ấy nhắc: 'We also have an overseas presenter joining via Zoom at 10:30 AM'."),
             ("What reassurance does the hotel staff member provide?",
              ["A technician will be on-site in the control booth throughout the morning", "The hotel will discount the room price by 50%", "The seminar can be extended into the evening", "Free parking will be provided to all attendees"], 0,
              "Nhân viên khách sạn khẳng định: 'our senior AV technician will be stationed in the control booth throughout your entire morning session'.")
         ]),
        # Dialogue 5: 44-46
        ("TOEIC Part 3: Short Conversations (Questions 44–46)\nListen to the conversation:",
         "Man: Rachel, I was reviewing our latest commercial invoice from Northstar Office Supplies, and I noticed an overcharge on line item 4. Woman: Really? What was the discrepancy? Man: They billed us for twenty industrial paper shredders, but our original purchase order and the warehouse receiving manifest clearly indicate we only ordered and received twelve units. Woman: Let me contact our account representative at Northstar right now. I'll ask them to issue an adjusted invoice with a corrected balance before we authorize payment.",
         [
             ("What document are the speakers reviewing?",
              ["A commercial invoice from an office supply vendor", "An employment contract for a new manager", "A building lease agreement", "A restaurant catering menu"], 0,
              "Họ đang xem lại hóa đơn thương mại (commercial invoice) từ nhà cung cấp văn phòng phẩm Northstar."),
             ("What was the mistake on the invoice?",
              ["The delivery date was incorrect", "They were billed for 20 paper shredders instead of 12", "The shipping fee was doubled", "The company name was misspelled"], 1,
              "Người đàn ông chỉ ra: 'billed us for twenty industrial paper shredders, but... we only ordered and received twelve units'."),
             ("What will the woman do to resolve the issue?",
              ["Refuse to ever purchase from Northstar again", "Contact the account representative to obtain a corrected invoice", "Pay the full invoice immediately", "Return all 12 shredders to the factory"], 1,
              "Người phụ nữ nói: 'contact our account representative at Northstar... ask them to issue an adjusted invoice with a corrected balance'.")
         ]),
        # Dialogue 6: 47-49
        ("TOEIC Part 3: Short Conversations (Questions 47–49)\nListen to the conversation:",
         "Woman: David, have you finished conducting the initial phone screenings for the Senior DevOps Engineer position? Man: Yes, I screened seven candidates yesterday. Two individuals stood out with exceptional cloud architecture experience: Elena Rostova and James Miller. Woman: Elena's resume looked particularly impressive, especially her six years leading automated deployment pipelines at a fintech company. Man: I agree. I'll reach out to both of them this afternoon to schedule formal in-person interviews with our technical lead on Thursday.",
         [
             ("What position are the speakers hiring for?",
              ["Senior DevOps Engineer", "Executive Assistant", "Marketing Coordinator", "Human Resources Director"], 0,
              "Họ đang tuyển dụng vị trí Kỹ sư DevOps cấp cao (Senior DevOps Engineer)."),
             ("What impressed the speakers about Elena's background?",
              ["Her degree in English literature", "Her six years of cloud and automated deployment experience", "Her ability to speak four foreign languages", "Her willingness to work on weekends"], 1,
              "Người phụ nữ nhấn mạnh: 'six years leading automated deployment pipelines at a fintech company'."),
             ("What will David do this afternoon?",
              ["Send rejection emails to all candidates", "Schedule formal interviews for the top candidates on Thursday", "Draft a new job advertisement", "Purchase new laptops for the IT team"], 1,
              "David nói: 'reach out to both of them this afternoon to schedule formal in-person interviews with our technical lead on Thursday'.")
         ]),
        # Dialogue 7: 50-52
        ("TOEIC Part 3: Short Conversations (Questions 50–52)\nListen to the conversation:",
         "Man: Amanda, our chief accountant Harold is retiring next month after thirty-two years of dedicated service to the company. We really need to organize a memorable farewell luncheon. Woman: Absolutely. Harold has been a cornerstone of this firm. I was thinking we could book the private garden terrace at Bistro Bella on Friday, June 18. Man: That's a great venue. Harold loves Mediterranean cuisine. Let's send out a digital invitation to the entire office and ask everyone to contribute toward a retirement gift.",
         [
             ("What event are the speakers planning?",
              ["A retirement farewell luncheon for a long-time accountant", "A promotion celebration for a sales intern", "A company holiday party in December", "A product launch press conference"], 0,
              "Họ đang lên kế hoạch tổ chức tiệc chia tay nghỉ hưu (farewell luncheon) cho kế toán trưởng Harold sau 32 năm cống hiến."),
             ("Where does Amanda suggest holding the event?",
              ["In the company breakroom", "At Bistro Bella's private garden terrace", "At a golf resort in Florida", "In the CEO's private office"], 1,
              "Amanda gợi ý: 'book the private garden terrace at Bistro Bella on Friday, June 18'."),
             ("What will the speakers ask employees to do?",
              ["Work overtime on Friday afternoon", "Contribute toward a retirement gift for Harold", "Wear formal business suits", "Bring their own food to the restaurant"], 1,
              "Người đàn ông đề xuất: 'ask everyone to contribute toward a retirement gift'.")
         ]),
        # Dialogue 8: 53-55
        ("TOEIC Part 3: Short Conversations (Questions 53–55)\nListen to the conversation:",
         "Woman: Tom, is the color laser printer on the third floor working properly? I've been trying to print our client proposal for twenty minutes, but nothing is coming out. Man: Oh, a paper jam error flashed on the LCD screen earlier this morning. I opened the rear tray and removed a wrinkled sheet of paper, but now it's displaying an 'out of cyan toner' alert. Woman: In that case, I'll go down to the second-floor print center to run off the copies so I'm not late for my 11:00 AM meeting with the real estate developer.",
         [
             ("What problem is the woman experiencing?",
              ["Her computer mouse is broken", "The third-floor color printer is not printing her proposal", "She lost her client files", "The elevator is out of service"], 1,
              "Người phụ nữ phàn nàn máy in màu tầng 3 không in được bản đề xuất khách hàng."),
             ("Why is the printer currently failing to operate?",
              ["It has run out of cyan toner", "The power cord was accidentally unplugged", "The ink spilled onto the floor", "The network cable was severed"], 0,
              "Người đàn ông cho biết: 'displaying an out of cyan toner alert' (hết mực màu xanh lam)."),
             ("What does the woman decide to do?",
              ["Cancel her client meeting", "Use the second-floor print center to make her copies", "Buy a new laser printer online", "Handwrite the entire proposal"], 1,
              "Cô ấy quyết định: 'go down to the second-floor print center to run off the copies'.")
         ]),
        # Dialogue 9: 56-58
        ("TOEIC Part 3: Short Conversations (Questions 56–58)\nListen to the conversation:",
         "Man: Good afternoon, Pacific Vehicle Rentals. How may I assist you today? Woman: Hi, I'm calling from Summit Catering. We need to rent a high-roof cargo delivery van for three days this coming weekend, from Friday morning to Sunday evening. Man: We have a Ford Transit extended cargo van available with built-in tie-down straps and a rear backup camera. The commercial rate is $85 per day, which includes unlimited mileage and 24/7 roadside assistance. Woman: That sounds ideal. Can I provide our company credit card number now to secure the reservation?",
         [
             ("What kind of vehicle does the woman want to rent?",
              ["A two-door sports car", "A high-roof cargo delivery van", "A luxury passenger limousine", "A heavy agricultural tractor"], 1,
              "Người phụ nữ cần thuê xe tải chở hàng thùng cao (high-roof cargo delivery van) cho công ty dịch vụ tiệc."),
             ("How long does the woman need the vehicle?",
              ["One day", "Three days over the weekend", "Two weeks", "An entire month"], 1,
              "Cô ấy nói: 'rent... for three days this coming weekend, from Friday morning to Sunday evening'."),
             ("What is included in the daily rental rate of $85?",
              ["Free fuel for the entire trip", "Unlimited mileage and 24/7 roadside assistance", "A personal chauffeur driver", "Free car wash at any gas station"], 1,
              "Nhân viên cho biết: 'includes unlimited mileage and 24/7 roadside assistance'.")
         ]),
        # Dialogue 10: 59-61
        ("TOEIC Part 3: Short Conversations (Questions 59–61)\nListen to the conversation:",
         "Woman: Kevin, our quarterly physical inventory count at the distribution warehouse is scheduled for next Saturday. Are all barcode scanners fully calibrated? Man: Yes, our IT staff updated the firmware on all thirty handheld scanners yesterday. However, we're currently short four warehouse staff members due to seasonal vacations. Woman: We can't afford any counting delays. Let me contact our temporary staffing agency in Dallas to request four certified warehouse associates for the weekend shift.",
         [
             ("What operational event is scheduled for next Saturday?",
              ["A corporate charity marathon", "A quarterly physical inventory count at the warehouse", "A warehouse building demolition", "An employee safety inspection"], 1,
              "Sự kiện kiểm kê hàng tồn kho thực tế định kỳ quý (quarterly physical inventory count) tại nhà kho phân phối."),
             ("What challenge did Kevin report?",
              ["The barcode scanners are broken", "The warehouse is short four staff members due to vacations", "The roof is leaking water", "The electricity was shut off"], 1,
              "Kevin thông báo: 'we're currently short four warehouse staff members due to seasonal vacations'."),
             ("How will the woman address the labor shortage?",
              ["By hiring four temporary workers from a staffing agency", "By canceling the inventory count", "By asking office managers to pack boxes", "By purchasing automated warehouse robots"], 0,
              "Cô ấy giải quyết: 'contact our temporary staffing agency... to request four certified warehouse associates'.")
         ]),
        # Dialogue 11: 62-64
        ("TOEIC Part 3: Short Conversations (Questions 62–64)\nListen to the conversation:",
         "Man: Ms. Caldwell, thank you for touring the 14th floor of the Meridian Tower today. As you saw, this 4,000-square-foot office space features floor-to-ceiling exterior windows, eight private managerial suites, and a spacious conference room. Woman: The natural lighting and downtown views are truly breathtaking. However, our architecture firm requires an open-concept collaborative workspace rather than so many segmented private offices. Man: The interior dividing walls are non-load-bearing partitions. The building landlord is willing to demolish the partitions and install modern glass collaborative hubs as part of the tenant improvement allowance.",
         [
             ("What type of property are the speakers touring?",
              ["A residential apartment building", "A commercial office space in a high-rise tower", "An industrial shipping warehouse", "A shopping mall retail store"], 1,
              "Họ đang tham quan mặt bằng văn phòng thương mại 4.000 feet vuông tại tầng 14 của tòa tháp Meridian Tower."),
             ("What concern does the woman express about the office layout?",
              ["The rent price is too high", "There are too many partitioned private offices instead of an open-concept space", "The building has no parking lot", "The windows cannot be opened"], 1,
              "Cô ấy lo ngại: 'firm requires an open-concept collaborative workspace rather than so many segmented private offices'."),
             ("What compromise does the leasing agent offer?",
              ["A 50% discount on first-year rent", "The landlord will demolish non-load-bearing partitions and install glass collaborative hubs", "Free electricity and internet for two years", "An extra floor of office space for free"], 1,
              "Môi giới đưa ra phương án: 'landlord is willing to demolish the partitions and install modern glass collaborative hubs as part of tenant improvement allowance'.")
         ]),
        # Dialogue 12: 65-67
        ("TOEIC Part 3: Short Conversations (Questions 65–67)\nListen to the conversation:",
         "Woman: Brian, how is our migration to the new cloud-based customer relationship management (CRM) software progressing? Are we on track for next Monday's rollout? Man: The database migration itself was completed flawlessly over the weekend. All customer records and purchase histories were transferred without data loss. However, our customer service team has had difficulty navigating the new ticketing interface. Woman: We should hold a mandatory two-hour hands-on training workshop on Thursday morning. I'll ask our CRM vendor to conduct an interactive video walkthrough for the whole team.",
         [
             ("What IT project are the speakers discussing?",
              ["Migrating to a cloud-based CRM software platform", "Designing a new company website", "Upgrading computer hardware monitors", "Installing security cameras in the parking lot"], 0,
              "Dự án chuyển đổi sang hệ thống phần mềm quản lý quan hệ khách hàng trên nền tảng đám mây (cloud-based CRM)."),
             ("What issue arose during the migration?",
              ["Customer transaction logs were accidentally deleted", "The customer service staff found the new ticketing interface difficult to navigate", "The internet connection was severed", "The software vendor increased prices"], 1,
              "Người đàn ông nói: 'customer service team has had difficulty navigating the new ticketing interface'."),
             ("What does the woman propose to solve the problem?",
              ["Postponing the software launch by six months", "Organizing a mandatory hands-on training workshop with the vendor on Thursday", "Reverting back to the old paper ledger system", "Firing the customer service team"], 1,
              "Cô ấy đề xuất: 'hold a mandatory two-hour hands-on training workshop on Thursday morning... ask our CRM vendor to conduct an interactive video walkthrough'.")
         ]),
        # Dialogue 13: 68-70
        ("TOEIC Part 3: Short Conversations (Questions 68–70)\nListen to the conversation:",
         "Man: Jessica, do we have any urgent express international shipments leaving the facility this afternoon? Woman: Yes, the biomedical research lab in Frankfurt needs this batch of temperature-controlled pharmaceutical test vials delivered before 9:00 AM on Wednesday. Man: I'll prepare the dry-ice cryogenic shipping containers immediately. Make sure you complete the commercial customs declaration form and attach three copies of the export air waybill. Woman: I'm filling out the customs forms online right now. Global Express Courier is scheduled to pick up the shipment at 4:30 PM.",
         [
             ("What type of goods are being shipped internationally?",
              ["Electronic computer microchips", "Temperature-controlled pharmaceutical test vials", "Heavy automotive diesel engines", "Printed textbooks and magazines"], 1,
              "Các lọ mẫu thử nghiệm dược phẩm kiểm soát nhiệt độ gửi tới phòng thí nghiệm Frankfurt."),
             ("What special shipping preparation does the man mention?",
              ["Wrapping items in bubble wrap", "Preparing dry-ice cryogenic shipping containers", "Insuring the shipment for one million dollars", "Translating labels into German"], 1,
              "Người đàn ông nói: 'prepare the dry-ice cryogenic shipping containers immediately'."),
             ("When will the courier pick up the package?",
              ["At 9:00 AM on Wednesday", "At 4:30 PM this afternoon", "Tomorrow morning at dawn", "On Friday afternoon"], 1,
              "Người phụ nữ khẳng định: 'Global Express Courier is scheduled to pick up the shipment at 4:30 PM'.")
         ])
    ]

    q_idx = 32
    for ctx, say, q_list in p3_dialogues:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "say": f"Questions {q_idx} through {q_idx+2}. {say}",
                "q": f"Part 3 (Câu {q_idx}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            q_idx += 1

    # PART 4: Short Talks (Questions 71 - 100 = 30 questions = 10 talks x 3 Qs)
    p4_talks = [
        # Talk 1: 71-73
        ("TOEIC Part 4: Short Talks (Questions 71–73)\nListen to the following airport announcement:",
         "Attention all passengers booked on Trans-Atlantic Airways Flight 402 with service to London Heathrow. Due to severe thunderstorms and air traffic restrictions in the London area, our departure has been delayed by approximately one hour. Our revised boarding time is now 4:15 PM from Gate B12. Passengers requiring special travel assistance, as well as those traveling with small infants, are invited to approach the podium first. We apologize for this delay and thank you for your patience.",
         [
             ("What is the announcement about?",
              ["A gate change for a domestic flight", "A weather-related flight delay for a trip to London", "A lost piece of luggage", "A cancellation of all weekend flights"], 1,
              "Thông báo hoãn chuyến bay số hiệu 402 đi London Heathrow do giông bão nghiêm trọng tại London."),
             ("What is the new boarding time?",
              ["3:15 PM", "4:15 PM", "5:00 PM", "6:30 PM"], 1,
              "Thông báo: 'Our revised boarding time is now 4:15 PM from Gate B12'."),
             ("Who is invited to board the aircraft first?",
              ["First-class business executives only", "Passengers requiring special assistance and those with infants", "Passengers seated in rows 20 through 35", "Airline flight attendants"], 1,
              "Thông báo: 'Passengers requiring special travel assistance, as well as those traveling with small infants, are invited to approach the podium first'.")
         ]),
        # Talk 2: 74-76
        ("TOEIC Part 4: Short Talks (Questions 74–76)\nListen to the following telephone message:",
         "Hello, Mr. Alvarez. This is Marco calling from Precision Auto Service regarding your Toyota sedan. We completed the multi-point brake inspection this morning. While your front brake pads are in good condition, our mechanic discovered that your rear brake calipers are leaking hydraulic fluid and need immediate replacement. The total estimate for parts and labor is $280. We have the necessary parts in stock, so if you give us approval before 1:00 PM today, your car will be ready for pickup by 5:30 PM. Please give us a call back at 555-0199. Thank you.",
         [
             ("Who is the speaker?",
              ["An insurance claims adjuster", "An automobile service mechanic", "A car rental agent", "A taxi dispatch driver"], 1,
              "Marco gọi từ xưởng sửa xe ô tô Precision Auto Service."),
             ("What problem did the mechanic discover?",
              ["The car battery is completely dead", "The rear brake calipers are leaking hydraulic fluid", "A flat tire on the front wheel", "The windshield is cracked"], 1,
              "Thông báo: 'rear brake calipers are leaking hydraulic fluid and need immediate replacement'."),
             ("What must Mr. Alvarez do before 1:00 PM to pick up his car today?",
              ["Pay the entire bill in cash", "Call the repair shop to give approval for the work", "Bring his spare car keys to the garage", "Purchase the replacement parts himself"], 1,
              "Marco dặn: 'if you give us approval before 1:00 PM today, your car will be ready for pickup by 5:30 PM'.")
         ]),
        # Talk 3: 77-79
        ("TOEIC Part 4: Short Talks (Questions 77–79)\nListen to the tour guide announcement:",
         "Welcome everyone to the City Architectural Museum. My name is Julian, and I will be guiding you through our special exhibition: 'Pioneers of Modern High-Rise Engineering'. During our 45-minute tour, you will examine original blueprints, scale models, and structural steel components from iconic twentieth-century skyscrapers. Please remember that flash photography is strictly prohibited inside the main gallery to protect delicate historical sketches. At the conclusion of our tour, you are all invited to visit our museum gift shop on the ground floor, where commemorative exhibition catalogs are available at a 20 percent discount. Let's begin our tour in Room 1.",
         [
             ("Where is the tour taking place?",
              ["At an ancient castle in Scotland", "At the City Architectural Museum", "At a modern construction site", "Inside a city hall council chamber"], 1,
              "Địa điểm: 'Welcome everyone to the City Architectural Museum'."),
             ("What rule are visitors instructed to follow?",
              ["No flash photography inside the main gallery", "No speaking during the tour", "Visitors must wear hard hats", "Large backpacks are mandatory"], 0,
              "Quy định: 'flash photography is strictly prohibited inside the main gallery to protect delicate historical sketches'."),
             ("What promotional offer is mentioned for the museum gift shop?",
              ["Free coffee and pastries for all guests", "A 20 percent discount on exhibition catalogs", "Free miniature model skyscraper kits", "A buy-one-get-one-free admission ticket"], 1,
              "Thông báo: 'commemorative exhibition catalogs are available at a 20 percent discount'.")
         ]),
        # Talk 4: 80-82
        ("TOEIC Part 4: Short Talks (Questions 80–82)\nListen to the broadcast announcement:",
         "Good afternoon, valued shoppers. Welcome to Highland Home Electronics. For the next two hours only, we are hosting a surprise flash sale in our audio and television department located on the second floor. All 4K Ultra-HD smart televisions, soundbars, and wireless noise-cancelling headphones are marked down an additional 25 percent off our lowest ticketed price. In addition, customers who open a Highland Rewards credit card today will receive an instant $50 gift card toward their purchase. Please speak to any sales associate wearing a blue vest for assistance. Thank you for shopping with Highland.",
         [
             ("What department is having a flash sale?",
              ["Home gardening and patio furniture", "Audio and television electronics", "Kitchen appliances and refrigerators", "Children's clothing and shoes"], 1,
              "Thông báo: 'surprise flash sale in our audio and television department located on the second floor'."),
             ("How long will the promotional discount last?",
              ["Thirty minutes", "For the next two hours only", "Until the end of the week", "All weekend"], 1,
              "Thời gian: 'For the next two hours only'."),
             ("How can customers receive a $50 gift card today?",
              ["By spending over one thousand dollars", "By opening a Highland Rewards credit card", "By trading in an old television", "By writing an online customer review"], 1,
              "Ưu đãi: 'customers who open a Highland Rewards credit card today will receive an instant $50 gift card'.")
         ]),
        # Talk 5: 83-85
        ("TOEIC Part 4: Short Talks (Questions 83–85)\nListen to the workplace safety briefing:",
         "Good morning team, and welcome to your new roles at Apex Logistics Logistics Hub. Before we begin hands-on equipment training, I want to emphasize our facility's core safety protocols. First, steel-toed boots and high-visibility reflective vests must be worn at all times on the warehouse floor. Second, pedestrian walkways are clearly demarcated by yellow floor paint; never walk across designated motorized forklift corridors. Finally, if you observe any liquid spills or damaged shelving racks, report them immediately to your zone supervisor using the nearest wall intercom. Safety is our top priority. Let's make sure everyone goes home healthy every day.",
         [
             ("Who is the intended audience for this talk?",
              ["Newly hired warehouse employees at a logistics hub", "Airline pilots attending a flight simulation", "Hospital medical nurses", "Hotel front-desk receptionists"], 0,
              "Đối tượng: 'welcome to your new roles at Apex Logistics Logistics Hub' (nhân viên kho vận mới)."),
             ("What equipment is required on the warehouse floor?",
              ["Formal neckties and suits", "Steel-toed boots and high-visibility reflective vests", "Safety diving goggles and ear plugs", "Winter coats and wool gloves"], 1,
              "Quy định: 'steel-toed boots and high-visibility reflective vests must be worn at all times'."),
             ("How should workers report safety hazards like spills?",
              ["By calling the CEO's personal cell phone", "By using the nearest wall intercom to notify their supervisor", "By posting on company social media", "By writing a letter in the suggestion box"], 1,
              "Hướng dẫn: 'report them immediately to your zone supervisor using the nearest wall intercom'.")
         ]),
        # Talk 6: 86-88
        ("TOEIC Part 4: Short Talks (Questions 86–88)\nListen to the corporate press statement:",
         "Good morning members of the press. I am delighted to announce that SunVolt Energy has finalized an agreement to construct the largest floating solar photovoltaic array in North America. Located on the artificial reservoir in Lake Mead, Nevada, the 250-megawatt clean energy installation will generate enough zero-emission electricity to power over 75,000 residential homes while significantly reducing reservoir water evaporation during hot summer months. Construction will begin in March and will create an estimated 400 local union construction jobs. We anticipate delivering first commercial power to the regional grid by early 2026. I am now happy to open the floor to questions.",
         [
             ("What project did SunVolt Energy announce?",
              ["A deep-sea oil drilling platform", "A large floating solar photovoltaic array in Nevada", "A nuclear power plant in California", "A commercial wind turbine manufacturing plant"], 1,
              "Dự án: 'construct the largest floating solar photovoltaic array in North America... in Lake Mead, Nevada'."),
             ("What dual environmental benefit does the installation offer?",
              ["Powers 75,000 homes and reduces reservoir water evaporation", "Cools the desert temperature by 10 degrees", "Provides free drinking water to Las Vegas", "Cleans toxic chemicals from the lake"], 0,
              "Lợi ích: 'power over 75,000 residential homes while significantly reducing reservoir water evaporation'."),
             ("When is commercial power expected to reach the regional grid?",
              ["Next month", "By March", "By early 2026", "In the year 2035"], 2,
              "Tiến độ: 'anticipate delivering first commercial power to the regional grid by early 2026'.")
         ]),
        # Talk 7: 89-91
        ("TOEIC Part 4: Short Talks (Questions 89–91)\nListen to the radio traffic and weather report:",
         "This is Metro Radio 98 with your commuter traffic and weather update for the greater Seattle area. Commuters heading northbound on Interstate 5 should anticipate severe delays of up to 45 minutes near exit 164 due to an overturned delivery truck that has blocked the two right lanes. Highway emergency crews are on the scene, but wreckage clearance will take at least another hour. We recommend taking the State Route 99 tunnel as an alternate route into downtown. As for the weather, overcast skies will give way to steady rain showers this evening, with temperatures hovering near 52 degrees Fahrenheit.",
         [
             ("What is causing the delay on Interstate 5?",
              ["Heavy snowfall and ice", "An overturned delivery truck blocking two lanes", "A presidential motorcade procession", "Bridge structural painting"], 1,
              "Nguyên nhân tắc đường: 'overturned delivery truck that has blocked the two right lanes'."),
             ("What detour route does the reporter suggest?",
              ["State Route 99 tunnel", "Taking a commercial ferry across the bay", "Waiting at a highway rest stop", "Walking along the pedestrian path"], 0,
              "Khuyến nghị: 'recommend taking the State Route 99 tunnel as an alternate route into downtown'."),
             ("What weather conditions are forecasted for the evening?",
              ["Clear sunny skies and warm heat", "Steady rain showers with temperatures near 52 degrees", "A severe winter blizzard with hail", "Dense ocean fog and high winds"], 1,
              "Dự báo thời tiết tối: 'steady rain showers this evening, with temperatures hovering near 52 degrees Fahrenheit'.")
         ]),
        # Talk 8: 92-94
        ("TOEIC Part 4: Short Talks (Questions 92–94)\nListen to the conference introduction:",
         "Good morning distinguished delegates, and welcome to the opening plenary of the International Cardiology Symposium. It is my immense privilege to introduce our morning keynote speaker, Dr. Arlo Kramer. Dr. Kramer is the Director of Cardiovascular Research at the Zurich Medical Institute and has authored over 150 peer-reviewed papers on non-invasive robotic cardiac surgery. Today, he will present findings from his landmark five-year clinical trial on automated catheter navigation. Please join me in giving a warm and enthusiastic welcome to Dr. Arlo Kramer.",
         [
             ("Where is this introduction being delivered?",
              ["At a high school graduation ceremony", "At the opening plenary of the International Cardiology Symposium", "At a hospital emergency room", "During a corporate shareholder meeting"], 1,
              "Địa điểm: 'opening plenary of the International Cardiology Symposium'."),
             ("What is Dr. Kramer's professional affiliation?",
              ["Director of Cardiovascular Research at Zurich Medical Institute", "Chief Executive Officer of a pharmaceutical company", "A software engineer at a computer firm", "The mayor of the city of Zurich"], 0,
              "Chức vụ: 'Director of Cardiovascular Research at the Zurich Medical Institute'."),
             ("What topic will Dr. Kramer address in his keynote speech?",
              ["Hospital budget reduction techniques", "Findings from a five-year clinical trial on automated catheter navigation", "The history of pharmaceutical marketing", "Medical insurance billing software"], 1,
              "Nội dung phát biểu: 'present findings from his landmark five-year clinical trial on automated catheter navigation'.")
         ]),
        # Talk 9: 95-97
        ("TOEIC Part 4: Short Talks (Questions 95–97)\nListen to the voicemail message:",
         "Hi, Ms. Wallace. This is Marcus from Westside Modern Furniture calling regarding your custom dining room table order, reference number WM-4091. I'm calling to let you know that your custom walnut table has arrived at our regional delivery warehouse from our factory in North Carolina. Our dispatch team is scheduling home delivery windows for this coming Thursday, between 9:00 AM and 1:00 PM. Please give our delivery coordinator a call back at 555-0144 by Tuesday evening to confirm if someone over the age of eighteen will be home to sign for the delivery. Thank you for your business.",
         [
             ("Why is Marcus calling Ms. Wallace?",
              ["To inform her that her custom dining table is ready for home delivery", "To notify her of a price increase on furniture", "To tell her that her credit card was declined", "To ask her to return a rented chair"], 0,
              "Mục đích cuộc gọi: Báo tin bàn ăn gỗ óc chó đặt riêng đã về kho và cần hẹn lịch giao hàng tận nhà."),
             ("When is the proposed delivery window?",
              ["Tuesday morning at 8:00 AM", "This coming Thursday, between 9:00 AM and 1:00 PM", "Saturday afternoon at 4:00 PM", "Next month on Friday"], 1,
              "Khung giờ giao hàng: 'scheduling home delivery windows for this coming Thursday, between 9:00 AM and 1:00 PM'."),
             ("What requirement is mentioned for the delivery?",
              ["The table must be assembled outside on the lawn", "Someone over eighteen must be home to sign for the delivery", "Payment must be made in cash only", "Ms. Wallace must provide her own moving truck"], 1,
              "Yêu cầu: 'confirm if someone over the age of eighteen will be home to sign for the delivery'.")
         ]),
        # Talk 10: 98-100
        ("TOEIC Part 4: Short Talks (Questions 98–100)\nListen to the executive business presentation:",
         "Good afternoon colleagues and regional retail directors. As we review our fourth-quarter international expansion strategy, I am thrilled to unveil our strategic roadmap for Southeast Asia. Over the past twenty-four months, our e-commerce portal in Singapore and Malaysia experienced 68 percent compound annual sales growth. To capitalize on this booming regional demand, we will open six flagship brick-and-mortar lifestyle stores across Singapore, Kuala Lumpur, and Bangkok over the next twelve months. Our first store will officially open its doors on Orchard Road in Singapore this November. We believe this omni-channel approach will solidify our brand leadership in the premium retail apparel market.",
         [
             ("What region is the focus of the expansion strategy?",
              ["Western Europe", "Southeast Asia (Singapore, Malaysia, and Thailand)", "South America", "Northern Africa"], 1,
              "Khu vực trọng điểm: 'strategic roadmap for Southeast Asia... Singapore, Kuala Lumpur, and Bangkok'."),
             ("What demonstrated strong demand for the company's products?",
              ["A survey of twenty high school students", "68 percent compound annual sales growth on their regional e-commerce portal", "A magazine article about retail fashion", "A celebrity endorsement on television"], 1,
              "Bằng chứng nhu cầu: 'e-commerce portal in Singapore and Malaysia experienced 68 percent compound annual sales growth'."),
             ("When and where will the first retail store open?",
              ["In London next year", "This November on Orchard Road in Singapore", "In Tokyo in three years", "In Sydney during the summer"], 1,
              "Địa điểm và thời gian mở cửa hàng đầu tiên: 'Our first store will officially open its doors on Orchard Road in Singapore this November'.")
         ])
    ]

    q_idx = 71
    for ctx, say, q_list in p4_talks:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "say": f"Questions {q_idx} through {q_idx+2}. {say}",
                "q": f"Part 4 (Câu {q_idx}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            q_idx += 1

    assert len(questions) == 100, f"Expected 100 listening questions, got {len(questions)}"
    return questions

print("make_listening_questions ready")

# Read Reading questions from src/data/toeicFullTests.ts
with open("src/data/toeicFullTests.ts", "r", encoding="utf-8") as f:
    text = f.read()

# Extract test 1 questions
import re
m = re.search(r'export const toeicFullTests:\s*MockTest\[\]\s*=\s*(\[.+\]);', text, re.DOTALL)
if not m:
    raise ValueError("Could not find toeicFullTests array in src/data/toeicFullTests.ts")

full_tests = json.loads(m.group(1))
reading_qs = full_tests[0]["questions"]
assert len(reading_qs) == 100, f"Expected 100 reading questions, got {len(reading_qs)}"

listening_qs = make_listening_questions()
assert len(listening_qs) == 100, f"Expected 100 listening questions, got {len(listening_qs)}"

all_200_qs = listening_qs + reading_qs
assert len(all_200_qs) == 200, f"Expected 200 questions, got {len(all_200_qs)}"

test_2hours = {
    "id": "toeic-2hours-full-1",
    "level": "B2",
    "title": "TOEIC ETS Official 2-Hour Complete Exam (Listening & Reading 200 câu)",
    "desc": "Đề thi TOEIC toàn diện chuẩn phòng thi thật 120 phút (2 tiếng) gồm đúng 200 câu hỏi: 100 câu Listening (Part 1-4 có audio giọng đọc bản xứ) + 100 câu Reading (Part 5-7). Tự động chấm điểm và quy đổi chuẩn thang điểm 990 (Listening 495 + Reading 495).",
    "timeLimit": 120,
    "category": "toeic",
    "target": "TOEIC 990 Max (Chuẩn 2 tiếng · 120m)",
    "testType": "full",
    "startNumber": 1,
    "sections": [
        {"name": "Part 1: Photographs (1–6)", "startIndex": 0, "count": 6},
        {"name": "Part 2: Question-Response (7–31)", "startIndex": 6, "count": 25},
        {"name": "Part 3: Short Conversations (32–70)", "startIndex": 31, "count": 39},
        {"name": "Part 4: Short Talks (71–100)", "startIndex": 70, "count": 30},
        {"name": "Part 5: Incomplete Sentences (101–130)", "startIndex": 100, "count": 30},
        {"name": "Part 6: Text Completion (131–146)", "startIndex": 130, "count": 16},
        {"name": "Part 7: Reading Comprehension (147–200)", "startIndex": 146, "count": 54}
    ],
    "questions": all_200_qs
}

ts_file_content = f'''/* Authentic Standard 2-Hour (120-minute), 200-question Complete TOEIC Exam */
import type {{ MockTest }} from "../types";

export const toeic2HoursTest: MockTest = {json.dumps(test_2hours, ensure_ascii=False, indent=2)};
'''

with open("src/data/toeic2HoursTest.ts", "w", encoding="utf-8") as f:
    f.write(ts_file_content)

print("Generated src/data/toeic2HoursTest.ts with 200 questions and 120 minutes timeLimit!")
