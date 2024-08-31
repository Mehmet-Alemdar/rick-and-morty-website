import React from 'react'
import { AiFillHeart } from "react-icons/ai";

const LikeModal = ({name, message}) => {
  return (
    <div className='flex flex-col justify-center items-center ga-3 sm:text-xl text-sm uppercase'>
      <div>
        you <strong className='text-primary-orange'>{message}</strong>, <strong className='text-primary-orange'>{name}</strong>!
      </div>
      <p className='text-primary-orange'>
        <AiFillHeart />
      </p>
    </div>
  )
}

export default LikeModal