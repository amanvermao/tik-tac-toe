import React from 'react'
import "./Resetbtn.css"

const Resetbtn = ({resetBoard}) => {
  return (
  
   <button className='reset-btn' onClick={resetBoard}>Reset</button>
   
  )
}

export default Resetbtn
