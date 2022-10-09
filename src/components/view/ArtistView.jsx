import axios from '../../axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const ArtistView = () => {

    const artist = useSelector(state => state.artist.artist)
    const artistDetail = useSelector(state => state.artistDetail.artistDetailState)
    const dispatch = useDispatch();
    console.log(artistDetail)
    const handleArtistDetail = (id) => {
        axios.get(`/artists/${id}`)
        .then(response => {
            if(response) {
                dispatch({
                    type: 'SET_ARTIST_DETAIL_TRUE',
                    payload: response.data
                })
            }
        })
    }
  return (
    <>
    <ArtistMain>
        <ArtistHeading>
            <h1>Artist</h1>
            <a href="">See All</a>
        </ArtistHeading>
        <hr />
        <Artists>
            {
                artist?.map((artist)=>(
                    <Single onClick={() => handleArtistDetail(artist.id)}>
                        <img src={artist.images[1]?.url} alt="" />
                        <h1>{artist.name}</h1>
                    </Single>
                ))
            }
        </Artists>
    </ArtistMain>
    </>
  )
}

const ArtistMain = styled.div`
margin-top: 30px;
    hr{
        width: 94%;
        margin: auto;
    }
`
const Artists = styled.div`
    width: 95%;
    margin: 15px auto;
    padding: 8px 16px;
    display: flex;
    flex-wrap: wrap;
`
const Single = styled.div`
    display: flex;
    cursor: pointer;
    width: 140px;
    height: 160px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 12px;
    border-radius: 12px;
    transition: 0.5s ease;
    h1 {
        color: #c5c5c5;
    }
    img {
        min-height: 60px;
        min-width: 60px;
        border-radius: 20%;
    }
    &:hover {
        background-color: #49484839;
    }
`

const ArtistHeading = styled.div`
    width: 95%;
    margin: 0px auto;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
`

export default ArtistView