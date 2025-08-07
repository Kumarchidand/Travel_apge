import React from "react";

const destinations = [
  {
    image: "/Images/gal1.jpg",
    title: "Paris, France",
    descriptions: "Experience the romance and culture of the City of Lights.",
  },
  {
    image: "/Images/gal2.jpg",
    title: "Bali, Indonesia",
    descriptions: "Relax on the beautiful beaches and explore lush jungles.",
  },
  {
    image: "/Images/gal3.png",
    title: "New York, USA",
    descriptions: "Discover the vibrant energy and iconic landmarks of NYC.",
  },
  {
    image: "/Images/gal4.jpg",
    title: "Tokyo, Japan",
    descriptions:
      "Immerse yourself in the unique blend of tradition and modernity.",
  },
  {
    image: "/Images/gal5.webp",
    title: "Sydney, Australia",
    descriptions: "Enjoy the stunning harbor views and vibrant city life.",
  },
  {
    image: "/Images/gal6.webp",
    title: "Rome, Italy",
    descriptions: "Explore ancient history and indulge in delicious cuisine.",
  },
];

const PopularDestination = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-[100rem] mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Popular <span className="text-blue-600">Destinations</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {destinations.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={city.image}
                alt={city.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800">
                  {city.title}
                </h4>
                <p className="text-gray-600 mt-3 text-sm">
                  {city.descriptions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;
