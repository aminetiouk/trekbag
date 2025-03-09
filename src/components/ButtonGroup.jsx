import Button from './Button';

export default function ButtonGroup({
  onRemoveAllItems,
  onResetToInitial,
  onMarkAllAsComplete,
  onMarkAllAsIncomplete
}) {
  const secondaryButtons = [
    {
      text: 'Mark all as complete',
      onClick: onMarkAllAsComplete
    },
    {
      text: 'Mark all as incomplete',
      onClick: onMarkAllAsIncomplete
    },
    {
      text: 'Reset to initial',
      onClick: onResetToInitial
    },
    {
      text: 'Remove all items',
      onClick: onRemoveAllItems
    }
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map(button => {
        return (
          <Button
            onClick={button.onClick}
            key={button.text + button.onClick.toString()}
            type="secondary"
            text={button.text}
          />
        );
      })}
    </section>
  );
}
