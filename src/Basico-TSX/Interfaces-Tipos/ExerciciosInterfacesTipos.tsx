import React from 'react';
/*Anote o tipo das propriedades de Button  */
type ButtonProps = React.ComponentProps<'button'> & {
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const Button = ({total, setTotal}: ButtonProps) => {
  return (
    <button
      value={total}
      onClick={() => {
        setTotal((t) => t + 1);
      }}
    >
      Incrementar {total}
    </button>
  );
};

const ExerciciosInterfacesTipos = () => {
  const [total, setTotal] = React.useState(0);
  return (
    <div>
      <p>Total: {total}</p>
      <Button total={total} setTotal={setTotal} />
    </div>
  );
};

export default ExerciciosInterfacesTipos;
