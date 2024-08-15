import React from "react";
import home from "../../public/Home.png"

function Home() {
  return (
    <>
      <div className="flex max-w-screen-2xl container mx-auto md:px-20 px-4 flex-col font-sans md:flex-row my-14">
        <div className="w-full md:w-1/2 mt-12 md:mt-32 order-2 md:order-1">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
            Step into unparalleled comfort and style—<span className="text-pink-700">where every stride tells your story!!</span>
            </h1>
            <p className="text-xl">
            Welcome to SoleMakers, where innovation meets craftsmanship. Our shoes are meticulously designed to blend comfort, durability, and style, ensuring you stand out with every step. Whether you’re hitting the streets or the runway, discover footwear that elevates your journey and complements your unique lifestyle. Explore our latest collection and step confidently into the future.
            </p>
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70 text-black"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow outline-none  dark:text-black" placeholder="Enter your email to login" />
            </label>
          </div>
          <button className="btn btn-secondary mt-6">Login</button>
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 md:my-40 md:ml-40 mt-14 mx-0">
            <img className="w-110 h-110" src={home} alt="" />
        </div>
      </div>
    </>
  );
}

export default Home;
