import NavbarItems from "./NavbarItems";
import Modal from "../Modal";
import { useState } from "react";
import NewBookForm from "../NewBookForm";

export default function Navbar(props) {

  const [show, setShow] = useState(false)

  return (
    <div className="navbar flex-container centre-horizontal">
        <div className="sort-select-container flex-container">
            <select className="sort-select" defaultValue={"Most Relevant"} onChange={(e) => props.setSort(e.target.value)}>
                <option vlaue="Most Relevant">Most Relevant</option>
                <option value="Title (A-Z)">Title (A - Z)</option>
                <option value="Title (Z-A)">Title (Z - A)</option>
                <option value="Author (A-Z)">Author (A - Z)</option>
                <option value="Author (Z-A)">Author (Z - A)</option>
                <option value="Relase Date (Ascending)">Relase Date (Ascending)</option>
                <option value="Relase Date (Descending)">Relase Date (Descending)</option>
            </select>
            <button className="add-book-btn" onClick={() => {setShow(true)}}>Add Book</button>
            <Modal show={show} setShow={setShow} modalTitle={"Add New Book"} modalBody={<NewBookForm formValues={props.formValues} setFormValues={props.setFormValues} setShow={setShow} />} />
        </div>
    </div>
  )
}
