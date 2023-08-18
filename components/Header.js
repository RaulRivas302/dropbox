import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-900 text-white sticky top-0 z-10 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/home" className="text-2xl font-bold">Dropbox Integration</Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li><Link href="/home" className="hover:text-blue-300">Home</Link></li>
                        <li><Link href="/about" className="hover:text-blue-300">About</Link></li>
                        <li><Link href="/login" className="hover:text-blue-300">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>

    );
}

export default Header;
