import React from 'react'
import styled from 'styled-components'

const EachSong = ({track}) => {
  return (
    <>
    <SingleSong>
        <Left><img src={track.album.images[2].url} alt="" /></Left>
        <Right>
            <Title>{track.name}</Title>
            <Family>{track.artists[0].name}</Family>
        </Right>
    </SingleSong>
    </>
  )
}

const SingleSong = styled.div`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    padding: 4px 6px;
    transition: 0.5s ease;
    &:hover{
        background-color: #d8d8d832;
        cursor: pointer;
    }
`
const Left = styled.div`
    width: 50px;
    height: 50px;
    overflow: hidden;
`
const Right = styled.div``
const Title = styled.div`
    width: 135px;
    font-size: 15px;
    font-weight: 200;
`
const Family = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: lightgray;
`

export default EachSong