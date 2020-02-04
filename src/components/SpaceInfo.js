import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpaceCard } from './SpaceCard'

export default function SpaceInfo() {

    const [ spaceData, setSpaceData ] = useState([]);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hvRXwPZl5Xrlzo7hXWaIMekMfYzkLiq1riGxMHPM`)
        .then(response => {
            const spaceData = response.data;
            console.log(`Nasa Photos: ${spaceData}`);
            setSpaceData(spaceData);
          })
        .catch(error => console.log(error));
    }, []);
    console.log(spaceData);

    return (
        <div>
            <SpaceCard 
            spaceData={spaceData}
            />
        </div>
    )
};