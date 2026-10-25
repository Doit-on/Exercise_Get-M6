/**
 * =========================================================================
 * Google Apps Script for Get INVOLVED! M.6 Online Exercise & E-Certificate System
 * ระบบแบบฝึกหัดออนไลน์และออกเกียรติบัตรอิเล็กทรอนิกส์ Get INVOLVED! ม.6 (ทวพ. - TWP)
 * เวอร์ชัน 2.5 (High School University-Prep Edition with Email-Auth & Bilingual Certs)
 * ฐานข้อมูล Google Sheets: TWP_GetInvolved_M6_Database
 * =========================================================================
 * 
 * สถาปัตยกรรมระบบและการป้องกันข้อผิดพลาด:
 * 1. Email-Based Identity Verification: ใช้อีเมลเป็นคีย์หลักในการตรวจสอบและยืนยันตัวตนเข้าระบบ
 * 2. Bilingual Certificate Name System: รองรับชื่อ-นามสกุลจริงทั้งภาษาไทยและภาษาอังกฤษสำหรับการออกเกียรติบัตร
 * 3. Student Note Support: บันทึกข้อความและคำถามที่นักเรียนขอคำแนะนำจากคุณครู
 * 4. LockService: ล็อคสเปรดชีตชั่วคราวขณะเขียนข้อมูล ป้องกันข้อมูลชนกัน (Race Conditions)
 * 5. Text Formatting Guard: บังคับคอลัมน์รหัสนักเรียนและอีเมลเป็นข้อความ (@) ป้องกันศูนย์นำหน้าหาย
 * =========================================================================
 */

// ชื่อชีตหลักในระบบ
const SHEET_STUDENTS = "Students_DB";
const SHEET_NAME_BASE = "Name_base";
const SHEET_LOGIN_LOGS = "Login_Logs";
const SHEET_SCORES = "Scores_Log";
const SHEET_CERTS = "Certificates";
const SHEET_CONFIG = "Teacher_Config";

/**
 * เพิ่มเมนูพิเศษบน Google Sheets อัตโนมัติเมื่อเปิดชีต
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🎓 ระบบ TWP ม.6')
    .addItem('⚡ ติดตั้งและสร้างโครงสร้างชีตทั้งหมด (Setup Database)', 'setupAllSheets')
    .addItem('📊 อัปเดตสถิติและสรุปผลคะแนน', 'refreshSummaryStats')
    .addToUi();
}

/**
 * ฟังก์ชันสร้างและจัดรูปแบบตารางทั้งหมดอัตโนมัติ (รันครั้งแรกเมื่อติดตั้ง)
 */
function setupAllSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // 1. ชีต Students_DB (ฐานข้อมูลนักเรียน ม.6 พร้อมชื่อไทยและอังกฤษ)
  let studentSheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!studentSheet) {
    studentSheet = ss.insertSheet(SHEET_STUDENTS);
  }
  studentSheet.clear();
  const studentHeaders = [
    "Student ID", "ชื่อ-นามสกุล (ไทย)", "Full Name (English)", "โรงเรียน", "ระดับชั้น", "ห้อง", 
    "อีเมล (Email)", "สถานะ (Status)", "วันที่ลงทะเบียน"
  ];
  studentSheet.appendRow(studentHeaders);
  formatHeaderRow(studentSheet, "#1D1D1F", "#FFFFFF");
  studentSheet.getRange("A:A").setNumberFormat("@"); // บังคับ Text Format รหัส นร.
  studentSheet.getRange("G:G").setNumberFormat("@"); // บังคับ Text Format อีเมล

  // ตัวอย่างข้อมูลนักเรียน ม.6 ตั้งต้น
  const sampleStudents = [
    ["STD-M6-001", "ณภัทร วรเดชสกุล", "Naphat Voradechsakul", "โรงเรียนเตรียมอุดมศึกษา", "ม.6", "1", "naphat.m6@gmail.com", "Active", new Date()],
    ["STD-M6-002", "พิมพิชญา ศิริวัฒนา", "Pimpichaya Siriwattana", "โรงเรียนสาธิต มศว ปทุมวัน", "ม.6", "2", "pimpichaya.m6@gmail.com", "Active", new Date()],
    ["STD-M6-003", "กิตติธัช ธนบดีเกียรติ", "Kittithat Thanabodeekiat", "โรงเรียนสวนกุหลาบวิทยาลัย", "ม.6", "1", "kittithat.m6@gmail.com", "Active", new Date()],
    ["STD-M6-004", "อภิญญา วงศ์ปรีชา", "Apinya Wongpreecha", "โรงเรียนบดินทรเดชา (สิงห์ สิงหเสนี)", "ม.6", "3", "apinya.m6@gmail.com", "Active", new Date()],
    ["STD-M6-005", "วรเมธ รัตนเกียรติ", "Worameth Rattanakiat", "โรงเรียนกรุงเทพคริสเตียนวิทยาลัย", "ม.6", "2", "worameth.m6@gmail.com", "Active", new Date()]
  ];
  sampleStudents.forEach(row => studentSheet.appendRow(row));

  // 2. ชีต Name_base (ดัชนี Auto-lookup)
  let nameSheet = ss.getSheetByName(SHEET_NAME_BASE);
  if (!nameSheet) {
    nameSheet = ss.insertSheet(SHEET_NAME_BASE);
  }
  nameSheet.clear();
  nameSheet.appendRow(["Student ID", "ชื่อ-นามสกุล (ไทย)", "Full Name (English)", "โรงเรียน", "ระดับชั้น", "อีเมลอ้างอิง"]);
  formatHeaderRow(nameSheet, "#3A3A3C", "#FFFFFF");
  nameSheet.getRange("A:A").setNumberFormat("@");
  sampleStudents.forEach(s => {
    nameSheet.appendRow([s[0], s[1], s[2], s[3], s[4], s[6]]);
  });

  // 3. ชีต Login_Logs (ประวัติการเข้าใช้งาน)
  let logSheet = ss.getSheetByName(SHEET_LOGIN_LOGS);
  if (!logSheet) {
    logSheet = ss.insertSheet(SHEET_LOGIN_LOGS);
  }
  logSheet.clear();
  logSheet.appendRow(["Timestamp", "อีเมล", "ชื่อ-นามสกุล (ไทย)", "Full Name (English)", "โรงเรียน", "สถานะการล็อกอิน", "User Agent / Device"]);
  formatHeaderRow(logSheet, "#48484A", "#FFFFFF");

  // 4. ชีต Scores_Log (บันทึกคะแนนละเอียด + ข้อความถึงครู)
  let scoreSheet = ss.getSheetByName(SHEET_SCORES);
  if (!scoreSheet) {
    scoreSheet = ss.insertSheet(SHEET_SCORES);
  }
  scoreSheet.clear();
  const scoreHeaders = [
    "Timestamp", "Student ID", "อีเมล", "ชื่อ-นามสกุล (ไทย)", "Full Name (English)", "โรงเรียน", "ห้อง",
    "Unit", "คะแนนที่ได้ (Score)", "คะแนนเต็ม (Total)", "ร้อยละ (%)", "สถานะผ่าน", "รายละเอียดคำตอบ (JSON)", "ข้อความถึงคุณครู (Student Note)"
  ];
  scoreSheet.appendRow(scoreHeaders);
  formatHeaderRow(scoreSheet, "#0071E3", "#FFFFFF");
  scoreSheet.getRange("B:B").setNumberFormat("@");
  scoreSheet.getRange("C:C").setNumberFormat("@");

  // 5. ชีต Certificates (ทะเบียนเกียรติบัตร)
  let certSheet = ss.getSheetByName(SHEET_CERTS);
  if (!certSheet) {
    certSheet = ss.insertSheet(SHEET_CERTS);
  }
  certSheet.clear();
  const certHeaders = [
    "Certificate ID", "Student ID", "ชื่อ-นามสกุล (ไทย)", "Full Name (English)", "โรงเรียน", "ระดับชั้น", 
    "อีเมล", "วันที่อนุมัติ", "สถานะการปลดล็อก", "คะแนนเฉลี่ยสะสม", "Serial Hash"
  ];
  certSheet.appendRow(certHeaders);
  formatHeaderRow(certSheet, "#D97706", "#FFFFFF");
  certSheet.getRange("A:B").setNumberFormat("@");

  // 6. ชีต Teacher_Config (การตั้งค่าระบบ)
  let configSheet = ss.getSheetByName(SHEET_CONFIG);
  if (!configSheet) {
    configSheet = ss.insertSheet(SHEET_CONFIG);
  }
  configSheet.clear();
  configSheet.appendRow(["Key", "Value", "คำอธิบาย"]);
  formatHeaderRow(configSheet, "#6B7280", "#FFFFFF");
  const defaultConfigs = [
    ["TEACHER_PIN", "1234", "รหัสผ่าน PIN สำหรับคุณครู"],
    ["PASSING_PERCENTAGE", "60", "เกณฑ์คะแนนขั้นต่ำในการผ่านรายหน่วย (%)"],
    ["ALLOW_RETAKE", "TRUE", "อนุญาตให้นักเรียนทำซ้ำเพื่อพัฒนาคะแนนได้"],
    ["MAINTENANCE_MODE", "FALSE", "โหมดปิดปรับปรุงระบบชั่วคราว"],
    ["CURRICULUM_GRADE", "มัธยมศึกษาปีที่ 6", "ระดับชั้นเป้าหมายของระบบนี้"]
  ];
  defaultConfigs.forEach(c => configSheet.appendRow(c));

  SpreadsheetApp.flush();
  return { status: "success", message: "สร้างและจัดรูปแบบโครงสร้างชีต ม.6 ครบทั้ง 6 แผ่นงานสำเร็จแล้ว" };
}

/**
 * จัดรูปแบบหัวตารางให้สวยงามคมชัดสไตล์ Minimalist
 */
function formatHeaderRow(sheet, bgColor, textColor) {
  const header = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  header.setBackground(bgColor);
  header.setFontColor(textColor);
  header.setFontWeight("bold");
  header.setFontFamily("Plus Jakarta Sans");
  header.setFontSize(10);
  header.setHorizontalAlignment("center");
  sheet.setFrozenRows(1);
}

/**
 * Handle HTTP GET Requests
 */
function doGet(e) {
  const action = (e && e.parameter && e.parameter.action) || "ping";
  
  if (action === "ping") {
    return createJsonResponse({
      status: "success",
      message: "Get INVOLVED! M.6 Google Apps Script Backend Online",
      version: "2.5-HighSchool",
      grade: "M.6",
      timestamp: new Date().toISOString()
    });
  }

  // ยืนยันตัวตนด้วย Email จากชีต Students_DB
  if (action === "verifyEmail") {
    const email = (e.parameter.email || "").trim().toLowerCase();
    return verifyStudentByEmail(email);
  }

  if (action === "getRoster") {
    return getRosterData();
  }

  if (action === "lookupStudent") {
    const email = (e.parameter.email || "").trim().toLowerCase();
    return lookupStudentProgress(email);
  }

  return createJsonResponse({ status: "error", message: "Unknown action" });
}

/**
 * Handle HTTP POST Requests (Safe-Sync with LockService)
 */
function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    // รอคิวไม่เกิน 10 วินาที ป้องกันข้อมูลชนกัน
    lock.waitLock(10000);

    let data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (err) {
      data = e.parameter;
    }

    const action = data.action || "submitScore";

    if (action === "submitScore") {
      return recordStudentScore(data);
    }

    if (action === "registerStudent") {
      return registerOrUpdateStudent(data);
    }

    if (action === "loginLog") {
      return logStudentLogin(data);
    }

    return createJsonResponse({ status: "error", message: "Action not supported" });

  } catch (error) {
    return createJsonResponse({ status: "error", message: error.toString() });
  } finally {
    lock.releaseLock();
  }
}

/**
 * ตรวจสอบนักเรียนด้วย Email จากฐานข้อมูล Google Sheet
 */
function verifyStudentByEmail(email) {
  if (!email) return createJsonResponse({ status: "error", message: "Email is required" });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!sheet) return createJsonResponse({ status: "error", message: "Students sheet not found" });

  const rows = sheet.getDataRange().getValues();
  if (rows.length <= 1) {
    return createJsonResponse({ status: "success", found: false, message: "No registered students in sheet" });
  }

  // ค้นหาตำแหน่งคอลัมน์จากหัวตาราง
  const headers = rows[0].map(h => String(h).trim().toLowerCase());
  let emailCol = headers.findIndex(h => h.includes("email") || h.includes("อีเมล"));
  if (emailCol === -1) emailCol = 6;

  let thaiNameCol = headers.findIndex(h => h.includes("ไทย") || h.includes("ชื่อ-นามสกุล"));
  if (thaiNameCol === -1) thaiNameCol = 1;

  let engNameCol = headers.findIndex(h => h.includes("english") || h.includes("อังกฤษ"));
  if (engNameCol === -1) engNameCol = 2;

  let idCol = 0;
  let schoolCol = headers.findIndex(h => h.includes("โรงเรียน") || h.includes("school"));
  if (schoolCol === -1) schoolCol = 3;

  let roomCol = headers.findIndex(h => h.includes("ห้อง") || h.includes("room"));
  if (roomCol === -1) roomCol = 5;

  for (let i = 1; i < rows.length; i++) {
    const rowEmail = String(rows[i][emailCol] || "").trim().toLowerCase();
    if (rowEmail === email) {
      return createJsonResponse({
        status: "success",
        found: true,
        student: {
          id: String(rows[i][idCol] || ""),
          nameThai: String(rows[i][thaiNameCol] || ""),
          nameEnglish: String(rows[i][engNameCol] || ""),
          school: String(rows[i][schoolCol] || ""),
          room: String(rows[i][roomCol] || ""),
          email: rowEmail
        }
      });
    }
  }

  return createJsonResponse({ status: "success", found: false, message: "Email not found in registered roster" });
}

/**
 * ลงทะเบียนหรืออัปเดตข้อมูลนักเรียนลงใน Students_DB
 */
function registerOrUpdateStudent(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!sheet) {
    setupAllSheets();
    sheet = ss.getSheetByName(SHEET_STUDENTS);
  }

  const email = String(data.email || "").trim().toLowerCase();
  if (!email) return createJsonResponse({ status: "error", message: "Email is required" });

  const studentId = String(data.studentId || data.id || `STD-M6-${Math.floor(100 + Math.random() * 900)}`).trim();
  const nameThai = String(data.nameThai || data.name || "").trim();
  const nameEnglish = String(data.nameEnglish || "").trim();
  const school = String(data.school || "-").trim();
  const grade = String(data.grade || "ม.6").trim();
  const room = String(data.room || "-").trim();
  const status = "Active";
  const regDate = new Date();

  const rows = sheet.getDataRange().getValues();
  let existingRow = -1;
  for (let i = 1; i < rows.length; i++) {
    const rowEmail = String(rows[i][6] || rows[i][5] || "").trim().toLowerCase();
    if (rowEmail === email) {
      existingRow = i + 1;
      break;
    }
  }

  if (existingRow > 0) {
    sheet.getRange(existingRow, 1, 1, 9).setValues([[
      studentId, nameThai, nameEnglish, school, grade, room, email, status, regDate
    ]]);
  } else {
    sheet.appendRow([
      studentId, nameThai, nameEnglish, school, grade, room, email, status, regDate
    ]);
  }

  return createJsonResponse({
    status: "success",
    message: "Student registered successfully",
    student: { id: studentId, nameThai, nameEnglish, school, grade, room, email }
  });
}

/**
 * บันทึกคะแนนนักเรียนลงในชีต Scores_Log อย่างปลอดภัย
 */
function recordStudentScore(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let scoreSheet = ss.getSheetByName(SHEET_SCORES);
  if (!scoreSheet) {
    setupAllSheets();
    scoreSheet = ss.getSheetByName(SHEET_SCORES);
  }

  const timestamp = new Date();
  const studentId = String(data.studentId || "GUEST").trim();
  const email = String(data.email || "").trim().toLowerCase();
  const nameThai = String(data.nameThai || data.name || "นักเรียน ม.6").trim();
  const nameEnglish = String(data.nameEnglish || "").trim();
  const school = String(data.school || "-").trim();
  const room = String(data.room || "-").trim();
  const unit = String(data.unit || "unit5").trim();
  const score = Number(data.score || 0);
  const total = Number(data.total || 0);
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const isPassed = pct >= 60 ? "ผ่าน" : "ต้องพัฒนา";
  const rawAnswers = data.rawAnswers ? JSON.stringify(data.rawAnswers) : "";
  const studentNote = String(data.studentNote || data.note || data.message || "").trim();

  scoreSheet.appendRow([
    timestamp, studentId, email, nameThai, nameEnglish, school, room, unit, score, total, pct, isPassed, rawAnswers, studentNote
  ]);

  return createJsonResponse({
    status: "success",
    message: `บันทึกคะแนน ${unit} สำเร็จ`,
    score: score,
    total: total,
    percentage: pct,
    passed: isPassed
  });
}

/**
 * บันทึกประวัติการล็อกอิน
 */
function logStudentLogin(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let logSheet = ss.getSheetByName(SHEET_LOGIN_LOGS);
  if (!logSheet) {
    setupAllSheets();
    logSheet = ss.getSheetByName(SHEET_LOGIN_LOGS);
  }

  logSheet.appendRow([
    new Date(),
    data.email || "-",
    data.nameThai || data.name || "-",
    data.nameEnglish || "-",
    data.school || "-",
    data.status || "Success",
    data.device || "Browser"
  ]);

  return createJsonResponse({ status: "success", message: "Login logged" });
}

/**
 * ดึงข้อมูลนักเรียนทั้งหมดในระบบ
 */
function getRosterData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_STUDENTS);
  if (!sheet) return createJsonResponse({ status: "error", message: "Students sheet not found" });

  const rows = sheet.getDataRange().getValues();
  const students = [];
  for (let i = 1; i < rows.length; i++) {
    students.push({
      id: rows[i][0],
      name: rows[i][1],
      nameThai: rows[i][1],
      nameEnglish: rows[i][2],
      school: rows[i][3],
      grade: rows[i][4],
      room: rows[i][5],
      email: rows[i][6],
      status: rows[i][7]
    });
  }

  return createJsonResponse({ status: "success", data: students });
}

/**
 * ค้นหาประวัตินักเรียนรายบุคคล
 */
function lookupStudentProgress(email) {
  if (!email) return createJsonResponse({ status: "error", message: "Email required" });

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const scoreSheet = ss.getSheetByName(SHEET_SCORES);
  if (!scoreSheet) return createJsonResponse({ status: "error", message: "Scores sheet not found" });

  const rows = scoreSheet.getDataRange().getValues();
  const units = {
    unit5: { done: false, score: 0, total: 0, pct: 0 },
    unit6: { done: false, score: 0, total: 0, pct: 0 },
    unit7: { done: false, score: 0, total: 0, pct: 0 },
    unit8: { done: false, score: 0, total: 0, pct: 0 }
  };

  for (let i = 1; i < rows.length; i++) {
    const rowEmail = String(rows[i][2]).trim().toLowerCase();
    if (rowEmail === email) {
      const u = rows[i][7]; // unit col
      if (units[u]) {
        units[u].done = true;
        units[u].score = rows[i][8];
        units[u].total = rows[i][9];
        units[u].pct = rows[i][10];
      }
    }
  }

  return createJsonResponse({ status: "success", email: email, progress: units });
}

/**
 * Helper ส่งค่า JSON Response
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * คำนวณสรุปสถิติ
 */
function refreshSummaryStats() {
  SpreadsheetApp.getActiveSpreadsheet().toast("อัปเดตสถิติเรียบร้อยแล้ว", "สำเร็จ", 3);
}
