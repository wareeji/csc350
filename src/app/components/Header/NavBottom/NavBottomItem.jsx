'use client'

import Link from "next/link";

import { usePathname } from "next/navigation";
// นำเข้า hook usePathname จาก Next.js เพื่อใช้ในการเข้าถึง pathname ของ URL ปัจจุบัน

export default function NavBottomItem({ address, menutype }) {

    const pathname = usePathname()
    // เก็บค่า pathname ของ URL ปัจจุบันโดยใช้ hook usePathname ที่ import เข้ามา

    return (
        <Link href={address} className={`cursor-pointer text-[#444444] text-nowrap mr-[2px] hover:text-[#c9c1c1ec] 
        ${pathname === address ? 'text-white font-bold' : ''}`}>         
                {menutype}
        </Link>
    )
}