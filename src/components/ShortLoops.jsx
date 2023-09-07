import * as Tone from 'tone';
import Drums from '../assets/NPL1drms.mp3'

function ShortLoops() {

    const sampler = new Tone.Sampler({
        urls: {
            A1: "NPL1drms.mp3",
            // A2: "A2.mp3",
        },
        // baseUrl: "https://tonejs.github.io/audio/casio/",
        baseUrl: "../assets/"

    }).toDestination();

    sampler.volume.value = -12;

    Tone.Transport.bpm.value = 81;

    // const osc = new Tone.Oscillator().toDestination();
    // repeated event every 8th note
    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        osc.start(time).stop(time + 0.1);
    }, "8n");
    // transport must be started before it starts invoking events

    function PressPlay() {
        Tone.start()
        // sampler.triggerAttackRelease(["C1"], 0.5);
        // Tone.Transport.nstart();
        console.log('note played')
        
        new Audio(Drums).play();
        
    }

    function PressStop() {
        Tone.Transport.stop();
    }

    return (
        <>
        Hello
        <button onClick={PressPlay}>Play</button>
        <button onClick={PressStop}>Stop</button>
        </>
    )
}

export default ShortLoops