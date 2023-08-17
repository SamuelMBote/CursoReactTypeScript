import React from 'react';

const InterfacesTiposUm = ({children}: React.PropsWithChildren) => {
  const handleClick: React.MouseEventHandler = (e: React.MouseEvent) => {
    console.log(e.pageX);
  };
  return <button onClick={handleClick}>{children}</button>;
};
export default InterfacesTiposUm;
