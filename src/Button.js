import React from 'react';

const Button = ({cambiarContador, contador}) => {

  return(
    <div>
      <p>Me has Clickeado: {contador} </p>
      <button onClick={ () => cambiarContador(contador + 1)}>Click Me</button>
    </div>
  )

}

export default Button;