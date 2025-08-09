import './App.css'
import BoxComponent from './components/BoxComponent'

function App() {
  
  return (
    <>
      <div>Hello World</div>      
      <BoxComponent title="Box Header 1" bgColor="lavender" textColor="purple" boxHeight="150" large>Box Message 1 goes here .... </BoxComponent>
      <BoxComponent title="Box Header 2" bgColor="yellow" textColor="red" >Box Message 2 goes here .... </BoxComponent>
      <BoxComponent title="Box Header 3" bgColor="pink" textColor="purple" large={true}>Box Message 3 goes here .... </BoxComponent>
    </>
  )
}

export default App
