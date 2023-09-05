import * as Tone from 'tone';
import { useState } from 'react';
// const synth = new Tone.synth().toDestination();  //this creates a synth, the toDestination routes it to the speakers
// Does that mean the toDestination will let me route elsewhere too, such as through an effect?



function Synth() {

    const [beeped, setBeeped] = useState('unbeeped')
    
    function SynthBeep() {
        // console.log(Tone.context.state)
        // Tone context is whether or not audio has been activated yet.
    
        Tone.start()
        
        const synth = new Tone.Synth().toDestination();
    
        Tone.loaded().then(() => {
        synth.triggerAttackRelease("C5","8n")
        });

        if (beeped != 'beep-worked') {
            setBeeped('beep-worked')
        }

    }

    return(
        <>
        <button onClick={SynthBeep}>Beep</button>
        
        <div className={beeped}>
            <br></br>
            It worked!
            <br></br><br></br>
        </div>
        </>
    )

}

export default Synth




