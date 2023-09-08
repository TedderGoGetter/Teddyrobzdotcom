import constructionGif from './assets/construction.gif'
import vibingGif from './assets/vibing.gif'
import mindblowGif from './assets/mindblow.gif'
import loadingGif from './assets/loading.gif'
import legoGif from './assets/lego.gif'
import startGif from './assets/start.gif'
import timerGif from './assets/timer.gif'
import Synth from './components/synth'
import ShortLoops from './components/ShortLoops'
// import LoopDemo from './components/LoopDemo'
import * as Tone from 'tone'
import './Plan.css'

function Plan() {

    return (
        <>
            What I got so far:
            <br></br><br></br>
            <ShortLoops/>
            <br></br><br></br>
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
            I want to make a music player that has my latest song release. 
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
            For the design we'll use figma, I've never used it, but hey. I see it on people's resume all the time.
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
            Web Audio API is a system for controlling audio on the web.
            <br></br><br></br>
            It allows users to play back audio, add effects, do synthesis and all kinds of good stuff. It's a little music toolbox.
            <br></br><br></br>
            Tone.js builds on the Web Audio API and adds sync (important!) and more,
            and also makes the Web Audio API easier to work with. 
            <br></br><br></br>
            Basically it takes the disconnected lego's from Web Audio API and pre-assembles them into houses, cars, etc for us to use in our lego city!
            <br></br><br></br>
            <img src={legoGif} className='lego-gif' alt="lego-gif" />
            <br></br><br></br>
            Basically, all we truly have to focus on is Tone.js and we'll only look under the hood if needed.
            <br></br><br></br>
            And so I installed Tone.js by typing "npm i tone" into the terminal
            <br></br>
            <img src={loadingGif} className='loading-gif' alt="loading-gif" />
            <br></br><br></br>
            We now have Tone.js. It's time to make our first tone.
            <br></br><br></br>
            <Synth/>
            <br></br><br></br>
            Now the question is, why did it work?
            <br></br><br></br>
            Well like I said, tone.js has done the legwork for us and made some synthesizers we can use.
            In this case I just called one up by typing "new Synth()" and told my Beep button to play a c5 note on said Synth() when clicked.
            <br></br><br></br>
            So we've proved that it works! What'snext?
            <br></br><br></br>
            <h5>Build order</h5>
            <br></br><br></br>
            Apparently all great engineers start with the technical bit (backend) first, and the pretty bit(frontend) after.
            <br></br><br></br>
            I suppose they do so to make sure every piece works works before they design it into the product.
            <br></br><br></br>
            1. Get my three tracks looping; my instruments, my drums, and my vocals. Add volume faders.
            <br></br><br></br>
            2. Create my three effects for them link them to buttons.
            <br></br><br></br>
            3. Create my master compressor. This is essentially just an effect that makes sure everything sounds glued together.
            <br></br>
            Allmost all commercial songs have one. When I split my song into separate layers that effect has to be readded at the end.
            <br></br><br></br>
            4. Fine tune my effects. 
            <br></br><br></br>
            5. The ~cool~ bit! Use figma to design all of the buttons and stuff and make everything look real pretty.
            <br></br><br></br>
            6. Make the website look like a nice lil' package. 
            <br></br><br></br>
            <h2>Chapter 3: Fear</h2>
            <br></br><br></br>
            Okay listen up. I'm not saying this is an achievable project. None of this has been tested.
            <br></br><br></br>
            I'm just a junior engineer and a music geek. I have no idea if:
            <br></br><br></br>
            - Long loops can actually be synced in tonejs
            <br></br>
            - Long loops can actually play on people's shitty wifi
            <br></br>
            - These loops can be routed together into an effect
            <br></br>
            - These effects that I want can be made
            <br></br>
            - There can even be a master effect to make it all sound juicy
            <br></br>
            - I even have the design sense to make this look worthy of anyone's time.
            <br></br><br></br>
            But that's just the thing about these types of projects. You either dive in headfirst or you get stuck in analisys.
            <br></br><br></br>
            So without further ado, away we go!
            <br></br><br></br>
            <img src={startGif} className='start-gif' alt="start-gif" />
            <h2>Chapter 4: The backend</h2>
            <br></br>
            <h5>4.1: Can we loop these loops?</h5>
            <br></br>
            If we can loop these loops then whoop dee whoop.
            <br></br><br></br>
            If we can't loop these loops then big big oof.
            <br></br><br></br>
            Since I don't know if there will be a max length, we'll start with two practice loops
            <br></br><br></br>
            I've selected three loops
             from my song <a href='https://www.youtube.com/watch?v=6YdSx2h-1so' target='_blank'>Nekkid Pictures </a> and I'll attempt to loop them.
            <br></br><br></br>
            Looping is just making a sound play again at the exact time it stops.
            <br></br><br></br>
            The difficult part is keeping all your sounds in sync.
            <br></br><br></br>
            In digital music this is solved with 'transport'.
            <br></br><br></br>
            It's essentially a little guy in the background counting time and telling every sound or instrument when to play.
            <br></br><br></br>
            <img src={timerGif} className='timer-gif' alt="timer-gif" />
            <br></br><br></br>
            Here we have a looped chord.
            <br></br><br></br>
            {/* <LoopDemo/> */}
            <br></br><br></br>
            Now we want to do that, but with three of our own loops.
            <br></br><br></br>
            <ShortLoops/>
            <br></br>
            




        </>
    )
}

export default Plan