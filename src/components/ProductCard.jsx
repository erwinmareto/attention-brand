import { useState } from "react";
import Detail from "./Detail";

const ProductCard = ({ img, name, info, detail }) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <article className="product-card flex flex-col">
        <div
          className="bg-dark-red flex justify-center transition cursor-pointer hover:scale-105"
          onClick={() => setShowDetail(!showDetail)}
        >
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
        </div>
      </article>
      {showDetail && (
        <Detail
          name={name}
          img={img}
          detail={detail}
          showDetail={showDetail}
          setShowDetail={setShowDetail}
        />
      )}
    </>
  );
};

export default ProductCard;
