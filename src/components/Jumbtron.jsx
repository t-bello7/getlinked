import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = ({innerRef}) => {
    return (
        <div ref={innerRef} className="bg-darkBlue container mx-auto mb-[10vh] pt-[15vh] h-[80vh] md:flex">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron