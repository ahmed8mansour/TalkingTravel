import Image from 'next/image'  

export default function Hero(){
    return(
        <div className='Hero'>
            <div className='hero_image_container h-[580px] relative'>

                <Image
                src={"/images/hero_image.png"}
                alt="hero image"
                fill
                className='object-cover'
                />
            </div>
        </div>


    )
}