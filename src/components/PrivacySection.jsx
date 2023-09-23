import SectionHeader from "./atoms/SectionHeader"
import Button from "./atoms/Button"
import lockAnimateImg from "../assets/imgs/lock-animate.png"

const PrivacySection = () => {
    return (
    <div className="container mx-auto max-w-[80%]">
        <div className="text-center">
            <SectionHeader title="Privacy Policy and" subTitle="Terms"/>
            <span> Last updated on September 12, 2023 </span>
            <p>
                Below are our privacy & policy, which outline a 
                lot of goodies. it’s our aim to always take of our 
                participant
            </p>
            <div>
                <p>
                    At getlinked tech Hackathon 1.0, we 
                    value your privacy and are committed 
                    to protecting your personal information.
                    This Privacy Policy outlines how we collect,
                    use, disclose, and safeguard your data 
                    when you participate in our tech hackathon 
                    event. By participating in our event, you 
                    consent to the practices described in this 
                    policy.
                </p>
                <h3>
                    <span>
                        Licensing Policy
                    </span>
                    <br />
                    <span>
                        Here are terms of our Standard License:
                    </span>
                </h3>
                <ul>
                    <li>
                        The Standard License grants you a 
                        non-exclusive right to navigate and 
                        register for our event
                    </li>
                    <li>
                        You are licensed to use the item 
                        available at any free source sites, for 
                        your project developement
                    </li>
                </ul>
                <Button name="Read More" />
            </div>
        </div>
        <img src={lockAnimateImg} alt="man-stanging-on-lock" />
    </div>
    )
}

export default PrivacySection
