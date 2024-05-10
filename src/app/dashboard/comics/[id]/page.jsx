'use client'

import Image from "next/image";
import {updateComic} from "../action"

export async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/dashboard/comics/${id}`)
    return res.json()
}

export default async function Page({params}) {
    const id = params.id
    const comic = await getData(id)
    console.log(comic)

    const handleUpdate = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        try {
            const comicId = await updateComic(formData);
            alert("แก้ไขข้อมูลการ์ตูนเรียบร้อยแล้ว");
            window.location.href = '/dashboard/comics';
        } catch (error) {
            console.error("Error adding comic:", error);
        }
    };

    return (
        <section className="flex flex-col ">

            <article className="flex flex-col items-center mb-10">
                <div className="text-[26px] mb-5">{comic.commic_name}</div>

                <div className="h-[350px] w-[350px] rounded-[20px] overflow-hidden">
                    <Image src={comic.character_img} alt="comicpicture" width={500} height={500} className="w-full h-full object-cover" />
                </div>
            </article>

            <form onSubmit={handleUpdate} className="flex flex-col w-full gap-6">
                <div className="grid grid-cols-2 w-full justify-between gap-6 ">
                    <input type="hidden" id="comic_id" name="comic_id" value={comic.comic_id}/>
                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ชื่อการ์ตูน :</label>
                        <input type="text" defaultValue={comic.commic_name} id="commic_name" name="commic_name" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เรื่องจาก :</label>
                        <input type="text" defaultValue={comic.story_by} id="story_by" name="story_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">รูปภาพจาก :</label>
                        <input type="text" defaultValue={comic.pictures_by} id="pictures_by" name="pictures_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ต้นฉบับจาก :</label>
                        <input type="text" defaultValue={comic.original_by} id="original_by" name="original_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เผยแพร่จาก :</label>
                        <input type="text" defaultValue={comic.share_by} id="share_by" name="share_by" required className="p-[20px] bg-zinc-950 rounded-md text-[16px] " />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกหมวดหมู่ :</label>
                        <select name="genre_id" id="genre_id" defaultValue={comic.genre_id} className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general">เลือกหมวดหมู่</option>
                            <option value="1">โรแมนซ์แฟนตาซี</option>
                            <option value="2">โรแมนซ์</option>
                            <option value="3">ดราม่า</option>
                            <option value="4">สยองขวัญ</option>
                            <option value="5">วาย</option>
                            <option value="6">แอ็กชัน</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกสถานะ :</label>
                        <select name="status" id="status" defaultValue={comic.status} className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general" >เลือกสถานะ</option>
                            <option value="จบ"      >จบ</option>
                            <option value="ยังไม่จบ"  >ยังไม่จบ</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">เลือกวันที่อัพเดต :</label>
                        <select name="update_date" id="update_date" defaultValue={comic.update_date}  className="p-[20px] bg-zinc-950 rounded-md text-[16px] text-gray-400">
                            <option value="general">เลือกวันที่อัพเดต</option>
                            <option value="จ.">จันทร์</option>
                            <option value="อ.">อังคาร</option>
                            <option value="พ.">พุธ</option>
                            <option value="พฤ.">พฤหัสบดี</option>
                            <option value="ศ.">ศุกร์</option>
                            <option value="ส.">เสาร์</option>
                            <option value="อา.">อาทิตย์</option>
                        </select>
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ยอดเข้ารับชม :</label>
                        <input type="text" defaultValue={comic.view} id="view" name="view" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">จำนวนไลก์ :</label>
                        <input type="text" defaultValue={comic.comic_like} id="comic_like" name="comic_like" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีพื้นหลัง :</label>
                        <input type="text" defaultValue={comic.bg_color} id="bg_color" name="bg_color" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพพื้นหลัง :</label>
                        <input type="text" defaultValue={comic.bg_img} id="bg_img" name="bg_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพตัวละคร :</label>
                        <input type="text" defaultValue={comic.character_img} id="character_img" name="character_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">ภาพชื่อเรื่อง :</label>
                        <input type="text" defaultValue={comic.comic_name_img} id="comic_name_img" name="comic_name_img" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ0 :</label>
                        <input type="text" defaultValue={comic.blur_bottom_color0}  id="blur_bottom_color0" name="blur_bottom_color0" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ1 :</label>
                        <input type="text" defaultValue={comic.blur_bottom_color1} id="blur_bottom_color1" name="blur_bottom_color1" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ2 :</label>
                        <input type="text" defaultValue={comic.blur_bottom_color2} id="blur_bottom_color2" name="blur_bottom_color2" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                    <div className="flex flex-col mb-[12px]">
                        <label className="ml-1 mb-[12px] text-[18px]">สีเบลอ3 :</label>
                        <input type="text" defaultValue={comic.blur_bottom_color3} id="blur_bottom_color3" name="blur_bottom_color3" required className="p-[20px]  bg-zinc-950 rounded-md text-[16px]" />
                    </div>

                </div>

                <div className="flex flex-col mb-[12px] ">
                    <label className="ml-1 mb-[12px] text-[18px]">เรื่องย่อ :</label>
                    <textarea
                        required
                        name="synosis"
                        id="synosis"
                        rows="16"
                        defaultValue={comic.synosis}
                        className="p-[20px] bg-zinc-950 rounded-md text-[16px] w-full"
                    ></textarea>
                </div>

                <button type="submit" className="w-full p-[20px] bg-green-700  rounded-md text-[20px]" >Update</button>

            </form>



        </section>
    )
}
