import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import bild_heart_3 from './pictures/heart.png';
import picture_heart from './pictures/Sample.png'
import video_hug from './videos/VID-20240122-WA0000.mp4';
import audio_hug from './audio/Audio.mp3';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 });
    const videoRef = useRef(video_hug);
    const [randomImages, setRandomImages] = useState([]);
    //add more images to the array, to display more images on the screen
    const images = [bild_heart_3,picture_heart];
    const [audioStarted, setAudioStarted] = useState(false);
    const girlfriendName = "Your Girlfriend's Name";

    const audioRef = useRef();

    const handleLoadedMetadata = () => {
        const videoElement = videoRef.current;
        if (videoElement) {
            const width = videoElement.videoWidth;
            const height = videoElement.videoHeight;
            setVideoDimensions({ width, height });
        }
    };

    const generateRandomPosition = () => {
        const rows = 5; // Anzahl der Reihen
        const columns = 2; // Anzahl der Spalten

        const areaWidth = window.innerWidth / columns;
        const areaHeight = window.innerHeight / rows;

        const randomX = Math.random() * areaWidth + Math.floor(Math.random() * columns) * areaWidth;
        const randomY = Math.random() * areaHeight + Math.floor(Math.random() * rows) * areaHeight;

        return { x: randomX, y: randomY };
    };

    const handleClick = () => {
        const newRandomImages = [];
        for (let i = 0; i < 5; i++) {
            const randomTimeout = Math.floor(Math.random() * 1001) + 1000; // Zufällige Anzeigedauer zwischen 1 und 2 Sekunden
            newRandomImages.push({
                image: images[Math.floor(Math.random() * images.length)],
                position: generateRandomPosition(),
                timeout: randomTimeout
            });
        }
        setRandomImages(prevImages => [...prevImages, ...newRandomImages]);
    };

    useEffect(() => {
        if(audioStarted){
            handleClick();
            const intervalId = setInterval(handleClick, 3000);

            return () => clearInterval(intervalId);
        } else {

        }

    }, []);

    useEffect(() => {
        const timeouts = randomImages.map(({ timeout }, index) => {
            return setTimeout(() => {
                setRandomImages(prevImages => {
                    const updatedImages = [...prevImages];
                    updatedImages.splice(index, 1);
                    return updatedImages;
                });
            }, timeout);
        });

        return () => timeouts.forEach(clearTimeout);
    }, [randomImages]);

    const handleAudioPlay = () => {
        if (!audioStarted) {
            audioRef.current.play();
            const intervalId = setInterval(handleClick, 3000);
            setAudioStarted(true);
        }
    };

    useEffect(() => {
        // Event-Listener für Klicks hinzufügen
        const handleClickAnywhere = () => {
            handleAudioPlay(); // Musik abspielen, wenn der Benutzer irgendwo klickt
        };

        document.addEventListener('click', handleClickAnywhere);

        // Event-Listener entfernen, wenn die Komponente unmontiert wird
        return () => {
            document.removeEventListener('click', handleClickAnywhere);
        };
    }, []);

    return (
        <div className="background-image" onClick={handleAudioPlay}>
            <div className="container-fluid">
                { audioStarted && <div className="align-content-center">
                    <div className="col text-center">
                        <h1 className="my-text"> {girlfriendName} do you wanna be my Valentine?</h1>
                    </div>
                </div> }
                { !audioStarted && <div className="align-content-center">
                    <div className="col text-center">
                        <h1 className="my-text">just touch the screen and turn on sound :) </h1>
                    </div>
                </div> }
                <div className="row">
                    <div className="audio-container">
                        <audio
                            ref={audioRef}
                            src={audio_hug}
                            autoPlay
                            className="w-100"
                        >
                            Your browser does not support the
                            <code>audio</code> element.
                        </audio>
                    </div>
                </div>

                {randomImages.map((randomImage, index) => (
                    <img
                        key={index}
                        src={randomImage.image}
                        className="img-fluid"
                        style={{
                            position: 'absolute',
                            left: Math.min(randomImage.position.x, window.innerWidth - 100), // Berücksichtigen der Bildbreite
                            top: Math.min(randomImage.position.y, window.innerHeight - 100), // Berücksichtigen der Bildhöhe
                            width: '50%',
                            height: 'auto'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
