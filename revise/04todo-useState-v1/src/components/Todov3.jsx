import { useState } from "react"

function Todov3(){
    const [todoInput, setTodoInput] = useState('')
    const [todoList, setTodoList] = useState([])
    const handleTodo = (e) => {
        e.preventDefault()
        if(!todoInput.trim()){ alert("input can not be empty"); return }
        // console.log("Hello Form Submited : ", todoInput)

        const newTodo = {
            id : Date.now(),
            text : todoInput,
            completed : false
        }

        setTodoList([...todoList, newTodo])
        setTodoInput('')
    }

    const deleteTodo = (id) => {
        // console.log("id to delete : ", id)
        setTodoList(todoList.filter((item) => {return item.id !== id }))
    }
    return(
        <>
            <h2>Todo ver3 Practice</h2>
            <form onSubmit={handleTodo}>
                <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todoList.map((item) => {
                    return <li key={item.id}>{item.text}<button onClick={() => deleteTodo(item.id)}>Remove</button></li>
                } )}
            </ul>
        </>
    )
}

export default Todov3