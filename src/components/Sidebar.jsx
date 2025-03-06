import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

export default function Sidebar({ handleNewItem }) {
  return (
    <div className="sidebar">
      <AddItemForm handleNewItem={handleNewItem}/>

      <ButtonGroup />
    </div>
  )
} 