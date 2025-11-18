import { useState, useEffect } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard'
import WordGenerator from './components/WordGenerator';
import Modal from './components/modal';

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
                        <div className="exampleTile correct">W</div>
                        <div className="exampleTile">E</div>
                        <div className="exampleTile">A</div>
                        <div className="exampleTile">R</div>
                        <div className="exampleTile">Y</div>
                     </div>
                     <p> The letter W is in the word and in the correct spot.</p>
                     <div className="exampleRow">
                        <div className="exampleTile">P</div>
                        <div className="exampleTile incorrect">I</div>
                        <div className="exampleTile">L</div>
                        <div className="exampleTile">L</div>
                        <div className="exampleTile">S</div>
                     </div>
                     <p> The letter I is in the word but in the wrong spot.</p>
                     <div className="exampleRow">
                        <div className="exampleTile">V</div>
                        <div className="exampleTile">A</div>
                        <div className="exampleTile">G</div>
                        <div className="exampleTile incorrect">U</div>
                        <div className="exampleTile">E</div>
                     </div>
                     <p> The letter U is not in the word in any spot.</p>
                     <h2>A new word will be generated at midnight</h2>
                  </>

               }
           />
      <p>{input}</p>
      <KeyBoard></KeyBoard>
    </>
  )
}

export default App
