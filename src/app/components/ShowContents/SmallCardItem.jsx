import Image from 'next/image'
import clock from '/public/clock.svg'
import minus from '/public/minus.svg'
import Link from 'next/link'



export function SmallCardItem({ id, name, bgimage, chaimage, titleimage, rank, color0, color1, color2, color3 }) {
    return (
        <Link href={`/content/${id}`}>

            <article className="relative overflow-hidden">
                <div className="aspect-w-1 aspect-h-2 rounded-[8px] overflow-hidden z-[-1]">
                    <Image className="object-cover object-top w-full h-full " src={bgimage} alt={name} width={500} height={500} />
                </div>

                <div className="absolute z-1 top-5 pb-[50px] h-full w-full">
                    <Image className="w-full h-full object-top object-cover" src={chaimage} alt={name} width={500} height={500} />
                </div>

                < div className="absolute z-2 bottom-0  rounded-[8px] w-full h-1/2"
                    style={{ backgroundImage: `linear-gradient(180deg, ${color0} 0%, ${color1} 33.33%, ${color2} 66.67%, ${color3} 100%)` }}></div>

                <div className="absolute z-3 top-0 left-1 mt-[4px] w-full gap-x-1 flex flex-row rounded-[10px] ">
                    <Image src={clock} />
                </div>

                <div className="absolute z-3 bottom-[18px] inset-x-0 flex flex-col items-center gap-3 ">
                    <Image className="w-full max-w-[115px] lg:max-w-[150px]" src={titleimage} alt={name} width={500} height={500} />

                    <div className="bg-[#1c1c1c] px-[5px] flex flex-row justify-between items-center rounded-[5px] w-[60px] h-[16px] ">
                        <p className=" text-white text-[11.5px] font-bold ">{rank}</p>

                        <Image className="w-2" src={minus} />
                    </div>
                </div>
            </article>
        </Link>

    )
}

export function SmallCardItemCanHidden({ id, name, bgimage, chaimage, titleimage, rank, color0, color1, color2, color3 }) {
    return (
        <Link href={`/content/${id}`}>

            <article className="relative hidden overflow-hidden sm:block">

                <div className=" aspect-w-1 aspect-h-2 rounded-[8px] overflow-hidden z-[-1]">
                    <Image className="object-cover object-top w-full h-full" src={bgimage} alt={name} width={500} height={500} />
                </div>

                <div className="absolute z-1 top-5 pb-[50px] h-full w-full">
                    <Image className="object-cover object-top w-full h-full" src={chaimage} alt={name} width={500} height={500} />
                </div>

                < div className="absolute z-2 bottom-0  rounded-[8px] w-full h-1/2"
                    style={{ backgroundImage: `linear-gradient(180deg, ${color0} 0%, ${color1} 33.33%, ${color2} 66.67%, ${color3} 100%)` }}></div>

                <div className="absolute z-3 top-0 left-1 mt-[4px] w-full gap-x-1 flex flex-row rounded-[10px] ">
                    <Image src={clock} />
                </div>

                <div className="absolute z-3 bottom-[18px] inset-x-0 flex flex-col items-center gap-3 ">
                    <Image className="w-full max-w-[115px] lg:max-w-[150px]" src={titleimage} alt={name} width={500} height={500} />

                    <div className="bg-[#1c1c1c] px-[5px] flex flex-row justify-between items-center rounded-[5px] w-[60px] h-[16px] ">
                        <p className=" text-white text-[11.5px] font-bold ">{rank}</p>

                        <Image className="w-2" src={minus} />
                    </div>
                </div>
            </article>
        </Link>

    )
}