import { NextResponse } from "next/server"
import { conndb } from "@/app/connectDB/conndb"

export async function GET(request, { params }) {
    const id = params.id
    const db = conndb.promise()
    const [comic, fields] = await db.query(
        `SELECT c.comic_id,c.commic_name,c.story_by,c.pictures_by,c.original_by,c.share_by,c.synosis,c.status,c.update_date,
        c.view,c.comic_like,c.bg_color,c.bg_img,c.character_img,c.comic_name_img,c.blur_bottom_color0,c.blur_bottom_color1,
        c.blur_bottom_color2,c.blur_bottom_color3,c.genre_id, 
        g.genres_id,g.genres_name 
        FROM comics c
        JOIN genres g ON c.genre_id = g.genres_id
        WHERE c.comic_id = ? `,
        [id]
    )
    return NextResponse.json(comic[0])
}
