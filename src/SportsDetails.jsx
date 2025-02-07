import PropTypes from "prop-types";
function SportsDetails(props) {
  const footballStyle = {
    width: "800px", // Same width as search bar
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
  };

  return (
    <>
      <div
        className="sports"
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div className={props.name} style={footballStyle}>
          <h4>{props.name}:</h4>
          <div style={eventDetailsStyle}>
            <span>Venue: </span>
            <span>Time: </span>
            <span>Player Required: </span>
          </div>
        </div>
      </div>
    </>
  );
}

SportsDetails.propTypes = {
  name: PropTypes.string.isRequired
};

export default SportsDetails;
