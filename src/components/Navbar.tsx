import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        <div className="nav__container container">
            <h1><Link href={'/'}>Robótica</Link></h1>
            <ul>
                <li><Link href={'/'}>Listado</Link></li>
                <li><Link href={'/lab'}>Lab</Link></li>
                <li><Link href={'/clase'}>Clase</Link></li>
                <li><Link href={'/info'}>Info</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar