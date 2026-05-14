const Button = ({ children, variant = "primary", className = "", onClick, type = "button" }) => {
  const baseClasses = "px-6 py-3 rounded text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: `${baseClasses} bg-primary text-white hover:opacity-90 focus:ring-primary`,
    secondary: `${baseClasses} bg-white text-dark border border-gray-300 hover:bg-gray-50 focus:ring-gray-300`,
    accent: `${baseClasses} bg-accent text-white hover:opacity-90 focus:ring-accent`,
  };

  return (
    <button
      type={type}
      className={`${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
