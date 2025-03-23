import { useState, useMemo } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { sortingOption } from '../lib/constants';
import { useItemsStore } from '../stores/itemsStore';

type ItemType = {
  id: number;
  name: string;
  packed: boolean;
};

type SortOption = 'default' | 'packed' | 'unpacked';

export default function ItemList() {
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const deleteItem = useItemsStore(state => state.deleteItem);
  const toggleItem = useItemsStore(state => state.toggleItem);
  const items = useItemsStore(state => state.items as ItemType[]);
  const sortedItems = useMemo(
    () =>
      [...items].sort((a: ItemType, b: ItemType): number => {
        if (sortBy === 'packed') {
          return Number(b.packed) - Number(a.packed);
        }

        if (sortBy === 'unpacked') {
          return Number(a.packed) - Number(b.packed);
        }

        return 0;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}
      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={option => setSortBy(option?.value as SortOption)}
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

type ItemProps = {
  item: ItemType;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
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
