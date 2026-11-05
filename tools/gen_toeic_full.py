# tools/gen_toeic_full.py
import json

def make_test_1():
    # 100 questions for Test 1
    questions = []
    
    # PART 5: 101 - 130 (30 questions)
    p5_data = [
        ("The human resources director announced that all employees must complete their self-evaluations ___ Friday afternoon.",
         ["before", "between", "among", "during"], 0,
         "Giới từ chỉ hạn chót trước một thời điểm cụ thể: 'before Friday afternoon' (trước chiều thứ Sáu). 'during' đi với khoảng thời gian danh từ (during the meeting), 'between' cần 'and'."),
        ("Mr. Reynolds ___ the quarterly financial report to the board of directors yesterday.",
         ["submits", "submitted", "submitting", "submission"], 1,
         "Dấu hiệu thời gian quá khứ rõ ràng 'yesterday' → động từ chính chia ở thì quá khứ đơn (Past Simple): 'submitted'."),
        ("Passengers on flight 802 are reminded that each traveler is allowed ___ one piece of carry-on luggage.",
         ["maximum", "only", "total", "greatly"], 1,
         "Phó từ 'only' (chỉ duy nhất) đứng trước cụm số lượng 'one piece of carry-on luggage' để giới hạn số lượng hành lý xách tay."),
        ("Because the shipment was delayed at the border, the warehouse manager had to ___ the delivery schedule.",
         ["modify", "modified", "modification", "modifying"], 0,
         "Sau cấu trúc 'had to' (phải) cần một động từ nguyên mẫu không 'to' (bare infinitive) → 'modify' (điều chỉnh, sửa đổi)."),
        ("The marketing department worked ___ to launch the autumn advertising campaign ahead of schedule.",
         ["tireless", "tirelessly", "tirelessness", "tiring"], 1,
         "Bổ nghĩa cho động từ thường 'worked' cần một phó từ (adverb) đuôi -ly → 'tirelessly' (làm việc một cách không mệt mỏi)."),
        ("Any team member ___ needs remote access to the corporate network should contact technical support.",
         ["who", "which", "whose", "whom"], 0,
         "Đại từ quan hệ thay thế cho danh từ chỉ người 'team member' và đóng vai trò chủ ngữ cho mệnh đề quan hệ ('needs remote access') → dùng 'who'."),
        ("Despite the inclement weather conditions, the outdoor corporate gala was ___ attended by over three hundred guests.",
         ["well", "good", "better", "best"], 0,
         "Cụm tính từ/phân từ kết hợp: 'well attended' (được tham dự đông đủ, có nhiều người đến tham gia)."),
        ("Please ensure that the attached confidentiality agreement is signed and returned to our legal office ___.",
         ["prompt", "promptly", "promptness", "prompted"], 1,
         "Bổ nghĩa cho hành động 'signed and returned' cần phó từ đuôi -ly → 'promptly' (một cách kịp thời, ngay lập tức)."),
        ("The newly installed ventilation system operates much more ___ than the old machinery.",
         ["efficient", "efficiency", "efficiently", "more efficient"], 2,
         "Bổ nghĩa cho động từ 'operates' trong cấu trúc so sánh hơn với 'much more ... than' cần phó từ 'efficiently'."),
        ("Ms. Vance was chosen as the keynote speaker because of her ___ knowledge of renewable energy markets.",
         ["extensive", "extensively", "extension", "extent"], 0,
         "Đứng trước danh từ 'knowledge' (kiến thức) cần một tính từ (adjective) để bổ nghĩa → 'extensive knowledge' (kiến thức sâu rộng)."),
        ("Employees are requested not to leave personal belongings unattended ___ the central conference lobby.",
         ["in", "at", "on", "to"], 0,
         "Giới từ chỉ không gian bên trong một khu vực, phòng hoặc sảnh kín: 'in the central conference lobby'."),
        ("The regional sales figures for the second quarter exceeded the executive committee's initial ___.",
         ["expectations", "expected", "expectant", "expectantly"], 0,
         "Đứng sau tính từ sở hữu 'committee's' và tính từ 'initial' cần một danh từ số nhiều → 'expectations' (sự kỳ vọng ban đầu)."),
        ("Neither the sales manager nor the marketing associates ___ satisfied with the television advertisement preview.",
         ["was", "were", "is", "being"], 1,
         "Quy tắc hòa hợp chủ ngữ - động từ với cấu trúc 'Neither... nor...': động từ chia theo danh từ gần nhất ('the marketing associates' số nhiều) → 'were' (quá khứ)."),
        ("In order to receive a full refund, customers must present the original receipt ___ thirty days of purchase.",
         ["within", "inside", "between", "beyond"], 0,
         "Giới từ chỉ giới hạn thời gian: 'within thirty days' (trong vòng 30 ngày kể từ ngày mua). 'inside' thường chỉ không gian vật lý."),
        ("Dr. Tanaka's research proposal on synthetic biodegradable polymers has generated ___ interest among investors.",
         ["consider", "considerable", "considerably", "consideration"], 1,
         "Đứng trước danh từ không đếm được 'interest' (sự quan tâm) cần một tính từ → 'considerable interest' (sự quan tâm đáng kể)."),
        ("The technical manual provides ___ instructions on how to assemble the modular shelving unit.",
         ["step-by-step", "hardly", "seldom", "almost"], 0,
         "Cụm tính từ ghép 'step-by-step instructions' (hướng dẫn từng bước cụ thể)."),
        ("Our customer service hotline is available twenty-four hours a day to assist clients with ___ inquiries.",
         ["they", "them", "their", "themselves"], 2,
         "Đứng trước danh từ số nhiều 'inquiries' (thắc mắc) cần một tính từ sở hữu (possessive adjective) → 'their'."),
        ("The board of trustees voted unanimously to ___ Mr. Howard as the new Chief Executive Officer.",
         ["appoint", "appointing", "appointment", "appointed"], 0,
         "Sau cấu trúc động từ 'voted to' cần một động từ nguyên mẫu có 'to' (to-infinitive) → 'appoint' (bổ nhiệm)."),
        ("Although the software update caused minor disruptions, overall network productivity remained ___ high.",
         ["remark", "remarkable", "remarkably", "remarkableness"], 2,
         "Bổ nghĩa cho tính từ 'high' cần một phó từ (adverb) → 'remarkably high' (cao một cách đáng kể)."),
        ("The company will reimburse all travel expenditures, ___ that original itemized receipts are submitted.",
         ["provided", "unless", "in spite of", "whereas"], 0,
         "Liên từ điều kiện 'provided that' (= as long as, miễn là/với điều kiện là). 'unless' = nếu không; 'in spite of' + N/V-ing."),
        ("All catering staff must wash their hands thoroughly ___ handling prepared food items.",
         ["prior to", "next to", "in front of", "due to"], 0,
         "Cụm giới từ 'prior to' (= before, trước khi) + V-ing ('handling'). 'due to' chỉ nguyên nhân; 'next to' chỉ vị trí cạnh bên."),
        ("The maintenance team has scheduled an inspection to determine the ___ cause of the unexpected power failure.",
         ["precise", "precisely", "precision", "preciseness"], 0,
         "Đứng trước danh từ 'cause' (nguyên nhân) cần một tính từ → 'precise cause' (nguyên nhân chính xác)."),
        ("The newly hired accountant has already proven ___ to be an indispensable asset to our financial department.",
         ["her", "hers", "herself", "she"], 2,
         "Đại từ phản thân 'herself' làm tân ngữ khi chủ ngữ 'The newly hired accountant' tự chứng tỏ năng lực của chính mình ('proven herself to be')."),
        ("Subscribers who wish to renew their annual membership may do so by visiting our website or ___ our toll-free hotline.",
         ["calling", "called", "call", "caller"], 0,
         "Cấu trúc song song (parallel structure) nối bằng 'or': 'by visiting... or calling...' (cùng đi sau giới từ 'by')."),
        ("The city council has approved the construction of a new bridge to relieve traffic congestion on the ___ highway.",
         ["adjacent", "adjacently", "adjacency", "adjoin"], 0,
         "Đứng trước danh từ 'highway' cần một tính từ bổ nghĩa → 'adjacent highway' (đoạn đường cao tốc liền kề/liền sát)."),
        ("Ms. Davies was unable to attend the conference in Berlin ___ she had contracted a severe respiratory infection.",
         ["because", "because of", "so that", "therefore"], 0,
         "Trước mệnh đề đầy đủ 'she had contracted...' (S + V) cần một liên từ chỉ lý do → 'because'. 'because of' chỉ đi kèm danh từ/cụm danh từ."),
        ("The warranty covers repairs and replacement parts for any manufacturing defect discovered ___ the first two years.",
         ["during", "along", "against", "across"], 0,
         "Giới từ 'during' + khoảng thời gian: 'during the first two years' (trong suốt hai năm đầu tiên)."),
        ("The committee members found Mr. Patel's restructuring proposal to be both innovative and ___ sound.",
         ["economy", "economic", "economically", "economize"], 2,
         "Bổ nghĩa cho tính từ 'sound' (vững chắc, hợp lý) cần một phó từ → 'economically sound' (vững vàng/khả thi về mặt kinh tế)."),
        ("Had the shipment arrived on time, the assembly line ___ able to meet the weekend export deadline.",
         ["would be", "would have been", "will be", "had been"], 1,
         "Đảo ngữ câu điều kiện loại 3 ('Had the shipment arrived...'): mệnh đề chính dùng 'would have been' để diễn tả kết quả trái ngược thực tế trong quá khứ."),
        ("Under the revised company policy, unused vacation days may not be ___ over into the following calendar year.",
         ["carried", "carrying", "carry", "carrier"], 0,
         "Thể bị động sau động từ khuyết thiếu 'may not be' + V3/ed: 'carried over' (được chuyển sang năm tiếp theo).")
    ]
    
    for i, (q, o, a, x) in enumerate(p5_data):
        questions.append({
            "lv": "B1" if i < 15 else "B2",
            "t": "mc",
            "q": f"Part 5 (Câu {101+i}): {q}",
            "o": o,
            "a": a,
            "x": x
        })
        
    # PART 6: 131 - 146 (16 questions, 4 texts x 4 Qs)
    p6_texts = [
        # Text 1: 131-134
        ("TOEIC Part 6: Text Completion (Questions 131–134)\nRead the following internal memorandum:\n\nMEMORANDUM\nTo: All Office Personnel\nFrom: IT Infrastructure & Cyber Security Department\nDate: October 12\nSubject: Scheduled Cloud Server Migration\n\nPlease be advised that our central data servers will undergo a comprehensive migration to our new enterprise cloud platform this coming weekend, starting Saturday at 10:00 PM and concluding Sunday at 6:00 AM. During this timeframe, access to corporate email, remote files, and intranet databases will be ___ (131) unavailable.\n\nWe anticipate that normal services will be fully restored by Monday morning. However, we strongly recommend that all employees ___ (132) their current workstations before departing the premises on Friday. ___ (133). If you experience any persistent login anomalies on Monday, please contact the IT Helpdesk directly at extension 4022. We appreciate your cooperation as we implement these ___ (134) upgrades to enhance data security.",
         [
             ("Question 131: Choose the word that best completes gap (131):",
              ["temporary", "temporarily", "temporal", "temporize"], 1,
              "Bổ nghĩa cho tính từ 'unavailable' (không khả dụng) cần một phó từ đuôi -ly → 'temporarily' (tạm thời không khả dụng)."),
             ("Question 132: Choose the word that best completes gap (132):",
              ["shut down", "shutting down", "have shut down", "will shut down"], 0,
              "Cấu trúc giả định thức với động từ yêu cầu/khuyên nhủ: 'recommend that + S + (should) + V(bare)' → 'shut down' (tắt máy)."),
             ("Question 133: Choose the sentence that best fits gap (133):",
              ["This simple precaution will prevent data synchronization conflicts.",
               "The cafeteria menu will feature seasonal Italian dishes next week.",
               "Our competitor has announced a merger with an international telecom firm.",
               "All overseas flights must be booked through the designated travel agent."], 0,
              "Câu liền trước khuyên nhân viên tắt máy tính trước khi rời văn phòng thứ Sáu. Câu phù hợp nhất về mặt logic là giải thích lý do: 'Biện pháp phòng ngừa đơn giản này sẽ ngăn ngừa xung đột đồng bộ hóa dữ liệu'."),
             ("Question 134: Choose the word that best completes gap (134):",
              ["critical", "critic", "critically", "criticism"], 0,
              "Đứng trước danh từ số nhiều 'upgrades' cần một tính từ bổ nghĩa → 'critical upgrades' (những nâng cấp mang tính sống còn/quan trọng).")
         ]),
        # Text 2: 135-138
        ("TOEIC Part 6: Text Completion (Questions 135–138)\nRead the following customer response letter:\n\nDear Mr. Henderson,\n\nThank you for contacting customer relations at Horizon Audio Devices regarding your recent purchase of the Horizon Pro Wireless Noise-Cancelling Headphones. We are truly sorry to hear that the left ear cup began producing distorted sound shortly after ___ (135) the product.\n\nAt Horizon Audio, we take exceptional pride in the craftsmanship of our audio equipment. Because your item is well within its one-year manufacturer warranty, we would be delighted to offer you a brand-new replacement unit at no ___ (136) cost to you. ___ (137). Enclosed with this letter is a prepaid shipping label. Simply affix this label to the original packaging and drop the parcel at any authorized shipping drop box. Once our returns depot verifies receipt of the defective headphones, your replacement will be dispatched via express courier ___ (138) forty-eight hours.\n\nSincerely,\nKaren Miller, Customer Resolution Specialist",
         [
             ("Question 135: Choose the word that best completes gap (135):",
              ["receive", "receiving", "received", "reception"], 1,
              "Sau giới từ 'after' là một danh động từ (gerund): 'after receiving the product' (sau khi nhận sản phẩm)."),
             ("Question 136: Choose the word that best completes gap (136):",
              ["additional", "addition", "additionally", "additive"], 0,
              "Đứng trước danh từ 'cost' (chi phí) cần tính từ → 'at no additional cost' (hoàn toàn không mất thêm phụ phí nào)."),
             ("Question 137: Choose the sentence that best fits gap (137):",
              ["We also require that you purchase an extended service plan today.",
               "Alternatively, you may elect to receive a full refund credited to your credit card.",
               "Our corporate headquarters is moving to a brand new facility next month.",
               "Earbuds are generally not recommended for deep underwater swimming."], 1,
              "Sau khi đề xuất đổi máy mới miễn phí, câu nối tiếp hợp lý nhất về chính sách bảo hành khách hàng là quyền chọn hoàn tiền: 'Ngoài ra, quý khách cũng có thể lựa chọn nhận hoàn lại toàn bộ số tiền vào thẻ tín dụng'."),
             ("Question 138: Choose the word that best completes gap (138):",
              ["within", "between", "among", "beyond"], 0,
              "Giới từ chỉ thời hạn thực hiện: 'within forty-eight hours' (trong vòng 48 giờ làm việc).")
         ]),
        # Text 3: 139-142
        ("TOEIC Part 6: Text Completion (Questions 139–142)\nRead the following public announcement:\n\nCOMMUNITY NOTICE: GRAND CENTRAL PLAZA RENOVATION\n\nThe City Urban Development Authority is pleased to announce that phase two of the Grand Central Plaza revitalization project will officially commence on Monday, March 4. This phase will focus on installing pedestrian-friendly brick walkways, energy-efficient LED streetlamps, and expansive green spaces designed to encourage community ___ (139).\n\nDuring the six-month construction phase, vehicular traffic on Maple Avenue between 4th and 7th Streets will be ___ (140) diverted to Elm Boulevard. ___ (141). Local shops and eateries along the plaza perimeter will remain fully accessible to pedestrians at all times. The municipal authority has worked closely with shop owners to ensure that deliveries can take place without significant ___ (142). We thank local residents and visitors for their patience as we transform Grand Central Plaza into a vibrant public hub.",
         [
             ("Question 139: Choose the word that best completes gap (139):",
              ["gatherings", "gathered", "gather", "gathering"], 0,
              "Cụm danh từ 'community gatherings' (các buổi tụ họp cộng đồng)."),
             ("Question 140: Choose the word that best completes gap (140):",
              ["partially", "partial", "part", "parting"], 0,
              "Bổ nghĩa cho động từ bị động 'will be diverted' cần phó từ đuôi -ly → 'partially diverted' (được phân luồng một phần sang đại lộ Elm)."),
             ("Question 141: Choose the sentence that best fits gap (141):",
              ["Detailed detour signage will be clearly erected at every major intersection.",
               "The annual winter sports festival will be held in the mountain district.",
               "Most modern sports cars are equipped with high-performance engines.",
               "Parking fees at the city hall parking lot have recently doubled."], 0,
              "Câu trước nói về việc phân luồng xe cộ trong 6 tháng thi công. Câu tiếp theo hợp lý nhất là: 'Biển báo đường vòng chi tiết sẽ được dựng rõ ràng tại mỗi giao lộ lớn'."),
             ("Question 142: Choose the word that best completes gap (142):",
              ["disruption", "disrupt", "disruptive", "disruptively"], 0,
              "Đứng sau tính từ 'significant' (đáng kể) cần một danh từ → 'significant disruption' (sự gián đoạn đáng kể).")
         ]),
        # Text 4: 143-146
        ("TOEIC Part 6: Text Completion (Questions 143–146)\nRead the following press release:\n\nPRESS RELEASE: NEXUS LOGISTICS EXPANDS INTO SOUTHEAST ASIA\n\nSINGAPORE — Nexus Logistics International, a leading provider of temperature-controlled supply chain solutions, today announced the opening of its state-of-the-art cold storage facility in Jurong Port, Singapore. The 180,000-square-meter facility represents a $65 million investment and is specifically designed to meet the ___ (143) demand for biopharmaceutical and fresh agricultural imports across the Asia-Pacific region.\n\nEquipped with solar roofing panels and automated robotic retrieval systems, the warehouse is projected to reduce operational energy consumption by thirty-five percent. Mr. Jonathan Tan, Managing Director for Nexus Asia-Pacific, noted that the facility has already secured multi-year distribution contracts with several multinational pharmaceutical conglomerates. ___ (144). 'This expansion highlights our steadfast commitment to providing clients with the most reliable, sustainable, and technologically advanced cold-chain infrastructure ___ (145),' Tan remarked during the ribbon-cutting ceremony. The facility will become fully ___ (146) on November 1.",
         [
             ("Question 143: Choose the word that best completes gap (143):",
              ["grow", "grown", "growing", "growth"], 2,
              "Đứng trước danh từ 'demand' cần tính từ dạng V-ing mang nghĩa chủ động đang phát triển: 'the growing demand' (nhu cầu ngày một gia tăng)."),
             ("Question 144: Choose the sentence that best fits gap (144):",
              ["Initial commercial shipments are scheduled to pass through the facility next week.",
               "The CEO enjoys playing tennis and cycling on coastal paths during weekends.",
               "Passengers should ensure their seatbelts are fastened during takeoff.",
               "Old diesel locomotives are gradually being phased out of European freight rails."], 0,
              "Đoạn văn vừa thông báo kho bãi đã ký hợp đồng với các tập đoàn dược phẩm. Câu tiếp theo phù hợp logic: 'Các chuyến hàng thương mại đầu tiên dự kiến sẽ bắt đầu luân chuyển qua kho bãi vào tuần tới'."),
             ("Question 145: Choose the word that best completes gap (145):",
              ["available", "availability", "avail", "availably"], 0,
              "Tính từ đứng sau cụm danh từ để bổ nghĩa: 'infrastructure available' (cơ sở hạ tầng hiện có trên thị trường)."),
             ("Question 146: Choose the word that best completes gap (146):",
              ["operational", "operate", "operation", "operationally"], 0,
              "Sau linking verb 'become fully' cần một tính từ → 'become fully operational' (trở nên đi vào hoạt động toàn diện).")
         ])
    ]
    
    q_num = 131
    for ctx, q_list in p6_texts:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "q": f"Part 6 (Câu {q_num}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            q_num += 1

    # PART 7: 147 - 200 (54 questions: Single, Double, Triple)
    # We build rich passages with authentic ETS questions
    p7_items = [
        # Set 1: Single passage (Email) Q147-148
        ("TOEIC Part 7: Reading Comprehension (Questions 147–148)\n\nTo: Marcus Vance <mvance@vanguardanalytics.com>\nFrom: Clara Lindqvist <seminars@nordictechsummit.org>\nDate: August 14\nSubject: Speaker Confirmation — Nordic Technology Summit\n\nDear Mr. Vance,\nWe are delighted to confirm that your workshop proposal, 'Deploying Resilient Edge AI Architectures', has been accepted for the upcoming Nordic Technology Summit in Stockholm. Your 90-minute session is scheduled for Thursday, October 19, from 2:00 PM to 3:30 PM in Hall C4.\n\nAs an invited workshop lead, your conference registration fee is fully waived, and you are cordially invited to the VIP networking dinner on Wednesday evening at the Waterfront Grand Hotel. Please upload your final presentation slides and any required software prerequisites to the speaker portal no later than October 5 so that our audio-visual technicians can verify equipment compatibility.\n\nBest regards,\nClara Lindqvist, Program Coordinator",
         [
             ("What is the primary purpose of the email?",
              ["To negotiate consulting fees for a client",
               "To confirm a speaker's presentation schedule at a conference",
               "To notify attendees of a conference cancellation",
               "To request a refund for hotel accommodations"], 1,
              "Email từ ban tổ chức gửi Marcus Vance xác nhận buổi hội thảo 'Deploying Resilient Edge AI Architectures' đã được chấp thuận vào ngày 19 tháng 10."),
             ("What is Mr. Vance asked to do by October 5?",
              ["Submit his flight itinerary for reimbursement",
               "Upload his presentation materials to the speaker portal",
               "Confirm his menu preference for the VIP dinner",
               "Register his colleagues for discounted guest passes"], 1,
              "Đoạn 2: 'Please upload your final presentation slides and any required software prerequisites to the speaker portal no later than October 5'.")
         ]),

        # Set 2: Single passage (Advertisement) Q149-150
        ("TOEIC Part 7: Reading Comprehension (Questions 149–150)\n\nWORKSPHERE: PREMIUM CO-WORKING SPACES IN DOWNTOWN SEATTLE\n\nLooking for an inspiring, flexible environment for your growing startup or independent consultancy? WorkSphere offers fully furnished private offices, dedicated desks, and shared hot-desk memberships in the heart of Seattle's business district.\n\nMembership Benefits Include:\n• High-speed fiber-optic Wi-Fi and secure printing stations\n• Complimentary artisan coffee, organic teas, and fruit-infused water\n• State-of-the-art conference rooms with video-conferencing technology (4 hours monthly included for dedicated desk members)\n• 24/7 keycard access with monitored security\n\nSpecial Autumn Promotion: Sign a six-month lease for any private office before September 30 and receive your first month completely rent-free! Visit www.worksphere-seattle.com/tour to schedule a personalized walkthrough.",
         [
             ("Who is the advertisement most likely targeting?",
              ["Hotel managers seeking cleaning services",
               "Entrepreneurs and independent consultants needing office space",
               "Construction workers looking for building equipment",
               "Travel agents booking flight itineraries"], 1,
              "Dòng đầu quảng cáo: 'Looking for an inspiring, flexible environment for your growing startup or independent consultancy?'."),
             ("What promotional benefit is available to new private office tenants?",
              ["A 50% discount on annual parking permits",
               "One month of free rent with a six-month lease agreement",
               "Unlimited free usage of conference rooms worldwide",
               "Free airline tickets to technology conventions"], 1,
              "Đoạn 'Special Autumn Promotion': 'Sign a six-month lease for any private office before September 30 and receive your first month completely rent-free!'")
         ]),

        # Set 3: Single passage (Schedule / Itinerary) Q151-152
        ("TOEIC Part 7: Reading Comprehension (Questions 151–152)\n\nEXECUTIVE ITINERARY: DR. ARLO KRAMER\nPurpose: European Supplier Audit & Partner Meetings\nDates: June 10–13\n\nMonday, June 10:\n• 08:30 – Departure from New York (JFK) via Lufthansa Flight LH401\n• 22:15 – Arrival at Frankfurt International Airport (FRA); transfer to Steigenberger Hotel\n\nTuesday, June 11:\n• 09:30 – 12:00: Facility inspection at Rhine Precision Optics GmbH, Darmstadt\n• 13:00 – Lunch with Managing Director Klaus Richter\n• 15:00 – 17:30: Quality compliance review and contract negotiation\n\nWednesday, June 12:\n• 08:00 – Express train to Zurich, Switzerland\n• 14:00 – Presentation at Swiss BioHealth Symposium (Auditorium 2)\n• 19:30 – Dinner with regional medical device distributors\n\nThursday, June 13:\n• 11:00 – Return flight Zurich (ZRH) to New York (JFK)",
         [
             ("Where will Dr. Kramer conduct a facility inspection on June 11?",
              ["Frankfurt International Airport",
               "Rhine Precision Optics in Darmstadt",
               "Swiss BioHealth Auditorium in Zurich",
               "JFK Airport in New York"], 1,
              "Lịch trình ngày Tuesday, June 11: '09:30 – 12:00: Facility inspection at Rhine Precision Optics GmbH, Darmstadt'."),
             ("How will Dr. Kramer travel from Germany to Switzerland?",
              ["By commercial airliner",
               "By rental car",
               "By express passenger train",
               "By chartered ferry"], 2,
              "Lịch trình ngày Wednesday, June 12: '08:00 – Express train to Zurich, Switzerland'.")
         ]),

        # Set 4: Single passage (Online Chat Discussion) Q153-155
        ("TOEIC Part 7: Reading Comprehension (Questions 153–155)\n\n[10:14 AM] Liam Foster (Lead DevOps Engineer):\nHey team, our automated alert system just flagged an unexpected surge in database CPU utilization on the US-East server cluster. Web checkout latency is creeping past 8 seconds.\n\n[10:16 AM] Sophia Chen (Backend Developer):\nI see it too. It looks like the flash sale on wireless earbuds that launched at 10:00 AM generated triple the anticipated traffic. The read-replicas are completely overwhelmed.\n\n[10:18 AM] Liam Foster:\nCan we spin up three additional container instances on the auto-scaling group immediately?\n\n[10:20 AM] Marcus Thorne (Database Architect):\nAlready on it. I just provisioned four extra read-replicas and routed 60% of checkout queries through the cached memory layer. Latency should normalize within two minutes.\n\n[10:23 AM] Sophia Chen:\nConfirmed. Response times are down to 350 milliseconds. Everything is green again.\n\n[10:25 AM] Liam Foster:\nGreat catch, everyone. Let's document this incident during our 3:00 PM retrospective.",
         [
             ("What problem did Liam Foster report at 10:14 AM?",
              ["A physical power outage at corporate headquarters",
               "High server CPU utilization and slow checkout response times",
               "An unauthorized breach of customer credit card data",
               "A cancellation of an upcoming product launch"], 1,
              "Liam nhắn: 'our automated alert system just flagged an unexpected surge in database CPU utilization... Web checkout latency is creeping past 8 seconds'."),
             ("What caused the sudden increase in system traffic?",
              ["A malware attack targeting company servers",
               "A flash sale promotions event starting at 10:00 AM",
               "An accidental deletion of customer transaction logs",
               "A scheduled software backup operating during business hours"], 1,
              "Sophia giải thích lúc 10:16 AM: 'the flash sale on wireless earbuds that launched at 10:00 AM generated triple the anticipated traffic'."),
             ("What did Marcus Thorne do to resolve the situation?",
              ["He shut down the checkout page for twenty-four hours",
               "He added extra database replicas and redirected traffic to cache",
               "He refunded all affected customer orders immediately",
               "He postponed the 3:00 PM retrospective meeting"], 1,
              "Marcus nhắn lúc 10:20 AM: 'I just provisioned four extra read-replicas and routed 60% of checkout queries through the cached memory layer'.")
         ]),

        # Set 5: Single passage (Article) Q156-158
        ("TOEIC Part 7: Reading Comprehension (Questions 156–158)\n\nTHE INDUSTRIAL CHRONICLE\nNovember Edition\n\nGreenFleet Logistics Transitioning Entire Urban Fleet to Electric Power\nBy Helena Rostova\n\nGreenFleet Logistics, one of North America's fastest-growing express freight carriers, announced on Wednesday that it will replace all 1,200 of its fossil-fuel delivery vans across twelve major metropolitan hubs with custom-built electric delivery vehicles by the end of 2027.\n\nThe multimillion-dollar agreement was finalized following a rigorous six-month pilot trial in Chicago and Toronto. During the trial, electric delivery vans demonstrated a 42 percent reduction in routine maintenance expenditures and eliminated over 350 metric tons of tailpipe carbon emissions compared to traditional diesel vehicles.\n\nTo support this sweeping transition, GreenFleet will construct proprietary rapid-charging depots powered by rooftop solar photovoltaic arrays at each of its regional sorting terminals. 'While the initial capital expenditure is significant, lower operating costs per mile and expanding municipal clean-air incentives ensure that this transition will be net-positive for our operating profit by year three,' explained Chief Financial Officer Julian Bennett.",
         [
             ("What is the main topic of the article?",
              ["A company's initiative to replace its urban fleet with electric vehicles",
               "A government tax increase on commercial diesel freight",
               "A dispute between logistics executives and vehicle manufacturers",
               "The grand opening of an electric automobile manufacturing plant"], 0,
              "Bài báo thông báo: 'GreenFleet Logistics... will replace all 1,200 of its fossil-fuel delivery vans... with custom-built electric delivery vehicles by the end of 2027'."),
             ("What was one finding of the pilot trial conducted in Chicago and Toronto?",
              ["Vehicle battery life decreased significantly in winter weather",
               "Routine maintenance expenses dropped by 42 percent",
               "Delivery drivers required two months of specialized retraining",
               "Customer package delivery times were delayed by several hours"], 1,
              "Đoạn 2: 'electric delivery vans demonstrated a 42 percent reduction in routine maintenance expenditures'."),
             ("According to Julian Bennett, when will the electric vehicle investment turn net-positive?",
              ["Immediately upon signing the contract",
               "Within six months of the pilot trial",
               "By the third year of operation",
               "Only after the year 2035"], 2,
              "Đoạn cuối: 'ensure that this transition will be net-positive for our operating profit by year three, explained CFO Julian Bennett'.")
         ]),

        # Set 6: Single passage (Billing Statement / Invoice) Q159-161
        ("TOEIC Part 7: Reading Comprehension (Questions 159–161)\n\nVORTEX CATERING SERVICES — COMMERCIAL INVOICE\nInvoice Number: VCS-8821\nInvoice Date: September 28\nPayment Terms: Net 30 Days\nBilled To: Apex Financial Consulting, 450 Lexington Ave, New York, NY\nEvent: Annual Client Appreciation Banquet\nEvent Date: September 25\nLocation: Manhattan Skyline Ballroom\n\nItemized Charges:\n1. Gourmet Hors d'oeuvres (120 guests @ $35.00/person): $4,200.00\n2. Three-Course Plated Dinner (120 guests @ $75.00/person): $9,000.00\n3. Premium Beverage Package & Bar Staffing (5 hours): $3,500.00\n4. Audio-Visual Equipment Rental (Dual HD Projectors + Wireless Mics): $850.00\n5. Event Service Gratuity (18% of food & beverage): $2,916.00\n\nSubtotal: $20,466.00\nLess Advance Deposit Paid (Aug 15): -$5,000.00\nTotal Balance Due by October 28: $15,466.00\n\nPlease remit payment via electronic wire transfer to Vortex Catering Business Account #049-88321.",
         [
             ("For what event was the invoice issued?",
              ["An employee holiday retirement party",
               "An annual client appreciation banquet",
               "A weekly team luncheon",
               "A shareholder quarterly voting conference"], 1,
              "Hóa đơn ghi rõ: 'Event: Annual Client Appreciation Banquet'."),
             ("What is the remaining balance due by October 28?",
              ["$4,200.00",
               "$5,000.00",
               "$15,466.00",
               "$20,466.00"], 2,
              "Dòng cuối: 'Total Balance Due by October 28: $15,466.00' (sau khi đã trừ $5,000 tiền đặt cọc)."),
             ("How is Apex Financial Consulting requested to pay the balance?",
              ["By mailing a personal paper check",
               "By paying cash at the catering office",
               "Via electronic bank wire transfer",
               "Through corporate reward points"], 2,
              "Dòng cuối: 'Please remit payment via electronic wire transfer to Vortex Catering Business Account #049-88321'.")
         ]),

        # Set 7: Single passage (Memo / Policy) Q162-165
        ("TOEIC Part 7: Reading Comprehension (Questions 162–165)\n\nPINNACLE BIOPHARMA — CORPORATE POLICY UPDATE\nDate: January 15\nTo: All Salaried Staff Members\nFrom: Corporate Travel & Expense Management\nSubject: Revised Business Travel and Accommodation Guidelines\n\nEffective February 1, Pinnacle Biopharma is implementing revised guidelines for domestic and international employee business travel. The objective is to standardize expense reporting, streamline reimbursement cycles, and support sustainable travel options.\n\nKey Policy Changes:\n1. Air Travel: Economy class must be selected for all flights with a scheduled duration of under six hours. For intercontinental flights exceeding six continuous hours, employees may book Premium Economy or Business Class with prior departmental vice-president authorization.\n2. Hotel Lodging: Maximum allowable nightly room rates are capped according to destination city tier (Tier 1 cities such as London, Tokyo, and New York: up to $280/night; all other cities: up to $190/night).\n3. Meal Per Diem: A flat daily allowance of $75 covers breakfast, lunch, and dinner. Itemized grocery or restaurant receipts are no longer required for food claims below this cap.\n4. Submission Deadlines: All expense reports must be submitted through the Concur travel portal within fifteen calendar days of completing a trip. Submissions beyond thirty days will be rejected automatically without exception.",
         [
             ("What is the primary purpose of the memorandum?",
              ["To introduce revised corporate travel and lodging policies",
               "To announce the merger of two pharmaceutical companies",
               "To inform staff of flight cancellations caused by a pilot strike",
               "To cut employee annual vacation allowances"], 0,
              "Tiêu đề và câu đầu: 'Revised Business Travel and Accommodation Guidelines... implementing revised guidelines for domestic and international employee business travel'."),
             ("Under what condition may an employee book Business Class airfare?",
              ["Whenever traveling on a weekend",
               "If the employee has worked at the company for over five years",
               "For flights over six continuous hours with VP approval",
               "Whenever the flight ticket is purchased sixty days in advance"], 2,
              "Mục 1: 'For intercontinental flights exceeding six continuous hours, employees may book Premium Economy or Business Class with prior departmental vice-president authorization'."),
             ("What is the maximum nightly hotel rate for a traveler visiting London?",
              ["$75", "$190", "$280", "$350"], 2,
              "Mục 2: 'Tier 1 cities such as London, Tokyo, and New York: up to $280/night'."),
             ("What happens to travel expense reports submitted forty days after a trip?",
              ["They will be processed with a 10% penalty fee",
               "They will be automatically rejected",
               "They will require the CEO's personal signature",
               "They will be credited to the employee's retirement account"], 1,
              "Mục 4: 'Submissions beyond thirty days will be rejected automatically without exception'.")
         ]),

        # Set 8: Single passage (Feedback Letter / Recommendation) Q166-170
        ("TOEIC Part 7: Reading Comprehension (Questions 166–170)\n\nAVALON ARCHITECTURAL DESIGN GROUP\nPerformance Appraisal & Promotion Recommendation\nCandidate: Brenda Wallace (Senior Project Architect)\nReviewing Director: Gregory O'Connor, AIA\nDate: December 5\n\nSummary of Contributions:\nOver the past twenty-four months, Ms. Wallace has served as the lead project architect for the Riverfront Eco-Tower project, a $140 million mixed-use sustainable development in downtown Chicago. Throughout this demanding assignment, Ms. Wallace demonstrated exemplary design leadership, rigorous budgetary oversight, and consummate skill in coordinating multidisciplinary teams of structural engineers, landscape architects, and municipal zoning officials.\n\nNoteworthy Accomplishments:\n• Successfully secured LEED Platinum pre-certification ahead of municipal filing deadlines.\n• Identified an innovative geothermal heating configuration that reduced overall building heating lifecycle costs by an estimated 28 percent.\n• Managed a junior team of six architectural interns, fostering professional mentorship and zero turnover during a period of intense project milestones.\n• Maintained transparent, proactive communications with the primary real estate developer, ensuring that revisions were executed without delaying construction timelines.\n\nRecommendation:\nIt is with highest enthusiasm that I recommend Ms. Wallace's promotion to Associate Director of Sustainable Architecture, effective January 1. Her technical acumen and collaborative mindset reflect the core principles of our firm.",
         [
             ("Who is the subject of this performance appraisal?",
              ["Gregory O'Connor", "Brenda Wallace", "A junior intern", "The city mayor"], 1,
              "Đầu văn bản ghi: 'Candidate: Brenda Wallace (Senior Project Architect)'."),
             ("What project did Ms. Wallace manage over the last two years?",
              ["A high-speed rail terminal in Toronto",
               "The Riverfront Eco-Tower development in Chicago",
               "A private residential villa in Los Angeles",
               "A suburban shopping center renovation"], 1,
              "Đoạn 1: 'Ms. Wallace has served as the lead project architect for the Riverfront Eco-Tower project, a $140 million mixed-use sustainable development in downtown Chicago'."),
             ("What achievement is credited to Ms. Wallace regarding geothermal heating?",
              ["She invented a brand new solar photovoltaic panel",
               "She reduced building heating lifecycle costs by 28 percent",
               "She installed emergency diesel generators in the basement",
               "She obtained free natural gas supply from the city council"], 1,
              "Mục 2: 'Identified an innovative geothermal heating configuration that reduced overall building heating lifecycle costs by an estimated 28 percent'."),
             ("What is noted about Ms. Wallace's mentorship of junior staff?",
              ["All interns left the company within six months",
               "She experienced zero staff turnover among her intern team",
               "She doubled their working hours on weekends",
               "She required interns to retake state architectural exams"], 1,
              "Mục 3: 'Managed a junior team of six architectural interns, fostering professional mentorship and zero turnover'."),
             ("What promotion is recommended for Ms. Wallace?",
              ["Chief Executive Officer",
               "Associate Director of Sustainable Architecture",
               "Senior Building Inspector for the City of Chicago",
               "Marketing and Public Relations Manager"], 1,
              "Đoạn cuối: 'recommend Ms. Wallace's promotion to Associate Director of Sustainable Architecture, effective January 1'.")
         ]),

        # Set 9: Single passage (Symposium Program) Q171-175
        ("TOEIC Part 7: Reading Comprehension (Questions 171–175)\n\nPACIFIC COMMERCE & INNOVATION SYMPOSIUM\nLocation: Sydney Convention and Exhibition Centre (Darling Harbour)\nDate: Friday, November 17\n\nMorning Agenda:\n• 08:30 – 09:15: Registration, Badge Collection, and Continental Breakfast (Grand Foyer)\n• 09:15 – 09:30: Opening Remarks by Dr. Evelyn Zhao, Symposium Chair\n• 09:30 – 10:45: Keynote Address: 'Navigating Global Supply Chain Vulnerabilities in an Era of Geopolitical Transition' — Speaker: Admiral (Ret.) Thomas Sterling, Senior Fellow at Maritime Policy Institute (Auditorium A)\n• 10:45 – 11:15: Networking Refreshment Break & Technology Exhibition (Exhibition Hall 2)\n• 11:15 – 12:45: Concurrent Breakout Panels:\n  - Session 1: 'Cross-Border Fintech: Accelerating Digital Currency Settlement' (Room 101)\n    Moderator: Sandra Higgins (Global Banking Group)\n  - Session 2: 'Decarbonizing Heavy Maritime Freight: LNG, Ammonia, and Wind Assistance' (Room 102)\n    Moderator: Kenji Sato (Nippon Maritime Systems)\n  - Session 3: 'Automating Warehouse Fulfillment with Autonomous Mobile Robotics' (Room 103)\n    Moderator: Rachel DuPont (LogiTech Robotics)\n\nAfternoon Schedule:\n• 12:45 – 14:00: Buffet Luncheon & Trade Exhibition\n• 14:00 – 15:30: Executive Roundtables (Open only to Diamond & Platinum Pass Holders)\n• 15:45 – 17:00: Closing Plenary & Startup Innovation Awards Ceremony",
         [
             ("Where is the symposium taking place?",
              ["Tokyo International Forum",
               "Sydney Convention and Exhibition Centre",
               "Stockholm Waterfront Conference Center",
               "San Francisco Marriott Marquis"], 1,
              "Tiêu đề: 'Location: Sydney Convention and Exhibition Centre (Darling Harbour)'."),
             ("Who will deliver the Keynote Address at 09:30?",
              ["Dr. Evelyn Zhao", "Thomas Sterling", "Sandra Higgins", "Rachel DuPont"], 1,
              "Chương trình lúc 09:30: 'Keynote Address... Speaker: Admiral (Ret.) Thomas Sterling'."),
             ("Which session should someone interested in autonomous warehouse robots attend?",
              ["Keynote Address in Auditorium A",
               "Session 1 in Room 101",
               "Session 2 in Room 102",
               "Session 3 in Room 103"], 3,
              "Mục 'Session 3: Automating Warehouse Fulfillment with Autonomous Mobile Robotics (Room 103) Moderator: Rachel DuPont'."),
             ("What is scheduled to occur at 12:45 PM?",
              ["Registration and badge pickup",
               "Buffet Luncheon & Trade Exhibition",
               "Closing Plenary & Awards Ceremony",
               "A private meeting with airline representatives"], 1,
              "Lịch trình: '12:45 – 14:00: Buffet Luncheon & Trade Exhibition'."),
             ("Who is permitted to attend the 14:00 Executive Roundtables?",
              ["Any member of the general public",
               "Undergraduate college students",
               "Only Diamond and Platinum pass holders",
               "Only journalists with media credentials"], 2,
              "Lịch trình chiều: '14:00 – 15:30: Executive Roundtables (Open only to Diamond & Platinum Pass Holders)'.")
         ]),

        # Set 10: Double passage (Job Ad + Application Cover Letter) Q176-180
        ("TOEIC Part 7: Reading Comprehension (Questions 176–180)\n\n[DOCUMENT 1: Job Advertisement]\n\nORION BIOMEDICAL INC. — VACANCY ANNOUNCEMENT\nPosition: Director of Clinical Supply Logistics\nLocation: Boston, Massachusetts (Hybrid: 3 days on-site / 2 days remote)\n\nAbout the Role:\nOrion Biomedical is seeking an accomplished logistics professional to lead our North American clinical trial distribution network. The Director will oversee temperature-sensitive pharmaceutical distribution, audit contracted cold-storage facilities, ensure compliance with FDA Good Distribution Practices (GDP), and negotiate freight contracts with international air couriers.\n\nQualifications Required:\n• Bachelor's degree in Supply Chain Management, Life Sciences, or related field (Master's preferred).\n• Minimum of 7 years of progressive pharmaceutical logistics experience, with at least 3 years in a managerial capacity.\n• Demonstrated expertise in ultra-low temperature cryogenic storage (-80°C and liquid nitrogen dry shippers).\n• Proficiency with SAP Supply Chain Enterprise and validated temperature monitoring systems.\n\nTo apply, please submit your curriculum vitae, three professional references, and a detailed cover letter to careers@orionbiomed.com by April 20.\n\n---\n\n[DOCUMENT 2: Cover Letter]\n\nApril 15\nDear Hiring Committee at Orion Biomedical,\n\nI am writing to express my enthusiastic candidacy for the Director of Clinical Supply Logistics position recently advertised on your company portal. With over nine years of experience directing clinical trial supply chains at Boston Biotherapeutics, I have built a robust track record of managing global temperature-monitored pharmaceutical logistics under stringent regulatory requirements.\n\nIn my current role as Associate Supply Chain Manager, I oversaw the nationwide distribution of phase III mRNA vaccine candidates, which required deploying specialized cryogenic shipping containers maintained at -80°C. By implementing an automated cloud-based temperature tracking platform integrated with SAP, our team reduced thermal excursion incidents by 85 percent and saved an estimated $1.4 million in compromised shipments over two years.\n\nI hold a Master of Science in Supply Chain Logistics from Northeastern University and possess active certifications in FDA Good Distribution Practices. I welcome the opportunity to discuss how my technical expertise and managerial background will drive operational excellence at Orion Biomedical.\n\nSincerely,\nDaniel Whitmore, M.S.",
         [
             ("What is the primary objective of Document 1?",
              ["To announce the quarterly financial results of Orion Biomedical",
               "To advertise an open management position in pharmaceutical logistics",
               "To recall a defective batch of medical equipment",
               "To invite medical doctors to a clinical trial seminar"], 1,
              "Document 1 là thông báo tuyển dụng: 'ORION BIOMEDICAL INC. — VACANCY ANNOUNCEMENT Position: Director of Clinical Supply Logistics'."),
             ("According to Document 1, what is a required qualification for applicants?",
              ["A license to pilot commercial transport helicopters",
               "At least seven years of pharmaceutical logistics experience",
               "Ten years of experience working as an emergency room surgeon",
               "Fluency in four European languages"], 1,
              "Mục Qualifications: 'Minimum of 7 years of progressive pharmaceutical logistics experience, with at least 3 years in a managerial capacity'."),
             ("Why does Daniel Whitmore mention ultra-low temperature (-80°C) distribution in Document 2?",
              ["To highlight that he meets a specific technical requirement in the job ad",
               "To explain why a shipment of vaccines was permanently lost",
               "To request extra heating equipment for his personal office",
               "To propose relocating the warehouse to Alaska"], 0,
              "Trong Document 1 yêu cầu: 'Demonstrated expertise in ultra-low temperature cryogenic storage (-80°C)'. Daniel nhắc lại việc anh từng quản lý phân phối vắc xin ở nhiệt độ -80°C để chứng minh năng lực đáp ứng chuẩn yêu cầu."),
             ("What software platform did Mr. Whitmore integrate with automated temperature tracking?",
              ["Salesforce CRM", "SAP", "Adobe Creative Suite", "Microsoft Flight Simulator"], 1,
              "Đoạn 2 thư của Daniel: 'By implementing an automated cloud-based temperature tracking platform integrated with SAP...'."),
             ("What does Mr. Whitmore state about his educational background?",
              ["He holds an undergraduate degree in architecture",
               "He earned a Master of Science degree from Northeastern University",
               "He is currently enrolled in medical school",
               "He completed a doctorate in civil aviation"], 1,
              "Đoạn 3 thư: 'I hold a Master of Science in Supply Chain Logistics from Northeastern University'.")
         ]),

        # Set 11: Double passage (Product Catalog & Order Email) Q181-185
        ("TOEIC Part 7: Reading Comprehension (Questions 181–185)\n\n[DOCUMENT 1: Product Catalog Excerpt]\n\nTERRA OFFICE FURNITURE — COMMERCIAL ERGONOMIC SERIES\n\nModel A: ErgoDesk Pro (Adjustable Standing Desk)\n• Electric dual-motor lift with 4 programmable height memory presets\n• Bamboo wood desktop (60\" x 30\"); steel frame supports up to 300 lbs\n• Price: $540.00 each (10+ units: 10% discount)\n\nModel B: LumbarFlex Executive Chair\n• Breathable mesh backrest, 4D adjustable armrests, dynamic lumbar support\n• Certified BIFMA ergonomic durability standards\n• Price: $320.00 each (10+ units: 15% discount)\n\nModel C: SoundShield Acoustic Partition Panel\n• High-density recycled polyester sound-absorbing felt (reduces ambient noise by 65%)\n• Free-standing modular clamps included (height: 55\", width: 48\")\n• Price: $180.00 each\n\nShipping Policy: Free curbside freight delivery for orders exceeding $3,000.00. Standard delivery window is 5–7 business days. White-glove on-site assembly available for an additional $45 per workstation.\n\n---\n\n[DOCUMENT 2: Purchasing Order Email]\n\nTo: sales@terraoffice.com\nFrom: Brenda Caldwell <bcaldwell@solarisventures.com>\nDate: August 8\nSubject: Purchase Order #SV-4029\n\nDear Terra Sales Team,\nSolaris Ventures is expanding our creative department and would like to place an order based on your commercial catalog:\n\n• 12 units of Model A (ErgoDesk Pro)\n• 12 units of Model B (LumbarFlex Executive Chair)\n• 6 units of Model C (SoundShield Acoustic Partition Panel)\n\nPlease note that we require white-glove assembly services for all 12 desks and 12 chairs (total 24 workstations). Since our order substantially exceeds your $3,000 threshold, we understand freight shipping is free of charge.\n\nCan you please confirm that our order qualifies for the bulk volume discounts listed in your catalog? Also, our office is located on the 8th floor of the Tower Building at 200 Pine Street. The freight elevator is available between 8:00 AM and 11:00 AM daily. Please send an itemized invoice so our accounts payable team can process the payment promptly.\n\nBest regards,\nBrenda Caldwell, Operations Director",
         [
             ("What feature is included on Model A (ErgoDesk Pro)?",
              ["A built-in leather refrigerator",
               "An electric dual-motor lift with programmable height presets",
               "A manual hand-crank wooden wheel",
               "Wheels for outdoor beach terrain"], 1,
              "Catalog: 'Model A: ErgoDesk Pro... Electric dual-motor lift with 4 programmable height memory presets'."),
             ("What discount does Solaris Ventures qualify for on Model B chairs?",
              ["No discount", "5% discount", "10% discount", "15% discount"], 3,
              "Catalog Model B: 'Price: $320.00 each (10+ units: 15% discount)'. Solaris đặt 12 chiếc nên được giảm 15%."),
             ("What additional service did Ms. Caldwell request for the 24 workstations?",
              ["Custom monogrammed embroidery",
               "White-glove on-site assembly service",
               "Next-day international air delivery",
               "An extended five-year equipment lease"], 1,
              "Email: 'Please note that we require white-glove assembly services for all 12 desks and 12 chairs (total 24 workstations)'."),
             ("Why is freight shipping free for this order?",
              ["The buyer is a personal friend of the manufacturer",
               "The total purchase value exceeds $3,000.00",
               "The furniture is delivered during weekend night hours",
               "The delivery location is in the same building as the factory"], 1,
              "Catalog Shipping Policy: 'Free curbside freight delivery for orders exceeding $3,000.00'."),
             ("When is the freight elevator accessible at Ms. Caldwell's office?",
              ["Between 8:00 AM and 11:00 AM",
               "Only on Saturday afternoons",
               "24 hours a day without restriction",
               "Between 1:00 PM and 5:00 PM"], 0,
              "Email: 'The freight elevator is available between 8:00 AM and 11:00 AM daily'.")
         ]),

        # Set 12: Triple passage (Conference Announcement + Reschedule Email + Feedback Survey) Q186-190
        ("TOEIC Part 7: Reading Comprehension (Questions 186–190)\n\n[DOCUMENT 1: Webpage Notice]\n\nANNUAL GLOBAL RENEWABLE ENERGY EXPO — LONDON\nExCeL London Convention Centre · September 22–24\n\nFeatured Keynote Session (Main Stage, Friday Sept 22 at 10:00 AM):\n'Decarbonizing Heavy Industry: The Role of Green Hydrogen and Carbon Capture'\nKeynote Speaker: Dr. Fiona Campbell, Chief Technology Officer at Scottish CleanPower PLC.\n\nWorkshop Tracks:\n• Track 1: Next-Generation Perovskite Solar Cells (Hall B1)\n• Track 2: Offshore Floating Wind Turbine Array Optimization (Hall B2)\n• Track 3: Grid-Scale Lithium-Iron Phosphate Battery Storage (Hall B3)\n\n---\n\n[DOCUMENT 2: Urgent Email to Registered Attendees]\n\nDate: September 18\nTo: All Registered Delegates\nFrom: conference-ops@renewableexpo-london.org\nSubject: Program Revision Notice — Keynote Speaker Update\n\nDear Delegates,\nWe regret to inform you that Dr. Fiona Campbell will be unable to travel to London for the opening keynote on Friday, September 22, due to an unavoidable diplomatic energy summit in Brussels. We are thrilled to announce that Dr. Julian Sterling, Principal Scientist at the European Hydrogen Institute, has agreed to step in and deliver the keynote address on green hydrogen integration at the exact same scheduled time and venue.\n\nIn addition, all attendees holding a Three-Day Delegate Pass are entitled to attend the exclusive Networking Reception hosted by Scottish CleanPower at the Greenwich Maritime Club on Saturday evening at 7:30 PM. Please present your digital conference badge at the entrance.\n\n---\n\n[DOCUMENT 3: Post-Conference Feedback Form]\n\nAttendee Name: Arthur Pendelton\nAffiliation: Senior Investment Analyst, Vantage Clean Tech Fund\nPass Type: Three-Day Delegate Pass\nOverall Rating: 5/5 Stars\n\nComments:\n'I attended Dr. Julian Sterling's keynote on Friday morning, and his technical economic analysis of green hydrogen production costs was arguably the highlight of the entire conference. The Scottish CleanPower reception on Saturday was also outstanding for establishing new European venture partnerships. My only critique was that Hall B3 for the battery storage workshop was overcrowded, and additional seating should have been arranged.'",
         [
             ("Where was the Global Renewable Energy Expo held?",
              ["Edinburgh International Conference Centre",
               "ExCeL London Convention Centre",
               "Brussels European Parliament Hall",
               "Stockholm Waterfront Exhibition Hall"], 1,
              "Document 1: 'ANNUAL GLOBAL RENEWABLE ENERGY EXPO — LONDON ExCeL London Convention Centre'."),
             ("Why was Dr. Fiona Campbell unable to attend the conference?",
              ["She contracted a severe seasonal flu",
               "She had to attend a diplomatic energy summit in Brussels",
               "Her flight was cancelled due to air traffic control strikes",
               "She accepted a new university teaching position in Tokyo"], 1,
              "Document 2: 'Dr. Fiona Campbell will be unable to travel... due to an unavoidable diplomatic energy summit in Brussels'."),
             ("Who delivered the opening keynote address on September 22?",
              ["Dr. Fiona Campbell", "Dr. Julian Sterling", "Arthur Pendelton", "The Mayor of London"], 1,
              "Document 2 & Document 3: 'Dr. Julian Sterling, Principal Scientist at the European Hydrogen Institute, has agreed to step in and deliver the keynote address'."),
             ("What event did Arthur Pendelton attend on Saturday evening?",
              ["A battery storage workshop in Hall B3",
               "A private tour of an offshore floating wind farm",
               "The Scottish CleanPower Networking Reception at Greenwich Maritime Club",
               "A formal dinner at the Brussels Embassy"], 2,
              "Document 2 & 3: 'The Scottish CleanPower reception on Saturday was also outstanding for establishing new European venture partnerships'."),
             ("What complaint did Mr. Pendelton register in his feedback review?",
              ["The keynote speaker arrived thirty minutes late",
               "The breakfast buffet was completely out of coffee",
               "The venue for the battery storage workshop was overcrowded",
               "Digital conference badges failed to scan at the entrance"], 2,
              "Document 3: 'My only critique was that Hall B3 for the battery storage workshop was overcrowded, and additional seating should have been arranged'.")
         ]),

        # Set 13: Triple passage (Hotel Reservation + Online Review + Manager Response) Q191-195
        ("TOEIC Part 7: Reading Comprehension (Questions 191–195)\n\n[DOCUMENT 1: Hotel Booking Confirmation]\n\nGRAND HERITAGE HOTEL & SUITES — MONTREAL\nConfirmation Number: GHM-99412\nGuest Name: Melissa Zhang\nCheck-in Date: November 14 (3:00 PM)\nCheck-out Date: November 18 (11:00 AM)\nRoom Type: Deluxe King Suite — Executive Floor\nNightly Rate: CAD $260.00 (4 nights = CAD $1,040.00 + 15% taxes: $156.00)\nSpecial Inclusions: High-speed Wi-Fi, Executive Lounge breakfast buffet, complimentary airport shuttle\nSpecial Requests Noted: Quiet room away from elevators; late checkout requested.\n\n---\n\n[DOCUMENT 2: Online Guest Review on TravelStay.com]\n\nRating: 3/5 Stars\nReviewer: Melissa Z. (Business Traveler)\nStay Date: Mid-November\nTitle: Beautiful historic property, but executive lounge access issues\n\n'The Grand Heritage is undeniably elegant, with impeccable interior decor and a premier location in Old Montreal. The bed was exceptionally comfortable, and the room was whisper quiet as requested. However, upon arriving for breakfast at the Executive Lounge on Wednesday morning at 7:30 AM, the lounge door scanner failed to recognize my keycard. When I approached the front desk, the junior receptionist claimed my reservation did not include lounge privileges, despite my booking confirmation clearly stating otherwise. It took twenty minutes to resolve the issue, causing me to arrive late for an 8:30 AM client presentation. On a positive note, the driver of the airport shuttle was very courteous and punctual.'\n\n---\n\n[DOCUMENT 3: General Manager Email Response]\n\nDate: November 22\nTo: Melissa Zhang <mzhang@apexpartners.ca>\nFrom: Antoine Dubois, General Manager <adubois@grandheritagemontreal.com>\nSubject: Sincere Apologies Regarding Your Recent Stay at Grand Heritage\n\nDear Ms. Zhang,\nThank you for posting your constructive review on TravelStay.com. I was deeply disheartened to learn about the inexcusable delay you encountered accessing our Executive Lounge on Wednesday morning. A recent software update to our RFID card encoders unfortunately caused several executive-tier reservations to be improperly classified in our front-desk system.\n\nPlease be assured that I have personally conducted refresher training with our front-desk reception staff to ensure that any discrepancy is addressed with immediate courtesy and prompt override access. To demonstrate our sincere commitment to customer satisfaction, I have credited 15,000 Heritage Elite reward points to your member account (equivalent to one complimentary weekend night) and refunded 25% of your four-night accommodation charge. We hope to welcome you back on your next visit to Montreal.\n\nWarm regards,\nAntoine Dubois, General Manager",
         [
             ("How many nights did Melissa Zhang stay at the Grand Heritage Hotel?",
              ["Two nights", "Three nights", "Four nights", "Seven nights"], 2,
              "Document 1: Check-in Nov 14, Check-out Nov 18 (4 nights)."),
             ("What aspect of her stay did Ms. Zhang compliment in Document 2?",
              ["The room was quiet and the airport shuttle driver was courteous",
               "The swimming pool temperature was very warm",
               "The restaurant served delicious Italian pasta dishes",
               "The hotel was located right next to the airport terminal"], 0,
              "Document 2: 'the room was whisper quiet as requested' và 'the driver of the airport shuttle was very courteous and punctual'."),
             ("Why did Ms. Zhang experience a delay on Wednesday morning?",
              ["She forgot her luggage in a taxi cab",
               "Her keycard did not unlock the Executive Lounge door and staff questioned her booking",
               "The hotel fire alarm forced an evacuation of all guests",
               "The breakfast buffet was completely closed due to a kitchen fire"], 1,
              "Document 2: 'the lounge door scanner failed to recognize my keycard... receptionist claimed my reservation did not include lounge privileges... took twenty minutes to resolve'."),
             ("According to Antoine Dubois, what caused the keycard failure?",
              ["A power outage throughout the entire city of Montreal",
               "A software update to the RFID card encoders that improperly classified reservations",
               "Ms. Zhang's credit card was declined by the bank",
               "The hotel was undergoing an electrical renovation"], 1,
              "Document 3: 'A recent software update to our RFID card encoders unfortunately caused several executive-tier reservations to be improperly classified'."),
             ("What compensatory action did Mr. Dubois take in Document 3?",
              ["He offered her a free meal at the rooftop steakhouse",
               "He credited 15,000 reward points and refunded 25% of her room charge",
               "He upgraded her to the presidential suite for an entire month",
               "He paid for her airline ticket back to Vancouver"], 1,
              "Document 3: 'I have credited 15,000 Heritage Elite reward points to your member account... and refunded 25% of your four-night accommodation charge'.")
         ]),

        # Set 14: Triple passage (Proposal + Evaluation Memo + Addendum) Q196-200
        ("TOEIC Part 7: Reading Comprehension (Questions 196–200)\n\n[DOCUMENT 1: Commercial Vendor Proposal]\n\nDATACORE AUTOMATION SYSTEMS — PROPOSAL FOR NOVACREST HEALTHCARE\nSubmission Date: May 12\nProject: Hospital Document Digitization and Cloud Archival\n\nProposed Service Packages:\n• Tier 1: Standard Digitization (Scanning 500,000 physical patient charts, basic optical character recognition [OCR]): $85,000\n• Tier 2: Advanced Intelligent Archival (Includes Tier 1 + AI-powered semantic search, HL7 medical record integration, and encrypted HIPAA-compliant cloud backup): $135,000\n• Tier 3: Enterprise Real-Time Sync (Includes Tier 2 + 24/7 dedicated disaster recovery mirror and automated mobile tablet access for clinical staff): $185,000\n\nImplementation Timeline: 16 weeks from contract execution. Ongoing annual maintenance and security patches: $18,000/year (free for the first 12 months with Tier 2 and Tier 3).\n\n---\n\n[DOCUMENT 2: Internal Evaluation Committee Memo]\n\nDate: June 3\nTo: Dr. Alistair Finch, Chief Executive Officer, NovaCrest Healthcare\nFrom: IT Infrastructure & Compliance Steering Committee\nSubject: Recommendation for Document Digitization Vendor\n\nDear Dr. Finch,\nAfter thoroughly vetting three commercial vendors (DataCore, MedArchive, and OmniDoc), our committee unanimously recommends partnering with DataCore Automation Systems. While MedArchive offered a lower upfront cost, their software lacks native HL7 medical record integration, which would require an expensive third-party software bridge.\n\nWe recommend selecting DataCore's Tier 2 package. The semantic search capabilities and encrypted cloud backup fulfill all federal healthcare regulatory compliance mandates without exceeding our fiscal year digitization budget cap of $150,000. Furthermore, DataCore has agreed to waive the first year's maintenance fee of $18,000.\n\n---\n\n[DOCUMENT 3: Final Contract Addendum]\n\nAGREEMENT ADDENDUM: NOVACREST HEALTHCARE & DATACORE AUTOMATION\nExecution Date: June 15\n\n1. Scope of Services: NovaCrest Healthcare hereby selects the Tier 2 Advanced Intelligent Archival package as detailed in DataCore Proposal dated May 12, at the agreed contract price of $135,000.00.\n2. Milestone Delivery: Phase 1 (Scanning & OCR conversion) will conclude within 6 weeks of commencement. Phase 2 (HL7 system integration & compliance validation) will conclude within 16 weeks.\n3. Special Clause: DataCore agrees to deliver five complimentary on-site training sessions for NovaCrest medical records personnel prior to final handover.\n\nSignatures:\nDr. Alistair Finch (CEO, NovaCrest Healthcare)\nRachel Sterling (VP of Enterprise Sales, DataCore Systems)",
         [
             ("What is the primary service being proposed in Document 1?",
              ["Construction of a new outpatient surgical clinic",
               "Hospital document digitization and secure cloud archival",
               "Staffing medical doctors for intensive care units",
               "Procurement of commercial laundry machines"], 1,
              "Document 1 tiêu đề: 'Project: Hospital Document Digitization and Cloud Archival'."),
             ("Why did the committee reject MedArchive according to Document 2?",
              ["Their prices were three times higher than DataCore",
               "Their software lacked native HL7 medical record integration",
               "They were based overseas in Australia",
               "They refused to sign a confidentiality agreement"], 1,
              "Document 2: 'While MedArchive offered a lower upfront cost, their software lacks native HL7 medical record integration'."),
             ("What was NovaCrest's fiscal budget cap for the digitization project?",
              ["$85,000", "$135,000", "$150,000", "$185,000"], 2,
              "Document 2: 'without exceeding our fiscal year digitization budget cap of $150,000'."),
             ("Which service tier was officially selected in Document 3?",
              ["Tier 1 Standard Digitization",
               "Tier 2 Advanced Intelligent Archival",
               "Tier 3 Enterprise Real-Time Sync",
               "A customized Tier 4 package"], 1,
              "Document 3: 'NovaCrest Healthcare hereby selects the Tier 2 Advanced Intelligent Archival package... at the agreed contract price of $135,000.00'."),
             ("What special provision is included in Clause 3 of Document 3?",
              ["DataCore will pay for all hospital staff lunches for six months",
               "DataCore will conduct five free on-site training sessions for medical records staff",
               "NovaCrest will receive twenty free tablet computers",
               "The project completion timeline is extended to thirty weeks"], 1,
              "Document 3 Clause 3: 'DataCore agrees to deliver five complimentary on-site training sessions for NovaCrest medical records personnel prior to final handover'.")
         ])
    ]

    p7_q_num = 147
    for ctx, q_list in p7_items:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "q": f"Part 7 (Câu {p7_q_num}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            p7_q_num += 1
            
    assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"
    return {
        "id": "toeic-full-1",
        "level": "B1",
        "title": "TOEIC ETS Reading Official Full Test 1 (New Economy 2024)",
        "desc": "Đề thi TOEIC Reading chuẩn ETS quốc tế 75 phút (100 câu 101–200). Đầy đủ Part 5 (30 câu ngữ pháp/từ vựng), Part 6 (16 câu điền đoạn văn) và Part 7 (54 câu đọc hiểu đơn/đôi/ba) có giải thích chi tiết.",
        "timeLimit": 75,
        "category": "toeic",
        "target": "TOEIC 550 - 990 (Full 75 phút)",
        "testType": "full",
        "startNumber": 101,
        "sections": [
            {"name": "Part 5: Incomplete Sentences (101–130)", "startIndex": 0, "count": 30},
            {"name": "Part 6: Text Completion (131–146)", "startIndex": 30, "count": 16},
            {"name": "Part 7: Reading Comprehension (147–200)", "startIndex": 46, "count": 54}
        ],
        "questions": questions
    }

print("make_test_1 defined successfully")

def make_test_2():
    questions = []
    
    # PART 5: 101 - 130 (30 questions)
    p5_data = [
        ("The newly appointed branch manager has already demonstrated exceptional leadership ___ his initial month.",
         ["during", "while", "along", "against"], 0,
         "Giới từ 'during' đi với cụm danh từ chỉ khoảng thời gian: 'during his initial month' (trong suốt tháng đầu tiên). 'while' cần đi với một mệnh đề (S + V)."),
        ("All prospective clients must complete the online registration form ___ scheduling a personal consultation.",
         ["prior to", "next to", "in spite", "due to"], 0,
         "'prior to' (= before) đi với danh động từ V-ing ('prior to scheduling': trước khi lên lịch)."),
        ("Ms. Nakamura was commended for her ___ contribution to the expansion of our logistics division.",
         ["substance", "substantial", "substantially", "substantiate"], 1,
         "Đứng trước danh từ 'contribution' cần một tính từ bổ nghĩa → 'substantial contribution' (đóng góp to lớn/đáng kể)."),
        ("The executive committee agreed that Mr. Gomez should lead the negotiations, as he is ___ qualified.",
         ["high", "higher", "highly", "highest"], 2,
         "Bổ nghĩa cho tính từ 'qualified' (có đủ phẩm chất/năng lực) cần phó từ chỉ mức độ → 'highly qualified' (có trình độ chuyên môn rất cao)."),
        ("Please verify that your contact details are ___ before submitting the annual performance appraisal.",
         ["accurate", "accurately", "accuracy", "accurateness"], 0,
         "Đứng sau linking verb 'are' cần một tính từ làm vị ngữ → 'accurate' (chính xác)."),
        ("The regional warehouse was unable to fulfill the urgent order because of a severe inventory ___.",
         ["shortage", "shorten", "shortly", "short"], 0,
         "Đứng sau tính từ 'inventory' cần một danh từ ghép → 'inventory shortage' (sự thiếu hụt hàng tồn kho)."),
        ("The warranty will become void if repairs are performed by an ___ service technician.",
         ["unauthorized", "unauthorizing", "unauthorizes", "unauthorization"], 0,
         "Đứng trước cụm danh từ 'service technician' cần tính từ dạng phân từ bị động → 'unauthorized' (không được ủy quyền)."),
        ("Neither the flight attendants nor the gate agent ___ aware of the sudden schedule alteration.",
         ["was", "were", "are", "being"], 0,
         "Quy tắc hòa hợp chủ ngữ 'Neither... nor...': động từ chia theo danh từ gần nhất 'the gate agent' (số ít) trong quá khứ → 'was'."),
        ("Employees who wish to enroll in the advanced leadership workshop must do so ___ 5:00 PM on Friday.",
         ["by", "until", "for", "since"], 0,
         "Giới từ chỉ hạn chót hoàn thành một hành động trước thời điểm: 'by 5:00 PM' (trước hoặc chậm nhất là 5:00 chiều)."),
        ("The research team made ___ progress in developing an eco-friendly alternative to single-use plastics.",
         ["remark", "remarkable", "remarkably", "remarked"], 1,
         "Đứng trước danh từ không đếm được 'progress' (tiến độ) cần tính từ → 'remarkable progress' (tiến bộ vượt bậc)."),
        ("Travelers are advised to arrive at the airport early to allow sufficient time for baggage ___.",
         ["inspection", "inspect", "inspecting", "inspected"], 0,
         "Cụm danh từ 'baggage inspection' (việc kiểm tra/soi chiếu hành lý)."),
        ("The CEO suggested that the marketing budget ___ increased by fifteen percent for the holiday season.",
         ["be", "was", "is", "being"], 0,
         "Cấu trúc giả định thức với động từ 'suggested that + S + (should) + V(bare)': 'suggested that the marketing budget be increased'."),
        ("Mr. Al-Mansoor handled the tense customer dispute with extraordinary tact and ___.",
         ["professional", "professionally", "professionalism", "professionalize"], 2,
         "Nối với danh từ 'tact' bằng liên từ 'and' cần một danh từ tương đương → 'professionalism' (sự chuyên nghiệp)."),
        ("The company will provide a full refund, ___ that the merchandise is returned in its original condition.",
         ["provided", "unless", "although", "whereas"], 0,
         "Liên từ điều kiện 'provided that' (= as long as, miễn là)."),
        ("The newly installed software enables employees to access their files ___ from any remote location.",
         ["secure", "securely", "security", "securing"], 1,
         "Bổ nghĩa cho động từ 'access' cần phó từ đuôi -ly → 'securely' (truy cập một cách an toàn bảo mật)."),
        ("Despite the rigorous audit, the accounting department found ___ discrepancies in the financial ledgers.",
         ["no", "not", "none", "never"], 0,
         "'no' đứng trước danh từ đếm được số nhiều 'discrepancies' (sự sai lệch/bất nhất) để mang nghĩa phủ định 'không có bất kỳ sai lệch nào'."),
        ("The keynote address was so ___ that several audience members requested copies of the speaker's slides.",
         ["compelled", "compelling", "compulsion", "compellingly"], 1,
         "Tính từ chủ động đuôi -ing miêu tả tính chất hấp dẫn, thuyết phục của bài phát biểu: 'so compelling that...'."),
        ("All laboratory personnel must wear protective eyewear ___ working with volatile chemicals.",
         ["whenever", "whatever", "whichever", "whoever"], 0,
         "Liên từ 'whenever' (= at any time that, bất cứ khi nào) phù hợp ngữ nghĩa quy định an toàn."),
        ("The revised safety manual contains clear guidelines on how to operate the heavy industrial ___.",
         ["machine", "machinery", "machinist", "machined"], 1,
         "Danh từ không đếm được chỉ toàn bộ hệ thống máy móc: 'industrial machinery'."),
        ("Had we received the client's specifications earlier, the engineering team ___ the prototype on time.",
         ["would complete", "would have completed", "will complete", "had completed"], 1,
         "Đảo ngữ điều kiện loại 3 ('Had we received...'): mệnh đề chính dùng 'would have completed'."),
        ("The hotel offers a complimentary shuttle service ___ guests who need transportation to the convention center.",
         ["for", "to", "with", "at"], 0,
         "Cụm 'service for guests' (dịch vụ dành cho các du khách)."),
        ("The commercial lease agreement will automatically renew ___ either party provides written notice thirty days in advance.",
         ["unless", "if", "because", "despite"], 0,
         "Liên từ 'unless' (= if not, trừ khi): hợp đồng tự động gia hạn trừ khi một trong hai bên gửi thông báo bằng văn bản trước 30 ngày."),
        ("Ms. Dupont proved ___ to be a formidable advocate for environmental conservation policies.",
         ["her", "hers", "herself", "she"], 2,
         "Đại từ phản thân 'herself' khi chủ ngữ 'Ms. Dupont' tự chứng tỏ bản thân."),
        ("The city council voted to ___ funding for the construction of a light rail rapid transit corridor.",
         ["allocate", "allocation", "allocating", "allocated"], 0,
         "Sau 'voted to' cần động từ nguyên mẫu có to → 'allocate' (phân bổ ngân sách)."),
        ("The newly recruited sales associates have adapted ___ well to our fast-paced corporate culture.",
         ["surprising", "surprisingly", "surprise", "surprised"], 1,
         "Bổ nghĩa cho phó từ 'well' cần một phó từ khác → 'surprisingly well' (tốt một cách đáng ngạc nhiên)."),
        ("The cafeteria will be closed for sanitation and deep cleaning ___ noon on Friday.",
         ["until", "during", "while", "between"], 0,
         "'until noon' (đóng cửa cho tới buổi trưa)."),
        ("The chief legal counsel thoroughly reviewed the terms of the acquisition to prevent any potential ___.",
         ["liability", "liable", "liabilities", "reliably"], 0,
         "Sau 'any potential' cần danh từ → 'potential liability' (trách nhiệm pháp lý tiềm tàng)."),
        ("A banquet will be held next Tuesday to celebrate the ___ of the pharmaceutical firm's founder.",
         ["retire", "retired", "retirement", "retiring"], 2,
         "Đứng sau mạo từ 'the' và trước giới từ 'of' cần một danh từ → 'retirement' (sự nghỉ hưu)."),
        ("The technician was able to diagnose the hardware malfunction ___ testing the circuit boards.",
         ["by", "at", "for", "in"], 0,
         "Giới từ 'by' + V-ing chỉ phương thức thực hiện hành động: 'by testing the circuit boards' (bằng cách kiểm tra các bảng mạch)."),
        ("The project was completed under budget, ___ because of the team's diligent cost-monitoring measures.",
         ["largely", "large", "larger", "largest"], 0,
         "Phó từ 'largely' (= mostly, phần lớn là vì) bổ nghĩa cho cụm 'because of...'."),
    ]
    
    for i, (q, o, a, x) in enumerate(p5_data):
        questions.append({
            "lv": "B2",
            "t": "mc",
            "q": f"Part 5 (Câu {101+i}): {q}",
            "o": o,
            "a": a,
            "x": x
        })
        
    # PART 6: 131 - 146 (16 questions, 4 texts x 4 Qs)
    p6_texts = [
        # Text 1: 131-134
        ("TOEIC Part 6: Text Completion (Questions 131–146)\nRead the following internal company announcement:\n\nANNOUNCEMENT: EXPANDED EMPLOYEE WELLNESS INITIATIVE\n\nAtlas Financial Group is pleased to announce a major expansion of our corporate employee wellness program, effective January 1. Beginning next month, all full-time staff will be eligible for a $600 annual wellness subsidy that can be ___ (131) toward fitness center memberships, ergonomic home-office furniture, or registered nutritionist consultations.\n\nIn addition, our on-site gymnasium on the fourth floor will undergo a complete equipment overhaul. ___ (132). New high-end cardio machines, resistance weights, and a dedicated yoga studio will be installed over a two-week period. During this installation window, the gym will be ___ (133) closed to all staff. We believe that investing in physical and mental well-being directly fosters personal vitality and workplace satisfaction. Please review the updated employee benefits handbook on the corporate intranet for ___ (134) information regarding claim reimbursement procedures.",
         [
             ("Question 131: Choose the word that best completes gap (131):",
              ["applied", "apply", "applying", "application"], 0,
              "Cấu trúc bị động sau modal verb: 'can be applied toward' (có thể được áp dụng/sử dụng cho)."),
             ("Question 132: Choose the sentence that best fits gap (132):",
              ["This comprehensive renovation will begin on December 10.",
               "International travel tickets must be approved three weeks in advance.",
               "Employees should wear formal suits during client videoconferences.",
               "The annual winter blizzard caused severe transportation delays."], 0,
              "Câu liền trước thông báo phòng gym tầng 4 sẽ được nâng cấp thiết bị. Câu tiếp theo hợp lý nhất là: 'Cuộc đại tu toàn diện này sẽ bắt đầu từ ngày 10 tháng 12'."),
             ("Question 133: Choose the word that best completes gap (133):",
              ["temporary", "temporarily", "temporal", "temporariness"], 1,
              "Bổ nghĩa cho tính từ/phân từ 'closed' cần phó từ → 'temporarily closed' (tạm thời đóng cửa)."),
             ("Question 134: Choose the word that best completes gap (134):",
              ["detailed", "detail", "detailing", "detailedly"], 0,
              "Đứng trước danh từ 'information' cần tính từ phân từ → 'detailed information' (thông tin chi tiết).")
         ]),
        # Text 2: 135-138
        ("TOEIC Part 6: Text Completion (Questions 135–138)\nRead the following notice:\n\nIMPORTANT ADVISORY: MUNICIPAL WATER MAIN REPAIRS\n\nAttention Residents of Pinecrest District:\n\nThe Department of Public Utilities will conduct essential maintenance and structural repairs on the primary water main beneath Oakwood Avenue on Wednesday, May 15, between the hours of 1:00 AM and 6:00 AM. This work is necessary to replace aging pipe segments and ensure the long-term ___ (135) of our culinary water network.\n\nDuring this scheduled repair period, water service to residential and commercial properties along Oakwood Avenue and adjacent cross streets will be completely suspended. ___ (136). We advise all occupants to store sufficient water for drinking, cooking, and sanitary needs prior to the disruption. Once service is restored at approximately 6:00 AM, you may observe slight water discoloration due to air pressure and harmless sediment. If this occurs, simply ___ (137) your cold-water faucets for two to three minutes until the flow becomes crystal clear. We sincerely ___ (138) for any inconvenience this critical infrastructure improvement may cause.",
         [
             ("Question 135: Choose the word that best completes gap (135):",
              ["reliable", "reliably", "reliability", "reliance"], 2,
              "Đứng sau tính từ 'long-term' cần một danh từ → 'long-term reliability' (độ tin cậy/ổn định lâu dài)."),
             ("Question 136: Choose the sentence that best fits gap (136):",
              ["Low water pressure may also affect neighboring elevated zones.",
               "The city library will host a book fair this weekend.",
               "Parking permits are available at the municipal town hall.",
               "Heavy snowplows will clear the main boulevard by dawn."], 0,
              "Câu trước nói về việc cắt nước ở đường Oakwood. Câu nối tiếp phù hợp nhất là: 'Áp lực nước yếu cũng có thể ảnh hưởng đến các khu vực vùng đồi lân cận'."),
             ("Question 137: Choose the word that best completes gap (137):",
              ["run", "ran", "running", "have run"], 0,
              "Câu mệnh lệnh bắt đầu bằng động từ nguyên mẫu: 'simply run your cold-water faucets' (hãy xả vòi nước lạnh từ 2 đến 3 phút)."),
             ("Question 138: Choose the word that best completes gap (138):",
              ["apologize", "apology", "apologetic", "apologizing"], 0,
              "Sau chủ ngữ 'We' và phó từ 'sincerely' cần động từ chính thì hiện tại đơn → 'We sincerely apologize' (Chúng tôi thành thật xin lỗi).")
         ]),
        # Text 3: 139-142
        ("TOEIC Part 6: Text Completion (Questions 139–142)\nRead the following business inquiry email:\n\nTo: customer-care@vanguardservers.com\nFrom: Derek Bradley <dbradley@creativestudios.net>\nDate: September 8\nSubject: Inquiry Regarding Custom Dedicated Hosting Options\n\nDear Vanguard Support Team,\n\nCreative Studios is currently evaluating enterprise hosting providers to support our upcoming multiplayer gaming platform. We require dedicated servers with ultra-low latency, NVMe solid-state storage arrays, and robust DDoS attack mitigation capable of ___ (139) traffic spikes exceeding 100 gigabits per second.\n\nHaving reviewed the technical specifications of your 'Apex Enterprise' tier, we find the hardware configurations to be ___ (140) aligned with our infrastructure prerequisites. However, we would like to inquire about your server redundancy options. ___ (141). Specifically, does your data center in Frankfurt offer instantaneous failover clustering with your facility in Amsterdam? Could you please provide a formal pricing quote that reflects a two-year service commitment with 24/7 priority enterprise support? We are eager to finalize our hosting agreement by the end of this month and look forward to your ___ (142) reply.\n\nSincerely,\nDerek Bradley, Chief Technical Officer",
         [
             ("Question 139: Choose the word that best completes gap (139):",
              ["absorb", "absorbing", "absorption", "absorbed"], 1,
              "Sau cụm tính từ 'capable of' là danh động từ V-ing: 'capable of absorbing traffic spikes' (có khả năng chịu đựng/hấp thụ lưu lượng tăng đột biến)."),
             ("Question 140: Choose the word that best completes gap (140):",
              ["close", "closely", "closeness", "closing"], 1,
              "Bổ nghĩa cho phân từ 'aligned' cần phó từ đuôi -ly → 'closely aligned' (gắn kết/phù hợp chặt chẽ với)."),
             ("Question 141: Choose the sentence that best fits gap (141):",
              ["Seamless disaster recovery is paramount to maintaining uninterrupted gameplay.",
               "Our office cafeteria was recently renovated with modern wooden furniture.",
               "The latest superhero movie has broken box office records globally.",
               "We will be flying to California for a personal family vacation."], 0,
              "Câu trước hỏi về phương án máy chủ dự phòng (redundancy). Câu logic nhất: 'Khả năng phục hồi thảm họa liền mạch là yếu tố tối quan trọng để duy trì việc chơi game không bị gián đoạn'."),
             ("Question 142: Choose the word that best completes gap (142):",
              ["prompt", "promptly", "promptness", "prompted"], 0,
              "Đứng trước danh từ 'reply' cần tính từ → 'your prompt reply' (phản hồi nhanh chóng/kịp thời của quý vị).")
         ]),
        # Text 4: 143-146
        ("TOEIC Part 6: Text Completion (Questions 143–146)\nRead the following article excerpt:\n\nCOMMERCE REVIEW MONTHLY\nAutomotive Giants Form Strategic Consortium for Solid-State Battery Research\n\nIn a landmark development for the international automotive industry, three leading electric vehicle manufacturers have entered into a formal joint venture to expedite the commercialization of solid-state battery technology. The consortium, known collectively as the NextGen Battery Initiative, has committed $1.2 billion in combined research and development funding over the next five years.\n\nTraditional lithium-ion batteries rely on flammable liquid electrolytes, which pose safety risks and limit volumetric energy density. In contrast, solid-state batteries utilize non-combustible ceramic or polymer electrolytes, allowing electric vehicles to achieve greater driving ranges while ___ (143) reducing charging times to under fifteen minutes. Industry analysts predict that solid-state technology will transform consumer adoption by eliminating range anxiety. ___ (144). The consortium's primary pilot fabrication facility in Munich is scheduled to begin small-scale prototype production ___ (145) early 2026. 'By pooling our scientific talent and manufacturing capabilities, we will deliver safer, more efficient, and more affordable electric mobility to consumers ___ (146) than previously thought possible,' stated consortium spokesperson Dr. Renate Weber.",
         [
             ("Question 143: Choose the word that best completes gap (143):",
              ["simultaneous", "simultaneously", "simultaneity", "simultaneousness"], 1,
              "Bổ nghĩa cho hành động 'reducing charging times' cần phó từ → 'simultaneously reducing' (đồng thời cắt giảm thời gian sạc)."),
             ("Question 144: Choose the sentence that best fits gap (144):",
              ["However, substantial manufacturing engineering hurdles must still be overcome.",
               "Most modern smartphones are equipped with high-resolution digital cameras.",
               "Local bus routes have experienced a decrease in weekend ridership.",
               "The historical museum features exhibits on ancient Egyptian pottery."], 0,
              "Câu trước nói về tiềm năng to lớn của pin thể rắn. Đoạn tiếp theo nói về việc bắt đầu sản xuất mẫu thử nghiệm quy mô nhỏ. Câu chuyển tiếp tự nhiên nhất là: 'Tuy nhiên, vẫn còn những trở ngại kỹ thuật sản xuất đáng kể cần phải vượt qua'."),
             ("Question 145: Choose the word that best completes gap (145):",
              ["in", "on", "at", "to"], 0,
              "Giới từ đi với mốc thời gian năm/mùa: 'in early 2026' (vào đầu năm 2026)."),
             ("Question 146: Choose the word that best completes gap (146):",
              ["sooner", "soon", "soonest", "sooner than"], 0,
              "Cấu trúc so sánh hơn với 'than': 'sooner than previously thought possible' (sớm hơn những gì trước đây được cho là khả thi).")
         ])
    ]
    
    q_num = 131
    for ctx, q_list in p6_texts:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "q": f"Part 6 (Câu {q_num}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            q_num += 1

    # PART 7: 147 - 200 (54 questions)
    p7_items = [
        # Set 1: Single passage (Email) Q147-148
        ("TOEIC Part 7: Reading Comprehension (Questions 147–148)\n\nTo: All Department Heads\nFrom: Cynthia Palmer, Chief Operating Officer\nDate: November 3\nSubject: Annual Corporate Office Closure — Holiday Season\n\nDear Team Leaders,\nPlease remind all employees within your respective departments that corporate headquarters will officially close for the annual winter holidays starting Monday, December 25, and will reopen on Tuesday, January 2. During this period, all building utilities will be set to eco-mode, and physical card access will be restricted to authorized security and facility staff only.\n\nEmployees planning to take additional vacation days immediately preceding or following this mandatory closure must submit their time-off requests via the HR Workday portal no later than Friday, November 17. Approvals will be processed on a first-come, first-served basis to ensure essential skeleton staffing across our client emergency hotlines.\n\nThank you for your cooperation.",
         [
             ("When will corporate headquarters reopen after the holidays?",
              ["Monday, December 25", "Friday, November 17", "Tuesday, January 2", "Wednesday, January 10"], 2,
              "Email ghi rõ: 'close... starting Monday, December 25, and will reopen on Tuesday, January 2'."),
             ("What must employees do by Friday, November 17?",
              ["Return all company-issued laptops to IT",
               "Submit additional holiday leave requests via Workday",
               "Renew their building parking permits",
               "Sign up for the holiday charity gift exchange"], 1,
              "Đoạn 2: 'Employees planning to take additional vacation days... must submit their time-off requests via the HR Workday portal no later than Friday, November 17'.")
         ]),

        # Set 2: Single passage (Notice) Q149-150
        ("TOEIC Part 7: Reading Comprehension (Questions 149–150)\n\nBUILDING MAINTENANCE BULLETIN — NORTH TOWER ELEVATORS\n\nDate: April 18\nAttention All Building Tenants & Visitors:\n\nPlease be advised that Elevator Banks C and D (servicing floors 25 through 42) will be temporarily shut down for mandatory state safety inspections and hydraulic cable lubrication on Saturday, April 22, from 7:00 AM to 5:00 PM.\n\nDuring this inspection window, Elevator Banks A and B (servicing floors 1 through 24) will operate normally. Tenants requiring access to upper floors between 25 and 42 may utilize the designated freight elevator (Elevator F) located at the rear service corridor. Security guards will be stationed on the ground floor lobby to assist and escort personnel.\n\nWe apologize for this inconvenience as we complete these required safety procedures.",
         [
             ("What is the purpose of the maintenance bulletin?",
              ["To announce elevator shutdowns for safety inspections and lubrication",
               "To advertise office leasing opportunities on upper floors",
               "To notify staff of an unexpected electrical power failure",
               "To instruct tenants on emergency fire escape routes"], 0,
              "Thông báo: 'Elevator Banks C and D... will be temporarily shut down for mandatory state safety inspections and hydraulic cable lubrication'."),
             ("How can tenants access floors 25 through 42 on April 22?",
              ["By taking the exterior fire escape stairs only",
               "By using the designated freight elevator (Elevator F)",
               "By taking Elevator Bank A",
               "Access to upper floors is strictly prohibited"], 1,
              "Đoạn 2: 'Tenants requiring access to upper floors between 25 and 42 may utilize the designated freight elevator (Elevator F)'.")
         ]),

        # Set 3: Single passage (Schedule) Q151-152
        ("TOEIC Part 7: Reading Comprehension (Questions 151–152)\n\nGLOBAL COMMERCE WEBINAR SERIES: MASTERING ASIAN LOGISTICS\nHosted by Maritime & Trade Advisory Group\nDate: Thursday, July 14 (All times Eastern Standard Time)\n\nWebinar Schedule:\n• 10:00 AM – 10:45 AM: 'Navigating Customs Clearance Bottlenecks at Shanghai and Busan' — Presenter: Zhang Wei (Director of East Asian Trade, Pacific Cargo Lines)\n• 11:00 AM – 11:45 AM: 'Hedging Fuel Price Volatility in Containerized Ocean Freight' — Presenter: Rachel Stern (Senior Energy Commodities Analyst)\n• 12:00 PM – 1:00 PM: Virtual Networking Lounge (Interactive breakout rooms)\n• 1:00 PM – 1:45 PM: 'Deploying IoT Sensor Tags for Cold-Chain Pharmaceutical Cargo' — Presenter: Dr. Kenjiro Mori (Chief Scientist, SensorTech Japan)\n\nRegistration fee: $149 (Includes on-demand video recordings for 90 days).",
         [
             ("At what time will the presentation on cold-chain pharmaceutical cargo begin?",
              ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"], 3,
              "Lịch trình: '1:00 PM – 1:45 PM: Deploying IoT Sensor Tags for Cold-Chain Pharmaceutical Cargo — Presenter: Dr. Kenjiro Mori'."),
             ("What is included with the webinar registration fee?",
              ["A printed hardcover logistics textbook",
               "Ninety days of on-demand access to video recordings",
               "Free airline tickets to the Shanghai maritime expo",
               "A complimentary consultation with Dr. Mori"], 1,
              "Dòng cuối: 'Registration fee: $149 (Includes on-demand video recordings for 90 days)'.")
         ]),

        # Set 4: Single passage (Chat Discussion) Q153-155
        ("TOEIC Part 7: Reading Comprehension (Questions 153–155)\n\n[2:15 PM] Amanda Bell (Art Director):\nHey Marcus, have you received the final client edits for the Belmont Hotel print brochure yet? The commercial printer in Chicago needs our high-res PDF files by 4:00 PM today if we want delivery before Friday's gala.\n\n[2:17 PM] Marcus Vance (Graphic Designer):\nI just opened the client feedback file. They approved all typography layouts and the cover photo. However, the hotel marketing manager requested that we swap the photograph of the outdoor swimming pool on page 6 with a shot of the newly renovated penthouse suite.\n\n[2:19 PM] Amanda Bell:\nDo we have high-resolution images of the penthouse suite in our shared asset library?\n\n[2:21 PM] Marcus Vance:\nYes, the architectural photographer uploaded a full batch of retouched images yesterday afternoon. I can make the image swap, re-export the color-calibrated PDF, and run the pre-flight check in about 45 minutes.\n\n[2:23 PM] Amanda Bell:\nTerrific. Please ping me as soon as it's ready, and I will upload it straight to the printer's FTP server.",
         [
             ("Why is Amanda Bell concerned about the time?",
              ["She has an international flight to catch at 4:00 PM",
               "The commercial printer requires final PDF files by 4:00 PM",
               "The client is threatening to cancel the design contract",
               "The hotel grand opening gala is starting in thirty minutes"], 1,
              "Amanda nhắn: 'The commercial printer in Chicago needs our high-res PDF files by 4:00 PM today if we want delivery before Friday's gala'."),
             ("What change did the client request for page 6?",
              ["To change the font color from black to dark blue",
               "To replace the swimming pool photo with a picture of the penthouse suite",
               "To delete all text paragraphs describing room prices",
               "To add an advertisement for an airline partner"], 1,
              "Marcus nhắn: 'hotel marketing manager requested that we swap the photograph of the outdoor swimming pool on page 6 with a shot of the newly renovated penthouse suite'."),
             ("Where will Marcus find the new picture?",
              ["He will drive to the hotel to take photos himself",
               "In the shared asset library uploaded by the photographer yesterday",
               "On an internet public stock photo website",
               "In an email attachment sent by Amanda"], 1,
              "Marcus nói: 'the architectural photographer uploaded a full batch of retouched images yesterday afternoon' trong shared asset library.")
         ]),

        # Set 5: Single passage (Press Release) Q156-158
        ("TOEIC Part 7: Reading Comprehension (Questions 156–158)\n\nPRESS RELEASE — FOR IMMEDIATE RELEASE\n\nBioHealth Diagnostics Secures European Regulatory Clearance for Rapid Molecular Scanner\n\nZURICH — BioHealth Diagnostics AG, a pioneer in portable clinical point-of-care medical devices, today announced that its flagship diagnostic platform, the GeneScan Mobile, has been awarded CE Mark certification under the European Union In Vitro Diagnostic Medical Devices Regulation (IVDR).\n\nThe compact, battery-powered device is capable of analyzing patient saliva samples and detecting twelve common respiratory pathogens, including influenza A/B and RSV, in less than twenty minutes with an accuracy rate exceeding 98.4 percent. Traditional laboratory PCR testing typically requires transporting specimens to centralized hospital laboratories, often taking 24 to 48 hours to return results.\n\n'Receiving CE Mark validation is a monumental milestone that validates the scientific rigor of our engineering team,' said Dr. Christine Meyer, Chief Executive Officer of BioHealth. 'We will begin commercial distribution through contracted medical supply partnerships in Germany, France, and Italy beginning next month, followed by Scandinavia in the third quarter.'",
         [
             ("What regulatory achievement did BioHealth Diagnostics announce?",
              ["Approval to construct a new clinical research laboratory in Zurich",
               "Award of CE Mark certification for its GeneScan Mobile platform",
               "Acquisition of a major European pharmaceutical distributor",
               "A direct grant of twenty million euros from the European Union"], 1,
              "Đoạn 1: 'the GeneScan Mobile, has been awarded CE Mark certification under the European Union In Vitro Diagnostic Medical Devices Regulation'."),
             ("What is highlighted as a primary advantage of the GeneScan Mobile?",
              ["It is made entirely from recycled plastic bottles",
               "It detects twelve respiratory pathogens in under twenty minutes with high accuracy",
               "It is provided completely free of charge to all hospitals",
               "It does not require any electrical power or batteries"], 1,
              "Đoạn 2: 'detecting twelve common respiratory pathogens... in less than twenty minutes with an accuracy rate exceeding 98.4 percent'."),
             ("Where will initial commercial distribution begin next month?",
              ["In Japan and South Korea",
               "In the United States and Canada",
               "In Germany, France, and Italy",
               "Exclusively in Sweden and Norway"], 2,
              "Đoạn cuối: 'commercial distribution through contracted medical supply partnerships in Germany, France, and Italy beginning next month'.")
         ]),

        # Set 6: Single passage (Invoice) Q159-161
        ("TOEIC Part 7: Reading Comprehension (Questions 159–161)\n\nZENITH AUDIO-VISUAL SOLUTIONS — ITEMIZED INVOICE\nInvoice #: ZAV-5092\nDate: October 14\nPayment Due: November 14 (Net 30)\nBilled To: Crestview Law Chambers, 800 Fifth Avenue, Suite 3200, Seattle, WA\n\nServices Rendered: Boardroom Multi-Media Upgrade\nInstallation Dates: October 8–10\nLead Systems Engineer: Brett Kowalski\n\nLine Items:\n1. 85-inch 4K Commercial Interactive Touchscreen Display (Model Z-854K): $4,800.00\n2. Ceiling-Mounted Beamforming Microphone Array (2 units @ $1,250.00): $2,500.00\n3. Enterprise PTZ Auto-Tracking Video Conference Camera: $1,650.00\n4. Cabling, Wall Enclosures, and Acoustic Dampening Mounts: $650.00\n5. Labor: Hardware Installation and System Programming (16 hours @ $95.00/hr): $1,520.00\n\nSubtotal: $11,120.00\nSales Tax (Seattle Municipal 10.25%): $1,139.80\nTotal Amount Due: $12,259.80\n\nWarranty Coverage: All hardware items carry a 3-year on-site replacement warranty. Labor and programming are warranted for 12 months. Please make checks payable to Zenith Audio-Visual Solutions LLC.",
         [
             ("What type of work did Zenith Audio-Visual Solutions perform?",
              ["A complete redesign of a company website",
               "A boardroom multimedia upgrade installation",
               "Office janitorial and carpet cleaning services",
               "Corporate tax audit and accounting services"], 1,
              "Hóa đơn ghi rõ: 'Services Rendered: Boardroom Multi-Media Upgrade'."),
             ("How many ceiling-mounted microphones were installed?",
              ["One unit", "Two units", "Four units", "Sixteen units"], 1,
              "Mục 2: 'Ceiling-Mounted Beamforming Microphone Array (2 units @ $1,250.00)'."),
             ("What is the total amount due including sales tax?",
              ["$4,800.00", "$11,120.00", "$12,259.80", "$15,000.00"], 2,
              "Hóa đơn: 'Total Amount Due: $12,259.80'.")
         ]),

        # Set 7: Single passage (Policy / Guidelines) Q162-165
        ("TOEIC Part 7: Reading Comprehension (Questions 162–165)\n\nVALKYRIE ENERGY SYSTEMS — IT SECURITY DIRECTIVE\nDirective: #SEC-2024-09\nEffective Date: September 1\nSubject: Guidelines for Generative Artificial Intelligence (AI) and Cloud Tools\n\nAs artificial intelligence tools become increasingly prevalent across software development, data analytics, and administrative workflows, Valkyrie Energy Systems is establishing mandatory operational guidelines to safeguard proprietary intellectual property, customer confidential data, and energy grid telemetry.\n\nKey Directives:\n1. Approved AI Platforms: Employees may only utilize enterprise-licensed instances of ValkyrieAI hosted within our private virtual cloud. Public commercial AI platforms (including ChatGPT, Claude, and Gemini public web versions) are strictly prohibited for work-related tasks on company devices.\n2. Prohibition of Sensitive Data Input: Under no circumstances may source code, unreleased geological survey data, employee personal identifiable information (PII), or financial forecasts be submitted into external AI prompts.\n3. Content Verification Mandate: All text, architectural code, or technical documentation synthesized using approved AI tools must undergo rigorous human review by a senior engineer before being incorporated into production deliverables.\n4. Reporting Security Violations: Any accidental ingestion of company proprietary data into unapproved external platforms must be reported to security-response@valkyrie.com within two hours.",
         [
             ("What is the main purpose of the security directive?",
              ["To encourage staff to purchase personal computers for work",
               "To regulate the use of AI tools and protect corporate proprietary data",
               "To announce the closure of the IT security department",
               "To eliminate all computer software from the workplace"], 1,
              "Đoạn 1: 'establishing mandatory operational guidelines to safeguard proprietary intellectual property, customer confidential data, and energy grid telemetry'."),
             ("Which AI platform are Valkyrie employees permitted to use?",
              ["Any free public web browser tool",
               "Only enterprise-licensed instances of ValkyrieAI hosted in their private cloud",
               "Personal AI tools downloaded on personal mobile phones",
               "Public cloud tools without login credentials"], 1,
              "Mục 1: 'Employees may only utilize enterprise-licensed instances of ValkyrieAI hosted within our private virtual cloud'."),
             ("What is required before AI-generated code is added to production systems?",
              ["Payment of a copyright licensing fee",
               "Thorough human review by a senior engineer",
               "Approval by a vote of all company shareholders",
               "Immediate publication on public social media"], 1,
              "Mục 3: 'must undergo rigorous human review by a senior engineer before being incorporated into production deliverables'."),
             ("Within what timeframe must an accidental data leak to an unapproved tool be reported?",
              ["Within thirty minutes", "Within two hours", "Within twenty-four hours", "Within seven days"], 1,
              "Mục 4: 'must be reported to security-response@valkyrie.com within two hours'.")
         ]),

        # Set 8: Single passage (Recommendation Letter) Q166-170
        ("TOEIC Part 7: Reading Comprehension (Questions 166–170)\n\nLETTER OF PROFESSIONAL RECOMMENDATION\nDate: March 15\nTo: The Admissions Committee, Global Executive MBA Program, INSEAD\nFrom: Jonathan Hayes, Managing Partner, Hayes & Sterling Consulting Group\nSubject: Recommendation for Elena Rostova\n\nDear Members of the Admissions Committee,\n\nIt is an absolute privilege to recommend Elena Rostova for admission to the Global Executive MBA program. As a Senior Management Consultant in our London practice for the past five years, Ms. Rostova has consistently distinguished herself as one of the most analytically gifted and strategically visionary leaders in our global organization.\n\nMs. Rostova specializes in operational turnaround and digital transformation for heavy manufacturing clients across Northern Europe. In 2023, she spearheaded the multi-facility restructuring of a prominent Scandinavian paper and packaging conglomerate. Confronted with declining paper demand and surging energy tariffs, Elena designed and executed a lean manufacturing roadmap that reduced operational waste by 34% and redirected excess factory biomass into municipal district heating, converting an annual €12 million operating deficit into a €4.5 million operating profit in just eighteen months.\n\nBeyond her analytical prowess, Elena is a natural consensus builder. She effortlessly bridges cultural divides when leading cross-functional teams comprising plant managers, union delegates, and board executives. Her exceptional emotional intelligence, combined with her rigorous work ethic, makes her a model candidate for your esteemed executive cohort.\n\nI offer Elena Rostova my highest, unreserved endorsement.\n\nSincerely,\nJonathan Hayes, Managing Partner",
         [
             ("Who wrote the letter of recommendation?",
              ["Elena Rostova", "Jonathan Hayes", "The Dean of INSEAD", "A Scandinavian factory manager"], 1,
              "Cuối thư: 'Jonathan Hayes, Managing Partner, Hayes & Sterling Consulting Group'."),
             ("For what program is Ms. Rostova applying?",
              ["A Bachelor of Science in Mechanical Engineering",
               "A Global Executive MBA program",
               "A certification in industrial welding",
               "A PhD in environmental forestry"], 1,
              "Đầu thư: 'To: The Admissions Committee, Global Executive MBA Program, INSEAD'."),
             ("How long has Ms. Rostova worked at Hayes & Sterling Consulting?",
              ["One year", "Three years", "Five years", "Ten years"], 2,
              "Đoạn 1: 'As a Senior Management Consultant in our London practice for the past five years...'."),
             ("What financial result did Ms. Rostova achieve for a Scandinavian client?",
              ["She declared bankruptcy on behalf of the factory",
               "She turned a €12 million operating loss into a €4.5 million profit",
               "She doubled executive bonuses while laying off all factory workers",
               "She borrowed fifty million euros from international commercial banks"], 1,
              "Đoạn 2: 'converting an annual €12 million operating deficit into a €4.5 million operating profit in just eighteen months'."),
             ("What personal quality of Ms. Rostova is highlighted in the final paragraph?",
              ["Her skill as a competitive marathon runner",
               "Her ability to build consensus across diverse stakeholders",
               "Her extensive personal wealth",
               "Her background in computer gaming design"], 1,
              "Đoạn 3: 'Elena is a natural consensus builder. She effortlessly bridges cultural divides when leading cross-functional teams... exceptional emotional intelligence'.")
         ]),

        # Set 9: Single passage (Conference Program) Q171-175
        ("TOEIC Part 7: Reading Comprehension (Questions 171–175)\n\nINTERNATIONAL AEROSPACE & SATELLITE COMMUNICATIONS CONGRESS\nLocation: Paris Expo Porte de Versailles · Hall 7\nDate: Thursday, October 24\n\nConference Schedule Overview:\n• 08:30 – 09:15: Continental Breakfast & Badge Registration (Main Lobby)\n• 09:15 – 09:30: Welcome Address: 'Europe's Next Generation in Orbit' — Jean-Luc Moreau (Director General, European Aerospace Consortium)\n• 09:30 – 10:45: Opening Keynote: 'Deploying Low Earth Orbit (LEO) Constellations for Universal Global Broadband' — Dr. Sarah Lindstrom, VP of Satellite Engineering, OrbitalNet (Auditorium 1)\n• 10:45 – 11:15: Morning Coffee Break & Satellite Hardware Showcase (Exhibition Pavilion B)\n• 11:15 – 12:45: Concurrent Technical Sessions:\n  - Session A: 'Advanced Phased-Array Antennas for Direct-to-Cellular Satellite Links' (Room 201)\n  - Session B: 'Space Debris Mitigation and Automated Autonomous De-Orbiting Thrusters' (Room 202)\n  - Session C: 'Laser Optical Inter-Satellite Links: Achieving 100 Gbps Throughput in Vacuum' (Room 203)\n• 12:45 – 14:00: Networking Luncheon (Pavilion A)\n• 14:00 – 15:30: Panel Discussion: 'Financing New Space: Venture Capital in Planetary Exploration' (Auditorium 1)\n• 15:45 – 17:00: Technology Demonstration & Innovation Startup Showcase",
         [
             ("Where is the aerospace congress taking place?",
              ["Berlin Convention Center",
               "Paris Expo Porte de Versailles",
               "London ExCeL Centre",
               "Geneva International Conference Hall"], 1,
              "Tiêu đề: 'Location: Paris Expo Porte de Versailles · Hall 7'."),
             ("What is the topic of Dr. Sarah Lindstrom's keynote speech at 09:30?",
              ["Space tourism on commercial rockets",
               "Deploying LEO satellite constellations for global broadband",
               "Designing spacesuits for lunar astronauts",
               "Manufacturing lightweight solar panels in space"], 1,
              "Lịch 09:30: 'Opening Keynote: Deploying Low Earth Orbit (LEO) Constellations for Universal Global Broadband'."),
             ("Which session should someone attend to learn about laser communication between satellites?",
              ["Session A in Room 201",
               "Session B in Room 202",
               "Session C in Room 203",
               "The Welcome Address"], 2,
              "Chương trình: 'Session C: Laser Optical Inter-Satellite Links: Achieving 100 Gbps Throughput in Vacuum (Room 203)'."),
             ("Where will the 12:45 PM Networking Luncheon be held?",
              ["Room 201", "Auditorium 1", "Pavilion A", "Main Lobby"], 2,
              "Lịch 12:45: '12:45 – 14:00: Networking Luncheon (Pavilion A)'."),
             ("What topic will be discussed during the 14:00 PM afternoon panel?",
              ["Venture capital financing in the space sector",
               "Retirement pension funds for airline pilots",
               "Meteorite excavation techniques",
               "New airport runway construction in France"], 0,
              "Lịch 14:00: 'Panel Discussion: Financing New Space: Venture Capital in Planetary Exploration (Auditorium 1)'.")
         ]),

        # Set 10: Double passage (Job Ad + Application Cover Letter) Q176-180
        ("TOEIC Part 7: Reading Comprehension (Questions 176–180)\n\n[DOCUMENT 1: Job Advertisement]\n\nNEXUS SEMICONDUCTOR MANUFACTURING — JOB OPENING\nPosition: Senior Cleanroom Facilities Engineer\nLocation: Austin, Texas\n\nKey Responsibilities:\nNexus Semiconductor is seeking an experienced Cleanroom Facilities Engineer to oversee our Class 1 wafer fabrication facility in Austin. The engineer will maintain ultra-pure water (UPW) filtration systems, specialized hazardous chemical delivery lines, HVAC laminar flow systems, and vibration-isolated foundations critical to 3-nanometer silicon manufacturing.\n\nCandidate Qualifications:\n• Bachelor's or Master's degree in Chemical, Mechanical, or Industrial Engineering.\n• Minimum 6 years of direct cleanroom engineering experience in semiconductor fabrication.\n• In-depth knowledge of SEMI safety standards and hazardous gas monitoring protocols.\n• Professional Engineer (PE) license is strongly preferred.\n\nNexus offers competitive base salaries, comprehensive medical/dental packages, 401(k) matching up to 8%, and relocation reimbursement for qualified candidates. Please submit your application through www.nexussemi.com/careers before June 15.\n\n---\n\n[DOCUMENT 2: Application Email]\n\nDate: June 8\nTo: recruiting@nexussemi.com\nFrom: Raymond Delgado, P.E. <rdelgado@enginetx.com>\nSubject: Application: Senior Cleanroom Facilities Engineer — Raymond Delgado\n\nDear Nexus Hiring Team,\nI am writing to formally submit my application for the Senior Cleanroom Facilities Engineer position in Austin, as posted on your portal. I have spent the past eight years managing cleanroom operations at Silicon Texas Foundry in Dallas, where I served as Lead Utilities Engineer for their 300mm wafer fabrication cleanroom.\n\nDuring my tenure, I managed a team of fourteen maintenance technicians and successfully oversaw a major overhaul of our ultra-pure water recycling plant, increasing water reclamation efficiency from 65% to 88% while saving over $850,000 annually. I possess an active Texas Professional Engineer (PE) license in Mechanical Engineering and have completed advanced certifications in SEMI S2 environmental safety compliance.\n\nHaving lived in Dallas for twelve years, I am intimately familiar with Texas industrial standards and am prepared to relocate to Austin immediately upon contract execution. I have attached my resume and letters of professional reference for your review.\n\nWarm regards,\nRaymond Delgado, P.E.",
         [
             ("What type of facility will the Senior Cleanroom Facilities Engineer oversee?",
              ["A commercial food packaging bakery",
               "A Class 1 wafer fabrication cleanroom",
               "An offshore deep-sea oil drilling platform",
               "A public high school computer laboratory"], 1,
              "Document 1: 'oversee our Class 1 wafer fabrication facility in Austin'."),
             ("According to Document 1, what credential is 'strongly preferred'?",
              ["A commercial driver's license",
               "A Professional Engineer (PE) license",
               "A medical doctor degree",
               "A certificate in private aviation navigation"], 1,
              "Document 1: 'Professional Engineer (PE) license is strongly preferred'."),
             ("How many years of relevant cleanroom engineering experience does Raymond Delgado have?",
              ["Two years", "Four years", "Eight years", "Twenty years"], 2,
              "Document 2: 'I have spent the past eight years managing cleanroom operations at Silicon Texas Foundry in Dallas'."),
             ("What project accomplishment does Mr. Delgado highlight in his email?",
              ["He invented a new microprocessor chip",
               "He increased water recycling efficiency to 88%, saving $850,000 annually",
               "He reduced employee work hours by 50%",
               "He constructed a solar energy park in Dallas"], 1,
              "Document 2: 'oversaw a major overhaul of our ultra-pure water recycling plant, increasing water reclamation efficiency from 65% to 88% while saving over $850,000 annually'."),
             ("What indicates that Mr. Delgado meets the preferred licensing criterion?",
              ["He includes 'P.E.' after his name and holds an active Texas Professional Engineer license",
               "He has a driver's license from the state of Florida",
               "He is currently studying for an undergraduate bachelor's degree",
               "He served in the United States military"], 0,
              "Document 2: 'I possess an active Texas Professional Engineer (PE) license in Mechanical Engineering' và ký tên 'Raymond Delgado, P.E.'.")
         ]),

        # Set 11: Double passage (Product Brochure & Maintenance Email) Q181-185
        ("TOEIC Part 7: Reading Comprehension (Questions 181–185)\n\n[DOCUMENT 1: Commercial Equipment Brochure]\n\nAQUAPURE COMMERCIAL WATER PURIFICATION SYSTEMS\nModel: Industrial HydroPure 4000\n\nFeatures:\n• Multi-stage reverse osmosis filtration producing up to 4,000 gallons of purified water daily.\n• Digital micro-controller with real-time total dissolved solids (TDS) and flow-rate monitoring.\n• Automatic backwash flushing cycle every 24 operating hours.\n• Standard Warranty: 2 years on electric pumps, 5 years on structural stainless steel housing.\n\nMaintenance Requirements:\n- Sediment Prefilter (Part #SP-101): Replace every 3 months.\n- Carbon Block Filter (Part #CB-202): Replace every 6 months.\n- Reverse Osmosis Membrane (Part #RO-500): Replace every 24 months.\n\nCustomer Support: 24/7 hotline at 1-800-555-AQUA or email service@aquapure-systems.com.\n\n---\n\n[DOCUMENT 2: Facility Maintenance Email]\n\nDate: October 18\nTo: service@aquapure-systems.com\nFrom: Greg Kowalczyk <greg@bluecrestbrewing.com>\nSubject: Replacement Filters & Service Request — HydroPure 4000\n\nDear AquaPure Customer Service,\nOur craft brewery in Denver installed an Industrial HydroPure 4000 system eighteen months ago, and it has performed admirably in maintaining our water quality. According to our maintenance log, we replaced the carbon block filters three months ago and the sediment prefilters last month.\n\nHowever, our digital readout this morning displayed an elevated TDS reading of 145 ppm (normal threshold is below 20 ppm) along with a 'Membrane Efficiency Warning'. Given that our system has been operating continuously for eighteen months, we suspect the main reverse osmosis membrane may need premature replacement due to unusually hard municipal tap water in our industrial district.\n\nCould you please dispatch two replacement RO-500 membranes via expedited shipping to our brewery address? Also, if you have a certified service technician available in the Denver metro area, could you schedule a technician visit on Thursday, October 22, to recalibrate the digital sensors?\n\nThank you,\nGreg Kowalczyk, Head Brewer",
         [
             ("What is the maximum daily output of the HydroPure 4000 according to Document 1?",
              ["500 gallons", "1,000 gallons", "4,000 gallons", "10,000 gallons"], 2,
              "Document 1: 'producing up to 4,000 gallons of purified water daily'."),
             ("Under normal conditions, how often should the Reverse Osmosis Membrane (Part #RO-500) be replaced?",
              ["Every 3 months", "Every 6 months", "Every 24 months", "Every 5 years"], 2,
              "Document 1: 'Reverse Osmosis Membrane (Part #RO-500): Replace every 24 months'."),
             ("Why does Greg Kowalczyk believe his system's membrane needs replacement early?",
              ["The brewery had a fire that damaged the electrical wiring",
               "The digital readout showed high TDS and the local tap water is unusually hard",
               "The brewery was closed for three consecutive months",
               "A technician accidentally dropped the steel housing on the floor"], 1,
              "Document 2: 'displayed an elevated TDS reading of 145 ppm... suspect the main reverse osmosis membrane may need premature replacement due to unusually hard municipal tap water'."),
             ("What replacement parts did Mr. Kowalczyk order?",
              ["Four sediment prefilters",
               "Two RO-500 reverse osmosis membranes",
               "A brand new steel housing tank",
               "Three electronic control monitors"], 1,
              "Document 2: 'Could you please dispatch two replacement RO-500 membranes via expedited shipping...'."),
             ("What service appointment does Mr. Kowalczyk request for Thursday, October 22?",
              ["A visit by a certified technician to recalibrate the digital sensors",
               "A sales representative to sell them an additional water filtration unit",
               "An insurance claims inspector to evaluate water damage",
               "A brewery tour for school students"], 0,
              "Document 2: 'schedule a technician visit on Thursday, October 22, to recalibrate the digital sensors'.")
         ]),

        # Set 12: Triple passage (Conference Announcement + Email + Review) Q186-190
        ("TOEIC Part 7: Reading Comprehension (Questions 186–190)\n\n[DOCUMENT 1: Conference Webpage]\n\nANNUAL ASIA-PACIFIC FINTECH CONVERGENCE — TOKYO\nTokyo Big Sight International Exhibition Center · November 8–10\n\nFeatured Plenary Session (Main Hall A, Friday Nov 8 at 10:00 AM):\n'Central Bank Digital Currencies (CBDCs) and Cross-Border Interoperability'\nKeynote Speaker: Dr. Hiroshi Takahashi, Deputy Governor of the Monetary Research Institute.\n\nRegistration Pass Options:\n• Standard Pass ($450): Access to exhibition trade booths and general plenary sessions.\n• Executive VIP Pass ($850): Includes Standard Pass + Access to VIP Lounge, invitation to Thursday Gala Dinner at Hotel Okura, and priority reserved seating for all keynote addresses.\n\n---\n\n[DOCUMENT 2: Travel Coordination Email]\n\nDate: October 28\nTo: Jonathan Briggs <jbriggs@apexcapital.sg>\nFrom: Naomi Sato <nsato@apexcapital.sg>\nSubject: Your Travel Itinerary & Pass for Tokyo Fintech Convergence\n\nHi Jonathan,\nI have finalized your arrangements for the Tokyo Fintech Convergence. You are booked on Singapore Airlines Flight SQ638 departing Changi Airport on Wednesday, November 6, and staying at the Grand Hyatt Tokyo.\n\nI purchased an Executive VIP Pass under your name, which includes the Gala Dinner at Hotel Okura on Thursday evening. Please note that Dr. Hiroshi Takahashi's keynote on Friday morning has been moved forward to 9:30 AM (half an hour earlier than originally advertised) to accommodate a teleconference with the Bank of Japan. Your VIP pass grants you access to front-row reserved seating in Main Hall A. Let me know if you need anything else.\n\nBest,\nNaomi",
         [
             ("Where is the Asia-Pacific Fintech Convergence being held?",
              ["Singapore Expo Center",
               "Tokyo Big Sight International Exhibition Center",
               "Hong Kong Convention Centre",
               "Seoul COEX Center"], 1,
              "Document 1: 'Location: Tokyo Big Sight International Exhibition Center'."),
             ("What perk is included with the Executive VIP Pass?",
              ["Free helicopter transportation across Tokyo",
               "Access to the VIP Lounge, Gala Dinner, and priority reserved seating",
               "An unlimited shopping voucher at Tokyo department stores",
               "Complimentary flights on Singapore Airlines"], 1,
              "Document 1: 'Includes Standard Pass + Access to VIP Lounge, invitation to Thursday Gala Dinner at Hotel Okura, and priority reserved seating'."),
             ("At what time is Dr. Takahashi's keynote now scheduled to begin on Friday?",
              ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM"], 1,
              "Document 2: 'Dr. Hiroshi Takahashi's keynote on Friday morning has been moved forward to 9:30 AM (half an hour earlier than originally advertised)'."),
             ("Where is Jonathan Briggs staying during his trip to Tokyo?",
              ["Hotel Okura", "Grand Hyatt Tokyo", "Tokyo Big Sight Dormitory", "Singapore Airlines Crew Hotel"], 1,
              "Document 2: 'staying at the Grand Hyatt Tokyo'."),
             ("What is the subject of Dr. Takahashi's keynote address?",
              ["Cryptocurrency mining hardware",
               "Central Bank Digital Currencies and cross-border interoperability",
               "Autonomous robotic banking teller machines",
               "Real estate mortgage underwriting software"], 1,
              "Document 1: 'Central Bank Digital Currencies (CBDCs) and Cross-Border Interoperability'.")
         ]),

        # Set 13: Triple passage (Hotel Bill + Review + Response) Q191-195
        ("TOEIC Part 7: Reading Comprehension (Questions 191–195)\n\n[DOCUMENT 1: Hotel Billing Folio]\n\nTHE HARBORSIDE SUITES — SYDNEY\nFolio #: HSS-44021\nGuest: Lawrence Chen\nRoom: 1408 (Harbor View King Suite)\nCheck-in: March 12 | Check-out: March 15 (3 nights)\n\nRoom Charges:\n• March 12: Accommodation Room Rate: AUD $320.00\n• March 13: Accommodation Room Rate: AUD $320.00\n• March 14: Accommodation Room Rate: AUD $320.00\n\nIncidentals & Amenities:\n• March 13: In-Room Dining Dinner: AUD $65.00\n• March 14: High-Speed Executive Wi-Fi Package: AUD $25.00\n• March 14: Laundry & Dry Cleaning (Express Service): AUD $45.00\n\nTotal Charges: AUD $1,095.00\nPayment Method: MasterCorporate Credit Card ending in 8831\n\n---\n\n[DOCUMENT 2: Customer Online Review on AussieTravelReview.com]\n\nReviewer: Lawrence C. (Sydney Business Traveler)\nRating: 3/5 Stars\nDate: March 18\n\n'The Harborside Suites boasts panoramic vistas of Sydney Harbour and the Opera House that are truly second to none. The room was spacious and the bed was remarkably comfortable. However, as an international business traveler who requires uninterrupted connectivity, I was profoundly frustrated by the internet service. Despite paying a premium AUD $25 fee for the 'High-Speed Executive Wi-Fi' on Friday, the connection repeatedly dropped during an essential international videoconference with investors in New York. The front desk staff seemed unaware of how to reboot the floor's wireless access router. While the in-room dining meal was delicious, the unreliable internet makes it difficult for me to recommend this property to corporate executives.'\n\n---\n\n[DOCUMENT 3: Management Response Letter]\n\nDate: March 20\nTo: Lawrence Chen <lchen@pacificequity.com.au>\nFrom: Alistair MacIntyre, General Manager, The Harborside Suites\nSubject: Sincere Apologies Regarding Your Stay in Suite 1408\n\nDear Mr. Chen,\nThank you for sharing your candid review on AussieTravelReview.com. I deeply regret the technical disruptions you experienced with our Wi-Fi service during your critical investor conference on Friday, March 14.\n\nFollowing an immediate investigation with our telecommunications vendor, we discovered a faulty network switch on the 14th floor that caused sporadic packet loss under heavy load. The defective hardware was replaced yesterday afternoon. To compensate you for this unacceptable inconvenience, I have refunded the AUD $25 Wi-Fi charge as well as your AUD $65 room service dinner. In addition, I have upgraded your status in our loyalty club to Harborside Gold, which entitles you to complimentary high-speed connectivity and room upgrades on all future reservations.\n\nWarm regards,\nAlistair MacIntyre",
         [
             ("How many nights did Lawrence Chen stay at The Harborside Suites?",
              ["One night", "Two nights", "Three nights", "Five nights"], 2,
              "Document 1: Check-in March 12, Check-out March 15 (3 nights)."),
             ("What aspect of the hotel did Mr. Chen praise in his review?",
              ["The fitness gymnasium",
               "The panoramic harbour views and comfortable bed",
               "The swimming pool bar",
               "The free airport shuttle bus"], 1,
              "Document 2: 'boasts panoramic vistas of Sydney Harbour... spacious and the bed was remarkably comfortable'."),
             ("Why was Mr. Chen dissatisfied during his stay on March 14?",
              ["The in-room dining food arrived cold",
               "The executive Wi-Fi repeatedly dropped during an important videoconference",
               "The laundry service damaged his business suits",
               "The room air conditioner was completely broken"], 1,
              "Document 2: 'Despite paying a premium AUD $25 fee for the High-Speed Executive Wi-Fi... the connection repeatedly dropped during an essential international videoconference'."),
             ("What did the hotel investigation discover regarding the internet issue?",
              ["The guest forgot to enter his password",
               "A faulty network switch on the 14th floor was causing packet loss",
               "A submarine fiber-optic cable in the Pacific Ocean had severed",
               "The hotel internet was blocked by the Australian government"], 1,
              "Document 3: 'discovered a faulty network switch on the 14th floor that caused sporadic packet loss under heavy load'."),
             ("What total dollar amount did the General Manager refund to Mr. Chen?",
              ["AUD $25.00", "AUD $65.00", "AUD $90.00", "AUD $320.00"], 2,
              "Document 3: 'refunded the AUD $25 Wi-Fi charge as well as your AUD $65 room service dinner' (Total $25 + $65 = AUD $90.00).")
         ]),

        # Set 14: Triple passage (Proposal + Committee Memo + Contract) Q196-200
        ("TOEIC Part 7: Reading Comprehension (Questions 196–200)\n\n[DOCUMENT 1: Vendor Service Proposal]\n\nKESTREL CLOUD SOLUTIONS — ENTERPRISE CYBERSECURITY AUDIT\nDate: August 10\nClient: Novalis Life Sciences Inc.\n\nProposed Service Packages:\n• Option A: Baseline Penetration Testing (Covers external IP addresses and web portals; automated vulnerability scanning): $35,000\n• Option B: Comprehensive Enterprise Security Audit (Includes Option A + internal network penetration testing, active directory credential auditing, and employee phishing simulations): $65,000\n• Option C: Continuous Threat Monitoring & Incident Response (Includes Option B + 24/7 dedicated Security Operations Center monitoring for 12 months): $110,000\n\nDelivery Schedule: Options A and B conclude within 8 weeks of project kickoff.\n\n---\n\n[DOCUMENT 2: Internal Security Steering Committee Memo]\n\nDate: August 25\nTo: Dr. Arthur Pendelton, Chief Information Officer, Novalis Life Sciences\nFrom: Information Security Governance Committee\nSubject: Selection of Cybersecurity Audit Partner\n\nDear Dr. Pendelton,\nFollowing our evaluation of three formal vendor proposals, our committee unanimously advises proceeding with Kestrel Cloud Solutions. Our primary motivation is Kestrel's extensive experience with pharmaceutical and biomedical compliance standards, specifically FDA 21 CFR Part 11 validation.\n\nWe recommend approving Option B ($65,000). While Option C offers continuous 24/7 SOC monitoring, our internal security operations team already possesses the capacity to handle routine monitoring once the comprehensive audit identifies and patches existing system vulnerabilities. Kestrel has agreed to include two executive debriefing presentations for our board of directors at no additional charge.\n\n---\n\n[DOCUMENT 3: Final Engagement Letter]\n\nPROJECT AGREEMENT: NOVALIS LIFE SCIENCES & KESTREL CLOUD SOLUTIONS\nEffective Date: September 1\n\n1. Project Scope: Novalis Life Sciences engages Kestrel Cloud Solutions to execute the Option B Comprehensive Enterprise Security Audit at the agreed fixed fee of $65,000.00.\n2. Payment Schedule: 40% ($26,000) upon signing; 30% ($19,500) upon delivery of interim vulnerability report at week 4; 30% ($19,500) upon final report delivery and board presentation at week 8.\n3. Designated Project Leads: Elena Rostova (Lead Security Auditor, Kestrel) and Marcus Campbell (Chief Information Security Officer, Novalis).\n\nAuthorized Signatures:\nArthur Pendelton (CIO, Novalis Life Sciences)\nGregory Vance (Managing Director, Kestrel Cloud Solutions)",
         [
             ("What is the subject of the proposal in Document 1?",
              ["A commercial real estate leasing agreement",
               "An enterprise cybersecurity audit and testing service",
               "The supply of laboratory glassware and microscopes",
               "Employee medical health insurance plans"], 1,
              "Document 1 tiêu đề: 'KESTREL CLOUD SOLUTIONS — ENTERPRISE CYBERSECURITY AUDIT'."),
             ("Why did the committee recommend Kestrel over competitors according to Document 2?",
              ["They were the only vendor offering free software licenses",
               "They have extensive experience with FDA pharmaceutical compliance standards",
               "Their corporate headquarters is located across the street",
               "They offered to complete the work for only $10,000"], 1,
              "Document 2: 'Kestrel's extensive experience with pharmaceutical and biomedical compliance standards, specifically FDA 21 CFR Part 11 validation'."),
             ("Why did the committee choose Option B instead of Option C?",
              ["Novalis did not have enough money to pay for Option B",
               "The internal Novalis security team already has capacity for ongoing monitoring",
               "Option C requires six years to complete",
               "Kestrel refused to provide 24/7 monitoring services"], 1,
              "Document 2: 'our internal security operations team already possesses the capacity to handle routine monitoring once the comprehensive audit identifies and patches existing system vulnerabilities'."),
             ("What is the initial payment due upon signing the contract in Document 3?",
              ["$19,500", "$26,000", "$35,000", "$65,000"], 1,
              "Document 3 mục 2: '40% ($26,000) upon signing'."),
             ("Who will serve as the Lead Security Auditor for Kestrel on this project?",
              ["Dr. Arthur Pendelton", "Elena Rostova", "Marcus Campbell", "Gregory Vance"], 1,
              "Document 3 mục 3: 'Elena Rostova (Lead Security Auditor, Kestrel)'.")
         ])
    ]

    p7_q_num = 147
    for ctx, q_list in p7_items:
        for q_text, opts, ans, exp in q_list:
            questions.append({
                "lv": "B2",
                "t": "mc",
                "ctx": ctx,
                "q": f"Part 7 (Câu {p7_q_num}): {q_text}",
                "o": opts,
                "a": ans,
                "x": exp
            })
            p7_q_num += 1
            
    assert len(questions) == 100, f"Expected 100 questions, got {len(questions)}"
    return {
        "id": "toeic-full-2",
        "level": "B2",
        "title": "TOEIC ETS Reading Official Full Test 2 (ETS Actual Test Master)",
        "desc": "Đề thi TOEIC Reading chuẩn ETS quốc tế 75 phút (100 câu 101–200). Chuyên sâu các bẫy ngữ pháp nâng cao, thông cáo doanh nghiệp, chuỗi email và báo cáo tài chính có giải thích chi tiết.",
        "timeLimit": 75,
        "category": "toeic",
        "target": "TOEIC 650 - 990 (Full 75 phút)",
        "testType": "full",
        "startNumber": 101,
        "sections": [
            {"name": "Part 5: Incomplete Sentences (101–130)", "startIndex": 0, "count": 30},
            {"name": "Part 6: Text Completion (131–146)", "startIndex": 30, "count": 16},
            {"name": "Part 7: Reading Comprehension (147–200)", "startIndex": 46, "count": 54}
        ],
        "questions": questions
    }

t1 = make_test_1()
t2 = make_test_2()

ts_content = f'''/* Authentic Standard 75-minute, 100-question TOEIC ETS Reading Tests */
import type {{ MockTest }} from "../types";

export const toeicFullTests: MockTest[] = {json.dumps([t1, t2], ensure_ascii=False, indent=2)};
'''

with open("src/data/toeicFullTests.ts", "w", encoding="utf-8") as f:
    f.write(ts_content)

print(f"Generated src/data/toeicFullTests.ts with 2 tests, {len(t1['questions'])} and {len(t2['questions'])} questions!")
