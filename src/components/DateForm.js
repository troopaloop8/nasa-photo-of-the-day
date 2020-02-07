import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DateSelectorBox = styled.div`
    border: 1px solid grey;
    width: 50%;
    margin: 0 auto;
    border-radius: 5px 50px 25px 5px;
    input {
        height: 110%;
        width: 95px;
        font-size: 16px;
        border-radius: 5px 30px 15px 5px;
        border: 1px solid #282c34;
    }
    h2 {
        font-size: 20px;
    }
    background: rgba(42, 42, 44, 0.856);
    box-shadow: 0 0.8px 1.2px rgba(145, 145, 145, 0.034),
    0 1.7px 1.3px rgba(211, 211, 211, 0.048),
    0 3.5px 2.5px rgba(163, 163, 163, 0.06),
    0 5.3px 3.9px rgba(197, 197, 197, 0.072),
    0 10.8px 6.4px rgba(161, 161, 161, 0.086);
    0 25px 20px rgba(192, 192, 192, 0.12);
`;

export default function DateForm(props){
    function handleChange(date) {
       function convertDate(date = new Date()) {
           let year = date.getFullYear();
           let month = date.getMonth() + 1;
           let day = date.getDate(); 
        
           if(month < 10) month = "0" + month;
           if(day < 10) day = "0" + day;
        
           return `${year}-${month}-${day}`;
        }
        props.setDate(convertDate(date))
    }
    return(
        <DateSelectorBox>
        <h2>Select date of picture: <DatePicker 
        selected = {new Date(props.date)}
        onChange = {handleChange}
        /></h2>
        </DateSelectorBox>
    )
};