export const initialItems = [
  {
    id: 1,
    name: "good mood",
    packed: true
  },
  {
    id: 2,
    name: "passport",
    packed: false
  },
  {
    id: 3,
    name: "phone charger",
    packed: false
  }
]

export const sortingOption = [
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

export const secondaryButtons = (handlers) => [
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