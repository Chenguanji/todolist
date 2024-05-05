import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import TodoList from "./TodoList"
import "./styles.css"
import { SearchTodoForm } from "./SearchTodoForm"
import React from "react"
import "./word.css"
import { SignIn } from "./SignIn"

export default function App() {
   const [lastEditedTime, setLastEditedTime] = useState(new Date())
   const handleUpdateTime = () => {
      setLastEditedTime(new Date())
   }

   const [todos, setTodos] = useState([])
   const [searchKeyword, setSearchKeyword] = useState("")
   const filteredTodos = todos.filter((todo) =>
      todo.title.includes(searchKeyword)
   )

   function addTodo(title) {
      setTodos((currentTodos) => {
         return [
            ...currentTodos,
            { id: crypto.randomUUID(), title, completed: false },
         ]
      }, [])
   }

   function toggleTodo(id, completed) {
      handleUpdateTime()
      setTodos((currentTodos) => {
         return currentTodos.map((todo) => {
            if (todo.id === id) {
               return { ...todo, completed }
            }
            return todo
         })
      }, [])
   }

   function deleteTodo(id) {
      handleUpdateTime()
      setTodos((currentTodos) => {
         return currentTodos.filter((todo) => todo.id !== id)
      }, [])
   }

   return (
      <div className="container">
         <div className="control">
            <SearchTodoForm
               setSearchKeyword={setSearchKeyword}
               handleUpdateTime={handleUpdateTime}
            />
            <NewTodoForm
               onSubmit={addTodo}
               handleUpdateTime={handleUpdateTime}
            />
         </div>
         <SignIn />
         <div className="content">
            <TodoList
               todos={filteredTodos}
               toggleTodo={toggleTodo}
               deleteTodo={deleteTodo}
            />

            <p className="LastEditedTime">
               Last edited: {lastEditedTime.toLocaleString()}
            </p>
            <p className="DesignName">Design and Developed by Charlie</p>
         </div>
      </div>
   )
}
