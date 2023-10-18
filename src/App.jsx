
import { useEffect, useState } from 'react'
import './App.css'
import Board from './components/Board'
import Box from './components/Box'
import Scoreboard from './components/Scoreboard'
import Resetbtn from './components/Resetbtn'


function App() {

  const WIN_CONDITIONS =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
  ]
  const initialBoard = JSON.parse(localStorage.getItem('ticTacToeBoard')) || Array(9).fill(null);
  const initialScores = JSON.parse(localStorage.getItem('ticTacToeScores')) || {
    xScore: 0,
    oScore: 0,
  };


  const [board, setBoard] = useState(initialBoard);
  const[xplaying,setXPlaying] = useState(true);

  const [scroes, setScroes] = useState(initialScores)

  const [gameOver, setGameOver] = useState(false)

  useEffect(() => {
    // Save the board state to localStorage whenever it changes
    localStorage.setItem('ticTacToeBoard', JSON.stringify(board));
    // Save the scores to localStorage whenever they change
    localStorage.setItem('ticTacToeScores', JSON.stringify(scroes));
  }, [board, scroes]);
   


  const handleBoxClick =(boxIdx)=>{
    const updatedBord = board.map((value, idx)=>{
    if (idx === boxIdx) {
      return xplaying===true ? "x" : "O";
      
    }else{
      return value;
    }
    })


   const winner= checkWinner(updatedBord);

   if (winner) {
    if (winner === "O") {
      let {oScore} = scroes;
      oScore += 1
      setScroes({...scroes, oScore})
      
    } else{
      let {xScore} = scroes;
      xScore += 1
      setScroes({...scroes, xScore})
    }
    
   }
  


    setBoard(updatedBord);

    setXPlaying(!xplaying)
  }

   const checkWinner = (board) =>{
    for(let i = 0; i<WIN_CONDITIONS.length; i++){

      const[x,y,z] = WIN_CONDITIONS[i];
      
        if (board[x] && board[x] === board[y] && board[y] === board[z] ) {
          setGameOver(true)

          return board[x];
          
        }
      }
    }
    

     const resetBoard =()=>{
      setGameOver(false);
      setBoard(Array(9).fill(null))
     }

  
  return (
   
    
  <div className="App">
  <Scoreboard scroes={scroes} />
  
  <Board
    board ={board} onClick={gameOver ? resetBoard :
    handleBoxClick}
  />
  <Resetbtn resetBoard={resetBoard} />
  
   
  </div>
  )
}


export default App
