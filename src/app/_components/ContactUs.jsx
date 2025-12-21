import Header from "@/components/common/SectionHeader"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Button } from "@/components/ui/button"

export default function ContactUS(){
    return(
        <div className="contact_section pb-18 mt-10 pt-14 bg-[url('/images/contactBG.png')] bg-no-repeat bg-cover bg h-[900px]">
            <div className="container mx-auto px-4">
                <Header pretitle={"Let’s build a community"} title={"Join our next destination"} />
                <form className="flex flex-col items-start p-[28px_30px] lg:w-[620px] bg-white rounded-[12px] shadow-[0px_0px_24px_rgba(0, 0, 0, 0.03)] mt-7.5 mx-auto"> 
                    <h2 className=" font-changa_one text-2xl leading-9 text-mydark mb-2">Share your travels</h2>
                    <p className=" font-roboto text-[18px]  leading-8 text-p">Suggest a new travel destination that you want to see and we will feature it in our blog.</p>
                    <InputGroup className={"rounded-[0px] mt-4 h-14 "}>
                        <InputGroupInput placeholder="Destination name" className={"font-roboto text-[16px] leading-6"} />
                    </InputGroup>
                    <InputGroup className={"rounded-[0px] mt-2 h-14 "}>
                        <InputGroupInput placeholder="Country of Destination" className={"font-roboto text-[16px] leading-6"} />
                    </InputGroup>

                    <InputGroup className={"rounded-[0px] mt-2 h-14 "}>
                        <InputGroupInput placeholder="Your name" className={"font-roboto text-[16px] leading-6"} />
                    </InputGroup>

                    <InputGroup className={"rounded-[0px] mt-2 h-14 "}>
                        <InputGroupInput placeholder="Shooting category" className={"font-roboto text-[16px] leading-6"} />
                    </InputGroup>

                    <InputGroup className={"rounded-[0px] mt-2  "}>
                        <InputGroupTextarea placeholder="Describe what kind of photos you want to focus on" className={"font-roboto text-[16px] leading-6 h-25.5"} />
                    </InputGroup>

                    <Button className={"bg-pink1 w-[220px] h-11.5 mt-3 font-roboto text-[16px] leading-5 text-white hover:bg-pink1 cursor-pointer hover:opacity-85"} type ="submit">Submit</Button>


                </form>
            </div>
        </div>
    )
}


