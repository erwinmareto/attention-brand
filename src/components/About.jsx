import { mainShirt } from "../assets/images";
import Button from "./Button";
import Heading from "./Heading";

const About = () => {
  return (
    <section
      id="about-us"
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <div className="flex justify-between items-center gap-4 max-lg:flex-col">
        <div>
          <Heading title="About Us">
            At <span className="font-zing text-black text-xl">Attention!</span>,
            we&apos;re all about celebrating individuality and unleashing your
            creativity. Our quirky, affordable t-shirt designs are your canvas
            to express yourself fearlessly. We&apos;re on a mission to empower
            young individuals like you to embrace their unique style and become
            trendsetters.
          </Heading>
          <Button>Learn More</Button>
        </div>
        <div className="bg-dark-red translate-x-5">
          <img
            src={mainShirt}
            alt="shirt"
            className="w-[380px] h-[500px] -translate-x-10 translate-y-12 max-sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
