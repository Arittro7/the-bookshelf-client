import bnrImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero w-full ">
        <div className="hero-content sm:w-full flex flex-col lg:flex-row py-16 gap-12">
          <div className="lg:w-1/2">
            <h1 className="md:text-5xl text-2xl font-bold">
              Discover your <span className="text-green-600">next</span> great read!
            </h1>
            <p className="py-6 lg:text-3xl">
              Shop bestsellers, new releases, and timeless classics all in one place. 
            </p>
            <button className="btn bg-yellow-400 uppercase">Subscribe</button>
          </div>
          <div className="lg:w-1/2">
            <img src={bnrImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
