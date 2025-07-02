"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const stats = [
    {
      label: "Apps Published",
      value: "12+",
      icon: (
        <svg
          className="w-8 h-8 text-blue-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1Z" />
        </svg>
      ),
    },
    {
      label: "Total Downloads",
      value: "1M+",
      icon: (
        <svg
          className="w-8 h-8 text-purple-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M19.35,10.03C18.67,6.59 15.64,4 12,4..." />
        </svg>
      ),
    },
    {
      label: "App Rating",
      value: "4.8",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12,17.27L18.18,21..." />
        </svg>
      ),
    },
    {
      label: "Countries",
      value: "150+",
      icon: (
        <svg
          className="w-8 h-8 text-green-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M17.9,17.39C17.64,16.59..." />
        </svg>
      ),
    },
  ];

  const features = ["Cross-Platform", "Real-time Sync", "Offline Mode"];

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-8">
          <span className="text-lg md:text-xl text-gray-400 mb-2 block">
            Hi, I'm
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 text-transparent bg-clip-text bg-[size:200%] animate-gradient">
              John Doe
            </span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
            Mobile App Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
            Crafting exceptional mobile experiences with
            <span className="text-blue-400"> React Native</span>,
            <span className="text-purple-400"> Swift</span>, and
            <span className="text-blue-400"> Flutter</span>
          </p>
        </div>

        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 px-2">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="mb-2 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-transparent group-hover:border-blue-500/30 rounded-tl-xl transition-colors duration-500"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-transparent group-hover:border-purple-500/30 rounded-br-xl transition-colors duration-500"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-15 blur-lg transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="max-w-lg mx-auto px-4">
          <div className="group relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl p-1 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05]">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                    />
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              <div className="relative p-8">
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    <span className="text-blue-400 text-sm font-medium">
                      Featured App
                    </span>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    FitTracker Pro
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Your Personal Fitness Companion
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Reuse same icon & style if needed, or custom like above */}
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-400 border border-gray-700/50"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 left-0 w-[2px] h-8 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                <div className="absolute top-0 left-0 h-[2px] w-8 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 right-0 w-[2px] h-8 bg-gradient-to-t from-purple-500/50 to-transparent"></div>
                <div className="absolute bottom-0 right-0 h-[2px] w-8 bg-gradient-to-l from-purple-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;




// "use client";
// import React from "react";

// const processes = [
//   {
//     title: "Ideation & Planning",
//     colorClasses: {
//       bg: "bg-blue-500/10",
//       text: "text-blue-400",
//       gradientFrom: "from-blue-500",
//       gradientTo: "to-purple-500",
//       hoverBorder: "group-hovujher:border-blue-500/30",
//     },
//     icon: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//       />
//     ),
//     steps: [
//       "Requirements gathering and market research",
//       "User flow and wireframe design",
//       "Interactive prototype development",
//     ],
//   },
//   {
//     title: "Development",
//     colorClasses: {
//       bg: "bg-purple-500/10",
//       text: "text-purple-400",
//       gradientFrom: "from-purple-500",
//       gradientTo: "to-pink-500",
//       hoverBorder: "group-hover:border-purple-500/30",
//     },
//     icon: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//       />
//     ),
//     steps: [
//       "Architecture setup and tech stack selection",
//       "Agile development with regular sprints",
//       "Continuous testing and code reviews",
//     ],
//   },
//   {
//     title: "Launch & Growth",
//     colorClasses: {
//       bg: "bg-green-500/10",
//       text: "text-green-400",
//       gradientFrom: "from-green-500",
//       gradientTo: "to-emerald-500",
//       hoverBorder: "group-hover:border-green-500/30",
//     },
//     icon: (
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//       />
//     ),
//     steps: [
//       "App store optimization and submission",
//       "Analytics integration and monitoring",
//       "Regular updates and feature enhancements",
//     ],
//   },
// ];

// const DevelopmentProcess = () => {
//   return (
//     <section className="py-16 md:py-20 relative">
//       <div className="container mx-auto px-4">
//         <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-center">
//           Development Process
//         </h2>
//         <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
//           A systematic approach to building exceptional mobile applications
//         </p>

//         <div className="max-w-5xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-2">
//             {processes.map((process, index) => (
//               <div key={index} className="group relative">
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-r ${process.colorClasses.gradientFrom} ${process.colorClasses.gradientTo} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
//                 ></div>
//                 <div
//                   className={`relative bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-700/50 ${process.colorClasses.hoverBorder} transition-colors duration-300`}
//                 >
//                   {/* Icon */}
//                   <div className="mb-6">
//                     <div
//                       className={`w-16 h-16 ${process.colorClasses.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <svg
//                         className={`w-8 h-8 ${process.colorClasses.text}`}
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                       >
//                         {process.icon}
//                       </svg>
//                     </div>
//                     <h3
//                       className={`text-xl font-semibold mb-3 text-center transition-colors ${process.colorClasses.text}`}
//                     >
//                       {process.title}
//                     </h3>
//                   </div>

//                   {/* Steps */}
//                   <div className="space-y-3">
//                     {process.steps.map((step, stepIndex) => (
//                       <div key={stepIndex} className="flex items-start gap-3">
//                         <div
//                           className={`w-6 h-6 rounded-full ${process.colorClasses.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
//                         >
//                           <span
//                             className={`text-sm ${process.colorClasses.text}`}
//                           >
//                             {stepIndex + 1}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
//                           {step}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DevelopmentProcess;
