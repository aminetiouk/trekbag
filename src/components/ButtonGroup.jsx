import Button from './Button';
import { secondaryButtons } from '../lib/constants';
import { useItemsStore } from '../stores/itemsStore';

export default function ButtonGroup() {
  const handlers = useItemsStore();

  return (
    <section className="button-group">
      {secondaryButtons(handlers).map(button => {
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
