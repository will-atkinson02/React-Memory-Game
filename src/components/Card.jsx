import { useEffect, useState } from "react";
import "../styles/cards.css"

export default function Card({ id, value, colour, onClick, isFlipped, matched })
{
    const [flipping, setFlipping] = useState(false)
    const [showFace, setShowFace] = useState(false)

    useEffect(() => 
    {
        setFlipping(true)
        const timer = setTimeout(() =>
        {
            setShowFace(isFlipped)
            setFlipping(false)
        }, 150)
        return () => clearTimeout(timer)
    }, [isFlipped])

    return (
        <div 
            onClick={() => onClick(id) }
            className={`w-16 h-24 m-2 perspective-0 cursor-pointer`}
        >
            <div
                className={`w-full h-full rounded border-2 
                            transform transition-transform duration-300
                            ${flipping ? 'scale-x-0' : 'scale-x-100'}
                            ${matched ? 'border-yellow-500' : 'border-black'}`}
            >
                <div className={`flex justify-center items-center text-4xl pb-1 w-full h-full rounded bg-white ${showFace ? colour + " bg-white" : "text-white card-back"}`}>{showFace ? value : ""}</div>
            </div>
        </div>
    )
}