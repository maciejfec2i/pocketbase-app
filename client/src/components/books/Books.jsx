import Book from "./Book"

export default function Books({ books }) {
  return (
    books.map(book => {
        return <Book book={book} key={crypto.randomUUID()} />
    })
  )
}
