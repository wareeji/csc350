'use client'
import { useEffect, useState } from "react";
import LargeCard from "../components/ShowContents/LargeCard";
import { SmallCardItem } from "../components/ShowContents/SmallCardItem";
import Header from '../components/Header/Header.jsx';


export default function Page() {
    //yaoi
    const [getYaoi, setGetYaoi] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/yaoi')
            .then(res => res.json())
            .then((data) => {
                setGetYaoi(data)
                console.log(data)
            })
    }, [])

    const [selectLargeYaoi, setSelectlargeYaoi] = useState()
    useEffect(() => {
        const objs = Object(getYaoi)
        const theLargestData = objs[Math.floor(Math.random() * objs.length)]
        setSelectlargeYaoi(theLargestData)
    }, [getYaoi])

    const [selectSmallYaoi, setSelectSmallYaoi] = useState([])
    useEffect(() => {
        const objs = Object.assign([], getYaoi)
        const randomData = []
        const largestData = Object.assign({}, selectLargeYaoi)
        objs.forEach((data) => {
            const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
            if (isNotDuplicate) {
                randomData.push(data)
            }
        })
        setSelectSmallYaoi(randomData)
    }, [getYaoi, selectLargeYaoi])



    return (
        <div>
            <Header />

            <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>

                {/* yaoi */}
                <section className="mb-10">
                    <article className="mt-[5px]">
                        <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">วาย TOP</p>
                    </article>

                    {selectLargeYaoi && (
                        <LargeCard
                            id={selectLargeYaoi.comic_id}
                            name={selectLargeYaoi.commic_name}
                            bgimage={selectLargeYaoi.bg_img}
                            chaimage={selectLargeYaoi.character_img}
                            titleimage={selectLargeYaoi.comic_name_img}
                            storyby={selectLargeYaoi.story_by}
                            picturesby={selectLargeYaoi.pictures_by}
                            originalby={selectLargeYaoi.original_by}
                            color0={selectLargeYaoi.blur_bottom_color0}
                            color1={selectLargeYaoi.blur_bottom_color1}
                            color2={selectLargeYaoi.blur_bottom_color2}
                            color3={selectLargeYaoi.blur_bottom_color3}
                        />
                    )}

                    <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
                        {selectSmallYaoi.map((one, index) => (
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



