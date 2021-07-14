import React from 'react'

export const CategoryList = (props) => {
  const { categories, setSelectedCategory } = props
  return (
    <main className='main'>
      <div className='header'>
        <h1 className='title'>Trivia Game</h1>
        <h2 className='subtitle'>Select a Category</h2>
      </div>
      <div className='container'>
        {categories.map(category => {
          return (
            <div key={category.id} className='category-button'>
              <p>{category.name}</p>
              <button className='button' onClick={() => setSelectedCategory(category)}>Select Category</button>
            </div>
          )
        })}
      </div>
    </main>
  )
}

