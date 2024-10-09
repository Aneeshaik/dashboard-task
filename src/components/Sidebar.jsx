import logo from "../assets/images/vasitum-logo.png"
import dashboardIcon from "../assets/images/dashboard-icon.png"
import recruitmentIcon from "../assets/images/recruitment-icon.png"
import scheduleIcon from "../assets/images/schedule-icon.png"
import employeeIcon from "../assets/images/employee-icon.png"
import departmentIcon from "../assets/images/department-icon.png"
import settingsIcon from "../assets/images/settings-icon.png"
import supportIcon from "../assets/images/support-icon.png"
import mdLogo from "../assets/images/md-logo.png"

const Sidebar = () => {
    return (
        <div className="bg-[#FAFAFA] p-3 lg:p-6 h-screen w-[15vh] lg:w-1/5 sticky top-0">
            <img className="hidden lg:block p-[10px]" src={logo} alt="logo" />
            <div className="lg:hidden flex items-center justify-center">
                <img className=" mt-10 p=[10px] flex items-center justify-center" src={mdLogo} alt="" />
            </div>
            <div className="my-8">
                <h1 className="lg:text-left text-[#686868] opacity-50 text-[10px] lg:text-xs">MAIN MENU</h1>
                <ul className="lg:text-left space-y-8 lg:mt-5 flex flex-col items-center lg:items-start">
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer">
                        <img src={dashboardIcon} alt="" />
                        <li className="text-[#FF5151]">Dashboard</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer">
                        <img src={dashboardIcon} alt="" />
                    </div>
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer"> 
                        <img className="items-center" src={recruitmentIcon} alt="" />
                        <li className="">Recruitment</li>
                    </div>
                    <div className="lg:hidden space-x-4 cursor-pointer"> 
                        <img className="items-center" src={recruitmentIcon} alt="" />
                    </div>
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer">
                        <img src={scheduleIcon} alt="" />
                        <li className="">Schedule</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer">
                        <img src={scheduleIcon} alt="" />
                    </div>
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer">
                        <img src={employeeIcon} alt="" />
                        <li className="">Employee</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer">
                        <img src={employeeIcon} alt="" />
                    </div>
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer">
                        <img src={departmentIcon} alt="" />
                        <li className="">Department</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer">
                        <img src={departmentIcon} alt="" />
                    </div>
                </ul>
            </div> 
            <div>
            <h1 className="lg:text-left text-[#686868] opacity-50 text-xs">OTHERS</h1>
                <ul className="lg:text-left space-y-8 mt-5 flex flex-col items-center lg:items-start">
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer">
                        <img src={supportIcon} alt="" />
                        <li className="">Support</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer">
                        <img src={supportIcon} alt="" />
                    </div>
                    <div className="items-center space-x-4  hidden lg:flex cursor-pointer"> 
                        <img src={settingsIcon} alt="" />
                        <li className="">Settings</li>
                    </div>
                    <div className="items-center lg:hidden space-x-4 cursor-pointer"> 
                        <img src={settingsIcon} alt="" />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar