'use client'

import { useState, useRef } from 'react';

type Props = {
    fileName: string,
}

export default function AudioPlayer({ fileName }: Props) {
    const [isPlaying, setIsPlaying] = useState('Play');
    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeRef = useRef<HTMLInputElement>(null);

    function play() {
        console.log(fileName);
        if (isPlaying === 'Play') {
            setIsPlaying('Pause');
            audioRef.current?.play();
        } else {
            setIsPlaying('Play');
            audioRef.current?.pause();
        }
    }

    function slideVolume() {
        if(!!audioRef.current && !!volumeRef.current) {
            audioRef.current.volume = Number(volumeRef.current.value);
        }
    }

    return(
        <div>
            <audio src={fileName} ref={audioRef}></audio>
            <br/>
            <button className="paused" onClick={play}>{isPlaying}</button>
            <br/>
            <input title="volume-controller" type="range" ref={volumeRef} min="0" max="1" step="0.01" defaultValue="1" className="volume" onChange={slideVolume}/>   
        </div>
    )
}