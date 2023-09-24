import Button from "../atoms/Button"
import chainIcon from "../../assets/icons/chain.png"
import creativeBulbIcon from "../../assets/icons/creative-bulb.png"
import curvelineImg from "../../assets/icons/curve-line.svg"
import starBlastIcon from "../../assets/icons/star-blast.png"
import vectorDesktopline from "../../assets/icons/vector-desk.svg"

const JumbotronTextSection = () => {
    return (
        <div className="bg-darkColor px-[2ch] text-white flex flex-col items-center justify-center relative md:w-[50%] md:items-start">
            {/* <div
            className="w-96 h-96 rounded-[50%] overflow-hidden blur-[56px]"
            style={{
              background:
                "radial-gradient(34.85% 34.85% at 50% 50%, rgba(245, 185, 255, 0.5) 0%, rgba(121, 255, 191, 0.125) 50.52%, rgba(187, 251, 255, 0.02) 100%)"
            }}
          ></div> */}
            <span className="font-montserrat font-bold italic text-base
                md:absolute md:top-0 md:right-[-80%] md:text-3xl">
                <span>
                    Igniting a Revolution in HR Innovation
                </span>
                <img src={vectorDesktopline} alt="curve line" className="absolute left-[60%] w-[100px] md:w-[255px]"/>
            </span>
            <h1 className="font-bold text-3xl text-center font-clashDisplay mt-[8vh] md:text-[80px] md:leading-none md:text-left"> getlinked Tech <br/> 
                <span className="flex items-center">
                    Hackathon
                    <span className="text-lightPurple">1.0 </span>  
                    <span className="flex h-inherit h-[28px] aspect-[2/1] md:h-[80px]">
                        <img src={chainIcon} alt="chain-icon" />
                        <img src={starBlastIcon} alt="star-blast-icon" />
                    </span>
                </span>
            </h1>
            <p className="text-center mt-[2vh] md:text-xl md:text-left"> Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize </p>
            <Button name="Register" extraStyle={"my-6   "} />
            <div className="flex w-60 justify-around">
                <div className="flex items-end align-baseline">
                    <span className="text-5xl font-unicaOne md:text-7xl">
                        00
                    </span>
                    <span className="text-sm font-montserrat">
                        H
                    </span>
                </div>
                <div className="flex items-end">
                    <span className="text-5xl font-unicaOne md:text-7xl">
                        00
                    </span>
                    <span className="text-sm font-montserrat">
                        S
                    </span>
                </div>
                <div className="flex items-end">
                    <span className="text-5xl font-unicaOne md:text-7xl">
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
