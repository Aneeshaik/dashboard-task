import searchIcon from "../assets/images/search-icon.png"
import notificationsIcon from "../assets/images/notifications-icon.png"
import chatIcon from "../assets/images/chat-icon.png"
import userIcon from "../assets/images/user-icon.png"
import arrowIcon from "../assets/images/arrow-icon.png"

const Navbar = () => {
    return (
        <div className="flex items-center justify-between pt-4 pb-3 border-[#F1F1F1] border-b-[1px]">
        <div className="relative w-64">
            <input className="w-full border px-2 pr-10 py-1 bg-[#FAFAFA] rounded-md" placeholder="Search" />
            <img className="absolute top-1/2 right-2 transform -translate-y-1/2 w-5 h-5" src={searchIcon} alt="Search Icon" />
        </div>
        <div className="flex items-center space-x-6">
            <img className="cursor-pointer" src={notificationsIcon} alt="" />
            <img className="cursor-pointer" src={chatIcon} alt="" />
            <div className="lg:flex hidden items-center space-x-3 cursor-pointer">
                <img className="rounded-full" src={userIcon} alt="" />
                <div className="flex items-center space-x-1">
                    <h1 className="text-[#161E54] text-[16px] font-semibold">Admirra John</h1>
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="flex lg:hidden items-center space-x-3 cursor-pointer">
                <img className="rounded-full" src={userIcon} alt="" />
                <div className="flex items-center space-x-1">
                    <img src={arrowIcon} alt="" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar