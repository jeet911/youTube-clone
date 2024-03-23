import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Recommended from './components/Recommended'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import SearchPage from './components/SearchPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Header />
      </div>
      <Routes>
        <Route path='/'
          element={<>
            <div className="app-page">
              <Sidebar /><Recommended />
            </div>
          </>} />
      </Routes>
      <Routes>
        <Route path="/search/:searchTerm" element={<>
          <div className="app-page">
            <Sidebar /><SearchPage />
          </div>
        </>} />
      </Routes>
    </>
  )
}



export default App
