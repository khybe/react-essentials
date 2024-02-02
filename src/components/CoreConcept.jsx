// Define a functional component named CoreConcept, accepting image, title, and description as props
export default function CoreConcept({ image, title, description }) {
  // Return JSX for the CoreConcept component
  return (
    // Render a list item
    <li>
      {/* Render an image with the specified source and alt text */}
      <img src={image} alt={title} />
      {/* Render an h3 element with the provided title */}
      <h3>{title}</h3>
      {/* Render a paragraph element with the provided description */}
      <p>{description}</p>
    </li>
  );
}
