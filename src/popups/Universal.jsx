import React, {useEffect, useMemo} from 'react'
import styled from 'styled-components'

const Universal = ({Token, setToken, Modal, setModal}) => {

  const handleLogout = () => {
    
  }



  return (
    <>
    <Pop>
        <Modal>
            <PopTop><h1>Are You Sure want to Logout?</h1></PopTop>
            <PopOptions>
                <button onClick={handleLogout}>Logout</button>
            </PopOptions>
        </Modal>
    </Pop>
    </>
  )

}



const Pop = styled.div`
     /* Hidden by default */

  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: #000000c3; /* Black w/ opacity */
`
const PopTop = styled.div`

    h1{
        font-size: 30px;
    }
`
const PopOptions = styled.div`
    width: 400px;
    display: flex;
    gap: 20px;
    height: 40px;
    margin-top: 30px;
    button {
        background-color: #288146;
        padding: 0px 24px;
        font-size: 15px;
        letter-spacing: 1px;
    }
`
const Modal = styled.div`
  background-color: black;
  margin: auto;
  padding: 20px;
  width: 80%;
  max-width: 600px;
  max-height: 200px;
`



export default Universal