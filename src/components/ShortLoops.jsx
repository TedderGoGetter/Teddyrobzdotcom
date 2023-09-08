import * as Tone from 'tone';
import Drums from '../assets/NPL1drms.mp3'
import Instruments from '../assets/NPL1inst.mp3'
import Sparkles from '../assets/NPL1sprk.mp3'
import { useState, useEffect, useRef } from 'react';

function ShortLoops() {

    //All three of my samplers. Could they be just one with multiple outputs??
    const dSampler = new Tone.Sampler({
        urls: {
            A1: "NPL1drms-1b4c525a.mp3",
        },
        baseUrl: "https://teddyrobz.vercel.app/assets/",
    }).toDestination();

    const iSampler = new Tone.Sampler({
        urls: {
            A1: "NPL1inst-117698bb.mp3",
        },
        baseUrl: "https://teddyrobz.vercel.app/assets/",
    }).toDestination();

    const sSampler = new Tone.Sampler({
        urls: {
            A1: "NPL1sprk-01fbd5e4.mp3",
        },
        baseUrl: "https://teddyrobz.vercel.app/assets/",
    }).toDestination();

    //Volume knobs
    // dSampler.volume.value = -12;
    iSampler.volume.value = -12;
    sSampler.volume.value = -12;
    
    Tone.Transport.bpm.value = 81;
    //Is this also the master bpm?

    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events


        dSampler.triggerAttackRelease(["A1"], 100);
        iSampler.triggerAttackRelease(["A1"], 100);
        sSampler.triggerAttackRelease(["A1"], 100);
    },"4:0:0");
    // transport must be started before it starts invoking events

    function PressPlay() {
        Tone.start()
        Tone.Transport.start();
        console.log('note played')
        console.log(dSampler.volume.value)
    }

    function PressStop() {
        Tone.Transport.stop();
    }



    const [dVol, setDVol] = useState(-12)

    const drumRef = useRef(dSampler)

    useEffect(() => {
        drumRef.current.volume.value = dVol
    }, [dVol])

    // I feel like this could be done inline in the onchange??
    const ChangeDrums = (e) => {
        // console.log(event.target.value);
        setDVol(e.target.value);
      };

    return (
        <>
        drum volume is {dVol}
        <input 
        onChange={ChangeDrums} 
        type="range" 
        min={-20} 
        max={20}
        />

        <button onClick={PressPlay}>Play</button>
        <button onClick={PressStop}>Stop</button>
        </>
    )
}

export default ShortLoops