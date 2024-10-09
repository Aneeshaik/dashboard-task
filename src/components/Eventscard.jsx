import arrowIcon from "../assets/images/arrow-lite.png"
import Event from "./Event"

const Eventscard = ({height, heading, bottomText}) => {
    return (
        <div className="border rounded-lg w-full flex flex-col" style={{height: height}}>
            <div className="p-4 flex-grow overflow-hidden">
            <div className="flex justify-between">
                <h1 className="text-left text-[18px] text-[#161E54] font-semibold">{heading}</h1>
                <div className="flex space-x-2 border rounded-lg items-center p-1">
                    <h1 className="text-[#686868] text-[12px]">Today, 13th Sep 2021</h1>
                    <img className="h-[18px]" src={arrowIcon} alt="" />
                </div>
            </div>
            <div className="overflow-y-auto events h-full my-3 pb-8">
                {
                    heading === "Announcement"? (
                        <>
                            <Event eventHeading="Outing schedule for every departement" time="5 Minutes ago" opc="1.0" pin={true} />
                            <Event eventHeading="Meeting HR Department" time="Yesterday, 12:30 PM" opc="0.5" pin={true} />
                            <Event eventHeading="IT Department need two more talents for UX/UI Designer position" time="Yesterday, 09:15 AM" opc="0.5" pin={true} />
                        </>
                    ) : (
                        <>
                            <p className="text-left text-[12px] text-[#686868]">Priority</p>
                            <Event eventHeading="Review candidate applications" time="Today - 11.30 AM" opc="1.0" pin={false} />
                            <p className="text-left text-[12px] text-[#686868] my-[-2px]">Other</p>
                            <Event eventHeading="Interview with candidates" time="Today - 10.30 AM" opc="1.0" pin={false} />
                            <Event eventHeading="Short meeting with product designer from IT Departement" time="Today - 09.15 AM" opc="1.0" pin={false} />
                        </>
                    )
                }
            </div>
            </div>
            <div className="border border-t-2 rounded-b-lg p-2 ">
                <h1 className="text-center text-[#FF5151]">{bottomText}</h1>
            </div>
        </div>
    )
}

export default Eventscard