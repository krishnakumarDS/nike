const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full max-sm:items-center max-sm:justify-center">
      <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
      <h2 className="text-xl font-montserrat ml-3 mt-5 font-bold">{name}</h2>
      <p className="text-lg font-montserrat ml-3 mt-2 font-bold text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
