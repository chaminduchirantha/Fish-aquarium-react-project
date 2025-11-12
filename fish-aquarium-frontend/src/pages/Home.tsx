'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import sectionImage from '../assets/beautiful-group-fish-underwater.jpg'
import logo from '../assets/freepik__a-vibrant-osca-fish-swims-in-a-clear-tank-bubbles-__26356.png'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Fishes', href: '../componenet/Fishes' },
  
  { name: 'Accessories', href: '#' },
  { name: 'Aquarium Plants', href: '#' },
  { name: 'Smart Aquarium', href: '#' },
  { name: 'Collections', href: '#collections' },
  
]

export default function AnjalFarmHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen font-sans text-white">
      {/* Navigation */}
      <header className="fixed top-0 inset-x-0 z-50 bg-sky-700 border-b border-white/20 shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="flex items-center gap-3">
              <img
                alt="Aqua World Logo"
                src={logo}
                className="h-10 w-10 rounded-full"
              />
              <span className="text-white font-bold text-xl tracking-wide">
                Aqua World
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2.5 text-sky-200 hover:text-sky-700"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className=" font-semibold text-white hover:text-yellow-300 transition-colors text-"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <Link
              to="login"
              className="text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 px-5 py-2 rounded-lg shadow-lg transition-all"
            >
              Login
            </Link>
            <a
              href="#"
              className="text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 px-5 py-2 rounded-lg shadow-lg transition-all"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-sky-700/95 backdrop-blur-md text-white p-6">
            <div className="flex items-center justify-between mb-6">
              <a href="#" className="flex items-center gap-3">
                <img
                  alt="Aqua World Logo"
                  src="logo.png"
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-bold text-lg">Aqua World</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sky-300 hover:text-white"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-2 text-base font-semibold hover:bg-sky-800/60 transition"
                >
                  {item.name}
                </a>
              ))}
              <div className="mt-6 flex gap-3">
                <a
                  href="#"
                  className="flex-1 text-center bg-sky-500 hover:bg-sky-600 py-2 rounded-md font-semibold"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="flex-1 text-center bg-orange-500 hover:bg-orange-600 py-2 rounded-md font-semibold"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

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
            <Link
              to="fishes"
              className="bg-gradient-to-r from-sky-400 to-blue-500 hover:from-blue-500 hover:to-sky-400 px-6 py-3 text-md font-semibold text-white rounded-full shadow-lg transition-all"
            >
              Explore Our Fishes
            </Link>
            <Link
              to="/accessories"
              className="bg-gradient-to-r from-orange-400 to-pink-500 hover:from-pink-500 hover:to-orange-400 px-6 py-3 text-md font-semibold text-white rounded-full shadow-lg transition-all"
            >
              View Accessories
            </Link>
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
