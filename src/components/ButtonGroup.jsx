import Button from './Button';
import { useItemsContext } from '../lib/hooks';
import { secondaryButtons } from '../lib/constants';

export default function ButtonGroup() {
  const handlers = useItemsContext();

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
