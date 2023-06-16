import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import useGetBooks from "./hooks/useGetBooks"
import useNewBookForm from './hooks/useNewBookForm'
import useCurrentSort from './hooks/userCurrentSort'

function App() {

  const [sort, setSort] = useCurrentSort()
  const books = useGetBooks({sort})
  const [formValues, setFormValues] = useNewBookForm()
  console.log("hello there!")

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
