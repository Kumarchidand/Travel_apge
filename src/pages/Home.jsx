import React from "react";
import PopularDestination from "./PopularDestination";
import Services from "./Services";
import Clients from "./Clients";
const Home = () => {
  return (
    <>
      <div
        className="relative bg-cover h-screen"
        style={{ backgroundImage: "url('/Images/hero.png')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white ">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Explore the World with Us
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover amazing places at exclusive deals
          </p>
          <button className="bg-blue-600 text-lg md:text-xl hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded">
            Get Started
          </button>
        </div>
      </div>
      <PopularDestination />
      <Services />
      <Clients />
    </>
  );
};

export default Home;
