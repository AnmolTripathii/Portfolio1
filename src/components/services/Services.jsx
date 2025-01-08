
import React from 'react';
import { VscSymbolEvent } from "react-icons/vsc";
import { LuFileCode2 } from "react-icons/lu";
import { MdDesignServices } from "react-icons/md";
import { motion } from "framer-motion";
import Shead from "./S_Head";
import './Services.css';

function Services() {
  return (
    <div>
      <section id="services" className="flex flex-col items-center justify-center mt-16">
        <Shead />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">
          {/* Card 1 */}
          <motion.div
            className="card bg-gray-800 rounded-3xl p-8 border-2 border-transparent hover:border-primary hover:bg-gray-700 transition-all min-h-[350px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="grid grid-cols-[4fr_1fr] gap-4 items-center">
              <h3 className="text-gray-400 text-xl">Web Development</h3>
              <div className="go-arrow flex items-center justify-center h-16 w-16 rounded-br-3xl rounded-tl-3xl bg-gradient-to-br from-gray-800 to-gray-600 border-2 border-gray-800 text-primary">
                <LuFileCode2 size={24} />
              </div>
            </div>
            <p className="text-gray-200 text-sm mt-4 text-left">
              I specialize in crafting visually captivating and functional user interfaces. I'm dedicated to achieving the optimal balance between form and function in every development endeavor.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="card bg-gray-800 rounded-3xl p-8 border-2 border-transparent hover:border-primary hover:bg-gray-700 transition-all min-h-[350px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="grid grid-cols-[4fr_1fr] gap-4 items-center">
              <h3 className="text-gray-400 text-xl">UI Designing</h3>
              <div className="go-arrow flex items-center justify-center h-16 w-16 rounded-br-3xl rounded-tl-3xl bg-gradient-to-br from-gray-800 to-gray-600 border-2 border-gray-800 text-primary">
                <MdDesignServices size={24} />
              </div>
            </div>
            <p className="text-gray-200 text-sm mt-4 text-left">
              My design philosophy revolves around keeping things user-friendly and visually appealing. I'm on a mission to create interfaces that not only look good but also work seamlessly for everyone.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="card bg-gray-800 rounded-3xl p-8 border-2 border-transparent hover:border-primary hover:bg-gray-700 transition-all min-h-[350px]"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="grid grid-cols-[4fr_1fr] gap-4 items-center">
              <h3 className="text-gray-400 text-xl">SEO</h3>
              <div className="go-arrow flex items-center justify-center h-16 w-16 rounded-br-3xl rounded-tl-3xl bg-gradient-to-br from-gray-800 to-gray-600 border-2 border-gray-800 text-primary">
                <VscSymbolEvent size={24} />
              </div>
            </div>
            <p className="text-gray-200 text-sm mt-4 text-left">
              I provide tailored web development solutions using HTML, CSS, JavaScript, React, Node.js, and Express. From responsive designs to robust backend development, I bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;
