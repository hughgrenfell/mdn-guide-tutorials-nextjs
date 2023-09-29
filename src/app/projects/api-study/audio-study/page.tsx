import { Metadata } from 'next';
import AudioPlayer from './components/AudioPlayer';

type Props = {
    params : {
        title: string,
        description: string,
    };
}

const fileName = "./components/outfoxing.mp3";

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    return {
        title: 'Audio Study',
        description: 'NextJS interpretation of the Audio Study from MDN Guide',
    };
}

export default function AudioStudy({ params }: Props) {

    return (
        <div>
            <div>
                <h1>Audio Study from MDN Guide Tutorials</h1>
                <AudioPlayer fileName = {fileName}/>
            </div>
        </div>
    )
}