import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
  };

  const imageUrl = service.image || "/images/fallback.jpg";

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 30, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-50 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center shadow border border-slate-100 text-slate-500 hover:text-slate-900 transition"
          >
            ✕
          </button>

          {/* LEFT IMAGE SECTION */}
          <div className="md:w-1/2 h-64 md:h-auto relative bg-slate-100">
            <motion.img
              key={imageUrl}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={imageUrl}
              alt={service.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = "/images/fallback.jpg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 hidden md:block"></div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div className="md:w-1/2 p-8 md:p-12 overflow-y-auto flex flex-col">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="h-1 w-12 rounded-full"
                  style={{ backgroundColor: service.color }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: service.color }}
                >
                  Digital Solutions
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                {service.title}
              </h2>

              <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
                {service.details}
              </p>
            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-tight mb-4">
              Core Capabilities
            </h3>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-3 mb-10"
            >
              {service.features?.map((feature, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center text-slate-700 text-sm font-semibold bg-slate-50 p-3 rounded-xl border border-slate-100"
                >
                  <span
                    className="w-2 h-2 rounded-full mr-3"
                    style={{ backgroundColor: service.color }}
                  />
                  {feature}
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onClose}
              className="mt-auto py-4 text-white rounded-2xl font-bold shadow-lg"
              style={{ backgroundColor: service.color }}
            >
              Close Discovery
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ServiceModal;