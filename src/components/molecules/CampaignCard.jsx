import { useLocation } from 'react-router-dom';
import timeIcon from "../../assets/icons/time.png"

const CampaignCard = ({campaign}) => {
    const { tag,
            title,
            description,
            raisedAmount,
            targetAmount } = campaign
    let { pathname } = useLocation();
    return (
        <div className={`text-white w-[85%] h-[29rem] py-[10vh] px-[3ch] shadow-md shadow-white space-y-2 ${pathname == '/donations' ? 'md:w-[30rem]' : 'md:w-[800px] md:grow-0 md:shrink-0'}`}>
            <div className="flex gap-5">
                <div className="bg-secondaryColor w-fit text-sm p-1 rounded">{tag}</div>
                <div className="w-full flex gap-1">
                    <img src={timeIcon} alt="timeIcon"/>
                    <span className="text-gray text-md"> 20 days left </span>
                </div>
            </div>
            <h2 className="text-3xl"> {title} </h2>
            <p> {description} </p>

            <div className="flex justify-between">
                <span className="flex gap-1">
                    <span>
                        ${raisedAmount}
                    </span>
                    <span className="text-gray">
                        Raised
                    </span>
                </span>
                <span className="flex gap-1">
                    <span>
                        ${targetAmount}
                    </span>
                    <span className="text-gray">
                        Target
                    </span>
                </span>
            </div>
        </div>
    )
}

export default CampaignCard;
