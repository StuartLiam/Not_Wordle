import { useState, useEffect } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard'
import WordGenerator from './components/WordGenerator';
import Modal from './components/modal';
import Grid from './components/Grid'

import type { state } from './types/types';

function App() {
  const answer = WordGenerator();
  const [input, setInput] = useState<string[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [keyboardStates, setKeyboardStates] = useState(new Map<string, state>([ 
    ["A", 0], ["B", 0], ["C", 0], ["D", 0], ["E", 0], ["F", 0], ["G", 0], ["H", 0], ["I", 0], 
    ["J", 0], ["K", 0], ["L", 0], ["M", 0], ["N", 0], ["O", 0], ["P", 0], ["Q", 0], ["R", 0], 
    ["S", 0], ["T", 0], ["U", 0], ["V", 0], ["W", 0], ["X", 0], ["Y", 0], ["Z", 0]
  ]));
  const addLetter = (letter:string) => {
    if(input.length < 5) {
      setInput(input.concat(letter));
    }
  }

  const removeLetter = (() => {
    setInput(input.slice(0,-1));
  })

  const handleEnter = (() => {
    if (input.length == 5) {

      const state: number[] = checkWord();
      if (state.every(value => value == 2)) {
        console.log("You Win!");
      }
      
      const newMap = new Map(keyboardStates);
      for (let ii = 0; ii < 5; ii++) {
        newMap.set(input[ii], Math.max(newMap.get(input[ii])!, state[ii]) as state);
      }
      setKeyboardStates(newMap);
      setInput([])
    }
  })

  const handleKeyDown = (event: KeyboardEvent): void => {
    console.log(event.code);
    if(event.code.startsWith("Key")){     
      addLetter(event.code.replace("Key", ""));
    } else if (event.code === "Backspace") {
      removeLetter();
    } else if (event.code === "Enter") {
      handleEnter()
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
    const answerLetterCounts = new Map();
    answer.forEach(letter => {
      incrementLetterCount(answerLetterCounts, letter);
    })
  
    const guessLetterCounts = new Map();
    const state = [1, 1, 1, 1, 1];

    for (let ii = 0; ii < 5; ii++) {
      const letter = input[ii].toLowerCase()
      if (answer[ii] == letter) {
        state[ii] = 3;
        incrementLetterCount(guessLetterCounts, letter);
      }
    }

    for (let ii = 0; ii < 5; ii++) {
      const letter = input[ii].toLowerCase();
      if (state[ii] == 3 || !answerLetterCounts.has(letter)) {continue}
          
      incrementLetterCount(guessLetterCounts, letter);

      if (guessLetterCounts.has(letter) && guessLetterCounts.get(letter) <= answerLetterCounts.get(letter)) {
        state[ii] = 2;
      } 
    }
    
    return state
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
      <KeyBoard states = {keyboardStates}></KeyBoard>
      
    </>
  )
}

export default App
