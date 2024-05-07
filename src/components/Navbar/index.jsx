import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import MobileMenu from "./MobileMenu";
import { navLogo } from "../../assets/images";
import { navLinks } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="padding-x bg-dark-red absolute z-20 w-full">
        <nav className="flex justify-between items-center">
          <a href="/">
            <img src={navLogo} width={80} height={80} />
          </a>
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
