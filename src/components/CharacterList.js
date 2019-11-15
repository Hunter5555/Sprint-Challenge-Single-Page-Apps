import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";




const CharacterListStyling = styled.div`
background-color: #F4A89F;
display: flex;
justify-content: center;
`
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Character, setCharacter] = useState([]);
  const [initialCharacter, setInitialCharacter] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response  => {
      setCharacter(response.data.results)

      setInitialCharacter(response.data.results)

      }, [])

      .catch(error => {
          console.log("Error", error);
      })
    }, []);

    const filterName = event => {
      let items = initialCharacter;
      items = items.filter(
        item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
      setCharacter(items);
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  return (
    <CharacterListStyling>
    <SearchForm onSearch={filterName} />
    <section className="character-list">
    {Character.map((character) =>
        <CharacterCard
        key={character.id}
        name={character.name}
        status={character.status}
        image={character.image}
        />
        )}
    </section>
    </CharacterListStyling>
  );
}
