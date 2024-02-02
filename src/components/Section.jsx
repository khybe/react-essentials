// Define a functional presentation component named Section, accepting props as an object parameter
// This component represents a structured section with a title and content
export default function Section({ title, children, ...props }) {
  // Return JSX for the Section component
  return (
    // Render a section element with additional specified props
    <section {...props}>
      {/* Render an h2 element with the provided title, representing the section heading */}
      <h2>{title}</h2>
      {/* Render the children components/content within the section */}
      {children}
    </section>
  );
}
