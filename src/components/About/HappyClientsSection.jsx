import React from "react";
import { motion } from "framer-motion";

const HappyClientsSection = () => {
  const clients = [
    "static/Sony.png", 
    "static/huawei.png",
    "static/turk.png",
    "static/Slack.png",
    "static/one.png",
    "static/google.png",
    "static/jbl.png",
    "static/spotify.png",
    "static/morpheus.png",
    "static/Dropbox.png",
    "static/coinbase.png",
    "static/Xiaomi.png",
    "static/webflow.png",
    "static/Zoom.png",
    "static/oracle.png",
    "static/adani.png",
    "static/tata.png",
    "static/tech.png",
  ];

  return (
    <div className="bg-gray-50 py-12 flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold">Our Happy Clients</h1>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
      </div>

      <motion.div
        className="flex gap-6 px-4 md:px-20 flex-wrap justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {clients.map((image, index) => (
          <motion.div
            key={index}
            className="relative w-16 h-16 md:w-20 md:h-20 flex justify-center items-center bg-white rounded-full shadow-md"
            whileHover={{ scale: 1.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              src={image}
              alt={`Client ${index + 1}`}
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="text-center mt-8">
        <motion.button
          className="text-blue-600 hover:underline flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="font-bold">
          Show more
          </span>
          <span className="ml-2">&rarr;</span>
        </motion.button>
      </div>
    </div>
  );
};

export default HappyClientsSection;
