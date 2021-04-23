/* eslint-disable import/no-anonymous-default-export */
import "./App.css";
import React from "react";

import IndiretaPai from "./components/comuniccao/IndiretaPai";
import DiretaPai from "./components/comuniccao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basics/FamiliaMembro";
import Familia from "./components/basics/Familia";
import Card from "./components/layout/Card";
import NumAleatorio from "./components/basics/Aleatorio";
import Fragmento from "./components/basics/Fragmento";
import ComParametro from "./components/basics/ComParametro";
import First from "./components/basics/First";

export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">
      <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
        <IndiretaPai />
      </Card>
    </div>
    <div className="Cards">
      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai />
      </Card>
    </div>
    <div className="Cards">
      <Card titulo="#08 - Renderização Condifional" color="#982395">
        <ParOuImpar numero="20"></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
        <UsuarioInfo usuario={{ email: "fer@nando.com" }}></UsuarioInfo>
      </Card>
    </div>
    <div className="Cards">
      <Card titulo="#07 - Desafio da Repetição" color="#3A9AD9">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#6 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <NumAleatorio min={1} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva"
          nota={9.3}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <First></First>
      </Card>
    </div>
  </div>
);
