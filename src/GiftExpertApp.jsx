import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { AddCategory,GifGrid } from './components/';


export function GiftExpertApp() {

  const [categories, setCategories] = useState(['Buscador de gif']);

  const onAddCategorie = ( newCategory ) => {
 
    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory] )

  }
  return (
    <>
        <div className="text-center mt-5">

          <AddCategory onNewCategory={ (value) => onAddCategorie(value) }/>
          
          <div className="mt-4">
      
            { 
              categories.map( ( category ) => (
                  <GifGrid key={ category } category={ category }/>
              ))

            }
          </div>
        </div>
      
    </>
  );
}
