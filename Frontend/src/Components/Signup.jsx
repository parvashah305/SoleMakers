// import React from "react";
// import { Link } from "react-router-dom";
// import Login from "./Login";
// import { useForm } from "react-hook-form";

// function Signup() {
//   return (
//     <>
//       <div className="flex h-screen items-center justify-center ">
//         <div className="w-[600px]">
//           <div className="modal-box">
//             <form method="dialog">
              
//               <Link to="/">
//                 <button
//                   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-black"
//                   onClick={() => document.getElementById("my_modal_3").close()}
//                 >
//                   ✕
//                 </button>
//               </Link>
            
//             <div className="font-sans dark:text-black">
//               <h3 className="font-bold text-lg">Signup</h3>
//               <p className="mt-4 font-bold text-lg">Name:</p>
//               <input
//                 className="outline-none border w-96 p-2 rounded-md"
//                 type="text"
//                 placeholder="Enter your Name"
//               />
//               <p className="mt-4 font-bold text-lg">Email:</p>
//               <input
//                 className="outline-none border w-96 p-2 rounded-md"
//                 type="email"
//                 placeholder="Enter your Email"
//               />
//               <p className="mt-4 font-bold text-lg">Password:</p>
//               <input
//                 className="outline-none border w-96 p-2 rounded-md"
//                 type="password"
//                 placeholder="Enter your Password"
//               />
//               <div className="mt-4 flex items-center justify-between">
//                 <button className="btn btn-secondary">Signup</button>
//                 <p>
//                   Have Account?
//                   <a
//                     className="underline text-blue-500 cursor-pointer px-2"
//                     onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                     }
//                   >
//                     Login
//                   </a>
//                   <Login />
//                 </p>
//               </div>
//             </div>
//             </form>
//           </div>
//         </div>
//       </div>


//     </> 
//   );
// }

// export default Signup;


import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await fetch("http://localhost:3000/user/signup", {
        method: "POST", // Set the HTTP method to POST
        headers: {
          "Content-Type": "application/json", // Specify JSON content type
        },
        body: JSON.stringify(userInfo), // Convert the userInfo object to JSON
      });

      const result = await res.json(); // Await the response parsing
      if (res.ok) {
        alert("Signup Successful");
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (err) {
      console.log("Error:", err);
      alert("An error occurred while signing up.");
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg text-black">Signup</h3>

              {/* Fullname Field */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Password Field */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none text-black"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* Signup Button */}
              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p className="text-xl text-black">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;