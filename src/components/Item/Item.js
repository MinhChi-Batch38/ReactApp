import "./Item.css"
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from "react-redux"


function Item({song, onPlay, onPause, ...props}) {
    const dispatch = useDispatch()
    const [play, setPlay] = useState(props.play)
    const [check, setCheck] = useState(props.checked)
    const handleOnPlay = async () => {
        // await onPlay({})
        // onPlay(song)
        dispatch({"type": "song-play", "song": song})
        dispatch({"type": "play", "play": true})
        onPlay()
    }
    const handleOnPause = () => {
        //setPlay(false);
        dispatch({"type": "play", "play": false})
        onPause()
    }
    const handleOnCheck = () => {
        check===false?props.onChecked(song):props.onUnChecked(song)
        setCheck(pre=>!pre)
    }

    const handleOnEdit = () => {
        dispatch({"type": "select", "audio": song})
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
                <Link to={{pathname:"/edit"}} onClick={handleOnEdit}><label className="actions-edit"><i class="fa-solid fa-pen-to-square"></i></label> </Link>
            </div>
    );
}

export default Item;