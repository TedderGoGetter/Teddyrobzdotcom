import * as Tone from 'tone';
import Drums from '../assets/NPL1drms.mp3'
import Instruments from '../assets/NPL1inst.mp3'
import Sparkles from '../assets/NPL1sprk.mp3'

function ShortLoops() {

    // It's possible that Vercel will only host files if the import is justified. If so keep these in the code:
    // new Audio(Drums)
    // new Audio(Instruments)
    // new Audio(Sparkles)

    const samplerr = new Tone.Sampler({
        urls: {
            A1: "NPL1drms-1b4c525a.mp3",
            // A2: "A2.mp3",
        },
        baseUrl: "https://teddyrobz.vercel.app/assets/",

    }).toDestination();

    samplerr.volume.value = -12;

    Tone.Transport.bpm.value = 81;

    // const osc = new Tone.Oscillator().toDestination();
    // repeated event every 8th note
    Tone.Transport.scheduleRepeat((time) => {
        // use the callback time to schedule events
        // sampler.start(time).stop(time + 0.1);
        samplerr.triggerAttackRelease(["A1"], 100);
    },"4:0:0");
    // transport must be started before it starts invoking events

    function PressPlay() {
        Tone.start()
        // sampler.triggerAttackRelease(["A1"], 10);
        Tone.Transport.start();
        console.log('note played')
        
    }

    function PressStop() {
        Tone.Transport.stop();
    }

    return (
        <>
        <button onClick={PressPlay}>Play</button>
        <button onClick={PressStop}>Stop</button>
        </>
    )
}

export default ShortLoops