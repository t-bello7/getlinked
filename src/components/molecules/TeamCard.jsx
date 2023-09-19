
const TeamCard = ({imgUrl, name}) => {
    return (
        <div className=" w-[405px] relative md:grow-0 md:shrink-0">
            <img src={imgUrl} className="w-full h-fit" />

            <div className="bg-darkColor absolute left-[50%] translate-x-[-50%] bottom-[20%] p-4 rounded text-white">
                <span>
                {name}
                </span>
            </div>
        </div>
    )
}

export default TeamCard;