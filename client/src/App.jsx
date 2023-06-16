import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import useNewBookForm from './hooks/useNewBookForm'
import useCurrentSort from './hooks/userCurrentSort'
import useCollection from './hooks/useCollection'
import { BOOK_COLLECTION } from './utils/collections'

function App() {

  const [sort, setSort] = useCurrentSort()
  const books = useCollection({ collection: BOOK_COLLECTION, sortBy: sort, subscribeToCollection: true })
  const [formValues, setFormValues] = useNewBookForm()
  console.log(books)

  return (
    <div className='main-container'>
      <Header />
      <Navbar setSort={setSort} formValues={formValues} setFormValues={setFormValues} />
      <Body books={books} />
      <Footer />
    </div>
  )
}

export default App
