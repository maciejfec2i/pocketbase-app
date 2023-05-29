import { useState } from "react";

export default function useCurrentSort() {
    const [sort, setSort] = useState("Most Relevant")

    return [sort, setSort]
}