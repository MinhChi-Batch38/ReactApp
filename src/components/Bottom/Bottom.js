import { useEffect, useState } from 'react';
import './Bottom.css'

function Bottom(props) {
    const [page, setPage] = useState()
    useEffect(() => {
        setPage(props.pageNumber)
    }, [props.pageNumber])
    const handleInputOnChange = (value) => {
        if (isNaN(value)) {

        }
    }
  
    return (
        <div >
            <label className="total">Total Items: {props.total}</label>
            <label className="selected">Selected Items: {props.selected}</label>
            <label className="page-size">Page size: </label>
            <select className='page' onChange={e => props.selectOnchange(e.target.value)}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
            </select>
                <button className='pagination previous' onClick={e => props.previousPageClick(e.target.value)}>❮</button>
                <input className="page" onChange={e => {props.inputOnChange(e.target.value)}} value={page}></input>
                <button className='pagination next' onClick={e => props.nextPageClick(e.target.value)}>❯</button>

        </div>
    );
}

export default Bottom;