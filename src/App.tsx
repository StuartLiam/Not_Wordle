import { useState, useEffect } from 'react'
import './App.css'
import KeyBoard from './components/keyBoard'

function App() {
  const [input, setInput] = useState<string[]>(["t","e","s","t"]);

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
      <p>{input}</p>
      <KeyBoard></KeyBoard>
    </>
  )
}

export default App
