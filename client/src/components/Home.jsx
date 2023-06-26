import Body from './Body'
import Header from './Header'
import Navbar from './navbar/Navbar'
import Footer from './Footer'

export default function Home(props) {
  return (
    <div className='main-container flex-container flex-direction-column'>
      <Header />
      <Navbar setSort={props.setSort} formValues={props.formValues} setFormValues={props.setFormValues} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Body books={props.books} />
      <Footer currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} totalPages={props.totalPages} currentPageRef={props.currentPageRef} />
    </div>
  )
}
