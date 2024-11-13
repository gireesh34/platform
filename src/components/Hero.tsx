import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import DroneModel from './DroneModel';

const Hero = () => {
  return (
    <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left z-10"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text">
              Next-Gen Drone Control Platform
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Connect and control your drones through our advanced cloud
              platform. Seamlessly integrate IoT capabilities for enhanced
              operational efficiency.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-500 text-black px-8 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                Get Started
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyan-500 text-cyan-500 px-8 py-3 rounded-lg font-medium hover:bg-cyan-500/10 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          <div className="h-[400px] lg:h-[600px] relative">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  Loading 3D Model...
                </div>
              }
            >
              <DroneModel />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
