export default function Score({ isPlaying, attempts })
{
    return (
        <div className={`absolute inset-0 flex flex-col ${isPlaying ? "visible" : "invisible"}`}>
            <div className="flex flex-col items-center">
                <div className="h-10 w-60 flex justify-around">
                    <div className="bg-amber-700 h-10 w-2"></div>
                    <div className="bg-amber-700 h-10 w-2"></div>
                </div>
                <div className="font-sancreek flex justify-center items-center bg-amber-400 w-60 h-16 rounded-lg text-2xl">Attempts: {attempts}</div>
            </div>
        </div>
    )
}