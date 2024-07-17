import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'
import { FcSearch } from "react-icons/fc";
const SearchBar = () => {
    const {setSearch} = useContext(DataContext);
  return (
    <div className='search-bar'>
        <input onChange={(e)=>setSearch(e.target.value)} className='search-input' type='text' placeholder='Search Recipe...'/>
      <FcSearch className="search-icon" size={20} />
    </div>
  )
}

export default SearchBar