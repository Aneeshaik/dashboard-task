import pinIcon from "../assets/images/pin-icon.png"
import threeDots from "../assets/images/three-dots.png"

const Event = ({eventHeading, time, opc, pin}) => {
    return (
        <div className="flex border rounded-lg bg-[#FAFAFA] py-2 px-4 my-3 justify-between items-center">
            <div className="text-left space-y-2">
                <h1 className="text-[16px] font-medium text-[#303030]">{eventHeading}</h1>
                <h1 className="text-[10px] text-[#686868]">{time}</h1>
            </div>
            <div className="flex space-x-5">
                {pin && (
                <img className="h-[24px]" style={{opacity: opc}} src={pinIcon} alt="" />
                )}
                <img className="h-[24px] ml-6" src={threeDots} alt="" />
            </div>
        </div>
    )
}

export default Event