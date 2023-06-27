import PocketBase from "pocketbase"
import { selectSortBy } from "./utilities"

class PocketBaseClient {

    #pocketBaseInstance
    #collectionName
    #queryParams
    #pageNumber
    
    constructor(pocketBaseInstance) {
        this.#pocketBaseInstance = pocketBaseInstance
        this.#collectionName = ""
        this.#queryParams = {}
        this.#pageNumber = 1
    }

    fromCollectionNamed(collectionName) {
        this.#collectionName = collectionName
        return this
    }

    inCollectionNamed(collectionName) {
        this.#collectionName = collectionName
        return this
    }

    withQueryParams(queryParams) {
        this.#queryParams = queryParams
        return this
    }

    fromPage(pageNumber) {
        this.#pageNumber = pageNumber
        return this
    }

    async getAllRecords() {
        return await this.#pocketBaseInstance
            .collection(this.#collectionName)
            .getFullList(this.#queryParams)
    }

    async getRecords({ perPage }) {
        const paginatedCollection = await this.#pocketBaseInstance
            .collection(this.#collectionName)
            .getList(this.#pageNumber, perPage, this.#queryParams)

        let totalPages = Math.ceil(paginatedCollection.totalItems / perPage)
        totalPages = totalPages === 0 ? totalPages += 1 : totalPages

        return {items: paginatedCollection.items, totalPages: totalPages}
    }

    async createRecord(record) {
        return await this.#pocketBaseInstance
            .collection(this.#collectionName)
            .create(record)
    }

    async listenForChanges(topic, callback) {
        return pb.collection(this.#collectionName)
            .subscribe(topic, callback)
    }
}

const pb = new PocketBase("http://127.0.0.1:8090")
pb.autoCancellation(false)

async function authUser({ event, email, password, setLoggedIn }) {
    event.preventDefault()
    const authData = await pb.collection("users").authWithPassword(email, password)
    console.log(authData)
}

const backendClient = new PocketBaseClient(pb)

export {
    authUser,
    backendClient
}