import './Play.css'

function Play({audio, song, singer}) {
    console.log(audio)
    return (
        <div className="now-playing-bar">
            {/* <div className="play">
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
            <span className='time-right'>04:03</span> */}
            {audio && (<div><i className="play-song fa-solid fa-compact-disc fa-spin fa-2x"></i>
            <label className='song'>{song}</label>
            <label className='singer'>{singer}</label>
            <audio controls autoPlay className='center'>
                <source src={audio} type="audio/mpeg"/>
            </audio></div>)}
        </div>
    )
}

export default Play