import { conndb } from "@/app/connectDB/conndb";

export async function DELETE(request, { params }) {
    const id = params.id;
    const db = conndb.promise();
    const [result] = await db.query(
        `DELETE FROM comics WHERE comic_id = ?`,
        [id]
    );

    if (result.affectedRows > 0) {
        return new Response(JSON.stringify({ message: 'Comic deleted successfully' }), {
            headers: { 'Content-Type': 'application/json' }
        });
    } else {
        return new Response(null, { status: 404 }); // สร้างการตอบกลับที่มีสถานะ 404 Not Found
    }
}