import React from "react";
import SpaceInfo from './components/SpaceInfo'
import "./App.css";
import styled from "styled-components";

const Rocket = styled.img`
    height: 30px;
    position: absolute;
    top: 30px;
    margin: 0 10px;

    
`;


function App() {
 
  return (
    <div className="App">
      <h1>NASA Photo of the Day<Rocket src='https://i.dlpng.com/static/png/1341968-rocket-png-file-a-rocket-png-512_512_preview.png' /></h1>
      <SpaceInfo />
    </div>
  );
}

export default App;
