// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

export default function App() {
  return (
<div class="flex space-x-4 mt-2">
  <div class="flex-none me-8 font-extrabold">
    PHOTO
  </div>
  <div class="flex-none w-14 h-14 font-extrabold">
    Home
  </div>
  <div class="flex-none w-14 h-14 font-extrabold">
    Login
  </div>
  <div class="flex-none w-14 h-14 font-extrabold">
    Logout
  </div>
</div>
  )
}
