const mysql = require('mysql2')
//นำเข้าโมดูล mysql2 เพื่อใช้ในการเชื่อมต่อฐานข้อมูล MySQL ใน Node.js

export const conndb = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'kakao_webtoon_db'
})

// Connection Pool สามารถจัดการการเชื่อมต่อแบบพร้อมใช้งานได้ตลอดเวลาโดยไม่ต้องเปิด-ปิดการเชื่อมต่อแต่ละครั้ง
