import React from 'react';
import { motion } from 'framer-motion';

const TeaserScreen: React.FC<{ onDismiss: () => void }> = ({ onDismiss }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center p-6 z-50"
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-white max-w-md"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to Weather Finder</h1>
        <p className="text-xl mb-8">Get accurate weather forecasts for any location around the world</p>
        

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDismiss}
          className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default TeaserScreen;