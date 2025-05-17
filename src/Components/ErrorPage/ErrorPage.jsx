import errGif from "../../assets/errorPage.gif"
const ErrorPage = () => {
  return (
    <div>
      <div className="text-5xl text-center font-bold mt-28">
        <h1>Oops! Something went wrong.</h1>
      <p className="text-7xl mt-6">404</p>
      </div>
      <div className="w-screen h-screen -mt-10 flex justify-center items-center">
      <img src={errGif} alt="" />
    </div>
    </div>
  );
};

export default ErrorPage;