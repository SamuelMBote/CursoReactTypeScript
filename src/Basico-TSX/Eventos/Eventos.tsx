import React from 'react';

type Props = React.ComponentProps<'input'> & {label: string};
const Eventos = ({label, ...props}: Props) => {
  const [value, setValue] = React.useState(false);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.currentTarget.checked);
  };
  return (
    <>
      <label
        style={{
          padding: '1rem',
          border: value ? '2px solid #8D2' : '2px solid #f70',
        }}
      >
        <input {...props} checked={value} onChange={handleChange} />
        {label}
      </label>
      <p>{value.toString()}</p>
    </>
  );
};

export default Eventos;
