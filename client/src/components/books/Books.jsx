import Book from "./Book"

export default function Books(props) {
  return (
    props.books.map(book => {
        return <Book book={book} modalIsOpen={props.modalIsOpen} key={crypto.randomUUID()} />
    })
  )
}
