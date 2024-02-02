// Import CoreConcept, Section, and CORE_CONCEPTS from specified file paths
import CoreConcept from "./CoreConcept.jsx";
import Section from "./Section.jsx";
import { CORE_CONCEPTS } from "../data.js";

// Define the CoreConcepts component
export default function CoreConcepts() {
  // Render the CoreConcepts component
  return (
    // Render a Section with the title "Core Concepts" and the id "core-concepts"
    <Section title="Core Concepts" id="core-concepts">
      {/* Render an unordered list */}
      <ul>
        {/* Map over each item in the CORE_CONCEPTS array and render a CoreConcept component for each */}
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept key={index} {...conceptItem} />
        ))}
      </ul>
    </Section>
  );
}
