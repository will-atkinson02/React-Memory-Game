import { useEffect, useState } from 'react';
import Card from './Card'

export default function GameBoard()
{   
    const colours = [
        "bg-red-500",
        "bg-blue-500",
        "bg-green-500",
        "bg-yellow-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-orange-500",
        "bg-teal-500",
        "bg-cyan-500",
        "bg-lime-500",
        "bg-rose-500"
    ]

    const [cards, setCards] = useState(createCards())
    const [flipped, setFlipped] = useState([])

    function createCards()
    {
        const duplicated = [...colours, ...colours]

        return duplicated.map((colour, index) => 
        ({
            id: index,
            colour: colour,
            isFlipped: false,
            matched: false
        }))
        .sort(() => Math.random() - 0.5);
    }

    function handleCardClicked(id)
    {
        if (flipped.length === 2) { return }
        
        const card = cards.find(card => card.id === id)

        if (flipped.includes(card.id)) { return }

        setFlipped([...flipped, card.id])
    }

    useEffect(() => {
        setCards(prevCards => 
            prevCards.map(card => 
                flipped.includes(card.id) ? { ...card, isFlipped: true} : card
            )
        )
        if (flipped.length < 2) { return }
        checkMatch()
    }, [flipped])

    function delay(duration) 
    {
        return new Promise(resolve => setTimeout(resolve, duration))
    }

    async function checkMatch()
    {
        const [firstID, secondID] = flipped
        const firstCard = cards.find(card => card.id === firstID)
        const secondCard = cards.find(card => card.id === secondID)

        if (firstCard.colour === secondCard.colour)
        {
            setCards(prevCards => 
                prevCards.map(card => 
                    flipped.includes(card.id) ? { ...card, matched: true} : card
                )
            )
        }
        else
        {
            await delay(1000)
            setCards(prevCards => 
                prevCards.map(card => 
                    flipped.includes(card.id) ? ({ ...card, isFlipped: false}) : card
                )
            ) 
        }
        setFlipped([])
    }

    async function testSingleMatch()
    {
        const randomCardIndex = Math.floor(Math.random() * colours.length)
        const randomColour = cards[randomCardIndex].colour

        handleCardClicked(randomCardIndex)
        
        await delay(500)

        cards.forEach((card) => 
        {
            if (card.colour === randomColour)
            {
                handleCardClicked(card.id)
            }
        })
    }

    return (
        <>
            <div className="grid grid-cols-8 grid-rows-3 p-2 border-2 border-black">
                {cards.map((card) => (
                    <Card key={card.id} id={card.id} colour={card.colour} isFlipped={card.isFlipped} onClick={handleCardClicked} ></Card>
                ))}
            </div>
        </>
    )
}