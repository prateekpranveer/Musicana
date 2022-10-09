import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from '../../axios'
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import { useDispatch, useSelector } from 'react-redux'

const PlayerX = () => {

    const [Trigger, setTrigger] = useState(true)

    const currentTrack = useSelector(state => state.musicana.currentTrack)
    console.log(currentTrack)
    const [Track, setTrack] = useState()



    const handleNext = async() => {
        await axios.post(`/me/player/next`)
        
    }

   
    


    const handlePrev = async() => {
        await axios.post(`/me/player/previous`)
    }





    useEffect(()=> {
        setTrack(currentTrack)
    }, [currentTrack])

    const setPlay = () => {
            setTrigger(true)
            axios.put(`/me/player/play`)
    }

    const setPause = () => {
        setTrigger(false)
        axios.put(`/me/player/pause`)
    }

    
    const [Vol, setVol] = useState(15)

    const handleVol = (e) => {
        setVol(e.target.value)
    }

    const play = true;
  return (
    <>
    <PlayerMain>
        <PlayerXM>
        <PlayerLeft>
            <Tag>Your are currently listening to</Tag>
            <SongName className='truncate'>{Track}</SongName>
        </PlayerLeft>
        <PlayerMiddle>
            <PlayerBall>
                {
                    <Left onClick={handleNext}><SkipPreviousOutlinedIcon style={{width: '40px', height: '40px'}}/></Left>
                }
                
                <Middle>

                    {
                        !Trigger?<div onClick={setPlay}><PlayArrowOutlinedIcon style={{width: '50px', height: '50px'}}/></div>:<div onClick={setPause}><PauseCircleOutlineOutlinedIcon style={{width: '50px', height: '50px'}}/></div>
                    }
                    
                    
                    </Middle>
                {
                    <Right onClick={handlePrev}><SkipNextOutlinedIcon style={{width: '40px', height: '40px'}}/></Right>
                }
                
            </PlayerBall>
        </PlayerMiddle>
        <PlayerRight>
            <VolumeSlider className='slidecontainer'>
           
            <Input onChange={(e) => handleVol(e)} type="range" min="1" max="100" value={Vol} className="slider" id="myRange"></Input>
            </VolumeSlider>
            <DeviceStatus>Listening on <span>Musicana</span> </DeviceStatus>
        </PlayerRight>
        </PlayerXM>
    </PlayerMain>
    </>
  )
}


const PlayerMain = styled.div`
    width: 100%;
    height: 17vh;
    position: fixed;
    bottom: 0px;
    background-color: #1c1c1c;
    @media (max-width: 1000px) {
        height: 20vh;
    }
`

const PlayerXM = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 100%;
    margin: auto;
    @media (max-width: 1000px) {
        flex-direction: column;
        gap: 1rem;
    }
`
const PlayerLeft = styled.div``
const PlayerMiddle = styled.div``
const PlayerBall = styled.div`
    display: flex;
    align-items: center;
    width: 100px;
    gap: 1rem;
    justify-content: space-between;
`
const Left = styled.div``
const Middle = styled.div`
   
`
const Right = styled.div``
const PlayerBg = styled.div`
    position: relative;
    img {
        
    }
`
const PlayerControls = styled.div`
    width: 280px;

`
const Backward = styled.div`
    position: absolute;
    left: 70px;
    bottom: 130px;
`

const Forward = styled.div`
    position: absolute;
    right: 70px;
    bottom: 130px;
`

const SongControl = styled.div`
    position: absolute;
    right: 122px;
    bottom: 140px;
    cursor: pointer;
`

const PlayerRight = styled.div``
const DeviceStatus = styled.div`
    font-family: jost;
    span {
        color: #55c455;
        font-size: 30px;
    }
`
const VolumeSlider = styled.div`
    font-family: jost;
    height: 60px;
    width: 100%;
    .sliderline {
        width: 200px;
        background-color: white;
        height: 2px;
    }
`
const Input = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 2px;
    border-radius: 12px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;

    &::hover {
        opacity: 1;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none; /* Override default look */
        appearance: none;
        width: 40px; /* Set a specific slider handle width */
        height: 40px; /* Slider handle height */
        background: #04AA6D; /* Green background */
        cursor: pointer; /* Cursor on hover */
        }


    &::-moz-range-thumb {
        width: 25px;
        height: 25px;
        background: #04AA6D;
        cursor: pointer;
        }
`
const Tag = styled.div`
    font-family: jost;
    font-weight: 300;
    @media (max-width: 1000px) {
        display: none;
    }
`
const SongName = styled.div`
    font-family: jost;
    font-size: 30px;
    width: 340px;
    font-weight: 300;
    color: #d4ff5f;
    @media (max-width: 1000px) {
        font-size: 20px;
        margin-top: 20px;
    }
`

export default PlayerX