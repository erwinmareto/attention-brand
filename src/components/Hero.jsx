import { mainShirt } from "../assets/images";
import Button from "../parts/Button";

const Hero = () => {
  return (
    <section className="max-container">
      <div className="w-full min-h-screen flex justify-center items-center bg-hero bg-center">
        <div className="flex flex-col justify-center items-center text-center w-full gap-4">
          <h1 className="text-4xl lg:text-[10rem] font-zing">
            {/* Your
            <br /> */}
            ATTENTION!
            {/* <br />
            Please */}
          </h1>
          <p className="font-montserrat text-xl text-primary max-w-2xl mt-10">
            Merek kaos dengan desain yang{" "}
            <span className="text-dark-red font-bold italic">nyeleneh</span> dan
            memiliki harga yang terjangkau
          </p>
          <Button>Products</Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
