import { useEffect, useState } from "react";
import { getAll } from "../utils/pb";

export default function useGetBooks({sort}) {
    const [books, setBooks] = useState([])

    useEffect(() => {
        async function getBooks() {
            const collection = "books"
            const books = await getAll({collection, sortBy: sort})
            setBooks([...books])
        }
        getBooks()
    }, [sort])

    return books
}