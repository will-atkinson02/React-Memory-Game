import "./index.css"
import "./styles/animations.css"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import { delay } from "./utils/delay.js"

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

  async function finishGame()
  {
    setHasWon(true)
    setIsPlaying(false)

    await delay(3000)
    
    setHasWon(false)
    setAttempts(0)
  }

  let screen
  if (!isPlaying && !hasWon)
  {
    screen = <div className="font-sancreek text-5xl cursor-pointer yoyo" onClick={startGame}>Click to Play</div>
  }
  else if (hasWon)
  {
    screen = <div className="font-sancreek text-5xl">You won in {attempts} attempts!</div>
  }
  else
  {
    screen = <GameBoard incrementAttempts={incrementAttempts} finishGame={finishGame}></GameBoard>
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-yellow-200">
        <div className={`font-sancreek text-xl absolute top-8 ${isPlaying ? "visible" : "invisible"}`}>Attempts: {attempts}</div>
        {screen} 
      </div>
    </>
  )
}

export default App