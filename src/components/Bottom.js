import './Bottom.css'

function Bottom(props) {

    return (
        <div>
            <label className="total">Total Items: {props.total}</label>
            <label className="selected">Selected Items: {props.selected}</label>
            <label className="page-size">Page size: </label>
            <select className='page'>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
            </select>
                <a href="/" className='pagination previous'>❮</a>
                <input className="page" type="text" defaultValue={1}/>
                <a href="/" className='pagination next'>❯</a>

        </div>
    );
}

export default Bottom;