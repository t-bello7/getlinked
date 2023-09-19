import CampaignCard from "./molecules/CampaignCard"

const campaigns = [
    {
        id: '231#',
        tag: 'Health',
        title: 'Health is the root of all happiness',
        description: 'Efficiently streamline value strategic theme myocardinate emerging channels',
        targetAmount: 90000,
        raisedAmount: 66010
    },
    {
        id: '232#',
        tag: 'Education',
        title: 'Education is the Backbone of a nation',
        description: 'Efficiently streamline value strategic theme myocardinate emerging channels',
        targetAmount: 1290000,
        raisedAmount: 90010
    },
    {
        id: '2322#',
        tag: 'Education',
        title: 'Education is the Backbone of a nation',
        description: 'Efficiently streamline value strategic theme myocardinate emerging channels',
        targetAmount: 1290000,
        raisedAmount: 90010
    }, 
    {
        id: '32322#',
        tag: 'Education',
        title: 'Education is the Backbone of a nation',
        description: 'Efficiently streamline value strategic theme myocardinate emerging channels',
        targetAmount: 1290000,
        raisedAmount: 90010
    },
]

const CampaignSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto mb-[10vh] flex flex-col items-center gap-12 md:flex-row md:overflow-scroll">
            {
                campaigns.map(item => <CampaignCard key={item.id} campaign={item}/>)
            }
        </div>
    )
}


export default CampaignSection
