import React from 'react'

const CharacterCardSkeleton = () => {
  return (
    <div className='flex flex-col sm:flex-row bg-[#3c3e44] sm:w-[600px] w-[85%] h-auto sm:h-[210px] rounded-lg overflow-hidden shadow-lg animate-pulse'>
      <div className='h-[300px] sm:h-full bg-gray-700'>
        <div className='object-cover h-full w-full sm:w-[220px] bg-gray-600'></div>
      </div>
      <div className='flex flex-col justify-around ml-0 sm:ml-4 p-4 sm:p-0 gap-5 w-full'>
        <div>
          <div className='h-6 bg-gray-600 rounded w-1/2 mb-2'></div>
          <div className='flex items-center gap-4'>
            <div className='h-3 w-3 rounded-full bg-gray-600'></div>
            <div className='h-4 bg-gray-600 rounded w-1/2'></div>
          </div>
        </div>
        <div>
          <div className='h-4 bg-gray-600 rounded w-1/2 mb-1'></div>
          <div className='h-4 bg-gray-600 rounded w-3/4'></div>
        </div>
        <div>
          <div className='h-4 bg-gray-600 rounded w-1/2 mb-1'></div>
          <div className='h-4 bg-gray-600 rounded w-3/4'></div>
        </div>
      </div>
    </div>
  )
}

export default CharacterCardSkeleton