import React from "react";

const clients = [
  {
    image: "/Images/me.png",
    name: "John Doe",
    location: "New York, USA",
    testimonial:
      "This travel agency provided excellent service and helped us plan the perfect vacation. Highly recommend!",
  },
  {
    image: "/Images/me2.png",
    name: "Jane Smith",
    location: "London, UK",
    testimonial:
      "Amazing experience! The tour guides were knowledgeable and the destinations were breathtaking.",
  },
  {
    image: "/Images/me.png",
    name: "Alice Johnson",
    location: "Sydney, Australia",
    testimonial:
      "Great customer service and fantastic travel packages. Will definitely book with them again.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-4xl font-bold text-center mb-14 text-gray-800">
          What Our <span className="text-blue-600">Clients Say</span>
        </h3>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 text-center flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-blue-100"
              />
              <h4 className="text-lg font-bold text-gray-800">{client.name}</h4>
              <p className="text-sm text-gray-500">{client.location}</p>
              <p className="text-gray-600 mt-4 text-sm italic">"{client.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
