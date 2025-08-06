import React, {useState} from 'react'

export default function VolunteerForm(){
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    const payload = Object.fromEntries(data.entries())
    // Fake submit: in real app send to API
    setStatus({type:'success', msg: `Thanks ${payload.name}! We'll contact you at ${payload.email}.`})
    e.target.reset()
    console.log('Volunteer submission:', payload)
  }

  return (
    <section id="volunteer" className="m-9 p-12  bg-gradient-to-r from-cyan-700 to-teal-600 text-black rounded-3xl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Volunteer Signup</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="bg-slate-300 p-6 rounded-3xl shadow">
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input name="name" required className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" name="email" required className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Phone (optional)</label>
              <input name="phone" className="w-full border px-3 py-2 rounded" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">City / State</label>
              <input name="location" required className="w-full border px-3 py-2 rounded" placeholder="Jaipur, Rajasthan" />
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Skills & Interests</label>
              <select name="skills" required className="w-full border px-3 py-2 rounded">
                <option value="">Choose...</option>
                <option>Teaching / Tutoring</option>
                <option>Healthcare</option>
                <option>Fundraising</option>
                <option>Design / Web</option>
                <option>Event Support</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Why you'd like to volunteer</label>
              <textarea name="message" required className="w-full border px-3 py-2 rounded" rows="4"></textarea>
            </div>
            <button type="submit" className="bg-gradient-to-r from-cyan-700 to-teal-600 text-black px-4 py-2 rounded">Submit</button>
            {status && <div className={`mt-3 p-3 rounded ${status.type==='success'?'bg-green-100 text-green-800':'bg-red-100 text-red-800'}`}>{status.msg}</div>}
          </form>

          <div className="p-6 rounded-3xl bg-slate-300">
            <h4 className="font-black mb-2 text-center text-xl">How volunteering helps</h4>
            <p className="text-justify text-lg p-4 font-semibold text-gray-900 mb-3 justify-around">Volunteers add time, skills and energy — enabling program reach and quality. We welcome students, professionals and retirees.</p>
            <ul className="p-4 text-lg font-semibold text-gray-900 list-disc ml-5">
              <li>Flexible hours</li>
              <li>Local & remote opportunities</li>
              <li>Certificate of participation</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
