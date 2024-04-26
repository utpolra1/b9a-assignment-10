import React from "react";
import Hooks from "../Hooks/Hooks";
import { NavLink } from "react-router-dom";

const Cards = ({ datas }) => {
  const {
    _id,
    item_name,
    stockStatus,
    userName,
    subcategory_Name,
    shortdescription,
    rating,
    price,
    rocessing_time,
    image,
    customization,
    email,
  } = datas || {};

  const { data, loading } = Hooks();

  return (
    <div>
      <div
        className="card w-96 border h-full shadow-xl"
        data-aos="zoom-in-down"
      >
        <figure>
          <img className="h-80 w-72 rounded-xl mt-4" src={image} alt="Shoes" />
        </figure>
        <div className="card-body" data-aos="flip-right">
          <h2 className="card-title">{item_name}</h2>
          <h1 className="font-bold">Subcategory_Name: {subcategory_Name}</h1>
          <p>
            <span className="font-bold">Description: </span>
            {shortdescription}
          </p>
          <div>
            <h1 className="font-bold">Price: {price}</h1>
            <h1>
              <span className="font-bold">Status: </span>
              {stockStatus}
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <div className="">
              <NavLink to={`/carddetails/${_id}`}>
                <span className=" btn font-bold">View Property</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
