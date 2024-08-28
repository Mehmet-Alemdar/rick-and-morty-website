const statusDot = (status) => {
  return status === 'Alive' ? 'bg-green-500' : status === 'Dead' ? 'bg-red-500' : 'bg-gray-500'
}

export default statusDot