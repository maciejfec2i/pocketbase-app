import Books from "./books/Books"

export default function Body({ books }) {
  return (
    <div className="content flex-container centre-horizontal wrap">
        <Books books={books} />
    </div>
  )
}
