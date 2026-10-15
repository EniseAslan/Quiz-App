function QuestionCard({ question, onAnswer, selected }) {
  function getOptionClass(option) {
    if (selected === null) return "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
    if (option === question.answer) return "border-green-500 bg-green-100"
    if (option === selected) return "border-red-500 bg-red-100"
    return "border-gray-200 opacity-60"
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            disabled={selected !== null}
            className={`text-left px-4 py-3 rounded-lg border-2 font-medium text-gray-700 transition-colors duration-150 ${getOptionClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default QuestionCard