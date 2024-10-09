import Bigcard from "./Bigcard"
import Navbar from "./Navbar"
import RecentActivity from "./RecentActivity"
import Smallcard from "./Smallcard"
import Eventscard from "./Eventscard"
// import Upcoming from "./Upcoming"

const Body = () => {
    return (
        <div className="mx-8 w-screen">
            <Navbar />
            <div className="my-1">
            <h1 className="text-left text-[#161E54] text-[24px] font-semibold mb-3">Dashboard</h1>
            <div className="flex flex-col lg:flex-row lg:space-x-6">
                <div className="lg:w-3/5 m-1">
                    <div className="flex space-x-4">
                        <Smallcard upperText="Available Position" number="24" lowerText="4 Urgently needed" bgcolor="#FFEFE7"  color="#FF5151" />
                        <Smallcard upperText="Job Open" number="10" lowerText="4 Active hiring" bgcolor="#E8F0FB" color="#3786F1" />
                        <Smallcard upperText="New Employees" number="24" lowerText="4 Department" bgcolor="#FDEBF9" color="#EE61CF" />
                    </div>
                    <div className="flex space-x-4 my-3">
                        <Bigcard heading="Total Employees" number="216" men="120" women="96" percentage="2" />
                        <Bigcard heading="Talent Request" number="16" men="6" women="10" percentage="5" />
                    </div>
                    <Eventscard height="260px" heading="Announcement" bottomText="See All Announcement" />
                </div>
                <div className="m-1 mt-5 lg:mt-0 space-x-3 lg:space-x-0 lg:space-y-5 flex flex-row lg:flex-col">
                    <RecentActivity />
                    <Eventscard height="328px" heading="Upcoming Schedule" bottomText="Create a New Schedule" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Body