import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../parts/Button";
import { showcaseImages } from "../constants";

const Showcase = () => {
  const showcaseRef = useRef(null);

  const imgRef = useRef(null);

  useGSAP(
    () => {
      const imgEl = imgRef.current;

      gsap.fromTo(
        ".whitespace-nowrap",
        { x: "-40%" },
        {
          x: "0%",
          ease: "none",
          duration: 3,
          repeat: -1,
          yoyo: true,
        }
      );

      gsap.fromTo(
        imgEl,
        { x: "25%" },
        {
          x: "-25%",
          yoyo: true,
          ease: "none",
          duration: 3,
          repeat: -1,
        }
      );
    },
    { scope: showcaseRef }
  );
  return (
    <section
      ref={showcaseRef}
      id="showcase"
      className="max-container py-10 lg:py-16 xl:py-20"
    >
      <div className="flex justify-center items-center mb-32">
        <h1 className="text-2xl text-center font-zing lg:text-4xl text-balance">
          <span className="font-extrabold text-4xl lg:text-8xl">
            Attention!
          </span>{" "}
          is your go-to streetwear brand for quirky, trendy t-shirt designs that
          won&apos;t break the bank.
        </h1>
      </div>

      <div className=" whitespace-nowrap flex gap-4">
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
      </div>

      <div
        ref={imgRef}
        className="relative flex justify-center items-center gap-1 my-10"
      >
        {showcaseImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`showcase-${index + 1}`}
            className="images aspect-[3/4] w-[200px] md:w-[300px] lg:w-[400px]"
          />
        ))}
      </div>

      <div className=" whitespace-nowrap flex gap-4">
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
        <h1 className="text-4xl md:text-8xl font-zing">ATTENTION!</h1>
      </div>

      <div
        id="contacts"
        className="flex flex-col justify-center items-center gap-16 my-32"
      >
        <h1 className="text-4xl text-center font-zing lg:text-8xl">
          Express Yourself. Shop Now.
        </h1>
        <Button href="https://www.instagram.com/wear.attention?igsh=MTV1OHpmbDNiY2cxdA%3D%3D">
          Contact Us
        </Button>
      </div>
    </section>
  );
};
export default Showcase;
