import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            
            <Link to="/">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black" onClick={() => document.getElementById("my_modal_3").close()}>
                  ✕
                </button>
            </Link>
          
          <div className="font-sans dark:text-black">
              <h3 className="font-bold text-lg">Login</h3>
              <p className="mt-4 font-bold text-lg">Email:</p>
              <input className="outline-none border w-96 p-2 rounded-md" type="email" placeholder="Enter your email"  {...register("email", { required: true })} />
              <br />
              {errors.email && <span className="text-center text-red-500">This field is required</span>}
              <p className="mt-4 font-bold text-lg">Password:</p>
              <input className="outline-none border w-96 p-2 rounded-md" type="password" placeholder="Enter your Password" {...register("password", { required: true })} />
              <br />
              {errors.password && <span className="text-center text-red-500">This field is required</span>}
              <div className="mt-4 flex items-center justify-between">
              <button className="btn btn-secondary">Login</button>
              <p>Forgot Password?<Link to="/signup" className="underline text-blue-500 cursor-pointer px-2">Signup</Link></p>
              </div>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
