import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>hallo</Button>
      <Button>hello</Button>
      <Button>salut</Button>
      <Button>ciao</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
