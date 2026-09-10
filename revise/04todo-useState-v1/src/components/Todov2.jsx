import {useState} from 'react'

function Todov2(){
    const[todoInput, setTodoInput] = useState('')
    const[todoList, setTodoList] = useState([])
    const handleTodo = (e) => {
        e.preventDefault()
        if(!todoInput.trim()){ alert('input is empty'); return }
        console.log("form submitted : " , todoInput)
        setTodoList([todoList, ...todoInput])
        setTodoInput('')
    }
    return(
        <>
        <h2>todo version practice 2</h2>
        <form onSubmit={handleTodo}>
            <input
                type="text"
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
        {todoList}
        </>
    )
}

export default Todov2