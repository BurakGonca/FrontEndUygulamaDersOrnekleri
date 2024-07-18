import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/style/search.scss'

import { FcSearch } from "react-icons/fc";

const SearchBar = () => {

    const {companyName,state,dispatch}=useContext(DataContext)
  return (
    //case_5
    <div className='search'>
        <h3 style={{marginLeft:"25px"}}>{state.secilenKategori} </h3>
        <input onChange={(e)=>dispatch({type:"search",payload:e.target.value})} type='text' placeholder='Ara..'/> <FcSearch size={40} />
    </div>
  )
}

export default SearchBar