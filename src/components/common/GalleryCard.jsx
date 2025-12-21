import Image from "next/image"
export default function GalleryCard({img , city}){
    return(
        <div className="p-2.5 text-center">
            <div className="w-full min-h-[320px] relative mb-2.5">
                <Image src={img}  alt ={"city image"} fill />
            </div>
            <h2 className="font-changa_one text-2xl leading-9 text-mydark mb-1">{city}</h2>
            <span className=" font-roboto text-[16px] leading-5 text-pink1">Discover</span>

        </div>
    )
}
