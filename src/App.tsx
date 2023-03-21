import React, { useState } from 'react'

import './App.css'
import InputField from './components/InputField'
import Todo from './components/model'
import TodoList from './components/TodoList'



// let name: unknown = "adam"
// let age: number = 24
// let isStudent: boolean;
// let hobbies: string[]
// let role: [number, string];

// type Person = {
//   name: string,
//   age:number
// }

// let person: Person = {
//   name: "azu",
//   age:20
  
// }
// let lotsOfPeople: Person[]


// let printName: (name: string) => never;


const App: React.FC = () => { 
  const [todo, setTodo] = useState<string>("");
  const [todos, seTtodos] = useState<Todo[]>([])


  const handleAdd = (e:React.FormEvent) => { 
    e.preventDefault()

    if (todo) {
      console.log(todo)
      seTtodos([...todos, {
        id: Date.now(),
        todo: todo,
        isDone:false
      }])
      setTodo("")
      console.log(todos)

    }

  }
  
  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={seTtodos} />
      
    </div>
  )
}

export default App
