import TeamCard from "./molecules/TeamCard"
// import tomiPic from "../assets/imgs/tomi.jpg"
// import alexPic from "../assets/imgs/dev-alex.jpg"
// import etornamPic from "../assets/imgs/dev-etornam.jpg"
// import ahmedPic from "../assets/imgs/dev-ahmed.jpg"
const TeamMembers = [
    {
        name: "Tomi Bello",
        // img: tomiPic
    },
    {
        name: "Alex",
        // img: alexPic
    },
    {
        name: "Etornam",
        // img: etornamPic
    }, 
    {
        name: "Ahmed",
        // img: ahmedPic
    }
]
const TeamSection = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto mb-[10vh] flex flex-col items-center md:flex-row gap-12 md:overflow-scroll">
            {
                TeamMembers.map((item, index) => {
                    const {img, name} = item
                    return (
                        <TeamCard key={index} imgUrl={img} name={name} />
                    )
                })
            }
        </div>
    )
}

export default TeamSection;

