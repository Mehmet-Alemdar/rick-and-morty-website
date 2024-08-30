import React from 'react'
import EditThisPage from '@/components/edit-this-page/editThisPage'
import Image from 'next/image'

const page = () => {
  return (
    <div className='flex flex-col gap-12 bg-white'>
      <div className="max-w-[960px] mx-auto pt-6 px-6 mt-6 flex flex-col gap-6 items-start justify-start">
        <h1 className="text-4xl font-bold text-primary-black">Support The Rick and Morty API</h1>
        <p className='text-lg font-semibold text-primary-black'>Help to maintain The Rick and Morty API&apos;s infrastructure!</p>
        <p className='text-lg font-light text-primary-black'>If you are using the API for your app, your online tutorials or your coding challenges, please consider supporting us to help keep the project alive.</p>
        <p className='text-lg font-light text-primary-black'>We are not getting any money from this and we use our free time to keep the API running and the data up to date. Every contribution, however big or small, is super valuable for our future.</p>
        <p className='text-lg font-light text-primary-black'>Thanks!</p>
        <div className='flex gap-4'>
          <a href='https://ko-fi.com/axelfuh' target='_blank'>
            <Image src='https://cdn.ko-fi.com/cdn/kofi3.png?v=3' alt='QR Code for donation' width={200} height={200} />
          </a>
          <a href='https://buymeacoffee.com/axelfuh' target='_blank'>
            <Image src='https://cdn.buymeacoffee.com/buttons/v2/default-orange.png' alt='QR Code for donation' width={200} height={200} />
          </a>
        </div>
      </div>
      <EditThisPage />

    </div>
  )
}

export default page