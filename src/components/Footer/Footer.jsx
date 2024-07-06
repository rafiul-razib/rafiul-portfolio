import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import dark_logo from "../../assets/images/logo/portfolio_dark_logo-removebg-preview.png";
const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 mt-6 lg:mt-28">
      <aside>
        <figure className="w-1/4">
          <img src={dark_logo} alt="" srcSet="" />
        </figure>
        <p>
          Passionate coder crafting intuitive, responsive, and engaging web
          experiences.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title mt-12">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://web.facebook.com/rafiul.razib" target="blank">
            <FaFacebook className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://github.com/rafiul-razib" target="blank">
            <FaGithub className="text-3xl hover:text-blue-400" />
          </a>
          <a href="https://www.linkedin.com/in/rafiul-habib/" target="blank">
            <FaLinkedin className="text-3xl hover:text-blue-400" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
