import BenefitCard from "./BenefitCard";
import Heading from "../parts/Heading";
import { benefitsList } from "../constants";

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
        {benefitsList.map((benefit) => (
          <BenefitCard
            key={benefit.title}
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
