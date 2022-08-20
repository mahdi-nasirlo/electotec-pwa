import BannerImage from "../static/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-yellow-500 flex justify-center border-y-black border-y-2 p-3 lg:p-0">
      <div className="block md:flex justify-center max-w-7xl">
        <div className="space-y-3 my-auto">
          <h1 className="max-w-xl text-8xl">Stay Curious.</h1>
          <h3 className="text-1xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </h3>
          <button className="bg-black text-white rounded-3xl p-2">
            Start Reading
          </button>
        </div>
        {/* <Image
          className="hidden h-32 md:inline-flex justify-center object-contain flex-1"
          width={500}
          height={400}
          src={BannerImage}
        /> */}
      </div>
    </div>
  );
};

export default Banner;
