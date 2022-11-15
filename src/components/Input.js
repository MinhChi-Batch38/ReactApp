import './Input.css'

function Input({title, name, type, onChange}){

    return (
        <div>
            <label className='title'>{title}: </label>
            { type==="file" ? 
            <input className='song' type={type} id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])}/>:
            <input className='song' type={type} id={name} name={name} onChange={(e)=>onChange(title, e.target.value)}/>
            }
        </div>
    )
}

export default Input