import { useState, useMemo } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { sortingOption } from '../lib/constants';
import { useItemsStore } from '../stores/itemsStore';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('default');
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  const items = useItemsStore((state) => state.items);
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        }

        if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={option => setSortBy(option.value)}
            options={sortingOption}
            defaultValue={sortingOption[0]}
          />
        </section>
      ) : null}
      {sortedItems.map(item => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
