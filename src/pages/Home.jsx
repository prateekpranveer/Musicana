import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Navlink from "../components/Navlink";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import axios from "../axios";
import fetchUsers from "../redux/actions/userActions";
import SearchView from "../components/view/SearchView";
import CategoryNav from "../components/CategoryNav";
import PlayerX from "../components/player/PlayerX";
import Loader from "../components/loader/Loader";
import ArtistView from "../components/view/ArtistView";
import ArtistDetails from "../components/ArtistDetails";
import TopPlayer from "../components/TopPlayer";

const Home = () => {
  
  const artistDetail = useSelector((state) => state.artistDetail.artistDetail);
  const artistDetailState = useSelector(
    (state) => state.artistDetail.artistDetailState
  );
  console.log(artistDetailState);

  const trackLoading = useSelector((state) => state.track.loading);

  const [Search, setSearch] = useState(false);

  const [User, setUser] = useState("");
  const user = () => {
    axios.get("/me")
    .then((response) => {
      setUser(response.data.display_name);
    });
  };
  user();

  const query = useSelector((state) => state.query.query);

  useEffect(() => {
    if (query) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [query]);

  /*
  const [Modal, setModal] = useState(false)
  const handleLogout = () => {
    setModal(Modal=>Modal=!Modal);
  }
  */

  const fire_device_id = useDispatch()


  const setDevicetoMusicana = async() => {
    await axios.get(`/me/player/devices`)
    .then(response => {
      if (response) {
        const array = response.data.devices;
        console.log(array)
        const id =  array.find(element => element.name === "Musicana")
        console.log(id.id)
        const rb = {
          "device_ids": [
            id.id
          ]
        }
        fire_device_id({
          type: 'SET_DEVICE',
          payload: rb
        })
        axios.put(`/me/player`, rb)
      }
    })
  }

  setDevicetoMusicana()
  const TimeOut = setTimeout(setDevicetoMusicana, 500)
  return (
    <div>
      <Top>
      <TopPlayer/>
      <LogoutDiv>
        <img src="" alt="" />
        <UserName className="text-gray-300">
          Hi, {User}
          <span className="text-xl">{}</span>
        </UserName>
        <button className="">LOGOUT</button>
      </LogoutDiv>
      </Top>

      {/*
          // Popup option removed due to too much prop drilling
          Modal?<Universal Token = {Token} setToken = {setToken} Modal = {Modal} setModal = {setModal}/>:<></>
          */}

      {artistDetailState ? (
        <ArtistDetails artistDetail={artistDetail} />
      ) : (
        <>
          <SearchBar />

          {Search ? (
            <>
              {trackLoading ? (
                <Loader />
              ) : (
                <>
                  <ArtistView />
                  <SearchView />
                </>
              )}
            </>
          ) : (
            <Navlink />
          )}
        </>
      )}
      <PlayerX/>
    </div>
  );
};


const Top = styled.div`
  width: 95%;
  margin: 0px auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoutDiv = styled.div`
  width: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;

  button {
    background-color: #228757;
    padding: 10px 20px;
    letter-spacing: 1px;
  }
`;

const UserName = styled.div``;

export default Home;
