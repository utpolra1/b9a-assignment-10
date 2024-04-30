import React from "react";
import Hooks from "../Hooks/Hooks";
import CardAll from "./CardAll";

const AllArtCraft = () => {
  const { data, loading } = Hooks();

  return (
    <div className="my-10">
      {loading ? (
        <div className="text-primary">
          <div className='items-center text-center'><span className="loading loading-spinner text-primary w-44"></span></div>
        </div>
      ) : (
        <div className="items-center">
          <div className="overflow-x-auto ">
            <table className="table table-xs">
              <thead>
                <tr className="">
                  <th>Image</th>
                  <th>item_name</th>
                  <th>Price</th>
                  <th>Rating</th>
                  <th>Costomization</th>
                  <th>StockStatus</th>
                </tr>
              </thead>
            </table>
          </div>
          {data.map((datas) => (
            <CardAll key={datas.id} datas={datas}></CardAll>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllArtCraft;
