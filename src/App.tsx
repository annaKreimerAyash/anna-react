// import { useState } from 'react'
import annaLogo from '/logo-a.svg'
import './App.css'
import classes from "./components/main.module.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <a href="https://vite.dev" target="_blank"> */}
          <img src={annaLogo} className="logo" alt="Vite logo" />
        {/* </a> */}
      </div>
      <h1>Anna Kreimer Ayash</h1>
      <nav className={classes.header}>
        <span>aaa</span>
        <span>bbb</span>
        <span>ccc</span>
      </nav>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
