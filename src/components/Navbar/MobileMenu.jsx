import { navLinks } from "../../constants";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <nav className="fixed w-full h-screen flex flex-col justify-center bg-nav bg-cover bg-left z-50 lg:hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 fixed top-10 right-10 text-8xl"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>

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
