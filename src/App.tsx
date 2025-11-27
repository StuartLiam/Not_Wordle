import { useState, useEffect } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard'
import WordGenerator from './components/WordGenerator';
import Modal from './components/modal';

import Grid from './components/Grid'
import "./components/Key.css"

function App() {
  const [input, setInput] = useState<string[]>(WordGenerator());
  const [modalOpen, setModalOpen] = useState(false);

  const addLetter = (letter:string) => {
    if(input.length < 5) {
      setInput(input.concat(letter));
    }
  }

  const removeLetter = (() => {
    setInput(input.slice(0,-1));
  })

  const handleKeyDown = (event: KeyboardEvent): void => {
    console.log(event.code);
    if(event.code.startsWith("Key")){
      addLetter(event.code.replace("Key", ""));
    } else if (event.code === "Backspace") {
      removeLetter();
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      <button className="openModalBtn" onClick={() => setModalOpen(true)}>
        Debug Open
      </button>
      <Modal 
                open={modalOpen}
                titleContent={<h2> How To Play </h2>}
                closeFn={() => setModalOpen(false)}
                content={
                   <>
                     <h2>Guess the word in 6 tries.</h2>
                     <ul>
                        <li>Each guess must be a valid 5 letter word.</li>
                        <li>The color of the tiles will change to show how close your guess was to the word.</li>
                     </ul>
                     <h3>Examples</h3>
                     <div className="exampleRow">
                        <div className="key 2">W</div>
                        <div className="key 0">E</div>
                        <div className="key 0">A</div>
                        <div className="key 0">R</div>
                        <div className="key 0">Y</div>
                     </div>
                     <p> The letter W is in the word and in the correct spot.</p>
                     <div className="exampleRow">
                        <div className="key 0">P</div>
                        <div className="key 1">I</div>
                        <div className="key 0">L</div>
                        <div className="key 0">L</div>
                        <div className="key 0">S</div>
                     </div>
                     <p> The letter I is in the word but in the wrong spot.</p>
                     <div className="exampleRow">
                        <div className="key 0">V</div>
                        <div className="key 0">A</div>
                        <div className="key 0">G</div>
                        <div className="key 3">U</div>
                        <div className="key 0">E</div>
                     </div>
                     <p> The letter U is not in the word in any spot.</p>
                     <h2>A new word will be generated at midnight</h2>
                  </>

               }
           />
      <p>{input}</p>
      <Grid currInput = {input}/>
      <KeyBoard></KeyBoard>
      
    </>
  )
}

export default App
