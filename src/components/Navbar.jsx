import React, { Component } from 'react';
import { FaInstagram, FaUser, FaHeartO, FaCompass, FaSearch } from 'react-icons/lib/fa';
import styled from 'styled-components';

const OuterNavDiv = styled.div`
  background-color: white;
  display: flex;
  /* justify-content: center; */
  max-width: 1010px;
  align-items: center;
  padding: 26px 40px;
  width: 100%;
  height: 77px;
  border-bottom: 1px solid rgba(0,0,0,.0975);
`

const InnerNavDiv = styled.div`
display: flex;
height: 77px;
justify-content: center;
max-width: 1010px;
padding: 26px 40px;
transition: height .2s ease-in-out;
width: 100%;
align-items: center;
box-sizing: border-box;
flex-shrink: 0;
margin: 0;
position: relative;
`

const LogoDiv = styled.div`
display: flex;
flex: 1 999 0%;
min-width: 40px;
align-items: stretch;
`

class Navbar extends Component{
  render(){
    return (
      <OuterNavDiv>
      <InnerNavDiv>
        <h3><FaInstagram /> | Instaclone</h3>
        <FaSearch/><input type="text"/>
        <div>
          <FaCompass />
          <FaHeartO />
          <FaUser />
        </div>
      </InnerNavDiv>
      </OuterNavDiv>
    );
  }
}

export default Navbar