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
      <p>Player Two: { state.playerTwo }</p>
      <p>Player Three: { state.playerThree }</p>
      <p>Player Four: { state.playerFour }</p>
    </div>
  )
}


export default App
