import { Timeline } from 'antd';

const TimelineSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto max-w-[80%] mt-[12vh]">
            <h3 className="text-center font-clashDisplay font-bold text-xl"> Timeline </h3>
            <p className="text-center text-sm font-montserrat">
            Here is the breakdown of the time we anticipate using for the upcoming event.
            </p>
            <Timeline
                className='my-10 text-white'
                items={[
                {
                    children: 'Create a services site 2015-09-01',
                },
                {
                    children: 'Solve initial network problems 2015-09-01',
                },
                {
                    children: 'Technical testing 2015-09-01',
                },
                {
                    children: 'Network problems being solved 2015-09-01',
                },
                ]}
            />
        </div>
    )
}

export default TimelineSection;