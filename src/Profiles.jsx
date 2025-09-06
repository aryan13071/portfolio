// import React from 'react'
// import { Link } from "react-router-dom";
// import {Cards} from './Cards.jsx'
// function Profiles () {
//   return (
//     <>
//     <div className="bg-gray-900 min-h-screen flex items-center justify-center">
//       <Cards name="Codeforces" link = "src\assets\CF profile.png" pos = "1" />
//       <Cards name="Codechef" link ="src\assets\CF solves.png" pos ="2"/>
//       <Cards name="Leetcode" link ="src\assets\Leetcode Profile.png" pos ="3"/>
//       <Cards name="Atcoder" link ="src\assets\Atcoder profile.png" pos ="4"/>
//     </div>

//     </>
//   )
// }
// export default Profiles;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiCode, FiAward, FiStar, FiTrendingUp } from 'react-icons/fi';

// Platform data with additional details
const platformData = {
  "1": {
    name: "Codeforces",
    url: "https://codeforces.com/profile/aryan___",
    stats: "Specilaist | 1400+ Rating",
    color: "from-red-500 to-orange-500",
    icon: <FiTrendingUp className="text-xl" />,
    description: "Competitive programming contests"
  },
  "2": {
    name: "Codechef",
    url: "https://www.codechef.com/users/coderaryan2005",
    stats: "3★ | 1600+ Rating",
    color: "from-yellow-500 to-amber-600",
    icon: <FiAward className="text-xl" />,
    description: "Global coding community"
  },
  "3": {
    name: "Leetcode",
    url: "https://leetcode.com/u/ARYAN____SINGH/",
    stats: "300+ Problems Solved Knight",
    color: "from-amber-500 to-yellow-600",
    icon: <FiCode className="text-xl" />,
    description: "Technical interview preparation"
  },
  "4": {
    name: "Atcoder",
    url: "https://atcoder.jp/users/aryan___",
    stats: "500+ Points | Active Participant",
    color: "from-blue-500 to-cyan-500",
    icon: <FiStar className="text-xl" />,
    description: "Japanese programming contests"
  }
};

// Background particles component
const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-20"
          style={{
            background: "linear-gradient(45deg, #6366f1, #ec4899)",
            width: Math.random() * 50 + 20,
            height: Math.random() * 50 + 20,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 30 - 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// Enhanced Card Component
const Card = ({ id, name, imageUrl, position, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const platform = platformData[position];

  return (
    <motion.div
      className="relative w-80 h-96 rounded-2xl overflow-hidden cursor-pointer group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: position * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Background with gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-90`} />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-repeat" style={{ 
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M0 0h20v20H0z\" fill=\"none\"/%3E%3Cpath d=\"M1 1v18h18V1H1zm1 1h16v16H2V2zm2 2h12v12H4V4zm1 1v10h10V5H5zm1 1h8v8H6V6z\" fill=\"%23ffffff\" fill-opacity=\"1\"/%3E%3C/svg%3E")',
        backgroundSize: '30px'
      }} />
      
      {/* Glow effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-white opacity-0"
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Card content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 text-white">
        {/* Platform icon */}
        <motion.div 
          className="mb-6 p-4 rounded-2xl bg-white bg-opacity-10 backdrop-blur-md"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {platform.icon}
        </motion.div>
        
        {/* Platform name */}
        <motion.h3 
          className="text-3xl font-bold mb-2 text-center"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.2 }}
        >
          {platform.name}
        </motion.h3>
        
        {/* Stats */}
        <p className="text-lg mb-4 text-center opacity-90">{platform.stats}</p>
        
        {/* Description */}
        <p className="text-sm text-center mb-6 opacity-75">{platform.description}</p>
        
        {/* View Profile Button */}
        <motion.button
          className="flex items-center justify-center px-6 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Profile <FiExternalLink className="ml-2" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Modal for platform details
const PlatformModal = ({ platformId, isOpen, onClose }) => {
  if (!platformId || !isOpen) return null;
  
  const platform = platformData[platformId];
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal content */}
          <motion.div
            className={`relative z-10 w-full max-w-md rounded-3xl overflow-hidden bg-gradient-to-br ${platform.color} text-white p-8`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:scale-110 transition-transform"
              onClick={onClose}
            >
              &times;
            </button>
            
            <div className="flex flex-col items-center">
              <div className="text-5xl mb-6">{platform.icon}</div>
              <h2 className="text-4xl font-bold mb-2">{platform.name}</h2>
              <p className="text-xl mb-6 opacity-90">{platform.stats}</p>
              <p className="text-center mb-8 opacity-80">{platform.description}</p>
              
              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-md border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Visit Profile <FiExternalLink className="ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Main Profiles Component
const Profiles = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (platformId) => {
    setSelectedPlatform(platformId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <ParticlesBackground />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Coding Profiles
          </h1>
          <p className="text-xl opacity-80 max-w-2xl mx-auto">
            Explore my coding journey across different competitive programming platforms
          </p>
        </motion.div>
        
        {/* Cards Grid */}
        <div className="flex flex-wrap justify-center gap-10">
          <Card 
            id="cf" 
            name="Codeforces" 
            imageUrl="src/assets/CF profile.png" 
            position="1" 
            onClick={() => handleCardClick("1")}
          />
          <Card 
            id="cc" 
            name="Codechef" 
            imageUrl="src/assets/CF solves.png" 
            position="2" 
            onClick={() => handleCardClick("2")}
          />
          <Card 
            id="lc" 
            name="Leetcode" 
            imageUrl="src/assets/Leetcode Profile.png" 
            position="3" 
            onClick={() => handleCardClick("3")}
          />
          <Card 
            id="ac" 
            name="Atcoder" 
            imageUrl="src/assets/Atcoder profile.png" 
            position="4" 
            onClick={() => handleCardClick("4")}
          />
        </div>
        
        {/* Footer */}
        <motion.div 
          className="text-center mt-20 opacity-70 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <p>Click on any platform to explore my profile</p>
        </motion.div>
      </div>
      
      {/* Modal */}
      <PlatformModal 
        platformId={selectedPlatform} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
};

export default Profiles;