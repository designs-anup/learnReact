import { useState } from 'react'
import './App.css'
import List from './components/List'

function App() {

  const fruits = [{id:1, name: "apple", calaries: 95}, 
                  {id:2, name: "orange", calaries: 45}, 
                  {id:3, name: "banana", calaries: 105}, 
                  {id:4, name: "coconut", calaries: 159}, 
                  {id:5, name: "pineapple", calaries: 37}]

  const vegitables = [{id:1, name: "potatoes", calaries: 110}, 
                  {id:2, name: "celery", calaries: 15}, 
                  {id:3, name: "carrots", calaries: 25}, 
                  {id:4, name: "corn", calaries: 63}, 
                  {id:5, name: "broccoli", calaries: 50}]

  return (
    <>

      <List items={fruits} category="Fruits" />

      <List items={vegitables} category="Veg-Tables" />
      
    </>
  )
}

export default App
