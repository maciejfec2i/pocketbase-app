import PocketBase from "pocketbase"

class PbRequestBuilder {

    _collectionName = ""
    _queryParams = {}
    _pageNumber = 1
    
    fromCollectionNamed(collectionName) {
        this._collectionName = collectionName
        return this
    }

    inCollectionNamed(collectionName) {
        this._collectionName = collectionName
        return this
    }

    withQueryParams(queryParams) {
        this._queryParams = queryParams
        return this
    }

    fromPage(pageNumber) {
        this._pageNumber = pageNumber
        return this
    }
}

class PocketBaseClient extends PbRequestBuilder {

    #pocketBaseInstance
    
    constructor(pocketBaseInstance) {
        super()
        this.#pocketBaseInstance = pocketBaseInstance
    }

    async getAllRecords() {
        return await this.#pocketBaseInstance
            .collection(this._collectionName)
            .getFullList(this._queryParams)
    }

    async getRecords({ perPage }) {
        const paginatedCollection = await this.#pocketBaseInstance
            .collection(this._collectionName)
            .getList(this._pageNumber, perPage, this._queryParams)

        let totalPages = Math.ceil(paginatedCollection.totalItems / perPage)
        totalPages = totalPages === 0 ? totalPages += 1 : totalPages

        return {items: paginatedCollection.items, totalPages: totalPages}
    }

    async createRecord(record) {
        return await this.#pocketBaseInstance
            .collection(this._collectionName)
            .create(record)
    }

    async listenForChanges(topic, callback) {
        return this.#pocketBaseInstance.collection(this._collectionName)
            .subscribe(topic, callback)
    }
}

class PocketBaseClientAuthenticator {

    #backendClient
    #usernameOrEmail
    #password

    constructor(backendClient) {
        this.#backendClient = backendClient
        this.#usernameOrEmail = ""
        this.#password = ""
    }

    withCredentials({ usernameOrEmail, password }) {
        this.#usernameOrEmail = usernameOrEmail
        this.#password = password

        return this
    }

    async authenticateAs(userType) {
        try {
            switch(userType.toLowerCase()) {
                case "admin":
                    await this.#backendClient.admins.authWithPassword(this.#usernameOrEmail, this.#password)
                    break
                case "user":
                    await this.#backendClient.collection("users").authWithPassword(this.#usernameOrEmail, this.#password)
                    break
            }
        }
        catch(err) {
            console.log(err.data.message)
            return { error: err.data.message }
        }
    }

    clearAuthStore() {
        this.#backendClient.authStore.clear()
    }

    authStoreIsValid() {
        return this.#backendClient.authStore.isValid
    }
}

const POCKET_BASE_INSTANCE = new PocketBase("http://127.0.0.1:8090")
POCKET_BASE_INSTANCE.autoCancellation(false)

const backendClient = new PocketBaseClient(POCKET_BASE_INSTANCE)
const authenticator = new PocketBaseClientAuthenticator(POCKET_BASE_INSTANCE)

export {
    backendClient,
    authenticator
}