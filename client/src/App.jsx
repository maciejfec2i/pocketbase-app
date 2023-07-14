import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authenticator } from './utils/pb'

function App() {

  const [loggedIn, setLoggedIn] = useState(authenticator.authStoreIsValid())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
