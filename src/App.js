import React from 'react'
import Header from './components/Header'
import Main from './components/Main'
import { Routes, Route, Link } from 'react-router-dom'
import Team from './components/Team'
import Collection from './components/Collection'




function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/' element={<Team />} />
        <Route path='/' element={<Collection />} />
      </Routes>
    </div>
  )
}

export default App