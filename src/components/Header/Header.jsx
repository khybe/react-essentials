// Import reactImg from the specified file path
import reactImg from "../../assets/react-core-concepts.png";

// Import the styles for the Header component
import "./Header.css";

// Array of descriptions related to React
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

// Function to generate a random integer up to a specified maximum
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Define the Header component
export default function Header() {
  // Get a random description from the reactDescriptions array
  const description = reactDescriptions[genRandomInt(2)];

  // Return JSX for the Header component
  return (
    // Render a header element
    <header>
      {/* Render an image with the specified source and alt text */}
      <img src={reactImg} alt="Stylized atom" />
      {/* Render an h1 element with the text "React Essentials" */}
      <h1>React Essentials</h1>
      {/* Render a paragraph element with dynamic content based on the random description */}
      <p>
        {/* Use the random description to dynamically generate content */}
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
