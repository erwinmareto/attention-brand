import { FaArrowCircleRight } from "react-icons/fa";

const Button = ({ href, samePage, children }) => {
  return (
    <a href={href} target={samePage ? "_self" : "_blank"}>
      <button className="flex justify-center items-center gap-2 text-primary font-montserrat bg-dark-red rounded-full px-6 py-4  transition hover:scale-105 active:scale-90">
        {children}
        <FaArrowCircleRight className="w-4 h-4" />
      </button>
    </a>
  );
};
export default Button;
