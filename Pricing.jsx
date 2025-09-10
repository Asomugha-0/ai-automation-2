
import React from 'react'
export default function Pricing(){
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold">Pricing</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Starter</h3>
          <p className="text-lg">$999 setup</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Growth</h3>
          <p className="text-lg">$1500 / month</p>
        </div>
        <div className="p-6 border rounded">
          <h3 className="font-semibold">Premium</h3>
          <p className="text-lg">$3000 / month</p>
        </div>
      </div>
    </div>
  )
}
