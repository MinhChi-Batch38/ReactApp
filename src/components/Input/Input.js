import './Input.css'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useSelector } from "react-redux";

function Input({title, name, type, value, onChange}){

    const language = useSelector(state => state.language)
    return (
        <div className='input-component'>
            {/* <label className='title'>{title}: </label> */}
            {/* { type==="file" ? 
            
            
            <input className='song' type={type} id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} required/>:
            <input className='song' type={type} id={name} name={name} onChange={(e)=>onChange(title, e.target.value) } required/>
            } */}
            {type==="file" ? 
        //     <Button variant="contained" component="label">
        //     Upload
        //     <input type={type} className="upload-audio" id={name} name={name} hidden accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} value={value} required/> 
        //   </Button>
        <Stack direction="row" alignItems="center" spacing={2}>
        <Button variant="contained" component="label">
          {language.Upload}
          <input type={type} hidden id={name} name={name} accept="audio/mpeg" onChange={(e)=>onChange(title, e.target.files[0])} value={value} required/> 
        </Button>
        </Stack>
            
            :
            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
            >
                <TextField fullWidth 
                label={title} 
                id={name} 
                onChange={(e)=>onChange(title, e.target.value)} 
                value={value}
                required/>
            </Box>}
        </div>
    )
}

export default Input