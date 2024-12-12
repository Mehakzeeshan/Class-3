import Link from "next/link";

function Header() {
    return(
        <header className="flex  justify-between">
            {/* Logo */}
            <div>
                <h2 className="text-3xl font-semibold">My Portfolio</h2>
            </div>
            {/* Links */}
            <div>
                <nav>
                    <ul className="flex gap-x-4">
                        <li>
                            <Link href="/">Home</Link>
                            </li>
                        <li>
                        <Link href="/about">About</Link>
                        </li>
                        <li>
                        <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>


             {/* Button  */}
        </header>
    )
}

export default Header