import regGif from "../../assets/regis.gif";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const handleGoogleSignIn = () => {
    //todo: google authentication
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="h-[calc(100vh-120px)] bg-[#f5f4f4] flex flex-col lg:flex-row-reverse  justify-center items-center">
        <div className="lg:pr-14 mt-40 lg:mt-0 md:mt-0">
          <img className="w-[500px] lg:pr-9 " src={regGif} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-xl font-semibold mb-2">Please Register</h2>
          {/* form start here */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm uppercase font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm uppercase font-bold mb-2"
                htmlFor="email"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                name="password"
                id="password"
                placeholder="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
              />
            </div>
            {errors.password && (
              <p className="text-xs mb-2 font-semibold text-red-400">
                Please entre valid email and password
              </p>
            )}
            <div>
              <button className="btn bg-yellow-400 hover:bg-black hover:text-white px-6 rounded-lg">
                Register
              </button>
            </div>
          </form>
          <p className="mt-3">
            Already have an account!{" "}
            <Link className="text-yellow-600" to={"/login"}>
              sign in
            </Link>{" "}
            now
          </p>
          {/* google sign in */}
          <div className="mt-3">
            <button
              onClick={handleGoogleSignIn}
              className="flex bg-black w-full text-white justify-center items-center gap-2 py-1.5 rounded-md hover:bg-yellow-400 hover:text-black"
            >
              <FaGoogle />
              <p>Sign-up with Google</p>
            </button>
          </div>
          <p className="text-center text-gray-500 text-xs mt-3">
            © 2025 The Book Shelf.All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
