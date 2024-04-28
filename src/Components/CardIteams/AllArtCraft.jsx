import React from "react";
import Hooks from "../Hooks/Hooks";
import CardAll from "./CardAll";

const AllArtCraft = () => {
  const { data, loading } = Hooks();

  return (
    <div>
      <div className="mt-12">
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="items-center grid grid-cols-8">
                <th>Image</th>
                <th>item_name</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Costomization</th>
                <th>StockStatus</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
        {data.map((datas) => (
          <CardAll key={datas.id} datas={datas}></CardAll>
        ))}
      </div>
    </div>
  );
};

export default AllArtCraft;
