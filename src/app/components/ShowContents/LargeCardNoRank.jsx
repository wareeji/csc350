import Image from 'next/image'
import clock from '/public/clock3hours.svg'
import Link from 'next/link'

export default function LargeCardNoRank({ id, name, bgimage, chaimage, titleimage, storyby, picturesby, originalby, color0, color1, color2, color3 }) {
    return (
        <Link href={`/content/${id}`}>

            <article className="relative overflow-hidden">
                <div className="mt-[24px] z-[-1] rounded-[16px] overflow-hidden">
                    <div className="aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-2">
                        <Image className="w-full h-full object-cover object-top " src={bgimage} alt={name} width={500} height={500} />
                    </div>
                </div>

                <div className="absolute z-1 top-0 pb-[50px] h-full w-full ">
                    <Image className="h-full w-full object-top object-cover sm:object-contain " src={chaimage} alt={name} width={500} height={500} />
                </div>

                <div className={"absolute z-2 inset-x-0  bottom-0 rounded-[16px] w-full h-[150px] sm:h-[170px] lg:h-[200px]"}
                    style={{ backgroundImage: `linear-gradient(180deg, ${color0} 0%, ${color1} 33.33%, ${color2} 66.67%, ${color3} 100%)` }}></div>

                <div className="absolute flex flex-col justify-center items-center inset-x-0 bottom-[18px] z-3 text-center">

                    <Image className="h-full w-full max-w-[140px] lg:max-w-[180px]" src={titleimage} alt={name} width={500} height={500} />

                    <div className="mt-[6px] text-[#ffffffb6] text-[12px] text-nowrap "> {storyby}, {picturesby} ,{originalby} </div>

                    <div className="flex flex-row mt-[12px]">
                        <Image src={clock} />
                        <div className="bg-white h-[18px] rounded-r-[5px] px-[3px] flex justify-center items-center font-bold text-[10px]">3 ชม.</div>
                    </div>
                </div>
            </article >
        </Link>

    )
}