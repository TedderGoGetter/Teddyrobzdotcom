import constructionGif from './assets/construction.gif'
import vibingGif from './assets/vibing.gif'
import mindblowGif from './assets/mindblow.gif'
import './Plan.css'


function Plan() {

    return (
        <>
            hi <br></br>
            <br></br>
            This website is very much still under construction, and I'm just a junior engineer.
            <br></br><br></br>
            Me working on this code:
            <br></br>

            <img src={constructionGif} className='construction-gif' alt="construction-gif" />

            <br></br><br></br>
            So what am I doing here?
            <br></br><br></br>
            Well, this morning I had the bright idea to make a music player as a portfolio website.
            <br></br><br></br>
            ...even though I have no clue how to make a music player as a portfolio website.
            <br></br><br></br>
            But I suppose that's why it'll be a good challenge.
            <br></br><br></br>
            And the other bright idea I had was to plan it out ON the website. So without further ado:
            <br></br><br></br>
            TEDDY. MAKES. A MUSIC WEBAPP.(note to self make this text look cool later)
            <br></br><br></br>
            <br></br><br></br>

            <h2>Chapter 1: Initial idea</h2>

            Since the world is very much mobile now I will optimize for *mobile first*.
            <br></br><br></br>
            *What do I want from this music player?*
            <br></br>
            I want to make a music player that has my latest release. 
            Not only can people play the song but they can also add effects to it.
            The effects should always sound good, there should be no way for the person messing with it to make it ugly.
            After all, it's my job as a music producer and an engineer to curate this experience.

            <br></br><br></br>
            People using my app:
            <br></br>
            <img src={vibingGif} className='vibing-gif' alt="vibing-gif" />

            <br></br><br></br>
            <h5>The idea</h5>
            <br></br><br></br>
            1. The music plays on a perfect loop, throughout the whole song.
            <br></br><br></br>
            2. There are three knobs at the top:
            <br></br><br></br>
            - Pitch
            <br></br>
            Self explanatory. Pitches up or down the song.
            <br></br><br></br>
            - Delay & Filter
            <br></br>
            Not sure yet but I want to combine these two into something cool. Like a very echoey lowpass vibe.
            <br></br><br></br>
            - Vocal formant.
            <br></br>
            This is too much to ask, I really highly doubt this is possible. I'll see though.
            <br></br><br></br>
            3. There are three oscilloscopes in the middle.
            <br></br>
            Why three? Glad you asked.
            <br></br><br></br>
            4. There are three faders, for three stem groups.
            <br></br>
            <img src={mindblowGif} className='mindblow-gif' alt="mindblow-gif" />
            <br></br><br></br>
            Instrumental, drums, and vocals.
            <br></br><br></br>
            This does mean there has to be master compression as well.
            To be applied after the efx, to make it nice and juicy.
            <br></br><br></br>
            5. The background is just a blurry version of the artwork of the song, maybe multiple takes of it.
            <br></br>
            
            <h5>Important stuff</h5>
            It should always be easy for me to add a new song by putting in three new looping stems.
            <br></br>
            This way when I have a new song out I can upload it in there easily.

            <br></br><br></br>
            <h2>Chapter 2: Tools and build order</h2>
            <br></br><br></br>
            For the design we'll use figma, I've never used it, but hey.
            <br></br><br></br>
            For the music app I have no clue. what do people use?
            <br></br><br></br>
            Well I found this redditor called Valent-in that made a webapp called  
            <a href='https://valent-in.github.io/pulseq/' target='_blank'> Pulseq </a>
            <br></br><br></br>
            It isn't exactly what I'm going for but the underlying tech might be just right.
            <br></br><br></br>
            That tech is <a href='https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API' target='_blank'> Web Audio API </a>
            and <a href='https://tonejs.github.io/' target='_blank'>Tone.js</a>.
            <br></br><br></br>
            <h5>Let's see what they're about!</h5>
            <br></br><br></br>

            





        </>
    )
}

export default Plan