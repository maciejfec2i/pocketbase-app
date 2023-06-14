import { useState } from "react";

export default function useNewBookForm() {
    const [formValues, setFormValues] = useState({
        title: "",
        author: "",
        description: "",
        genre: "",
        publishDate: "",
        publisher: "",
        coverImgSrc: ""
    })

    return [formValues, setFormValues]
}