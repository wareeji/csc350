import NavBottomItem from './NavBottomItem'



export default function NavBottom() {
    return (
        <nav className="h-[44px] mx-[10px] flex gap-[12px] justify-start items-center overflow-x-auto scrollbar-hide sm:justify-center ">
            <NavBottomItem address="/" menutype="กำลังฮิต"/>
            <NavBottomItem address="/waitforfree" menutype="รอฟรี +"/>
            <NavBottomItem address="/fantasyromance" menutype="โรแมนซ์แฟนตาซี"/>
            <NavBottomItem address="/romance" menutype="โรแมนซ์"/>
            <NavBottomItem address="/drama" menutype="ดราม่า"/>
            <NavBottomItem address="/yaoi" menutype="วาย"/>
            <NavBottomItem address="/action" menutype="แอ็กชั่น"/>           
            <NavBottomItem address="" menutype="สยองขวัญ"/>
        </nav>
    )
}
