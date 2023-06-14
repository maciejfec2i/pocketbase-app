import { addNewBook, handleFormInputChange } from "../utils/utilities";

export default function NewBookForm(props) {
  return (
    <>
      <form className="new-book-form" onSubmit={e => addNewBook({e, formValues: props.formValues, setShow: props.setShow})}>
        <label className="form-label" htmlFor="title">Title</label><br/>
        <input className="form-txt-input" type="text" name="title" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <label className="form-label" htmlFor="author">Author</label><br/>
        <input className="form-txt-input" type="text" name="author" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <label className="form-label" htmlFor="description">Description</label><br/>
        <textarea className="form-txt-input" name="description" id="" cols="30" rows="10" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})}></textarea><br/>
        <label className="form-label" htmlFor="genre">Genre</label><br/>
        <input className="form-txt-input" type="text" name="genre" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <label className="form-label" htmlFor="publishDate">Original Publish Date</label><br/>
        <input className="form-txt-input" type="date" name="publishDate" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <label className="form-label" htmlFor="publisher">Publisher</label><br/>
        <input className="form-txt-input" type="text" name="publisher" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <label className="form-label" htmlFor="coverImgSrc">Cover Image URL</label><br/>
        <input className="form-txt-input" type="text" name="coverImgSrc" onChange={e => handleFormInputChange({e, formValues: props.formValues, setFormValues: props.setFormValues})} /><br/>
        <input className="form-submit-btn" type="submit" />
      </form>
    </>
  )
}
