import {useState} from 'react'

function Todov1(){
    const [todoInput, setTodoInput] = useState('')
    const [storeTodoList, setStoreTodoList] = useState([])

    // --- CREATE ---
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!todoInput.trim()){ 
            alert("please enter... "); 
            return 
        }
        // console.log("hello form submited", todoInput)
        //setStoreTodoList([...storeTodoList, todoInput])

        const newTodo = {
            id: Date.now(),
            text: todoInput,
            completed: false
        }

        setStoreTodoList([...storeTodoList, newTodo])

        setTodoInput('')
    }   
    return(
        <>
            <h3>Todo Practice v1</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={todoInput} 
                    onChange={(e) => setTodoInput(e.target.value)}  
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {storeTodoList.map((item) => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        </>
    )
}

export default Todov1