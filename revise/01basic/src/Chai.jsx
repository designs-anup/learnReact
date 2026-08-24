import {useState} from 'react'

function Chai(){
    const [counter, setCounter] = useState(5);
    //let counter = 10;

    const addValue = () =>{
        //console.log("Value added")
        if(counter >= 20){return}
        setCounter((previousCount) => previousCount + 1);
    }

    const removeValue = () => {
        if(counter <= 0){return}
        setCounter((previousCount) => previousCount - 1);
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