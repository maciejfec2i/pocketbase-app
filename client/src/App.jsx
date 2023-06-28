import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import useCurrentSort from './hooks/userCurrentSort'
import usePaginatedCollection from './hooks/usePaginatedCollection'
import { BOOK_COLLECTION } from './utils/collections'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { authenticator } from './utils/pb'

function App() {

  const [sort, setSort] = useCurrentSort()
  const [books, totalPages, currentPage, setCurrentPage, currentPageRef] = usePaginatedCollection({ 
    collectionName: BOOK_COLLECTION,
    sortBy: sort,
    subscribeToCollection: true,
    itemsPerPage: 10
  })
  const [loggedIn, setLoggedIn] = useState(authenticator.authStoreIsValid())

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setSort={setSort} loggedIn={loggedIn} setLoggedIn={setLoggedIn} books={books} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} currentPageRef={currentPageRef} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
