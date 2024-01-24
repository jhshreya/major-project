import React from 'react'
import InputField from '../Components/InputField'

const EmploymentType = ({handleChange}) => {
  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Employment Type</h4>
    <div>
        <label className='sidebar-label-container'>
            <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
            <span className='checkmark'></span>All time
        </label>

        <InputField handleChange={handleChange} value="full-time" title="Full-Time" name="test"/>
        <InputField handleChange={handleChange} value="temporary" title="Temporary" name="test"/>
        <InputField handleChange={handleChange} value="part-time" title="Part-Time" name="test"/>
    
    </div>
    </div>
  )
}

export default EmploymentType
