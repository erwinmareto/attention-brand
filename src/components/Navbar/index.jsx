import BurgerMenu from "./BurgerMenu";
import { navLogo } from "../../assets/images";
import { navLinks } from "../../constants";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="padding-x bg-dark-red">
        <nav className="flex justify-between items-center">
          <a href="/">
            <img src={navLogo} width={80} height={80} />
          </a>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden font-montserrat">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="">
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
}
