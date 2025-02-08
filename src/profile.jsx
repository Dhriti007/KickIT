import React, { useState,useEffect } from 'react';
import './Profile.css'; // Assuming you have a CSS file for styling
const a='./default.png'
function Profile() {
  const [user, setUser] = useState({
    name: 'John Doe',
    description: 'A passionate sports enthusiast.',
    profilePicture: '/messi.jpg', // Placeholder image URL
  });

 
  useEffect(() => {
    const options = {
        method:"GET",
        credentials: 'include',
        
      
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          
        }
        
      };
  
    fetch('http://127.0.0.1:8000/KickIt/profile/', options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        const user=data.email
        console.log(data.user.image)
        setUser({
           name:data.user.email,
           description:data.user.description,
           profilePicture:data.user.image
        })
      })
      .catch((error) => console.error("Error:", error));

      
},[]);


  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={user.profilePicture} alt="Profile" />
      </div>
      <div className="profile-details">
        <h2>{user.name}</h2>
        <p>{user.description}</p>
      </div>
    </div>
  );
}

export default Profile;