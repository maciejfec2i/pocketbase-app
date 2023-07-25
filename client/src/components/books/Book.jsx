import { useState } from "react";
import { formatTitle } from "../../utils/utilities";
import { titleCase } from "title-case";
import Modal from "../Modal";
import BookModalContent from "./BookModalContent";
import BookModalTitle from "./BookModalTitle";

export default function Book(props) {

  const [show, setShow] = useState(false)

  const bookCoverSrc = props.book.cover_image_src
  const bookTitle = titleCase(formatTitle(props.book.title))
  const bookAuthor = titleCase(props.book.expand?.author?.fullname)

  return (
    <>
      <div className="card flex-container flex-wrap centre-text text-not-selectable" tabIndex={0} 
      onClick={(e) => {
        setShow(true)
        e.currentTarget.blur()
      }} 
      onKeyUp={(e) => {
        if(e.key === "Enter") {
          setShow(true)
          e.currentTarget.blur()
        }
      }}>
        <img className="book-cover" src={`${bookCoverSrc}`} alt={`book cover of ${bookTitle}`} />
        <p className="card-title">{bookTitle}</p>
        <p className="card-subtitle flex-container centre-horizontal flex-end-align">by {bookAuthor}</p>
      </div>
      <Modal show={show} setShow={setShow} modalTitle={<BookModalTitle book={props.book} />} modalBody={<BookModalContent book={props.book} />} />
    </>
  )
}
