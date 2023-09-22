import Button from "../atoms/Button";
const JumbotronTextSection = () => {
    return (
        <div className="bg-darkColor px-[2ch] md:w-[50%] text-white flex flex-col items-center justify-center">
            <span className="font-montserrat font-bold italic text-base"> Igniting a Revolution in HR Innovation </span>
            <h1 className="font-bold text-3xl text-center font-clashDisplay mt-[8vh]"> getlinked Tech <br/> 
                <span className="text-primaryColor"> Hackathon 1.0 </span>
            </h1>
            <p className="text-center mt-[2vh]"> Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize </p>
            <Button name="Register" extraStyle={"my-6   "} />
            <div className="flex w-60 justify-around">
                <div className="flex items-end">
                    <span className="text-5xl font-unicaOne">
                        00
                    </span>
                    <span className="text-sm font-montserrat">
                        H
                    </span>
                </div>
                <div className="flex items-end">
                    <span className="text-5xl font-unicaOne">
                        00
                    </span>
                    <span className="text-sm font-montserrat">
                        S
                    </span>
                </div>
                <div className="flex items-end">
                    <span className="text-5xl font-unicaOne">
                        00
                    </span>
                    <span className="text-sm font-montserrat">
                        M
                    </span>
                </div>
            </div>
        </div>
    )
}

export default JumbotronTextSection;
