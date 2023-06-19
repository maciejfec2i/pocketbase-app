import Books from "./books/Books"

export default function Body(props) {
  return (
    <div className="content grid-container">
        <Books books={props.books} />
    </div>
  )
}
