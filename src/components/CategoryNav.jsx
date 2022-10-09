import { useSelect } from '@mui/base'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const CategoryNav = () => {

    const active = useSelector(state => state.nav.active);
    console.log(active)
    const dispatch = useDispatch();

  return (
    <>
    <NavMain>
        <Navlinks>
            <Navlink>Songs</Navlink>
            <Navlink>Playlists</Navlink>
            <Navlink>Albums</Navlink>
            <Navlink>Artists</Navlink>
        </Navlinks>
    </NavMain>
    </>
  )
}

const NavMain = styled.div`

`
const Navlinks = styled.div`
    width: 95%;
    margin: 0px auto;
    margin-top: 25px;
    display: flex;
    gap: 1rem;
`
const Navlink = styled.a`
    background-color: ${props => props.active?'green': ''};
    color: whitesmoke;
    padding: 8px 16px;
`


export default CategoryNav