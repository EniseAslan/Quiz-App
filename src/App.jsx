import { useState } from 'react'
import { questions } from './data/questions'
import './App.css'
import QuestionCard from './QuestionCard';

function App() {

  const [currentIndex,setCurrentIndex]=useState(0);
  const current=questions[currentIndex];
  const [score,setScore]=useState(0);
  

  const handleAnswer = (option) => {

    if(option ===current.answer){
      setScore((p)=>p+1)
    }
  
    if(currentIndex+1<questions.length){
      setCurrentIndex((s)=>s+1)
    }
  
};




  return (
    <>
     <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Quiz App</h1>
      <QuestionCard question={current} onAnswer={handleAnswer} />
      <p>Skor: {score}</p>
    </div>
    </>
  )
}

export default App
