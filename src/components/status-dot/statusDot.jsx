import React from 'react'

const StatusDot = ({status}) => {
  let color = "bg-gray-500"
  switch (status) {
    case 'Alive':
      color = 'bg-green-500'
      break
    case 'Dead':
      color = 'bg-red-500'
      break
    case 'unknown':
      color = 'bg-gray-500'
      break
    default:
      color = 'bg-gray-50'
      break
  }
  return (
    <div className={`h-3 w-3 rounded-full ${color}`}></div>
  )
}

export default StatusDot