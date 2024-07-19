import React from 'react'
import CardList from './CardList'
import Navi from './Navi'
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <>
    
    <Navi/>
    <Outlet/>
    <CardList/>    
    
    </>
  )
}

export default Home