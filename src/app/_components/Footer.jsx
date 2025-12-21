import {
  PopoverGroup,
} from '@headlessui/react'
export default function Footer() {
    return (
        <div className="footer_cont pt-8 pb-8">
                <div className="container mx-auto px-4">
                    <div className="footer_content flex justify-between items-center flex-wrap">
                        <div className=" md:w-[revert] w-full md:mx-[revert] mx-auto text-center md:mb-0 mb-5">
                          <p className='font-roboto text-[14px] leading-4 text-[#939EB4]'> © 2022, Talking Travel. All Rights Reserved.</p>
                        </div>
                        <PopoverGroup className="flex items-center footer:flex-row flex-col gap-x-12 gap-y-4 flex-wrap footer:justify-center md:mx-[revert] mx-auto">
            
                            <a href="#" className="text-[14px] leading-4 font-roboto text-[#939EB4] hover:text-pink1">
                              Home
                            </a>


                            <a href="#" className="text-[14px] leading-4 font-roboto text-[#939EB4] hover:text-pink1">
                              Story
                            </a>

                            <a href="#" className="text-[14px] leading-4 font-roboto text-[#939EB4] hover:text-pink1">
                              Gallery
                            </a>

                            <a href="#" className="text-[14px] leading-4 font-roboto text-[#939EB4] hover:text-pink1">
                              Contact Us
                            </a>
          
                        </PopoverGroup>
                    </div>
                </div>
        </div>
    )
  
}


