import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { productsList } from "../constants";
import Heading from "../parts/Heading";
import ProductCard from "./ProductCard";

const Products = () => {
  const productRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: productRef.current,
          start: "20% center",
        },
      });
      tl.fromTo(
        ".product-card",
        { x: 2000 },
        {
          x: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power1.out",
        }
      );
      tl.fromTo(
        ".b-text",
        { y: -100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: "power1.out",
        }
      );
    },
    { scope: productRef }
  );
  return (
    <section
      ref={productRef}
      id="products"
      className="max-container padding-x py-10 lg:py-16 xl:py-20"
    >
      <div>
        <Heading
          title="Our Products"
          info="Experience top-notch quality and style with our sough-after selections. Discover a world of comfort, design, and value"
        />
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {productsList.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <ProductCard key={product.name} {...product} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Products;
