import React from 'react'
import styled from 'styled-components'
import { loginURL } from '../auth/Auth'
import player from '../assets/player.svg'

const LoginPage = () => {
  return (
    <>
    <BeginMain>
            <BeginBox>
              <Top>
                Welcome to <span>Spotifly</span>
              </Top>
              <Middle>
                <img src={player} alt="" />
              </Middle>
              <a href={loginURL}>
                <Login>Login with Spotify</Login>
              </a>
            </BeginBox>
          </BeginMain>
    </>
  )
}

const BeginMain = styled.div`
  width: 95%;
  margin: 0px auto;
  display: flex;
  justify-content: center;
`;
const BeginBox = styled.div`
  margin-top: 80px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.h1`
  font-size: 80px;
  font-weight: 200;
  span {
    color: #2aaf71;
  }
`;
const Middle = styled.div``;
const Login = styled.button`
  background-color: #1f724b;
  padding: 12px 40px;
  margin-top: 60px;
  transition: 0.4s ease;
  &:hover {
    background-color: white;
    color: #1f724b;
  }
`


export default LoginPage