import { Timeline } from 'antd';

const EventData = [
    {
        key: 1,
        dateTime: "November 18, 2023",
        title: "Hackathon Announcement",
        content: `The getlinked tech hackathon 1.0 is formally announced
        to the general public and teams begin to get ready to register`
    },
    {
        key: 2,
        dateTime: "November 18, 2023",
        title: "Teams Registration begins",
        content: `Interested teams can now show their interest in the
        getlinked tech hackathon 1.0 2023 by proceeding to register`
    },
    {
        key: 3,
        dateTime: "November 18, 2023",
        title: "Teams Registration ends",
        content: `Interested Participants are no longer Allowed to
        register`
    },
    {
        key: 4,
        dateTime: "November 18, 2023",
        title: `Announcement of the accepted teams
        and ideas`,
        content: `All teams whom idea has been accepted into getlinked tech
        hackathon 1.0 2023 are formally announced`
    },
    {
        key: 5,
        dateTime: "November 18, 2023",
        title: "Getlinked Hackathon 1.0 Offically Begins",
        content: `Accepted teams can now proceed to build their
        ground breaking skill driven solutions`
    },
    {
        key: 6,
        dateTime: "November 18, 2023",
        title: "Demo Day",
        content: `
            Teams get the opportunity to pitch their projects to judges.
            The winner of the hackathon will also be announced on
            this day
        `
    }
]

const EventTime = ({dateTime, title, content}) => {
    return (
    <div> 
        <h4 className='text-lightPurple font-bold'> {title} </h4>
        <p> {content} </p>
        <span className='text-lightPurple font-bold'> {dateTime} </span>
    </div>)
}

const getItems = (data) => {
     return data.map((item) => {
       return (
         {
            dot: <div className='aspect-square rounded-full w-[24px]'>{item.key}</div>,
            children: <EventTime dateTime={item.dateTime} title={item.title} content={item.content} />
         }
        )})
}

const TimelineSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto max-w-[80%] mt-[12vh] font-montserrat">
            <h3 className="text-center font-clashDisplay font-bold text-xl md:text-3xl"> Timeline </h3>
            <p className="text-center text-sm font-montserrat">
                Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
            <Timeline
                // mode='alternate'
                className='my-10 text-white'
                items={getItems(EventData)}
            />
        </div>
    )
}

export default TimelineSection;