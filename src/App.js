import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, order: 1},
    { id: 2, order: 2},
    { id: 3, order: 3},
    { id: 4, order: 4},
  ]);
  
  const [draggedItem, setDraggedItem] = useState(null);
  
  
  const handleDrop = (id) => {
    if (draggedItem === null || draggedItem === id) return;
  
    const draggedIndex = items.findIndex((item) => item.id === draggedItem);
    const targetIndex = items.findIndex((item) => item.id === id);
  
    const [movedItem] = items.splice(draggedIndex, 1);
    items.splice(targetIndex, 0, movedItem);
  
    const updatedItems = items.map((item) => ({
      ...item,
    }));
  
    setItems(updatedItems);
    setDraggedItem(null);
  };
  
  return (
    <ul>
      {items.map((item) => (
        <li
          key={item.id}
          draggable
          onDragStart={() => setDraggedItem(item.id)}
          onDragOver={(e)=>e.preventDefault()}
          onDrop={() => handleDrop(item.id)}
        >
           Order: {item.order} , id : {item.id}
        </li>
      ))}
    </ul>
  );
  };
  

export default App;
