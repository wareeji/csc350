'use client'
import { useEffect, useState } from "react";
import LargeCardNoRank from "../components/ShowContents/LargeCardNoRank";
import SmallCardItemNoRank from "../components/ShowContents/SmallCardItemNoRank";
import Header from '../components/Header/Header';


export default function Page() {
    //realtime
    const [getAll, setGetAll] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/api/alltype')
            .then(res => res.json())
            .then((data) => {
                setGetAll(data)
            })
    }, [])

    const [selectLargestAll, setSelectlargestAll] = useState()
    useEffect(() => {
        const objs = Object(getAll)
        const theLargestData = objs[Math.floor(Math.random() * objs.length)]
        setSelectlargestAll(theLargestData)
    }, [getAll])

    const [selectSmallAll, setSelectSmallAll] = useState([]);
    useEffect(() => {
        const objs = Object.assign([], getAll)
        const randomData = []
        const largestData = Object.assign({}, selectLargestAll)
        objs.forEach((data) => {
            const isNotDuplicate = JSON.stringify(data) !== JSON.stringify(largestData)
            if (isNotDuplicate) {
                randomData.push(data)
            }
        })
        setSelectSmallAll(randomData)

    }, [getAll, selectLargestAll])



    return (
        <div>
            <Header/>

            <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
                {/* realtime */}
                <section className="mb-10">

                    {selectLargestAll && (
                        <LargeCardNoRank
                            id={selectLargestAll.comic_id}
                            name={selectLargestAll.commic_name}
                            bgimage={selectLargestAll.bg_img}
                            chaimage={selectLargestAll.character_img}
                            titleimage={selectLargestAll.comic_name_img}
                            storyby={selectLargestAll.story_by}
                            picturesby={selectLargestAll.pictures_by}
                            originalby={selectLargestAll.original_by}
                            color0={selectLargestAll.blur_bottom_color0}
                            color1={selectLargestAll.blur_bottom_color1}
                            color2={selectLargestAll.blur_bottom_color2}
                            color3={selectLargestAll.blur_bottom_color3}
                        />
                    )}

                    <article className="mt-1 gap-[4px] grid grid-cols-3 grid-rows-2 sm:grid-cols-4 sm:grid-rows-2 ">
                        {selectSmallAll.map((one) => (
                            <SmallCardItemNoRank
                                id={one.comic_id}
                                name={one.commic_name}
                                bgimage={one.bg_img}
                                chaimage={one.character_img}
                                titleimage={one.comic_name_img}
                                color0={one.blur_bottom_color0}
                                color1={one.blur_bottom_color1}
                                color2={one.blur_bottom_color2}
                                color3={one.blur_bottom_color3}
                            />
                        ))}

                    </article>
                </section>
            </main>
        </div>
    )
}



