import alunos from "../../data/alunos";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  //   const li1 = (
  //     <li>
  //       {alunos[0].id} {alunos[0].nome} -> {alunos[0].nota}
  //     </li>
  //   );

  const alunosLi = alunos.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id} {aluno.nome} -> {aluno.nota}
      </li>
    );
  });
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {alunosLi}
        {/* {li1}  {/* <li>Ana - 9.7</li> 
        <li>Carlos - 7.7</li>
        <li>Daniel - 6.5</li> */}
      </ul>
    </div>
  );
};
