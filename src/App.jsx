// Import the Header component from the specified file path
import Header from "./components/Header/Header.jsx";

// Import the CoreConcepts and Examples components from the specified file paths
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

// Define the main App component
function App() {
  // Return the JSX for the App component
  return (
    <>
      {/* Render the Header component */}
      <Header />
      <main>
        {/* Render the CoreConcepts component */}
        <CoreConcepts />
        {/* Render the Examples component */}
        <Examples />
      </main>
    </>
  );
}

// Export the App component as the default export
export default App;
