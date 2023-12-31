import JumbotronImage from "./molecules/JumbotronImage";
import JumbotronTextSection from "./molecules/JumbotronTextSection";

const Jumbotron = ({innerRef}) => {
    return (
        <div ref={innerRef} className="container mx-auto md:max-w-[95%] pt-[12vh] md:pt-[4vh] md:flex md:items-center">
            <JumbotronTextSection />
            <JumbotronImage />
        </div>
    )
}

export default Jumbotron