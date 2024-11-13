import React from 'react';
import { Cloud, Cpu, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Integration',
    description: 'Real-time data synchronization and remote control capabilities'
  },
  {
    icon: Cpu,
    title: 'IoT Core',
    description: 'Advanced IoT infrastructure for seamless device management'
  },
  {
    icon: Wifi,
    title: 'Connectivity',
    description: 'Reliable and secure connection protocols for your fleet'
  }
];

const Features = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {features.map((feature, index) => (
        <motion.div 
          key={feature.title}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50"
        >
          <feature.icon className="h-12 w-12 text-cyan-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-400">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Features;