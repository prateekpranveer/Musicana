import React from 'react'
import styled from 'styled-components'

const ArtistDetails = ({artistDetail}) => {
    console.log(artistDetail)
  return (
    <ArtistDetailMain>
        <Top>
            <Left>
                <img src={artistDetail.images[1].url} alt="" />
                <h1 className='text-2xl'>{artistDetail.name}</h1>
                <h1>Popularity: {artistDetail.popularity}</h1>
                <h1>Followers: {artistDetail.followers.total}</h1>
                <Genre>
                    {
                        artistDetail.genres?.map((all)=>(
                            <button className=''>{all}</button>
                        ))
                    }
                </Genre>
            </Left>
            <Right></Right>
        </Top>
        <Bottom></Bottom>
    </ArtistDetailMain>
  )
}

const ArtistDetailMain = styled.div`
    
`
const Top = styled.div``
const Bottom = styled.div``
const Left = styled.div``
const Right = styled.div``
const Genre = styled.div`
    display: flex;
    gap: 1rem;

    button {
        background-color: #444545;
        padding: 2px 8px;
        border-radius: 12px;
    }
`


export default ArtistDetails