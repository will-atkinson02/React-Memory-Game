import Card from './Card'

export default function GameBoard()
{
    return (
        <div className="grid portrait:grid-cols-3 portrait:grid-rows-4 landscape:grid-cols-4 landscape:grid-rows-3   p-2 border-2 border-black">
            {[...Array(12)].map((id) => (
                <Card></Card>
            ))}
        </div>
    )
}