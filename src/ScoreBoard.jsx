
function ScoreBoard({score,total,onRestart}) {
  return (
    <div>
      <h2>Sonuç:</h2>
      <p>{score} / {total}</p>
      <button onClick={onRestart}>Tekrar dene!</button>
    </div>
  )
}

export default ScoreBoard
