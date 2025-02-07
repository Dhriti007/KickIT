import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import SportsDetails from "./SportsDetails";
function AllEvents() {
  const iconStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    fontSize: "2em", // Increase the size of the icon
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
    // Add your search logic here
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
  const stylebuttonNew = {
    width: "100%",
    marginTop: "20px",
    padding: "10px 20px",
    display: "flex", // Add this line
    flexDirection: "row",
    alignItems: "center",
    gap: "50px",
    justifyContent: "center",
    borderRadius: "30px",
  };
  const stylebuttonNew2 = {
    width: "100%",
    marginTop: "20px",
    padding: "10px 20px",
    display: "flex", // Add this line
    flexDirection: "row",
    alignItems: "center",
    gap: "50px",
    justifyContent: "center",
    borderRadius: "30px",
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
  };
  const ClickSports = () => {
    console.log("Sports Button clicked!");
  };
  const NewButton = () => {
    console.log("New Button clicked!");
  };
  return (
    <>
      <FontAwesomeIcon icon={faUser} style={iconStyle} />

      <div className="searchbar" style={searchBarContainerStyle}>
        <input type="text" placeholder="Search" style={searchBarStyle} />
        <div style={searchIconContainerStyle} onClick={handleSearchClick}>
          <FontAwesomeIcon icon={faMagnifyingGlass} style={searchIconStyle} />
        </div>
      </div>
      <div className="newbutton" style={stylebuttonNew}>
        <button style={stylebuttonNew2} onClick={NewButton}>
          Club
        </button>
        <button style={stylebuttonNew2} onClick={NewButton}>
          Location
        </button>
      </div>

      <div
        className="buttons"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button style={stylebutton} onClick={ClickSports}>
          Football
        </button>
        <button style={stylebutton} onClick={ClickSports}>
          Cricket
        </button>
        <button style={stylebutton} onClick={ClickSports}>
          Badminton
        </button>
      </div>

      <SportsDetails name="football" />
      <SportsDetails name="Cricker" />
      <SportsDetails name="Badminton" />
    </>
  );
}

export default AllEvents;
