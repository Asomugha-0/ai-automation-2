
import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Nova Automations</h4>
          <p className="text-sm text-gray-600">AI chatbots, workflows and funnels that convert.</p>
        </div>
        <div>
          <h4 className="font-semibold">Links</h4>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Services</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Contact</h4>
          <p className="text-sm">hello@novaautomation.com</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4">© {new Date().getFullYear()} Nova Automations</div>
    </footer>
  )
}
