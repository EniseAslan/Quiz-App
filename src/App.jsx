import { useState, useEffect } from 'react'
import './App.css'
import QuestionCard from './QuestionCard'
import ScoreBoard from './ScoreBoard'
import ProgressBar from './ProgressBar'
import { prepareQuestions } from './utils/shuffle'

const TIME_LIMIT = 10

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [selected, setSelected] = useState(null)
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT)

  const [quizQuestions, setQuizQuestions] = useState(prepareQuestions)

  const current = quizQuestions[currentIndex]

const [highScore, setHighScore] = useState(
  () => Number(localStorage.getItem("quizHighScore")) || 0
)

useEffect(() => {
    if (!finished) return

    if (score > highScore) {
      setHighScore(score)
      localStorage.setItem("quizHighScore", score)
    }
  }, [finished])


  function goNext() {
    if (currentIndex + 1 < quizQuestions.length) {
      setCurrentIndex((i) => i + 1)
    } else {
      setFinished(true)
    }
    setSelected(null)
    setTimeLeft(TIME_LIMIT)
  }

  function handleRestart() {
    setCurrentIndex(0)
    setScore(0)
    setFinished(false)
    setSelected(null)
    setTimeLeft(TIME_LIMIT)
    setQuizQuestions(prepareQuestions())
  }

  const handleAnswer = (option) => {
    if (selected !== null) return

    setSelected(option)

    if (option === current.answer) {
      setScore((p) => p + 1)
    }

    setTimeout(goNext, 1000)
  }

  useEffect(() => {
    if (finished || selected !== null) return

    if (timeLeft === 0) {
      handleAnswer("")
      return
    }

    const id = setTimeout(() => setTimeLeft((t) => t - 1), 1000)
    return () => clearTimeout(id)
  }, [timeLeft, finished, selected])

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Quiz App</h1>

      {!finished && (
        <ProgressBar current={currentIndex + 1} total={quizQuestions.length} />
      )}

      {!finished && (
        <p className={`mb-4 text-lg font-bold ${timeLeft <= 3 ? "text-red-600" : "text-gray-700"}`}>
           {timeLeft} sn
        </p>
      )}

      {finished ? (
        <ScoreBoard onRestart={handleRestart} score={score} total={quizQuestions.length} highScore={highScore} />
      ) : (
        <QuestionCard question={current} onAnswer={handleAnswer} selected={selected} />
      )}
    </div>
  )
}

export default App