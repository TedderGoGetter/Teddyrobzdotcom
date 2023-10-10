import Coverart from '../assets/Coverart.jpg'
import './Landing.css'

function Landing(){

    return (
        <div className="main-container">
        <a href='https://ffm.to/rissastrikapose' target='_blank' className='cover-art'><img src={Coverart} className='cover-art'alt='Rissastrikapose Cover Art'></img></a>
        </div>
    )
}

export default Landing