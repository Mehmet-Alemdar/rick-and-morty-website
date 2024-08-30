import React from 'react'
import Pen from '@/components/icons/pen'

const EditThisPage = () => {
  return (
    <div className='flex justify-end border-t-[1px]'>
      <a href='https://github.com/afuh/rick-and-morty-api-site/blob/master/src/pages/about.mdx' target='_blank' className='flex items-center gap-2 p-5 text-primary-black hover:text-primary-orange transition-all duration-150'>
        <Pen />
        <span className='text-sm font-light'>edit this page</span>
      </a>
    </div>
  )
}

export default EditThisPage