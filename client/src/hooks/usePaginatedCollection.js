import { useState, useEffect } from "react";
import { backendClient } from "../utils/pb";
import { actions } from "../utils/actions";

export default function usePaginatedCollection({ collectionName, itemsPerPage, page, queryParams, subscribeToCollection, useEffectParams }) {

    const [collectionItems, setCollectionItems] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    
    let unsubscribe

    useEffect(() => {
        async function getCollectionItems() {
            const collection = await backendClient.fromCollectionNamed(collectionName)
                .fromPage(page)
                .withQueryParams(queryParams)
                .getRecords({ perPage: itemsPerPage })

            if(collection) {
                setCollectionItems([...collection.items])
                setTotalPages(collection.totalPages)
            }
        }
        
        async function subscribe() {
            unsubscribe = await backendClient.inCollectionNamed(collectionName)
            .listenForChanges("*", async ({ action }) => {
                if(action === actions.CREATE || action === actions.DELETE) {
                    getCollectionItems()
                }
            })
        }

        getCollectionItems()
        
        if(subscribeToCollection) {
            subscribe()
            return () => {
                unsubscribe?.()
            }
        }
    }, useEffectParams ? useEffectParams : [])

    return [collectionItems, totalPages]
}