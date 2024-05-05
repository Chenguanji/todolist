import TodoItem from "./TodoItem"
import React from "react"
//import firebase from "firebase/app"
import "firebase/database"

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
   return (
      <ul className="list">
         {todos.length === 0 && "No Todos"}
         {todos.map((todo) => {
            return (
               <TodoItem
                  {...todo}
                  key={todo.id}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
               />
            )
         })}
      </ul>
   )
}
