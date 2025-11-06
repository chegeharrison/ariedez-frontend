// frontend/src/components/ServiceDetailModal.jsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function ServiceDetailModal({ service, onClose }) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center overflow-y-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // click outside to close
      >
        <motion.div
          key="modal"
          className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full mx-6 my-12 p-8 overflow-y-auto max-h-[90vh]"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
          >
            <FaTimes size={22} />
          </button>

          {/* Service Image */}
          {service.image && (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-60 object-cover rounded-xl mb-6"
            />
          )}

          {/* Service Title */}
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {service.title}
          </h2>

          {/* Detailed Content */}
          <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
            {service.longDescription || service.description}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
