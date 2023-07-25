import { formatTitle } from "../../utils/utilities"
import { titleCase } from "title-case";

export default function BookModalTitle(props) {

  const bookTitle = titleCase(formatTitle(props.book.title))
  const bookAuthor = titleCase(props.book.expand?.author?.fullname)

  return (
    <>
        {bookTitle} <span className="italic">by {bookAuthor}</span>
    </>
  )
}
