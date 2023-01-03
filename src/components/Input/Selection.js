import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Input.css';


export default function Selection({ options, onChange, title }) {
    const [genre, setGenre] = React.useState([]);
    const handleOnChange = (value) => {
        setGenre(value)
        onChange(title, value)
    }

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={genre}
                    label={title}
                    onChange={e => handleOnChange(e.target.value)}
                >
                    {options.map(option => (
                        <MenuItem key={option} value={option}>{option}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
