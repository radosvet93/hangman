import React from "react";

const Def = ({ definitions }) => {
  const images = definitions.map((definition) => definition.image_url);
  const examples = definitions.map((definition) => definition.example);
  const defs = definitions.map((definition) => definition.definition);

  return (
    <>
      {examples.some((example) => example) && <h3>Examples</h3>}
      <ul>
        {examples.map((example) => {
          if (example) {
            return <li>{example}</li>;
          }
        })}
      </ul>
      {images.some((image) => image) && <h3>Images</h3>}

      {images.some((image) => {
        if (image) {
          return <img alt={image} src={image} />;
        }
      })}

      {defs.some((definition) => definition) && <h3>Definition</h3>}
      <ul>
        {defs.map((definition) => {
          if (definition) {
            return <li>{definition}</li>;
          }
        })}
      </ul>
    </>
  );
};

export default Def;
