import { useState } from "react";

export default function useSelectedTab() {
    const [tabs, setTabs] = useState([
        {tabName: "All Books", selected: true},
        {tabName: "My Books", selected: false}
    ])

    return [tabs, setTabs]
}