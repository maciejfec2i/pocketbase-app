import { formatTitle } from "../../utils/utilities"

export default function BookModalTitle(props) {

  const bookTitle = formatTitle(props.book.title)
  const bookAuthor = props.book.author

  return (
    <>
        {bookTitle} <span className="italic">by {bookAuthor}</span>
    </>
  )
}
