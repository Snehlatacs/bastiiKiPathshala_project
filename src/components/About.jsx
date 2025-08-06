import React from 'react'

export default function About(){
  return (
    <section id="about">
      <div className="flex flex-col px-4 mx-auto gap-6 items-center">
        <div className=' bg-gradient-to-r from-cyan-700 to-teal-600 text-black py-12 rounded-br-full rounded-tl-full'>
          <h2 className="text-3xl mb-3 text-center pb-2 font-bold animate-name">About Us</h2>
          <p className="text-black mb-3 font-semibold px-10">Basti Ki Pathshala is a community-driven NGO focused on providing sustainable education, healthcare and vocational training in rural areas. We work with local partners to design programs that respect local culture and promote long-term wellbeing.</p>
          <ul className="text-black list-disc ml-5 font-black px-10">
            <li>Founded: 2015</li>
            <li>Focus: Education • Health • Livelihood</li>
            <li>Areas: Rajasthan, Uttar Pradesh, Bihar</li>
          </ul>
        </div>
        <div className="overflow-hidden shadow rounded-3xl">
          <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 bg-cover"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mPjl6MmKXX2uGk4LQHnTeXh8rs7dAhInDA&s" alt="img" /> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5AQ15ahOk5Xb4NnXWNe-An4tkJBrjK7KOQ&s" alt="" /></div>
        </div>
      </div>
    </section>
  )
}
