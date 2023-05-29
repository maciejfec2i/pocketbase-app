import { formatDate, formatTitle } from "../utils/utilities";

export default function Modal(props) {

  const bookTitle = formatTitle(props.book.title)
  const bookAuthor = props.book.author

  if(props.show) return (
    <div className="modal flex-container centre" onClick={() => props.setShow(false)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <p className="modal-title">{props.modalTitle}</p>
            </div>
            <div className="modal-body flex-container">
                {props.modalBody}
            </div>
        </div>
    </div>
  )
}
