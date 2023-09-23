import Button from "../atoms/Button"
import SectionHeader from "../atoms/SectionHeader";

const OverviewContainer = ({
    imgPath,
    overviewData,
    direction
}) => {
    return (
    <div className="grid justify-items-center pt-[12vh] md:grid-cols-2 md:items-center">
        <div className={`${direction === 'rtl' ? 'order-last': ''} `}>
            <img src={imgPath}  alt={`${overviewData.title}-image`} />
        </div>
        <div className="text-center mt-14 md:text-left">
            <SectionHeader title={overviewData.title} subTitle={overviewData.subTitle}/>
            <div className="mt-2 font-montserrat md:text-[14px]">
                {
                    Array.isArray(overviewData.content) ?
                    (
                        <div>
                        {overviewData.content.map(item => (
                            <div key={item.key} className="mb-5 text-sm">
                                <span className="text-darkPink">
                                    {item.title}
                                </span>
                                <span className="text-xs">
                                    {item.subTitle}
                                </span>
                            </div>
                        ))}
                        <Button name="Read More" />
                        </div>

                    ): (
                        overviewData.content
                    )
                }
            </div>
        </div> 
    </div>
)}

export default OverviewContainer;