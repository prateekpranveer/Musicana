import React from 'react'
import styled from 'styled-components'
import addplaylist from '../../src/assets/addplaylist.svg'
import enterplaylist from '../../src/assets/enterplaylist.svg'

const Playlist = () => {
  return (
    <PlaylistMain>
        <PlaylistHeading>
            <Title>YOUR PLAYLISTS</Title>
            <Add><img src={addplaylist} alt="" /></Add>
        </PlaylistHeading>
        <PlaylistDisplay>
            <ul>
                <div>
                    <a href=""><li>Hello World</li></a>
                    <img src={enterplaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Arijit Love</li></a>
                    <img src={enterplaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Latest Pick</li></a>
                    <img src={enterplaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>My New Playlist 1</li></a>
                    <img src={enterplaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>MTV Hassle</li></a>
                    <img src={enterplaylist} alt="" />
                </div>
               
            </ul>
        </PlaylistDisplay>
    </PlaylistMain>
  )
}


const Title = styled.h1`
    font-size: 100px;
    color: #d8d8d8;
    font-weight: 100;
    letter-spacing: 4px;
`

const PlaylistMain = styled.div`
    width: 90%;
    margin: 0px auto;
    margin-top: 60px;
`
const PlaylistHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Add = styled.button`

`
const PlaylistDisplay = styled.div`

    li {
        color: gray;
    }
    
    div {
        display: flex;
        align-items: center;
        font-size: 26px;
        gap: 12px;
        margin-top: 12px;
        transition: 0.5s ease;

        &:hover {
            font-size: 28px;
        }
    }
`

export default Playlist