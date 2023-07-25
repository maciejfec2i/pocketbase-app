import { useState, useEffect } from 'react'
import Body from './Body'
import Header from './Header'
import Navbar from './navbar/Navbar'
import Footer from './Footer'
import useCurrentSort from '../hooks/userCurrentSort'
import usePaginatedCollection from '../hooks/usePaginatedCollection'
import collections from '../utils/collections'
import { selectSortBy } from '../utils/utilities'

export default function Home(props) {

  const [sort, setSort] = useCurrentSort()
  const [currentPage, setCurrentPage] = useState(1)
  const [books, totalPages] = usePaginatedCollection({ 
    collectionName: collections.BOOK_COLLECTION,
    itemsPerPage: 10,
    page: currentPage,
    queryParams: { sort: selectSortBy(sort), expand: "author" },
    subscribeToCollection: true,
    useEffectParams: [sort, currentPage]
  })

  useEffect(() => {
    if(currentPage > totalPages) {
      setCurrentPage(totalPages)
    }
  }, [totalPages])

  return (
    <div className='main-container flex-container flex-direction-column'>
      <Header />
      <Navbar setSort={setSort} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn} />
      <Body books={books} />
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}
