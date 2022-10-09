import React from 'react'
import styled from 'styled-components'

const Navlink = () => {
  return (
    <>
    <NavX>
        <NavLinks>
            <NavlinkEach>PLAYLISTS</NavlinkEach>
            <NavlinkEach>LIKED SONGS</NavlinkEach>
            <NavlinkEach>RECENTLY PLAYED</NavlinkEach>
            <NavlinkEach>ARTISTS</NavlinkEach>
            <NavlinkEach>PODCASTS</NavlinkEach>
            <NavlinkEach>ALBUM</NavlinkEach>
        </NavLinks>
    </NavX>
    </>
  )
}

const NavX = styled.div`
    width: 95%;
    margin: 0px auto;
    margin-top: 20px;
`
const NavLinks = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

`
const NavlinkEach = styled.li`
    flex: 1;
    color: white;
    background-color: #228757;
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: jost;
    font-size: 30px;
    font-weight: 200;
    min-height: 150px;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    &:hover {
        background-color: #41ac71;
    }

    @media (max-width: 625px) {
        min-width: 250px;
    }
`

export default Navlink