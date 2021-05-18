import React, { useState, useEffect } from "react";
import "./style.css";
import Button from "./Button";

export default function App() {

  const [contador, cambiarContador] = useState(0)

  useEffect( () => {
    console.log('useEffect una sola vez por []');
  }, [])

  return (
    <div>

      {/*<Button cambiarContador= {cambiarContador} contador={contador}/>*/}
      <p>contador {contador}</p>
      <button contador={contador} onClick={ () => cambiarContador(contador + 1)}>Click Me</button>
    </div>
  );
}
