import { mainShirt } from "../assets/images";
import Button from "../parts/Button";

const Showcase = () => {
  return (
    <section id="showcase" className="max-container py-10 lg:py-16 xl:py-20">
      <div className="flex justify-center items-center mb-32">
        <h1 className="text-2xl text-center font-zing lg:text-4xl text-balance">
          <span className="font-extrabold text-4xl lg:text-8xl">
            Attention!
          </span>{" "}
          is your go-to streetwear brand for quirky, trendy t-shirt designs that
          won&apos;t break the bank.
        </h1>
      </div>

      <div className="animate-marquee2 whitespace-nowrap flex gap-4">
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
      </div>

      <div className="relative flex justify-center items-center gap-1 my-10">
        <img
          src={mainShirt}
          alt="shirt"
          className="aspect-[3/4] w-[200px] lg:w-[400px] animate-marquee"
        />
        <img
          src={mainShirt}
          alt="shirt"
          className="aspect-[3/4] w-[200px] lg:w-[400px] animate-marquee"
        />
        <img
          src={mainShirt}
          alt="shirt"
          className="aspect-[3/4] w-[200px] lg:w-[400px] animate-marquee"
        />
        <img
          src={mainShirt}
          alt="shirt"
          className="aspect-[3/4] w-[200px] lg:w-[400px] animate-marquee"
        />
        <img
          src={mainShirt}
          alt="shirt"
          className="aspect-[3/4] w-[200px] lg:w-[400px] animate-marquee"
        />
      </div>

      <div className="animate-marquee2 whitespace-nowrap flex gap-4">
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-8xl font-zing">ATTENTION!</h1>
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
