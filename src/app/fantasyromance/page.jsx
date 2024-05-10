'use client'
import { useEffect, useState } from "react";
import LargeCard from "../components/ShowContents/LargeCard";
import { SmallCardItem } from "../components/ShowContents/SmallCardItem";
import Header from '../components/Header/Header.jsx';


export default function Page() {
  //fantasy_romance
  const [getFR, setGetFR] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/fantasy_romance')
      .then(res => res.json())
      .then((data) => {
        setGetFR(data)
        console.log(data)
      })
  }, [])

  const [selectLargeFR, setSelectlargeFR] = useState()
  useEffect(() => {
    const objs = Object(getFR)
    const theLargestData = objs[Math.floor(Math.random() * objs.length)]
    setSelectlargeFR(theLargestData)
  }, [getFR])

  const [selectSmallFR, setSelectSmallFR] = useState([])
  useEffect(() => {
    const objs = Object.assign([], getFR)
    const randomData = []
    const largestData = Object.assign({}, selectLargeFR)
    objs.forEach((data) => {
      const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
      if (isNotDuplicate) {
        randomData.push(data)
      }
    })
    setSelectSmallFR(randomData)

  }, [getFR, selectLargeFR])



  return (
    <div><Header />
      <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
        {/* fantasy_romance */}
        <section className="mb-10">
          <article className="mt-[5px]">
            <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">โรแมนซ์แฟนตาซี TOP</p>
          </article>

          {selectLargeFR && (
            <LargeCard
              id={selectLargeFR.comic_id}
              name={selectLargeFR.commic_name}
              bgimage={selectLargeFR.bg_img}
              chaimage={selectLargeFR.character_img}
              titleimage={selectLargeFR.comic_name_img}
              storyby={selectLargeFR.story_by}
              picturesby={selectLargeFR.pictures_by}
              originalby={selectLargeFR.original_by}
              color0={selectLargeFR.blur_bottom_color0}
              color1={selectLargeFR.blur_bottom_color1}
              color2={selectLargeFR.blur_bottom_color2}
              color3={selectLargeFR.blur_bottom_color3}
            />
          )}

          <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
            {selectSmallFR.map((one, index) => (
              <SmallCardItem
                key={index} // ใช้ index เป็น key สำหรับการแสดงผลในการแมพ
                id={one.comic_id}
                name={one.commic_name}
                bgimage={one.bg_img}
                chaimage={one.character_img}
                titleimage={one.comic_name_img}
                color0={one.blur_bottom_color0}
                color1={one.blur_bottom_color1}
                color2={one.blur_bottom_color2}
                color3={one.blur_bottom_color3}
                rank={index + 2} // เลข rank เริ่มต้นที่ 2 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>
      </main>
    </div>
  )
}



