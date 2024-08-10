const CustomButton = ({ text, onClick }) => {
  return (
    <button
      className="relative rounded-md px-3.5 py-2 m-1 overflow-hidden group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 transition-colors duration-300 ease-in-out"
      onClick={onClick}
    >
      <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform -translate-x-full -skew-x-12 bg-indigo-600 group-hover:translate-x-0 group-hover:skew-x-0"></span>
      <span className="relative z-10 text-indigo-600 transition-colors duration-300 ease-in-out group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default CustomButton;
