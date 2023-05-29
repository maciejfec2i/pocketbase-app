
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

export {
    formatTitle,
    formatDate,
    selectSortBy
}