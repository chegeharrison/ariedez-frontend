"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceCard({ service }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Service Card */}
      <div
        onClick={() => setOpen(true)}
        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
      >
        {service.image && (
          <img
            src={service.image}
            alt={service.title}
            className="h-48 w-full object-cover"
          />
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.short_description}</p>
        </div>
      </div>

      {/* Modal with fade-in + scale animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full mx-4 p-6 relative shadow-2xl border border-gray-200"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

              {service.image && (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-xl mb-6"
                />
              )}

              <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
              <p className="text-gray-700 whitespace-pre-line">{service.detailed_description}</p>

              <div className="text-right mt-6">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
