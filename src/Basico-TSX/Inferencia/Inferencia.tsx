import React from 'react';

const Inferencia = () => {
  const [total, setTotal] = React.useState(0);
  function incrementar() {
    setTotal((total) => total + 1);
  }
  return (
    <div>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

export default Inferencia;
