import { navLinks } from "../../constants";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed w-full h-screen flex flex-col justify-center bg-hero bg-cover bg-left z-50 lg:hidden">
      <ul className="flex flex-col items-center text-4xl text-primary gap-16 font-montserrat">
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
