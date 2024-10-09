const RecentActivity = () => {
    return (
        <div className="text-white w-2/5 lg:w-full rounded-lg border">
            <div className="bg-[#1B204A] p-3 px-6 rounded-t-lg">
            <h1 className="text-left text-[18px]">Recently Activity</h1>
            </div>
            <div className="bg-[#121843] p-5 px-6 rounded-b-lg">
            <div className="text-left">
                <h1 className="text-[10px] opacity-60">10.40 AM, Fri 10 Sept 2021</h1>
                <h1 className="text-[18px] my-2 lg:my-1">You Posted a New Job</h1>
                <h1 className="text-[14px] opacity-60">Kindly check the requirements and terms of work and make sure everything is right.</h1>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center text-[14px] mt-4 lg:mt-5 mb-2">
                <h1 className="">Today you makes 12 Activity</h1>
                <button className="py-2 w-32 px-1 lg:px-4 bg-[#FF5151] rounded-md mt-3 lg:m-0">See All Activity</button>
            </div>
            </div>
        </div>
    )
}

export default RecentActivity