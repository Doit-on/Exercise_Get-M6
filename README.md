# Get INVOLVED! ม.6 - TWP Online English Exercise & E-Certificate System
**ระบบแบบฝึกหัดภาษาอังกฤษออนไลน์และออกเกียรติบัตรอิเล็กทรอนิกส์ มัธยมศึกษาปีที่ 6 (ภาคเรียนที่ 2)**
**บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)**

---

## 🌟 จุดเด่นและนวัตกรรมระบบ (System Highlights)

ระบบแบบฝึกหัดออนไลน์และประเมินผลภาษาอังกฤษ ม.6 ออกแบบและพัฒนาขึ้นบนมาตรฐานเดียวกับสถาปัตยกรรมระบบ ม.5 โดยผสานเทคโนโลยี Web Standards สมัยใหม่และ Google Workspace Cloud Database เข้าด้วยกัน:

1. **Light & Clean Minimalist UI (Apple-inspired)**:
   - ส่วนหัว Banner ปรับโทนสีสว่าง สะอาดตา นุ่มนวลต่อสายตา (Soft Sky & Clean White Gradient)
   - ฟอนต์มาตรฐานสากล: *Plus Jakarta Sans*, *Inter* และ *Prompt (สำหรับภาษาไทย)*
   - Responsive Design เต็มรูปแบบ รองรับทั้ง Desktop, แท็บเล็ต และสมาร์ตโฟน
2. **100% Pure English Prompts & Interactive Choices**:
   - ข้อสอบและตัวเลือกทั้งหมดเป็นภาษาอังกฤษแท้ 100% ปราศจากภาษาไทยปน เพื่อฝึกทักษะระดับมัธยมปลายตอนปลายเพื่อเตรียมความพร้อมสู่ระดับอุดมศึกษา
   - มีระบบวิเคราะห์เจาะลึกจากติวเตอร์ (Tutor Insight Coaching) เป็นภาษาไทย แสดงทันทีหลังตรวจคำตอบ
3. **Interactive Word Bank Chips**:
   - ในส่วนแบบฝึกหัดเติมคำ (Fill-in) มีปุ่มสัมผัสชิปคำศัพท์ลอยตัวด้านบน แตะครั้งเดียวคำศัพท์จะวิ่งเข้าไปในช่องว่างทันที สะดวก รวดเร็ว และป้องกันการสะกดผิดบนหน้าจอมือถือ
4. **Early Exit Guard & Integrity Protection**:
   - หากนักเรียนกดตรวจคำตอบก่อนทำครบ ระบบจะคำนวณคะแนนเฉพาะข้อที่ทำไปจริง ส่วนข้อที่เว้นไว้จะขึ้นสถานะ `[ข้อนี้ไม่ได้ทำ - ไม่เปิดเฉลยตามกฎการสอบ]` เพื่อป้องกันการสปอยล์คำตอบ
5. **High-DPI 2X Canvas E-Certificate with Grapheme Clusters**:
   - เกียรติบัตรความละเอียดสูง พร้อมระบบ Progressive Name Reveal ปลดล็อกชื่อทีละส่วนตามสัดส่วนยูนิตที่ทำผ่าน
   - จัดการตัดคำและสระไทยด้วย Unicode Property Escape `/\P{M}\p{M}*/gu` ป้องกันปัญหาสระลอยหรือวรรณยุกต์ขาดอย่างสมบูรณ์
6. **Robust Cloud Database (Google Sheets & Apps Script 2.0)**:
   - เชื่อมต่อ Google Sheets ชื่อ `TWP_GetInvolved_M6_Database`
   - ป้องกันข้อมูลชนกันด้วย `LockService`
   - ป้องกันศูนย์นำหน้ารหัสนักเรียนหายด้วย `setNumberFormat("@")`

---

## 📚 โครงสร้างเนื้อหาหลักสูตร ม.6 (Curriculum Breakdown - 53 ข้อ)

| บทเรียน (Unit) | หัวข้อหลัก | จำนวนข้อสอบ | รายละเอียดส่วนย่อย (Sections) |
|:---|:---|:---:|:---|
| **Unit 5** | **Communicate** | 13 ข้อ | • Part 1: Video Comprehension (3 ข้อ)<br>• Part 2: Vocabulary & Prefixes (5 ข้อ)<br>• Part 3: Reported Speech & Reporting Verbs (5 ข้อ) |
| **Unit 6** | **Challenges** | 14 ข้อ | • Part 1: Video Comprehension (3 ข้อ)<br>• Part 2: Vocabulary & Word Families (5 ข้อ)<br>• Part 3: Conditionals & Wish / If only (6 ข้อ) |
| **Unit 7** | **Going Unplugged** | 13 ข้อ | • Part 1: Video Comprehension (3 ข้อ)<br>• Part 2: Expressions with 'make' and 'do' (5 ข้อ)<br>• Part 3: Passive Voice & Causative Passive (5 ข้อ) |
| **Unit 8** | **Make a Difference** | 13 ข้อ | • Part 1: Video Comprehension (3 ข้อ)<br>• Part 2: Phrasal Verbs (5 ข้อ)<br>• Part 3: Verb Patterns & Used to / Be used to (5 ข้อ) |
| **รวมทั้งสิ้น** | **4 ยูนิต** | **53 ข้อ** | **ครอบคลุมทักษะเตรียมพร้อมสู่อุดมศึกษา** |

---

## 🛠️ โครงสร้างไฟล์ในระบบ (Project Structure)

```
สรุปคลิป แบบฝึกหัด M.6/
│── assets/
│   ├── twp-logo.png               # ตราสัญลักษณ์ทางการ ทวพ. (TWP Official Logo)
│   └── xlsx.full.min.js           # SheetJS Library สำหรับระบบครูผู้สอน
│── index.html                     # Frontend Web Application (Apple Minimalist UX/UI)
│── m6_units_data.js               # คลังข้อมูลข้อสอบ ตัวเลือก เฉลย และ Tutor Insight 4 ยูนิต
│── Code.gs                        # Google Apps Script Source สำหรับ Google Sheets M.6
│── google-apps-script.js          # สคริปต์สำรองสำหรับคัดลอกลง Apps Script
│── google-apps-script.txt         # ไฟล์ข้อความสำหรับเปิดอ่านสคริปต์บนมือถือ/แท็บเล็ต
│── students_roster_template.csv   # แม่แบบไฟล์ CSV รายชื่อนักเรียน ม.6
│── .gitignore                     # ไฟล์คัดแยก Git
│── .nojekyll                      # ป้องกัน GitHub Pages ประมวลผลข้ามไฟล์
│── 404.html                       # หน้า Fallback สำหรับ Single Page App
└── README.md                      # คู่มือการติดตั้งและใช้งานระบบ
```

---

## 🚀 ขั้นตอนการติดตั้ง Google Sheets & Apps Script

1. สร้าง Google Sheets ใหม่ขึ้นมา 1 ไฟล์ ตั้งชื่อว่า:  
   `TWP_GetInvolved_M6_Database`
2. ไปที่เมนู **ส่วนขยาย (Extensions)** -> **Apps Script**
3. คัดลอกโค้ดทั้งหมดจากไฟล์ `Code.gs` (หรือ `google-apps-script.txt`) ไปวางแทนที่โค้ดเดิมทั้งหมดในโปรเจกต์
4. บันทึกและเลือกฟังก์ชัน `setupAllSheets` จากนั้นกดปุ่ม **เรียกใช้ (Run)** ครั้งแรก (เพื่อให้สคริปต์สร้างแผ่นงานทั้ง 6 แผ่นและจัดหัวตารางให้อัตโนมัติ)
5. กดปุ่ม **การทำให้ใช้งานได้ (Deploy)** -> **การทำให้ใช้งานได้ใหม่ (New deployment)**
   - ชนิด: **เว็บแอป (Web app)**
   - รายละเอียด: `TWP M6 Exercise System v2.0`
   - ดำเนินการในฐานะ: **ฉัน (Me)**
   - ผู้มีสิทธิ์เข้าถึง: **ทุกคน (Anyone)**
6. คัดลอก URL ของเว็บแอป (Web App URL) ที่ได้ (ระบบถูกฝังค่าเริ่มต้นไว้ที่ `https://script.google.com/macros/s/AKfycbwtEmVMFSWmqF3-cIUtuIIa3QvLUNZ9QY28DNsBND8L_7RmrJ1kVic7bfc5tbUnSLoT4g/exec` เรียบร้อยแล้ว)
7. ในหน้าเว็บหลักของระบบ คลิกเมนู **ระบบคุณครู** (ใส่ PIN: `1234`) -> ไปที่แท็บ **ตั้งค่าระบบคลาวด์** สามารถตรวจสอบหรืออัปเดต URL ดังกล่าวได้ตลอดเวลา

---

## 🌐 การใช้งานบน GitHub Pages

ระบบถูกเตรียมพร้อมสำหรับโฮสต์ผ่าน GitHub Pages ทันที:
1. Push โค้ดทั้งหมดขึ้นที่: `https://github.com/Doit-on/Exercise_Get-M6.git`
2. ไปที่แท็บ **Settings** ของ GitHub Repository
3. เมนูทางซ้ายเลือก **Pages**
4. ในส่วน **Build and deployment** ให้เลือก Source เป็น **Deploy from a branch** แล้วเลือก Branch เป็น `main` โฟลเดอร์ `/ (root)` แล้วกด **Save**
5. ระบบจะสร้าง Web URL ให้นักเรียนเข้าทำแบบฝึกหัดได้ทุกที่ทุกเวลาบนทุกอุปกรณ์

---
**ฝ่ายพัฒนานวัตกรรมการเรียนรู้ดิจิทัล**  
*บริษัท สำนักพิมพ์ ไทยวัฒนาพานิช จำกัด (TWP)*
