import Image from "next/image";

import NavItem from "../../components/InContent/NavItem"
import leftArrow from "/public/InContentPage/leftArrow.svg";
import heardLike from "/public/InContentPage/heardLike.svg";
import more from "/public/InContentPage/more.svg";

import clock from "/public/clock.svg";

import threeline from "/public/InContentPage/threeline.svg";
import eye from "/public/InContentPage/eye.svg";
import like from "/public/InContentPage/like.svg";

export async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/content/${id}`)
  return res.json()
}


export default async function Page({params}) {
  const id = params.id
  const comic = await getData(id)
  console.log(comic)

  return (
    <section className="relative h-full w-full mx-auto my-0 ">
      <Image src={comic.bg_img} className="absolute inset-0 w-full z-0 h-full object-cover object-top" width={500} height={500}/>

      <nav className="z-40 fixed top-2 left-0 right-0 flex items-center justify-between px-[18px] py-[13px]">
        <NavItem address="/" icon={leftArrow} />
        <div className="ml-auto flex gap-[20px]">
          <NavItem address="" icon={heardLike} />
          <NavItem address="" icon={more} />
        </div>
      </nav>



      <div className={"absolute z-20 inset-x-0 top-[310px] sm:top-[380px]  h-[145px] sm:h-[150px]"}
        style={{ backgroundImage: `linear-gradient(180deg, ${comic.blur_bottom_color0} 2%, ${comic.blur_bottom_color2}  50%, ${comic.blur_bottom_color3} 100%` }}>
      </div>
      

      <div className={"absolute z-1 top-[455px] sm:top-[530px] md:top-[530px] lg:top-[530px] inset-x-0 h-full"}
        style={{ backgroundColor: `${comic.blur_bottom_color3}` }}>
      </div>


      <article className=" relative flex flex-col my-0 mx-auto px-[11px] w-full h-lvh sm:w-[630px] items-center">

        <div className="absolute z-10  top-[58px] left-[20px] h-[40px] flex flex-col ">
          <Image src={clock} />
          <div className="mt-[2px] h-[18px] bg-black rounded-[5px] px-[5px] font-bold text-white text-[11px] leading-[20px]">0 ตั๋ว</div>
        </div>

        <div className="absolute max-w-[472px]  top-14 px-[11px] flex flex-col items-center justify-center">
          <Image src={comic.character_img} className="object-cover h-full z-10" width={500} height={500}/>

          <div className="z-30 flex flex-col items-center justify-center">
            <p className="pt-[13.5px] font-bold text-[22px] text-white text-nowrap ">{comic.commic_name}</p>

            <p className="text-[12px] text-[#ffffffc0]">{comic.story_by}, {comic.pictures_by}, {comic.original_by}</p>

            <div className="pt-[5px] text-[12px] text-[#ffffffc0] flex flex-row gap-2">
              <div className="flex gap-1">
                <Image src={threeline} />
                <p>{comic.genres_name}</p>
              </div>

              <div className="flex gap-1">
                <Image src={eye} />
                <p>{comic.view}</p>
              </div>

              <div className="flex gap-1">
                <Image src={like}/>
                <p>{comic.comic_like}</p>
              </div>
            </div>
          </div>
        </div>


        <article className="absolute z-30 w-full px-[11px] pb-[100px] flex flex-col top-[470px] mobile:top-[540px] sm:top-[545px]">

          <div className="flex gap-8 text-[14px] justify-center items-center mb-[30px]">
            <p className="text-[#ffffff80]">ตอนที่</p>
            <p className="text-[#ffff] underline underline-offset-8 decoration-2 decoration-white">ข้อมูล</p>
            <p className="text-[#ffffff80]"> ตั๋ว</p>
          </div>



          <div className="bg-white/10 rounded-[20px] p-[18px] flex flex-col justify-start mb-[8px]">
            <div className="flex gap-1">
              <p className="bg-[#ff3042] rounded-[5px] h-[18px] px-[5px] text-[11px] font-bold text-white text-nowrap leading-5">{comic.status}</p>
              <p className="bg-[#ffff] rounded-[5px] h-[18px] px-[5px] text-[11px] font-bold text-balck text-nowrap leading-5">{comic.update_date}</p>
            </div>

            <dl className="mt-[12px] ">
              <div className="flex mb-[8px] text-[13px]">
                <dt className="text-[#ffffff80] mr-[8px] w-[54px]">เรื่อง</dt>
                <dd className="text-[#ffff]">{comic.story_by}</dd>
              </div>

              <div className="flex mb-[8px] text-[13px]">
                <dt className="text-[#ffffff80] mr-[8px] w-[54px]">ภาพ</dt>
                <dd className="text-[#ffff]">{comic.pictures_by}</dd>
              </div>

              <div className="flex mb-[8px] text-[13px]">
                <dt className="text-[#ffffff80] mr-[8px] w-[54px]">ต้นฉบับ</dt>
                <dd className="text-[#ffff]">{comic.original_by}</dd>
              </div>

              <div className="flex mb-[8px] text-[13px]">
                <dt className="text-[#ffffff80] mr-[8px] w-[54px]">เผยแพร่</dt>
                <dd className="text-[#ffff] ">{comic.share_by}</dd>
              </div>
            </dl>
          </div>



          <div className="bg-white/10 rounded-[20px] p-[18px] flex flex-col justify-start mb-[8px]">
            <p className="text-[16px] font-bold text-white text-nowrap  mb-[8px]">เรื่องย่อ</p>

            <span className="text-[13px]  text-white mb-[8px]">{comic.synosis}</span>
          </div>

        </article>

      </article>

    </section>
  )
}
