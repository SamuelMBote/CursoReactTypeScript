import React from 'react';
/*
1 - Crie um componente Input
2 - Ele deve retornar <label> e <input>, dentro de uma <div>
3 - Recebe uma propriedade chamada label
4 - A propriedade deve ser usada como htmlFor (label), name (input), id (input) e como conteúdo de <label>
5 - Permita o uso de qualquer propriedade de input no componente Input.
6 - Adicione 1rem de marginBottom na <div>
*/
type InputProps = React.ComponentProps<'input'> & {label: string};
const ExercicioProps = ({label, name, type, ...props}: InputProps) => {
  return (
    <div style={{marginBottom: '1rem'}}>
      <label htmlFor={name}>{label}</label>
      <input name={name} type={type} {...props} />
    </div>
  );
};

export default ExercicioProps;
