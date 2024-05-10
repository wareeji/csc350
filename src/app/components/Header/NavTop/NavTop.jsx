import NavTopItem from './NavTopItem'

import gift from '/public/Header/gift.svg'
import search from '/public/Header/search.svg'
import hambergermenu from '/public/Header/hamberger_menu.svg'

export default function NavTop() {
    return (
        <nav className="h-[44px] px-[18px] flex items-center justify-between">
            <NavTopItem address="" icon={gift}/>

            <div className="flex gap-[20px]">
                <NavTopItem address="" icon={search}/>

                <NavTopItem address="/dashboard/comics" icon={hambergermenu}/>
            </div> 
        </nav>
    )
}
