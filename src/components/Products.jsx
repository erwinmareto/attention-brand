import Heading from "./Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section
      id="products"
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <div>
        <Heading
          title="Our Products"
          info="Experience top-notch quality and style with our sough-after selections. Discover a world of comfort, design, and value"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};
export default Products;
