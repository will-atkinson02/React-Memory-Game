import "./index.css"
import "./styles/animations.css"
import GameBoard from "./components/GameBoard"
import { useRef, useState } from "react"
import { delay } from "./utils/delay.js"
import LoginModal from "./components/LoginModal.jsx"

function App() {

  const [attempts, setAttempts] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(true)
  const hasFinishedGame = useRef(false)

  function incrementAttempts()
  {
    setAttempts(attempts + 1)
  }

  function startGame()
  {
    hasFinishedGame.current = false
    setIsPlaying(true)
  }

  async function finishGame()
  {
    if (hasFinishedGame.current) { return }

    hasFinishedGame.current = true

    setHasWon(true)
    setIsPlaying(false)

    try 
    {
      const res = await fetch("http://localhost:3001/api/score", 
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ score: attempts })
      })

      if (!res.ok) 
      {
        throw new Error("Failed to submit score")
      }
    }
    catch (error)
    {
      console.error(error)
    }

    await delay(3000)
    
    setHasWon(false)
    setAttempts(0)
  }

  let screen
  if (!isPlaying && !hasWon)
  {
    screen = <div className={`font-sancreek text-5xl ${!showLoginModal ? "cursor-pointer" : ""} yoyo`} onClick={!showLoginModal ? startGame : undefined}>Click to Play</div>
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
      {showLoginModal && <LoginModal></LoginModal>}
      <div className="flex justify-center items-center h-screen bg-yellow-200">
        <div className={`font-sancreek text-xl absolute top-8 ${isPlaying ? "visible" : "invisible"}`}>Attempts: {attempts}</div>
        {screen} 
      </div>
    </>
  )
}

export default App