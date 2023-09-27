import { Metadata } from 'next';
import style from './alicestyle.module.css';
import SpinningAlice from './components/SpinningAlice';

type Props = {
    params : {
        title: string,
        description: string,
    }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    return {
        title: 'Animation Study',
        description: 'NextJS interpretation of the Animation Study from MDN Guide',
    };
}

export default function AnimationStudy({ params }: Props) {
 
    return (
        <div className='flex flex-col'>
            <h1>Animation Study - Spinning Alice</h1>
            <div className={style.body}>
                <SpinningAlice />
            </div>
        </div>
    )
}