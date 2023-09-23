import faceBookIcon from "../assets/icons/facebook-icon.svg"
import instagramIcon from "../assets/icons/instagram-icon.svg"
import linkedInIcon from "../assets/icons/linkedin-icon.svg"
import twitterIcon from "../assets/icons/twitter-icon.svg"
import callIcon from "../assets/icons/call-icon.svg"
import locationIcon from "../assets/icons/location-icon.svg"

const FooterSection = () => {
    return (
        <div className="py-4 container mx-auto max-w-[80%] grid justify-items-start gap-y-8 font-montserrat text-xs">
            <div>
                <h3 className="font-clashDisplay font-bold">
                    <span className='font-bold text-white'>get</span><span className='text-lightPurple'>linked</span>
                </h3>
                <p className="">
                    Getlinked Tech Hackathon is a technology
                    innovation program established by a group 
                    of organizations with the aim of showcasing 
                    young and talented individuals in the field 
                    of technology
                </p>
                <div>
                    <span>
                    Terms of Use       Privacy Policy
                    </span>
                </div>
            </div>
            <div>
                <h3> Useful Links </h3>
                <ul>
                    <li> Overview </li>
                    <li> Timeline </li>
                    <li> FAQs </li>
                    <li className="flex"> 
                        <span> Follow us </span>
                        <img src={instagramIcon} alt="instagram icon " />
                        <img src={twitterIcon} alt="twitter icon " />
                        <img src={faceBookIcon} alt="facebook icon " />
                        <img src={linkedInIcon} alt="linkedin icon " />
                    </li>

                </ul>
            </div>
            <div>
                <h3> Contact Us </h3>
                <ul>
                    <li> 
                        <span>
                            <img src={callIcon} alt="call icon" />
                            <span> +234 679 81819 </span>
                        </span>
                        <span>
                            <img src={locationIcon} alt="location icon" />
                        <span>
                            27,Alara Street
                            Yaba 100012
                            Lagos State
                        </span>
                        </span>
                    </li>
                </ul>
            </div>
            <div>
            All rights reserved. © getlinked Ltd.
            </div>
        </div>
    )
}

export default FooterSection;