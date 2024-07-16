import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'

import { FcSearch } from "react-icons/fc";

const SearchBar = () => {

    const {secilenKategori,setSearch}=useContext(DataContext)
  return (
    <div className='search'>
        <h3 style={{marginLeft:"25px"}}>{secilenKategori} </h3>
        <input onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Ara..'/> <FcSearch size={40} />
    </div>
  )
}

export default SearchBar