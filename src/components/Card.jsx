import { useEffect, useState } from "react";

export default function Card({ id, colour, onClick, isFlipped, matched })
{
    const [flipping, setFlipping] = useState(false)
    const [showFace, setShowFace] = useState(false)

    useEffect(() => 
    {
        setFlipping(true)
        setTimeout(() =>
        {
            setShowFace(isFlipped)
            setFlipping(false)
        }, 150)
    }, [isFlipped])

    return (
        <div 
            onClick={() => onClick(id) }
            className={`w-24 h-40 m-2 perspective-0 cursor-pointer`}
        >
            <div
                className={`w-full h-full rounded border-2 
                            transform transition-transform duration-300
                            ${flipping ? 'scale-x-0' : 'scale-x-100'}
                            ${matched ? 'border-yellow-500' : 'border-black'}`}
            >
                <div className={`w-full h-full rounded ${showFace ? colour : "bg-white"}`}></div>
            </div>
        </div>
    )
}