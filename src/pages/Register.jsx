import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Modal } from "antd"
import Button from "../components/atoms/Button"
import Navbar from "../components/Navbar"
import backIcon from "../assets/icons/back-icon.svg"
import computerGuyImg from "../assets/imgs/computer-guy.png"
import successfulManImg from "../assets/imgs/successful-man.png"
import successfullyDoneImg from "../assets/imgs/successfully-done.png"
import guyWalkingImg from "../assets/imgs/guy-walking.png"
import girlWalkingImg from "../assets/imgs/girl-walking.png"

const Register = () => {
    const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };

    return(
    <div className="bg-darkBlue h-full text-white grid font-montserrat">
        <div className="hidden md:block">
            <Navbar />
        </div>
        <div className="container mx-auto max-w-[80%] grid md:grid-cols-2">
            <Button iconPath={backIcon} variant="icon" extraStyle="mt-11 md:hidden" onClick={goBack}/>

            <h3 className="text-lightPurple font-semibold font-3xl mt-11 md:hidden"> Register </h3>
            <img src={computerGuyImg} alt="computer-guy-image" className="aspect-[4/5] mt-8"/>    
            <div>
                <div>
                    <h3 className="text-lightPurple font-semibold font-3xl mt-11 hidden md:block"> Register </h3>

                    <span className="flex items-end text-xs"> Be part of this movement!
                        <span className="border-b flex w-[90px] items-end border-dashed justify-center border-lightPurple">
                            <img src={girlWalkingImg} alt="girl-walking" className="h-6 scale-x-[-1]" />
                            <img src={guyWalkingImg} alt="guy-walking" className="h-7 scale-x-[-1]" />
                        </span>
                    </span>
                    <h3 className="uppercase mt-1.7 text-xl"> Create you account</h3>
                </div>
                <form className="space-y-4 mt-6 text-sm">
                    <div className="space-y-4 grid md:grid-cols-2">
                        <div className="grid">
                            <span> Team's Name </span>
                            <input  placeholder="Enter the name of your group" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-gray"/>
                        </div>
                        <div className="grid">
                            <span> Phone </span>
                            <input  placeholder="Enter your phone number" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-gray"/>
                        </div>
                        <div className="grid">
                            <span> Email </span>
                            <input  placeholder="Enter your email address" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-gray"/>
                        </div>
                        <div className="grid">
                            <span> Project Topic </span>
                            <input  placeholder="What is your group project topic" className="bg-transparent border rounded border-white px-6 py-3 placeholder:text-gray"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid gap-5">
                        <div className="grid">
                            <label for="cars">Category</label>

                            <select name="cars" id="cars" className="bg-transparent border rounded border-white px-6 py-3">
                                <option value="volvo">Select your category</option>
                                <option value="saab">Saab</option>
                                <option value="mercedes">Mercedes</option>
                                <option value="audi">Audi</option>
                            </select> 
                        </div>
                        <div className="grid">
                            <label for="cars">Group Size</label>

                                <select name="cars" id="cars" className="bg-transparent border rounded border-white px-6 py-3">
                                    <option value="volvo">Select your category</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select> 
                        </div>
                    </div>
                    <span className="text-darkPink text-[9px] italic">
                        Please review your registration details before submitting
                    </span>
                    <div className="flex items-start gap-2">
                        <input type="checkbox" name="" id="" />
                        <span className="text-[10px] ">
                        I agreed with the event terms and conditions <br className="md:hidden"/>
                        and privacy policy
                        </span>
                    </div>

                </form>
                <Button name="submit" extraStyle="block self-center w-fit" onClick={showModal}/>

            </div>
        </div>
        <Modal className="grid bg-transparent"
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            >
            <div className="relative w-[70%] aspect-[1/1]">
                <img src={successfullyDoneImg} alt="successfully-done-image" className="absolute" />
                <img src={successfulManImg} alt="successfully-done-image" className="absolute" />
            </div>
            <h3> Congratulations you have successfully Registered! </h3>
            <p> Yes, it was easy and you did it! check your mail box for next step </p>
            <Button name="Back" extraStyle="w-full" onClick={handleCancel} />
        </Modal>
    </div>
)}

export default Register;