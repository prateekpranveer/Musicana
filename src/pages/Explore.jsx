import React from 'react'
import styled from 'styled-components'
import addPlaylist from '../../src/assets/addplaylist.svg'
import enterPlaylist from '../../src/assets/enterplaylist.svg'

const Explore = () => {
  return (
    <ExploreMain>
        <ExploreHeading>
            <Title>EXPLORE</Title>
            
        </ExploreHeading>
        <ExploreDisplay>
            <ul>
                <div>
                    <a href=""><li>Podcasts</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Made for You</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>New Releases</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Bollywood</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Pop</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Romance</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>

                <div>
                    <a href=""><li>Dance</li></a>
                    <img src={enterPlaylist} alt="" />
                </div>
               
            </ul>

            <Pagination>
                <Left></Left>
                <Middle></Middle>
                <Right></Right>
            </Pagination>

        </ExploreDisplay>
    </ExploreMain>
  )
}


const Title = styled.h1`
    font-size: 100px;
    color: #d8d8d8;
    font-weight: 100;
    letter-spacing: 4px;
`

const ExploreMain = styled.div`
    width: 90%;
    margin: 0px auto;
    margin-top: 60px;
`
const ExploreHeading = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Add = styled.button`

`

const Pagination = styled.div``
const Left = styled.div``
const Middle = styled.div``
const Right = styled.div``

const ExploreDisplay = styled.div`

    height: 300px;

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

export default Explore