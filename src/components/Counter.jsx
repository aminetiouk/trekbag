export default function Counter({ totalNumberOfItems, NumberOfItemsPacked }) {
  return (
    <p>
      <b>{NumberOfItemsPacked}</b> / {totalNumberOfItems} items packed
    </p>
  );
}
