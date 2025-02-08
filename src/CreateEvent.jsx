
import React, { useRef,useState } from "react";


function CreateEvent() {
  const [activity, setActivity] = useState('');
  const [venue, setVenue] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const create = (event) => {
    event.preventDefault();
    const eventData = {
      activity,
      venue,
      date,
      time,
    };
    const options = {
      method: "POST",
      credentials: 'include',
      
    
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        
      },
      body: JSON.stringify(eventData),
    };

    fetch(`http://127.0.0.1:8000/KickIt/createEvent`, options)
      .then((res) =>res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('here we go'));
  };
 
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="logo">
        <h4 style={{ margin: 0, marginBottom: "30px", marginTop: "10px" }}>
          Kick IT
        </h4>
      </div>
      <div
        className="box"
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "white",
          border: "1px solid black",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          gap: "10px",
        }}
       
      >
           
        <h4 style={{ margin: 0, marginTop: "10px" }}>Create Event</h4>
        <form onSubmit={create}>
  <input
    type="text"
    placeholder="Enter Activity"
    value={activity}
    onChange={(e) => setActivity(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      backgroundColor: "white",
      color: "black",
    }}
  />
  <input
    type="text"
    placeholder="Enter Venue"
   
   
    id="venue"
    value={venue}
    onChange={(e) => setVenue(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      backgroundColor: "white",
      color: "black",
    }}
  />

  {/* Date Picker */}
  <div className="custom-input">
    <input type="date" id="date" ref={dateRef} className="hidden-date-input" value={date}
              onChange={(e) => setDate(e.target.value)}/>
    <button
      type="button"
      className="icon-button"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      onClick={() => dateRef.current.showPicker()}
    >
      📅
    </button>
  </div>

  {/* Time Picker */}
  <div className="custom-input">
    
    <input type="time" id="time"  value={time}
              onChange={(e) => setTime(e.target.value)} ref={timeRef} className="hidden-date-input" />
    
    <button
      type="button"
      className="icon-button"
      onClick={() => timeRef.current.showPicker()}
    >
      ⏰
    </button>
  </div>

  <button
    type="submit"
    style={{
      padding: "10px 20px",
      marginTop: "10px",
    }}
  >
    Submit
  </button>
</form>
</div>
</div>
  );
}

export default CreateEvent;
