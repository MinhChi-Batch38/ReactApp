import './Input.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Input({title, name, type, value, onChange}){

    return (
        <div>
            {/* <label className='title'>{title}: </label> */}
            {/* { type==="file" ? 
            
            
            <input className='song' type={type} id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} required/>:
            <input className='song' type={type} id={name} name={name} onChange={(e)=>onChange(title, e.target.value) } required/>
            } */}
            {type==="file" ? 
            <Button variant="contained" component="label">
            Upload
            <input type={type} id={name} name={name} hidden accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} value={value} required/> 
          </Button>
            :
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth label={title} id={name} onChange={(e)=>onChange(title, e.target.value)} value={value} required/>
            </Box>}
        </div>
    )
}

export default Input