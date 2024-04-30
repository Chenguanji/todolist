import {useEffect, useState} from "react"
import {NewTodoForm} from "./NewTodoForm"
import TodoList from "./TodoList"
import "./styles.css"
import { SearchTodoForm } from "./SearchTodoForm";
import {SignIn} from "./SignIn";
import React from "react";
// import { DraggableTodoItem, DroppableTodoList } from './drag';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
//import Edit from './Edit'


export default function App(){
  
  const [todos, setTodos] = useState ([])

  

  const [searchKeyword, setSearchKeyword] = useState("");
  const filteredTodos = todos.filter((todo) => todo.title.includes(searchKeyword));

  function addTodo (title) {
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed: false},
      ]
  },[])
  }
    
  function toggleTodo (id, completed){
    setTodos (currentTodos =>{
      return currentTodos.map (todo =>{
        if (todo.id === id){
          return { ...todo, completed }
        }
        return todo
      })
    },[])
  }

  function deleteTodo (id) {
    setTodos (currentTodos => {
      return currentTodos.filter (todo => todo.id !== id)
    },[])
  }



  const moveTodo = (dragIndex, hoverIndex) => {
    const draggedTodo = todos[dragIndex];
    const newTodos = [...todos];
    newTodos.splice(dragIndex, 1);
    newTodos.splice(hoverIndex, 0, draggedTodo);
    setTodos(newTodos);
  };


  return (
  <div className="container">
      <div className="control">
        <SearchTodoForm setSearchKeyword={setSearchKeyword} />
        <NewTodoForm onSubmit={addTodo} />
      </div>
      <div className="content">
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        <SignIn />
        {/* <DndProvider backend={HTML5Backend}> 
        <DroppableTodoList todos={todos} moveTodo={moveTodo} /> 
        <DraggableTodoItem />
        </DndProvider> */ }
        <h1>陳冠吉 Todo App</h1>
      
        {/* <Edit />  */}
      </div>
  </div>
  )


      
}


