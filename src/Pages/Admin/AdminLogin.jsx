import loginGif from "../../assets/logingif.gif";
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';

const AdminLogin = () => {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

     const onSubmit = async (data) => {
      console.log(data);
        try {
          
          // Navigate("/");
        } catch (error) {
          alert("Login Failed")
          console.error(error);
        }
      };

  return (
    <div>
      <div className="h-[calc(100vh-120px)] bg-[#f5f4f4] flex flex-col lg:flex-row  justify-center items-center">
      <div className="">
        <img className="w-[600px] lg:ml-24 " src={loginGif} alt="" />
      </div>
      <div className="lg:w-1/2 md:w-full max-w-sm mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold mb-2">ADMIN DASHBOARD LOGIN </h2>
        {/* form start here */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm uppercase font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              name="username"
              id="username"
              placeholder="username"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none "
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm uppercase font-bold mb-2"
              htmlFor="password"
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
            <button className="btn w-full bg-yellow-400 hover:bg-black hover:text-white px-6 rounded-lg">
              Login
            </button>
          </div>
        </form>        
      </div>
    </div>
    </div>
  );
};

export default AdminLogin;