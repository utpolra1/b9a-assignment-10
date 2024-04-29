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
              backgroundImage:
                "url(https://i.ibb.co/TrcfzL9/jellyfish-banner-by-janunnoart-d4kvpoj-fullview.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            <div>
              <h1 className="text-2xl">i am robot</h1>
            </div>
          </div>
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/QFKcpGn/Danica-Rediscover-Ceramics-banner-Copy.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            Slide 2
          </div>
          <div
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/kmJZmkg/guacamole-flowers-06.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              width: "100%",
              height: "100%",
            }}
          >
            Slide 3
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
