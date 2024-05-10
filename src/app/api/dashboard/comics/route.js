import { NextResponse } from "next/server"
import { conndb } from "@/app/connectDB/conndb"

export async function GET(request) {
    const db = conndb.promise()
    const [comics, fields] = await db.query(
       `SELECT c.comic_id,c.commic_name,c.story_by,c.pictures_by,c.original_by,c.share_by,c.status,c.update_date,g.genres_name 
       FROM comics c
       JOIN genres g ON c.genre_id = g.genres_id
       ORDER BY c.comic_id DESC`,
    )
    return NextResponse.json(comics)
}