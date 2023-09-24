import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button"
import Navbar from "../components/Navbar";
import backIcon from "../assets/icons/back-icon.svg"
import instagramIcon from "../assets/icons/instagram-icon.svg"
import xIcon from "../assets/icons/twitter-icon.svg"
import facebookIcon from "../assets/icons/facebook-icon.svg"
import linkedInIcon from "../assets/icons/linkedin-icon.svg"

const Contact = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    return (
        <div className="bg-darkBlue h-[100vh] text-white font-montserrat">
        <div className="hidden md:block">
            <Navbar />
        </div>
        <div className=" grid md:grid-cols-2 items-center">
            <div className="hidden container mx-auto max-w-[80%] md:block md:space-y-8">
                <h2 className="text-lightPurple font-clashDisplay font-semibold font-[32px]">
                    Get in touch
                </h2>
                <span className="block">
                 Contact Information
                </span>
                <span className="block">
                    27,Alara Street
                    Yaba 100012
                    Lagos State
                </span>
                <span className="block">
                    Call Us : 07067981819
                </span>
                <span className="block">
                    we are open from Monday-Friday
                    08:00am - 05:00pm
                </span>
                <div className="my-8 text-lightPurple  space-y-3 hidden md:block">
                    <span> Share on </span>
                    <span className=" flex gap-2">
                        <img src={instagramIcon} alt="instagram icon" className="w-4 h-4"/>
                        <img src={xIcon} alt="twitter-icon" className="w-4 h-4"/>
                        <img src={facebookIcon} alt="facebook-icon" className="w-4 h-4"/>
                        <img src={linkedInIcon} alt="facebook-icon" className="w-4 h-4"/>
                    </span>
                </div>
            </div>
            <div className="container mx-auto max-w-[80%] justify-items-center relative">
                <Button iconPath={backIcon} variant="icon" extraStyle="mt-11 md:hidden" onClick={goBack}/>
                <h2 className="mt-11 mb-6 font-clashDisplay text-lightPurple font-semibold text-xl"> Questions or need <br/> assistance? <br/> Let us know about it</h2>
                <p className="mb-8"> Email us below to any question related to our event </p>
                <form className="space-y-6 flex flex-col">
                    <input  placeholder="Team's Name" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-white"/>
                    <input  placeholder=" Topic" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-white"/>
                    <input  placeholder="Email" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-white"/> 
                    <textarea placeholder="Message" className="bg-transparent border rounded border-white p-6 h-[20vh] placeholder:text-white"/>
                    <Button name="submit" extraStyle="block self-center w-fit "/>
                </form>
                <div className="text-center my-8 space-y-3 md:hidden">
                    <span> Share on </span>
                    <span className="flex absolute left-[50%] translate-x-[-50%] gap-2">
                        <img src={instagramIcon} alt="instagram icon" className="w-4 h-4"/>
                        <img src={xIcon} alt="twitter-icon" className="w-4 h-4"/>
                        <img src={facebookIcon} alt="facebook-icon" className="w-4 h-4"/>
                        <img src={linkedInIcon} alt="facebook-icon" className="w-4 h-4"/>
                    </span>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Contact