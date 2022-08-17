import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  }


  return (
    <>

      <h1>GifExpertApp</h1>


      <AddCategory
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category} />
        ))
      }




    </>
  )
}






// import React from 'react'
// import { useState } from 'react';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

// export const GifExpertApp = () => {

//   const [categories, setCategories] = useState(['One Punch']);
//   const onAddCategory = (newCategory) => {

//     if (categories.includes(newCategory)) return;

//     //setCategories(cat => ['Ricky and Morty', ...cat,])
//     setCategories([newCategory, ...categories,])
//   }
//   return (
//     <>
//       {/* titulo */}
//       <h1>GifExpertApp</h1>

//       {/* input */}
//       <AddCategory
//         onNewCategory={onAddCategory}
//       //setCategories={setCategories}
//       />
//       {/* listado */}
//       {/* <button onClick={addCategory}>Agregar</button> */}

//       {categories.map(category => (
//         <GifGrid key={category} category={category} />
//       ))}

//     </>
//   )
// }
