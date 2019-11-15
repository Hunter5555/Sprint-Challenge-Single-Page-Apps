import React from "react";
import styled from 'styled-components';

const HomePage = styled.div`
display: flex;
justify-content: center;
background-color:skyblue;
padding: 5rem;
color:white;
`
export default function WelcomePage() {
  return (
    <HomePage>
    <section className="welcome-page">
      <header>
        <h1>Welcome to Dimension 35-C!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
    </HomePage>
  );
}
