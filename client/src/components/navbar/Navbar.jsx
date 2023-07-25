import Modal from "../Modal";
import { useState } from "react";
import NewBookForm from "../books/NewBookForm";
import { authenticator } from "../../utils/pb";
import NewAuthorForm from "../NewAuthorForm";

export default function Navbar(props) {

  const [showAddBookModal, setShowAddBookModal] = useState(false)
  const [showAddAuthorModal, setShowAddAuthorModal] = useState(false)

  return (
    <div className="navbar flex-container centre-horizontal">
      <select className="sort-select navbar-item" defaultValue={"Most Relevant"} tabIndex={2} onChange={(e) => props.setSort(e.target.value)}>
        <option className="sort-select-option" vlaue="Most Relevant">Most Relevant</option>
        <option className="sort-select-option" value="Title (A-Z)">Title (A - Z)</option>
        <option className="sort-select-option" value="Title (Z-A)">Title (Z - A)</option>
        <option className="sort-select-option" value="Author (A-Z)">Author (A - Z)</option>
        <option className="sort-select-option" value="Author (Z-A)">Author (Z - A)</option>
        <option className="sort-select-option" value="Relase Date (Ascending)">Relase Date (Ascending)</option>
        <option className="sort-select-option" value="Relase Date (Descending)">Relase Date (Descending)</option>
      </select>
      {props.loggedIn &&
        <button id="add-book-btn" className="btn-main-dark navbar-item" tabIndex={2} onClick={
          () => setShowAddBookModal(true)
        }>Add Book</button>
      }
      {props.loggedIn &&
        <button id="add-book-btn" className="btn-main-dark navbar-item" tabIndex={2} onClick={
          () => setShowAddAuthorModal(true)
        }>Add Author</button>
      }
      {props.loggedIn &&
        <button id="logout-btn" className="btn-main-dark navbar-item" tabIndex={2} onClick={
          () => {
            authenticator.clearAuthStore()
            props.setLoggedIn(authenticator.authStoreIsValid())
          }
        }>Logout</button>
      }
      <Modal show={showAddBookModal} setShow={setShowAddBookModal} modalTitle={"Add New Book"} modalBody={<NewBookForm setShow={setShowAddBookModal} />} />
      <Modal show={showAddAuthorModal} setShow={setShowAddAuthorModal} modalTitle={"Add Author"} modalBody={<NewAuthorForm setShow={setShowAddAuthorModal} />} />
    </div>
  )
}
