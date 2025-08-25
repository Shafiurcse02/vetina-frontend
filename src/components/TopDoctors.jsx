import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// parent container variants for staggered animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2, // এক এক করে cards animate হবে
    },
  },
};

// individual card variants for fade + scale + lift
const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.4 },
  },
};

const TopDoctors = () => {
  const doctors = useSelector((state) => state.doctors.doctorsList);
  const [visibleCount, setVisibleCount] = useState(10);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className="text-3xl font-medium">Top Doctors to Book</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <motion.div
        className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5 px-3 sm:px-0"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {doctors.slice(0, visibleCount).map((item, index) => (
          <motion.div
            key={item.id}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer bg-white shadow-lg"
            variants={cardVariants}
            whileHover={{ scale: 1.07, y: -5 }}
            onClick={() => navigate(`/appointment/${item.id}`)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="bg-blue-50 w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm justify-center text-green-500">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{item.name}</p>
              <p className="text-gray-900 text-sm">{item.speciality}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.button
        onClick={() => setVisibleCount((prev) => prev + 5)}
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        whileHover={{ scale: 1.05 }}
      >
        More
      </motion.button>
    </div>
  );
};

export default TopDoctors;
