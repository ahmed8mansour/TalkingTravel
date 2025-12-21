export default function PlayButton({className ,fs}) {
    return (
            <div className={`${className} but_con bg-pink1 rounded-[50%] flex justify-center items-center cursor-pointer`}>
                <i className={`fa-solid fa-play text-white text-[20px] ${fs}`}></i>
            </div>
    )
}
