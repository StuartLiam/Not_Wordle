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
                titleContent={<h1> How To Play </h1>}
                closeFn={() => setModalOpen(false)}
                content={
                   <>
                     <h2>This is a modal</h2>
                     <p>You can close it by pressing Escape key, pressing close, or clicking outside the modal.</p>
                  </>

               }
           />
      <p>{input}</p>
      <KeyBoard></KeyBoard>
    </>
  )
}

export default App
