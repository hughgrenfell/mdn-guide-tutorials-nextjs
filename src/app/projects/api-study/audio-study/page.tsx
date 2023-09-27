'use client'

import { useState, useRef } from 'react';

export default function AudioStudy() {

    const [isPlaying, setIsPlaying] = useState('Play');
    const audioRef = useRef<HTMLAudioElement>(null);
    const volumeRef = useRef<HTMLInputElement>(null);

    function play() {
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

    return (
        <div>
            <div>
                <h1>Audio Study from MDN Guide Tutorials</h1>
                <audio src="/audio/outfoxing.mp3" ref={audioRef}></audio>
                <br/>
                <button className="paused" onClick={play}>{isPlaying}</button>
                <br/>
                <input title="volume-controller" type="range" ref={volumeRef} min="0" max="1" step="0.01" defaultValue="1" className="volume" onChange={slideVolume}/>
            </div>
        </div>
    )
}