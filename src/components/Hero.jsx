import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { scenery } from "../assets/images";
import Button from "../parts/Button";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".hero-img",
        { scaleX: 0 },
        { scaleX: 1, transformOrigin: "top" }
      );
      gsap.fromTo(
        ".letter",
        { opacity: 0 },
        { opacity: 1, stagger: 0.2, ease: "power1.out" }
      );
    },
    { scope: heroRef }
  );
  return (
    <section ref={heroRef} className="max-container relative z-10">
      <div className="w-full min-h-screen lg:flex bg-hero bg-left">
        <div className="xl:w-3/5 flex flex-col max-lg:items-center justify-center px-4 py-28 md:padding-x max-lg:text-center">
          <h1 className="text-8xl font-montserrat max-sm:text-[72px] max-sm:leading-[82px]">
            Your
            <br />
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
            <br />
            Please
          </h1>
          <p className="font-montserrat text-xl text-primary max-w-2xl mt-10">
            Merek kaos dengan desain yang{" "}
            <span className="text-dark-red font-bold italic">nyeleneh</span> dan
            memiliki harga yang terjangkau
          </p>
          <div className="mt-10">
            <Button href="#products" samePage>
              Our Products
            </Button>
          </div>
        </div>
        <div className="bg-red-300 xl:w-2/5">
          <img
            src={scenery}
            alt="shirt"
            // width={610}
            // height={500}
            className="object-cover hero-img"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
