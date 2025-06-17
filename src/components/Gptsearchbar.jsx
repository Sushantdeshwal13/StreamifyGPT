import React from 'react'

const Gptsearchbar = () => {
  return (
    <div className='pt-24 px-4 flex justify-center'>
      <form className="w-full mt-16 max-w-2xl bg-black/80 rounded-lg p-4 flex flex-col sm:flex-row gap-4 shadow-lg">
        <input
          type="text"
          className='flex-1 px-4 py-2 rounded-md text-black cursor-pointer'
          placeholder='What would you like to watch today?'
        />
        <button
          className='bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition cursor-pointer'
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Gptsearchbar
