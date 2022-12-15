import { Autocomplete, createFilterOptions } from "@mui/material";
import songs from "../../model/songs";
import { TextField } from "@mui/material";
import './Search.css'


const filterOptions = createFilterOptions({
    matchFrom: 'start',
    stringify: (option) => option.genre,
});
export default function Search() {
    return (
        <div>
            <input className="search" id="keyword" name="keyword" placeholder="Search" />
        
        </div>
    )
}