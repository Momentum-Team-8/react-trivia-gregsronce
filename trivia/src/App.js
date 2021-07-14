import React, { useState, useEffect } from 'react';
import './App.css';

import { getCategoriesList } from './api'
import { CategoryList } from './components/CategoryList'

function App () {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategoriesList().then((categories) => setCategories(categories))
  }, [])
  return (
    <CategoryList
      categories={categories}
    />
  );
}

export default App;
