import React from 'react';
import { Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2"
          >
            <Cpu className="h-8 w-8 text-cyan-500" />
            <span className="text-2xl font-bold text-white">AV8R</span>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Features', 'Solutions', 'Pricing', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-cyan-500 cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;