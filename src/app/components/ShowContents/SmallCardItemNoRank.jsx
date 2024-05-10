import Image from 'next/image'
import clock from '/public/clock3hours.svg'
import Link from 'next/link'

export default function SmallCardItemNoRank({ id, name, bgimage, chaimage, titleimage, color0, color1, color2, color3 }) {
    return (
        <Link href={`/content/${id}`}>

            <article className="relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-2 rounded-[8px] overflow-hidden z-[-1]">
                    <Image className="object-cover object-top w-full h-full" src={bgimage} alt={name} width={500} height={500} />
                </div>

                <div className="absolute z-1 top-5 pb-[50px] h-full w-full">
                    <Image className="object-cover object-top w-full h-full" src={chaimage} alt={name} width={500} height={500} />
                </div>

                < div className="absolute z-2 bottom-0  rounded-[8px] w-full h-1/2"
                    style={{ backgroundImage: `linear-gradient(180deg, ${color0} 0%, ${color1} 33.33%, ${color2} 66.67%, ${color3} 100%)` }}></div>

                <div className="absolute z-3 top-0 left-1 mt-[4px] w-full flex flex-row  ">
                    <Image src={clock} />
                    <div className="bg-white h-[18px] rounded-r-[5px] px-[3px] flex justify-center items-center font-bold text-[10px]">3 ชม.</div>
                </div>

                <div className="absolute z-3 bottom-[18px] inset-x-0 flex items-center ">
                    <Image className="w-full max-w-[115px] lg:max-w-[150px]" src={titleimage} alt={name} width={500} height={500} />
                </div>
            </article>
        </Link>

    )
}

