import PocketBase from "pocketbase"
import { selectSortBy } from "./utilities"

const pb = new PocketBase("http://127.0.0.1:8090")
pb.autoCancellation(false)

async function getAll({collection, sortBy}) {

    const collectionSort = selectSortBy(sortBy)

    const books = await pb.collection(collection)
    .getFullList({
        sort: collectionSort
    })
    return books
}

export {
    getAll
}