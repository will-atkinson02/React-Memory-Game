import { useEffect, useState } from 'react';
import Card from './Card'

export default function GameBoard({ incrementAttempts, finishGame })
{   
    const numberOfCards = 12
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

    const suits = ["♥", "♦", "♠", "♣"]
    const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    const [cards, setCards] = useState(createCards(numberOfCards/2))
    const [flipped, setFlipped] = useState([])

    function createCards(pairCount)
    {
        const deck = suits.flatMap((suit, i) => 
            ranks.map((rank) => 
            ({
                suit,
                rank,
                colour: i < 2 ? "text-red-500" : "text-black",
                value: rank + suit,
                isFlipped: false,
                matched: false
            }))
        )

        const shuffled = deck.sort(() => Math.random() - 0.5);

        const selected = shuffled.slice(0, pairCount);

        const paired = selected.flatMap(card => [card, { ...card }])

        return paired
            .sort(() => Math.random() - 0.5)
            .map((card, i) => ({ ...card, id: i}))
    }

    function handleCardClicked(id)
    {
        if (flipped.length === 2) { return }
        
        const card = cards.find(card => card.id === id)

        if (flipped.includes(card.id)) { return }

        setFlipped([...flipped, card.id])
    }

    useEffect(() => 
    {
        setCards(prevCards => 
            prevCards.map(card => 
                flipped.includes(card.id) ? { ...card, isFlipped: true} : card
            )
        )
        if (flipped.length < 2) { return }
        checkMatch()
    }, [flipped])

    useEffect(() => 
    {
        checkWin()
    }, [cards])

    function delay(duration)
    {
        return new Promise(resolve => setTimeout(resolve, duration))
    }

    async function checkMatch()
    {
        const [firstID, secondID] = flipped
        const firstCard = cards.find(card => card.id === firstID)
        const secondCard = cards.find(card => card.id === secondID)

        if (firstCard.value === secondCard.value)
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
        incrementAttempts();
    }

    async function checkWin()
    {
        const allMatched = cards.every(card => card.matched)
        if (allMatched)
        {
            await delay(1000)
            finishGame()
        }
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
            <div className="grid grid-cols-4 grid-rows-3 p-2 border-2 border-black bg-gray-200">
                {cards.map((card) => (
                    <Card 
                        key={card.id} 
                        id={card.id} 
                        value={card.value}
                        colour={card.colour} 
                        isFlipped={card.isFlipped} 
                        matched={card.matched} 
                        onClick={handleCardClicked} ></Card>
                ))}
            </div>
        </>
    )
}