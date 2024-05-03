import { mainShirt } from "../assets/images";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container">
      <div className="w-full min-h-screen lg:flex">
        <div className="xl:w-2/5 flex flex-col max-lg:items-center justify-center bg-hero bg-left px-4 py-28 md:padding-x max-lg:text-center">
          <h1 className="text-8xl font-montserrat max-sm:text-[72px] max-sm:leading-[82px]">
            Your
            <br />
            <span className="font-zing">ATTENTION!</span>
            <br />
            Please
          </h1>
          <p className="font-montserrat max-w-sm text-primary text-lg leading-7 mt-6 max-sm:text-[1rem]">
            Brand kaos dengan desain yang{" "}
            <span className="text-dark-red font-bold italic">nyeleneh</span> dan
            memiliki harga yang terjangkau
          </p>
          <div className="mt-10">
            <Button>Our Products</Button>
          </div>
        </div>
        <div className="bg-red-300 xl:w-3/5">
          <img
            src={mainShirt}
            alt="shirt"
            // width={610}
            // height={500}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
