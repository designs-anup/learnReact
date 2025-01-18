import { useState } from "react"

function MyComponent({mood = "confused"}) {

    const [myCount, setMyCount] = useState(0)

    function handleClick(){
        setMyCount((prev) => {
            return prev + 1
        })
    }

    return(
        <div>
            <h1>My Custom Component Header</h1>
            <p>There are {myCount} number of balls and this user feels {mood}</p>
            <button onClick={handleClick}>Increase Counts</button>
        </div>        
    )
}

export default MyComponent