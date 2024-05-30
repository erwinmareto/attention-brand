import { blogs } from "../constants";
import Heading from "../parts/Heading";
import Blog from "./Blog";

const Blogs = () => {
  return (
    <section className="max-container padding-x py-10 lg:py-16 xl:py-20">
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
