import Button from "../atoms/Button";
const JumbotronTextSection = () => {
    return (
        <div className="bg-darkColor py-[10vh] px-[2ch] md:w-[50%] text-white">
            <span className="text-lg"> Support Humanity </span>
            <h1 className="font-bold text-6xl"> Charity Provides Help For Helpless <span className="text-primaryColor"> People </span> </h1>
            <p className="text-lg"> Conveitly Donate or Volunteer to a campaing and raise founds transparently </p>
            <Button name="Donate"/>
        </div>
    )
}

export default JumbotronTextSection;
