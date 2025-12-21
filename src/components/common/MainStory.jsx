import Image from "next/image"
import PlayButton from "./PlayButton"
export default function MainStory({img , title , pText}) {
    return (
        <div className="main_story">
            <div className="relative w-full h-[300px] md:h-[360px]">
                <Image src={"/images/Story1.png"} alt={"story image"} fill />
            </div>
            <div className="image_bottom flex items-center justify-between py-3.5 px-6 rounded-[0px_0px_8px_8px] bg-[#F9F9F9]">
                <div className="w-[80%]">
                    <h2 className="font-changa_one text-2xl leading-9 text-mydark mb-1">Zermatt, Switzerland</h2>
                    <p className="font-roboto text-[16px] leading-6.5 text-p mb-1">Marvel on the beauty of the iconic Matterhorn. Find the best places to stay that has the best views of this peak...</p>
                </div>
                <PlayButton className={"w-12 h-12"} fs={'text-[26px]'}/>
            </div>
        </div>
    )
}
