import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export function GiftExpertApp() {

  const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);

  const onAddCategorie = ( newCategory ) => {
 
    if( categories.includes(newCategory) ) return;

    setCategories( [newCategory, ...categories] )

  }
  return (
    <>
      <div className="text-center mt-5">
        
        <h2>GiftExpertApp</h2>
        
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
