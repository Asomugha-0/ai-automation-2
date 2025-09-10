
import React from 'react'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <section className="header-hero">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <motion.h1 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} className="text-4xl font-bold">Build AI systems that grow revenue — fast.</motion.h1>
          <motion.p initial={{y:10,opacity:0}} animate={{y:0,opacity:1}} className="mt-4 text-gray-700">We design chatbots, workflows and content systems to capture leads and convert more customers with less effort.</motion.p>
          <div className="mt-6 flex gap-4">
            <a className="btn-primary px-5 py-3 rounded" href="/contact">Book a Call</a>
            <a className="btn-secondary px-5 py-3 rounded" href="/services">Our Services</a>
          </div>
        </div>
        <div className="flex-1">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold">Quick Audit</h3>
            <p className="text-sm text-gray-600 mt-2">Drop your website, we’ll show 3 quick wins you can implement this week.</p>
            <form className="mt-4 space-y-3" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
              <input name="website" placeholder="Your website URL" className="w-full p-2 border rounded" required />
              <input name="email" placeholder="Your email" className="w-full p-2 border rounded" required />
              <button className="btn-primary w-full py-2 rounded">Request Audit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
