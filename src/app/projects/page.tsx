import Link from 'next/link';

export default function Projects() {

    return (
        <>
            <ul>
                <li><Link href="/projects/animation-study">Animation Study</Link></li>
                <li><Link href="/projects/api-study/audio-study">Audio Study</Link></li>
                <li><Link href="/projects/api-study/shopping-list">Shopping List</Link></li>
            </ul>
        </>
    )

}