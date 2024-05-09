import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { mainShirt } from "../assets/images";
// import Button from "../parts/Button";
import Heading from "../parts/Heading";

const About = () => {
  const aboutRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".about-text",
        { x: -1000 },
        {
          x: 0,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "20% center",
          },
        }
      );
      gsap.to(".about-img", {
        x: -50,
        y: 50,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "20% center",
        },
      });
    },
    { scope: aboutRef }
  );
  return (
    <section
      ref={aboutRef}
      id="about-us"
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <div className="flex justify-between items-center gap-4 max-lg:flex-col">
        <div className="about-text">
          <Heading title="About Us">
            At <span className="font-zing text-black text-xl">Attention!</span>,
            we&apos;re all about celebrating individuality and unleashing your
            creativity. Our quirky, affordable t-shirt designs are your canvas
            to express yourself fearlessly. We&apos;re on a mission to empower
            young individuals like you to embrace their unique style and become
            trendsetters.
          </Heading>
          {/* <Button>Learn More</Button> */}
        </div>
        <div className="bg-dark-red">
          <img
            src={mainShirt}
            alt="shirt"
            className="about-img w-[380px] h-[500px]  max-sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
