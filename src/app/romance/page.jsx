'use client'
import { useEffect, useState } from "react";
import LargeCard from "../components/ShowContents/LargeCard";
import { SmallCardItem, SmallCardItemCanHidden } from "../components/ShowContents/SmallCardItem";
import Header from '../components/Header/Header.jsx';


export default function Page() {
    //fantasy_romance
    const [getR, setGetR] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/romance')
            .then(res => res.json())
            .then((data) => {
                setGetR(data)
                console.log(data)
            })
    }, [])

    const [selectLargeR, setSelectlargeR] = useState()
    useEffect(() => {
        const objs = Object(getR)
        const theLargestData = objs[Math.floor(Math.random() * objs.length)]
        setSelectlargeR(theLargestData)
    }, [getR])

    const [selectSmallR, setSelectSmallR] = useState([])
    useEffect(() => {
        const objs = Object.assign([], getR)
        const randomData = []
        const largestData = Object.assign({}, selectLargeR)
        objs.forEach((data) => {
            const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
            if (isNotDuplicate) {
                randomData.push(data)
            }
        })
        setSelectSmallR(randomData)

    }, [getR, selectLargeR])



    return (
        <div> 
            <Header />
            
            <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
                {/* fantasy_romance */}
                <section className="mb-10">
                    <article className="mt-[5px]">
                        <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">โรแมนซ์แฟนตาซี TOP</p>
                    </article>

                    {selectLargeR && (
                        <LargeCard
                            id={selectLargeR.comic_id}
                            name={selectLargeR.commic_name}
                            bgimage={selectLargeR.bg_img}
                            chaimage={selectLargeR.character_img}
                            titleimage={selectLargeR.comic_name_img}
                            storyby={selectLargeR.story_by}
                            picturesby={selectLargeR.pictures_by}
                            originalby={selectLargeR.original_by}
                            color0={selectLargeR.blur_bottom_color0}
                            color1={selectLargeR.blur_bottom_color1}
                            color2={selectLargeR.blur_bottom_color2}
                            color3={selectLargeR.blur_bottom_color3}
                        />
                    )}

                    <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
                        {selectSmallR.map((one, index) => (
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



