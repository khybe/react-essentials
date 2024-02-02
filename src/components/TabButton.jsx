// Define a functional component named TabButton, accepting props as an object parameter
export default function TabButton({ children, isSelected, ...props }) {
  // Return JSX for the TabButton component
  return (
    // Render a list item containing a button
    <li>
      {/* Apply the "active" class to the button if isSelected is true */}
      <button className={isSelected ? "active" : ""} {...props}>
        {/* Render the content (children) within the button */}
        {children}
      </button>
    </li>
  );
}
