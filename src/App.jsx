import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <h1>Assets Folder normal</h1>
        <img src='src/assets/headshot.PNG' />
        <img src='src/assets/kanban.png' />
        <img src='src/assets/payment-form.png' />
      </div>
      <div>
        <h1>Assets Folder tiny</h1>
        <img src='src/assets/tiny-headshot.png' />
        <img src='src/assets/tiny-kanban.png' />
        <img src='src/assets/tiny-payement-form.png' />
      </div>
      <div>
        <h1>Public Folder normal</h1>
        <img src='headshot.PNG' />
        <img src='kanban.png' />
        <img src='payment-form.png' />
      </div>
      <div>
        <h1>Public Folder tiny</h1>
        <img src='tiny-headshot.png' />
        <img src='tiny-kanban.png' />
        <img src='tiny-payement-form.png' />
      </div>
    </>
  )
}

export default App
