import React, { useEffect, useState } from "react";
import player from "../../src/assets/player.svg";
import styled from "styled-components";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import fetchUsers from "../redux/actions/userActions";
import LoginPage from "./LoginPage";
import Playback from "../spotify/Playback";
import axios from "../axios";
import { getToken } from "../auth/Auth";

const Begin = () => {

  const Token =  useSelector(state => state.token.token)
  console.log(Token)
  const dispatch = useDispatch()

  useEffect(() => {
    const Tok = getToken()
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Tok;
    dispatch({
      type: 'SET_TOKEN',
      payload: Tok
    })
    
  }, [])

  return (
    <>
    {
      !Token?<LoginPage/>:
      <>
      <Home/>
      <Playback Token={Token}/>
      </>
    }
    </>
  );
};

export default Begin;
