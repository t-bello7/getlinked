import { Collapse } from 'antd';
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


const FaqSection = () => {
    return  (
        <div className="container mx-auto max-w-[80%] mt-[12vh]">\
            <div>
                <h3 className="capitalize text-center font-clashDisplay font-bold text-xl"> 
                    <span> Frequently Ask </span> <br/>
                    <span className="text-lightPurple"> Question</span>
                </h3>
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