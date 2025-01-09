import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive")

  return (
      <div className="w-screen h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={() => setColor("#ff0000")} className="outline-none px-4" style={{backgroundColor: "#ff0000"}}>Red</button>
            <button onClick={() => setColor("#00ff00")} className="outline-none px-4" style={{backgroundColor: "#00ff00"}}>Green</button>
            <button onClick={() => setColor("#0000ff")} className="outline-none px-4" style={{backgroundColor: "#0000ff"}}>Blue</button>
            <button onClick={() => setColor("#fff000")} className="outline-none px-4" style={{backgroundColor: "#fff000"}}>Yellow</button>
          </div>
        </div>
      </div>
  )
}

export default App
