import { formatAuthorName, formatTitle } from "../../utils/utilities"
import { titleCase } from "title-case";

export default function BookModalTitle(props) {

  const bookTitle = titleCase(formatTitle(props.book.title))
  const bookAuthor = titleCase(formatAuthorName(props.book.author))

  return (
    <>
        {bookTitle} <span className="italic">by {bookAuthor}</span>
    </>
  )
}
