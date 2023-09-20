const Button = ({
    bgColor='primaryColor',
    color="white",
    name,
    variant="button",
    iconPath="",
    defaultStyle="cursor-pointer"
    }) => {
        switch (variant) {
            case "icon":
            return (
            <div className={`g p-2 rounded-sm z-50 md:hidden`} >
                <img src={iconPath} alt={`${name}-icon`}/>
            </div>)

            default:
                return (
            <button className={`bg-${bgColor} text-${color} py-2 px-4 rounded hover:bg-blue-300`}>
                {name}
            </button>
        )
        }
}

export default Button;