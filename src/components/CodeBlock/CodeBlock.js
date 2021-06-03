import React from "react";
import "./CodeBlock.css";

const sample_documentation = `
  // Sample documentation
  function docAPI() {
    ...
  }
`;

function CodeBlock() {
  return <pre className="code-block">{sample_documentation}</pre>;
}

export default CodeBlock;
