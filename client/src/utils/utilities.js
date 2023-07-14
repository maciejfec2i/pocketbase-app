import { backendClient } from "./pb"
import collections from "./collections"

function formatTitle(title) {
    const splitTitle = title.toLowerCase().includes(", the") || title.toLowerCase().includes(", a") ? title.split(",") : false 
    return !splitTitle ? title : `${splitTitle[1].replace(" ", "")} ${splitTitle[0]}` 
}

function formatTitleForDb(title) {
    const toIgnore = ["a", "an", "the"]
    const splitTitle = title.split(" ")

    if(toIgnore.includes(splitTitle[0])) {
        splitTitle[0] = `, ${splitTitle[0]}`
        return splitTitle.slice(1).join(" ") + splitTitle[0]
    }

    return splitTitle.join(" ")
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
            return "author.surname"
        case "Author (Z-A)":
            return "-author.surname"
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

function changePage({ currentPage, setCurrentPage, direction }) {
    if(direction === "next") setCurrentPage(currentPage + 1)
    if(direction === "prev") setCurrentPage(currentPage - 1)
}

export {
    formatTitle,
    formatTitleForDb,
    formatDate,
    selectSortBy,
    handleFormInputChange,
    changePage
}