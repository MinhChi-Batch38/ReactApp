import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import './Bottom.css'

function Bottom(props) {
    const language = useSelector(state => state.language)
    const [page, setPage] = useState(props.pageNumber)
    useEffect(() => {
        setPage(props.pageNumber)
    }, [props.pageNumber])
    const handleInputOnChange = (value) => {
        if (isNaN(value)) {
            setPage(value)
            props.inputOnChange(value)
        }
    }
  
    return (
        <div >
            <label className="total">{language.Total}: {props.total}</label>
            <label className="selected">{language.Select}: {props.selected}</label>
            <div className='paging'>
            <label className="page-size">{language.PageSize}: </label>
            <select className='page' onChange={e => props.selectOnchange(e.target.value)} defaultValue={10}>
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
            </select>
                <button className='pagination previous' onClick={e => props.previousPageClick(e.target.value)}>❮</button>
                <input className="page" onChange={e => handleInputOnChange(e.target.value)} value={page}></input>
                <button className='pagination next' onClick={e => props.nextPageClick(e.target.value)}>❯</button>
            </div>
            

        </div>
    );
}

export default Bottom;