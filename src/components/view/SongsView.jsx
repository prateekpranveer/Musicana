import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import EachSong from './EachSong'
import axios from '../../axios'

const SongsView = ({heading, expand}) => {
    const tracks = useSelector(state => state.track.tracks);
    const playlist = useSelector(state => state.playlist)
    console.log(playlist)

    const device_id = useSelector(state => state.device.device_id.device_ids[0])
    console.log(device_id)

    const fireTrack = useDispatch()

    const handlePlay = (track) => {
        console.log(track.uri)
        var pos = 0;
        if (track.track_number) {
            pos = track.track_number-1;
        }
        axios.put(`/me/player/play?device_id=${device_id}`, {
            "context_uri": track.album.uri,
            "offset": {
              "position": pos
            },
            "position_ms": 0
          })
          fireTrack({
            type: 'SET_CURRENT_TRACK',
            payload: track.name
          })

    }


    






  return (

    
    <>
    <SongsViewMain>
        <Top>
            <TopLeft>{heading}</TopLeft>
            <TopRight href=''>{expand}</TopRight>
        </Top>
        <hr></hr>
        <Bottom>
            <SongsDisplay>
            {
                tracks?.map((track) => (
                    <Per onClick={() => handlePlay(track)}>
                    <EachSong track = {track}/>
                    </Per>
                ))
            }
                
        
            </SongsDisplay>
        </Bottom>
    </SongsViewMain>
    
    </>
  )
}

const Per = styled.div``

const SongsViewMain = styled.div`
    width: 100%;
    height: 200px;
    padding: 10px 16px;
    
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const TopLeft = styled.p``
const TopRight = styled.a`

`

const SongsDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

`

const Bottom = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
    margin-top: 20px;
`

export default SongsView