import UseStateTSX from './UseStateTSX/UseStateTSX';
import ExerciciosUseState from './UseStateTSX/ExerciciosUseState';
import UseEffectTSX from './UseEffectTSX/UseEffectTSX';
import UseRefTSX from './UseRefTSX/UseRefTSX';
import ExercicioUseRefTSX from './UseRefTSX/ExercicioUseRefTSX';

const PageHooks = () => {
  return (
    <main>
      <div>
        <h3>useState</h3>
        <UseStateTSX />
      </div>
      <div>
        <h3>Exercício useState</h3>
        <ExerciciosUseState />
      </div>
      <div>
        <h3>useEffect</h3>
        <UseEffectTSX />
      </div>
      <div>
        <h3>useRef</h3>
        <UseRefTSX />
      </div>
      <div>
        <h3>Exercicio useRef</h3>
        <ExercicioUseRefTSX />
      </div>
    </main>
  );
};

export default PageHooks;
