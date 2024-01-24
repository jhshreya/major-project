import React ,{useState} from 'react'
import {FiMapPin, FiSearch} from "react-icons/fi"


const Banner = ({query,handleInputChange}) => {

  return (
    <div className='max-w-screen-2xl mx-auto xl:px-24 px-4 bg-[#10101E] md:py-20 py-14'>
        <h1 className='text-5xl font-bold text-white mb-3'>BEST WORK AWAITS, <span className='text-[#ADFF00]'>START THE SEARCH</span></h1>
        <p className='font-bold text-white mb-8' >Get a project that suits you...</p>

        <form>
            <div className='flex justify-start md:flex-row flex col md:gap-0 gap 4'>
                <div className='flex md:rounded-s-md rounded shadow-sm ring 1 ring-inset ring-white
                focus-within:ring 2 focus-within:ring-inset focus-within:ring-indigo-600 w-full'> 
                    <input type='text' name='title' id='title' placeholder='what project are you looking for' className='block flex-1 border border-0 bg-transparent py-1.5 pl-8 text-white
                    placeholder:text-white focus:right-0 sm:text-sm sm:leading-6'
                    onChange = {handleInputChange}
                    value = {query} />
                    <FiSearch className='absolute mt-2.5 ml-2 text-white'/>
                </div>
                {/*<div className='flex md:rounded-s-none rounded shadow-sm ring 1 ring-inset ring-gray-300
                focus-within:ring 2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full'> 
                    <input type='text' name='title' id='title' placeholder='Search your location' className='block flex-1 border border-0 bg-transparent py-1.5 pl-8 text-grey-900
                    placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6'
                     />
                    <FiMapPin className='absolute mt-2.5 ml-2 text-gray-400'/>
  </div>*/}
                <button type="submit"className='bg-[#ADFF00] py-2 px-8 text-black md:rounded -s-none rounded'>Search</button>
            </div>
        </form>
        </div>
        
  )
}

export default Banner