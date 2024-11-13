import React from 'react';
import { Cloud, Database, Lock } from 'lucide-react';

export default function Platform() {
  return (
    <section id="platform" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Cloud Platform</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A powerful cloud infrastructure designed for drone operations
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Cloud className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Cloud Infrastructure</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Scalable architecture</li>
              <li>• Global deployment</li>
              <li>• High availability</li>
              <li>• Load balancing</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Database className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Data Management</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• Real-time synchronization</li>
              <li>• Automated backups</li>
              <li>• Data analytics</li>
              <li>• Historical tracking</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
            <Lock className="h-12 w-12 text-cyan-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Security</h3>
            <ul className="space-y-3 text-gray-400">
              <li>• End-to-end encryption</li>
              <li>• Access control</li>
              <li>• Audit logging</li>
              <li>• Compliance standards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}