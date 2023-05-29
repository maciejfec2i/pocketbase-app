import NavbarItems from "./NavbarItems";

export default function Navbar(props) {
  return (
    <div className="navbar flex-container centre-horizontal">
        <ul className="navbar-items text-not-selectable flex-container centre-horizontal">
            <NavbarItems tabs={props.tabs} />
        </ul>
        <div className="sort-select-container flex-container">
            <select className="sort-select" defaultValue={"Most Relevant"} onChange={(e) => props.setSort(e.target.value)}>
                <option vlaue="Most Relevant">Most Relevant</option>
                <option value="Title (A-Z)">Title (A - Z)</option>
                <option value="Title (Z-A)">Title (Z - A)</option>
                <option value="Author (A-Z)">Author (A - Z)</option>
                <option value="Author (Z-A)">Author (Z - A)</option>
                <option value="Relase Date (Ascending)">Relase Date (Ascending)</option>
                <option value="Relase Date (Descending)">Relase Date (Descending)</option>
            </select>
            <button className="add-book-btn">Add Book</button>
        </div>
    </div>
  )
}
