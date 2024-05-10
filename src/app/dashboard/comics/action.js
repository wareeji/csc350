"use server"

import { conndb } from "@/app/connectDB/conndb";

//เพิ่ม
export async function addComic(formData) {
    const { commic_name, story_by, pictures_by, original_by, share_by, synosis, status, update_date, view, comic_like, bg_color, bg_img, character_img, comic_name_img, blur_bottom_color0, blur_bottom_color1, blur_bottom_color2, blur_bottom_color3, genre_id } =
        Object.fromEntries(formData);

    try {
        const db = conndb.promise();

        const [result] = await db.query(
            `INSERT INTO comics 
              (commic_name, story_by, 
              pictures_by, original_by, 
              share_by, synosis, 
              status, update_date, 
              view, comic_like, 
              bg_color, bg_img,
              character_img, comic_name_img,
              blur_bottom_color0,
              blur_bottom_color1,
              blur_bottom_color2, 
              blur_bottom_color3, 
              genre_id)
            VALUES 
              (?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?, ?, 
               ?)`,
            [
                commic_name, story_by,
                pictures_by, original_by,
                share_by, synosis,
                status, update_date,
                view, comic_like,
                bg_color, bg_img,
                character_img, comic_name_img,
                blur_bottom_color0, blur_bottom_color1,
                blur_bottom_color2, blur_bottom_color3,
                genre_id
            ]
        );

        return result.insertId; // คืนค่า ID ของการ์ตูนที่เพิ่ม
    }
    catch (error) {
        console.error("Error adding comic:", error);
        // ทำสิ่งที่คุณต้องการเมื่อเกิดข้อผิดพลาด เช่น แจ้งเตือนผู้ใช้ หรือทำการ rollback การทำงาน
        throw error; // ส่ง error ออกไปเพื่อให้ caller จัดการต่อไป
    }

}

//อัปเดต
export async function updateComic(formData) {
    const { comic_id, commic_name, story_by, pictures_by, original_by, share_by, synosis, status, update_date, view, comic_like, bg_color, bg_img, character_img, comic_name_img, blur_bottom_color0, blur_bottom_color1, blur_bottom_color2, blur_bottom_color3, genre_id } =
        Object.fromEntries(formData);

    try {
        const db = conndb.promise();

        const [result] = await db.query(
            `UPDATE comics SET 
              commic_name = ?, story_by = ?, 
              pictures_by = ?, original_by = ?, 
              share_by = ?, synosis = ?, 
              status = ?, update_date = ?, 
              view = ?, comic_like = ?, 
              bg_color = ?, bg_img = ?,
              character_img = ?, comic_name_img = ?,
              blur_bottom_color0 = ?,
              blur_bottom_color1 = ?,
              blur_bottom_color2 = ?, 
              blur_bottom_color3 = ?, 
              genre_id = ?
              WHERE comic_id = ?`
           ,
            [
                commic_name, story_by,
                pictures_by, original_by,
                share_by, synosis,
                status, update_date,
                view, comic_like,
                bg_color, bg_img,
                character_img, comic_name_img,
                blur_bottom_color0, blur_bottom_color1,
                blur_bottom_color2, blur_bottom_color3,
                genre_id,
                comic_id
            ]
        );

        return result.insertId; // คืนค่า ID ของการ์ตูนที่เพิ่ม
    }
    catch (error) {
        console.error("Error adding comic:", error);
        // ทำสิ่งที่คุณต้องการเมื่อเกิดข้อผิดพลาด เช่น แจ้งเตือนผู้ใช้ หรือทำการ rollback การทำงาน
        throw error; // ส่ง error ออกไปเพื่อให้ caller จัดการต่อไป
    }

}


