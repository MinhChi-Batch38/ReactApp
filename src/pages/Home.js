import "./style.css"
import Item from "../components/Item";
import Bottom from "../components/Bottom";
//import {httpGetUsers} from "../hooks/requests/demo.js"

import {useSongs, useTotal} from "../hooks/use/useSongs";
import { useState } from "react";
import Play from "../components/Play";
import {Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { httpCountSongs, httpGetAllSongs } from "../hooks/requests/song";
//import { httpGetAllSongs } from "../hooks/requests/song";

function Home() {
  //const [songs, setSongs] =  useState(useSongs())
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  var nice = useSongs(pageNumber-1, pageSize)
  var to = useTotal()
  // React.useEffect(async () => {
  //   const to = await httpCountSongs()
  //   setTotal(to)
  //   const nice = await httpGetAllSongs(pageNumber-1, pageSize)
  //   setSongs(nice)
  // }, [pageNumber, pageSize])
  const [deleteSongs, setDeleteSongs] = useState([])
  const [audio, setAudio] = useState({})
  const [check, setCheck] = useState(false)
  const handlePlayAudio = (audio) => {
    setAudio(audio)
  }
  const handleOnCheck = () => {
    check===false?setDeleteSongs(nice):setDeleteSongs([])
    setCheck(pre=>!pre)
  }
  const handleOnItemCheck = (song) => {
    setDeleteSongs(pre => {
      return [...pre, song]
    })
  }
  const handleOnItemUnCheck = (song) => {
    
    setDeleteSongs(pre => {
      return pre.filter(function (au) {
        return au !== song;
      });
      
    })
  }
  const handlePreviousPageClick = value => {
    if (isNaN(value)) {
      console.log("NaN")
      return
    }
    if (pageNumber>1) {
      setPageNumber(pre => pre-1)
    }
  }

  const handleNextPageClick = value => {
    if (isNaN(value)) {
      console.log("NaN")
      return
    }
    if (pageNumber<to/pageSize) {
      setPageNumber(pre => pre+1)
    }
  }

  const handleSelectButtomOnChange = (value) => {
    setPageSize(Number(value))
  }

  const handleInputButtomOnChange = (value) => {
    if (isNaN(value)) {
      console.log("err")
      return
    }
    var num = Number(value)
    if (num>to/pageSize+1 || num<to/pageSize) {
      console.log("big or small")
      return
    }
    if (num===0) {
      num=1
    }
    setPageNumber(num)
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
            {nice && nice.map(song => (
              <tr key={song.id}>
              {(song.id===audio.id)?<Item
                song = {song}
                onPlay={handlePlayAudio}
                checked={check}
                onChecked={handleOnItemCheck}
                onUnChecked={handleOnItemUnCheck}
                play={true}/>:
                <Item
                song = {song}
                onPlay={handlePlayAudio}
                checked={check}
                onChecked={handleOnItemCheck}
                onUnChecked={handleOnItemUnCheck}
                play={false}/>}
            </tr>
            ))}
          </table>
        </div>
      </div>
      <div className="bottom">
        <Bottom
          total={to}
          selected={deleteSongs.length}
          selectOnchange={handleSelectButtomOnChange}
          inputOnChange={handleInputButtomOnChange}
          previousPageClick={handlePreviousPageClick}
          nextPageClick={handleNextPageClick}
          pageNumber={pageNumber}
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