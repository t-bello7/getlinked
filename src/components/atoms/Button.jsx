const Button = ({
    bgColor='lightPurple',
    color="white",
    name,
    variant="button",
    iconPath="",
    defaultStyle="cursor-pointer hover:outline",
    extraStyle,
    onClick
    }) => {
        switch (variant) {
            case "icon":
            return (
            <button className={`p-2 rounded-sm md:hidden ${defaultStyle} ${extraStyle}`} onClick={onClick}>
                <img src={iconPath} alt={`${name}-icon`} className="hover:scale-125"/>
            </button>)

            default:
                return (
            <button className={`py-2 px-4 rounded hover:bg-blue-300 capitalize bg-lightPurple text-${color}  ${defaultStyle} ${extraStyle}`} onClick={onClick}>
                {name}
            </button>
        )
        }
}

export default Button;