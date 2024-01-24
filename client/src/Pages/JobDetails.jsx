import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react';
import {useForm} from 'react-hook-form'
import CreatableSelect from 'react-select/creatable'

const JobDetails = () => {
    const id =useParams();
   const [job,setJob] =useState([]);
  useEffect(()=>{
     fetch(`http://localhost:3000/all-jobs/${id}`,{
        method:"Post",
        headers:{'Content-type' : 'application/json'},
        body:JSON.stringify(data)}).then(res =>res.json()).then(data => setJob(data))
    
   console.log(id)
})









  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-[#09005D]'>
    <div className=' py-10 px-4 lg:px-16 border-2 border-white'>
    <form onSubmit={handleSubmit(onSubmit)}>
      /*firstrow
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>First Name
         <input type="text" defaultValue={"abc"} 
         {...register("firstName")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
    
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Last Name
         <input type="text" defaultValue={"xyz"} 
         {...register("jobTitle")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      
      /*second row 

      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
      <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Gender
         <select
         {...register("gender")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6">
         <option value="">Choose your gender</option>
         <option value="male">Male</option>
         <option value="female">Female</option>
         <option value="transgender">Transgender</option>
         <option value="none">none</option>
         </select>
         </div>
        </div>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Date of Birth
         <input type="date" placeholder='Ex:03-01-2006'
         {...register("dateOfBirth")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
        
      </div>
    
    /*third row
    <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
    <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Highest Qualification
         <select
         {...register("highestQualification")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6">
         <option value="">Choose your gender</option>
         <option value="male">High school</option>
         <option value="female">Graduation</option>
         <option value="transgender">Masters</option>
         </select>
         </div>
        </div>
        
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Required Skills Set
         <CreatableSelect defaultValue={selectedOption} onChange={(selectedOption) => setSelectedOption(selectedOption)} options={options}
         isMulti className="block w-full flex-1 border-1 py-1 pl-3 text-black placeholder:text-black 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
    
        
      </div>
      //fourth row<div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Upload Your Resume
         <input type="file" 
         {...register("resume")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
    
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Github Id
         <input type="link" placeholder='Provide link of your Github Id' 
         {...register("githubId")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      
      <input type="submit" className='block mt-8 bg-[#ADFF00] text-BLACK  mx-auto font-semibold py-2 px-8 rounded-sm cursor-pointer' />
      </form>
      </div>
      </div>
  )
}

export default JobDetails