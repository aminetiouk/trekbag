import { useState } from "react";
import Button from "./Button";
import { useRef } from "react";

export default function AddItemForm({ setItems }) {
  const [itemText, setItemText] = useState("")
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty");
      inputRef.current.focus();
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
      ref={inputRef}
      value={itemText}
      onChange={(e) => {
        setItemText(e.target.value);
      }} />
      <Button text="Add to list"/>
    </form>
  )
}
