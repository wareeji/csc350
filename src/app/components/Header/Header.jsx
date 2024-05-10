import NavTop from "./NavTop/NavTop";
import NavCenter from "./NavCenter/NavCenter";
import NavBottom from "./NavBottom/NavBottom";

export default function Header() {
  return (
    <header className="z-[100] bg-[#121212] w-full fixed">
        <NavTop/>
        <NavCenter/>
        <NavBottom/>
    </header>
  )
}

