import { NavLink } from "react-router-dom";
import { logo, logo2 } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo2} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
        {/* Replace NavLink for Resume with an <a> tag */}
        <a href="https://docs.google.com/document/d/1X_LntxJO1ut_oTyLuw7MfRMH6CqgfizwUFs6ibvQT78/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
          Resume
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

