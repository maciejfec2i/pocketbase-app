import NavbarItem from "./NavbarItem"

export default function NavbarItems({ tabs }) {
  return (
    tabs.map(tab => {
        return <NavbarItem key={crypto.randomUUID()} tab={tab} />
    })
  )
}
