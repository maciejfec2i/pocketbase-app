import { useEffect, useState } from "react";
import { getAll, pb } from "../utils/pb";

export default function useGetBooks({sort}) {
    const [books, setBooks] = useState([])
    const collection = "books"

    let unsubscribe

    useEffect(() => {
        async function getBooks() {
            const books = await getAll({collection, sortBy: sort})
            setBooks([...books])
        }

        async function subscribe() {
            unsubscribe = await pb.collection(collection).subscribe("*", async ({action}) => {
                if(action === "create" || action === "delete") {
                    const allBooks = await getAll({collection, sortBy: sort})
                    setBooks([...allBooks])
                }
            })
        }

        getBooks()
        
        subscribe()
        return () => {
            unsubscribe?.("*")
            console.log("Unsubbed")
        }
    }, [sort])

    return books
}