import React, { useRef,useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import SportsDetails from "./SportsDetails";
function AllEvents() {

 const [query,setQuery]=useState('')

  const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2em", // Increase the size of the icon
  };
  const logoStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    fontSize: "1.5em", // Increase the size of the icon
  };
  const searchBarContainerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "70px",
  };
  const searchBarStyle = {
    width: "800px",
    padding: "10px", // Add padding for gap between placeholder and border
    fontSize: "1em",
    boxSizing: "border-box", // Ensure padding doesn't affect the width
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
  };

  const searchIconContainerStyle = {
    marginLeft: "10px",
    cursor: "pointer",
    backgroundColor: "lightgray",
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: "1px solid black",
    // Adjust the margin to center the icon
  };

  const searchIconStyle = {
    fontSize: "1.5em", // Adjust the size of the icon
  };

  const handleSearchClick = () => {
    const searchValue = document.querySelector(".searchbar input").value;
    console.log("Searching for:", searchValue);
    setQuery(searchValue)
   
  };
  const stylebutton = {
    marginTop: "20px",
    padding: "10px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    borderRadius: "30px",
  };

  return (
    <>
      <FontAwesomeIcon icon={faUser} style={iconStyle} />
      <h3 style={logoStyle}>KickIt</h3>
      <div className="searchbar" style={searchBarContainerStyle}>
        <input type="text" placeholder="Search" style={searchBarStyle} />
        <div style={searchIconContainerStyle} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={searchIconStyle} />
        </div>
      </div>
      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button style={stylebutton}>Football</button>
        <button style={stylebutton}>Cricket</button>
        <button style={stylebutton}>Badminton</button>
      </div>

      <SportsDetails name={query} />
     
    </>
  );
}

export default AllEvents;
