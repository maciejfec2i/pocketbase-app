import { useState, useEffect } from "react";
import { getPaginated, pb } from "../utils/pb";

export default function usePaginatedCollection({ collection, sortBy, subscribeToCollection, page, itemsPerPage }) {

    const [collectionItems, setCollectionItems] = useState([])
    const [totalPages, setTotalPages] = useState(1)
    let unsubscribe

    useEffect(() => {
        async function subscribe() {
            unsubscribe = await pb.collection(collection)
            .subscribe("*", async ({ action }) => {
                if(action === "create" || action === "delete") {
                    const collectionItems = await getPaginated({ collection, sortBy, page, itemsPerPage })
                    setCollectionItems([...collectionItems.items])
                    setTotalPages(collectionItems.totalPages)
                }
            })
        }

        async function getCollectionItems() {
            const collectionItems = await getPaginated({ collection, sortBy, page, itemsPerPage })
            setCollectionItems([...collectionItems.items])
            setTotalPages(collectionItems.totalPages)
        }

        getCollectionItems()

        if(subscribeToCollection) {
            subscribe()
            return () => unsubscribe?.()
        }
    }, [sortBy, page])

    return [collectionItems, totalPages]
}