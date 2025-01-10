import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-6 mb-20 text-white lg:p-8">
        <div className="flex flex-shrink-0 items-center">
          <span className="text-4xl">Dj</span>
        </div>
        <div className="flex gap-4 justify-between">
          <FaLinkedin />
          <FaGithub />
          <FaSquareXTwitter />
          <FaInstagram />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
