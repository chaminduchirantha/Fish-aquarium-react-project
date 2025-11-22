'use client'

import sectionImage from '../assets/beautiful-group-fish-underwater.jpg'

export default function AnjalFarmHero() {

  return (
    <div className="relative min-h-screen font-sans text-white">
    

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${sectionImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-sky-900/40 to-sky-800/70 -z-10"></div>

        {/* Floating Bubbles Animation */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="absolute bottom-0 w-4 h-4 bg-sky-200 rounded-full opacity-40 animate-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.8}s`,
                animationDuration: `${6 + Math.random() * 4}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="px-6 lg:px-8 animate-fadeIn">
          <h1 className="text-3xl lg:text-5xl md:text-3xl font-bold tracking-tight text-sky-100 drop-shadow-lg">
            Dive Into Your Own Underwater World
          </h1>
          <h2 className="text-2xl md:text-3xl sm:text-4xl font-medium text-sky-200 mt-3 drop-shadow-md">
            Aqua World Fish Aquarium Shop
          </h2>
          <p className="mt-6 text-xl lg:text-xl text-sky-100/90 max-w-2xl mx-auto">
            Experience the tranquility of the ocean in your own home. Explore our exotic fish, aquatic plants, and smart aquarium systems.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/fish"
              className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 px-6 py-3 lg:text-md md:text-md sm:text-sm font-semibold text-white rounded-full shadow-lg transition-all"
            >
              Explore Our Fishes
            </a>
            <a
              href="/access"
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 px-6 py-3 lg:text-md md:text-md sm:text-sm font-semibold text-white rounded-full shadow-lg transition-all"
            >
               View  Accessories
            </a>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(1.3); opacity: 0; }
        }
        .animate-bubble {
          animation: bubble linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out;
        }
      `}</style>
    </div>
  )
}
