import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto pt-[12vh] md:flex">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron