import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../api'

export const CategoryData = (props) => {
  const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true)
  const { selectedCategory } = props
  const refreshPage = () => {
    window.location.reload()
  }

  useEffect(() => {
    getCategoryData(selectedCategory).then(data => {
      setCategoryData(data)
      setLoading(false)
    })
  }, [selectedCategory])

  return loading
    ? 'Category data is loading'
    : (
      <>
        <div className='category-header'>
          <p className='title hero is-info'>{selectedCategory.name}</p>
          <button className='button is-primary' onClick={refreshPage}>Back to Category List</button>
        </div>
        <div className='questions'>
          {categoryData.map((data) => {
            return (
              <div key={data.question}>
                <p><strong>{data.question}</strong></p>
                <ul>
                  <li>{data.correct_answer}</li>
                  <li className='incorrect-answers'> {data.incorrect_answers[0]}</li>
                  {data.incorrect_answers &&
                    <li className='incorrect-answers'> {data.incorrect_answers[1]}</li>
                  }
                  {data.incorrect_answers &&
                    <li className='incorrect-answers'> {data.incorrect_answers[2]}</li>
                  }
                </ul>
              </div>
            )
          })}
        </div>
      </>
      )
}