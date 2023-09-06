import * as Tone from 'tone';
import { useState } from 'react';

function ShortLoops() {

    const [beeped, setBeeped] = useState('unbeeped')

    const sampler = new Tone.Sampler({
        urls: {
            A1: "A1.mp3",
            A2: "A2.mp3",
        },
        baseUrl: "https://tonejs.github.io/audio/casio/",

    }).toDestination();
    sampler.volume.value = -12;

    Tone.Transport.bpm.value = 81;

    // repeated event every 8th note
    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // osc.start(time).stop(time + 0.1);
        sampler.triggerAttackRelease(["C1", "E1", "G1", "B1"], 0.5);
    }, "4n");
    // transport must be started before it starts invoking events

    function PressPlay() {
        Tone.start()
        // sampler.triggerAttackRelease(["C1"], 0.5);
        Tone.Transport.start();
        console.log("sampler is at ", sampler.volume.value)

        if (beeped != 'beep-worked') {
            setBeeped('beep-worked')
        }

    }

    function PressStop() {
        Tone.Transport.stop();
    }

    return (
        <>
        
        <button onClick={PressPlay}>Play</button>
        <button onClick={PressStop}>Stop</button>
        <div className={beeped}>
        <br></br>
        It'll play infinitely if you don't stop it.
        </div>
        </>
    )
}

export default ShortLoops