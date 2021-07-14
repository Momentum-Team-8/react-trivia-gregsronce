import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../api'

export const CategoryData = (props) => {
  const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true)
  const { selectedCategory } = props

  useEffect(() => {
    getCategoryData(selectedCategory).then(data => {
        console.log(data)
      setCategoryData(data)
      setLoading(false)
    })
  }, [selectedCategory])

  return loading
    ? 'Category data is loading'
    : (
      <>
        <div className='header'>
          <button className='button'>Back to Category List</button>
        </div>
        <div className='div'>
          {categoryData.map((data) => {
            return (
              <div key={data.question}>
                <p>{data.question}</p>
              </div>
            )
          })}
        </div>
      </>
      )
}