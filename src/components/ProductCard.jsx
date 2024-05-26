const ProductCard = ({ img, name, info }) => {
  return (
    <article className="product-card flex flex-col">
      <div className="bg-dark-red flex justify-center transition hover:scale-105">
        <img
          src={img}
          alt={name}
          className="aspect-[3/4] object-cover transition hover:scale-90"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-zing font-semibold b-text">{name}</h3>
        <p className="font-montserrat text-slate-gray text-sm mt-2 b-text">
          {info}
        </p>
        {/* <p className="font-montserrat text-slate-gray text-2xl mt-2 b-text">
          IDR 120.000
        </p> */}
      </div>
    </article>
  );
};

export default ProductCard;
