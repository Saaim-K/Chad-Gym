import React from 'react'
import ad_web from '../assets/ad_web.webp'
import ad_mobile from '../assets/ad_mobile.webp'
import logo from '../assets/logo.png'
import { FiMenu } from 'react-icons/fi'
import { BiWorld } from 'react-icons/bi'

const Navbar = () => {
   return (
      <>
         {/* ------------------------- Ad ------------------------- */}
         <div className='flex xs:hidden'>
            <img src={ad_mobile} />
         </div>
         <div className='hidden xs:flex'>
            <img src={ad_web} />
         </div>
         {/* ------------------------- Ad ------------------------- */}

         {/* ------------------------- Navbar ------------------------- */}
         <div className="flex items-center bg-[#005599] ">
            <div className='text-white flex items-center'>
               <FiMenu className='w-9 h-9' />
               <BiWorld className='w-9 h-9' />
               <div className="flex items-center">
                  <img src={logo} className='w-20 h-20' />
               </div>
            </div>
         </div>
         {/* ------------------------- Navbar ------------------------- */}
      </>
   )
}

export default Navbar