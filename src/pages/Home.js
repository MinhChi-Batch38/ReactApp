import "./style.css"
import Item from "../components/Item";
import Bottom from "../components/Bottom";
//import {httpGetUsers} from "../hooks/requests/demo.js"
import useSongs from "../hooks/use/useSongs";
import { useState } from "react";
import Play from "../components/Play";
import {Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';


function Home() {
  const songs =  useSongs()
  const [audio, setAudio] = useState({})
  const [check, setCheck] = useState(false)
  const handlePlayAudio = (audio) => {
    setAudio(audio);
  }
  const handleOnCheck = () => {
    setCheck(pre=>!pre)
  }
  return (
    <div> 
      <div className="nav-bar">
        <Link className="btn-add" to='/add'>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </Box>
        </Link>
          <Box sx={{ '& > :not(style)': { m: 1 } }} className="btn-delete">
            <Fab color="secondary" aria-label="delete">
              <DeleteIcon />
            </Fab>
          </Box>
      </div>
      <div id="table_wrapper">
        <div id="header">
          <div id="head1">
            <input type="checkbox" onClick={handleOnCheck}/>
          </div>
          <div id="head2">Name</div>
          <div id="head3">Genre</div>
          <div id="head4">Actions</div>
        </div>
        <div id="tbody">
          <table>
            {songs && songs.map(song => (
              <tr key={song.id}>
              {(song.id===audio.id)?<Item
                song = {song}
                onPlay={handlePlayAudio}
                checked={check}
                play={true}/>:
                <Item
                song = {song}
                onPlay={handlePlayAudio}
                checked={check}
                play={false}/>}
            </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="bottom">
        <Bottom
          total={2}
          selected={0}
        />
      </div>
      <div className='playing-song'>
        <Play audio={audio.link}
              song={audio.name}
              singer={audio.singer}/>
      </div>
    </div>
  );
}

export default Home;