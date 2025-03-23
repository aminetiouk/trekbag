import { create } from 'zustand';
import { initialItems } from '../lib/constants';
import { persist } from 'zustand/middleware';

// Define the shape of an Item
interface Item {
  id: number;
  name: string;
  packed: boolean;
}

// Define the shape of the store state
interface ItemsState {
  items: Item[];
  addItem: (newItemText: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
}

// Create the Zustand store with persistence
export const useItemsStore = create<ItemsState>()(
  persist(
    set => ({
      items: initialItems,
      addItem: newItemText => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false
        };

        set(state => ({ items: [...state.items, newItem] }));
      },
      deleteItem: id => {
        set(state => {
          const newItems = state.items.filter(item => item.id !== id);
          return { items: newItems };
        });
      },
      toggleItem: id => {
        set(state => {
          const newItems = state.items.map(item => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }

            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: true };
          });

          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set(state => {
          const newItems = state.items.map(item => {
            return { ...item, packed: false };
          });

          return { items: newItems };
        });
      }
    }),
    {
      name: 'items'
    }
  )
);
