import React from "react";

export default function Cards({item,handleClick}) {
    console.log(item)
  return (
    <>
      <div className="mt-4 my-3 p-3 font-sans">
        <div className="card bg-base-200 w-92 shadow-xl hover:scale-105 duration-300 ease-in-out dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
             
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">&#8377;{item.price}</div>
              <div onClick={()=>handleClick(item)} className="badge badge-outline hover:bg-pink-600 hover:text-white cursor-pointer">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
