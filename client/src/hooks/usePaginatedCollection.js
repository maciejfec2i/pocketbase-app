import { useState, useEffect, useRef } from "react";
import { backendClient } from "../utils/pb";
import { selectSortBy } from "../utils/utilities";
import { actions } from "../utils/actions";

export default function usePaginatedCollection({ collectionName, sortBy, subscribeToCollection, itemsPerPage }) {

    const [collectionItems, setCollectionItems] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const currentPageRef = useRef(1)
    const [currentPage, setCurrentPage] = useState(currentPageRef.current)
    let unsubscribe

    useEffect(() => {
        async function subscribe() {
            unsubscribe = await backendClient.inCollectionNamed(collectionName)
            .listenForChanges("*", async ({ action }) => {
                if(action === actions.CREATE || action === actions.DELETE) {
                    const page = currentPageRef.current
                    const collection = await backendClient.fromCollectionNamed(collectionName)
                        .fromPage(page)
                        .withQueryParams({ sort: selectSortBy(sortBy) })
                        .getRecords({ perPage: itemsPerPage })
                        
                    if(page > collection.totalPages) {
                        currentPageRef.current = collection.totalPages
                        setCurrentPage(collection.totalPages)
                    }
                        
                    setCollectionItems([...collection.items])
                    setTotalPages(collection.totalPages)
                }
            })
        }

        async function getCollectionItems() {
            const page = currentPageRef.current
            const collection = await backendClient.fromCollectionNamed(collectionName)
                .fromPage(page)
                .withQueryParams({ sort: selectSortBy(sortBy) })
                .getRecords({ perPage: itemsPerPage })

            setCollectionItems([...collection.items])
            setTotalPages(collection.totalPages)
        }

        getCollectionItems()

        if(subscribeToCollection) {
            subscribe()
            return () => {
                unsubscribe?.()
            }
        }
    }, [sortBy, currentPage])

    return [collectionItems, totalPages, currentPage, setCurrentPage, currentPageRef]
}