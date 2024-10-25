import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 3000,
          theme: "light",
        });
        document.getElementById("my_modal_3").close();
        window.location.reload()
        localStorage.setItem("Users", JSON.stringify(result));
      } else {
        toast.error(`Error: ${result.message}`, {
          position: "top-center",
          autoClose: 5000,
          theme: "light",
        });
      }
    } catch (err) {
      console.log("Error:", err);
      toast.error("An error occurred while logging in.", {
        position: "top-center",
        autoClose: 5000,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>

            <div className="font-sans dark:text-black">
              <h3 className="font-bold text-lg">Login</h3>
              <p className="mt-4 font-bold text-lg">Email:</p>
              <input
                className="outline-none border w-96 p-2 rounded-md"
                type="email"
                placeholder="Enter your email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
              <p className="mt-4 font-bold text-lg">Password:</p>
              <input
                className="outline-none border w-96 p-2 rounded-md"
                type="password"
                placeholder="Enter your Password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-center text-red-500">
                  This field is required
                </span>
              )}
              <div className="mt-4 flex items-center justify-between">
                <button className="btn btn-secondary">Login</button>
                <p>
                  Forgot Password?
                  <Link
                    to="/signup"
                    className="underline text-blue-500 cursor-pointer px-2"
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;