import { mainShirt } from "../assets/images";
import Button from "./Button";

const Showcase = () => {
  return (
    <section id="showcase" className="max-container py-10 lg:py-16 xl:py-20">
      <div className="flex justify-center items-center mb-32">
        <h1 className="text-2xl text-center font-zing lg:text-4xl">
          <span className="font-extrabold text-4xl lg:text-8xl">
            Attention!
          </span>{" "}
          is your go-to streetwear brand for quirky, trendy t-shirt designs that
          won&apos;t break the bank.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-1 mt-10">
        <img src={mainShirt} alt="shirt" className="w-[380px] h-[500px]" />
        <img src={mainShirt} alt="shirt" className="w-[380px] h-[500px]" />
        <img src={mainShirt} alt="shirt" className="w-[380px] h-[500px]" />
        <img src={mainShirt} alt="shirt" className="w-[380px] h-[500px]" />
        <img src={mainShirt} alt="shirt" className="w-[380px] h-[500px]" />
      </div>
      <div className="flex flex-col justify-center items-center gap-16 my-32">
        <h1 className="text-4xl text-center font-zing lg:text-8xl">
          Express Yourself. Shop Now.
        </h1>
        <Button>Shop Now</Button>
      </div>
    </section>
  );
};
export default Showcase;
