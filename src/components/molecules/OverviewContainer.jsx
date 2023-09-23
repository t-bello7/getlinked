import Button from "../atoms/Button"
import SectionHeader from "../atoms/SectionHeader";

const OverviewContainer = ({
    imgPath,
    overviewData
}) => {

    return (
    <div className="flex flex-col items-center pt-[12vh]">
        <div className="">
            <img src={imgPath}  alt={`${overviewData.title}-image`} />
        </div>
        <div className="text-center mt-14">
            <SectionHeader title={overviewData.title} subTitle={overviewData.subTitle}/>
            <p className="mt-2 font-montserrat">
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
            </p>
        </div> 
    </div>
)}

export default OverviewContainer;