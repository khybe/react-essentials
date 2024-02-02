// Import the useState hook from React
import { useState } from "react";

// Import TabButton, Section, Tabs, and EXAMPLES from specified file paths
import TabButton from "../components/TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

// Define the Examples component
export default function Examples() {
  // State hook to manage the selected topic
  const [selectedTopic, setSelectedTopic] = useState();

  // Handler function to update the selected topic
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  // Default content if no topic is selected
  let content = <p>Please, select a topic.</p>;

  // Render content based on the selected topic
  if (selectedTopic) {
    content = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  // Render the Examples component
  return (
    <Section title="Examples" id="examples">
      {/* Render Tabs component with TabButtons and dynamic content */}
      <Tabs
        buttons={
          <>
            {/* Render TabButtons for each topic */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              jsx
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              state
            </TabButton>
          </>
        }
      >
        {/* Render content based on the selected topic */}
        {content}
      </Tabs>
    </Section>
  );
}
