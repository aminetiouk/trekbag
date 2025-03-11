import Counter from './Counter';
import Logo from './Logo';

export default function Header({ totalNumberOfItems, NumberOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        NumberOfItemsPacked={NumberOfItemsPacked}
      />
    </header>
  );
}
