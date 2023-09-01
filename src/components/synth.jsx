import * as Tone from 'tone';
import { useState, useRef, useEffect } from "react";


function Synth() {

    return(
        <>
        <form id="first-sound" onSubmit={console.log("hi from synth")}></form>
        </>
    )

}

export default Synth

// const firstSound = document.getElementById("first-sound"); //This should import my button


// const synth = new Tone.synth().toDestination();  //this creates a synth, the toDestination routes it to the speakers
// // Does that mean the toDestination will let me route elsewhere too, such as through an effect?



// // console.log(Tone.context.state);

// firstSound.addEventListener("click", () => {
//     if (Tone.context.state != "running") {
//         Tone.start();//This event listener listens for click events on the button
//         // When you play audio on a webpage you need consent from the user.
//         // This is to stop websites from just blasting loud audio as soon as you open them.
//         // Tone.start(); enables sound and changes the state to 'running, 
//         //but I believe it can only be done after there has been user interaction.

//         synth.triggerAttackRelease("C5","8n"); //triggers a note. Two arguments: Note and duration. 8n is an 8th note.
//     }
// }) 