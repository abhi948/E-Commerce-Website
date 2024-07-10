import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-80vh bg-base-100 mx-2 shadow-xl hover:scale-105 duration-200">
          <figure><img src={item.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-between">
            <button className="btn btn-outline btn-secondary">${item.price}</button>
              <button className="btn btn-secondary hover:bg-transparent hover:text-pink-500">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
