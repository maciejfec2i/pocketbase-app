import { addData } from "./pb"

function formatTitle(title) {
    const splitTitle = title.toLowerCase().includes(", the") || title.toLowerCase().includes(", a") ? title.split(",") : false 
    return !splitTitle ? title : `${splitTitle[1].replace(" ", "")} ${splitTitle[0]}` 
}

function formatDate(date) {
    const parsedDate = new Date(date)
    return parsedDate.toLocaleDateString("en-UK")
}

function selectSortBy(sort) {
    switch(sort) {
        case "Title (A-Z)":
            return "title"
        case "Title (Z-A)":
            return "-title"
        case "Author (A-Z)":
            return "author"
        case "Author (Z-A)":
            return "-author"
        case "Relase Date (Ascending)":
            return "original_publish_date"
        case "Relase Date (Descending)":
            return "-original_publish_date"
        default:
            return null
    }
}

function handleFormInputChange({e, formValues, setFormValues}) {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}

function addNewBook({e, formValues, setShow}) {
    e.preventDefault()

    const collection= "books"
    const data = {
        title: formValues.title,
        author: formValues.author,
        description: formValues.description,
        genre: formValues.genre,
        original_publish_date: formValues.publishDate,
        publisher: formValues.publisher,
        cover_image_src: formValues.coverImgSrc
    }

    console.log(data)

    addData({collection, data})

    setShow(false)
}

export {
    formatTitle,
    formatDate,
    selectSortBy,
    handleFormInputChange,
    addNewBook
}