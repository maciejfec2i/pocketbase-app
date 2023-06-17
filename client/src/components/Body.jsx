import Books from "./books/Books"

export default function Body({ books }) {
  return (
    <div className="content grid-container">
        <Books books={books} />
    </div>
  )
}
