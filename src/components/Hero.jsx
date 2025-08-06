import React from 'react'
import { MdVolunteerActivism } from "react-icons/md";

export default function Hero(){
  return (
    <section className="mx-4 mb-1 bg-gradient-to-r from-cyan-700 to-teal-600 text-black py-12 rounded-bl-full rounded-tr-full shadow-lg">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 animate-name">Basti Ki Pathshala — Building stronger communities</h2>
        <p className="mb-4 font-semibold max-w-2xl mx-auto">Education, health & livelihood programs for underprivileged families.</p>
        <a href="#volunteer" className="bg-gradient-to-t from-teal-900 to-primary text-white px-5 py-2 rounded-2xl shadow flex w-52 items-center mx-auto justify-center md:mt-8">Become a Volunteer <span className='pl-2 text-lg text-yellow-900'><MdVolunteerActivism /></span></a>
      </div>
      <br />
      <br />
      <br/>
    </section>
   
  )
}
