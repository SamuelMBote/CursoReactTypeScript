import React from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  tamanho?: string;
};

const ComponentProps = ({children, tamanho, ...props}: ButtonProps) => {
  return (
    <button style={{fontSize: tamanho}} {...props}>
      {children}
    </button>
  );
};

export default ComponentProps;
