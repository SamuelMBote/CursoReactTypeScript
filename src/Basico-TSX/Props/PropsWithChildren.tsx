import React from 'react';

type ButtonProps = React.PropsWithChildren<{
  onClick?: () => void;
  tamanho?: string;
}>;

const PropsWithChildren = ({tamanho, onClick, children}: ButtonProps) => {
  return (
    <button style={{fontSize: tamanho}} onClick={onClick}>
      {children}
    </button>
  );
};

export default PropsWithChildren;
