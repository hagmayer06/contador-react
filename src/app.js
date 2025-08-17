import React, { useState } from "react";

export default function App() {
  const [numero, setNumero] = useState(0);

 

  return (
    <section>
      <h1>contador </h1>
      <p>{numero}</p>
      <button onClick={() => setNumero(numero + 1)}>mais </button>
      <button onClick={() => setNumero(numero - 1)}>menos</button>
    </section>
  );
}
