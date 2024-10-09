const Smallcard = ({ upperText, number, lowerText, bgcolor, color }) => {
    return (
        <div className="text-left p-3 w-1/3 rounded-lg" style={{ backgroundColor: bgcolor }}>
            <h1 className="text-[#161E54] font-semibold text-[18px]">{upperText}</h1>
            <h1 className="text-[#161E54] font-semibold text-[36px]">{number}</h1>
            <h1 style={{ color: color }}>{lowerText}</h1>
        </div>
    )
}

export default Smallcard