import { useState } from 'react'
import './App.css'

function App() {
  // 1. State: The memory of your component
  const [count, setCount] = useState(0)

  // 2. Logic: What happens when an action occurs
  const handleClick = () => {
    setCount(count + 1)
  }

  // Reset Action
  const handleReset = () => {
    setCount(0)
  }

  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
  ];

  // Transforms array of objects -> array of strings (or JSX in React)
  const userNames = users.map(user => user.name);
  console.log(userNames); // ['Alice', 'Bob', 'Charlie']

  const products = [
    { id: 1, name: 'Laptop', price: 999 }, 
    { id: 2, name: 'Mouse', price: 25 }
  ];

  console.log(products);
  
  // use .map() to create a new array of formatted strings: ["Laptop - $999", "Mouse - $25"]
  const productResult1 = products.map(product => {
    return [
      product.name,
      product.price
    ].join(' - $')  
  });
  console.log(productResult1);

  // Concise one-liner with implicit return
  const productResult = products.map(
    product => `${product.name} - $${product.price}`
  );

  // 3. UI (JSX): What gets rendered on screen
  return (
    <>
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Welcome to React + Vite! 🚀</h1>
      <p>Current Count: <strong>{count}</strong></p>
      <button onClick={handleClick}>Click Me!</button>
      <button onClick={handleReset}>Reset</button>
    </div>

    <ul>
      {
        users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))
      }
    </ul>

    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
