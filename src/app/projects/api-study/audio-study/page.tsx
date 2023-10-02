import { Metadata } from 'next';
import AudioPlayer from "./components/AudioPlayer";
import audioFile from '../../../../../public/audio/outfoxing.mp3';

type Props = {
    params : {
        title: string,
        description: string,
    }
}

const fileName = "/audio/outfoxing.mp3";

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    return {
        title: 'Audio Study',
        description: 'NextJS interpretation of the Audio Study from MDN Guide',
    };
}

export default function AudioStudy() {

    return (
        <div>
            <div>
                <h1>Audio Study from MDN Guide Tutorials</h1>
                <AudioPlayer fileName={audioFile}/>
            </div>
        </div>
    )
}