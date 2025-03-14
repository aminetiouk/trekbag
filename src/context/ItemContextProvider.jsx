import { useState, useEffect, useMemo } from 'react';
import { initialItems } from '../lib/constants';
import { ItemsContext } from './ItemsContext';

export default function ItemContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : initialItems;
  });

  const handleAddItem = newItemText => {
    const newItem = {
      id: Date.now(),
      name: newItemText,
      packed: false
    };
    setItems(prevItems => [...prevItems, newItem]);
  };

  const handleDeleteItem = id => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleToggleItem = id => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleRemoveAllItems = () => setItems([]);

  const handleResetToInitial = () => setItems(initialItems);

  const handleMarkAllAsComplete = () => {
    setItems(prevItems => prevItems.map(item => ({ ...item, packed: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems(prevItems => prevItems.map(item => ({ ...item, packed: false })));
  };

  useEffect(() => {
    if (Array.isArray(items)) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  const contextValue = useMemo(
    () => ({
      items,
      handleAddItem,
      handleDeleteItem,
      handleToggleItem,
      handleRemoveAllItems,
      handleResetToInitial,
      handleMarkAllAsComplete,
      handleMarkAllAsIncomplete
    }),
    [items]
  );

  return (
    <ItemsContext.Provider value={contextValue}>
      {children}
    </ItemsContext.Provider>
  );
}
