import React from 'react'
import './FormInput.scss'

const FormInput = (props) => {
    const {onChange, id, ...inputProps} = props;
  return (
    <div className='formInput'>
        <input {...inputProps}  onChange={onChange}/>  
    </div>
  )
}

export default FormInput