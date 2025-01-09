import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'; // Import Login modal
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);

  const handleLoginClick = () => {
    const modal = document.getElementById("my_modal_3");
    if (modal) modal.showModal();
  };

  return (
    <>
      <Login />
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            
            <h3 className="font-bold text-lg">Signup</h3>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("name", { required: "name is required" })}
                
              />
              {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Signup
              </button>
              <p>
                Have an account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
