import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import useNewBookForm from './hooks/useNewBookForm'
import useCurrentSort from './hooks/userCurrentSort'
import usePaginatedCollection from './hooks/usePaginatedCollection'
import { BOOK_COLLECTION } from './utils/collections'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [sort, setSort] = useCurrentSort()
  const [books, totalPages, currentPage, setCurrentPage, currentPageRef] = usePaginatedCollection({ 
    collection: BOOK_COLLECTION,
    sortBy: sort,
    subscribeToCollection: true,
    itemsPerPage: 10
  })
  const [formValues, setFormValues] = useNewBookForm()
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setSort={setSort} formValues={formValues} setFormValues={setFormValues} loggedIn={loggedIn} setLoggedIn={setLoggedIn} books={books} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} currentPageRef={currentPageRef} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
