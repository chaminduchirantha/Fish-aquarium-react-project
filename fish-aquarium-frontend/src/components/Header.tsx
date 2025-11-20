'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Collections', href: '/collection' },
  { name: 'Fishes', href: '/fishe' },
  { name: 'Accessories', href: '/access' },
  { name: 'Aquarium Plants', href: '/plants' },
  { name: 'Smart Aquarium', href: '/customized' },
]

export default function AnjalFarmHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  

  return (
      <header className="fixed top-0 inset-x-0 z-50 bg-sky-700 border-b border-white/20 shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8"
        >
          {/* Logo */}
          <div className="flex lg:flex-1 items-center">
            <Link to="/" className="flex items-center gap-3">
              {/* <img
                // alt="Aqua World Logo"
                src="logo.png"
                className="h-10 w-10 rounded-full"
              /> */}
              <span className="text-white font-bold text-xl tracking-wide">
                Aqua World
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2.5 text-sky-900 hover:text-sky-700"
            >
              <Bars3Icon className="w-7 h-7" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-semibold text-white hover:text-yellow-300 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3">
            <a
              href="/login"
              className="text-sm font-semibold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 px-5 py-2 rounded-lg shadow-lg transition-all"
            >
              Login
            </a>
            <a
              href="/register"
              className="text-sm font-semibold text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-600 hover:to-orange-400 px-5 py-2 rounded-lg shadow-lg transition-all"
            >
              Sign Up
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-sky-900/95 backdrop-blur-md text-white p-6">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
                <img
                  alt="Aqua World Logo"
                  src="logo.png"
                  className="h-8 w-8 rounded-full"
                />
                <span className="font-bold text-lg">Aqua World</span>
              </Link>
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
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2 text-base font-semibold hover:bg-sky-800/60 transition"
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-6 flex gap-3">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 text-center bg-sky-500 hover:bg-sky-600 py-2 rounded-md font-semibold"
                >
                  Login
                </Link>
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
  )
}
