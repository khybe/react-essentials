export default function TabButton({ children, onSelect }) {
  console.log("TabButton is executed");

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
