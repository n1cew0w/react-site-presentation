import React, {useRef, useState} from 'react';

import video from "../../video/OG Buda - Откровения (feat. Feduk).mp4";


function PlayPauseVideo(props) {
    const vidRef = useRef(null);
    const [play, setPlay] = useState(false)
    const VideoPlay = () => {
        vidRef.current.play();
        setPlay(true)
    }
    const VideoPause = () => {
        vidRef.current.pause();
        setPlay(false)

    }
    return (
        <>
            <video
                ref={vidRef}
                className="absolute w-full l-full top-1/2 h-full object-cover transform -translate-y-1/2  -z-10"
                loop
            >
                <source src={video} type="video/mp4"/>
            </video>
            <div className="flex">
                <button onClick={play === false ? VideoPlay : VideoPause}
                        className="text-main flex text-8xl text-red-600 mx-auto mt-[35rem]">Play
                </button>
            </div>
        </>


    );
}

export default PlayPauseVideo;