import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productDetails, sizes } from "../constants";
import Button from "../parts/Button";
import { IoIosArrowRoundBack } from "react-icons/io";

const Detail = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState(images[0]);

  useEffect(() => {
    productDetails.filter((product) => {
      if (product.id == id) {
        setCurrentImg(product.images[0]);
        setName(product.name);
        setDetail(product.detail);
        setImages(product.images);
      }
    });
  }, [id]);
  return (
    <section className="min-h-screen w-full flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 p-10 max-lg:flex-col">
        <div className="flex justify-start items-center gap-4 max-lg:flex-col">
          <div className="aspect-[3/4] flex justify-center items-center">
            <img
              src={currentImg}
              width={500}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 max-lg:flex-col-reverse">
            <div className="flex flex-col gap-4">
              <a
                href="/#products"
                className="font-montserrat underline flex items-center"
              >
                <IoIosArrowRoundBack className="w-6 h-6" /> back
              </a>
              <h3 className="font-zing text-4xl">{name}</h3>
              <div className="flex items-center gap-2 ">
                <h3 className="text-xl font-zing">Sizes: </h3>
                {sizes.map((size) => (
                  <h3
                    key={size}
                    className="flex justify-center items-center font-zing text-xl border border-black py-1 px-2  transition-colors hover:bg-charcoal hover:text-white"
                  >
                    {size}
                  </h3>
                ))}
              </div>
              <p className="max-w-lg font-montserrat">{detail}</p>
              <div>
                <Button>Contact Us</Button>
              </div>
            </div>

            <div className="flex flex-wrap justify-start gap-1 max-lg:justify-between">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  width={100}
                  height={100}
                  alt={`shirt ${index}`}
                  onClick={() => setCurrentImg(image)}
                  className="aspect-square border-4 border-charcoal transition-all hover:border-8 active:scale-90"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
