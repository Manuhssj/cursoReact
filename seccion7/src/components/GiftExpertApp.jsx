import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { AddCategory } from './AddCategory';

export function GiftExpertApp() {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategorie = (input) => {
    setCategories([...categories, input]);

  }
  return (
    <>
      <div className="text-center mt-5">
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={ setCategories }/>
        <button className='btn btn-primary mt-2 mb-2 ' onClick={onAddCategorie}>Agregar</button>
          { 
          categories.map( category => {
              return <li key={category}>{category}</li>
            })
          }
      </div>
      
    </>
  );
}
