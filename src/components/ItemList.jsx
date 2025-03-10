export default function ItemList({
  items,
  handleDeleteItem,
}) {
  return (
    <ul>
      {items.map(item => {
        return (
          <Item
            key={item.id}
            item={item}
            handleDeleteItem={handleDeleteItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, handleDeleteItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
        />
        {item.name}
      </label>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
