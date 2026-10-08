function QuestionCard({ question, onAnswer }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        {question.question}
      </h2>

      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="text-left px-4 py-3 rounded-lg border-2 border-gray-200 
                       hover:border-blue-400 hover:bg-blue-50 
                       transition-colors duration-150 font-medium text-gray-700"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;