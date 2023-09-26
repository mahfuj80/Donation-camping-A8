import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to={'/'}>
      <div>
        <img className="w-[200px] " src="/Logo.png" alt="Logo" />
      </div>{' '}
    </Link>
  );
};

export default Logo;
