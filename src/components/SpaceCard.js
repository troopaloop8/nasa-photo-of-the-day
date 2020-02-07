import React from "react";
import "./space.css";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 20px auto;
  display: flex;
  flex-flow: column nowrap;
  background: rgba(42, 42, 44, 0.856);
  width: 75%;
  border: 1px solid #f1f1f1;
  border-radius: 5px 100px 50px 5px;
  padding: 25px;
  box-shadow: 0 2.8px 2.2px rgba(145, 145, 145, 0.034),
    0 6.7px 5.3px rgba(211, 211, 211, 0.048),
    0 12.5px 10px rgba(163, 163, 163, 0.06),
    0 22.3px 17.9px rgba(197, 197, 197, 0.072),
    0 41.8px 33.4px rgba(161, 161, 161, 0.086),
    0 100px 80px rgba(192, 192, 192, 0.12);
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  max-width: 80%;
  text-align: left;
`;

const MainTitle = styled.h1`
  text-transform: uppercase;
  color: #c6c9eb;
  text-decoration: underline #c4c6d4;
  margin-top: 0;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    border-radius: 5px 100px 50px 5px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column nowrap;
  max-width: 950px;
  padding-right: 15px;
  text-align: left;
  color: #c7caec;
  h2 {
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0 12px;
    font-family: 'Roboto Mono', monospace;
  }
`;

export const SpaceCard = props => {
  console.log(props.spaceData);
  console.log(props.date);

  return (
    <MainContainer>
      <TitleBox>
        <MainTitle>{props.spaceData.title}</MainTitle>
      </TitleBox>
      <ImgBox>
        <img alt={props.spaceData.title} src={props.spaceData.url} />
      </ImgBox>
      <InfoBox>
        <h2>
          {props.spaceData.copyright
            ? `Picture Taken by ${props.spaceData.copyright}`
            : null}
        </h2>
        <p>{props.spaceData.explanation}</p>
        <p>Picture of the day for: {props.spaceData.date}</p>
      </InfoBox>
    </MainContainer>
  );
};
