import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../api'
import he from 'he'
import { AnswerChoices } from './AnswerChoices'

export const CategoryData = (props) => {
  const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true)
  const [score, setScore] = useState(0)
  const { selectedCategory, setSelectedCategory } = props

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
          <button className='button is-primary' onClick={() => setSelectedCategory(null)}>Back to Category List</button>
        </div>
        <h1>{score}</h1>
        <div className='questions'>
          {categoryData.map((data) => {
            return (
              <div key={data.question}>
                <p><strong>{he.decode(data.question)}</strong></p>
                <section key={data.question}>
                  <AnswerChoices
                    answers={{ correctAnswer: he.decode(data.correct_answer), incorrectAnswers: data.incorrect_answers }}
                    setScore={setScore}
                    score={score}
                  />
                </section>
              </div>
            )
          })}
        </div>
      </>
      )
}
