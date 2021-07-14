import React from 'react'

export const CategoryList = (props) => {
  const { categories } = props
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
  )
}