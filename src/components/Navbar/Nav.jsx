import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="mx-auto flex items-center justify-between mt-12 px-5">
      <img className="w-[200px] " src="Logo.png" alt="Logo" />
      <ul className="flex gap-10">
        <li>
          <NavLink
            to="/"
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
            to="/donation"
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
            to="/statics"
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
