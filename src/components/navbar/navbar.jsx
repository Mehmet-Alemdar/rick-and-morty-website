import React from 'react'
import LogoIcon from '@/components/icons/logo'
import Link from 'next/link'

const Navbar = ({ pathname }) => {
  return (
    <div className={`${pathname === "/" ? null : "fixed"} top-0 left-0 right-0 px-[27px] flex justify-between items-center py-2.5 h-[60px] bg-white z-50 ${pathname === "/docs" ? "border-b-[1px] border-['#e5e7eb']" : null}`}>
      <Link href={"/"}>
        <LogoIcon color={"#333"} />
      </Link>
      <div className='flex items-center gap-9 text-primary-black font-semibold text-lg font-sans'>
        <Link href={"/docs"} className='hover:text-primary-orange transition-all duration-150'>Docs</Link>
        <Link href={"/"} className='hover:text-primary-orange transition-all duration-150'>About</Link>
        <Link href={"/"} className='px-[18px] py-[9px] text-sm uppercase flex items-center font-medium border border-primary-orange rounded-lg bg-transparent hover:bg-primary-orange hover:text-white transition-all duration-150'>Support Us</Link>
      </div>
    </div>
  )
}

export default Navbar