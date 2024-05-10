import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "../parts/Button";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".letter",
        { opacity: 0 },
        { opacity: 1, stagger: 0.2, ease: "power1.out" }
      );
    },
    { scope: heroRef }
  );
  return (
    <section ref={heroRef} className="max-container">
      <div className="w-full min-h-screen flex justify-center items-center bg-hero bg-center">
        <div className="flex flex-col justify-center items-center text-center w-full gap-4">
          <h1 className="text-[5rem] md:text-[8rem] lg:text-[10rem] ">
            <span className="letter font-zing transition-colors hover:text-dark-red">
              A
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              T
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              T
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              E
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              N
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              T
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              I
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              O
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              N
            </span>
            <span className="letter font-zing transition-colors hover:text-dark-red">
              !
            </span>
          </h1>
          <p className="font-montserrat text-sm text-primary max-w-xl mt-10 md:text-xl">
            Merek kaos dengan desain yang{" "}
            <span className="text-dark-red font-bold italic">nyeleneh</span> dan
            memiliki harga yang terjangkau
          </p>
          <Button href="/#products" samePage>
            Our Products
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Hero;
