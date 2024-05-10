import { FaInstagram, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-container bg-charcoal padding-x py-10 lg:py-16 xl:py-20">
      <div className="flex justify-between items-center w-full">
        <p className="font-montserrat text-primary text-sm leading-7 md:text-lg">
          &copy; Attention. All rights reserved.
        </p>

        <div className="flex justify-center items-center gap-4">
          <a
            href="https://www.instagram.com/wear.attention?igsh=MTV1OHpmbDNiY2cxdA%3D%3D"
            target="_blank"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-pale-blue rounded-full lg:w-12 lg:h-12 transition-colors hover:bg-charcoal hover:text-white">
              <FaInstagram className="w-6 h-6" />
            </div>
          </a>
          <a
            href="https://www.tiktok.com/@wear.attention?_t=8mB7uMV0mhk&_r=1"
            target="_blank"
          >
            <div className="w-10 h-10 flex justify-center items-center bg-pale-blue rounded-full lg:w-12 lg:h-12 transition-colors hover:bg-charcoal hover:text-white">
              <FaTiktok className="w-6 h-6 " />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
