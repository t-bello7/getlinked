const Button = ({
    bgColor='lightPurple',
    color="white",
    name,
    variant="button",
    iconPath="",
    defaultStyle="cursor-pointer",
    extraStyle,
    onClick
    }) => {
        switch (variant) {
            case "icon":
            return (
            <button className={`${defaultStyle} p-2 rounded-sm z-50 md:hidden`} onClick={onClick}>
                <img src={iconPath} alt={`${name}-icon`}/>
            </button>)

            default:
                return (
            <button className={`bg-${bgColor} text-${color} py-2 px-4 rounded hover:bg-blue-300 capitalize ${defaultStyle} ${extraStyle}`} onClick={onClick}>
                {name}
            </button>
        )
        }
}

export default Button;