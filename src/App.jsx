import "./index.css"
import GameBoard from "./components/GameBoard"
import { useState } from "react"

function App() {

  const [attempts, setAttempts] = useState(0)

  function incrementAttempts()
  {
    setAttempts(attempts + 1)
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute top-8">Attempts: {attempts}</div>
        <GameBoard incrementAttempts={incrementAttempts}></GameBoard>
      </div>
    </>
  )
}

export default App