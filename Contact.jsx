
import React from 'react'
export default function Contact(){
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Contact</h2>
      <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="mt-6 space-y-4">
        <input name="name" placeholder="Your name" className="w-full p-2 border rounded" required />
        <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="How can we help?" className="w-full p-2 border rounded" rows="5" />
        <button className="btn-primary px-4 py-2 rounded">Send</button>
      </form>
    </div>
  )
}
