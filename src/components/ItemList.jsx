import { useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';

const sortingOption = [
  {
    label: 'Sort by default',
    value: 'default'
  },
  {
    label: 'Sort by packed',
    value: 'packed'
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked'
  }
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem
}) {
  const [sortBy, setSortBy] = useState('default');

  const sortedItems = items.sort((a, b) => {
    if (sortBy === 'packed') {
      return b.packed - a.packed;
    }

    if (sortBy === 'unpacked') {
      return a.packed - b.packed;
    }

    return;
  });

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
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
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
