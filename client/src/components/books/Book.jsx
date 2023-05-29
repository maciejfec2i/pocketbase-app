import { useState } from "react";
import { formatTitle } from "../../utils/utilities";
import Modal from "../Modal";
import BookModalContent from "./BookModalContent";
import BookModalTitle from "./BookModalTitle";

export default function Book({ book }) {

  const [show, setShow] = useState(false)

  const bookCoverSrc = book.cover_image_src
  const bookTitle = formatTitle(book.title)
  const bookAuthor = book.author

  return (
    <>
      <div className="card flex-container flex-wrap centre-text text-not-selectable" onClick={() => setShow(true)}>
        <img className="book-cover" src={`${bookCoverSrc}`} alt={`book cover of ${bookTitle}`} />
        <p className="card-title">{bookTitle}</p>
        <p className="card-subtitle flex-container centre-horizontal flex-end-align">by {bookAuthor}</p>
      </div>
      <Modal show={show} setShow={setShow} modalTitle={<BookModalTitle book={book} />} modalBody={<BookModalContent book={book} />} />
    </>
    
  )
}
