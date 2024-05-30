const Blog = ({ href, img, title, content }) => {
  return (
    <article>
      <a
        href={href}
        target="_blank"
        className="border border-black p-4 flex flex-col gap-4 transition-colors hover:bg-charcoal hover:text-primary"
      >
        <div className="flex justify-center items-center">
          <img src={img} width={200} height={200} />
        </div>
        <h3 className="text-xl font-zing lg:text-2xl">{title}</h3>
        <p className="font-montserrat line-clamp-4">{content}</p>
      </a>
    </article>
  );
};

export default Blog;
