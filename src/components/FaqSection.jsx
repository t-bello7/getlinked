import { Collapse } from 'antd';
import SectionHeader from './atoms/SectionHeader';
import thinkingMan from '../assets/imgs/thinking-man.png';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const items = [
  {
    key: '1',
    label: 'Can I work on a project I started before the hackathon?',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'What happens if I need help during the hackathon?',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: "What happens if I don't have an idea for a project?",
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: "Can I join a team or do I have to come with one?",
    children: <p>{text}</p>,
  },
  {
    key: '5',
    label: "What happens after the hackathon ends",
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: "Can I work on a project I started before the hackathon?",
    children: <p>{text}</p>,
  },
  
];


const FaqSection = ({innerRef}) => {
    return  (
        <div ref={innerRef} className="container mx-auto max-w-[80%] mt-[12vh]">
            <div className='text-center'>
                <h3 className="capitalize font-clashDisplay font-bold text-xl"> 
                    <span>  </span> <br/>
                    <span className="text-lightPurple"> </span>
                </h3>
                <SectionHeader title="Frequently Ask" subTitle="Question" />

                <p>
                    We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0
                </p>
                <Collapse items={items} defaultActiveKey={['1']} className='my-11'/>
            </div>
            <img src={thinkingMan} alt="thinking man image"/>
        </div>)
}

export default FaqSection;