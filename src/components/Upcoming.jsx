import Announcementevents from "./Event"
import arrowIcon from "../assets/images/arrow-lite.png"

const Upcoming = () => {
    return (
        <div className="border rounded-lg h-[260px] flex flex-col">
            <div className="p-4 flex-grow overflow-hidden">
            <div className="flex justify-between">
                <h1 className="text-left text-[18px] text-[#161E54] font-semibold">Upcoming Schedule</h1>
                <div className="flex space-x-2 border rounded-lg items-center p-1">
                    <h1 className="text-[#686868] text-[12px]">Today, 13th Sep 2021</h1>
                    <img className="h-[18px]" src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="overflow-y-auto events h-full my-3 pb-10">
                <Announcementevents />
                <Announcementevents />
                <Announcementevents />
                <Announcementevents />
                <Announcementevents />
            </div>
            </div>
            <div className="border border-t-2 rounded-b-lg p-2 ">
                <h1 className="text-center text-[#FF5151]">See All Announcement</h1>
            </div>
        </div>
    )
}

export default Upcoming