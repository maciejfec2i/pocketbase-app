import collections from "../../utils/collections";
import { backendClient } from "../../utils/pb";
import { useState } from "react";
import { formatTitleForDb } from "../../utils/utilities";

export default function NewBookForm(props) {

  const [formValues, setFormValues] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    original_publish_date: "",
    publisher: "",
    cover_image_src: ""
  })

  return (
    <>
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        const record = {...formValues}
        record.title = formatTitleForDb(record.title)
        delete record.author
        backendClient.inCollectionNamed(collections.BOOK_COLLECTION).createRecord(record)
        props.setShow(false)
      }}>
        <label className="form-label" htmlFor="title">Title</label><br/>
        <input className="form-txt-input" type="text" id="title" name="title" onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})} /><br/>
        <label className="form-label" htmlFor="author">Author</label><br/>
        <input className="form-txt-input" type="text" id="author" name="author" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})} /><br/>
        <label className="form-label" htmlFor="description">Description</label><br/>
        <textarea className="form-txt-input" id="description" name="description" cols="30" rows="10" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})}></textarea><br/>
        <label className="form-label" htmlFor="genre">Genre</label><br/>
        <input className="form-txt-input" type="text" id="genre" name="genre" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})} /><br/>
        <label className="form-label" htmlFor="publishDate">Original Publish Date</label><br/>
        <input className="form-txt-input" type="date" id="publishDate" name="original_publish_date" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="publisher">Publisher</label><br/>
        <input className="form-txt-input" type="text" id="publisher" name="publisher" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})} /><br/>
        <label className="form-label" htmlFor="coverImgSrc">Cover Image URL</label><br/>
        <input className="form-txt-input" type="text" id="coverImgSrc" name="cover_image_src" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <input className="form-submit-btn" type="submit" id="submit-new-book" />
      </form>
    </>
  )
}
