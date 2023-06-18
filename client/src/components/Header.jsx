import bookIcon from "../assets/books.png"

export default function Header() {
  return (
    <div className="header flex-container centre-text centre-horizontal">
      <img className="logo" src={bookIcon} alt="stack of books icon" />
      <div className="title text-not-selectable">
        <h1>Book Repository</h1>
      </div>
    </div>
  )
}
