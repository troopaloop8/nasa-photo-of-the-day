import React, { useState, useEffect } from "react";
import axios from "axios";
import { SpaceCard } from './SpaceCard';
import DateForm from './DateForm';



export default function SpaceInfo() {

    const [ spaceData, setSpaceData ] = useState([]);
    const [ date, setDate ] = useState("2020-02-06");
    

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=hvRXwPZl5Xrlzo7hXWaIMekMfYzkLiq1riGxMHPM&date=${date}`)
        .then(response => {
            const spaceData = response.data;
            console.log(`Nasa Photos: ${spaceData}`);
            setSpaceData(spaceData);
          })
        .catch(error => console.log(error));
    }, [date]);
    console.log(spaceData);
    console.log(date)

    return (
        <div>
            <DateForm date={date} setDate={setDate} />
            <SpaceCard 
            spaceData={spaceData}
            />
            
        </div>
    )
};