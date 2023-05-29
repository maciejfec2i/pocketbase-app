export default function NavbarItem({ tab }) {
  return (
    <li className="navbar-item"><span className={tab.selected ? "selected" : ""}>{tab.tabName}</span></li>
  )
}
