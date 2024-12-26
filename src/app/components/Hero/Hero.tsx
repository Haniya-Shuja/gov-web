



import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12 p-8 bg-gray-100">
      
      {/* Text Section */}
      <div className='ml-20 text-center lg:text-left'>
        <h1 className='text-blue-900 text-6xl font-bold mb-4'>
          Governor Sindh
        </h1>
        <h2 className='text-blue-900 text-3xl font-semibold mb-2'>
          Kamran Khan Tessori
        </h2>
        <h3 className="text-4xl text-blue-400 font-bold  items-center mb-4">
          Certified Cloud Applied Generative 
          <br/>AI Engineer (GenEng)
        </h3>
        <p className="text-2xl mb-1 font-bold text-blue-800">Earn up to $5000/month</p><br/>
        <p className="text-2xl mb-6 font-bold text-blue-800">Now admissions are open in <br/>Hyderabad</p>

        {/* Button with Interactive Hover */}
        <button className="bg-blue-800 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          APPLY NOW
        </button> 
        
        <p className="mt-4 text-blue-400"><span className="text-4xl text-blue-900 font-bold  items-center mb-4">562,143</span>
        <br/>Accepted Applicant</p>
      </div>

      {/* Image Section */}
      <div className='ml-15'>
        <Image 
          src='/image/back1.jpg.png'
          alt='Governor Sindh Background' 
          width={800} 
          height={600} 
          className="rounded-lg shadow-lg"
        />
      </div>
    
    </div>
    
   
  )
}

export default Hero
