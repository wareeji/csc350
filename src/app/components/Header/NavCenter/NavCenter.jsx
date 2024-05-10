import { NavCenterItemText, NavCenterItemLogo } from './NavCenterItem'

import logowhite from '/public/Header/logo/logo-white.svg'


export default function NavCenter() {
    return (
        <nav className="relative flex h-[36px] items-center justify-center px-[18px] sm:px-[24px] mx-auto my-0  py-1 ">

            <NavCenterItemText address="" menutext="ชั้นหนังสือ"/>
            <NavCenterItemLogo address="/" menuimg={logowhite}/> 
            <NavCenterItemText address="" menutext="ตารางเว็บตูน"/>

            <div className="absolute bottom-0 bg-[#222222] inset-x-[11px] md:inset-x-[94px] h-[1px] "></div>
        </nav>
    )
}
