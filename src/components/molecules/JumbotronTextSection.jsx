import Button from "../atoms/Button"
import chainIcon from "../../assets/icons/chain.png"
import creativeBulbIcon from "../../assets/icons/creative-bulb.png"
import starBlastIcon from "../../assets/icons/star-blast.png"
import whiteStar from "../../assets/icons/white-star.png"
import grayStar from "../../assets/icons/gray-star.png"
import vectorDesktopline from "../../assets/icons/vector-desk.svg"
import jumbotronBg1 from '../../assets/imgs/jumbotron-bg.png'
const JumbotronTextSection = () => {
    return (
        <div className="bg-darkColor px-[2ch] text-white flex flex-col items-center justify-center relative md:w-[50%] md:items-start">
            <img src={grayStar} alt="gray-star" className="absolute md:left-[110%] md:top-0" />
            <img src={grayStar} alt="gray-star" className="absolute left-[-30%] md:left-[65%] md:bottom-[10%]" />
            <img src={whiteStar} alt="gray-star" className="absolute top-[15%] left-[28%] z-20 md:left-[11%] md:top-[-20%]" />
            <img src={jumbotronBg1} alt="bg-img" className="absolute left-[-15%] top-[3%] z-10 md:top-[-55%] md:left-[10%]" />
            <span className="font-montserrat font-bold italic text-base z-20
                md:absolute md:top-[-25%] md:right-[-80%] md:text-3xl">
                <span>
                    Igniting a Revolution in HR Innovation
                </span>
                <img src={vectorDesktopline} alt="curve line" className="absolute left-[60%] w-[100px] md:w-[255px]"/>
            </span>
            <h1 className="font-bold text-3xl text-center font-clashDisplay mt-[8vh] md:text-[80px] md:leading-none md:text-left relative"> getlinked Tech <br/>
            <img src={creativeBulbIcon} alt="creative-bulb" className="absolute top-[-25%] left-[80%] w-[20px] md:w-[50px] md:left-[71%] md:top-[-35%]"/> 
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
            <Button name="Register" extraStyle="my-6 w-[25%]" />
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
