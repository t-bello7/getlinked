import SectionHeader from "./atoms/SectionHeader"
import winnerCupImage from "../assets/imgs/winner-cup.png"
import goldMedalImage from "../assets/imgs/gold-medal.png"
import silverMedalImage from "../assets/imgs/silver-medal.png"
import bronzeMedalImage from "../assets/imgs/bronze-medal.png"

const PrizeSection = () => {
    return (
        <div className="container mx-auto max-w-[80%] my-10"> 
            <div className="text-center">
                <SectionHeader title="Prizes and " subTitle="Rewards" />
                <p>
                    Highlight of the prizes or rewards for winners 
                    and for participants.
                </p>
            </div>
            <img src={winnerCupImage} alt="winner cup image" className="py-12"/>
            <div className="flex my-24">
                <div className="text-center w-[30%] aspect-[1/2] border border-lightPurple rounded-lg relative">
                    <div className="absolute top-[50%] h-[40px] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                        <span className="text-lightPurple">2nd <br/> Runner</span> <br/>
                        <span className="text-lightPurple"> N300,000 </span>
                    </div>
                    <img src={silverMedalImage} alt="silver medal image" className="absolute left-[50%] translate-x-[-50%] top-[-30%]" />
                </div>
                <div className="text-center w-[30%] aspect-[1/2] border border-lightPurple rounded-lg relative">
                    <div className="absolute top-[50%] h-[40px] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                        <span className="text-lightPurple">2nd <br/> Runner</span> <br/>
                        <span className="text-lightPurple"> N300,000 </span>
                    </div>
                    <img src={goldMedalImage} alt="silver medal image" className="absolute left-[50%] translate-x-[-50%] top-[-60%]" />
                </div>
                <div className="text-center w-[30%] aspect-[1/2] border border-lightPurple rounded-lg relative">
                    <div className="absolute top-[50%] h-[40px] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                        <span className="text-lightPurple">2nd <br/> Runner</span> <br/>
                        <span className="text-lightPurple"> N300,000 </span>
                    </div>
                    <img src={bronzeMedalImage} alt="silver medal image" className="absolute left-[50%] translate-x-[-50%] top-[-40%]" />
                </div>
            </div>
        </div>
    )
}

export default PrizeSection
