import { useState } from "react";

export default function Card({ id, colour, onClick, isFlipped })
{
    return (
        <div 
            onClick={() => onClick(id) }
            className={`w-24 h-40 m-2 border-2 border-black ${isFlipped ? colour : "white"}`}
        ></div>
    )
}