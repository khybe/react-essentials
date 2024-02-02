// Define a functional component named Tabs, accepting props as an object parameter
export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //   const ButtonsContainer = buttonsContainer; (commented out, not used)

  // Return JSX for the Tabs component
  return (
    <>
      {/* Render buttons within the specified ButtonsContainer (default is "menu") */}
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {/* Render children components/content */}
      {children}
    </>
  );
}
