
import React from 'react'
export default function Services(){
  const list = [
    {title:'AI Chatbots',desc:'Lead capture & qualification'},
    {title:'Workflow Automation',desc:'Save hours with automations'},
    {title:'AI Content Systems',desc:'SEO-friendly content pipelines'}
  ]
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {list.map((s,i)=>(
          <div key={i} className="p-4 border rounded">
            <h3 className="font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
