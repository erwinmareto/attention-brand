import { FaInstagram, FaTiktok } from "react-icons/fa";
import { navLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container bg-charcoal padding-x py-10 lg:py-16 xl:py-20">
      <div className="flex justify-between items-start gap-20 lg:gap-[40rem] max-lg:flex-col">
        <div className="flex flex-col">
          <img src={navLogo} width={120} height={120} />
          <div className="flex justify-between my-6">
            <div className="w-12 h-12 flex justify-center items-center bg-pale-blue rounded-full">
              <a href="https://www.instagram.com">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
            <div className="w-12 h-12 flex justify-center items-center bg-pale-blue rounded-full">
              <a href="https://www.instagram.com">
                <FaTiktok className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-1 justify-between gap-20 flex-wrap">
          <div className="flex flex-col gap-4">
            <p className="font-montserrat text-primary text-xl leading-7">
              Attention
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              About Us
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              Contact Us
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              FAQ
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-montserrat text-primary text-xl leading-7">
              Attention
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              About Us
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              Contact Us
            </p>
            <p className="font-montserrat text-slate-gray text-lg leading-7">
              FAQ
            </p>
          </div>
        </div>
      </div>
      <p className="font-montserrat text-slate-gray text-lg leading-7 mt-12">
        &copy; Attention. All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
