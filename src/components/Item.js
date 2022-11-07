import "./Item.css"


function Item(props) {


    return (
            <div className="item">
                <input className="check" type="checkbox" defaultChecked={false}/>
                <label className="name-song">{props.nameSong}</label>
                <label className="name-singer">{props.nameSinger}</label>
                <label className="genre">{props.genre}</label>
                <label className="actions">{props.actions}</label>
            </div>
    );
}

export default Item;