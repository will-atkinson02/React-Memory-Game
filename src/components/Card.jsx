import { useState } from "react";

export default function Card({ id })
{
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div 
            onClick={() => setIsFlipped(true)}
            className={`w-24 h-40 m-2 border-2 border-red-500 ${isFlipped ? "bg-red-500" : "bg-white"}`}
        ></div>
    )
}