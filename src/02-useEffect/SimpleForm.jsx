import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ({target}) =>{
    const {name, value} = target;
    // console.log({name, value});

    setFormState({
        ...formState,
        [ name ]: value
    });
    
  }

  // useEffect( () => {
  //   console.log('UseEffect Called!');
  // },[]);
  
  // useEffect( () => {
  //   console.log('username changed!');
  // },[ username ]);
  
  // useEffect( () => {
  //   console.log('email changed!');
  // },[ email ]);  

  return (
    <>
      <hr />
      <h2 className="text-center">SimpleForm</h2>

      <div className="row">
        <label className="form-label mt-2">
          Username
        </label>
        <div className="col-lg-5 col-sm-12">
          <input
            type="email"
            placeholder="Ingresa tu username"
            className="form-control"
            name="username"
            value={username}
            onChange={onInputChange}
          />
        </div>

        <label className="form-label mt-2">
          Email
        </label>
        <div className="col-lg-5 col-sm-12">
          <input
            type="email"
            placeholder="example@example.com"
            className="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          
          {
            ( username === 'Manuhssj' ) && <Message/> 
          }


        </div>
      </div>

      <hr />
    </>
  );
};