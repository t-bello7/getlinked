import connectWorldImg from "../../assets/imgs/connect-world.png"
import vrManImg from "../../assets/imgs/vr-man.png"
const JumbotronImage = () => {
    return (
        <div className="md:w-[50%] mt-2.5 md:block md:h-full relative">
            <img src={vrManImg} alt="man on vr image" className="bg-cover bg-blend-luminosity grayscale" />
            <img src={connectWorldImg} alt="connecting the world image" className="absolute top-0 bg-blend-hard-light" />
        </div>
    )
}

export default JumbotronImage;