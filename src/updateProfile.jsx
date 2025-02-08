import React, { useState } from 'react';
import './Profile.css'; // Assuming you have a CSS file for styling

function UpdateProfile() {
  const [file, setFile] = useState(null);
  const[description,setDescription]=useState('')
  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const update = () => {
    const data={
        description:description
    }
   console.log(data)
    const options2={
        method: "PATCH",
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
        
    },
      body: JSON.stringify(data),
    }
    fetch('http://127.0.0.1:8000/KickIt/profileUpdate', options2)
      .then((res) => res.json())
      .then((data) => console.log('hi'))
      .catch((error) => console.error("Error:", error));
  
     const formData = new FormData();
    formData.append('file', file);

     const options = {
     method: "POST",
      credentials: 'include',
      body: formData,
     };

     fetch('http://127.0.0.1:8000/KickIt/profileUpdate', options)
       .then((res) => res.json())
     .then((data) => console.log(data))
     .catch((error) => console.error("Error:", error));
     };
  
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
      <input
    type="text"
    placeholder="Your description"
   
   
    id="description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
    style={{
      width: "100%",
      padding: "10px",
      backgroundColor: "white",
      color: "black",
    }}
  />
        <button onClick={update}>Update</button>
      </div>
    </div>
  );
}

export default UpdateProfile;