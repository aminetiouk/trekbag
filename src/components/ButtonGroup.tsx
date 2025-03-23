import Button from './Button';
import { secondaryButtons } from '../lib/constants';
import { useItemsStore } from '../stores/itemsStore';

interface ButtonItem {
  text: string;
  onClick: () => void;
}

export default function ButtonGroup() {
  const handlers = useItemsStore();
  const buttons: ButtonItem[] = secondaryButtons(handlers);

  return (
    <section className="button-group">
      {buttons.map(button => {
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
