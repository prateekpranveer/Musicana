import React from 'react'
import styled from 'styled-components'

const TopPlayer = () => {
  return (
    <>
    <PlayerX>
        <h1>Musicana</h1>
    </PlayerX>
    </>
  )
}

const PlayerX = styled.div`
    display: flex;
    margin-left: 10px;

    h1 {
        font-weight: 600;
        font-size: 40px;
        font-family: sacramento;
        color: #a1ffa1;

        span {
          font-size: 15px;
        }
    }

`

export default TopPlayer