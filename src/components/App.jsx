import React, { useState } from "react";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem(event) {
    setItems((prevValue) => {
      return [...prevValue, currentItem];
    });
    setCurrentItem("");
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setCurrentItem(newValue);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>

      <div className="form">
        <input type="text" value={currentItem} onChange={handleChange} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>

      <div>
        <ul>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
