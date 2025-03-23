// Define the Item type for initialItems
export interface Item {
  id: number;
  name: string;
  packed: boolean;
}

// Define the SortingOption type for sortingOption
export interface SortingOption {
  label: string;
  value: string;
}

// Define the Button type for secondaryButtons
export interface Button {
  text: string;
  onClick: () => void;
}

// Initial items with defined type
export const initialItems: Item[] = [
  {
    id: 1,
    name: 'good mood',
    packed: true
  },
  {
    id: 2,
    name: 'passport',
    packed: false
  },
  {
    id: 3,
    name: 'phone charger',
    packed: false
  }
];

// Sorting options with defined type
export const sortingOption: SortingOption[] = [
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

// Define the handler type for secondaryButtons
interface Handlers {
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  resetToInitial: () => void;
  removeAllItems: () => void;
}

// Secondary buttons with handlers
export const secondaryButtons = (handlers: Handlers): Button[] => [
  {
    text: 'Mark all as complete',
    onClick: handlers.markAllAsComplete
  },
  {
    text: 'Mark all as incomplete',
    onClick: handlers.markAllAsIncomplete
  },
  {
    text: 'Reset to initial',
    onClick: handlers.resetToInitial
  },
  {
    text: 'Remove all items',
    onClick: handlers.removeAllItems
  }
];
