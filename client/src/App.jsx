import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import useNewBookForm from './hooks/useNewBookForm'
import useCurrentSort from './hooks/userCurrentSort'
import usePaginatedCollection from './hooks/usePaginatedCollection'
import { BOOK_COLLECTION } from './utils/collections'
import { useState } from 'react'

function App() {

  const [sort, setSort] = useCurrentSort()
  const [currentPage, setCurrentPage] = useState(1)
  const [books, totalPages] = usePaginatedCollection({ collection: BOOK_COLLECTION, sortBy: sort, subscribeToCollection: true, page: currentPage, itemsPerPage: 10 })
  const [formValues, setFormValues] = useNewBookForm()
  console.log(books)

  return (
    <div className='main-container flex-container flex-direction-column'>
      <Header />
      <Navbar setSort={setSort} formValues={formValues} setFormValues={setFormValues} />
      <Body books={books} />
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default App
