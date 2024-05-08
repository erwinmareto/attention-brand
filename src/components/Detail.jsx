import { sizes } from "../constants";

const Detail = ({ name, img, detail, showDetail, setShowDetail }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full backdrop-blur-xl z-50 flex justify-center items-center p-10">
      <article className="w-full flex flex-col justify-between bg-primary gap-4 p-4 border border-black lg:flex-row lg:w-3/4 ">
        <div className="flex flex-col gap-4 lg:flex-row">
          <img
            src={img}
            alt={name}
            width={200}
            height={200}
            className="aspect-[3/4]"
          />

          <div className="flex flex-col justify-center items-start">
            <h3 className="text-2xl font-zing font-semibold">{name}</h3>
            <p className="font-montserrat text-slate-gray text-sm">{detail}</p>
            <ul className="flex justify-start items-center gap-2 mt-4">
              <h4 className="font-zing text-xl">Sizes:</h4>
              {sizes.map((size) => (
                <li
                  key={size}
                  className="flex justify-center items-center font-zing text-xl px-2 border border-black"
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="h-10 flex items-center gap-1 cursor-pointer"
          onClick={() => setShowDetail(!showDetail)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
            />
          </svg>
          <p className="font-montserrat underline">back</p>
        </div>
      </article>
    </div>
  );
};
export default Detail;
