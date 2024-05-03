import BenefitCard from "./BenefitCard";
import { PiButterflyBold, PiMaskHappyBold } from "react-icons/pi";
import Heading from "./Heading";
import { GiLion } from "react-icons/gi";
import { FaRegSun } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const Benefits = () => {
  return (
    <section
      id="about-us"
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <Heading
        title="What Sets us Apart"
        info="Experience top-notch quality and style with our sough-after selections. Discover a world of comfort, design, and value"
      />

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 lg:px-10 py-4">
        <BenefitCard
          title="Youthful Energy"
          text="Our brand personality radiates excitement and an energetic vibe that resonates with the young and young-at-heart."
          icon={<PiButterflyBold className="w-10 h-10" />}
        />
        <BenefitCard
          title="Bold Designs"
          text="Eye-catching, statement-making designs that help you confidently express your unique style."
          icon={<GiLion className="w-10 h-10" />}
        />
        <BenefitCard
          title="Self-Expression"
          text="More than just clothes, our apparel is a canvas for showcasing your individuality and authentic self."
          icon={<PiMaskHappyBold className="w-10 h-10" />}
          center
        />
        <BenefitCard
          title="Affordable Quality"
          text="Enjoy premium quality without the premium price tag – our tees are a steal."
          icon={<FaMoneyBillTrendUp className="w-8 h-8" />}
        />
        <BenefitCard
          title="Confidence Boost"
          text="Wear Attention! and instantly feel like the center of attention, exuding coolness and self-assurance."
          icon={<FaRegSun className="w-10 h-10" />}
        />
      </div>
    </section>
  );
};
export default Benefits;
