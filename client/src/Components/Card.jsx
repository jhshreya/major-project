import React from 'react'
import Swal from 'sweetalert2'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
  const{_id,companyName,jobTitle,companyLogo,minPrice,maxPrice,salaryType,jobLocation,postingDate,description,employmentType} =data;
 const handleApply= async()=>
 {
  const { value: formValues } = await Swal.fire({
    title: "Multiple inputs",
    html: `
      <input id="swal-input1" class="swal2-input">
      <input id="swal-input2" class="swal2-input">
    `,
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById("swal-input1").value,
        document.getElementById("swal-input2").value
      ];
    }
  });
  if (formValues) {
    Swal.fire(JSON.stringify(formValues));
  }
 }

  return (
    <section className='card bg-[#10101E] text-white h-50'>
      <Link to={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt=""/>
        <div className='col-span-3'>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-lg font-semibold mb-2'>{jobTitle}</h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-2 mb-2'>
           { /* <span className='flex items-center gap-2'><FiMapPin/>{jobLocation}</span>
            <span className='flex items-center gap-2'><FiClock/>{employmentType}</span>*/}
            <span className='flex items-center gap-2'><FiDollarSign/>{minPrice}k-{maxPrice}k</span>
            <span className='flex items-center gap-2'><FiCalendar/>{postingDate}</span>
            <div>
            <p className='text-base text-primary/70'>{description}</p>

              <div> <button Onclick={handleApply} className='bg-white py-2 px-8 text-black md:rounded -s-none rounded'>Search</button></div>
              </div>
          
            

          </div>
        </div>
      </Link>
    </section>
  )
}

export default Card