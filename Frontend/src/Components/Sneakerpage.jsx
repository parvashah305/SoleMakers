import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Sneakerpage() {
    console.log(list)
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 font-sans">
        <div className="mt-24 md:mt-36">
            <h1 className="text-center font-bold font-sans text-2xl md:text-4xl mb-4">
              Step Up Your Style with Our <span className="text-pink-700">Premium Sneakers</span>
            </h1>
            <p className="text-center font-sans mt-4">Browse through our extensive range of sneakers, each designed with meticulous attention to detail. Whether you prefer minimalist designs or bold, eye-catching patterns, we have something for everyone. Don’t just follow trends—set them. Discover your new favorite pair today.</p>
        </div>
        <div>
        <Link to="/"><button className="btn btn-secondary block m-auto my-6 font-sans text-xl">Back</button></Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12">
            {list.map((items)=>(
                <Cards item={items} key={items.id}/>
            ))}
        </div>
      </div>
    </>
  );
}

export default Sneakerpage;
