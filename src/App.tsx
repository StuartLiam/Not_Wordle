import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState<string[]>(["t","e","s","t"]);

  const addLetter = (letter:string) => {
    if(input.length < 5) {
      const newInput = input.slice();
      newInput.push(letter);
      setInput(newInput);
    }
  }

  const removeLetter = (() => {
    const newInput = input.slice();
    newInput.pop();
    setInput(newInput);
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>{input}</p>
    </>
  )
}

 

export default App
