import { useState, useEffect, useRef } from "react";
import { getPaginated, pb } from "../utils/pb";

export default function usePaginatedCollection({ collection, sortBy, subscribeToCollection, itemsPerPage }) {

    const [collectionItems, setCollectionItems] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    const currentPageRef = useRef(1)
    const [currentPage, setCurrentPage] = useState(currentPageRef.current)
    let unsubscribe

    useEffect(() => {
        async function subscribe() {
            unsubscribe = await pb.collection(collection)
            .subscribe("*", async ({ action }) => {
                if(action === "create" || action === "delete") {
                    const page = currentPageRef.current
                    const collectionItems = await getPaginated({ collection, sortBy, page, itemsPerPage })
                    if(page > collectionItems.totalPages) {
                        currentPageRef.current = collectionItems.totalPages
                        setCurrentPage(currentPageRef.current)
                    }
                    setCollectionItems([...collectionItems.items])
                    setTotalPages(collectionItems.totalPages)
                }
            })
        }

        async function getCollectionItems() {
            const page = currentPageRef.current
            const collectionItems = await getPaginated({ collection, sortBy, page, itemsPerPage })
            setCollectionItems([...collectionItems.items])
            setTotalPages(collectionItems.totalPages)
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