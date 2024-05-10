import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import { navLogo } from "../../assets/images";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="padding-x bg-dark-red w-full max-lg:absolute">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <img src={navLogo} width={80} height={80} />
          </Link>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden font-montserrat">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition hover:text-slate-gray"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </header>
      {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Navbar;
