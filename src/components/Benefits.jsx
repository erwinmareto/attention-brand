import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import BenefitCard from "./BenefitCard";
import Heading from "../parts/Heading";
import { benefitsList } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const Benefits = () => {
  const benefitRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: benefitRef.current,
          start: "20% center",
        },
      });
      tl.fromTo(
        ".left-card",
        { x: -2000 },
        { x: 0, duration: 0.75, ease: "power1.inOut" }
      );
      tl.fromTo(
        ".right-card",
        { x: 2000 },
        { x: 0, duration: 0.75, ease: "power1.inOut" }
      );
      tl.fromTo(".center-card", { scale: 0 }, { scale: 1, ease: "power1.out" });
    },
    { scope: benefitRef }
  );
  return (
    <section
      id="benefits"
      ref={benefitRef}
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <Heading
        title="What Sets us Apart"
        info="Experience top-notch quality and style with our sough-after selections. Discover a world of comfort, design, and value"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 lg:px-10 py-4">
        {benefitsList.map((benefit, index) => (
          <BenefitCard
            key={benefit.title}
            index={index}
            title={benefit.title}
            text={benefit.text}
            icon={<benefit.icon className="w-8 h-8" />}
            center={benefit.center}
          />
        ))}
      </div>
    </section>
  );
};
export default Benefits;
