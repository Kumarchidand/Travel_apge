import React from "react";
import {
  FaPlaneDeparture,
  FaHotel,
  FaUmbrellaBeach,
  FaConciergeBell,
} from "react-icons/fa";

const services = [
  {
    icon: <FaPlaneDeparture size={48} className="text-blue-600 mb-4 mx-auto" />,
    title: "Flight Booking",
    description:
      "We provide easy and quick flight booking services to make your travel hassle-free.",
  },
  {
    icon: <FaHotel size={48} className="text-blue-600 mb-4 mx-auto" />,
    title: "Hotel Booking",
    description:
      "Book hotels at the best prices with our exclusive deals and discounts.",
  },
  {
    icon: <FaUmbrellaBeach size={48} className="text-blue-600 mb-4 mx-auto" />,
    title: "Beach Tours",
    description:
      "Enjoy relaxing beach tours with all-inclusive packages and guided tours.",
  },
  {
    icon: <FaConciergeBell size={48} className="text-blue-600 mb-4 mx-auto" />,
    title: "Concierge Services",
    description:
      "Get personalized concierge services for a seamless travel experience.",
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-[100rem] mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-14 text-gray-800">
          Our <span className="text-blue-600">Services</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white h-[320px] flex flex-col justify-center items-center rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center"
            >
              {service.icon}
              <h4 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h4>
              <p className="text-gray-600 mt-3 text-base px-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
