import React from "react";
import Hooks from "../Hooks/Hooks";
import Cards from "./Cards";
import Banner from "./Banner/Banner";

const Home = () => {
  const { data, loading } = Hooks();
  return (
    <div>
      <Banner></Banner>
      <div className="mb-20">
        <div className="flex flex-col justify-center items-center"><h1 className="font-extrabold">BEST SELLER</h1>
        <h1 className="font-extrabold text-3xl mb-5">Trending Products</h1></div>
        {loading ? (
          <div className="items-center text-center">
            <span className="loading loading-spinner text-primary w-44"></span>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-5 justify-center md:grid-cols-2">
            {data.map((datas) => (
              <Cards key={datas.id} datas={datas} />
            ))}
          </div>
        )}
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 mb-10 shadow-xl justify-center">
        <img src="https://i.ibb.co/Hz8B93Y/02-4.png" alt="" />
        <img src="https://i.ibb.co/zsF3Mv8/01-1.png" alt="" />
        <img src="https://i.ibb.co/pWBzd3H/06-1.png" alt="" />
        <img src="https://i.ibb.co/pbDgBwp/04-3.png" alt="" />
        <img src="https://i.ibb.co/PrMS2YV/05-1.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
