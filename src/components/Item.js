import "./Item.css"
import {useState} from 'react'


function Item(props) {
    const [play, setPlay] = useState(true)
    const handleOnClick = () => {
        setPlay(pre => {
            return !pre;
        });
    }
    return (
            <div className="item">
                <input className="check" type="checkbox" defaultChecked={false}/>
                <i class="fa-solid fa-music name-song"></i>
                <label className="name-song">{props.nameSong}</label>
                <i class="fa-solid fa-microphone-lines name-singer"></i>
                <label className="name-singer">{props.nameSinger}</label>
                {play || <i class="fa-solid fa-headphones-simple playing"></i>}
                <label className="genre">{props.genre}</label>
                {play && <label className="actions-play" onClick={handleOnClick}><i class="fa-solid fa-play"></i></label>}
                {play || <label className="actions-play" onClick={handleOnClick}><i class="fa-solid fa-pause"></i></label>}
                <label className="actions-edit"><i class="fa-solid fa-pen-to-square"></i></label> 
                
            </div>
    );
}

export default Item;