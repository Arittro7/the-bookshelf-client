import axios from "axios";
import adminGif from "../../assets/admin.gif";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import getBaseUrl from "../../Utility/baseURL";
import { useState } from "react";

const AdminLogin = () => {
  const [message, setMessage] = useState("")
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${getBaseUrl()}/api/auth/admin`,data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      const auth = response.data;
      console.log(auth);
      if (auth.token) {
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
          localStorage.removeItem('token');
          alert("token has been expired, please login again");
          navigate("/");
        }, 3600 * 1000);
      }

      alert("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid email and password") 
      console.error(error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex lg:pt-44 pt-10 flex-col lg:flex-row-reverse  justify-center items-center">
        <div className="w-1/2">
          <img className="w-[500px] lg:ml-24 " src={adminGif} alt="" />
        </div>
        <div className="lg:w-1/2 md:w-full max-w-sm mx-auto shadow-md  rounded px-8 pt-6 pb-8 mb-4">
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
            {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }
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
