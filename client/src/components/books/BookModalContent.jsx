import { formatDate, formatTitle } from "../../utils/utilities";

export default function BookModalContent(props) {

  const bookCoverSrc = props.book.cover_image_src
  const bookTitle = formatTitle(props.book.title)
  const bookDescription = props.book.description
  const publishDate = formatDate(props.book.original_publish_date)
  const publisher = props.book.publisher
  const genres = props.book.genre

  return (
    <>
        <div className="book-cover-modal">
            <img className="book-cover" src={bookCoverSrc} alt={`book cover of ${bookTitle}`} />
        </div>
        <div className="book-description-modal">
            <p className="book-desc-content">{bookDescription}</p>
            <p className="book-desc-content"><b>Genre:</b> {genres}</p>
            <p className="book-desc-content"><b>Original Publish Date:</b> {publishDate}</p>
            {publisher.length > 0 &&
                <p className="book-desc-content"><b>Publisher:</b> {publisher}</p>
            }
        </div>
    </>
  )
}
