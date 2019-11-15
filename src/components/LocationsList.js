import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';
import LocationCard from "./LocationCard";
import SearchForm from "./SearchForm";




const LocationListStyling = styled.div`
background-color: #F4A89F;
display: flex;
justify-content: center;
`
export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [Location, setLocation] = useState([]);
  const [initialLocation, setInitialLocation] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/location/")
    .then(response  => {
      setLocation(response.data.results)

      setInitialLocation(response.data.results)

      }, [])

      .catch(error => {
          console.log("Error", error);
      })
    }, []);

    const filterName = event => {
      let items = initialLocation;
      items = items.filter(
        item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
      setLocation(items);
    }
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


}