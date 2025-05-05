// Important:
// For this project to work on CodeSandbox, image assets ("assets") folder
// must be stored in the public folder (as it's the case by default in this project)
import Header from "./Components/Header.jsx";
import CoreConcepts from "./Components/CoreConcepts.jsx";
import TabButton from "./Components/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { useState } from "react";

function App() {
  const [selectedButton, setSelectedButton] = useState("");
  const handleSelect = (selectedButton) => {
    console.log(`selected button is ${selectedButton}`);
    setSelectedButton(selectedButton);
  };

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concepts) => (
              <CoreConcepts key={CORE_CONCEPTS.title} {...concepts} />
            ))}
            {/* <CoreConcepts
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
            <CoreConcepts
              image={CORE_CONCEPTS[1].image}
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
            />
            <CoreConcepts
              image={CORE_CONCEPTS[2].image}
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
            />
            <CoreConcepts
              image={CORE_CONCEPTS[3].image}
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
            /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isClicked={selectedButton === "components"}
              onSelect={() => handleSelect("components")}
              label="Components"
            />
            <TabButton
              isClicked={selectedButton === "jsx"}
              onSelect={() => handleSelect("jsx")}
              label="JSX"
            />
            <TabButton
              isClicked={selectedButton === "props"}
              onSelect={() => handleSelect("props")}
              label="Props"
            />
            <TabButton
              isClicked={selectedButton === "state"}
              onSelect={() => handleSelect("state")}
              label="State"
            />
          </menu>
          {!selectedButton ? (
            <p>Please select a Topic</p>
          ) : (
            <div id="tab-content" contentEditable="true">
              <h3>{EXAMPLES[selectedButton].title}</h3>
              <p>{EXAMPLES[selectedButton].description}</p>
              <pre id="core-concepts">
                <code>{EXAMPLES[selectedButton].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
