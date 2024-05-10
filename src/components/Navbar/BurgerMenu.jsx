import { RxHamburgerMenu } from "react-icons/rx";

const BurgerMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div className="hidden max-lg:block">
      <button className="bg-dark-red" onClick={() => setIsOpen(!isOpen)}>
        <RxHamburgerMenu className="w-8 h-8" />
      </button>
    </div>
  );
};

export default BurgerMenu;
