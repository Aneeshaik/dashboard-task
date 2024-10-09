import upArrow from "../assets/images/uparrow-icon.png"
import vectorLine from "../assets/images/vector-line.png"
import vectorBg from "../assets/images/vector-bg.png"

const Bigcard = ({ heading, number, men, women, percentage }) => {
    return (
        <div className="w-1/2 border flex justify-between rounded-lg p-4 my-2">
            <div className="text-left">
                <h1 className="text-[#161E54] text-[18px] font-semibold">{heading}</h1>
                <h1 className="text-[#161E54] text-[48px] font-semibold">{number}</h1>
                <h1 className="text-[#686868] text-[12px]">{men} Men</h1>
                <h1 className="text-[#686868] text-[12px]">{women} Women</h1>
            </div>
            <div className="flex flex-col items-center justify-between">
                <div className="flex flex-col items-center justify-center relative">
                    <h1 className="text-[#FF5151] text-[10px]">+{percentage}%</h1>
                    <img src={upArrow} alt="" />
                    <img src={vectorBg} alt="" />
                    <img className="absolute" src={vectorLine} alt="" />
                </div>
                <div>
                    <h1 className="bg-[#FFEFE7] py-1 px-2 rounded-md text-[12px]">+{percentage}% Past month</h1>
                </div>
            </div>
        </div>
    )
}

export default Bigcard