import connectWorldImg from "../../assets/imgs/connect-world.png"
import vrManImg from "../../assets/imgs/vr-man.png"
import jumbotronBg2 from '../../assets/imgs/jumbotron-bg-2.png'
import metricBg from '../../assets/imgs/metric-bg.png'

const JumbotronImage = () => {
    return (
        <div className="md:w-[50%] mt-[9vh] md:block md:h-full relative">
            <img src={vrManImg} alt="man on vr image" className="bg-cover bg-blend-luminosity grayscale" />
            <img src={connectWorldImg} alt="connecting the world image" className="absolute -top-5 bg-blend-hard-light" />
            <div className="z-[-99] w-96 h-96 bg-neutral-950 bg-gradient-radial to-light-trans via-light-purple from-dark-purple blur-[100px] absolute left-[-50%] bottom-[-110%] md:left-[-5%] md:bottom-[-110%]"></div>
        </div>
    )
}

export default JumbotronImage;