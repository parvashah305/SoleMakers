import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center ">
        <div className="w-[600px]">
          <div className="modal-box">
            <form method="dialog">
              
              <Link to="/">
                <button
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
                  onClick={() => document.getElementById("my_modal_3").close()}
                >
                  ✕
                </button>
              </Link>
            
            <div className="font-sans dark:text-black">
              <h3 className="font-bold text-lg">Signup</h3>
              <p className="mt-4 font-bold text-lg">Name:</p>
              <input
                className="outline-none border w-96 p-2 rounded-md"
                type="text"
                placeholder="Enter your Name"
              />
              <p className="mt-4 font-bold text-lg">Email:</p>
              <input
                className="outline-none border w-96 p-2 rounded-md"
                type="email"
                placeholder="Enter your Email"
              />
              <p className="mt-4 font-bold text-lg">Password:</p>
              <input
                className="outline-none border w-96 p-2 rounded-md"
                type="password"
                placeholder="Enter your Password"
              />
              <div className="mt-4 flex items-center justify-between">
                <button className="btn btn-secondary">Signup</button>
                <p>
                  Have Account?
                  <a
                    className="underline text-blue-500 cursor-pointer px-2"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                  <Login />
                </p>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>


    </> 
  );
}

export default Signup;
