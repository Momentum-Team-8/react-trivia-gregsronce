import React, { useMemo } from 'react'
import _ from 'lodash'

export const AnswerChoices = ({ answers, setAnswered, checkAnswer, commitAnswer }) => {
  const { correctAnswer, incorrectAnswers } = answers
  const shuffledAnswers = useMemo(
    () => _.shuffle([correctAnswer, ...incorrectAnswers]),
    [correctAnswer, incorrectAnswers]
  )
  const handleClick = (answer) => {
    setAnswered(true)
    checkAnswer(correctAnswer === answer)
    commitAnswer()
  }
  return shuffledAnswers.map((item) => {
    return (
      <button key={item} className='button is-warning' onClick={() => { handleClick(item) }}>
        {item}
      </button>
    )
  })
}
