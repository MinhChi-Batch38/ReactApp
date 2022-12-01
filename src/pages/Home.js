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
import Alert from "../components/Alert/Alert";
import { httpDeleteSongs } from "../hooks/requests/song";

//import { httpCountSongs, httpGetAllSongs } from "../hooks/requests/song";

function Home() {
  const [pageNumber, setPageNumber] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  var songs = useSongs(pageNumber-1, pageSize) 
  var total = useTotal()
  const [deleteSongs, setDeleteSongs] = useState([])
  const [audio, setAudio] = useState({})
  const [check, setCheck] = useState(false)
  const [deleteSuccess, setDeleteSuccess] = useState(false)
  const [deleteFailed, setDeleteFailed] = useState(false)


  const handlePlayAudio = (audio) => {
    setAudio(audio)
  }
  const handleOnCheck = () => {
    check===false?setDeleteSongs(songs):setDeleteSongs([])
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
    if (pageNumber<total/pageSize) {
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
    if (num>total/pageSize+1 || num<total/pageSize) {
      console.log("big or small")
      return
    }
    if (num===0) {
      num=1
    }
    setPageNumber(num)
  }

  const handleAlert = (state) => {
    if (state==="success") {
      setDeleteSuccess(false)
    } else {
      setDeleteFailed(false)
    }
  }
  const handleOnDelete = async () => {
    
    if (deleteSongs.length>0) {
      if (window.confirm("Do you want to delete the songs?")) {
      const res = await httpDeleteSongs(deleteSongs)
      if (res===200) {
        setDeleteSuccess(true)
      } else {
        setDeleteFailed(true)
        console.log(res)
      }
    }
    }
  }

  //Render
  return (
    <div> 
      <div className="nav-bar">
        <Link className="btn-add" to='/add'>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <Fab color="primary" aria-label="add" title="Add">
              <AddIcon />
            </Fab>
          </Box>
        </Link>
          <Box sx={{ '& > :not(style)': { m: 1 } }} className="btn-delete" onClick={handleOnDelete}>
            <Fab color="secondary" aria-label="delete" title="Delete selected">
              <DeleteIcon />
            </Fab>
          </Box>
      </div>
      <div id="table_wrapper">
        <div>
          {deleteSuccess && <Alert success={true} content="The songs is deleted!" onAlert={handleAlert}/>}
          {deleteFailed && <Alert failed={true} content="Fail to delete songs!" onAlert={handleAlert}/>}
        </div>
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
          total={total}
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