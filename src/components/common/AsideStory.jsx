import Image from "next/image"
export default function AsideStory({img , title ,pText , spanText}) {
    return (
        <div className=" flex items-start [&:not(:last-child)]:mb-3 sm:content-between content-start sm:h-[148px] h-[280px] gap-x-5 flex-wrap">
            <div className="img_cont relative sm:h-full w-full h-1/2 sm:w-1/3 ">
                <Image src={img} alt="story image" fill />
            </div>
            <div className="lg:pt-2.5 lg:pb-2.5 sm:w-[60%]">
                <h2 className="font-changa_one lg:text-2xl text-xl leading-9 text-mydark">{title}</h2>
                <p className="font-roboto lg:text-[16px] text-[15px] lg:leading-6.5 leading-6 text-p">{pText}.<span className="text-pink1">{spanText}</span></p>
            </div>
        </div>
    )
}
