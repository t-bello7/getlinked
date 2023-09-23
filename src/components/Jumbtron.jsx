import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto pt-[4vh] md:flex md:items-start">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron