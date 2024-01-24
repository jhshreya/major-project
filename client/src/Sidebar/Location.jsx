import React from 'react'
import InputField from '../Components/InputField'

const Location = ({handleChange}) => {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'> Location </h4>
        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange}/>
                <span className='checkmark'></span>All
            </label>

            <InputField handleChange={handleChange} value="Chennai" title="Chennai" name="test"/>
            <InputField handleChange={handleChange} value="Delhi" title="Delhi" name="test"/>
            <InputField handleChange={handleChange} value="Benguluru" title="Benguluru" name="test"/>
            <InputField handleChange={handleChange} value="Pune" title="Pune" name="test"/>
            <InputField handleChange={handleChange} value="Noida" title="Noida" name="test"/>
            <InputField handleChange={handleChange} value="Hyderabad" title="Hyderabad" name="test"/>
        </div>
    </div>
  )
}

export default Location