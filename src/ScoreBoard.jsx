function ScoreBoard({ score, total, onRestart }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl text-center">
      <h2 className="text-lg font-medium text-gray-500 uppercase ">
        Sonuç
      </h2>

      <p className="text-6xl font-extrabold text-purple-600 my-4">
        {score} <span className="text-3xl text-gray-400">/ {total}</span>
      </p>

      <button
        onClick={onRestart}
        className="px-6 py-3 rounded-xl bg-purple-600 text-white font-semibold
                   shadow-md hover:bg-purple-700 "
      >
        Tekrar dene!
      </button>
    </div>
  );
}

export default ScoreBoard;
