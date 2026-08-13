import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // 1. New State for Editing
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // --- CREATE ---
  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInput('');
  };

  // --- UPDATE: Toggle Complete ---
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // --- UPDATE: Start Editing Mode ---
  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text); // Pre-fill the edit input with the current text
  };

  // --- UPDATE: Save Edited Text ---
  const saveEdit = (id) => {
    if (!editText.trim()) return;

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: editText } : todo
      )
    );
    setEditingId(null); // Exit editing mode
    setEditText('');
  };

  // --- UPDATE: Cancel Editing ---
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // --- DELETE ---
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ maxWidth: '450px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h2>Todo List</h2>

      {/* Add Todo Form */}
      <form onSubmit={addTodo} style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #ccc',
              gap: '8px',
            }}
          >
            {/* CONDITIONAL RENDER: Show Edit Input OR Normal Text */}
            {editingId === todo.id ? (
              // EDITING MODE
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={{ flex: 1, padding: '4px' }}
                />
                <button
                  onClick={() => saveEdit(todo.id)}
                  style={{ background: '#28a745', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  style={{ background: '#6c757d', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Cancel
                </button>
              </>
            ) : (
              // NORMAL DISPLAY MODE
              <>
                <span
                  onClick={() => toggleComplete(todo.id)}
                  style={{
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={() => startEditing(todo)}
                  style={{ background: '#007bff', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{ background: 'red', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
