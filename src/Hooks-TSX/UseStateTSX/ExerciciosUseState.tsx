import React from 'react';
import ExercicioProps from '../../Basico-TSX/Props/ExercicioProps';

/*
Interface da API: https://data.origamid.dev/vendas/
<!-- Essa API possui dados de hoje até 90 dias atrás -->

1 - Utilize a API: `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
2 - Inicio/Final é uma string do tipo data YYYY-MM-DD (padrão de saída do input tipo date)
3 - Crie ou reutilize o componente Input.tsx (Label com Input) das aulas anteriores
4 - Crie 3 estados reativos em App.tsx: data, inicio, final
5 - Utilize o componente Input.tsx para modificar o estado de inicio/final
6 - Crie um efeito que ocorrerá toda vez que inicio/final mudar. Se existir inicio/final, faça o fetch da API e popule o estado de data com o resultado.
7 - Caso data seja diferente de null, mostre na tela o nome e o status de cada venda do período selecionado
*/
type Venda = {id: string; nome: string; preco: number; status: string};
const ExerciciosUseState = () => {
  const [inicio, setInicio] = React.useState<string>('');
  const [final, setFinal] = React.useState<string>('');
  const [data, setData] = React.useState<Venda[] | null>(null);
  async function fetchData(inicio: string, final: string) {
    try {
      const response = await fetch(
        `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
      );
      if (!response.ok) {
        throw new Error('Erro na busca de vendas');
      }
      console.log(response);
      const data = await response.json();
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  React.useEffect(() => {
    if (inicio.length && final.length) fetchData(inicio, final);
  }, [inicio, final]);
  return (
    <div>
      <ExercicioProps
        value={inicio}
        onChange={(e) => {
          setInicio(e.target.value);
        }}
        label="Inicio"
        type="date"
        name="inicio"
        id="inicio"
      />
      <ExercicioProps
        value={final}
        onChange={(e) => {
          setFinal(e.target.value);
        }}
        label="Final"
        type="date"
        name="final"
        id="final"
      />
      {data &&
        Array.isArray(data) &&
        data.map((item) => {
          return (
            <div
              key={item.id}
              style={{margin: 5, padding: 2, border: '2px solid wheat'}}
            >
              <p>
                {item.nome}: {item.status}
              </p>
            </div>
          );
        })}
    </div>
  );
};

export default ExerciciosUseState;
