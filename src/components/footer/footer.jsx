import React from 'react'
import StatusDot from '../status-dot/statusDot'
import Netlify from '@/components/icons/netlify'
import Stellate from '@/components/icons/stellate'
import Github from '@/components/icons/github'
import X from '@/components/icons/x'
import Heart from '@/components/icons/heart'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-[#212328] w-full mt-auto py-[81px] flex flex-col items-center gap-8'>
      <div className='flex flex-col items-center sm:gap-2 gap-5'>
        <div className='flex  sm:flex-row flex-col flex-wrap justify-center gap-5'>
          <p className='text-sm uppercase font-semibold text-[#9e9e9e]'>Characters: 826</p>
          <p className='text-sm uppercase font-semibold text-[#9e9e9e]'>Locations: 126</p>
          <p className='text-sm uppercase font-semibold text-[#9e9e9e]'>Episodes: 51</p>
        </div>
        <div className='flex gap-2 items-center'>
          <p className='text-sm uppercase font-semibold text-[#9e9e9e]'>Server Status</p>
          <StatusDot status='Alive' />
        </div>
      </div>
      <div className='flex sm:flex-row flex-col gap-6 items-center'>
        <Netlify />
        <Stellate />
      </div>
      <div className='flex gap-6 items-center'>
        <Github />
        <X />
        <Heart />
      </div>
      <div className='flex space-x-2'>
        <span className='text-[#9e9e9e] text-sm'>❮❯ by </span>
        <span className='underline text-sm underline-offset-4 text-white decoration-primary-orange hover:no-underline hover:text-primary-orange transition-all duration-150'>
          <a href='https://github.com/Mehmet-Alemdar' target='_blank'>Mehmet Alemdar</a>
        </span>
        <span className='text-[#9e9e9e] text-sm'> {currentYear}</span>
      </div>
    </div>
  )
}

export default Footer