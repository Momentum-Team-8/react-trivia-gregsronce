import React, { useEffect, useState } from 'react'
import { getCategoryData } from '../api'
import he from 'he'
import { AnswerChoices } from './AnswerChoices'

export const CategoryData = (props) => {
  const [categoryData, setCategoryData] = useState({})
  const [loading, setLoading] = useState(true)
  const [answered, setAnswered] = useState(false)
  const [correct, setCorrect] = useState(false)
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
  const commitAnswer = () => {
    if (correct) {
      console.log('You answered ', correct)
      console.log(answered)
    }
    setAnswered(false)
  }

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
                <p><strong>{he.decode(data.question)}</strong></p>
                <section key={data.question}>
                  <AnswerChoices
                    answers={{ correctAnswer: he.escape(data.correct_answer), incorrectAnswers: data.incorrect_answers }}
                    checkAnswer={setCorrect}
                    setAnswered={setAnswered}
                    commitAnswer={commitAnswer}
                  />
                </section>
              </div>
            )
          })}
        </div>
      </>
      )
}
