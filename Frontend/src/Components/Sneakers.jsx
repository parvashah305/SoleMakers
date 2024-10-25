import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from "../../public/list.json";
import Slider from "react-slick";
import Cards from "./Cards";
import { Link } from "react-router-dom";
function Sneakers({handleClick}) {

  const [book,setBook]=useState([])

  useEffect(()=>{
    const getBook=async()=>{
      const res=await fetch("https://solemakers-backend.vercel.app/")
      const data= await res.json()
      
      setBook(data)
    }
    getBook()
  },[])

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const filterData = book.filter((data) => data.category === "Shoes");
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="text-center font-bold font-mono text-4xl mb-4">
            SNEAKERS
          </h1>
          <p>
            Experience the perfect fusion of style and comfort with our
            sneakers, crafted for those who never compromise. Designed for
            all-day wear, our sneakers offer superior support and a modern
            aesthetic, ensuring you stay ahead in both fashion and function.
            Elevate your casual look with a pair that’s as dynamic as you are.
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((items)=>(
              <Cards item={items} key={items.id} handleClick={handleClick}/>
            ))}
          </Slider>
        </div>

        <div>
        <Link to="/sneakers"><button className="btn btn-secondary block m-auto mt-12 font-sans text-xl">View all</button></Link>
        </div>
      
      </div>
    </>
  );
}

export default Sneakers;
