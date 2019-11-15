import React from "react";
import styled from 'styled-components';

const CardStyle = styled.span`
font-size: 12px;
margin: 2.5%;
width: 25em;
padding-left: 2.5%;
background-color: #9ef6ad;
display: inline-block;
border-radius: 2px;
color:  gray;
`

const Title = styled.h3`
flex-direction: row;
justify-content: space-evenly;
`
export default function LocationCard (props) {
  return(    <CardStyle>
    <Title> {props.name} </Title> 
    <p>Name: {props.name}</p>
    <p>Type: {props.status}</p>
    <p>Dimension: {props.dimension}</p>
    <p>Residents: {props.residents}</p>
    </CardStyle>
)
}

