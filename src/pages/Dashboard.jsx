import DontationSection from "../components/DonationSection";
import Navbar from "../components/Navbar"
import SearchComponent from "../components/SearchComponent";

const DashBoard = () => (
        <div className="bg-darkerColor">
            <Navbar />
            <SearchComponent />
            <DontationSection />
        </div>
    )

export default DashBoard;