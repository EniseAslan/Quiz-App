import React from 'react'

function ProgressBar({current,total}) {
  return (
    <div className="w-full max-w-xl mb-4">
      <p className="text-sm font-medium text-gray-500 mb-2">
        Soru {current} / {total}
      </p>
      <div className="flex gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full ${
              i < current ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ProgressBar
