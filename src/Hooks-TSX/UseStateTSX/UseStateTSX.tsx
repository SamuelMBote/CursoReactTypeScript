import React from 'react';

function user() {
  return {nome: 'Samuel', profissao: 'Dev'};
}
type User = {
  nome: string;
  profissao: string;
};
type ButtonProps = React.ComponentProps<'button'> & {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};
const Button = ({incrementar}: ButtonProps) => {
  return <button onClick={() => incrementar((t) => t + 1)}>Incrementar</button>;
};

const UseStateTSX = () => {
  const [data, setData] = React.useState<User | null>(null);
  const [valor, setValor] = React.useState<number>(0);
  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 2000);
  }, []);
  return (
    <div>
      {data !== null && (
        <div>
          <p>
            Nome {data.nome}: Profissão {data.profissao}
          </p>
        </div>
      )}
      <p>{valor}</p>
      <Button incrementar={setValor} />
    </div>
  );
};

export default UseStateTSX;
