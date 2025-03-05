import { useState } from "react";
import Button from "./Button";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      return;
    }

    const newItem = {
      id: new Date().getTime(),
      name: itemText,
      packed: false
    }

    setItems(prev => [...prev, newItem])
  };
  return (
    <form onSubmit={handleSubmit} >
      <h2>Add an item</h2>
      <input
      value={itemText}
      onChange={(e) => {
        setItemText(e.target.value);
      }} />
      <Button text="Add to list"/>
    </form>
  )
}
