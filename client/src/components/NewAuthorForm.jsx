import { useRef, useState } from "react"
import { backendClient } from "../utils/pb"
import collections from "../utils/collections"

export default function NewAuthorForm(props) {

  const [formValues, setFormValues] = useState({
    forename: "",
    surname: "",
    fullname: "",
    dob: "",
    biography: ""
  })
  const fullname = useRef("")

  return(
    <>
      <form className="form" onSubmit={(e) => {
        e.preventDefault()
        const record = {...formValues}
        record.fullname = fullname.current
        backendClient.inCollectionNamed(collections.AUTHOR_COLLECTION).createRecord(record)
        props.setShow(false)
      }}>
        <label className="form-label" htmlFor="forename">Forename</label><br/>
        <input type="text" name="forename" id="forename" className="form-txt-input" autoFocus onChange={(e) => {
          fullname.current = `${e.target.value.toLowerCase()} ${formValues.surname}`
          setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})
        }} /><br/>
        <label className="form-label" htmlFor="surname">Surname</label><br/>
        <input type="text" name="surname" id="surname" className="form-txt-input" onChange={(e) => {
          fullname.current = `${formValues.forename} ${e.target.value.toLowerCase()}`
          setFormValues({...formValues, [e.target.name]: e.target.value.toLowerCase()})
        }} /><br/>
        <label className="form-label" htmlFor="dob">Date of Birth</label><br/>
        <input type="date" name="dob" id="dob" className="form-txt-input" onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})} /><br/>
        <label className="form-label" htmlFor="biography">Biography</label><br/>
        <textarea name="biography" id="biography" className="form-txt-input" cols="30" rows="10" onChange={(e) => setFormValues({...formValues, [e.target.name]: e.target.value})}></textarea>
        <input className="form-submit-btn" type="submit" id="submit-new-author" />
      </form>
    </>
  )
}