import React from 'react'

function ProgressBar(props: { progress: number }) {
  return (
    <div className="h-8 bg-gray-200 rounded">
      <div className="h-full bg-blue-500 rounded transition-all duration-500 ease-in-out" style={{ width: `${props.progress}%` }}></div>
    </div>
  )
}

export default ProgressBar
