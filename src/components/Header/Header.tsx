import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to={'/'}>Home</Link>
        </div>
        <div>
          <Link to={'/basico'}>Básico</Link>
          <Link to={'/hooks'}>Hooks</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
