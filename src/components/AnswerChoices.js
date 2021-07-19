import React, { useMemo, useState } from 'react'
import _ from 'lodash'

export const AnswerChoices = ({ answers, setScore, score, checkAnswer, commitAnswer }) => {
  const { correctAnswer, incorrectAnswers } = answers
  const [correct, setCorrect] = useState(false)
  let [answered, setAnswered] = useState(0)
  const shuffledAnswers = useMemo(
    () => _.shuffle([correctAnswer, ...incorrectAnswers]),
    [correctAnswer, incorrectAnswers]
  )
  const handleClick = (answer) => {
    console.log('Selected answer:', answer)
    setAnswered(answered += 1)
    if (correctAnswer === answer) {
      console.log('You answered ', correct)
      setCorrect(true)
      setScore(score += 1)
    }
    setAnswered(false)
  }
  return shuffledAnswers.map((item) => {
    return (
      <button key={item} className='button is-warning' onClick={() => { handleClick(item) }}>
        {item}
      </button>
    )
  })
}
