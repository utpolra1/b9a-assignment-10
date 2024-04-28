import React, { useContext, useEffect, useState } from "react";
import Hooks from "../Hooks/Hooks";
import { authContext } from "../Firebase/AuthProvider";
import { NavLink } from "react-router-dom";

const MyCart = () => {
  const [item, setItem] = useState(null);

  const { user } = useContext(authContext);
  const { data, loading } = Hooks();

  useEffect(() => {
    const userData = data.filter((item) => item?.email === user?.email);
    if (userData.length > 0) {
      setItem(userData);
    }
  }, [data, user?.email]);

  return (
    <div className="mt-7">
      <div className="grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2">
        {item?.map((item) => (
          <div>
            <div className="grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2">
              <div
                className="card w-96 border h-full shadow-xl"
                data-aos="zoom-in-down"
              >
                <figure>
                  <img
                    className="h-80 w-72 rounded-xl mt-4"
                    src={item?.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body" data-aos="flip-right">
                  <h2 className="card-title">{item?.item_name}</h2>
                  <h1 className="font-bold">
                    Subcategory_Name: {item?.subcategory_Name}
                  </h1>
                  <p>
                    <span className="font-bold">Description: </span>
                    {item?.shortdescription}
                  </p>
                  <div>
                    <h1 className="font-bold">Price: {item?.price}</h1>
                    <h1>
                      <span className="font-bold">Status: </span>
                      {item?.stockStatus}
                    </h1>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="">
                      <NavLink to={`/carddetails/${item?._id}`}>
                        <span className=" btn font-bold">View Property</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
