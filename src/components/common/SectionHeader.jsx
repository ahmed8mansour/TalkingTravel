export default function Header({pretitle , title}){
    return(
        <div className="header_con text-center">
            <span className="font-roboto font-bold text-[18px] leading-5 text-pink1 uppercase tracking-[.06em]">{pretitle}</span>
            <h1 className="font-changa_one font-bold text-[39px] leading-10 text-mydark uppercase tracking-[.06em] mt-2">{title}</h1>

        </div>
    )
}

