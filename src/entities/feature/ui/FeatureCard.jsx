const FeatureCard = ({ index, title, description, className = "" }) => {
  return (
    <div
      className={`bg-white p-6 transition-colors duration-300 ease-tesla hover:bg-light md:p-7 ${className}`}
      role="article"
    >
      {index ? (
        <div className="text-xs font-medium tracking-[0.2em] text-gray-500">
          {index}
        </div>
      ) : null}

      <h3 className="mt-3 text-base font-medium text-dark sm:text-lg">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-graphite sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;

