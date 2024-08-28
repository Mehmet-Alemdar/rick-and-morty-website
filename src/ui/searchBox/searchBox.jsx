import React, { useState } from 'react'

const SearchBox = ({ handleSearch }) => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('name')

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearch(value)
    handleSearch(value, filter)
  }

  const handleSelectChange = (e) => {
    const value = e.target.value
    setFilter(value)
    handleSearch(search, value)
  }

  return (
    <div className="flex sm:w-[600px] w-[85%] h-full">
      <input
        onChange={handleInputChange}
        type="text"
        placeholder={`Search by ${filter}`}
        className="w-full px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none"
      />
      <select
        onChange={handleSelectChange}
        className="w-auto px-3 py-1 text-gray-700 border rounded-r-lg focus:outline-none"
      >
        <option value="name">by Name</option>
        <option value="species">by Species</option>
        <option value="status">by Status</option>
        <option value="gender">by Gender</option>
      </select>
    </div>
  )
}

export default SearchBox