import React from 'react'

export const SimpleForm = () => {
  return (
    <>
      <hr/>
        <h2 className='text-center'>SimpleForm</h2>
        
        <div className="row">
            <label for="inputPassword5" className='form-label mt-2'>Username</label>
          <div className="col-lg-5 col-sm-12">
            <input type="email" placeholder='Ingresa tu username' className="form-control" /> 
          </div>

          <label for="inputPassword5" className='form-label mt-2'>Email</label>
          <div className="col-lg-5 col-sm-12">
            <input type="email" placeholder='example@example.com' className="form-control" /> 
          </div>
        </div>
        
      <hr/>     

    </>
  )

}