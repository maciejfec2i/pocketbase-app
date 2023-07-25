import collections from "../../utils/collections";
import { backendClient } from "../../utils/pb";
import { useRef, useState } from "react";
import { formatTitleForDb } from "../../utils/utilities";
import Authors from "../authors/Authors";
import usePaginatedCollection from "../../hooks/usePaginatedCollection";
import { useEffect } from "react";

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
  const [authorName, setAuthorName] = useState("")
  const [authors] = usePaginatedCollection({
    collectionName: collections.AUTHOR_COLLECTION,
    itemsPerPage: 20,
    page: 1,
    queryParams: {sort: "surname", filter: authorName.trim().length > 0 ? `fullname ~ "${authorName}"` : ""},
    subscribeToCollection: false,
    useEffectParams: [authorName]
  })

  const authorSelectRef = useRef()
  useEffect(() => {
    setFormValues({...formValues, ["author"]: authorSelectRef.current.value})
  }, [authors])

  return (
    <>
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        const record = {...formValues}
        record.title = formatTitleForDb(record.title.toLowerCase())
        backendClient.inCollectionNamed(collections.BOOK_COLLECTION).createRecord(record)
        props.setShow(false)
      }}>
        <label className="form-label" htmlFor="title">Title</label><br/>
        <input className="form-txt-input" type="text" id="title" name="title" autoFocus value={formValues.title} onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="author">Author</label><br/>
        <input className="form-txt-input" type="text" id="author" name="author" value={authorName} onChange={(e) => {
          setAuthorName(e.target.value)
        }} /><br/>
        <select name="authors" id="authors" className="form-txt-input" size={5} ref={authorSelectRef} value={formValues.author === "" ? authors[0]?.id : formValues.author}  
        onChange={(e) => {
          setFormValues({...formValues, ["author"]: e.target.value})
        }}>
          <Authors authors={authors} selectedAuthor={formValues.author} />
        </select><br/>
        <label className="form-label" htmlFor="description">Description</label><br/>
        <textarea className="form-txt-input" id="description" name="description" value={formValues.description} cols="30" rows="10" onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})}></textarea><br/>
        <label className="form-label" htmlFor="genre">Genre</label><br/>
        <input className="form-txt-input" type="text" id="genre" name="genre" value={formValues.genre} onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="publishDate">Original Publish Date</label><br/>
        <input className="form-txt-input" type="date" id="publishDate" name="original_publish_date" value={formValues.original_publish_date} onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="publisher">Publisher</label><br/>
        <input className="form-txt-input" type="text" id="publisher" name="publisher" value={formValues.publisher} onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="coverImgSrc">Cover Image URL</label><br/>
        <input className="form-txt-input" type="text" id="coverImgSrc" name="cover_image_src" value={formValues.cover_image_src} onChange={e => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <input className="form-submit-btn" type="submit" id="submit-new-book" />
      </form>
    </>
  )
}
