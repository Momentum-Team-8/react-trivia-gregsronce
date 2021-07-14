import React, { useState, useEffect } from 'react';
import './App.css';

import { getCategoriesList } from './api'

function App () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategoriesList().then((categories) => setCategories(categories))
  }, [])
  return (
    <main className='title'>
      <h1>Trivia Game</h1>
      <h2>Categories</h2>
      <div className='container'>
        {categories.map(category => {
          return (
            <div key={category.id}>
              <p>{category.name}</p>
            </div>
          )
        })}
      </div>
    </main>
  );
}

export default App;
