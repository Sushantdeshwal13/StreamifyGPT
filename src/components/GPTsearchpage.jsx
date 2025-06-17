import React from 'react'
import Gptsearchbar from './Gptsearchbar'
import Gptmoviesuggestion from './Gptmoviesuggestion'

const GPTsearch = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className='absolute inset-0 -z-10'>
        <img 
          src="/image2.png"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground Content */}
      <Gptsearchbar />
      <Gptmoviesuggestion />
    </div>
  )
}

export default GPTsearch
