import React, {useRef, useState} from 'react';
import video from "../video/OG Buda - Откровения (feat. Feduk).mp4";
import video1 from "../video/OG Buda - Грязный (feat. Scally Milano & 163ONMYNECK).mp4"
import video2 from "../video/OG Buda & 163ONMYNECK — На кассе (Премьера клипа).mp4";
import video3 from "../video/OG BUDA - ТГК (ПРЕМЬЕРА КЛИПА, 2022).mp4"
import '../App.css'
const arr = [video,video1,video2,video3]

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
const PlayPauseVideo = (props) => {
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


        const MoveButton = () => {
            document.getElementById("button-hide").classList.add('hideButton')
            document.getElementById("button-show").classList.add('showButton')

            for (let i = 0; i < 5; i++) {

                i++;
            }
        }


        const handleClick =()=>{
            if (play === false){
                VideoPlay()
            }
            else{
                VideoPause()
            }
            MoveButton()

        }

    return (
        <>
            <video
                ref={vidRef}
                className="absolute w-full l-full top-1/2 h-full object-cover transform -translate-y-1/2  -z-10"
                loop
            >
                <source src={arrayRandElement(arr)} type="video/mp4"/>
            </video>
            <div className="flex">
                <button onClick={handleClick}
                        id="button-hide"
                        className="text-main flex text-9xl text-red-600 mx-auto mt-[15rem]">Play
                </button>
            </div>
            <div id="button-show" className=" text-main  text-[220px] text-red-600 flex mx-auto justify-center opacity-0">
                <div className="ml-966">

                    <div className='flex'>n1cew0w</div>
                    <div className="flex justify-center">
                        <a
                            href="https://t.me/n1cew0w1337"
                            className="flex justify-center mr-7">
                                <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"
                                     preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
                                    <path fill="red"
                                          d="M128,0 C57.307,0 0,57.307 0,128 L0,128 C0,198.693 57.307,256 128,256 L128,256 C198.693,256 256,198.693 256,128 L256,128 C256,57.307 198.693,0 128,0 L128,0 Z"
                                          className="color40B3E0 svgShape"/>
                                    <path fill="#fff"
                                          d="M190.2826,73.6308 L167.4206,188.8978 C167.4206,188.8978 164.2236,196.8918 155.4306,193.0548 L102.6726,152.6068 L83.4886,143.3348 L51.1946,132.4628 C51.1946,132.4628 46.2386,130.7048 45.7586,126.8678 C45.2796,123.0308 51.3546,120.9528 51.3546,120.9528 L179.7306,70.5928 C179.7306,70.5928 190.2826,65.9568 190.2826,73.6308"
                                          className="colorFFF svgShape"/>
                                    <path fill="#d2e5f1"
                                          d="M98.6178,187.6035 C98.6178,187.6035 97.0778,187.4595 95.1588,181.3835 C93.2408,175.3085 83.4888,143.3345 83.4888,143.3345 L161.0258,94.0945 C161.0258,94.0945 165.5028,91.3765 165.3428,94.0945 C165.3428,94.0945 166.1418,94.5735 163.7438,96.8115 C161.3458,99.0505 102.8328,151.6475 102.8328,151.6475"
                                          className="colorD2E5F1 svgShape"/>
                                    <path fill="#b5cfe4"
                                          d="M122.9015,168.1154 L102.0335,187.1414 C102.0335,187.1414 100.4025,188.3794 98.6175,187.6034 L102.6135,152.2624"
                                          className="colorB5CFE4 svgShape"/>
                                </svg>
                        </a>
                        <a
                            href="https://steamcommunity.com/id/n1cew0w10/"
                            className="flex justify-center mr-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 32 32">
                                <path fill="red"
                                      d="M15.974 0c-8.401 0-15.292 6.479-15.943
                                       14.714l8.573 3.547c0.729-0.495 1.604-0.786
                                        2.552-0.786 0.083 0 0.167 0.005 0.25 0.005l3.813-5.521v-0.078c0-3.328
                                         2.703-6.031 6.031-6.031s6.036 2.708 6.036 6.036c0 3.328-2.708 6.031-6.036
                                          6.031h-0.135l-5.438 3.88c0 0.073 0.005 0.141 0.005 0.214 0 2.5-2.021 4.526-4.521
                                           4.526-2.177 0-4.021-1.563-4.443-3.635l-6.135-2.542c1.901 6.719 8.063 11.641 15.391
                                            11.641 8.833 0 15.995-7.161 15.995-16s-7.161-16-15.995-16zM10.052 24.281l-1.964-0.813c0.349
                                             0.724 0.953 1.328 1.755 1.667 1.729 0.719 3.724-0.104 4.443-1.833 0.349-0.844 0.349-1.76
                                              0.005-2.599-0.344-0.844-1-1.495-1.839-1.844-0.828-0.349-1.719-0.333-2.5-0.042l2.026 0.839c1.276
                                               0.536 1.88 2 1.349 3.276s-2 1.88-3.276 1.349zM25.271 11.875c0-2.214-1.802-4.021-4.016-4.021-2.224 0-4.021 1.807-4.021 4.021 0 2.219 1.797 4.021 4.021 4.021 2.214 0 4.016-1.802 4.016-4.021zM18.245 11.87c0-1.672 1.349-3.021 3.016-3.021s3.026 1.349 3.026 3.021c0 1.667-1.359 3.021-3.026 3.021s-3.016-1.354-3.016-3.021z"
                                      className="color000 svgShape"/></svg>
                        </a>
                        <a
                            href="https://discordapp.com/users/278286160927784962/"
                            className="flex justify-center mr-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 30 30">
                                <path fill="red"
                                      d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"
                                      className="color000 svgShape"/>
                            </svg>
                        </a>
                        <a
                            href="https://github.com/n1cew0w"
                            className="flex justify-center mr-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">
                                <svg  width="288" height="288" viewBox="0 0 50 50">
                                    <path fill="red"
                                          d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"
                                          className="color000 svgShape"/>
                                </svg>
                            </svg>
                        </a>
                    </div>
                </div>


            </div>


        </>


    );
};

export default PlayPauseVideo;

