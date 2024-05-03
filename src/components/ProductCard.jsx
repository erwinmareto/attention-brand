import { mainShirt } from "../assets/images";

const ProductCard = () => {
  return (
    <article className="flex flex-col">
      <img src={mainShirt} alt="product" className="w-[280px] h-[400px]" />
      <div className="mt-4">
        <h3 className="text-2xl font-zing font-semibold">Shirt</h3>
        <p className="font-montserrat text-slate-gray text-sm mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>
    </article>
  );
};

export default ProductCard;
