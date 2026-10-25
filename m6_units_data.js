// =========================================================================
// Get INVOLVED! M.6 Curriculum Data (Units 5, 6, 7, 8)
// บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)
// ถอดบทเรียนและข้อสอบตรงจากเอกสารใบงานสรุปคลิปวิดีโอ ม.6 ภาคเรียนที่ 2
// กฎเหล็กตามสถาปัตยกรรมระบบ:
// 1. โจทย์ ตัวเลือก และคำศัพท์เป็นภาษาอังกฤษล้วน 100% ปราศจากคำแปลภาษาไทยในโจทย์/ตัวเลือก
// 2. คำอธิบายเฉลยภาษาไทย (Tutor Insight Coaching) ละเอียด ลึกซึ้ง และถูกต้องตามหลักวิชาการ
// =========================================================================

const M6_UNITS_DATA = {
  "unit5": {
    "id": "unit5",
    "name": "Unit 5: Communicate",
    "thaiName": "บทที่ 5: การสื่อสาร ไวยากรณ์ Reported Speech และ Prefixes",
    "description": "เรียนรู้เทคนิคการนำเสนอและการสื่อสาร, การเติม Prefix (dis-, im-, in-, ir-, un-, re-, mis-) และการเปลี่ยนประโยค Reported Speech & Reporting Verbs",
    "sections": [
      {
        "title": "Part 1: Video Comprehension & Key Expressions",
        "description": "Circle the correct answer based on the Unit 5 videos. (เลือกคำตอบที่ถูกต้องจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u5_p1_1",
            "prompt": "1. According to the Vocabulary Video on presentation techniques, how should you speak?",
            "choices": [
              "A. Whisper under your breath.",
              "B. Speak loudly and proudly.",
              "C. Shout at the top of your voice."
            ],
            "answer": "B. Speak loudly and proudly.",
            "explanation": "ตอบ B (Speak loudly and proudly.): ในคลิป Vocabulary Video ผู้พูดระบุว่าอย่ากระซิบ (whisper) และไม่ต้องถึงขั้นตะโกน (shout) แต่ให้พูดด้วยน้ำเสียงที่ดัง ชัดเจน และมั่นใจ (loudly and proudly)"
          },
          {
            "id": "u5_p1_2",
            "prompt": "2. In the Real World Speaking Video, why did Allyson advise Liam to go to the dance studio to talk to Jess?",
            "choices": [
              "A. Jess always answers her phone at dance class.",
              "B. Sending a message was too difficult.",
              "C. Her phone is usually on silent, and going in person ensures they won't miss each other."
            ],
            "answer": "C. Her phone is usually on silent, and going in person ensures they won't miss each other.",
            "explanation": "ตอบ C (Her phone is usually on silent...): ในคลิป Real World Speaking Allyson เสนอให้ Liam ไปพบ Jess ที่สตูดิโอเต้นโดยตรง เพราะ Jess ชอบเปิดโทรศัพท์โหมดเงียบ และการไปเจอตัวจริงจะทำให้ไม่คลาดกัน"
          },
          {
            "id": "u5_p1_3",
            "prompt": "3. In the Project Video, what main reason did Jake and Keri give for choosing Rome for their travel scholarship?",
            "choices": [
              "A. It has great food and beaches.",
              "B. It has world-famous art galleries, art schools, and historical architecture.",
              "C. It is the cheapest city to visit in Europe."
            ],
            "answer": "B. It has world-famous art galleries, art schools, and historical architecture.",
            "explanation": "ตอบ B (It has world-famous art galleries...): ในคลิป Project Video Jake และ Keri ระบุว่ากรุงโรมมีหอศิลป์ที่ดีที่สุดในโลก มีโรงเรียนสอนศิลปะ และมีทัวร์วาดภาพสถาปัตยกรรมสำคัญ ซึ่งตรงกับเป้าหมายการเรียนศิลปะของพวกเขา"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary & Prefixes",
        "description": "Complete the sentences with the correct Prefix (dis-, im-, in-, ir-, un-, re-, mis-). (เติม Prefix ลงในช่องว่างหน้าคำศัพท์)",
        "type": "fill_in",
        "wordBank": ["dis-", "im-", "in-", "ir-", "un-", "re-", "mis-"],
        "questions": [
          {
            "id": "u5_p2_1",
            "prompt": "1. It is very ___________polite to interrupt someone while they are speaking.",
            "answer": "im-",
            "acceptableAnswers": ["im-", "im", "impolite"],
            "hint": "Opposite of polite / คำขึ้นต้นด้วยตัว p มักใช้ prefix ปฏิเสธ im-",
            "explanation": "เฉลย: im- (impolite) | คำอธิบาย: คำว่า polite (สุภาพ) เมื่อเติม Prefix ปฏิเสธข้างหน้าคำที่ขึ้นต้นด้วยตัว p มักใช้ im- กลายเป็น impolite (ไม่สุภาพ)"
          },
          {
            "id": "u5_p2_2",
            "prompt": "2. Please ___________read the instructions if you did not understand them the first time.",
            "answer": "re-",
            "acceptableAnswers": ["re-", "re", "reread"],
            "hint": "Prefix meaning 'again' / ทำซ้ำ",
            "explanation": "เฉลย: re- (reread) | คำอธิบาย: Prefix re- หมายถึง \"ทำซ้ำ\" (again) reread หมายถึง อ่านซ้ำอีกรอบ"
          },
          {
            "id": "u5_p2_3",
            "prompt": "3. Don't be so ___________responsible! You should always clean up your own mess.",
            "answer": "ir-",
            "acceptableAnswers": ["ir-", "ir", "irresponsible"],
            "hint": "Opposite of responsible / คำขึ้นต้นด้วยตัว r มักใช้ ir-",
            "explanation": "เฉลย: ir- (irresponsible) | คำอธิบาย: คำว่า responsible ขึ้นต้นด้วยตัว r จะใช้ Prefix ปฏิเสธ ir- กลายเป็น irresponsible (ไม่มีความรับผิดชอบ)"
          },
          {
            "id": "u5_p2_4",
            "prompt": "4. The interpreter made a mistake because he ___________understood the speaker's joke.",
            "answer": "mis-",
            "acceptableAnswers": ["mis-", "mis", "misunderstood"],
            "hint": "Prefix meaning wrongly / ผิดพลาด เข้าใจผิด",
            "explanation": "เฉลย: mis- (misunderstood) | คำอธิบาย: Prefix mis- หมายถึง \"ผิดพลาด/ไม่ถูกต้อง\" misunderstood หมายถึง เข้าใจผิด"
          },
          {
            "id": "u5_p2_5",
            "prompt": "5. His desk is completely ___________organized; he can never find his papers.",
            "answer": "dis-",
            "acceptableAnswers": ["dis-", "dis", "disorganized"],
            "hint": "Opposite of organized / ไม่เป็นระเบียบเรียบร้อย",
            "explanation": "เฉลย: dis- (disorganized) | คำอธิบาย: Prefix dis- ใช้บอกความหมายตรงกันข้าม disorganized หมายถึง ไม่เป็นระเบียบเรียบร้อย"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Reported Speech & Reporting Verbs",
        "description": "Rewrite the direct speech sentences into Reported Speech. (เลือกประโยค Reported Speech ที่ถูกต้องตามหลักไวยากรณ์)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u5_p3_1",
            "prompt": "1. \"I am preparing my presentation slides right now,\" said Tom. → Tom said that ________________________.",
            "choices": [
              "he was preparing his presentation slides then",
              "he is preparing his presentation slides right now",
              "I was preparing my presentation slides then",
              "he had prepared his presentation slides at the time"
            ],
            "answer": "he was preparing his presentation slides then",
            "explanation": "ตอบ he was preparing his presentation slides then: เปลี่ยนสรรพนาม I → he, ถอย Tense จาก Present Progressive (am preparing) → Past Progressive (was preparing), และเปลี่ยนคำบอกเวลา right now → then หรือ at the time"
          },
          {
            "id": "u5_p3_2",
            "prompt": "2. \"Did you check the train schedule yesterday?\" Sarah asked me. → Sarah asked me ________________________.",
            "choices": [
              "if I had checked the train schedule the day before",
              "did I check the train schedule yesterday",
              "whether I check the train schedule yesterday",
              "if she had checked the train schedule the previous day"
            ],
            "answer": "if I had checked the train schedule the day before",
            "explanation": "ตอบ if I had checked the train schedule the day before: เป็นประโยคคำถาม Yes/No Question ต้องใช้ if หรือ whether เชื่อม ถอย Tense จาก Simple Past (Did you check) → Past Perfect (had checked), เปลี่ยนสรรพนาม you → I, และเปลี่ยน yesterday → the day before หรือ the previous day"
          },
          {
            "id": "u5_p3_3",
            "prompt": "3. \"Please do not whisper during the test,\" the teacher told the students. → The teacher told the students ________________________.",
            "choices": [
              "not to whisper during the test",
              "to not whisper during the test please",
              "do not whisper during the test",
              "whispering not during the test"
            ],
            "answer": "not to whisper during the test",
            "explanation": "ตอบ not to whisper during the test: เป็นประโยคคำสั่ง/ขอร้องปฏิเสธ ใช้โครงสร้าง tell + object + not to + V.1 โดยตัดคำว่า Please ออก"
          },
          {
            "id": "u5_p3_4",
            "prompt": "4. \"I will help you with your art project tomorrow,\" promised Keri. → Keri promised ________________________.",
            "choices": [
              "to help me with my art project the next day",
              "that she will help me with my art project tomorrow",
              "helping me with my art project the next day",
              "to help you with your art project tomorrow"
            ],
            "answer": "to help me with my art project the next day",
            "explanation": "ตอบ to help me with my art project the next day: โครงสร้างกริยา promise สามารถใช้ promise + to + V.1 ได้ (หรือ promise that she would help me...) และเปลี่ยนคำบอกเวลา tomorrow → the next day หรือ the following day และเปลี่ยน your → my"
          },
          {
            "id": "u5_p3_5",
            "prompt": "5. \"I didn't break the glass,\" insisted Mark. → Mark insisted on ________________________.",
            "choices": [
              "not breaking the glass",
              "to not break the glass",
              "not to break the glass",
              "didn't break the glass"
            ],
            "answer": "not breaking the glass",
            "explanation": "ตอบ not breaking the glass: กริยา insist ใช้โครงสร้าง insist on + V.-ing (หากเป็นปฏิเสธใส่ not หน้า V.-ing กลายเป็น insist on not breaking...) หรือใช้ insist that + clause ถอย Tense เป็น Past Perfect (that he hadn't broken the glass)"
          }
        ]
      }
    ]
  },
  "unit6": {
    "id": "unit6",
    "name": "Unit 6: Challenges",
    "thaiName": "บทที่ 6: ความท้าทาย ไวยากรณ์ Conditionals และ Wish / If only",
    "description": "เรียนรู้การก้าวข้ามอุปสรรคและออกจาก Comfort Zone, คำศัพท์การแข่งขัน, ไวยากรณ์ประโยคเงื่อนไข Conditionals และการบอกความปรารถนา/ความเสียดาย (Wish / If only)",
    "sections": [
      {
        "title": "Part 1: Video Comprehension",
        "description": "Circle the correct answer based on the Unit 6 videos. (เลือกคำตอบที่ถูกต้องจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u6_p1_1",
            "prompt": "1. In the Vocabulary Video, what does Ben say about giving up on a dream?",
            "choices": [
              "A. It means you are a failure.",
              "B. It is okay because learning what you don't want to do is also important.",
              "C. You should never give up under any circumstances."
            ],
            "answer": "B. It is okay because learning what you don't want to do is also important.",
            "explanation": "ตอบ B: ในคลิป Ben ระบุว่า การเลิกทำตามความฝันเมื่อรู้ว่าไม่ใช่ตัวเราเป็นเรื่องที่รับได้ เพราะการเรียนรู้ว่าเราไม่ต้องการทำอะไรก็มีความสำคัญไม่แพ้การรู้ว่าเราชอบอะไร"
          },
          {
            "id": "u6_p1_2",
            "prompt": "2. In the Real World Speaking Video, what is the main rule of the \"Bucket Challenge\"?",
            "choices": [
              "A. Fill the buckets as fast as you can by running.",
              "B. Move water from one bucket to another without moving either bucket.",
              "C. Drink all the water in five minutes."
            ],
            "answer": "B. Move water from one bucket to another without moving either bucket.",
            "explanation": "ตอบ B: ในคลิป Real World Speaking โจทย์ของ Bucket Challenge คือ ต้องย้ายน้ำจากถังหนึ่งไปยังอีกถังหนึ่ง โดยห้ามเคลื่อนย้ายถังทั้งสองใบ"
          },
          {
            "id": "u6_p1_3",
            "prompt": "3. In the Project Video, what is unique about the contestants in the TV show \"Rap Stars\"?",
            "choices": [
              "A. They must perform original raps that they write themselves.",
              "B. They must be under 10 years old.",
              "C. They only lip-sync to famous rap songs."
            ],
            "answer": "A. They must perform original raps that they write themselves.",
            "explanation": "ตอบ A: รายการ \"Rap Stars\" กำหนดให้ผู้เข้าแข่งขันต้องแต่งเพลงแร็ปออริจินัลและนำมาแสดงด้วยตนเองต่อหน้ากรรมการ"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary & Word Families",
        "description": "Complete the sentences using the words in the box. (เติมคำศัพท์เกี่ยวกับความท้าทายลงในช่องว่าง)",
        "type": "fill_in",
        "wordBank": ["contestant", "audition", "comfort zone", "rival", "overcome"],
        "questions": [
          {
            "id": "u6_p2_1",
            "prompt": "1. Stepping out of your ________________________ is necessary if you want to experience new things.",
            "answer": "comfort zone",
            "acceptableAnswers": ["comfort zone"],
            "hint": "Familiar area / ก้าวออกจากพื้นที่คุ้นเคย",
            "explanation": "เฉลย: comfort zone | คำอธิบาย: สำนวน step out of your comfort zone หมายถึง การก้าวออกจากพื้นที่คุ้นเคยเพื่อเปิดรับประสบการณ์ใหม่"
          },
          {
            "id": "u6_p2_2",
            "prompt": "2. She managed to ________________________ her fear of public speaking and delivered a great presentation.",
            "answer": "overcome",
            "acceptableAnswers": ["overcome"],
            "hint": "Succeed in dealing with / ก้าวข้าม เอาชนะอุปสรรค",
            "explanation": "เฉลย: overcome | คำอธิบาย: overcome แปลว่า ก้าวข้าม/เอาชนะ (อุปสรรคหรือความกลัว)"
          },
          {
            "id": "u6_p2_3",
            "prompt": "3. Every ________________________ in the talent show has to perform in front of four judges.",
            "answer": "contestant",
            "acceptableAnswers": ["contestant"],
            "hint": "A person who takes part in a competition / ผู้เข้าแข่งขัน",
            "explanation": "เฉลย: contestant | คำอธิบาย: contestant หมายถึง ผู้เข้าแข่งขันในรายการหรือการประกวด"
          },
          {
            "id": "u6_p2_4",
            "prompt": "4. Mark was very nervous before his ________________________, but he sang beautifully.",
            "answer": "audition",
            "acceptableAnswers": ["audition"],
            "hint": "Trial performance / การทดสอบความสามารถ",
            "explanation": "เฉลย: audition | คำอธิบาย: audition หมายถึง การทดสอบความสามารถ/การออดิชัน ก่อนเข้าร่วมการแสดงหรือรายการ"
          },
          {
            "id": "u6_p2_5",
            "prompt": "5. Nadal played against his greatest ________________________ in the final match of the tournament.",
            "answer": "rival",
            "acceptableAnswers": ["rival"],
            "hint": "Competitor / คู่แข่ง คู่ปรับ",
            "explanation": "เฉลย: rival | คำอธิบาย: rival หมายถึง คู่แข่ง/คู่ปรับ ในการแข่งขัน"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Conditionals & Wish / If only",
        "description": "Complete the sentences with the correct form of the verbs in parentheses. (เลือกรูปกริยาที่ถูกต้องตามโครงสร้างประโยคเงื่อนไข)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u6_p3_1",
            "prompt": "1. If you ________________________ (try) new activities, you will discover what you really enjoy.",
            "choices": [
              "try",
              "tried",
              "will try",
              "had tried"
            ],
            "answer": "try",
            "explanation": "ตอบ try: เป็น First Conditional (If + Present Simple, will + V.1) ประโยคหลัง If จึงใช้ Present Simple (try)"
          },
          {
            "id": "u6_p3_2",
            "prompt": "2. We could win the competition provided that everyone ________________________ (work) together as a team.",
            "choices": [
              "works",
              "worked",
              "will work",
              "working"
            ],
            "answer": "works",
            "explanation": "ตอบ works: provided that ใช้แทน if ในประโยคเงื่อนไขแบบ First Conditional ตามด้วย Present Simple (works สำหรับประธาน everyone ซึ่งเป็นเอกพจน์)"
          },
          {
            "id": "u6_p3_3",
            "prompt": "3. If I had more time, I ________________________ (take up) a new sport like rock climbing.",
            "choices": [
              "would take up",
              "will take up",
              "took up",
              "would have taken up"
            ],
            "answer": "would take up",
            "explanation": "ตอบ would take up: เป็น Second Conditional สมมุติในปัจจุบัน (If + Past Simple, would + V.1) โครงสร้างประโยคผลลัพธ์จึงเป็น would take up"
          },
          {
            "id": "u6_p3_4",
            "prompt": "4. If they had rehearsed more, they ________________________ (not / make) so many mistakes during the performance.",
            "choices": [
              "wouldn't have made",
              "wouldn't make",
              "didn't make",
              "won't make"
            ],
            "answer": "wouldn't have made",
            "explanation": "ตอบ wouldn't have made: เป็น Third Conditional สมมุติในอดีต (If + Past Perfect, would have + V.3) โครงสร้างประโยคผลลัพธ์จึงเป็น wouldn't have made (หรือ would not have made)"
          },
          {
            "id": "u6_p3_5",
            "prompt": "5. I wish I ________________________ (have) enough money to buy that new guitar right now!",
            "choices": [
              "had",
              "have",
              "would have",
              "had had"
            ],
            "answer": "had",
            "explanation": "ตอบ had: แสดงความปรารถนาในปัจจุบันที่ไม่เป็นจริง ใช้โครงสร้าง I wish + Past Simple (had)"
          },
          {
            "id": "u6_p3_6",
            "prompt": "6. If only I ________________________ (not / miss) the train yesterday morning.",
            "choices": [
              "hadn't missed",
              "didn't miss",
              "wouldn't miss",
              "haven't missed"
            ],
            "answer": "hadn't missed",
            "explanation": "ตอบ hadn't missed: แสดงความเสียดายเกี่ยวกับเหตุการณ์ในอดีต (yesterday morning) ใช้โครงสร้าง If only + Past Perfect (hadn't missed หรือ had not missed)"
          }
        ]
      }
    ]
  },
  "unit7": {
    "id": "unit7",
    "name": "Unit 7: Going Unplugged",
    "thaiName": "บทที่ 7: การตัดขาดจากหน้าจอ ไวยากรณ์ Passive Voice และ Have/Get Something Done",
    "description": "เรียนรู้การใช้ชีวิตโดยตัดขาดจากอุปกรณ์ดิจิทัล (Digital Detox), สำนวนที่ใช้ make และ do, ไวยากรณ์ Passive Voice และ Causative Passive (have/get something done)",
    "sections": [
      {
        "title": "Part 1: Video Comprehension",
        "description": "Circle the correct answer based on the Unit 7 videos. (เลือกคำตอบที่ถูกต้องจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u7_p1_1",
            "prompt": "1. In the Vocabulary Video, why did Mon have to close her browser window while searching for recipes?",
            "choices": [
              "A. Her phone ran out of battery.",
              "B. She clicked a link to YouTube, which is a form of social media.",
              "C. The internet connection was lost."
            ],
            "answer": "B. She clicked a link to YouTube, which is a form of social media.",
            "explanation": "ตอบ B: ในคลิป Mon เล่าว่า เธอค้นหาสูตรอาหารใน Google แล้วคลิกลิงก์เข้าไปยัง YouTube แต่ตระหนักได้ว่า YouTube คือโซเชียลมีเดีย จึงต้องรีบปิดหน้าต่างเพราะอยู่ในช่วงคำท้าห้ามใช้โซเชียลมีเดีย"
          },
          {
            "id": "u7_p1_2",
            "prompt": "2. In the Real World Speaking Video, where is the baseball field located according to the directions?",
            "choices": [
              "A. Next to the traffic lights.",
              "B. Inside the farmer's market.",
              "C. On the left, after cutting through the market and walking around the park."
            ],
            "answer": "C. On the left, after cutting through the market and walking around the park.",
            "explanation": "ตอบ C: ในคลิปผู้บอกทางระบุขั้นตอนว่า ให้เลี้ยวซ้ายตรงไฟจราจร เดินไปจนถึงตลาดเกษตรกร แล้วเดินตัดผ่านตลาด เดินรอบสวนสาธารณะ และสนามเบสบอลจะอยู่ทางซ้ายมือ"
          },
          {
            "id": "u7_p1_3",
            "prompt": "3. In the Project Video, what is the main purpose of the National Unplugging Day proposal?",
            "choices": [
              "A. To sell new smartphones and laptops to students.",
              "B. To encourage people to disconnect from screens and get physically and mentally active.",
              "C. To prepare students for an online video game tournament."
            ],
            "answer": "B. To encourage people to disconnect from screens and get physically and mentally active.",
            "explanation": "ตอบ B: โครงงาน National Unplugging Day มีเป้าหมายเพื่อกระตุ้นให้ผู้คนวางหน้าจออุปกรณ์อิเล็กทรอนิกส์แล้วหันมาร่วมกิจกรรมเพื่อฟื้นฟูสุขภาพกายและสุขภาพจิตร่วมกัน"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary & Expressions with 'make' and 'do'",
        "description": "Complete the sentences with the correct words or phrases from the box. (เติมคำหรือสำนวนที่ถูกต้องลงในช่องว่าง)",
        "type": "fill_in",
        "wordBank": ["sign up for", "recharge your batteries", "do without", "make sure", "put your feet up"],
        "questions": [
          {
            "id": "u7_p2_1",
            "prompt": "1. After working hard all week, you should just ________________________ and relax.",
            "answer": "put your feet up",
            "acceptableAnswers": ["put your feet up"],
            "hint": "Sit back and rest / นั่งยกขาพักผ่อน เอนกาย",
            "explanation": "เฉลย: put your feet up | คำอธิบาย: สำนวน put your feet up แปลว่า นั่งยกขาขึ้นพักผ่อน/เอนกายพักผ่อนหลังจากการทำงานหนัก"
          },
          {
            "id": "u7_p2_2",
            "prompt": "2. I cannot ________________________ my smartphone because I need it for my daily schedule.",
            "answer": "do without",
            "acceptableAnswers": ["do without"],
            "hint": "Manage without / ขาดไม่ได้ อยู่โดยไม่มีไม่ได้",
            "explanation": "เฉลย: do without | คำอธิบาย: สำนวน do without แปลว่า อยู่ได้โดยไม่มี หรือขาด...ไม่ได้ (cannot do without)"
          },
          {
            "id": "u7_p2_3",
            "prompt": "3. Before submitting your project, ________________________ that there are no spelling mistakes.",
            "answer": "make sure",
            "acceptableAnswers": ["make sure"],
            "hint": "Ensure / ตรวจสอบให้แน่ใจ",
            "explanation": "เฉลย: make sure | คำอธิบาย: สำนวน make sure แปลว่า ตรวจสอบให้แน่ใจ/ทำให้แน่นอน"
          },
          {
            "id": "u7_p2_4",
            "prompt": "4. Many students decided to ________________________ the outdoor obstacle course challenge.",
            "answer": "sign up for",
            "acceptableAnswers": ["sign up for"],
            "hint": "Register or join / ลงชื่อสมัครเข้าร่วม",
            "explanation": "เฉลย: sign up for | คำอธิบาย: สำนวน sign up for แปลว่า ลงชื่อสมัครเข้าร่วมกิจกรรม"
          },
          {
            "id": "u7_p2_5",
            "prompt": "5. Going on a weekend hiking trip is a great way to ________________________ before the new semester starts.",
            "answer": "recharge your batteries",
            "acceptableAnswers": ["recharge your batteries"],
            "hint": "Regain energy / ชาร์จพลังกายและพลังใจ",
            "explanation": "เฉลย: recharge your batteries | คำอธิบาย: สำนวน recharge your batteries เป็นการเปรียบเปรยถึงการพักผ่อนเพื่อชาร์จพลังกายและพลังใจ"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Passive Voice & Have/Get Something Done",
        "description": "Rewrite the sentences using the Passive Voice or Causative Passive (have/get something done). (เลือกประโยคตามโครงสร้าง Passive Voice ที่ถูกต้อง)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u7_p3_1",
            "prompt": "1. Someone is repairing my laptop at the service center right now. (Use Causative Passive: I am having...) → I ________________________.",
            "choices": [
              "am having my laptop repaired at the service center right now",
              "am repairing my laptop at the service center right now",
              "have repaired my laptop at the service center right now",
              "had my laptop repair at the service center right now"
            ],
            "answer": "am having my laptop repaired at the service center right now",
            "explanation": "ตอบ am having my laptop repaired at the service center right now: ใช้โครงสร้าง Causative Passive ในรูป Present Continuous (Subject + am/is/are + having + object + V.3) เพื่อแสดงว่ากำลังจ้างหรือให้ช่างซ่อมคอมพิวเตอร์ให้"
          },
          {
            "id": "u7_p3_2",
            "prompt": "2. People should turn off mobile phones during the exam. (Use Passive Voice with Modals) → Mobile phones ________________________.",
            "choices": [
              "should be turned off during the exam",
              "should turn off during the exam",
              "should been turned off during the exam",
              "should be turning off during the exam"
            ],
            "answer": "should be turned off during the exam",
            "explanation": "ตอบ should be turned off during the exam: ประโยค Passive แบบ Modal Verb ใช้โครงสร้าง Modal (should) + be + V.3 (turned off)"
          },
          {
            "id": "u7_p3_3",
            "prompt": "3. A famous architect designed the obstacle course for the school. (Use Passive Voice) → The obstacle course ________________________.",
            "choices": [
              "was designed by a famous architect for the school",
              "is designed by a famous architect for the school",
              "has designed by a famous architect for the school",
              "was designing by a famous architect for the school"
            ],
            "answer": "was designed by a famous architect for the school",
            "explanation": "ตอบ was designed by a famous architect for the school: เปลี่ยนประโยค Past Simple เป็น Passive Voice โดยใช้ was + V.3 (designed)"
          },
          {
            "id": "u7_p3_4",
            "prompt": "4. A hairdresser cut Sarah's hair yesterday. (Use Causative Passive: Sarah had...) → Sarah ________________________.",
            "choices": [
              "had her hair cut yesterday",
              "cut her hair yesterday",
              "has her hair cut yesterday",
              "had been cut her hair yesterday"
            ],
            "answer": "had her hair cut yesterday",
            "explanation": "ตอบ had her hair cut yesterday: ใช้โครงสร้าง Causative Passive ในรูป Past Simple (Subject + had + object + V.3) เพื่อบอกว่าซาร่าไปตัดผมมาเมื่อวานนี้ (กริยา cut ช่อง 3 คือ cut)"
          },
          {
            "id": "u7_p3_5",
            "prompt": "5. They will build a new sports center near the park next month. (Use Passive Voice) → A new sports center ________________________.",
            "choices": [
              "will be built near the park next month",
              "will build near the park next month",
              "will be building near the park next month",
              "is built near the park next month"
            ],
            "answer": "will be built near the park next month",
            "explanation": "ตอบ will be built near the park next month: เปลี่ยนประโยค Future Simple (will build) เป็น Passive Voice โดยใช้ will be + V.3 (built)"
          }
        ]
      }
    ]
  },
  "unit8": {
    "id": "unit8",
    "name": "Unit 8: Make a Difference",
    "thaiName": "บทที่ 8: สร้างความเปลี่ยนแปลง ไวยากรณ์ Verb Patterns และ Used to / Be used to",
    "description": "เรียนรู้การสร้างประโยชน์เพื่อสังคม (Plogging, Charity Fair, Emoji for the Planet), คำกริยาวลี Phrasal Verbs, ไวยากรณ์ Verb Patterns และการใช้ Used to / Be used to / Get used to",
    "sections": [
      {
        "title": "Part 1: Video Comprehension",
        "description": "Circle the correct answer based on the Unit 8 videos. (เลือกคำตอบที่ถูกต้องจากเนื้อหาวิดีโอ)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u8_p1_1",
            "prompt": "1. According to the Vocabulary Video, where does the word \"Plogging\" come from?",
            "choices": [
              "A. Portuguese words for \"park\" and \"jogging\".",
              "B. Swedish words \"plocka\" (pick up) and \"jogging\".",
              "C. Plastic packaging and logging."
            ],
            "answer": "B. Swedish words \"plocka\" (pick up) and \"jogging\".",
            "explanation": "ตอบ B: ในคลิประบุชัดเจนว่า Plogging มาจากภาษาสวีเดน โดยผสมคำว่า 'plocka' (เก็บ/หยิบ) กับ 'jogging' (การวิ่ง)"
          },
          {
            "id": "u8_p1_2",
            "prompt": "2. In the Real World Speaking Video, what event layout did Lucy suggest to raise money for multiple charities?",
            "choices": [
              "A. A sponsored marathon.",
              "B. A charity fair with different stalls and activities.",
              "C. A single online video game competition."
            ],
            "answer": "B. A charity fair with different stalls and activities.",
            "explanation": "ตอบ B: Lucy พูดแทรกอย่างสุภาพเสนอให้จัดงานเป็น Charity fair ซึ่งมีหลายซุ้มกิจกรรม เพื่อเปิดโอกาสให้หาเงินมอบแก่หลายๆ องค์กรการกุศลพร้อมกัน"
          },
          {
            "id": "u8_p1_3",
            "prompt": "3. In the Project Video, what is the design of Jake and Keri’s \"Emoji for the Planet\"?",
            "choices": [
              "A. A recycling bin with a smiley face.",
              "B. Green leaves and a branch forming a checkmark.",
              "C. A globe wearing sunglasses."
            ],
            "answer": "B. Green leaves and a branch forming a checkmark.",
            "explanation": "ตอบ B: ในคลิป Project Video การออกแบบอิโมจิใช้สัญลักษณ์กิ่งไม้และใบไม้สีเขียวที่ประกอบกันเป็นรูปเครื่องหมายถูก (checkmark)"
          }
        ]
      },
      {
        "title": "Part 2: Vocabulary & Phrasal Verbs",
        "description": "Complete the sentences using the phrasal verbs in the box. (เติมคำกริยาวลีลงในช่องว่าง)",
        "type": "fill_in",
        "wordBank": ["set up", "catch on", "come up with", "stick to", "get used to"],
        "questions": [
          {
            "id": "u8_p2_1",
            "prompt": "1. It took us a long time to ________________________ a unique idea for our environmental project.",
            "answer": "come up with",
            "acceptableAnswers": ["come up with"],
            "hint": "Think of an idea / คิดค้น คิดไอเดียออก",
            "explanation": "เฉลย: come up with | คำอธิบาย: come up with แปลว่า คิดค้น/คิดไอเดียออก"
          },
          {
            "id": "u8_p2_2",
            "prompt": "2. Dermot and Michelle decided to ________________________ an organization called Plogolution in 2018.",
            "answer": "set up",
            "acceptableAnswers": ["set up"],
            "hint": "Establish or create / ก่อตั้ง จัดตั้ง",
            "explanation": "เฉลย: set up | คำอธิบาย: set up แปลว่า ก่อตั้ง/จัดตั้ง (องค์กรหรือชมรม)"
          },
          {
            "id": "u8_p2_3",
            "prompt": "3. Social impact games will surely ________________________ if more teenager developers create them.",
            "answer": "catch on",
            "acceptableAnswers": ["catch on"],
            "hint": "Become popular / ได้รับความนิยม เป็นที่นิยม",
            "explanation": "เฉลย: catch on | คำอธิบาย: catch on แปลว่า กลายเป็นที่นิยม/ได้รับความนิยม"
          },
          {
            "id": "u8_p2_4",
            "prompt": "4. If you want to achieve your goals, you must ________________________ your daily schedule.",
            "answer": "stick to",
            "acceptableAnswers": ["stick to"],
            "hint": "Follow consistently / ยึดมั่น ปฏิบัติตามแผน",
            "explanation": "เฉลย: stick to | คำอธิบาย: stick to แปลว่า ยึดมั่น/ปฏิบัติตามแผนการอย่างต่อเนื่อง"
          },
          {
            "id": "u8_p2_5",
            "prompt": "5. When moving to a new country, it takes time to ________________________ the cold weather.",
            "answer": "get used to",
            "acceptableAnswers": ["get used to"],
            "hint": "Become accustomed to / ปรับตัวให้คุ้นเคยกับสิ่งใหม่",
            "explanation": "เฉลย: get used to | คำอธิบาย: get used to แปลว่า เริ่มปรับตัวให้คุ้นเคยกับสิ่งใหม่"
          }
        ]
      },
      {
        "title": "Part 3: Key Grammar - Verb Patterns & Used to / Be used to / Get used to",
        "description": "Choose the correct form of the verbs in parentheses. (เลือกรูปกริยาที่ถูกต้องตามโครงสร้าง Verb Patterns และ Used to)",
        "type": "multiple_choice",
        "questions": [
          {
            "id": "u8_p3_1",
            "prompt": "1. The organization encourages young people ________________________ (take) active roles in protecting nature.",
            "choices": [
              "to take",
              "taking",
              "take",
              "took"
            ],
            "answer": "to take",
            "explanation": "ตอบ to take: กริยา encourage ใช้ในรูปแบบ encourage + object + to + V.1"
          },
          {
            "id": "u8_p3_2",
            "prompt": "2. I stopped ________________________ (buy) single-use plastic bottles two months ago; now I carry a tumbler.",
            "choices": [
              "buying",
              "to buy",
              "buy",
              "bought"
            ],
            "answer": "buying",
            "explanation": "ตอบ buying: stop + V.-ing หมายถึง เลิกทำสิ่งนั้นแบบถาวร/เลิกพฤติกรรมนั้น (ตรงข้ามกับ stop to + V.1 ซึ่งหมายถึง หยุดพักเพื่อจะทำสิ่งนั้น)"
          },
          {
            "id": "u8_p3_3",
            "prompt": "3. We regret ________________________ (inform) you that the outdoor event has been canceled due to heavy rain.",
            "choices": [
              "to inform",
              "informing",
              "inform",
              "informed"
            ],
            "answer": "to inform",
            "explanation": "ตอบ to inform: regret + to + V.1 ใช้ในการบอกข่าวร้ายอย่างเป็นทางการ (เช่น regret to inform / regret to say)"
          },
          {
            "id": "u8_p3_4",
            "prompt": "4. Lual Mayen grew up in a refugee camp, so he used to ________________________ (walk) three hours just to charge his laptop.",
            "choices": [
              "walk",
              "walking",
              "to walk",
              "walked"
            ],
            "answer": "walk",
            "explanation": "ตอบ walk: used to + V.1 หมายถึง เคยทำสิ่งนั้นในอดีต (ปัจจุบันไม่ได้ทำแล้ว)"
          },
          {
            "id": "u8_p3_5",
            "prompt": "5. Most teenagers are used to ________________________ (play) video games on weekends.",
            "choices": [
              "playing",
              "play",
              "to play",
              "played"
            ],
            "answer": "playing",
            "explanation": "ตอบ playing: be used to + V.-ing หมายถึง ชิน/คุ้นเคยกับกิจกรรมนั้นเป็นปกติตามความเคยชินแล้ว"
          }
        ]
      }
    ]
  }
};
