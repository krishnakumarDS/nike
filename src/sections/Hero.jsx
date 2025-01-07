import { arrowRight } from "../assets/icons";
import Buttons from "../components/buttons";
import { shoes, statistics } from "./../constants/index";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "./../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
      <div className="relative xl:w-2/5 flex xl:ml-14 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> shoes
        </h1>
        <p className="font-montserrat max-sm:max-w-sm text-slate-gray leading-8 mt-6 mb-12 text-lg max-sm:w-full">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Buttons label="Shop Now" iconURL={arrowRight} />
        <div className="flex flex-wrap  max-sm:mt-8 max-sm:gap-8 text-[45px] max-sm:text-[30px] justify-start items-start w-full mt-10 font-bold gap-20">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p>{stat.value}</p>
              <p className="font-light text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center">
        <img
          src={bigShoeImage}
          alt="shoe Collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex flex-row sm:gap-6 gap-4 absolute bottom-[-8%] sm:left-[10%] max-sm:p-6 left-[15%]">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImage(shoe)}
                bigShoeImage={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
