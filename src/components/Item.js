import "./Item.css"
import {useState} from 'react'


function Item({song, onClick}) {
    const [play, setPlay] = useState(true)
    const handleOnPlay = () => {
        setPlay(false);
        onClick(song)
    }
    const handleOnPause = () => {
        setPlay(true);
        onClick({})
    }
    return (
            <div className="item">
                <input className="check" type="checkbox" defaultChecked={false}/>
                <i class="fa-solid fa-music name-song"></i>
                <label className="name-song">{song.name}</label>
                <i class="fa-solid fa-microphone-lines name-singer"></i>
                <label className="name-singer">{song.singer}</label>
                {play || <i class="fa-solid fa-headphones-simple playing"></i>}
                <label className="genre">{song.genre}</label>
                {play && <label className="actions-play" onClick={handleOnPlay}><i class="fa-solid fa-play"></i></label>}
                {play || <label className="actions-play" onClick={handleOnPause}><i class="fa-solid fa-pause"></i></label>}
                <label className="actions-edit"><i class="fa-solid fa-pen-to-square"></i></label> 
            </div>
    );
}

export default Item;