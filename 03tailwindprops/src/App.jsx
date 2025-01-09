import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "John",
    age: 21
  }
  let myArr = [1,2,3]

  let user1 = {
    userName : "Sarah Dayan",
    userRole : "Staff Engineer, Algolia",
    userAvatar : "https://cdn.pixabay.com/photo/2022/08/25/23/06/woman-7411414_1280.png",
    userContent : "Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build size is tiny."
  }

  let user2 = {
    userName : "Woman Face",
    userAvatar : "https://cdn.pixabay.com/photo/2020/05/24/05/36/woman-5212479_1280.png"
  }

  let user3 = {
    userAvatar : "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490_1280.jpg"
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-green-400 rounded-xl p-4 mb-10">
        Hello world!
      </h1>

      <Card username="Sarah Dayan" userrole="Staff Engineer, Algolia" someObject={myObj} someArray={myArr} />

      <Card username={user2.userName} useravatar={user2.userAvatar} />

      <Card username="Jane Doe" useravatar={user3.userAvatar} />

      <Card username={user1.userName} userrole={user1.userRole} usercontent={user1.userContent} useravatar={user1.userAvatar} />
      
    </>
  )
}

export default App
