import regGif from "../../assets/regis.gif";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from 'sweetalert2';
import { useContext } from "react";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
      try {
        await signInWithGoogle();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login successfully with your account👌",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/")
      } catch (error) {
        alert("SignIn with Google Failed")
        console.error(error);
      }
    };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User name updated");
            Swal.fire({
              position: "center",
              icon: "success",
              title: "User created successfully 👌",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/")
          })
          .catch((error) => console.log("Error updating user profile:", error));
      })
      .catch((error) => console.log("Error creating user:", error));
  };

  return (
    <div className="min-h-screen bg-[#f5f4f4] flex flex-col justify-center items-center px-4 py-10 lg:flex-row-reverse lg:py-0">
  <div className="lg:w-1/2 w-full flex justify-center mb-10 lg:mb-0">
    <img
      className="max-w-full w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] h-auto"
      src={regGif}
      alt="Registration Illustration"
    />
  </div>

  <div className="lg:w-1/2 w-full max-w-sm mx-auto bg-white shadow-md rounded px-6 py-8">
    <h2 className="text-xl font-semibold mb-4 text-center">Please Register</h2>

    {/* form start here */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm uppercase font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          id="name"
          placeholder="name"
          className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      {/* Photo URL */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm uppercase font-bold mb-2" htmlFor="photo">
          Photo URL
        </label>
        <input
          {...register("photo", { required: true })}
          type="text"
          id="photo"
          placeholder="photo URL"
          className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm uppercase font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          id="email"
          placeholder="email"
          className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm uppercase font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          {...register("password", { required: true })}
          type="password"
          id="password"
          placeholder="password"
          className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none"
        />
        {errors.password && (
          <p className="text-xs text-red-500 mt-1">Please enter a valid password</p>
        )}
      </div>

      {/* Register Button */}
      <button className="btn bg-yellow-400 hover:bg-black hover:text-white w-full rounded-lg py-2 mt-2">
        Register
      </button>
    </form>

    <p className="mt-4 text-center text-sm">
      Already have an account?{" "}
      <Link to="/login" className="text-yellow-600 font-medium hover:underline">
        Sign in
      </Link>
    </p>

    {/* Google Sign-In */}
    <div className="mt-4">
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-center bg-black text-white w-full gap-2 py-2 rounded hover:bg-yellow-400 hover:text-black transition"
      >
        <FaGoogle />
        <span>Sign up with Google</span>
      </button>
    </div>

    <p className="text-center text-gray-500 text-xs mt-6">
      © 2025 The Book Shelf. All rights reserved.
    </p>
  </div>
</div>

  );
};

export default Register;
