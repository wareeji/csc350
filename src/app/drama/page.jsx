'use client'
import { useEffect, useState } from "react";
import LargeCard from "../components/ShowContents/LargeCard";
import { SmallCardItem } from "../components/ShowContents/SmallCardItem";
import Header from '../components/Header/Header.jsx';


export default function Page() {
    //drama
    const [getDrama, setGetDrama] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/drama')
            .then(res => res.json())
            .then((data) => {
                setGetDrama(data)
                console.log(data)
            })
    }, [])

    const [selectLargeDrama, setSelectlargeDrama] = useState()
    useEffect(() => {
        const objs = Object(getDrama)
        const theLargestData = objs[Math.floor(Math.random() * objs.length)]
        setSelectlargeDrama(theLargestData)
    }, [getDrama])

    const [selectSmallDrama, setSelectSmallDrama] = useState([])
    useEffect(() => {
        const objs = Object.assign([], getDrama)
        const randomData = []
        const largestData = Object.assign({}, selectLargeDrama)
        objs.forEach((data) => {
            const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
            if (isNotDuplicate) {
                randomData.push(data)
            }
        })
        setSelectSmallDrama(randomData)
    }, [getDrama, selectLargeDrama])



    return (
        <div><Header />

            <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
                {/* drama*/}
                <section className="mb-10">
                    <article className="mt-[5px]">
                        <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">ดราม่า TOP</p>
                    </article>

                    {selectLargeDrama && (
                        <LargeCard
                            id={selectLargeDrama.comic_id}
                            name={selectLargeDrama.commic_name}
                            bgimage={selectLargeDrama.bg_img}
                            chaimage={selectLargeDrama.character_img}
                            titleimage={selectLargeDrama.comic_name_img}
                            storyby={selectLargeDrama.story_by}
                            picturesby={selectLargeDrama.pictures_by}
                            originalby={selectLargeDrama.original_by}
                            color0={selectLargeDrama.blur_bottom_color0}
                            color1={selectLargeDrama.blur_bottom_color1}
                            color2={selectLargeDrama.blur_bottom_color2}
                            color3={selectLargeDrama.blur_bottom_color3}
                        />
                    )}

                    <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
                        {selectSmallDrama.map((one, index) => (
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



