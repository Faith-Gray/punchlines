import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Joke from './Joke.jsx'
import jokeData from './JokeData'


function App() {
  const jokeElements = jokeData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />
})

  return (
    <div>
      {jokeElements}
    </div>


    // <div className="joke">
    //         <Joke 
    //             setup="What did the fish say when he swam into a wall?" 
    //             punchline="Dam"
    //         />
    //          <Joke 
    //             setup="What do you call a fish with no eyes?" 
    //             punchline="A fsh"
    //         />
    //         <Joke 
    //             setup="What do you call a can opener that doesn’t work?" 
    //             punchline="A can’t opener!"
    //         />
    //         <Joke 
    //             setup="What do you get when you combine a rhetorical question and a joke?" 
    //             punchline="Get it?"
    //         />
    // </div>
  )
}

export default App
