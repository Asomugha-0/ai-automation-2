
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Nova" className="h-10 w-10" />
          <div>
            <h1 className="font-bold text-lg">Nova Automations</h1>
            <div className="text-xs text-gray-500">Revenue-focused AI systems</div>
          </div>
        </div>
        <div className="space-x-4 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/pricing" className="hover:underline">Pricing</Link>
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/contact" className="border px-3 py-1 rounded btn-primary">Book a Call</Link>
        </div>
      </div>
    </nav>
  )
}
