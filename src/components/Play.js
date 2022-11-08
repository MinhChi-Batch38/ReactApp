import './Play.css'
import { useState } from 'react'

function Play() {
    const [played, setPlayed] = useState(true)
    const handleOnClick = () => {
        setPlayed(pre => {
            return !pre;
        });
    }
    return (
        <div className="now-playing-bar">
            <div className="play">
                <div className="actions">
                    <button className="zm-btn zm-tooltip-btn btn-pre is-hover-circle button">
                        <i class="icon fa-solid fa-backward-step fa-3x"></i>
                    </button>
                    <button className="zm-btn zm-tooltip-btn btn-play button" onClick={handleOnClick}>
                        {played && <i className="icon-play fa-regular fa-circle-play"></i>}
                        {played || <i className="icon-play fa-regular fa-circle-pause"></i>}
                    </button>
                    <button className="zm-btn zm-tooltip-btn btn-next is-hover-circle button">
                        <i class="icon fa-solid fa-forward-step"></i>
                    </button>
                </div>
            </div>
            <div class="w3-border progress-bar">
                
                <div class="w3-white progress-bar" style={{height:4, width:20}}></div>
                
            </div>
            <span className='time-left'>00:14</span>
            <span className='time-right'>04:03</span>
        </div>
    )
}

export default Play