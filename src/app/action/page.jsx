'use client'
import { useEffect, useState } from "react";
import LargeCard from "../components/ShowContents/LargeCard";
import { SmallCardItem } from "../components/ShowContents/SmallCardItem";
import Header from '../components/Header/Header.jsx';


export default function Page() {
    //action
    const [getAction, setGetAction] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/action')
            .then(res => res.json())
            .then((data) => {
                setGetAction(data)
                console.log(data)
            })
    }, [])

    const [selectLargeAction, setSelectlargeAction] = useState()
    useEffect(() => {
        const objs = Object(getAction)
        const theLargestData = objs[Math.floor(Math.random() * objs.length)]
        setSelectlargeAction(theLargestData)
    }, [getAction])

    const [selectSmallAction, setSelectSmallAction] = useState([])
    useEffect(() => {
        const objs = Object.assign([], getAction)
        const largestData = Object.assign({}, selectLargeAction)
        const randomData = []

        objs.forEach((data) => {
            const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
            if (isNotDuplicate) {
                randomData.push(data)
            }
        })
        
        setSelectSmallAction(randomData)
    }, [getAction, selectLargeAction])


    return (
        <div>
            <Header />

            <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
                {/* action */}
                <section className="mb-10">
                    <article className="mt-[5px]">
                        <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">แอ็กชั่น TOP</p>
                    </article>

                    {selectLargeAction && (
                        <LargeCard
                            id={selectLargeAction.comic_id}
                            name={selectLargeAction.commic_name}
                            bgimage={selectLargeAction.bg_img}
                            chaimage={selectLargeAction.character_img}
                            titleimage={selectLargeAction.comic_name_img}
                            storyby={selectLargeAction.story_by}
                            picturesby={selectLargeAction.pictures_by}
                            originalby={selectLargeAction.original_by}
                            color0={selectLargeAction.blur_bottom_color0}
                            color1={selectLargeAction.blur_bottom_color1}
                            color2={selectLargeAction.blur_bottom_color2}
                            color3={selectLargeAction.blur_bottom_color3}
                        />
                    )}

                    <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
                        {selectSmallAction.map((one, index) => (
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



