const Buttons = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white">
      {label}
      <img
        src={iconURL}
        alt="heroicon"
        className="ml-2 rounded-full w-7 h-7 "
      />
    </button>
  );
};

export default Buttons;
