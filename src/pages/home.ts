/* Landing Page: Claude.com-inspired clean, spacious layout
   1. Hero section (2 columns: large serif headline, CTA card with stacked buttons & preview)
   2. Content sections (96-128px spacing, serif titles, card grids with feature checklists)
   3. Tab switcher above card grid
   4. FAQ section (single-open accordion with smooth height animation)
   5. Large footer on --surface-alt with 4 link columns
*/
import { h, put } from "../core/dom";
import { S } from "../core/state";
import { currentStreak } from "../core/state";
import { registerPage, go } from "../core/router";

registerPage("home", "EnglishPath · Lộ trình tiếng Anh toàn diện A2 → B1 → B2", view => {
  const streak = currentStreak();
  const lv = S.level;

  // ===================== 1. HERO SECTION =====================
  const heroLeft = h("div", { class: "hero-col-left" },
    h("div", { class: "hero-kicker" }, "Nền tảng tự học tiếng Anh chuẩn CEFR"),
    h("h1", { class: "hero-serif-title" }, "Làm chủ tiếng Anh toàn diện từ A2 đến B2."),
    h("p", { class: "hero-subtitle" },
      "Lộ trình 4 kỹ năng kết hợp 600 từ vựng TOEIC và 12 đề thi thử chuẩn quốc tế. Tự động lưu tiến độ offline 100% trên trình duyệt của bạn."
    ),
    h("div", { class: "hero-cta-card" },
      h("button", { class: "btn primary hero-btn-main", onclick: () => go("dashboard") }, "Bắt đầu học ngay →"),
      h("div", { class: "hero-divider-or" }, h("span", {}, "hoặc")),
      h("button", { class: "btn hero-btn-sub", onclick: () => go("placement") }, "🧭 Kiểm tra xếp lớp (15 phút)"),
      h("div", { class: "hero-fine-print" }, "Hoàn toàn miễn phí · Không cần tài khoản · Dữ liệu lưu offline an toàn")
    )
  );

  const heroRight = h("div", { class: "hero-col-right" },
    h("div", { class: "hero-preview-window" },
      h("div", { class: "preview-window-bar" },
        h("div", { class: "window-dots" },
          h("span", { class: "w-dot red" }),
          h("span", { class: "w-dot yellow" }),
          h("span", { class: "w-dot green" })
        ),
        h("div", { class: "window-title" }, "EnglishPath Dashboard Preview"),
        h("span", { class: "chip lv " + lv }, lv + " Active")
      ),
      h("div", { class: "preview-window-content" },
        h("div", { class: "row", style: "justify-content:space-between;align-items:center;margin-bottom:14px" },
          h("div", { style: "font-weight:700;font-size:1.05rem" }, "🔥 Chuỗi học: ", h("span", { style: "color:var(--accent)" }, `${streak || 3} ngày liên tục`)),
          h("span", { class: "chip sm" }, "Lộ trình cá nhân hoá")
        ),
        h("div", { class: "preview-skills-grid" },
          h("div", { class: "preview-skill-box" },
            h("div", { class: "preview-skill-header" }, h("span", {}, "📖 Reading"), h("b", {}, "85%")),
            h("div", { class: "preview-bar" }, h("div", { style: "width:85%;background:var(--ok)" }))
          ),
          h("div", { class: "preview-skill-box" },
            h("div", { class: "preview-skill-header" }, h("span", {}, "🎧 Listening"), h("b", {}, "72%")),
            h("div", { class: "preview-bar" }, h("div", { style: "width:72%;background:var(--B1)" }))
          ),
          h("div", { class: "preview-skill-box" },
            h("div", { class: "preview-skill-header" }, h("span", {}, "🎤 Speaking"), h("b", {}, "64%")),
            h("div", { class: "preview-bar" }, h("div", { style: "width:64%;background:var(--B2)" }))
          ),
          h("div", { class: "preview-skill-box" },
            h("div", { class: "preview-skill-header" }, h("span", {}, "✍️ Writing"), h("b", {}, "78%")),
            h("div", { class: "preview-bar" }, h("div", { style: "width:78%;background:var(--accent)" }))
          )
        ),
        h("div", { class: "preview-quiz-card" },
          h("div", { class: "preview-quiz-tag" }, "💡 Câu hỏi mẫu ETS TOEIC"),
          h("div", { class: "preview-quiz-q" }, "The director decided to _______ the contract after mutual agreement."),
          h("div", { class: "preview-quiz-opts" },
            h("div", { class: "preview-opt correct" }, "A. renew (✓ Chính xác)"),
            h("div", { class: "preview-opt" }, "B. renewal"),
            h("div", { class: "preview-opt" }, "C. renewing")
          )
        ),
        h("div", { class: "preview-footer-note" }, "🎯 600 Essential TOEIC Words · 12 Topics Included")
      )
    )
  );

  const heroSection = h("section", { class: "site-section hero-section" },
    h("div", { class: "site-container" },
      h("div", { class: "hero-grid" }, heroLeft, heroRight)
    )
  );

  // ===================== 2. CONTENT SECTION 1: 4 KỸ NĂNG =====================
  const skillsCards = [
    {
      k: "reading",
      title: "Reading",
      desc: "Đọc hiểu theo chủ đề kèm tra từ điển 1-click & giải thích đáp án",
      icon: "📖",
      btn: "Khám phá Reading →",
      route: "reading",
      checks: [
        "Bài đọc A2, B1, B2 chuẩn văn phong quốc tế",
        "Tra nghĩa từ vựng tức thì khi nhấp vào chữ",
        "Chỉ rõ bằng chứng và giải thích câu đúng/sai"
      ]
    },
    {
      k: "listening",
      title: "Listening",
      desc: "Luyện nghe phát âm bản ngữ với transcript đồng bộ theo giọng đọc",
      icon: "🎧",
      btn: "Luyện Listening →",
      route: "listening",
      checks: [
        "Audio chuẩn giọng đọc người bản xứ",
        "Transcript tô màu chữ đang đọc theo thời gian thực",
        "Trắc nghiệm kiểm tra độ hiểu sâu ngữ cảnh"
      ]
    },
    {
      k: "speaking",
      title: "Speaking",
      desc: "Luyện phản xạ và nhận diện giọng nói AI theo từng từ ngữ",
      icon: "🎤",
      btn: "Luyện Speaking →",
      route: "speaking",
      checks: [
        "So khớp trực tiếp từ phát âm đúng, thiếu hoặc thừa",
        "Luyện phát âm 44 âm IPA chuẩn Oxford",
        "Mô tả tranh & trả lời câu hỏi phản xạ"
      ]
    },
    {
      k: "writing",
      title: "Writing",
      desc: "Chấm điểm bài viết tự động theo chuẩn band điểm CEFR & IELTS",
      icon: "✍️",
      btn: "Luyện Writing →",
      route: "writing",
      checks: [
        "Phân tích độ đa dạng từ vựng CEFR A2-B2",
        "Kiểm tra ngữ pháp câu & độ dài chuẩn",
        "Cung cấp bài viết mẫu điểm cao để đối chiếu"
      ]
    }
  ];

  const section1 = h("section", { class: "site-section content-section" },
    h("div", { class: "site-container" },
      h("div", { class: "section-header" },
        h("h2", { class: "section-serif-title" }, "Hệ thống 4 kỹ năng & Ngữ pháp toàn diện"),
        h("p", { class: "section-intro" },
          "Phương pháp tích hợp giúp bạn phát triển đồng đều từ kỹ năng tiếp nhận thông tin (Đọc, Nghe) đến sản sinh ngôn ngữ tự nhiên (Nói, Viết)."
        )
      ),
      h("div", { class: "claude-card-grid grid-4" },
        skillsCards.map(c => h("div", { class: "claude-feature-card" },
          h("div", { class: "card-eyebrow" }, c.title.toUpperCase()),
          h("div", { class: "card-highlight-icon" }, c.icon),
          h("h3", { class: "card-title" }, c.title),
          h("p", { class: "card-desc" }, c.desc),
          h("button", { class: "btn claude-btn-full", onclick: () => go(c.route) }, c.btn),
          h("hr", { class: "claude-card-divider" }),
          h("div", { class: "card-checklist" },
            c.checks.map(chk => h("div", { class: "check-item" },
              h("span", { class: "check-icon" }, "✓"),
              h("span", { class: "check-text" }, chk)
            ))
          )
        ))
      ),
      h("p", { class: "section-footnote" },
        "Tất cả bài học đều được phân loại chi tiết theo từng cấp độ A2, B1 và B2 với ngân hàng bài tập tự chấm điểm."
      )
    )
  );

  // ===================== 3. CONTENT SECTION 2: TOEIC & THI THỬ (WITH TABS) =====================
  const tabGroupA = [
    {
      title: "600 Từ vựng TOEIC",
      desc: "12 nhóm chủ đề thương mại ETS hay gặp nhất trong đề thi",
      icon: "🎯",
      btn: "12 Chủ đề TOEIC →",
      route: "vocabulary/toeic",
      checks: [
        "Đủ 600 từ cốt lõi Part 1 đến Part 7",
        "Phiên âm, loại từ, giải nghĩa tiếng Việt & ví dụ",
        "Hỗ trợ cả chế độ Lật thẻ (Flip) & Gõ từ (Spelling)"
      ]
    },
    {
      title: "Flashcards SRS",
      desc: "Thuật toán lặp lại ngắt quãng khoa học ghi nhớ từ vựng sâu sắc",
      icon: "🃏",
      btn: "Lật thẻ ôn tập →",
      route: "vocabulary/review",
      checks: [
        "Khoảng cách ôn tập tăng dần: 1, 3, 7, 14, 30 ngày",
        "Từ khó hoặc sai được nhắc lại sau vài phút",
        "Tự động đồng bộ với từ mới bạn lưu trong bài đọc"
      ]
    },
    {
      title: "24 Chuyên đề Ngữ pháp",
      desc: "Hệ thống ngữ pháp thực hành có bài tập tương tác ngay",
      icon: "🧩",
      btn: "Luyện ngữ pháp →",
      route: "grammar",
      checks: [
        "Trải rộng từ thì cơ bản đến mệnh đề quan hệ & đảo ngữ B2",
        "Giải thích chi tiết quy tắc ngữ pháp & mẹo tránh bẫy",
        "Bài tập trắc nghiệm & điền từ chấm điểm tức thì"
      ]
    }
  ];

  const tabGroupB = [
    {
      title: "12 Đề thi thử tổng hợp",
      desc: "Đề thi thử đa dạng cấu trúc A2, B1, B2 chuẩn quốc tế",
      icon: "🏆",
      btn: "Làm đề thi thử →",
      route: "tests",
      checks: [
        "280 câu hỏi phân loại chi tiết theo từng trình độ",
        "Đồng hồ đếm ngược áp lực phòng thi thực tế",
        "Bảng chuyển nhanh câu hỏi (Jump Palette) đánh dấu câu đúng/sai"
      ]
    },
    {
      title: "Sổ tay lỗi sai (Mistake Bank)",
      desc: "Tự động gom mọi câu bạn từng làm sai để luyện lại đến khi đạt 100%",
      icon: "📓",
      btn: "Mở Sổ tay câu sai →",
      route: "mistakes",
      checks: [
        "Tự động lưu câu sai từ Reading, Listening, Tests",
        "Làm lại cho đến khi đúng hoàn toàn",
        "Tự động gỡ bỏ khỏi sổ tay khi bạn đã ghi nhớ chuẩn"
      ]
    },
    {
      title: "Kiểm tra xếp lớp (Placement)",
      desc: "25 câu hỏi thích ứng xác định chính xác trình độ xuất phát",
      icon: "🧭",
      btn: "Thi xếp lớp ngay →",
      route: "placement",
      checks: [
        "Đánh giá toàn diện Ngữ pháp, Từ vựng, Đọc hiểu & Nghe",
        "Câu hỏi tăng dần độ khó để phân loại chính xác",
        "Đưa ra lời khuyên lộ trình học tối ưu riêng cho bạn"
      ]
    }
  ];

  let currentTab: "A" | "B" = "A";
  const cardsWrap = h("div", { class: "claude-card-grid grid-3" });

  const renderCards = () => {
    cardsWrap.innerHTML = "";
    const list = currentTab === "A" ? tabGroupA : tabGroupB;
    list.forEach(c => {
      put(cardsWrap, h("div", { class: "claude-feature-card" },
        h("div", { class: "card-eyebrow" }, "CHUYÊN ĐỀ"),
        h("div", { class: "card-highlight-icon" }, c.icon),
        h("h3", { class: "card-title" }, c.title),
        h("p", { class: "card-desc" }, c.desc),
        h("button", { class: "btn claude-btn-full", onclick: () => go(c.route) }, c.btn),
        h("hr", { class: "claude-card-divider" }),
        h("div", { class: "card-checklist" },
          c.checks.map(chk => h("div", { class: "check-item" },
            h("span", { class: "check-icon" }, "✓"),
            h("span", { class: "check-text" }, chk)
          ))
        )
      ));
    });
  };

  const tabBtnA = h("button", {
    class: "tab-segmented-btn active",
    onclick: () => {
      currentTab = "A";
      tabBtnA.classList.add("active");
      tabBtnB.classList.remove("active");
      renderCards();
    }
  }, "🎯 600 Từ vựng TOEIC & Ngữ pháp");

  const tabBtnB = h("button", {
    class: "tab-segmented-btn",
    onclick: () => {
      currentTab = "B";
      tabBtnB.classList.add("active");
      tabBtnA.classList.remove("active");
      renderCards();
    }
  }, "🏆 12 Đề thi thử & Sổ tay lỗi sai");

  const tabSwitcher = h("div", { class: "tab-segmented-control" }, tabBtnA, tabBtnB);
  renderCards();

  const section2 = h("section", { class: "site-section content-section" },
    h("div", { class: "site-container" },
      h("div", { class: "section-header" },
        h("h2", { class: "section-serif-title" }, "Từ vựng chuyên sâu & Hệ thống Đề thi thử"),
        h("p", { class: "section-intro" },
          "Tăng tốc vốn từ vựng bằng phương pháp lặp lại ngắt quãng (Spaced Repetition) và thử thách bản thân với 12 đề thi chuẩn format quốc tế."
        ),
        tabSwitcher
      ),
      cardsWrap,
      h("p", { class: "section-footnote" },
        "Dữ liệu bài làm và sổ tay câu sai được lưu trữ an toàn trong bộ nhớ máy của bạn."
      )
    )
  );

  // ===================== 4. FAQ SECTION (SINGLE-OPEN ACCORDION) =====================
  const faqs = [
    {
      q: "EnglishPath phù hợp với ai và bắt đầu từ trình độ nào?",
      a: "EnglishPath được thiết kế hoàn chỉnh từ trình độ A2 (người mới bắt đầu hoặc mất gốc) lên B1 (giao tiếp độc lập) và B2 (sử dụng tiếng Anh tự tin trong công việc). Nếu chưa rõ trình độ hiện tại, bạn có thể bấm 'Kiểm tra xếp lớp (Placement Test)' 15 phút để hệ thống tự động xác định điểm bắt đầu phù hợp."
    },
    {
      q: "Bộ 600 từ vựng TOEIC được học theo phương pháp nào?",
      a: "Bộ 600 từ TOEIC được phân thành 12 nhóm chủ đề thương mại hay gặp nhất (Hợp đồng, Tiếp thị, Nhân sự, Tài chính...). Mỗi từ đều có phiên âm, loại từ, nghĩa tiếng Việt và ví dụ chuẩn ETS. Bạn có thể học bằng phương pháp Lật thẻ (Flip Cards) kết hợp Gõ chính tả (Spelling Quiz) theo thuật toán lặp lại ngắt quãng (Spaced Repetition)."
    },
    {
      q: "Website có hoạt động offline không và dữ liệu được lưu ở đâu?",
      a: "Có! Toàn bộ EnglishPath được thiết kế theo kiến trúc Offline-First gói gọn trong một tệp duy nhất. Không cần cài đặt server hay kết nối mạng liên tục; toàn bộ điểm số, streak học tập, danh sách từ vựng và câu sai đều được lưu trữ an toàn ngay trên trình duyệt của bạn (LocalStorage)."
    },
    {
      q: "Sổ tay lỗi sai (Mistake Bank) hoạt động như thế nào?",
      a: "Mỗi khi bạn trả lời sai một câu hỏi trong phần Đọc hiểu, Nghe hiểu, Ngữ pháp hoặc Đề thi thử, câu hỏi đó sẽ được tự động ghi nhận vào Sổ tay lỗi sai. Bạn có thể vào luyện tập riêng các câu sai này; khi bạn trả lời đúng trong chế độ ôn tập, câu hỏi sẽ tự động được gỡ bỏ khỏi sổ tay."
    },
    {
      q: "Tính năng Luyện nói (Speaking) và Nghe (Listening) hoạt động ra sao?",
      a: "EnglishPath sử dụng công nghệ Web Speech API tích hợp sẵn trong trình duyệt để phát âm chuẩn giọng bản ngữ (Text-to-Speech) và nhận diện giọng nói của bạn (Speech Recognition) theo thời gian thực. Hệ thống sẽ so khớp từng từ bạn nói và đánh dấu màu xanh (nói đúng), màu đỏ gạch chân (nói sai/thiếu) và màu vàng (nói thừa)."
    }
  ];

  const faqListEl = h("div", { class: "claude-faq-list" });

  faqs.forEach((item, index) => {
    const questionBtn = h("button", { class: "faq-question-btn", "aria-expanded": index === 0 ? "true" : "false" },
      h("span", { class: "faq-q-text" }, item.q),
      h("span", { class: "faq-icon" }, index === 0 ? "−" : "+")
    );

    const answerInner = h("div", { class: "faq-answer-inner" }, item.a);
    const answerWrap = h("div", {
      class: "faq-answer-wrap" + (index === 0 ? " open" : ""),
      style: index === 0 ? "max-height:300px" : "max-height:0"
    }, answerInner);

    const faqRow = h("div", { class: "faq-item" + (index === 0 ? " is-open" : "") }, questionBtn, answerWrap);

    questionBtn.onclick = () => {
      const isOpen = faqRow.classList.contains("is-open");
      // Close all items (only one item open at a time)
      faqListEl.querySelectorAll(".faq-item").forEach(el => {
        el.classList.remove("is-open");
        const b = el.querySelector(".faq-question-btn");
        if (b) b.setAttribute("aria-expanded", "false");
        const ic = el.querySelector(".faq-icon");
        if (ic) ic.textContent = "+";
        const w = el.querySelector(".faq-answer-wrap") as HTMLElement;
        if (w) w.style.maxHeight = "0";
      });

      if (!isOpen) {
        faqRow.classList.add("is-open");
        questionBtn.setAttribute("aria-expanded", "true");
        const ic = faqRow.querySelector(".faq-icon");
        if (ic) ic.textContent = "−";
        answerWrap.style.maxHeight = answerInner.scrollHeight + 40 + "px";
      }
    };

    put(faqListEl, faqRow);
  });

  const sectionFAQ = h("section", { class: "site-section faq-section" },
    h("div", { class: "site-container" },
      h("div", { class: "section-header center" },
        h("h2", { class: "section-serif-title" }, "Câu hỏi thường gặp (FAQ)"),
        h("p", { class: "section-intro" }, "Mọi điều bạn cần biết về phương pháp học và lộ trình của EnglishPath.")
      ),
      faqListEl
    )
  );

  // ===================== 5. LARGE FOOTER =====================
  const footerEl = h("footer", { class: "claude-footer" },
    h("div", { class: "site-container" },
      h("div", { class: "footer-top-brand" },
        h("a", { href: "#/home", class: "footer-logo-wrap" },
          h("span", { class: "logo-mark" }, "E"),
          h("span", { class: "footer-logo-title" }, "EnglishPath")
        ),
        h("p", { class: "footer-slogan" }, "Lộ trình học tiếng Anh toàn diện A2 → B1 → B2 chuẩn CEFR quốc tế.")
      ),
      h("div", { class: "footer-columns-grid" },
        h("div", { class: "footer-column" },
          h("div", { class: "footer-column-title" }, "4 KỸ NĂNG"),
          h("ul", { class: "footer-links" },
            h("li", {}, h("a", { href: "#/reading" }, "Reading (Đọc hiểu)")),
            h("li", {}, h("a", { href: "#/listening" }, "Listening (Nghe hiểu)")),
            h("li", {}, h("a", { href: "#/speaking" }, "Speaking (Luyện nói)")),
            h("li", {}, h("a", { href: "#/writing" }, "Writing (Luyện viết)")),
            h("li", {}, h("a", { href: "#/grammar" }, "Grammar (Ngữ pháp)"))
          )
        ),
        h("div", { class: "footer-column" },
          h("div", { class: "footer-column-title" }, "TỪ VỰNG & THI THỬ"),
          h("ul", { class: "footer-links" },
            h("li", {}, h("a", { href: "#/vocabulary/toeic" }, "600 Từ vựng TOEIC")),
            h("li", {}, h("a", { href: "#/vocabulary/review" }, "Flashcards SRS")),
            h("li", {}, h("a", { href: "#/vocabulary/banks/B1" }, "Ngân hàng từ CEFR")),
            h("li", {}, h("a", { href: "#/tests" }, "12 Đề thi thử (Mock)")),
            h("li", {}, h("a", { href: "#/mistakes" }, "Sổ tay câu sai"))
          )
        ),
        h("div", { class: "footer-column" },
          h("div", { class: "footer-column-title" }, "LỘ TRÌNH & HƯỚNG DẪN"),
          h("ul", { class: "footer-links" },
            h("li", {}, h("a", { href: "#/roadmap" }, "Lộ trình CEFR")),
            h("li", {}, h("a", { href: "#/placement" }, "Kiểm tra xếp lớp")),
            h("li", {}, h("a", { href: "#/dashboard" }, "Dashboard cá nhân")),
            h("li", {}, h("a", { href: "#/guides" }, "Cẩm nang chiến thuật"))
          )
        ),
        h("div", { class: "footer-column" },
          h("div", { class: "footer-column-title" }, "CẤP ĐỘ & THIẾT LẬP"),
          h("ul", { class: "footer-links" },
            h("li", {}, h("a", { href: "#/dashboard" }, "Stage 1 · A2 Nền tảng")),
            h("li", {}, h("a", { href: "#/dashboard" }, "Stage 2 · B1 Độc lập")),
            h("li", {}, h("a", { href: "#/dashboard" }, "Stage 3 · B2 Thành thạo")),
            h("li", {}, h("a", { href: "#/guides" }, "Chiến thuật làm bài thi"))
          )
        )
      ),
      h("div", { class: "footer-bottom-bar" },
        h("div", { class: "footer-copyright" }, "© 2026 EnglishPath. Tự học tiếng Anh toàn diện A2 → B1 → B2. All rights reserved."),
        h("div", { class: "footer-bottom-controls" },
          h("span", { class: "footer-status-tag" }, "🟢 Offline 100% (Local Storage)"),
          h("span", { class: "footer-lang-tag" }, "🇻🇳 Tiếng Việt")
        )
      )
    )
  );

  put(view, heroSection, section1, section2, sectionFAQ, footerEl);
});

