import * as Tone from 'tone';
import Drums from '../assets/NPL1drms.mp3'  //these imports seem useless but vercel only deploys assets when imported.
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

    //Old olume knobs
    // dSampler.volume.value = -12;
    // iSampler.volume.value = -12;
    // sSampler.volume.value = -12;
    
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


    // drum volume fader. (simplify this code.)
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

    //
    const [instVol, setInstVol] = useState(-12)

    const instRef = useRef(iSampler)

    useEffect(() => {
        instRef.current.volume.value = instVol
    }, [instVol])

    const ChangeInst = (e) => {
    // console.log(event.target.value);
    setInstVol(e.target.value);
    };

    //
    const [sprkVol, setSprkVol] = useState(-12)

    const sprkRef = useRef(sSampler)

    useEffect(() => {
        sprkRef.current.volume.value = sprkVol
        }, [sprkVol])

    const ChangeSpark = (e) => {
        // console.log(event.target.value);
        setSprkVol(e.target.value);
        };

    

    return (
        <>
        drum volume is {dVol}
        <input 
        onChange={ChangeDrums} 
        type="range" 
        min={-100} 
        max={20}
        />
        <br></br>
        Instrument volume is {instVol}
        <input 
        onChange={ChangeInst} 
        type="range" 
        min={-100} 
        max={20}
        />
        <br></br>
        Sparkle volume is {sprkVol}
        <input 
        onChange={ChangeSpark} 
        type="range" 
        min={-100} 
        max={20}
        />
        <br></br>
        <button onClick={PressPlay}>Play</button>
        <button onClick={PressStop}>Stop</button>
        </>
    )
}

export default ShortLoops