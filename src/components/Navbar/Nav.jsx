import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <div className="mx-auto flex flex-col gap-8 md:flex-row md:gap-0 items-center justify-between mt-12 px-5">
      <Logo></Logo>
      <ul className="flex gap-10">
        <li>
          <NavLink
            to={'/'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-rose-600 font-bold underline'
                : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/donation'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-rose-600 font-bold underline'
                : ''
            }
          >
            Donation
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/statics'}
            className={({ isActive, isPending }) =>
              isPending
                ? 'pending'
                : isActive
                ? 'text-rose-600 font-bold underline'
                : ''
            }
          >
            Statics
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
