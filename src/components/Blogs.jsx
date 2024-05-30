import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { blogs } from "../constants";
import Heading from "../parts/Heading";
import Blog from "./Blog";

const Blogs = () => {
  const blogsRef = useRef(null);
  useGSAP(
    () => {
      gsap.fromTo(
        ".blog",
        { x: 2000 },
        {
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: blogsRef.current,
            start: "20% center",
          },
        }
      );
    },
    { scope: blogsRef }
  );
  return (
    <section
      id="blogs"
      ref={blogsRef}
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <div>
        <Heading title="Blogs" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <Blog key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blogs;
