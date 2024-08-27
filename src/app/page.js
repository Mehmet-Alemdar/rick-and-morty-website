import React from 'react'
import Hero from '@/components/icons/hero'
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-0'>
      <div className='min-h-[400px] relative flex items-center'>
        <h1 className='relative z-10 text-8xl font-black text-primary-black'>The Rick And Morty API</h1>
        <div className='absolute inset-0 flex items-center justify-center z-0'>
          <Hero />
        </div>
      </div>
      <div className='flex-1 bg-[#272b33] w-full'>
        heyo
      </div>
    </div>
  )
}

export default page