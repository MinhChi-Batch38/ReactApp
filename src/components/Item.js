import "./Item.css"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'


function Item({song, onPlay, ...props}) {
    
    const [play, setPlay] = useState(props.play)
    const [check, setCheck] = useState(props.checked)
    const handleOnPlay = async () => {
        //setPlay(true);
        await onPlay({})
        onPlay(song)
    }
    const handleOnPause = () => {
        //setPlay(false);
        onPlay({})
    }
    const handleOnCheck = () => {
        check===false?props.onChecked(song):props.onUnChecked(song)
        setCheck(pre=>!pre)
    }
    useEffect(()=> {
        setCheck(props.checked)
    }, [props.checked])
    useEffect(()=>{
        setPlay(props.play)
    }, [props.play])
    return (
            <div className="item">
                <input className="check" type="checkbox" checked={check} onChange={handleOnCheck}/>
                <i class="fa-solid fa-music name-song"></i>
                <label className="name-song">{song.name}</label>
                <i class="fa-solid fa-microphone-lines name-singer"></i>
                <label className="name-singer">{song.singer}</label>
                {play && <i class="fa-solid fa-headphones-simple playing"></i>}
                <label className="genre">{song.genre}</label>
                {play || <label className="actions-play" onClick={handleOnPlay}><i class="fa-solid fa-play"></i></label>}
                {play && <label className="actions-play" onClick={handleOnPause}><i class="fa-solid fa-pause"></i></label>}
                <Link to={{pathname:"/edit", state:{audio: song}}} ><label className="actions-edit"><i class="fa-solid fa-pen-to-square"></i></label> </Link>
            </div>
    );
}

export default Item;