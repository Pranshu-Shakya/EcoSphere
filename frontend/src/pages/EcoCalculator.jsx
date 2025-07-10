import React from 'react'

function EcoCalculator() {
  return (
    <div className = "eco-static-bg flex justify-center items-center p-4">
      <iframe 
       className="w-full max-w-4xl h-[1300px] border-0 text-white"
        src="https://calculator.carbonfootprint.com/calculator.aspx"
        scrolling="no"
        title="Carbon Footprint Calculator"

         ></iframe>
    </div>
  )
}

export default EcoCalculator
