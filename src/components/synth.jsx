import * as Tone from 'tone';

// const synth = new Tone.synth().toDestination();  //this creates a synth, the toDestination routes it to the speakers
// Does that mean the toDestination will let me route elsewhere too, such as through an effect?

function SynthBeep() {
    console.log(Tone.context.state)
    Tone.start()
    const synth = new Tone.Synth.toDestination();
    
    synth.triggerAttackRelease("C5","8n");

    console.log("hi")
}

// Tone context is whether or not audio has been activated yet.

function Synth() {

    return(
        <>
        <button onClick={SynthBeep}>Beep</button>
        </>
    )

}

export default Synth




