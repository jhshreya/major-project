import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark} from "react-icons/fa6";



const Navbar = () => {

    const[isMenuOpen,setisMenuOpen] =useState(false);
    const handleMenuToggler = () =>{
        setisMenuOpen(!isMenuOpen)
    };

    const navItems=[
        {
            path :"/",
            title :"Start a Search"
        },
        {
            path :"/post-job",
            title :"Post Your Project"
        },
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto bg-[#10101E] xl:px-24 px 4'>
        <nav className='flex justify-between items-center py-6'>
            <a href ="/" className='flex items-center gap-2 text-2xl text-white'>Find Your <span className='text-[#ADFF00]'>Project</span></a>
            <ul className='hidden md:flex gap-12'>
                {
                    navItems.map(({path,title}) =>(
                        <li key ={path} className='text-base text-white'><NavLink
                        to={path}
                        className={({ isActive}) => isActive ? "active" : ""
                        }
                      >
                    {title}
                      </NavLink></li>
                    ))
                }
            </ul>
            {/*mobile menu */}
            <div className='md:hidden block'>
                <button onClick={handleMenuToggler}>
                    {
                     isMenuOpen? <FaXmark className='w-5 h-5 text-white'/> :<FaBarsStaggered className='w-5 h-5 text-white'/>
                    }
                    </button>
            </div>
        </nav>
        {/*FOR MOBILE */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" :"hidden"}`}>
            <ul>
            {
                    navItems.map(({path,title}) =>(
                        <li key ={path} className='text-base text-white first:text-white py-1'><NavLink
                        to={path}
                        className={({ isActive}) => isActive ? "active" : ""
                        }
                      >
                    {title}
                      </NavLink></li>
                    ))
                }

            </ul>
        </div>
    </header>
  )
}

export default Navbar
