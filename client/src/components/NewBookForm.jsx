import { addNewBook, handleFormInputChange } from "../utils/utilities";
import useNewBookForm from "../hooks/useNewBookForm";

export default function NewBookForm(props) {

  const [formValues, setFormValues] = useNewBookForm()

  return (
    <>
      <form className="form" onSubmit={e => addNewBook({e, formValues: formValues, setShow: props.setShow})}>
        <label className="form-label" htmlFor="title">Title</label><br/>
        <input className="form-txt-input" type="text" id="title" name="title" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <label className="form-label" htmlFor="author">Author</label><br/>
        <input className="form-txt-input" type="text" id="author" name="author" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <label className="form-label" htmlFor="description">Description</label><br/>
        <textarea className="form-txt-input" id="description" name="description" cols="30" rows="10" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})}></textarea><br/>
        <label className="form-label" htmlFor="genre">Genre</label><br/>
        <input className="form-txt-input" type="text" id="genre" name="genre" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <label className="form-label" htmlFor="publishDate">Original Publish Date</label><br/>
        <input className="form-txt-input" type="date" id="publishDate" name="publishDate" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <label className="form-label" htmlFor="publisher">Publisher</label><br/>
        <input className="form-txt-input" type="text" id="publisher" name="publisher" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <label className="form-label" htmlFor="coverImgSrc">Cover Image URL</label><br/>
        <input className="form-txt-input" type="text" id="coverImgSrc" name="coverImgSrc" onChange={e => handleFormInputChange({e, formValues: formValues, setFormValues: setFormValues})} /><br/>
        <input className="form-submit-btn" type="submit" id="submit-new-book" />
      </form>
    </>
  )
}
