import { useState } from "react"

const UseStateName = () => {
    const [name, setName] = useState('Guest')
    const [theme, setTheme] = useState(false)

    function changeName(){
        setName('Aman')
    }

    const toggleTheme = () => {
        setTheme(!theme)
    }

    return(
        <>
            <h2>
                Name : {name}
            </h2>
            <button onClick={changeName}>Change Name</button>

            <h2>Current Theme : {theme ? 'dark' : 'light'}</h2>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </>
    )
}

export default UseStateName