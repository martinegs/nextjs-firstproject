import Link from "next/link";

function NavBar() {
  return (
    <nav className="bg-green-600 py-4 flex justify-center space-x-8 rounded-lg hover:text-2xl"> 
      <Link href="/" className="text-white hover:text-gray-300 ">
        Home
      </Link>
      <ul className="flex space-x-8 list-none"> {/* Lista horizontal, sin estilo de lista */}
        <li>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
        </li>
        {/* Puedes agregar más elementos de lista para otros enlaces */}
      </ul>
    </nav>
  );
}

export default NavBar;
