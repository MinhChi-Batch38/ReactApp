import './Input.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Input({title, name, type, onChange}){

    return (
        <div>
            {/* <label className='title'>{title}: </label> */}
            {/* { type==="file" ? 
            
            
            <input className='song' type={type} id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} required/>:
            <input className='song' type={type} id={name} name={name} onChange={(e)=>onChange(title, e.target.value) } required/>
            } */}
            {type==="file" ? 
            <input type={type} id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} require="true"/> :
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label={title} id={name} onChange={(e)=>onChange(title, e.target.value)} require="true"/>
            </Box>}
        </div>
    )
}

export default Input