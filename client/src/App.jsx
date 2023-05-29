import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Navbar from './components/navbar/Navbar'
import useGetBooks from "./hooks/useGetBooks"
import useSelectedTab from './hooks/useSelectedTab'
import useCurrentSort from './hooks/userCurrentSort'

function App() {

  const [tabs, setTabs] = useSelectedTab()
  const [sort, setSort] = useCurrentSort()
  const books = useGetBooks({sort})

  return (
    <div className='main-container'>
      <Header />
      <Navbar tabs={tabs} setSort={setSort} />
      <Body books={books} />
    </div>
  )
}

export default App
