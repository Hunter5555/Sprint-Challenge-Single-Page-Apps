import React from "react";
import styled from 'styled-components';
  

const HeaderStyle = styled.div`
display: flex;
justify-content: center;
background-color:skyblue;
color:white;
`
export default function Header() {
  return (
    <HeaderStyle>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </HeaderStyle>
  );
} 