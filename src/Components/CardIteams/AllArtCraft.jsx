import React from "react";
import Hooks from "../Hooks/Hooks";
import CardAll from "./CardAll";

const AllArtCraft = () => {
  const { data, loading } = Hooks();

  return (
    <div>
      <div className="">
        <div className="overflow-x-auto">
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
    </div>
  );
};

export default AllArtCraft;
