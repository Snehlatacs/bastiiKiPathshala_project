import React from "react";
import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import VolunteerForm from "./components/VolunteerForm";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function App() {
  const [menu, setmenu] = React.useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-primary">
      <header>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">🍁BastiKiPathshala</h1>
          <nav className="hidden md:flex gap-4 text-sm text-white">
            <a href="#about" className="hover:underline">
              About
            </a>
            <a href="#programs" className="hover:underline">
              Programs
            </a>
            <a href="#volunteer" className="hover:underline">
              Volunteer
            </a>
          </nav>
          <button
            onClick={() => setmenu(!menu)}
            className="md:hidden"
            aria-label="menu"
          >
            {menu ? (
              <IoMdClose className="text-2xl fill-white" />
            ) : (
              <IoIosMenu className="text-2xl fill-white" />
            )}
          </button>
        </div>
      </header>
      {menu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
          onClick={() => setmenu(false)} 
        >
          <div
            className="bg-slate-500 opacity-80 rounded-lg shadow-lg p-8 w-80 text-center relative"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setmenu(false)}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
            <ul className="flex flex-col gap-4 text-xl font-semibold text-primary">
              <li>
                <a
                  href="#about"
                  className="hover:underline"
                  onClick={() => setmenu(false)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:underline"
                  onClick={() => setmenu(false)}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#volunteer"
                  className="hover:underline"
                  onClick={() => setmenu(false)}
                >
                  Volunteer
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <main className="flex-1 ">
        <Hero />
        <About />
        <section id="programs" className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl mb-4 text-center animate-name font-bold">Our Programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 bg-gradient-to-r from-cyan-700 to-teal-600 text-black p-12 rounded-3xl shadow-lg">
              <div className="p-6 bg-slate-300 rounded-3xl shadow">
                <h3 className="font-black mb-2">Education</h3>
                <p className="text-sm font-semibold text-gray-900">
                  After-school support, learning kits, teacher training and
                  scholarships for girls.
                </p>
              </div>
              <div className="p-6 bg-slate-300 rounded-3xl shadow">
                <h3 className="font-black mb-2">Health Camps</h3>
                <p className="text-sm font-semibold text-gray-900">
                  Regular health check-ups, vaccinations and awareness
                  workshops.
                </p>
              </div>
              <div className="p-6 bg-slate-300 rounded-3xl shadow">
                <h3 className="font-black mb-2 ">Livelihood</h3>
                <p className="text-sm font-semibold text-gray-900">
                  Skill-building, micro-enterprise support and market linkages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <VolunteerForm />
      </main>

      <footer className=" text-white">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between sm:items-center">
          <div className="sm:justify-between flex flex-col md:flex-row items-center gap-4">
            <h4 className="font-semibold">Contact</h4>
            <p className="text-sm">Email: contact@bastikipathshala.org</p>
            <p className="text-sm">Phone: +91 98765 43210</p>
          </div>
          <div className="mt-4 md:mt-0 text-sm">
            © BastiKiPathshala NGO • Registered Charity
          </div>
        </div>
      </footer>
    </div>
  );
}
