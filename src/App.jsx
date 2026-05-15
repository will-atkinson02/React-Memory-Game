import "./index.css"
import "./styles/animations.css"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {

  const [attempts, setAttempts] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWon, setHasWon] = useState(false)

  function incrementAttempts()
  {
    setAttempts(attempts + 1)
  }

  function startGame()
  {
    setIsPlaying(true)
  }

  function finishGame()
  {
    setHasWon(true)
    console.log(`You won in ${attempts} attempts`)
    setIsPlaying(false)
    setAttempts(0)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-yellow-200">
        <div className={`font-sancreek text-xl absolute top-8 ${isPlaying ? "visible" : "invisible"}`}>Attempts: {attempts}</div>
        {isPlaying ? <GameBoard incrementAttempts={incrementAttempts} finishGame={finishGame}></GameBoard> : <div className="font-sancreek text-5xl cursor-pointer yoyo" onClick={startGame}>Click to Play</div>}
      </div>
    </>
  )
}

export default App