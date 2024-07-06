import { NavLink } from "react-router-dom";
import logo_dark from "../../assets/images/logo/portfolio_dark-logo_flex-removebg-preview.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="resume" spy={true} smooth={true} duration={500}>
          Résumé
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 pb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="lg:w-[300px] lg:ps-10">
          <img className="w-full" src={logo_dark} />
        </div>
      </div>
      <div className="navbar-end hidden lg:flex lg:pe-10">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
