import React from 'react'

export const Welcome = () => {
  return (
    <div className='container'>
        <h1 className=''>KinAnalitics Test Formulary</h1>
        <hr/>
        <label className='form-label'>Inyector A:</label>
        <input className='form-control' type={'text'} pattern="[0-9]{1,3}" required/>
        <hr/>
    </div>
  )
}
