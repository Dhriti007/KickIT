import React, { useRef, useState, useEffect } from "react";

import PropTypes from "prop-types";
function SportsDetails(props) {
  const [activity, setActivity] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [data, setData] = useState('');
  const prevUrlRef = useRef('');
  let x=0
  console.log('Test Case')
  useEffect(() => {

  console.log(props)
    const url=props.name===''?'':`?activity=${props.name}`
    console.log(url)
  
    const options = {
      method: "GET",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      }
    }
    fetch(`http://127.0.0.1:8000/KickIt/home${url}`, options)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((error) => console.log('here we go'));
  })

  x++



  const footballStyle = {
    width: "1000px", // Same width as search bar
    padding: "10px",
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
    marginTop: "20px",
    boxSizing: "border-box",
  };
  const eventDetailsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    fontSize: "20px" 
  };

  const check = () => {
    return data !== '';
  }

  return (
    <>
      <h1>
        {data && Object.keys(data).map((key, i) => (
          <div
          className="sports" key={i}
          style={{ display: "-moz-initial", justifyContent: "center", marginTop: "20px" }}
        >
          <div className={props.name} style={footballStyle}>
          <h4 key={i}>{data[key].activity}:</h4>
          <div style={eventDetailsStyle}>
            <span>Venue: {data[key].venue}</span>
            <span>Time: {data[key].time}</span>
            <span>Player Required: </span>
 z           </div>
          </div>
        </div>
        ))}
      </h1>
      
    </>
  );
}

export default SportsDetails;