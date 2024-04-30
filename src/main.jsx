import React, { createContext, useReducer } from 'react'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import EditTeam from './EditTeam'
import App from './App'
import ErrorPage from './ErrorPage'
import Header from './Header'
import Footer from './Footer'






function Layout() {
  return (
      <>
        <Header />
        <div id='page-content'>
          <Outlet />
        </div>
        <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/edit-team',
        element: <EditTeam />,
        errorElement: <ErrorPage />
      },
    ]
  }
])



export const initialPlayerState = {
  playerOne: "",
  playerOneHealth: "1",
  playerOneAttack: "1",
  playerOneSpeed: "1",
  playerOneErrorMessage: "Please Enter Player One's Information.",
  
  playerTwo: "",
  playerTwoHealth: "1",
  playerTwoAttack: "1",
  playerTwoSpeed: "1",
  playerTwoErrorMessage: "Please Enter Player Two's Information.",

  playerThree: "",
  playerThreeHealth: "1",
  playerThreeAttack: "1",
  playerThreeSpeed: "1",
  playerThreeErrorMessage: "Please Enter Player Three's Information.",
  
  playerFour: "",
  playerFourHealth: "1",
  playerFourAttack: "1",
  playerFourSpeed: "1",
  playerFourErrorMessage: "Please Enter Player Four's Information.",
}

export const playerReducer = (state, action) => {
  switch(action.type) {
    case 'player-one':
      return { ...state, playerOne: action.name, playerOneHealth: action.health, playerOneAttack: action.attack, playerOneSpeed: action.speed, playerOneErrorMessage: action.message }
    case 'player-two':
      return { ...state, playerTwo: action.name, playerTwoHealth: action.health, playerTwoAttack: action.attack, playerTwoSpeed: action.speed, playerTwoErrorMessage: action.message }
    case 'player-three':
      return { ...state, playerThree: action.name, playerThreeHealth: action.health, playerThreeAttack: action.attack, playerThreeSpeed: action.speed, playerThreeErrorMessage: action.message }
    case 'player-four':
      return { ...state, playerFour: action.name, playerFourHealth: action.health, playerFourAttack: action.attack, playerFourSpeed: action.speed, playerFourErrorMessage: action.message }
    default: 
      throw new Error('Hey!')
  }
}

export const reducerContext = createContext()

const ReducerProvider = ({children}) => {
  const [state, dispatch] = useReducer(playerReducer, initialPlayerState)
  return (
    <reducerContext.Provider value={{ state, dispatch }}>
      {children}
    </reducerContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ReducerProvider>
    <RouterProvider router={router} />
  </ReducerProvider>   
)
