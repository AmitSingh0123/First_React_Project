import React from "react";

function Card({item}) {
  if (!item) {
    return null;
  }
  return (
    <div className="">
      <div className="card w-96 shadow-xl border border-blue-700 overflow-hidden bg-white">
        <figure className="bg-white border-b-2 p-2  ">
          <img
            src={item.image_link}
            alt="Shoes"
            className=""
          />
        </figure>
        <div className="card-body bg-white text-black">
          <h2 className="card-title text-2xl">
            {item.title}
            <div className="badge badge-secondary text-white font-extrabold p-3">{item.book_type}</div>
          </h2>
          <p>{item.description}</p>
          <div className="card-actions justify-between mt-4">
            <div className="badge badge-outline px-4 py-4  font-bold bg-green-400 text-white ">₹ {item.price}</div>
            <div className="badge badge-outline px-4 py-4 font-bold hover:bg-green-400 hover:text-white hover:duration-200">Buy Now !</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
