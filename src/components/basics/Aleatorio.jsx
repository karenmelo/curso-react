//Desafio número aleatório
//Sortear um número aleatório entre um valor mínimo e máximo
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  //const min = Math.ceil(7) //pode ser feita a constante assim
  //const max = Math.floor(103)

  const { min, max } = props; //ou assim que se chama destructuring- coisa de javascript
  const numAleat = Math.floor(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Desafio do número aleatório</h2>
      <p>
        <strong>Valor mínimo:</strong> { min }
      </p>
      <p>
        <strong>Valor máximo:</strong> { max }
      </p>
      <strong>Valor aleatório: </strong> { numAleat }
    </div>
  );
};
