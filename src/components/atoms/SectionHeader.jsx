const SectionHeader = ({
    title,
    subTitle
}) => {
    return (
        <h3 className="font-clashDisplay font-bold text-xl">
            <span> {title} </span> <br />
            <span className="text-lightPurple"> {subTitle} </span>
        </h3>
    )
}

export default SectionHeader;