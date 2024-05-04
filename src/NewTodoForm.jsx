import { useState } from "react"
import React from "react"
// import "./word.css"

export function NewTodoForm({ handleUpdateTime, onSubmit }) {
   const [newItem, setNewItem] = useState("")

   function handleSubmit(e) {
      e.preventDefault()
      if (newItem === "") return

      onSubmit(newItem)

      setNewItem("")
   }

   return (
      <form onSubmit={handleSubmit} className="new-item-form">
         <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input
               value={newItem}
               onChange={(e) => setNewItem(e.target.value)}
               type="text"
               id="item"
            />
         </div>
         <button className="btn" onClick={handleUpdateTime}>
            Add
         </button>
      </form>
   )
}
