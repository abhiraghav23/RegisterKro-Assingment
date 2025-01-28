import React from "react";
import { motion } from "framer-motion";

const GetStartedInfo = () => {
  const steps = [
    {
      icon: "📝", // Form icon for filling up
      title: "Fill up Application Form",
      bgColor: "bg-red-500",
    },
    {
      icon: "💳", // Credit card icon for payment
      title: "Make Online Payment",
      bgColor: "bg-green-500",
    },
    {
      icon: "👨‍💼", // Person with a laptop and on a call
      title: "Executive will Process Application",
      bgColor: "bg-orange-500",
    },
    {
      icon: "📩", // Mail icon for confirmation
      title: "Get Confirm Mail",
      bgColor: "bg-blue-500",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-8 text-white">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Get Started in 4 Easy Steps</h1>
        <p className="text-sm mt-2 max-w-2xl mx-auto">
          Follow these simple steps to complete your process quickly and seamlessly.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <div
              className={`w-20 h-20 flex justify-center items-center rounded-full shadow-lg ${step.bgColor}`}
            >
              <span className="text-4xl">{step.icon}</span>
            </div>
            <p className="mt-4 text-base font-medium">{step.title}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <motion.button
          className="bg-white text-orange-600 font-semibold py-2 px-6 rounded-full shadow-lg hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};

export default GetStartedInfo;
