import { useState, useEffect } from "react";
import { getAll, pb } from "../utils/pb";

/**
 * Return all records from a PocketBase collection specified by name. Optionally the collection can be sorted and subscribed to for real time updates.
 * 
 * @param   {obj}     options                         Options for the collection
 * @param   {string}  options.collection              Name of the collection to get records from
 * @param   {string}  options.sortBy                  Record field the collection is to be sorted by (Optional)
 * @param   {boolean} options.subscribeToCollection   A flag specifying whether the collection is to be subscribed to for real time updates (Optional)
 * @returns                                           A list of records from a specified collection
 * 
 * @author Maciej Fec
 * @version 16/06/2023
 */
export default function useCollection({ collection, sortBy, subscribeToCollection }) {
    
    const [collectionItems, setCollectionItems] = useState([])
    let unsubscribe

    useEffect(() => {
        async function subscribe() {
            unsubscribe = await pb.collection(collection)
            .subscribe("*", async ({ action }) => {
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