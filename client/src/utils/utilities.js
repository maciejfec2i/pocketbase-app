import { backendClient } from "./pb"

function formatTitle(title) {
    const splitTitle = title.toLowerCase().includes(", the") || title.toLowerCase().includes(", a") ? title.split(",") : false 
    return !splitTitle ? title : `${splitTitle[1].replace(" ", "")} ${splitTitle[0]}` 
}

function formatAuthorName(authorName) {
    const splitName = authorName.split(", ")
    return `${splitName[1]} ${splitName[0]}`
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

function handleFormInputChange({ e, formValues, setFormValues }) {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}

function addNewBook({ e, formValues, setShow }) {
    e.preventDefault()

    const splitTitle = formValues.title.split(" ")
    if(splitTitle[0].toLowerCase() === "the" || splitTitle[0].toLowerCase() === "a") {
        splitTitle[0] = `, ${splitTitle[0]}`
        formValues.title = splitTitle.slice(1).join(" ") + splitTitle[0]
    }

    const splitAuthor = formValues.author.split(" ")
    formValues.author = `${splitAuthor[splitAuthor.length - 1]}, ${splitAuthor.splice(0, splitAuthor.indexOf(splitAuthor[splitAuthor.length - 1]))}`

    const collection= "books"
    const record = {
        title: formValues.title.toLowerCase(),
        author: formValues.author.toLowerCase(),
        description: formValues.description,
        genre: formValues.genre.toLowerCase(),
        original_publish_date: formValues.publishDate,
        publisher: formValues.publisher.toLowerCase(),
        cover_image_src: formValues.coverImgSrc
    }

    backendClient.inCollectionNamed(collection).createRecord(record)
    setShow(false)
}

function changePage({ setCurrentPage, currentPageRef, direction }) {
    if(direction === "next") {
        currentPageRef.current += 1
        setCurrentPage(currentPageRef.current)
    }
    if(direction === "prev") {
        currentPageRef.current -= 1
        setCurrentPage(currentPageRef.current)
    }
}

export {
    formatTitle,
    formatAuthorName,
    formatDate,
    selectSortBy,
    handleFormInputChange,
    addNewBook,
    changePage
}