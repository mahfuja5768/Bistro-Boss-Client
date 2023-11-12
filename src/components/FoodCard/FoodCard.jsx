import React from "react";

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
  return (
    <div className="card relative">
      <figure className="">
        <img
          src={image}
          alt="Shoes"
          className=""
        />
      </figure>
      <p className=" absolute top-3 right-12 bg-slate-800 text-white px-3  py-1 rounded-full">${price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn bg-transparent border-0 text-black border-b-4 border-[#BB8506]">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
