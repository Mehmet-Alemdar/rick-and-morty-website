import React, { useState } from 'react'
import { AiFillHeart } from "react-icons/ai";

const SearchBox = ({ handleSearch, handleShowFavorites, showFavorites, searchState }) => {
  const [search, setSearch] = useState(searchState.val)
  const [filter, setFilter] = useState(searchState.by)

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
    <div className='flex sm:w-[600px] w-[85%]'>
      <div className="flex w-full  h-full">
        <input
          onChange={handleInputChange}
          value={search}
          type="text"
          placeholder={`Search by ${filter}`}
          className="w-full px-3 py-2 text-gray-700 border rounded-l-lg focus:outline-none text-[14px]"
        />
        <select
          onChange={handleSelectChange}
          value={filter}
          className="w-auto sm:px-3 px-0 py-1 text-gray-700 border rounded-r-lg focus:outline-none text-[14px]"
        >
          <option value="name">by Name</option>
          <option value="species">by Species</option>
          <option value="status">by Status</option>
        </select>
      </div>
      <div onClick={handleShowFavorites} title="See your favorites" className={`ml-2 flex items-center justify-center sm:p-[10px] p-[2px] rounded-full  ${showFavorites ? "bg-white text-primary-orange" : "text-white bg-primary-orange"} cursor-pointer transition-all duration-150 `}>
        <p className={`cursor-pointer sm:text-xl text-[18px]`}>
           <AiFillHeart />
        </p>
      </div>
    </div>

  )
}

export default SearchBox