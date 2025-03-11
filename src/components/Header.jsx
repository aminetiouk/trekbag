import Counter from "./Counter";
import Logo from "./Logo";


export default function Header({ totalNumberOfItems }) {
  return (
    <header>
      <Logo />
      <Counter totalNumberOfItems={totalNumberOfItems}/>
    </header>
  );
}