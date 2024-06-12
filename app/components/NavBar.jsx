import Link from "next/link"

function NavBar (){
    return (
        <nav>
            <Link href="/"> Home</Link>
            <ul>
                <li>
                    <Link href={"/about"}>
                    About
                    </Link>
                </li>
            </ul>
        </nav>
    )
  }


export default NavBar