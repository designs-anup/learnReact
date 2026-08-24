import {useState} from 'react'

function Chai(){
    let [counter, setCounter] = useState(5);
    //let counter = 10;

    const addValue = () =>{
        //console.log("Value added")
        setCounter(counter += 1);
    }

    const removeValue = () => {
        setCounter(counter -= 1);
    }
    return(
        <>
            <h2>Total Chai Cups {counter}</h2>
            <button onClick={addValue}>Increase Cup</button>
            <button onClick={removeValue}>Decrease Cup</button>
        </>
    );
}

export default Chai;