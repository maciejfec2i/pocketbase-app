import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import useNewBookForm from './hooks/useNewBookForm'
import useCurrentSort from './hooks/userCurrentSort'
import usePaginatedCollection from './hooks/usePaginatedCollection'
import { BOOK_COLLECTION } from './utils/collections'

function App() {

  const [sort, setSort] = useCurrentSort()
  const [books, totalPages, currentPage, setCurrentPage, currentPageRef] = usePaginatedCollection({ 
    collection: BOOK_COLLECTION,
    sortBy: sort,
    subscribeToCollection: true,
    itemsPerPage: 10
  })
  const [formValues, setFormValues] = useNewBookForm()

  return (
    <div className='main-container flex-container flex-direction-column'>
      <Header />
      <Navbar setSort={setSort} formValues={formValues} setFormValues={setFormValues} />
      <Body books={books} />
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} currentPageRef={currentPageRef} />
    </div>
  )
}

export default App
