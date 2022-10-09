import axios from '../axios'
import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import Querify from '../redux/actions/queryAction'
import Home from '../pages/Home'

const SearchBar = ({pickup}) => {
  const [Nav, setNav] = useState("")
  const type = useSelector(state => state.nav);

  const query = useSelector(state => state.query.query)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    dispatch({
      type: 'SET_QUERY',
      payload: e.target.value
    })
  }

  console.log(query)

  useEffect(() => {

    // Fetching Songs under SideEffect
    const fetchSongs = () => {
      if (query) {
        axios.get(`/search?q=${query}&type=track&limit=40`)
        .then(response=>{
          console.log(response.data)
          dispatch({
            type: 'SET_TRACK_SUCCESS',
            payload: response.data.tracks.items
          })
        })
        .catch(error =>console.log(error))

      }
    }
    // Calling Fetch Songs
    fetchSongs()

    // Fetch Artists under SideEffect
    const fetchArtist = () => {
      if (query) {
        axios.get(`/search?q=${query}&type=artist&limit=10`)
        .then(response=>{
          dispatch({
            type: 'SET_ARTIST_SUCCESS',
            payload: response.data.artists.items
          })
        })
        .catch(error =>console.log(error))
      }
    }

    fetchArtist()


  }, [query])
  
  return (
    <>
    <SearchMain>
        <SearchInput onChange={(e) => handleSearch(e)} className='tracking-wide text-white' placeholder='Search for a song'></SearchInput>
    </SearchMain>

    </>
  )
}

const SearchMain = styled.div`
    width: 95%;
    margin: 0px auto;
    margin-top: 30px;
    height: 12vh;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
`
const SearchInput = styled.input`
    width: 95%;
    height: 60%;
    font-size: 30px;
    font-family: jost;
    background-color: gray;
    color: #eeeeee !important;

    &:focus {
        outline: none;
        border: none;
    }

`

export default SearchBar