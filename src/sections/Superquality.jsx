import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Buttons from "../components/buttons";

const Superquality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col max-w-[600px]">
        <h1 className="mt-10 font-palanquin text-4xl max-sm:text-4xl max font-bold max-sm:text-[72px] max-sm:leading-none ">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            We Provide You
          </span>
          <br />
          <span className="text-coral-red">Super Quality</span> shoes
        </h1>

        <p className="font-montserrat max-sm:max-w-sm text-slate-gray leading-8 mt-6 mb-12 text-lg max-sm:w-full">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
          <br />
          <br />
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Buttons label="Order Now" iconURL={arrowRight} />
      </div>
      <img src={shoe8} alt="" />
    </section>
  );
};

export default Superquality;
