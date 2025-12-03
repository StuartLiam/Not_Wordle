import { useState, useEffect } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard'
import WordGenerator from './components/WordGenerator';
import Modal from './components/modal';

import Grid from './components/Grid'

function App() {
  const answer = WordGenerator();
  const [input, setInput] = useState<string[]>([]);
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
    } else if (event.code === "Enter") {
      checkWord()
    }
  }

  const incrementLetterCount = ((letterCount: Map<string, number>, letter: string) => {
    if (letterCount.has(letter)) {
        letterCount.set(letter, letterCount.get(letter)! + 1);
      } else {
        letterCount.set(letter, 1);
      }
  })

  const checkWord = (() => {
    if (input.length != 5) {
      console.log("exit");
      return;
    }

    const answerLetterCounts = new Map();
    answer.forEach(letter => {
      incrementLetterCount(answerLetterCounts, letter);
    })
  
    const guessLetterCounts = new Map();
    const state = [0, 0, 0, 0, 0];

    for (let ii = 0; ii < 5; ii++) {
      const letter = input[ii].toLowerCase()
      if (answer[ii] == letter) {
        state[ii] = 2;
        incrementLetterCount(guessLetterCounts, letter);
      }
    }

    for (let ii = 0; ii < 5; ii++) {
      const letter = input[ii].toLowerCase();
      if (state[ii] == 2 || !answerLetterCounts.has(letter)) {continue}
          
      incrementLetterCount(guessLetterCounts, letter);

      if (guessLetterCounts.has(letter) && guessLetterCounts.get(letter) <= answerLetterCounts.get(letter)) {
        state[ii] = 1;
      } 
    }
    console.log(state)
    console.log(answerLetterCounts)
    console.log(guessLetterCounts)
  })

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
      <p>{answer}</p>
      <Grid currInput = {input}/>
      <KeyBoard></KeyBoard>
      
    </>
  )
}

export default App
