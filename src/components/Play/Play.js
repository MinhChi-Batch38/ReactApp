import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Play.css'
import { useRef } from 'react';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import { useTheme } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';

function Play() {
    const theme = useTheme();
    const dispatch = useDispatch()
    const song = useSelector(state => state.songPlay)
    const play = useSelector(state => state.play)
    const [duration, setDuration] = useState(200)
    const [position, setPosition] = useState(0)
    const [volume, setVolume] = useState(30)
    const lightIconColor =
        theme.palette.mode === 'dark' ? '#fff' : '#fff';
    const audioRef = useRef()
    console.log(audioRef)
    const onLoadedMetadata = () => {
        console.log(audioRef.current)
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };
    function formatDuration(value) {
        const minute = Math.floor(value / 60);
        const secondLeft = Math.floor(value - minute * 60);
        return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
    }
    const handleOnChangeVolume = (value) => {
        setVolume(value)
        audioRef.current.volume = value / 100
    }
    const handleOnChangeSlider = (value) => {
        setPosition(value)
        audioRef.current.currentTime = value
    }
    const handleOnPlayAudio = () => {
        dispatch({ "type": "play", "play": true })
        audioRef.current.play()
        console.log("play at: ", audioRef.current.currentTime)
    }
    const handleOnPausedAudio = () => {
        dispatch({ "type": "play", "play": false })
        audioRef.current.pause()
    }

    return (
        <div className="now-playing-bar">
            <audio
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                hidden={true}
                autoPlay={true}
                onTimeUpdate={() => setPosition(audioRef.current.currentTime)}
            >
                <source src={song.link} type="audio/mp3" />
            </audio>
            <div className="play">
                <div className="actions">
                    <button className="zm-btn zm-tooltip-btn btn-pre is-hover-circle button">
                        <i class="icon fa-solid fa-backward-step"></i>
                    </button>
                    <button className="zm-btn zm-tooltip-btn btn-play button">
                        {(!play) && <i className="icon-play fa-regular fa-circle-play" onClick={handleOnPlayAudio}></i>}
                        {(!play) || <i className="icon-play fa-regular fa-circle-pause" onClick={handleOnPausedAudio}></i>}
                    </button>
                    <button className="zm-btn zm-tooltip-btn btn-next is-hover-circle button">
                        <i class="icon fa-solid fa-forward-step"></i>
                    </button>
                </div>
            </div>


            {/* <div class="w3-border progress-bar">
                <div class="w3-white progress-bar" style={{ height: 4, width: 20 }}></div>
            </div> */}
            
            <span className='time-left'>{formatDuration(position)}</span>
            <div className='progress-bar'>
            <Slider
                aria-label="time-indicator"
                size="small"
                value={position}
                min={0}
                step={1}
                max={duration}
                onChange={(e) => handleOnChangeSlider(e.target.value)}
                sx={{
                    color: theme.palette.mode === 'dark' ? '#fff' : '#fff',
                    height: 4,
                    '& .MuiSlider-thumb': {
                        width: 8,
                        height: 8,
                        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                        '&:before': {
                            boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                        },
                        '&:hover, &.Mui-focusVisible': {
                            boxShadow: `0px 0px 0px 8px ${theme.palette.mode === 'dark'
                                ? 'rgb(255 255 255 / 16%)'
                                : 'rgb(0 0 0 / 16%)'
                                }`,
                        },
                        '&.Mui-active': {
                            width: 20,
                            height: 20,
                        },
                    },
                    '& .MuiSlider-rail': {
                        opacity: 0.28,
                    },
                }}
            />
             </div>
            <span className='time-right'>{formatDuration(duration - position)}</span>
           
            {song && (<div><i className="play-song fa-solid fa-compact-disc fa-spin fa-2x"></i>
                <label className='song'>{song.name}</label>
                <label className='singer'>{song.singer}</label>
            </div>)
            }
            <div className='volume'>
                <Stack spacing={2} direction="row" sx={{ mb: 1, px: 1 }} alignItems="center">
                    <VolumeDownRounded htmlColor={lightIconColor} />
                    <Slider
                        aria-label="Volume"
                        value={volume}
                        min={0}
                        max={100}
                        onChange={e => { handleOnChangeVolume(e.target.value) }}
                        sx={{
                            color: "#fff",
                            '& .MuiSlider-track': {
                                border: 'none',
                            },
                            '& .MuiSlider-thumb': {
                                width: 24,
                                height: 24,
                                backgroundColor: '#fff',
                                '&:before': {
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                },
                                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                    boxShadow: 'none',
                                },
                            },
                        }}
                    />
                    <VolumeUpRounded htmlColor={lightIconColor} />
                </Stack>
            </div>
        </div>
    )
}

export default Play