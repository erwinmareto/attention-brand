const Heading = ({ title, info, children }) => {
  return (
    <div className="mb-12">
      <h1 className="font-zing text-4xl mb-4 lg:text-8xl">{title}</h1>
      <p className="info-text max-w-2xl">{children || info}</p>
    </div>
  );
};

export default Heading;
