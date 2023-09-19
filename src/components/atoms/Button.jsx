const Button = ({
    bgColor='primaryColor',
    color="white",
    name,
    variant="button"
    }) => {
        switch (variant) {
            case "icon":
            return (<div> ege</div>)

            default:
                return (
                     <button className={`bg-${bgColor} text-${color} py-2 px-4 rounded hover:bg-blue-300`}>
                {name}
            </button>
        )
        }
}

export default Button;