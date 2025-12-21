import AsideStory from "@/components/common/AsideStory"
import MainStory from "@/components/common/MainStory"
import PlayButton from "@/components/common/PlayButton"
import Header from "@/components/common/SectionHeader"
import Image from "next/image"
export default function RecentStory() {
    return (
        <div className="recentstroy_section pb-21 pt-21">
                <div className="container mx-auto px-4">
                    <Header pretitle={"catch up to our posts"}  title={"Recent story entries"}/>
                    <div className="stories_cont grid lg:grid-cols-2 grid-cols-1 gap-x-6 mt-7.5 ">
                        <div className="p-5">
                            <MainStory img ={"/images/Story1.png"} title={""} pText=""/>
                        </div>
                        <div className="p-5 flex flex-col justify-between items-center flex-wrap">
                            <AsideStory img={"/images/Story2.png"} title={"Tuscany, Italy"} pText={"The amazing Tuscany is home to famous Renaissance art and architecture and a vast scenic landscape."} spanText={"view full blog..."}/>
                            <AsideStory img={"/images/Story3.png"} title={"Kyoto, Japan"} pText={"Kyoto is well known for its temples, gardens, Shinto shrines and wooden houses. It’s time to visit tokyo."} spanText={"view full blog..."}/>
                            <AsideStory img={"/images/Story4.png"} title={"Lofoten Islands, Norway"} pText={"Featuring razor-sharp peaks housing the arctic landscape. This astonishing island is perfect for your next postcard."} spanText={"view full blog..."}/>
                        </div>

                    </div>
                </div>
        </div>
    )

}



