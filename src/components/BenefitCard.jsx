const BenefitCard = ({ title, text, icon, center }) => {
  return (
    <article
      className={`flex flex-col justify-center bg-dark-red min-h-[20rem] rounded-3xl p-10 max-md:min-h-[10rem] ${
        center ? "lg:col-span-2 lg:items-center lg:text-center" : ""
      }`}
    >
      <div className="w-14 h-14 flex justify-center items-center bg-pale-blue rounded-full ">
        {icon}
      </div>
      <div className="mt-4">
        <h3 className="text-4xl font-zing max-md:text-2xl">{title}</h3>
        <p className="text-primary text-xl font-montserrat mt-2 max-md:text-sm">
          {text}
        </p>
      </div>
    </article>
  );
};

export default BenefitCard;
