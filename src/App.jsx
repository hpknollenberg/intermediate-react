import { Link } from "react-router-dom"
import { useContext } from 'react'
import { reducerContext } from './main'

const Title = () => {
  return (
    <h1>
      Home
    </h1>
  )
}

function App() {
  const {state, dispatch} = useContext(reducerContext)

  return (
    <div className="p-5">
      <Link to='/edit-team'>Edit Team</Link>
      <Title />
      <p>Player One: { state.playerOne }, Health: { state.playerOneHealth }, Attack: { state.playerOneAttack }, Speed: {state.playerOneSpeed}</p>
      <p>Player Two: { state.playerTwo }, Health: { state.playerTwoHealth }, Attack: { state.playerTwoAttack }, Speed: {state.playerTwoSpeed}</p>
      <p>Player Three: { state.playerThree }, Health: { state.playerThreeHealth }, Attack: { state.playerThreeAttack }, Speed: {state.playerThreeSpeed}</p>
      <p>Player Four: { state.playerFour }, Health: { state.playerFourHealth }, Attack: { state.playerFourAttack }, Speed: {state.playerFourSpeed}</p>
    </div>
  )
}


export default App
