import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import { reducerContext } from './main'


function InputScreen (props) {
  return (
    <div class="p-1">
        <input type="text" placeholder={props.placeholder} onChange={(e) => props.setPlayer(e.target.value)} />  
        <input type="text" placeholder="Health" onChange={(e) => props.setPlayerHealth(e.target.value)} />  
        <input type="text" placeholder="Attack" onChange={(e) => props.setPlayerAttack(e.target.value)} />  
        <input type="text" placeholder="Speed" onChange={(e) => props.setPlayerSpeed(e.target.value)} />  
        <button className="m-2" onClick={() => props.dispatch({ 
          type: props.type, name: props.player, health: props.playerHealth, attack: props.playerAttack, speed: props.playerSpeed})}
        >Add Player</button>      
    </div>
  )
}


function EditTeam() {
  const {state, dispatch} = useContext(reducerContext)
  const [playerOne, setPlayerOne] = useState("")
  const [playerOneHealth, setPlayerOneHealth] = useState("")
  const [playerOneAttack, setPlayerOneAttack] = useState("")
  const [playerOneSpeed, setPlayerOneSpeed] = useState("")

  const [playerTwo, setPlayerTwo] = useState("")
  const [playerTwoHealth, setPlayerTwoHealth] = useState("")
  const [playerTwoAttack, setPlayerTwoAttack] = useState("")
  const [playerTwoSpeed, setPlayerTwoSpeed] = useState("")

  const [playerThree, setPlayerThree] = useState("")
  const [playerThreeHealth, setPlayerThreeHealth] = useState("")
  const [playerThreeAttack, setPlayerThreeAttack] = useState("")
  const [playerThreeSpeed, setPlayerThreeSpeed] = useState("")

  const [playerFour, setPlayerFour] = useState("")
  const [playerFourHealth, setPlayerFourHealth] = useState("")
  const [playerFourAttack, setPlayerFourAttack] = useState("")
  const [playerFourSpeed, setPlayerFourSpeed] = useState("")
  
  



 
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>Edit Team</h1>
      <InputScreen
        placeholder="Player One"
        type="player-one"
        setPlayer={setPlayerOne}
        setPlayerHealth={setPlayerOneHealth}
        setPlayerAttack={setPlayerOneAttack}
        setPlayerSpeed={setPlayerOneSpeed}
        player={playerOne}
        playerHealth={playerOneHealth}
        playerAttack={playerOneAttack}
        playerSpeed={playerOneSpeed}
        dispatch={dispatch}
      />
      <InputScreen
        placeholder="Player Two"
        type="player-two"
        setPlayer={setPlayerTwo}
        setPlayerHealth={setPlayerTwoHealth}
        setPlayerAttack={setPlayerTwoAttack}
        setPlayerSpeed={setPlayerTwoSpeed}
        player={playerTwo}
        playerHealth={playerTwoHealth}
        playerAttack={playerTwoAttack}
        playerSpeed={playerTwoSpeed}
        dispatch={dispatch}
      />
      <InputScreen
        placeholder="Player Three"
        type="player-three"
        setPlayer={setPlayerThree}
        setPlayerHealth={setPlayerThreeHealth}
        setPlayerAttack={setPlayerThreeAttack}
        setPlayerSpeed={setPlayerThreeSpeed}
        player={playerThree}
        playerHealth={playerThreeHealth}
        playerAttack={playerThreeAttack}
        playerSpeed={playerThreeSpeed}
        dispatch={dispatch}
      />
      <InputScreen
        placeholder="Player Four"
        type="player-four"
        setPlayer={setPlayerFour}
        setPlayerHealth={setPlayerFourHealth}
        setPlayerAttack={setPlayerFourAttack}
        setPlayerSpeed={setPlayerFourSpeed}
        player={playerFour}
        playerHealth={playerFourHealth}
        playerAttack={playerFourAttack}
        playerSpeed={playerFourSpeed}
        dispatch={dispatch}
      />
    </div>
  )
}


export default EditTeam
