'use client'
import { useEffect, useState } from "react";
import LargeCard from "./components/ShowContents/LargeCard";
import { SmallCardItem, SmallCardItemCanHidden } from "./components/ShowContents/SmallCardItem";
import Header from './components/Header/Header';


export default function Home() {
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

  const [selectSmallAll, setSelectSmallAll] = useState([])
  useEffect(() => {
    const selectRandomSix = () => {
      const objs = Object.assign([], getAll)
      const randomSix = []
      const largestData = Object.assign({}, selectLargestAll)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallAll(randomSix)
    }
    selectRandomSix()
  }, [getAll, selectLargestAll])

  const [selectSmallAllcanHidden, setSelectSmallAllcanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getAll)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargestAll)
      const smallSixData = Object.assign([], selectSmallAll)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallAllcanHidden(randomTwo)
    }
    selectRandomTwoCanHidden()
  }, [getAll, selectLargestAll, selectSmallAll])


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
    const selectRandomSix = () => {
      const objs = Object.assign([], getAction)
      const randomSix = []
      const largestData = Object.assign({}, selectLargeAction)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallAction(randomSix)
    }

    selectRandomSix()
  }, [getAction, selectLargeAction])

  const [selectSmallActioncanHidden, setSelectSmallActioncanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getAction)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargeAction)
      const smallSixData = Object.assign([], selectSmallAction)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallActioncanHidden(randomTwo)
    }

    selectRandomTwoCanHidden()
  }, [getAction, selectLargeAction, selectSmallAction])

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
    const selectRandomSix = () => {
      const objs = Object.assign([], getYaoi)
      const randomSix = []
      const largestData = Object.assign({}, selectLargeYaoi)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallYaoi(randomSix)
    }

    selectRandomSix()
  }, [getYaoi, selectLargeYaoi])

  const [selectSmallYaoicanHidden, setSelectSmallYaoicanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getYaoi)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargeYaoi)
      const smallSixData = Object.assign([], selectSmallYaoi)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallYaoicanHidden(randomTwo)
    }

    selectRandomTwoCanHidden()
  }, [getYaoi, selectLargeYaoi, selectSmallYaoi])


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
    const selectRandomSix = () => {
      const objs = Object.assign([], getFR)
      const randomSix = []
      const largestData = Object.assign({}, selectLargeFR)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallFR(randomSix)
    }

    selectRandomSix()
  }, [getFR, selectLargeFR])

  const [selectSmallFRcanHidden, setSelectSmallFRcanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getFR)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargeFR)
      const smallSixData = Object.assign([], selectSmallFR)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallFRcanHidden(randomTwo)
    }

    selectRandomTwoCanHidden()
  }, [getFR, selectLargeFR, selectSmallFR])


  //romance
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
    const selectRandomSix = () => {
      const objs = Object.assign([], getR)
      const randomSix = []
      const largestData = Object.assign({}, selectLargeR)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallR(randomSix)
    }

    selectRandomSix()
  }, [getR, selectLargeR])

  const [selectSmallRcanHidden, setSelectSmallRcanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getR)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargeR)
      const smallSixData = Object.assign([], selectSmallR)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallRcanHidden(randomTwo)
    }

    selectRandomTwoCanHidden()
  }, [getR, selectLargeR, selectSmallR])


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
    const selectRandomSix = () => {
      const objs = Object.assign([], getDrama)
      const randomSix = []
      const largestData = Object.assign({}, selectLargeDrama)
      while (randomSix.length < 6 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        if (isNotDuplicate) {
          randomSix.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallDrama(randomSix)
    }

    selectRandomSix()
  }, [getDrama, selectLargeDrama])

  const [selectSmallDramacanHidden, setSelectSmallDramacanHidden] = useState([])
  useEffect(() => {
    const selectRandomTwoCanHidden = () => {
      const objs = Object.assign([], getDrama)
      const randomTwo = []
      const largestData = Object.assign({}, selectLargeDrama)
      const smallSixData = Object.assign([], selectSmallDrama)
      while (randomTwo.length < 2 && objs.length > 0) {
        const randomIndex = Math.floor(Math.random() * objs.length)
        const randomData = objs[randomIndex]
        // Check if randomData is not the same as the largestData
        const isNotDuplicate = JSON.stringify(randomData) !== JSON.stringify(largestData)
        const isNotInSmallSix = !smallSixData.some(item => JSON.stringify(item) === JSON.stringify(randomData))
        if (isNotDuplicate && isNotInSmallSix) {
          randomTwo.push(randomData)
        }
        objs.splice(randomIndex, 1)
      }
      setSelectSmallDramacanHidden(randomTwo)
    }

    selectRandomTwoCanHidden()
  }, [getDrama, selectLargeDrama, selectSmallDrama])


  return (
    <div>
      <Header/>
      
      <main className='relative flex flex-col my-0 mx-auto px-[11px] pt-[124px] w-full sm:w-[630px]'>
        {/* realtime */}
        <section className="mb-10">
          <article className="mt-[5px]">
            <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">เรียลไทม์ Top</p>
          </article>

          {selectLargestAll && (
            <LargeCard
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
            {selectSmallAll.map((one, index) => (
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

            {selectSmallAllcanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>


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

            {selectSmallActioncanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>




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

            {selectSmallYaoicanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>




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

            {selectSmallFRcanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>




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

            {selectSmallDramacanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>




        {/* romance */}
        <section className="mb-10">
          <article className="mt-[5px]">
            <p className="ml-[7px] text-[#ffffff] text-[16px] font-bold">โรแมนซ์ TOP</p>
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

            {selectSmallRcanHidden.map((one, index) => (
              <SmallCardItemCanHidden
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
                rank={index + 8} // เลข rank เริ่มต้นที่ 8 และเพิ่มขึ้นทีละ 1 ต่อรายการ
              />
            ))}
          </article>
        </section>
      </main>
    </div>
  )
}



