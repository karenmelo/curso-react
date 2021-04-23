import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

// eslint-disable-next-line import/no-anonymous-default-export

/*
Desafio Repetição

Criar na pasta dados produtos.js
O produto vai ter 3 propriedades:
 - id;
 - nome;
 - preço do produto;
 
E na pasta repetição criar tabelaprodutos e aqui criar uma tabela usando jsx mostrando cada produto numa linha com sua 
respectiva coluna de id e preço
*/

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const tabProdutos = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>R$ {produto.preco.toFixed(2).replace(".", ",")}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos"> 
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{tabProdutos}</tbody>
      </table>
    </div>
  );
};
