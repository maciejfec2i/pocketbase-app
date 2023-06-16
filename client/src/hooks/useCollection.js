import { useState, useEffect } from "react";
import { getAll, pb } from "../utils/pb";

export default function useCollection({ collection, sortBy, subscribeToCollection }) {
    const [collectionItems, setCollectionItems] = useState([])
    let unsubscribe

    useEffect(() => {
        async function subscribe() {
            unsubscribe = await pb.collection(collection)
            .subscribe("*", async({ action }) => {
                if(action === "create" || action === "delete") {
                    const collectionItems = await getAll({ collection: collection, sortBy: sortBy })
                    setCollectionItems([...collectionItems])
                }
            })
        }

        async function getCollectionItems() {
            const collectionItems = await getAll({ collection: collection, sortBy: sortBy })
            setCollectionItems([...collectionItems])
        }

        getCollectionItems()

        if(subscribeToCollection) {
            subscribe()
            return () => unsubscribe?.()
        }
    }, [sortBy])

    return collectionItems
}