import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Company Formation",
      description: "Build web-based solutions that enhance customer experience.",
      image: "svg/vector-1.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Company Secretarial Services",
      description: "Make data-driven decisions and utilize technology to reach business goals.",
      image: "svg/vector-2.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Virtual Office Address",
      description: "Foster customer relationships by effectively serving your market.",
      image: "svg/vector-3.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Annual Compliance Services",
      description: "Turn your ideas into modern products with our design experts.",
      image: "svg/vector-4.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Payroll Services",
      description: "Expand your business across the globe with minimal effort.",
      image: "svg/vector-5.png", // Replace with actual image URL
      link: "#",
    },
    {
      title: "Bookkeeping Services",
      description: "Steering user behaviours with creative design, data insights & technology.",
      image: "svg/vector-6.png", // Replace with actual image URL
      link: "#",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 w-full h-full flex flex-col">
      <div className="text-center">
        <h2 className="text-yellow-500 text-sm  tracking-wide uppercase">
          Welcome to RegisterKaro.in
        </h2>
        <h1 className="text-3xl font-semibold mt-2">Explore Our Services</h1>
      </div>

      <div className="flex flex-wrap justify-center mt-10 px-4 md:px-20 w-full overflow-scroll no-scrollbar h-[auto]">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 hover:shadow-lg transition-shadow w-full md:w-1/3 px-20 cursor-pointer"
          >
            <img
              src={service.image}
              alt={`${service.title} icon`}
              className="mb-4 w-16 h-16 object-contain"
            />
            <h3 className="font-bold text-lg">{service.title}</h3>
            <p className="text-gray-600 mt-2 md:hidden lg:block">
              {service.description}
            </p>
            <a
              href={service.link}
              className="mt-4 text-blue-600 hover:underline flex items-center"
            >
              Learn more
              <span className="ml-1">&rarr;</span>
            </a>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <button
          className={
            "bg-[#1c4670] text-slate-50 pl-8 pr-8 pt-2 pb-2 rounded-md font-semibold text-center shadow-md"
          }
        >
          See all Services
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
