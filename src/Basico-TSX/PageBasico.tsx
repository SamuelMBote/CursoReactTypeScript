import React from 'react';
import Inferencia from './Inferencia/Inferencia';
import ComponentProps from './Props/ComponentProps';
import ExercicioProps from './Props/ExercicioProps';
import Props from './Props/Props';
import PropsWithChildren from './Props/PropsWithChildren';
import InterfacesTiposUm from './Interfaces-Tipos/InterfacesTiposUm';
import ExerciciosInterfacesTipos from './Interfaces-Tipos/ExerciciosInterfacesTipos';
import Eventos from './Eventos/Eventos';

const PageBasico = () => {
  const [data, setData] = React.useState<{
    nome: string;
    email: string;
    data: Date;
  }>({nome: '', email: '', data: new Date()});
  function onClick() {
    console.log('clicou');
  }
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData({...data, [key]: value});
  }
  return (
    <main>
      <div>
        <h3>Inferencia</h3>
        <Inferencia />
      </div>
      <div>
        <h3>Props</h3>
        <Props onClick={onClick} tamanho="2">
          Teste de Props
        </Props>
      </div>
      <div>
        <h3>Props With Children</h3>
        <PropsWithChildren onClick={onClick} tamanho="2">
          Teste de Props With Children
        </PropsWithChildren>
      </div>
      <div>
        <h3>Component Props</h3>
        <ComponentProps onClick={onClick} tamanho="2">
          Teste de Component Props
        </ComponentProps>
      </div>
      <div>
        <h3>Exercicio - Props</h3>
        <ExercicioProps
          onChange={onChange}
          value={data.nome}
          label="Nome"
          type="text"
          name="nome"
          id="nome"
        />
        <ExercicioProps
          onChange={onChange}
          value={data.email}
          label="Email"
          type="email"
          name="email"
        />
        <ExercicioProps
          onChange={onChange}
          label="Data"
          type="date"
          name="data"
        />
        <p>{JSON.stringify(data)}</p>
      </div>
      <div>
        <h3>Interface e Tipos 1</h3>
        <InterfacesTiposUm>Teste</InterfacesTiposUm>
      </div>
      <div>
        <h3>Interface e Tipos Exercicio</h3>
        <ExerciciosInterfacesTipos />
      </div>
      <div>
        <h3>Eventos</h3>
        <Eventos label="Termos e Condiçoes" type="checkbox" />
      </div>
    </main>
  );
};

export default PageBasico;
