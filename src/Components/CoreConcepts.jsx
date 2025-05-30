// import { CORE_CONCEPTS } from "./data.js";

function CoreConcepts({ image, title, description }) {
  return (
    <>
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    </>
  );
}

export default CoreConcepts;
