import libertyLogoImg from "../assets/imgs/liberty-logo.png"
import whispersmsLogoImg from "../assets/imgs/whisper-logo.png"
import payboxLogoImg from "../assets/imgs/paybox-logo.svg"
import winwiseLogoImg from "../assets/imgs/winwise-logo.png"
import libertyPayLogoImg from "../assets/imgs/libertyPay-logo.png"
import visualPlusLogoImg from "../assets/imgs/visualplus-logo.svg"

const PartnerData = [
    {
        key: "2x3z",
        partnerLogoPath: libertyLogoImg
    },
    {
        key: "3x3x",
        partnerLogoPath: libertyPayLogoImg
    },
    {
        key: "22x",
        partnerLogoPath: winwiseLogoImg
    },
    {
        key: "21ex",
        partnerLogoPath: whispersmsLogoImg
    },
    {
        key: "423z",
        partnerLogoPath: payboxLogoImg
    },    
    {
        key: "3x324",
        partnerLogoPath: visualPlusLogoImg
    }
]

const PartnerSection = () => {
    return (
    <div className="container mx-auto max-w-[80%] my-10 grid justify-items-center">
        <h3 className="text-center font-clashDisplay font-bold text-xl"> Partners and Sponsors </h3>
        <p className="text-center text-sm font-montserrat">
            Here is the breakdown of the time we anticipate using for the upcoming event.
        </p>
        <div className="w-[80%] my-24 border border-lightPurple aspect-[2/1] rounded grid grid-cols-3 gap-4 p-5">
            {
                PartnerData.map((item)=> (
                    <div className="relative border-l border-b border-lightPurple " key={item.key}> 
                        <div className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]">
                            <img src={item.partnerLogoPath} />
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default PartnerSection;