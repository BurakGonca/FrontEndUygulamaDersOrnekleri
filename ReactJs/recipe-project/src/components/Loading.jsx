import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../assets/style/loading.scss"

const Loading = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate("/recipe-platform/main");
        },3000)
    })
  return (
    <div className='loading'>
        <div className='loader'> </div>
    </div>
  )
}

export default Loading