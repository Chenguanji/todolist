import { useState } from "react";
import React from "react";

export function SearchTodoForm({ setSearchKeyword }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setSearchKeyword(value);
  }

  function handleSearchChange(e) {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">Search Item</label>
        <input type="text" placeholder="search" value={value} onChange={handleSearchChange} />
      </div>
      <button className="btn">Search</button>
    </form>
  );
}