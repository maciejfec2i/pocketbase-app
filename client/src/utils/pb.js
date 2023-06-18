import PocketBase from "pocketbase"
import { selectSortBy } from "./utilities"

const pb = new PocketBase("http://127.0.0.1:8090")
pb.autoCancellation(false)

async function getAll({ collection, sortBy }) {

    const sort = selectSortBy(sortBy)

    const collectionItems = await pb.collection(collection)
    .getFullList({
        sort: sort
    })

    return collectionItems
}

async function getPaginated({ collection, sortBy, page, itemsPerPage }) {

    const sort = selectSortBy(sortBy)

    const paginatedCollection = await pb.collection(collection)
    .getList(page, itemsPerPage, {
            sort: sort
    })
    const totalPages = Math.ceil(paginatedCollection.totalItems / itemsPerPage)

    return { items: paginatedCollection.items, totalPages: totalPages }   
}

async function addData({ collection, data }) {
    return await pb.collection(collection).create(data)
}

export {
    getAll,
    getPaginated,
    addData,
    pb
}