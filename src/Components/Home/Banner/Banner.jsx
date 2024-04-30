import React from "react";
import { Carousel } from "flowbite-react";

const Banner = () => {
  return (
    <div className="mt-7 mb-20">
      <div className="h-56 sm:h-64 xl:h-[700px] 2xl:h-96">
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
        >
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              backgroundImage: "url(https://i.ibb.co/ZmHNqFn/cms-04.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="lg:pr-[650px]">
              <h1 className="text-3xl font-bold">
                Best Mordern Handmade <br />& Craft art Colllection{" "}
              </h1>
              <p>Designed by artists, made by us, just for you.</p>
            </div>
          </div>
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/YXLHqGw/landing-footer-bckg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <h1 className="text-black font-bold text-3xl">
                Handmade with patience and love <br /> for the artisanal craft
              </h1>
              <p>
                Engage in family-friendly crafting activities, with step-by-step
                guides
              </p>
            </div>
          </div>
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/9sx7Qtw/page20-our-service-title-image.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <div className=" text-white">
              <h1 className="text-3xl font-bold">
                Pamper Yourself with Handmade Bath <br /> and Beauty Products
              </h1>
              <p>Explore the intersection of crafting and culinary arts</p>
            </div>
          </div>
        </Carousel>
      </div>
      <div className="mt-10">
        <h1 className="font-extrabold items-center justify-center flex">
          Best Product{" "}
        </h1>
      </div>
      <div className="grid lg:grid-cols-4 mt-5 items-center gap-5 justify-center">
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-64 h-84 rounded-xl shadow-md"
            src="https://i.ibb.co/cL13VPT/11-1.jpg"
            alt=""
          />
          <h1 className="mt-4 font-extrabold">Wood Toy Home Block Set</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-64 h-84 rounded-xl shadow-md"
            src="https://i.ibb.co/tHzQRh3/07.jpg"
            alt=""
          />
          <h1 className="mt-4 font-extrabold">Modern Home decoration</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-64 h-84 rounded-xl shadow-md"
            src="https://i.ibb.co/Nn9mkc7/04-1.jpg"
            alt=""
          />
          <h1 className="mt-4 font-extrabold">Table Lamp Kids Lighting</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="w-64 h-84 rounded-xl shadow-md"
            src="https://i.ibb.co/nf3hhvN/02-1.jpg"
            alt=""
          />
          <h1 className="mt-4 font-extrabold">Dinner Broth Bowl Set</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
