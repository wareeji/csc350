import Link from "next/link"
import Image from "next/image"

export function NavCenterItemText({ address, menutext }) {
    return (
        <Link href={address} className="cursor-pointer text-[#444444] text-[19px] font-bold mt-[4px] hover:text-[#c9c1c1ec]">
            {menutext}
        </Link>
    )
}

export function NavCenterItemLogo ({ address, menuimg, }) {
    return (
        <Link href={address} className="cursor-pointer mx-[24px] ">
            <Image src={menuimg}/>
        </Link>
    )
}

