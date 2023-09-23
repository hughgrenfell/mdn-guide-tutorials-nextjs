import Link from 'next/link';

export default function NavBar() {

    return (
        <nav className="flex flex-row bg-black text-white pl-4 py-4">
            <ul className="flex justify-start font-bold relative">
                <li className="flex pr-8 text-3xl"><Link href="/">Home Page</Link></li>
                <li className="flex pr-8 text-3xl"><Link href="/projects">Projects Page</Link></li>
            </ul>
        </nav>
    )

}