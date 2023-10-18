import React from 'react'
import "./Scoreboard.css"

const Scoreboard = ({scroes, xplaying}) => {
    const {xScore, oScore} = scroes;
  return (
    <div className='Scroeboard'>
    
    <span className="x-score">X - {xScore}</span>
    <span className="y-score">O - {oScore}</span>
      
    </div>
  )
}

export default Scoreboard
