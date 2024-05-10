import { NextResponse } from "next/server"
import { conndb } from "@/app/connectDB/conndb"

export async function GET(request) {
  const db = conndb.promise()
  const [actioncomics,fields] = await db.query(
    `SELECT comic_id,commic_name,story_by,pictures_by,original_by,bg_img,character_img,comic_name_img,blur_bottom_color0,blur_bottom_color1,blur_bottom_color2,blur_bottom_color3 FROM comics WHERE genre_id = 5;`
  )
  return NextResponse.json(actioncomics)
}