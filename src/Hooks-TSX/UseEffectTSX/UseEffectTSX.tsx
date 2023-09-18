import React from 'react';

const UseEffectTSX = () => {
  React.useEffect(() => {
    console.log('montou');
    return () => {
      console.log('desmontou');
    };
  }, []);
  return <div>React</div>;
};

export default UseEffectTSX;
