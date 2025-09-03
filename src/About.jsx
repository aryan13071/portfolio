import React from 'react'
import { Link } from "react-router-dom";
import  { useState, useEffect } from 'react';

function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 px-6 py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 bg-indigo-300 animate-float"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-3xl text-center z-10">
        {/* Profile image */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full overflow-hidden shadow-xl flex items-center justify-center">
              <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Available
            </div>
          </div>
        </div>

        <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Hello, I am <span className="text-indigo-600 bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 transition-all duration-500 hover:scale-105 inline-block">Aryan Singh</span>
        </h1>

        <h2 className={`text-xl md:text-2xl font-semibold text-gray-600 mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          A Passionate <span className="text-indigo-500 relative before:absolute before:-inset-1 before:bg-indigo-100 before:rounded-lg before:opacity-60 relative inline-block before:-z-10 z-0">Full Stack Developer</span>
        </h2>

        <p className={`text-gray-700 text-lg leading-relaxed mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          I love building interactive, user-friendly, and scalable web applications. 
          From crafting sleek frontends with <span className="font-medium text-indigo-600 relative before:absolute before:-inset-0.5 before:bg-indigo-100 before:rounded-sm before:-z-10 before:opacity-60 relative inline-block z-0">React</span> to 
          designing efficient backends with <span className="font-medium text-indigo-600 relative before:absolute before:-inset-0.5 before:bg-indigo-100 before:rounded-sm before:-z-10 before:opacity-60 relative inline-block z-0">Node.js</span> and 
          <span className="font-medium text-indigo-600 relative before:absolute before:-inset-0.5 before:bg-indigo-100 before:rounded-sm before:-z-10 before:opacity-60 relative inline-block z-0"> Databases</span>, I enjoy turning ideas into reality.  
          I am always curious to learn new technologies and improve my problem-solving skills.
        </p>

        <div className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a 
            href="#projects" 
            className="group relative px-6 py-3 rounded-xl bg-indigo-600 text-white text-lg font-medium overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="relative z-10">View My Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
          
          <a 
            href="#profiles" 
            className="group relative px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 text-lg font-medium overflow-hidden transition-all duration-500 hover:text-white hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="relative z-10">Coding Profiles</span>
            <div className="absolute inset-0 bg-indigo-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-0"></div>
          </a>
          
          <a 
            href="#contact" 
            className="group relative px-6 py-3 rounded-xl border-2 border-indigo-600 text-indigo-600 text-lg font-medium overflow-hidden transition-all duration-500 hover:text-white hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-indigo-600 transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300 z-0"></div>
          </a>
          
          
        </div>

        
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-600 rounded-full mt-2"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default About;

