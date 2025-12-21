import Image from 'next/image'  

import PlayButton from '@/components/common/PlayButton'
export default function Story(){
    return(
        <div className="Story_section py-28 ">
            <div className="container mx-auto px-4">
                <div className="story_content grid grid-cols-1 md:grid-cols-2">
                    <div className="story_image_cont">
                        <div className="story_image_cont relative w-[100%] min-h-[380px] md:w-[80%] md:min-h-[340px]">
                            <Image src={"/images/Featured Image.png"} alt="story image" fill />
                        </div>
                    </div>
                    <div className=' md:order-last order-first md:mb-0 mb-4.5'> 
                        <p className='text-pink1 font-roboto text-[18px] font-bold tracking-[.06em] uppercase mb-3! pt-3'>Featured Destination</p>
                        <h1 className='text-mydark font-changa_one text-[39px]  leading-[36px] mb-3'>Our swiss adventure blog</h1>
                        <p className=' text-mydark font-roboto text-[18px]  leading-[33px] mb-5 lg:w-[70%]'>Visiting the swiss alps? Want to know the requirements on travelling to Switzerland during the pandemic? Our blog might help! </p>
                        <div className='play_cont flex items-center pt-4 '>
                            <PlayButton className={"w-9 h-9"} fs={"text-[20px]"}/>
                            <span className='font-roboto text-[16px] text-pink1 leading-9 ml-2.5'>Watch Now</span>

                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}