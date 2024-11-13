import React from 'react';
import { Building2, Factory, Leaf, Camera } from 'lucide-react';

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Solutions</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tailored drone control solutions for various industries
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Building2 className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Construction</h3>
            <p className="text-gray-400 mb-4">
              Automated site surveys and progress monitoring
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• 3D mapping capabilities</li>
              <li>• Progress tracking</li>
              <li>• Safety inspections</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Factory className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Industrial</h3>
            <p className="text-gray-400 mb-4">
              Infrastructure inspection and maintenance
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Equipment monitoring</li>
              <li>• Thermal imaging</li>
              <li>• Asset management</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Leaf className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Agriculture</h3>
            <p className="text-gray-400 mb-4">
              Precision farming and crop monitoring
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Crop health analysis</li>
              <li>• Irrigation planning</li>
              <li>• Yield optimization</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Camera className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Media</h3>
            <p className="text-gray-400 mb-4">
              Professional aerial photography and videography
            </p>
            <ul className="space-y-2 text-gray-400">
              <li>• Automated flight paths</li>
              <li>• Real-time streaming</li>
              <li>• Content management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}