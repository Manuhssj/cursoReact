import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/index.js";

export const FormWithCustomHook = () => {
  
  const {formState, onInputChange, username, email, password,onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  });
  
  useEffect( () => {
    console.log('username changed!');
  },[ username ]);
  
  useEffect( () => {
    console.log('email changed!');
  },[ email ]);  

  return (
    <>
      <hr />
      <h2 className="text-center">Formulario con custom Hook</h2>

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
          <label className="form-label mt-2">
          Password
        </label>
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          

        </div>
        <button onClick={onResetForm} className="btn btn-danger mt-2 col-sm-2 col-lg-12 mx-2">Reset</button>
      </div>

      <hr />
    </>
  );
};