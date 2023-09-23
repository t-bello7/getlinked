import { Collapse } from 'antd';
import SectionHeader from './atoms/SectionHeader';
import thinkingMan from '../assets/imgs/thinking-man.png';
import plusIcon from '../assets/icons/plus.svg'
import minusIcon from '../assets/icons/minus.svg'

const FaqHeader = ({name}) => (<h4 className='text-white '>{name}</h4>)

const FaqText = ({name}) => (<p className='text-white'>{name}</p>)

const text = `
We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0
`;
const items = [
  {
    key: '1',
    label: <FaqHeader name="Can I work on a project I started before the hackathon?"/>,
    children: <FaqText name={text}/>,
  },
  {
    key: '2',
    label: <FaqHeader name="What happens if I need help during the hackathon?" />,
    children: <FaqText name={text} />,
  },
  {
    key: '3',
    label: <FaqHeader name="What happens if I don't have an idea for a project?" />,
    children: <FaqText name={text} />
  },
  {
    key: '4',
    label: <FaqHeader name="Can I join a team or do I have to come with one?" />,
    children: <FaqText name={text} />
  },
  {
    key: '5',
    label: <FaqHeader name="What happens after the hackathon ends" />,
    children: <p>{text}</p>,
  },
  {
    key: '6',
    label: <FaqHeader name="Can I work on a project I started before the hackathon?" />,
    children: <FaqText name={text} />
  },
  
];


const FaqSection = ({innerRef}) => {
    return  (
        <div ref={innerRef} className="container mx-auto max-w-[90%] mt-[12vh] grid md:grid-cols-2 md:items-center">
            <div className='text-center md:text-left'>
                <h3 className="capitalize font-clashDisplay font-bold text-xl"> 
                    <span>  </span> <br/>
                    <span className="text-lightPurple"> </span>
                </h3>
                <SectionHeader title="Frequently Ask" subTitle="Question" />

                <p className='mt-4'>
                    We got answers to the questions that you might
                    want to ask about getlinked Hackathon 1.0
                </p>
                <Collapse
                  items={items}
                  className='my-11 [&_.ant-collapse-item]:border-b-lightPurple'
                  bordered={false}
                  expandIconPosition='end'
                  expandIcon = {({isActive}) => ( isActive ?  <img src={minusIcon} alt='minus-icon' /> : <img src={plusIcon} alt='plus icon' />)}
                  />
            </div>
            <img src={thinkingMan} alt="thinking man image"/>
        </div>)
}

export default FaqSection;