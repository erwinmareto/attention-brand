import { RxCross1 } from "react-icons/rx";
import { navLinks } from "../../constants";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed w-full h-screen flex flex-col justify-center text-primary bg-nav bg-cover bg-left z-50 lg:hidden">
      <RxCross1
        className="w-10 h-10 fixed top-10 right-10 text-8xl"
        onClick={() => setIsOpen(!isOpen)}
      />
      <ul className="flex flex-col items-center text-4xl gap-16 font-montserrat">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setIsOpen(!isOpen)}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default MobileMenu;
