"use client"
import NavbarComponent from '@/components/navbar/navbar';
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  return <NavbarComponent pathname={pathname}/>
}

export default Navbar