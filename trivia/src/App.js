import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
      .then(res => setCategories(res.data.trivia_categories))
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
