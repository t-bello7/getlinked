import bigIdeaImg from "../assets/imgs/big-idea.png"
import girlSettingImg from "../assets/imgs/girl-sitting.png"
import pieTeamImg from "../assets/imgs/pie-team-animate.png"
import OverviewContainer from "./molecules/OverviewContainer"

const overviewData = [
    {
        key: "223",
        imgPath: bigIdeaImg,
        overviewData: {
            title: "Introduction to getlinked",
            subTitle: "tech Hackathon 1.0",
            content: `Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
            day: to shape the future. Whether you're 
            a coding genius, a design maverick, or a 
            concept wizard, you'll have the chance to transform your ideas into reality. Solving 
            real-world problems, pushing the boundaries
            of technology, and creating solutions that can change the world, that's what we're all about!`
        }
    },
    {
        key: "22223",
        imgPath: girlSettingImg,
        overviewData: {
            title: "Rules and",
            subTitle: "Guidlines",
            content: `
            Our tech hackathon is a melting pot of 
            visionaries, and its purpose is as clear as day:
            to shape the future. Whether you're a coding
            genius, a design maverick, or a concept 
            wizard, you'll have the chance to transform 
            your ideas into reality. Solving real-world 
            problems, pushing the boundaries of 
            technology, and creating solutions that can 
            change the world, that's what we're all about!
            `
        }
    },
    {
        key: "34223",
        imgPath: pieTeamImg,
        overviewData: {
            title: "Judging Criteria",
            subTitle: "Key attributes",
            content: [
                {
                    key: "124",
                    title: `Innovation and Creativity: `,
                    subTitle: `Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features.`
                },
                {
                    key: "324",
                    title: `Functionality: `,
                    subTitle: `Assess how well the solution works. Does it perform its intended functions effectively and without major issues? Judges would consider the completeness and robustness of the solution.`
                },
                {
                    key: "226",
                    title: `Impact and Relevance: `,
                    subTitle: `Determine the potential impact of the solution in the real world. Does it address a significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.`
                },
                {
                    key: "222",
                    title: `Technical Complexity: `,
                    subTitle: `Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the solution.`
                },
                {
                    key: "154",
                    title: `Adherence to Hackathon Rules: `,
                    subTitle: `Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any 
                    other competition-specific requirements.`
                }
            ],
        }
    }
]
const OverviewSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto max-w-[80%] flex flex-col">
        {overviewData.map(item => <OverviewContainer key={item.key} imgPath={item.imgPath} overviewData={item.overviewData} />)}
        </div>
)
}

export default OverviewSection;