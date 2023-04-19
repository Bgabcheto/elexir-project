import React from 'react'
import FormInput from '../../components/FormInput/FormInput'
import { useState } from 'react'

const AppFormInput = () => {
    const [values,setValue] = useState({
        name: "",
        email: "",
        subject: ""
      })
      const inputs = [
        {
          id: 1,
          name: 'name',
          type: 'text',
          placeholder: 'Name'
        },
        {
          id: 2,
          name: 'email',
          type: 'text',
          placeholder: 'Email'
        },
        {
          id: 3,
          name: 'subject',
          type: 'text',
          placeholder: 'Subject'
        }
      ]
      const handelSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
      }
    
      const onChange = (e) => {
        setValue ({...values, [e.target.name]: e.target.value});
      };
      console.log(values)
  return (
    <div className='formIn'>
    <form onSubmit={handelSubmit}>
      {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
      ))}
     <textarea placeholder='Message' rows={6} cols={26} value={values.message}  onChange={(e) => setValue({...values, message: e.target.value})}></textarea>
      <button>Submit</button>
    </form>
    </div>
  )
}

export default AppFormInput