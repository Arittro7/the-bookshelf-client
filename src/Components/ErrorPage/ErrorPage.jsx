import { Link } from "react-router-dom";
import errGif from "../../assets/errorPage.gif";
import { GiBookshelf } from "react-icons/gi";
const ErrorPage = () => {
  return (
    <div>
      <div className="absolute w-full z-10 text-center font-bold mt-6">
        <h1 className="text-2xl md:text-5xl">Oops! Something went wrong.</h1>
        <p className="text-7xl mt-6 font-bold">404</p>
      </div>
      <div className="relative w-screen  h-screen flex flex-col justify-center items-center">
        <img src={errGif} alt="" />
        <div className="absolute bottom-12">
          <div className=" bg-yellow-400 py-2 px-4 rounded-lg ">
            <Link className="flex gap-2 justify-center items-center" to={"/"}>
            <p className="uppercase font-semibold">Back to Shelf</p>
            <GiBookshelf />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
