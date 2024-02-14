// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Test from './components/test.tsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {Test("itmSaasUsers", "ITM Saas Users", " Test.. Does this work?", 0)}
      {Test("itmSaasRetention", "ITM Saas Retention", " Hmm i can have different headings like this... i can get it to return different things pretty easily", 937)}
      {Test("itmSaasVC", "ITM Saas Visual Capture", " Hmm.. it acts a lot like a class instance", 0)}

      {/* <div>
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
