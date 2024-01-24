import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from 'react-select/creatable'

const CreateJobs = () => {
  const [selectedOption, setSelectedOption] =useState(null);
  const {
    register,
    handleSubmit,reset,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    //console.log(data);
    data.skill = selectedOption;
  fetch("http://localhost:3000/post-job ",{
    method:"Post",
    headers:{'Content-type' : 'application/json'},
    body:JSON.stringify(data)
  }).then(res =>res.json()).then((result) => {
    console.log(result);
    if(result.acknowledged === true){
      alert("Submitted Successfully!!!")
    }
    reset()
  });
};

  const options = [
    {value:"Javascript", label:"Javascript"},
    {value:"React", label:"React"},
    {value:"Redux", label:"Redux"},
    {value:"Mongo-db", label:"Mongo-db"},
    {value:"Node", label:"Node"},
    {value:"Express.js", label:"Express.js"},
    {value:"python", label:"python"},
    {value:"machine learning", label:"Machine learning"},
    {value:"Solidity", label:"Solidity"},
    {value:"Ether.js", label:"Ether.js"},
    {value:"Figma", label:"Figma"},
  ]



  return (
  
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-[#10101E]'>
      <div className='text-5xl font-bold text-white lg:w-3/4 mb-6'>
      UPLOAD  YOUR   PROJECT <span className='text-[#ADFF00]'>HERE</span>
  </div>
    <div className=' bg-[#10101E] py-10 px-4 lg:px-16 border-4 border-[#ADFF00]'> 

    <form onSubmit={handleSubmit(onSubmit)}>
      
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Service Role
         <input type="text" defaultValue={"Web Developer"} 
         {...register("jobTitle")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Minimum Pay
         <input type="text" placeholder='$20k'
         {...register("minPrice")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-black 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Maximum Pay
         <input type="text" placeholder='$120k'
         {...register("maxPrice")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-black
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      
    
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Experience level
         <select
         {...register("experienceLevel")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6">
         <option value="">Choose your experience</option>
         <option value="NoExperience">Hourly</option>
         <option value="Internship">Internship</option>
         <option value="Yearly">Work remotedly</option>
         </select>
         </div>
        </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Posting Date
         <input type="date" placeholder='Ex:03-01-2024'
         {...register("postingDate")} className="block w-full flex-1 border-1 bg-blue py-1 pl-3 text-gray-900 placeholder:text-gray-400 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='lg:w-1/2 w-full'>
         <div className='block mb-20 text-lg gap-8 text-white '>Required Skills Set
         <CreatableSelect defaultValue={selectedOption} onChange={selectedOption} options={options}
         isMulti className="block w-full flex-1 border-1 py-1 pl-3 text-black placeholder:text-black 
         focus:outline-none sm:text-sm sm:leadimg-6"/>
         </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
        <div className='w-full'>
         <div className='block mb-20 text-lg gap-8 text-white'>Project Description
         <textarea className='w-full pl-3 py-1.5 focus:outline-none text-black ' rows={6} defaultValue={"Write down the project description" }
         placeholder='project description'
         {...register("description")}></textarea>
         </div>
        </div>
      </div>

      <input type="submit" className='block mt-8 bg-[#ADFF00] text-BLACK font-semibold py-2 px-8 rounded-sm cursor-pointer' />
    </form>
    </div>
    </div>
  );
};

export default CreateJobs