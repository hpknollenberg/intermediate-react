import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { reducerContext } from './main'





function EditTeam() {
  const {state, dispatch} = useContext(reducerContext)
  const [playerOne, setPlayerOne] = useState("")
  const [playerOneHealth, setPlayerOneHealth] = useState("")
  const [playerOneAttack, setPlayerOneAttack] = useState("")
  const [playerOneSpeed, setPlayerOneSpeed] = useState("")

  const [playerTwo, setPlayerTwo] = useState("")
  const [playerThree, setPlayerThree] = useState("")
  const [playerFour, setPlayerFour] = useState("")
  
  
  
 
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Edit Team</h1>
      <div class="p-1">
          <input type="text" placeholder="Player One" onChange={(e) => setPlayerOne(e.target.value)} />  
          <input type="text" placeholder="Health" onChange={(e) => setPlayerOneHealth(e.target.value)} />  
          <input type="text" placeholder="Attack" onChange={(e) => setPlayerOneAttack(e.target.value)} />  
          <input type="text" placeholder="Speed" onChange={(e) => setPlayerOneSpeed(e.target.value)} />  
          <button className="m-2" onClick={() => dispatch({ 
            type: 'player-one', name: playerOne, health: playerOneHealth, attack: playerOneAttack, speed: playerOneSpeed})}
          >Add Player</button>      
      </div>
      <div class="p-1">
          <input type="text" placeholder="Player Two" onChange={(e) => setPlayerTwo(e.target.value)} />  
          <button className="m-2" onClick={() => dispatch({ type: 'player-two', name: playerTwo})}>Add Player</button>      
      </div>
      <div class="p-1">
          <input type="text" placeholder="Player Three" onChange={(e) => setPlayerThree(e.target.value)} />  
          <button className="m-2" onClick={() => dispatch({ type: 'player-three', name: playerThree})}>Add Player</button>      
      </div>
      <div class="p-1">
          <input type="text" placeholder="Player Four" onChange={(e) => setPlayerFour(e.target.value)} />  
          <button className="m-2" onClick={() => dispatch({ type: 'player-four', name: playerFour})}>Add Player</button>      
      </div>
    </div>
  )
}


export default EditTeam
