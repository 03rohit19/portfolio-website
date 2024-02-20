import React from "react";
import foodWebApp from "../asset/foodWebApp.png";
import videoApp from "../asset/videoApp.png";
import searchImageWebsite from "../asset/searchImageWebsite.png";
import pomoDoro from "../asset/pomoDoro.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodWebApp,
      link: "https://website-food-ordering.netlify.app",
      title: "FOOD VILLA",
    },
    {
      id: 2,
      src: videoApp,
      link: "https://rohit03.netlify.app",
      title: "YOU TUBE",
    },
    {
      id: 3,
      src: searchImageWebsite,
      link: "https://search-image-website.netlify.app",
      title: "SEARCH IMAGE WEBSITE",
    },
    {
      id: 4,
      src: pomoDoro,
      link: "https://clock-pomodoro-03.netlify.app",
      title: "POMODORO",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-4 py-2 m-2 duration-200 hover:scale-105"
                  onClick={() => handleClick(link)}
                >
                  {title}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
