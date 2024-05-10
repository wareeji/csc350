'use client'
import Search from "@/app/components/DashboardAdmin/Search/Search"
import Link from "next/link"
import { useState, useEffect } from "react"


export default function Page() {
  const [getComics, setGetComics] = useState([])
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard/comics')
      .then(res => res.json())
      .then((data) => {
        setGetComics(data)
        console.log(data)
      })
  }, [isDeleted])

  const handleDelete = async (comic_id) => {
    // แสดง alert และขอยืนยันการลบ
    const confirmDelete = window.confirm(`ต้องการลบข้อมูลการ์ตูน id : ${comic_id} ใช่หรือไม่`);
    if (!confirmDelete) {
      return; // ถ้าผู้ใช้ยกเลิกการลบ ไม่ต้องดำเนินการต่อ
    }

    try {
      const response = await fetch(`http://localhost:3000/api/dashboard/comics/delete/${comic_id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        console.error('Comic deleted successfully');
        setIsDeleted(true); // ตั้งค่า isDeleted เป็น true เพื่อให้ useEffect เรียกใช้งานอีกครั้ง
      } else {
        console.error('Failed to delete comic');
      }
    } catch (error) {
      console.error('Error deleting comic:', error);
    }
  }

  return (
    <section className="bg-[#222121] p-[20px] rounded-[10px]">
      <article className="flex justify-between items-center mb-[25px]">
        <Search placeholder="Search for comic..." />

        <Link href="/dashboard/comics/add">
          <button className="bg-green-700 p-[10px] rounded-[5px] cursor-pointer">Add New</button>
        </Link>
      </article>

      <table className="w-full">
        <thead>
          <tr className="font-bold text-gray-350 text-[18px]">
            <td className="p-[10px]">ID</td>
            <td className="p-[10px]">comic name</td>
            <td className="p-[10px]">story by</td>
            <td className="p-[10px]">pictures by</td>
            <td className="p-[10px]">original by</td>
            <td className="p-[10px]">share_by</td>
            <td className="p-[10px]">status</td>
            <td className="p-[10px] text-nowrap">update date</td>
            <td className="p-[10px]"> genre</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>

        <tbody>
          {getComics.map((comic) => (
            <tr key={comic.comic_id}>
              <td className="p-[10px]">{comic.comic_id}</td>
              <td className="p-[10px]">{comic.commic_name}</td>
              <td className="p-[10px]">{comic.story_by}</td>
              <td className="p-[10px]">{comic.pictures_by}</td>
              <td className="p-[10px]">{comic.original_by}</td>
              <td className="p-[10px]">{comic.share_by}</td>
              <td className="p-[10px]">{comic.status}</td>
              <td className="p-[10px]">{comic.update_date}</td>
              <td className="p-[10px]">{comic.genres_name}</td>
              <td className="p-[10px]">

                <div className="flex gap-3">
                  <Link href={`/dashboard/comics/${comic.comic_id}`}>
                    <button className="py-[5px] px-[10px] rounded-[5px] cursor-pointer bg-blue-600">
                      View
                    </button>
                  </Link>

                  <button className="py-[5px] px-[10px] rounded-[5px] cursor-pointer bg-red-600" onClick={() => handleDelete(comic.comic_id)}>
                    Delete
                  </button>

                </div>
              </td>
            </tr>))}

        </tbody>
      </table>
    </section>
  )
}
