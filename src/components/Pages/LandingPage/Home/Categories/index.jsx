import React from "react";

const Category = () => {
  const data = [
    {
      text: "Web Development",
      image: "/web-dev.avif",
    },
    {
      text: "Marketing",
      image: "/marketing.avif",
    },
    {
      text: "Baby Sitting",
      image: "/baby-sitting.avif",
    },
    {
      text: "Photography",
      image: "/photography.avif",
    },
    {
      text: "Sailor",
      image: "/sailor.avif",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Explore Categories</h2>
        <p className="text-gray-600">Find the work that suits your skills and lifestyle</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden w-full sm:w-[48%] md:w-[30%] lg:w-[22%] cursor-pointer">
            <div className="h-40 overflow-hidden">
              <img src={item.image} alt={item.text} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"/>
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
